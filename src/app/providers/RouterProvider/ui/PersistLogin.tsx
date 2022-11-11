import { useEffect, useRef, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import jwtDecode from "jwt-decode";

import {
  refreshData,
  selectCurrentToken,
  useRefreshMutation,
} from "features/auth/auth-by-username/model";

import { IJWTDecode } from "entities/User";
import { userActions } from "entities/User/model/slices/userSlice";

import usePersist from "shared/lib/hooks/usePersist";
import { APP_ROUTES } from "shared/config/routes";

export const PersistLogin = () => {
  const dispatch = useDispatch();
  const [persist] = usePersist();
  const token = useSelector(selectCurrentToken);
  const effectRan = useRef(false);

  const [trueSuccess, setTrueSuccess] = useState(false);

  const [refresh, { isUninitialized, isLoading, isSuccess, isError }] =
    useRefreshMutation();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        const res = (await refresh({})) as refreshData;

        if (res.data) {
          const { accessToken } = res.data;
          let isManager = false;
          let isAdmin = false;
          let status = "Employee";

          const decoded: IJWTDecode = jwtDecode(accessToken);
          const { email, roles, firstName, lastName } = decoded.UserInfo;

          isManager = roles.includes("Manager");
          isAdmin = roles.includes("Admin");

          if (isManager) status = "Manager";
          if (isAdmin) status = "Admin";

          const userData = {
            email,
            roles,
            firstName,
            lastName,
            status,
            isAdmin,
            isManager,
          };

          dispatch(userActions.setUserData(userData));
        }
        setTrueSuccess(true);
      } catch (err) {
        console.error(err);
      }
    };

    if (!token && persist) verifyRefreshToken();

    return () => {
      effectRan.current = true;
    };
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  }

  if (isError || (!persist && !token)) {
    return <Navigate to={APP_ROUTES.LOGIN} />;
  }

  if (
    (isSuccess && trueSuccess) ||
    (token && isUninitialized) ||
    (!persist && token)
  ) {
    return <Outlet />;
  }

  return <></>;
};

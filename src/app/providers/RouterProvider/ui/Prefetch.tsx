import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

export const Prefetch = () => {
  useEffect(() => {
    console.log("subscribe");
    return () => {
      console.log("unsubscribe");
    };
  }, []);
  return <Outlet />;
};

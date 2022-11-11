import { useEffect, useState } from "react";

const PERSIST_KEY = "persist";

const usePersist: () => [
  boolean,
  (value: ((prevState: boolean) => boolean) | boolean) => void
] = () => {
  const initPersist = !!JSON.parse(
    localStorage.getItem(PERSIST_KEY) || "false"
  );
  const [persist, setPersist] = useState<boolean>(initPersist);

  useEffect(() => {
    localStorage.setItem(PERSIST_KEY, JSON.stringify(persist));
  }, [persist]);

  return [persist, setPersist];
};

export default usePersist;

import { useAppSelector } from "./hookRedux";

export const useAuth = () => {
  const { isLogin, isLoading, error } = useAppSelector(
    (state) => state.authState
  );

  return { isLogin, isLoading, error };
};

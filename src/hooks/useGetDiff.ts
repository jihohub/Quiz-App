import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { getDiff } from "../slices/timeSlice";

const useGetDiff = (): [number | null] => {
  const dispatch = useDispatch<AppDispatch>();
  const diff = useSelector((state: RootState) => state.time.diff);

  useEffect(() => {
    dispatch(getDiff());
  }, []);

  return [diff];
};

export default useGetDiff;

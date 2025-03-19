import { useQuery } from "@tanstack/react-query";
import apiUsers from "../API/apiUsers";
import { useDispatch } from "react-redux";
import { setPage, setUsers } from "../store/Slices/UsersSlice";
import { useEffect } from "react";

function useUsersQuery(currentPage = 1) {
  const dispatch = useDispatch();

  const {data: getUsers, isPending: getUsersPending, error: getUsersError, isSuccess} = useQuery({
    queryKey: ["users", currentPage],
    queryFn: () => apiUsers(currentPage,  10),
    refetchOnWindowFocus: false,
  })

  useEffect(() => {
    if (isSuccess && getUsers) {
      dispatch(setUsers(getUsers));
    }
  }, [isSuccess, getUsers, dispatch]);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  return {getUsers, getUsersPending, getUsersError, handlePageChange}
}

export default useUsersQuery;
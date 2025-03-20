import { useSelector } from 'react-redux';
import Table from '../components/Table/Table';
import useUsersQuery from '../hooks/useUsersQuery';

function DashBoard() {
  const { currentPage, usersPerPage } = useSelector(state => state.users);
  const users = useSelector((state) => state.users.users);
  const {getUsersPending, getUsersError} = useUsersQuery();

  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const currentUsers = users.slice(startIndex, endIndex);

  return (
    <>
      <Table data={currentUsers} loading={getUsersPending} error={getUsersError} />
    </>
  );
}

export default DashBoard;
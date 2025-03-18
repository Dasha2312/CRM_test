import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

function Layout() {
  return (
    <>
      <Header />
      <div className='main'>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
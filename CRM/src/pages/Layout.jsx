import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

function Layout() {
  return (
    <>
      <Header />
      <div className='main pb-[60px]'>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
import { Link, Outlet } from 'react-router-dom';

export const TopMenu = () => {
  return (
    <>
      <nav className="navigation">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/movies">
          <button>Movies</button>
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

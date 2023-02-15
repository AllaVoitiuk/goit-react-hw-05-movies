import { Outlet, useLocation } from 'react-router-dom';
import { StyledHeader, StyledList, StyledLink } from './Layout.styled';

const Layout = () => {
  const location = useLocation();
  return (
    <>
      {!location.pathname.includes('details') && (
        <StyledHeader>
          <nav>
            <StyledList>
              <li>
                <StyledLink to="/">Home</StyledLink>
              </li>
              <li>
                <StyledLink to="movies">Movies</StyledLink>
              </li>
            </StyledList>
          </nav>
        </StyledHeader>
      )}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

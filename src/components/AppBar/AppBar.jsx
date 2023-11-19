import {
  Nav,
  Link,
  RegIcon,
  LogInIcon,
  HomeIcon,
  ContactIcon,
  Container,
} from './AppBar.styled';

import { Spiner } from 'pages/ContactList/ContactList.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';

export const AppBar = () => {
  const { isLoaggedIn, isLoading } = useSelector(state => state.auth);

  return (
    <header>
      {isLoading && <Spiner />}

      <Container>
        <Nav>
          <div>
            <Link to="/">
              <HomeIcon />
              Home
            </Link>
            {isLoaggedIn && (
              <Link to="/contacts">
                <ContactIcon />
                Contacts
              </Link>
            )}
          </div>
          <div>
            {isLoaggedIn ? (
              <UserMenu />
            ) : (
              <>
                <Link to="/register">
                  Register
                  <RegIcon />
                </Link>
                <Link to="/login">
                  Log in
                  <LogInIcon />
                </Link>
              </>
            )}
          </div>
        </Nav>
      </Container>
    </header>
  );
};

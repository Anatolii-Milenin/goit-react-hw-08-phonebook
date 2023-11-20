import {
  Title,
  HomeUserGroup,
  Wrap,
  UnderTitle,
  HomeLink,
  Section,
  HomePhoneIcon,
  HomeContactList,
} from './Home.styled';

import { useSelector } from 'react-redux';

export default function Home() {
  const { isLoaggedIn } = useSelector(state => state.auth);

  return (
    <Section>
      <Title>Phone contact book</Title>

      <Wrap>
        <HomePhoneIcon />
        <HomeUserGroup />
        <HomeContactList />
      </Wrap>

      {!isLoaggedIn ? (
        <UnderTitle>
          Please
          <HomeLink to="/register">Register</HomeLink>
          or
          <HomeLink to="/login">Log in</HomeLink>
          to be able to use your PhoneBook
        </UnderTitle>
      ) : (
        <UnderTitle>
          Go to the tab
          <HomeLink to="/contacts">Contacts</HomeLink>
          and manage your contacts
        </UnderTitle>
      )}
    </Section>
  );
}

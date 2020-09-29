import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Profile } from './styles';
import logo from '../../assets/radio.svg';
import Notifications from '../Notifications';

const Header = () => {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Logo" />
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <Notifications />
        <aside>
          <Profile>
            <div>
              <strong>Seu Menino</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
          </Profile>
          <img
            src="https://api.adorable.io/avatars/50/meuavatardefault.png"
            alt="João"
          />
        </aside>
      </Content>
    </Container>
  );
};

export default Header;

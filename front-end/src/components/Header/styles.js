import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 1.875rem;
`;
export const Content = styled.div`
  height: 4.06rem;
  max-width: 56.25rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 1.25rem;
      padding-right: 1.25rem;
      border-right: 1px solid ${darken(0.1, '#fff')};
    }

    a {
      font-weight: bold;
      color: #011a27;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;
export const Profile = styled.div`
  margin-left: 1.25rem;
  padding-left: 1.25rem;
  border-left: 1px solid ${darken(0.1, '#fff')};

  div {
    text-align: right;
    margin-right: 0.625rem;

    strong {
      display: block;
      color: ${darken(0.1, '#fff')};
    }

    a {
      display: block;
      margin-top: 0.125rem;
      font-size: 0.75rem;
      color: #063852;
    }
  }
  img {
    height: 2rem;
    border-radius: 50%;
  }
`;

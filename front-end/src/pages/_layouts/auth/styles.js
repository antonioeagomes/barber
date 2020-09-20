import { darken } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #063852, #011a27);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 19.675rem;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 1.875rem;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 0.25rem;
      height: 2.75rem;
      padding: 0 0.925rem;
      color: #e6df44;
      margin: 0 0 0.625rem;
    }
    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }
  button {
    margin: 0.3125rem 0 0;
    height: 2.75rem;
    background: #f0810f;
    font-weight: bold;
    color: #e6df44;
    border: 0;
    border-radius: 0.25rem;
    font-size: 1rem;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#f0810f')};
    }
  }

  a {
    color: #e6df44;
    margin-top: 0.925rem;
    font-size: 1rem;
    opacity: 0.8;

    a:hover {
      opacity: 1;
    }
  }
`;

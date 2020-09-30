import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 37.5rem;
  margin: 3.125rem auto;

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

    span {
      color: #f5194a;
      margin-bottom: 0.625rem;
      align-self: flex-start;
      font-weight: bold;
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

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 0.625rem 0 0.75rem;
    }
  }

  > button {
    width: 100%;
    margin: 0.625rem 0 0;
    height: 2.75rem;
    background: #e6df44;
    font-weight: bold;
    color: #f0810f;
    border: 0;
    border-radius: 0.25rem;
    font-size: 1rem;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, '#e6df44')};
    }
  }
`;

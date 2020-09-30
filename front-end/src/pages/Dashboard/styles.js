import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    max-height: 37.5rem;
    margin: 3.125rem auto;
    display:flex;
    flex-direction: column;

    header {
        display: flex;
        align-self: center;
        align-items: center;

        button {
            border: 0;
            background: none;
        }

        strong {
            color: #e6df44;
            font-size: 1.5rem;
            margin: 0 0.925;
        }
    }

    ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 0.925rem;
        margin-top: 1.875rem;
    }
`;

export const Time = styled.li`
    padding: 1.25rem;
    border-radius: 0.25rem;
    background-color: #e6df44;
    opacity: ${(props) => (props.past ? 0.6 : 1)};

    strong {
        display: block;
        color: ${(props) => (props.available ? '#011a27' : '#999')};
        font-size: 1.25rem;
        font-weight: normal;
    }

    span {
        display: block;
        margin-top: 0.25rem;
        color: ${(props) => (props.available ? '#063852' : '#999')};
    }
`;
import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  position: relative;
  border: 0;

  ${(props) =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        width: 0.5rem;
        height: 0.5rem;
        background: #e6df44;
        content: '';
        border-radius: 50%;
      }
    `}
`;

export const NotificationList = styled.div`
  position: absolute;
  left: calc(50% - 8.125rem);
  width: 16.5rem;
  top: calc(100% + 1.875rem);
  border-radius: 0.25rem;
  padding: 0.925rem 0.15rem;
  background: #063852;
  display: ${(props) => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 1.25rem);
    top: -1.25rem;
    width: 0;
    height: 0;
    border-left: 1.25rem solid transparent;
    border-right: 1.25rem solid transparent;
    border-bottom: 1.25rem solid #063852;
  }
`;

export const Notification = styled.div`
  color: #e6df44;

  & + div {
    margin-top: 0.9375;
    padding-top: 0.9375;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 0.8125rem;
    line-height: 1.125rem;
  }

  time {
    font-size: 0.75rem;
    opacity: 0.6;
    margin-right: 0.3125rem;
    margin-bottom: 0.3125rem;
    display: block;
  }

  button {
    font-size: 0.75rem;
    border: 0;
    background: none;
    color: ${lighten(0.2, '#011a27')};
  }

  ${(props) =>
    props.unread &&
    css`
      &::after {
        content: '';
        display: inline-block;
        width: 0.5rem;
        height: 0.5rem;
        background: #e6df44;
        border-radius: 50%;
        margin-bottom: 0.225rem;
        margin-left: 0.625rem;
      }
    `}
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 16.25rem;
  padding: 0.3rem 0.925rem;
`;

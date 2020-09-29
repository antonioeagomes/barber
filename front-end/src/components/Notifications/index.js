import React, { useEffect, useMemo, useState } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import api from '../../services/api';
import {
  Container,
  Badge,
  NotificationList,
  Notification,
  Scroll,
} from './styles';

const Notifications = () => {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const hasUnread = useMemo(() => notifications.find((n) => !n.read));
  const handleToggleVisible = () => {
    setVisible(!visible);
  };
  async function markAsRead(id) {
    await api.put(`notifications/${id}`);

    setNotifications(
      !!notifications.map((n) =>
        n._id === id ? { ...n, read: true } : { ...n }
      ),
      [notifications]
    );
  }
  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('notifications');

      const data = response.data.map((notification) => ({
        ...notification,
        timeDistance: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          { addSuffix: true, locale: ptBr }
        ),
      }));

      setNotifications(data);
    }
    loadNotifications();
  }, []);
  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
        <MdNotifications color="#f0810f" size={20} />
      </Badge>
      <NotificationList visible={visible}>
        <Scroll>
          {notifications.map((n) => (
            <Notification key={n._id} unread={!n.read}>
              <p>{n.content}</p>
              <time>n.timeDistance</time>
              {!n.read && (
                <button type="button" onClick={() => markAsRead(n._id)}>
                  Mark as read
                </button>
              )}
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
};
export default Notifications;

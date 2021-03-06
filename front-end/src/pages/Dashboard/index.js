import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Container, Time } from './styles';
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  isEqual,
  parseISO,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import ptBr from 'date-fns/locale/pt-BR';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const range = [8, 9, 10, 11, 12, 14, 15, 16, 17, 18];

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [schedulle, setSchedulle] = useState([]);

  const dateFormated = useMemo(
    () => format(date, "d 'de' MMMM", { locale: ptBr }),
    [date]
  );

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('schedule', { params: { date } });
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const data = range.map((hour) => {
        const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);
        const compareDate = utcToZonedTime(checkDate, timezone);
        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.find((a) =>
            isEqual(parseISO(a.date), compareDate)
          ),
        };
      });
      setSchedulle(data);
    }
    loadSchedule();
  }, [date]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={36} color={'#e6df44'} />
        </button>
        <strong>{dateFormated}</strong>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} color={'#e6df44'} />
        </button>
      </header>
      <ul>
        {schedulle.map((time) => (
          <Time key={time.time} past={time.past} available={!time.appointment}>
            <strong>{time.time}</strong>
            <span>
              {time.appointment ? time.appointment.user.name : 'Available'}
            </span>
          </Time>
        ))}
      </ul>
    </Container>
  );
};

export default Dashboard;

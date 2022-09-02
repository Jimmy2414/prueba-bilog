import React from 'react';
import { Modal } from '@material-ui/core';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import { formatfn } from './events';
import locales from 'date-fns/locale/en-US';
import { DatePicker } from '@material-ui/pickers';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAgenda } from '../Redux/action';
import s from '../Styles/Calendar.module.css';
export default function Calendario() {
  const dispatch = useDispatch();
  const agenda = useSelector(state => state.Agenda);
  const [modal, setModal] = useState(false);
  const [date, setDate] = useState();
  const [fechaSelect, setFechaSelect] = useState(new Date());

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });
  useEffect(() => {
    dispatch(getAgenda());
  }, []);
  useEffect(() => {
    setDate(formatfn(agenda));
  }, [agenda]);
  const bodyModal = (
    <div className={s.inputDate}>
      <DatePicker value={fechaSelect} onChange={setFechaSelect} />
    </div>
  );
  function click(date) {
    setModal(!modal);
    setFechaSelect(new Date(date.start));
  }

  return (
    <div>
      <Calendar
        events={date}
        localizer={localizer}
        onSelectEvent={date => click(date)}
        style={{ height: 500, margin: '50px' }}
      />
      <div>
        <Modal open={modal} onClose={click}>
          {bodyModal}
        </Modal>
      </div>

      <div> </div>
    </div>
  );
}

import React from 'react';

import { Link } from 'react-router-dom';
import s from '../Styles/Landing.module.css';
export default function Landing() {
  return (
    <div>
      <Link to="/Calendar">
        {' '}
        <button className={s.btn} variant="contained">
          Check Your Shedule
        </button>
      </Link>
    </div>
  );
}

import React from 'react';
import './Eventss.css';
import EventsData from '../../data/Eventss';

function Events({ course, day, time, venue, instructor }) {
  return (
    <div className="main-events">
      <div className="course-titte">
        <h3>{course}</h3>
      </div>
      <div className="event-f-detais">
        <table className="event-detais">
          <tbody>
            <tr className="header-event">
              <th>{day}</th>
              <th>{time}</th>
              <th>{venue}</th>
              <th>{instructor}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TableTest() {
  return (
    <section>
      <div className="detai-container">
        {
          EventsData.map((event, i) => (
            <Events
              key={i}
              course={event.course}
              day={event.day}
              time={event.time}
              venue={event.venue}
              instructor={event.instructor}
            />
          ))
        }
      </div>
    </section>
  );
}

export default TableTest;

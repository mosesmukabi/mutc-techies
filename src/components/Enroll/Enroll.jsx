import React from "react";
import "./Enroll.css";
import Tittle from "../Tittle/Tittle";
import EventsData from "../../data/Eventss";

function Enroll() {
  return (
    <div>
      <Tittle mainTittle="Enroll Now" />
      <form className="enroll-from">
        <div className="form-detis">
          <label htmlFor="fname" className="form-group">
            Full Name:
          </label>
          <input
            type="text"
            className="from-input"
            placeholder="eg John doe"
            required
          />
        </div>
        <div className="form-detis">
          <label htmlFor="email" className="form-group">
            Email:
          </label>
          <input
            type="email"
            className="from-input"
            placeholder="eg example@gmail.com"
            required
          />
        </div>
        <div className="form-detis">
          <label htmlFor="course" className="form-group">
            Current course:
          </label>
          <input
            type="text"
            className="from-input"
            placeholder="eg computer science"
            required
          />
        </div>
        <div className="form-detis">
          <label htmlFor="year" className="form-group">
            Year of study:
          </label>
          <input
            type="number"
            className="from-input"
            placeholder="eg 3"
            required
          />
        </div>
        <div className="form-detis">
          <label htmlFor="email" className="form-group">
            Full Name:
          </label>
          <input
            type="email"
            className="from-input"
            placeholder="eg example@gmail.com"
            required
          />
        </div>
        <div className="form-detis">
          <label htmlFor="track" id="track" className="form-group">
            choose a Track:
          </label>
          <select className="form-inpu" id="track">
            <option value="">--choose a track--</option>
            {EventsData.map((Track, i) => (
              <option value={Track.course}>{Track.course}</option>
            ))}
          </select>
        </div>
        <button className="track-submit-btn">submit</button>
      </form>
    </div>
  );
}

export default Enroll;

import React from 'react';
import './Tracks.css';
import tracks from '../../data/tracks';
import webdev from '../../assets/webdev.mp4'


function TracksCards({ header, tracksvideo, trackstext}) {
  return (
    <div className="tack-card">
        <div className="header">
    <h2 className="track-header">{header}</h2>
    </div>
    <div className="tracks-cards">
      <div className="tracks-video">
        <video src={tracksvideo} alt={header} controls autoPlay muted loop></video>
      </div>
      <div className="track-cintent-section">
      <div className="Leader-details">
        <p className="track-text">{trackstext}</p>
      </div>
      </div>
    </div>
    </div>
  );
}


function Tracksdetais() {
    return (
      <section>
        <div className="tracks-container">
        {


        tracks.map((track, i) =>(
            <TracksCards
            key={i}
            header={track.header}
            tracksvideo={track.tracksvideo}
            trackstext={track.trackstext}

            />
            

        )
    )
       }



        </div>
      </section>
 )
}
export default Tracksdetais

  // <TracksCards
            // header="web design"
            // tracksvideo={webdev}
            // trackstext="Students who pursue the Web Development track will gain comprehensive knowledge in            building dynamic and responsive websites. They will learn the fundamentals of front-end development            using HTML, CSS, and JavaScript, as well as back-end development with technologies such as Node.js,            Express, and databases. Through hands-on projects and collaborative coding sessions, students will            develop the skills to create both the client-side and server-side of web applications. By the end of            the track, students will be capable of designing, developing, and deploying full-stack web            applications, equipped with the expertise to build robust and scalable websites."

            // />
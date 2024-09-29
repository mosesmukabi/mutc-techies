// import moses from '../../assets/image8.jpeg'
import React from 'react';
import './Leadership.css';
import Leaders from '../../data/Leadership';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';


function Leadershipcards({ Leaderimg, LeaderName, Heading1, Heading2, Responsibility, Biography, SocialMedia }) {
  return (
    <div className="Leadership-cards">
      <div className="Leaders-details">
        <img src={Leaderimg} alt={LeaderName} />
      </div>
      <div className="moses-section">
      <h2 className="leader-name">{LeaderName}</h2>
      <div className="Leader-details">
        <h4 className='headingR'>{Heading1}</h4>
        <p className="Responsibility-text">{Responsibility}</p>
        <h4 className='headingB'>{Heading2}</h4>
        <p className="Biography-text">{Biography}</p>
      </div>
      <div className="social-links">
          <ul>
            {SocialMedia?.LinkedIn && (
              <li>
                <a href={SocialMedia.LinkedIn} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} />
                </a>
              </li>
            )}
            {SocialMedia?.Twitter && (
              <li>
                <a href={SocialMedia.Twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={24} />
                </a>
              </li>
            )}
            {SocialMedia?.Facebook && (
              <li>
                <a href={SocialMedia.Facebook} target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={24} />
                </a>
              </li>
            )}
            {SocialMedia?.Instagram && (
              <li>
                <a href={SocialMedia.Instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={24} />
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

function LeadershipDetais() {
  return (
    <section>
      <div className="raeder-container">
      
      {
        
            Leaders.map((leadership, i)=>(
                <Leadershipcards
                key={i}
                Leaderimg={leadership.Leaderimg}
                LeaderName={leadership.LeaderName}
                Heading1={leadership.Heading1}
                Responsibility={leadership.Responsibility}
                Heading2={leadership.Heading2}
                Biography={leadership.Biography}
                SocialMedia={leadership.SocialMedia}

                />
            ))
         }
    </div>

    {/* <div className="Leadership-container">
      <Leadershipcards
        Leaderimg={moses}
        LeaderName="Moses Mukabi"
        Heading1="Responsibility"
        Responsibility="Taking care of the children at home and other responsibilities."
        Heading2="Biography"
        Biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum."
        SocialMedia={
          <div className="social-media-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        }
      />
    </div> */}
    
    </section>
  );
}

export default LeadershipDetais;


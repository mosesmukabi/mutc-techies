import "./Testimonials.css";
import testmonies from "../../data/testmonies";
import Carousel from "react-elastic-carousel";

function Testimonialscards({ studentAvatar, studentName, title, text }) {
  return (
    <div className="Testimonials-cards">
      <div className="student-Testimonials-details">
        <img src={studentAvatar} alt={studentName} />
        <h4 className="student-name">{studentName}</h4>
      </div>
      <h4 className="testmony-tittle">{title}</h4>
      <p className="testmony-text">{text}</p>
    </div>
  );
}

function Testimonials() {
  return (
    <section>
      <div className="testmonials-container">
        <Carousel enableAutoPlay={true} itemsToShow={1} autoPlaySpeed="5000">
          {testmonies.map((testmony, i) => (
            <Testimonialscards
              key={i}
              studentAvatar={testmony.studentAvatar}
              studentName={testmony.studentName}
              title={testmony.title}
              text={testmony.text}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonials;

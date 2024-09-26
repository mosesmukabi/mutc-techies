import "./About.css"
import mission from '../../assets/mission.png'
import vision from '../../assets/vision.png'
import objectives from '../../assets/objectives.png'

function Aboutcard({thumbnail, tittle,passage}) {
  return(
    <div className="about-card">
        <div className="about-image">
           <img src={thumbnail} alt={tittle} />
        </div>
        <div className="about-details">
          <h3 className="about-details-tittle">{tittle}</h3>
          <p className="about-details-description">{passage}</p>
        </div>
    </div>
  )

}


function About() {
  return (
    <section className='About-section'>
      

      <div className="about-container">
        <Aboutcard thumbnail={mission} tittle="mission" passage="Deliver scalable, high-quality software solutions that enhance user experiences and drive business growth. Committed to continuous learning, agile practices, and collaboration, we build secure, efficient, and reliable systems that solve real-world problems."/>
      </div>

      <div className="about-container">
        <Aboutcard thumbnail={vision} tittle="vision" passage="Empower global innovation through cutting-edge technology, creating impactful solutions that transform industries and improve lives. We aim to lead in sustainable development, fostering a culture of creativity and excellence, driving progress in the digital world."/>
      </div>

      <div className="about-container">
        <Aboutcard thumbnail={objectives} tittle="objectives" passage="Develop robust, scalable systems that drive efficiency and customer satisfaction. Foster an environment of continuous improvement, enabling teams to innovate, collaborate, and deliver quality solutions that meet evolving business and technological demands."/>
      </div>

    </section>
  )
}

export default About
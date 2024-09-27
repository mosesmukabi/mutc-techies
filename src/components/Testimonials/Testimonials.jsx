import "./Testimonials.css"
import james from '../../assets/james.jpg'
import moses from '../../assets/james.jpg'
import grcae from '../../assets/james.jpg'
import newton from '../../assets/james.jpg'
import peter from '../../assets/james.jpg'
import isaac from '../../assets/james.jpg'

function Testimonialscards({studentAvatar,studentName, title, text}) {
       return(
        <div className="Testimonials-cards">
            <div className="student-Testimonials-details">
                <img src={studentAvatar} alt={studentName} />
                <h4 className="student-name">{studentName}</h4>
            </div>
            <h4 className="testmony-tittle">{title}</h4>
             <p className="testmony-text">{text}</p>
        </div>
       )
}

function Testimonials() {
  return (
    <section>
        <div className="testmonials-container">
            <Testimonialscards studentAvatar={james} studentName="James Mwangi" title="A Life-Changing Experience" text="Joining MUTC was one of the best decisions I've made at university. The hands-on projects and supportive community helped me build skills I never thought I could develop." />
            {/* <Testimonialscards studentAvatar={peter} studentName="Peter maina" title="A Launchpad for My Career" text="MUTC gave me the opportunity to work on real-world projects and collaborate with like-minded peers. Thanks to the club, I landed an internship that kickstarted my tech career."/>
            <Testimonialscards studentAvatar={newton} studentName="newtone karanga" title="Innovative Learning Environment" text="The workshops and hackathons organized by MUTC are both fun and educational. I’ve learned so much about web development and cloud computing in a short time"/>
            <Testimonialscards studentAvatar={grcae} studentName="Grace mbuthia" title="Supportive Leadership" text="The mentorship I received from MUTC's leadership was invaluable. They encouraged me to push my limits and pursue opportunities I wouldn’t have considered on my own."/>
            <Testimonialscards studentAvatar={moses} studentName="moses mukabi" tittle="A Hub for Tech Enthusiasts " text="MUTC brings together students passionate about technology. The collaborative environment and shared knowledge have been instrumental in my growth as a developer"/>
            <Testimonialscards studentAvatar={isaac} studentName="isaac karanja" title ="Empowering Student Innovators" text ="MUTC fosters creativity and innovation in every member. I have grown both technically and personally, and I now feel more confident pursuing a career in tech "/> */}
        </div>
    </section>
  )
}

export default Testimonials
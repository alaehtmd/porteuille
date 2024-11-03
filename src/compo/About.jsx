import './about.css';
import avatar2 from "../assets/avatar 2.png"
export default function About(){
    return(
     <section className='about'>
        <div className='aboutme'>
            <img className='avatar2' src={avatar2} alt="avatar" /> 
            <div className='text'>
                <h1>
                    I'm Alae houti , 

                </h1>
               <p>an Algerian junior front-end developr with a passion for creating a dynamic and friendly web apps
                  Currently,iam studying computer sciences a usto university of Oran,i'm also a dedicated violnist performing at various events and weddings
                  <br></br>My diverse interests in bothh technology and music inspire my creativity and approach to problem-solving in developpements
                </p>
                <button className='cv'>Download CV</button>
            </div>
            
        </div>
        <div className='skills'>
            
           
<div class="container"> <h2>My Skills</h2>
  <div class="skill-box">
    <span class="title">HTML</span>

    <div class="skill-bar">
      <span class="skill-per html">
        <span class="tooltip">70%</span>
      </span>
    </div>
  </div>

  <div class="skill-box">
    <span class="title">CSS</span>

    <div class="skill-bar">
      <span class="skill-per scss">
        <span class="tooltip">80%</span>
      </span>
    </div>
  </div>
  <div class="skill-box">
    <span class="title">Reactjs</span>

    <div class="skill-bar">
      <span class="skill-per Boostrap">
        <span class="tooltip">50%</span>
      </span>
    </div>
  </div>
</div>

              












        </div>
            
    </section>
    )
}
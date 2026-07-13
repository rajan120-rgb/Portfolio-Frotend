import React from 'react'
import './Resume.css'

const Resume = () => {
  return (
    <>
    <div id='resume'>
        <h1>My Resume</h1>
        <div className="resume-education resume-table">
          <h3>Education</h3>
          <div className="resume-education-table">
            <table>
              <thead>
                <tr>
                  <th>SN</th>
                <th>Institution</th>
                <th>Year</th>
                <th>Degree</th>
                <th>Faculty</th>
                <th>GPA</th>
              </tr>
              </thead>
             <tbody>
               <tr>
                <td>1</td>
                <td>Nobel Academy</td>
                <td>2080</td>
                <td>+2</td>
                <td>Science</td>
                <td>4</td>
              </tr>
               <tr>
                <td>2</td>
                <td>Phoenix College</td>
                <td>Bacelor</td>
                <td>2081</td>
                <td>BIT</td>
                <td>3.4</td>
              </tr>
             </tbody>
            </table>
          </div>
        </div>
        <div className=" resume-education">
          <h3 className='certificate'>Certification</h3>
         <div className="resume-certification">
           <div className="resume-box">
  
             <h4> React.JS Certification</h4>
           {/* <p> Learned component-based development,
              hooks, and modern React concepts.</p> */}
              </div>
        
          
          <div className="resume-box">
            <h4>JavaScript Certification</h4>
            {/* <p>Covered ES6+, functions, objects,
              arrays, and programming concepts.</p> */}
          </div>
          <div className="resume-box">
            <h4>Web Development Certification</h4>
            {/* <p>Learned HTML, CSS, JavaScript,
              and responsive web design.</p> */}
          </div>
         </div>
        </div>
        <div className="resume-strength resume-education">
          <h3>Strength</h3>
         <div className="strength-grid">
            <div>✓ Problem Solving</div>
          <div>✓ Quick Learning</div>
          <div>✓ Responsive Design</div>
          <div>✓ Clean Coding Practices</div>
          <div>✓ Team Collaboration</div>
          <div>✓ Attention to Detail</div>
         </div>
        </div>
    </div>
    </>
  )
}

export default Resume



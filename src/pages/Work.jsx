import './Work.css'
export default function Work(){
    return (
        <div className='work-experience'>
            <h1 className='main-title'>Work Experience</h1>
            <div className ='experience-section'>
                <h2 className='sub-title'>Full Stack Developer - Dash Social</h2>
                <ul className= 'list'>
                    <li>Developed and integrated REST APIs for seamless communication between front-end and back-end systems</li>
                    <li>Conducted code reviews and implemented new features, maintaining high code quality standards</li>
                    <li>Utilized tools such as Shortcut, Datadog, and Argo to streamline project management, monitoring, and deployment</li>
                </ul>
                
            </div>
            <div className ='experience-section'>
                <h2 className='sub-title'>Tutor - Varsity Tutor</h2>
                <ul className= 'list'>
                    <li>Provide personalized tutoring in AP-level Mathematics (calculus, algebra, trigonometry, statistics) and high school physics, chemistry, biology, coding lessons, and web developmen</li>
                    <li>Leverage digital tools to deliver engaging lessons and track progress with targeted feedback,  
                         ensuring academic success and high satisfaction. </li>
                </ul>
            </div>
            <div className ='experience-section'>
                <h2 className='sub-title'>Counselor Assistant - Regional Residential Service Society</h2>
                <ul className= 'list'>
                    <li>Recorded and analyzed behavioral changes and developed tailored programs to enhance support in response to evolving client needs. </li>
                    <li>Collaborated with other professionals to evaluate the client’s needs and provided advocacy for the  client to receive added support such as psychological assessment, financial aid, etc.</li>
                </ul>
            </div>
            <div className ='experience-section'>
                <h2 className='sub-title'>Child and Youth Care Worker - Kinark Child and Family Services</h2>
                <ul className= 'list'>
                    <li>Completed comprehensive clinical assessments and formulated and developed individualized treatment plans for complex children, youth, and families.</li>
                    <li>Monitor, review, and record relevant changes to client’s circumstances and determine appropriate action and conduct risk assessments, and where indicated develop/update safety plans.</li>
                </ul>
            </div>
        </div>
    )
}
//Resume.jsx
import { studies, experiences }  from '../data/resume';
 
function Resume() {
    function mapStudies(studies) {
        return studies.map((study) => 
            <div key={study}>
                <li>
                    <h3>Title: {study.title}</h3>
                    <p>ID: {study.id}</p>
                    <p>Institutio: {study.institution}</p>
                    <p>Date: {study.date}</p>
                </li>
            </div>
        )
    };

    function mapExperiences(experiences) {
        return experiences.map((experience) => 
        <div key={experience}>
            <li>
                 <h3>Title: {experience.title}</h3>
                <p>ID: {experience.id}</p>
                <p>Company: {experience.company}</p>
                <p>Date: {experience.date}</p>
                
            </li>

        </div>
        )
    }


    return (
        <>
        <h1>My resume</h1>
        <div>
            <h2>My studies</h2>
            {mapStudies(studies)}
        </div>
        <div>
            <h2>My experiences</h2>
            {mapExperiences(experiences)}
        </div>
        </>
    )
}

export default Resume
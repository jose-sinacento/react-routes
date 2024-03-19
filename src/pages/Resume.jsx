//Resume.jsx
import { studies, experiences } from '../data/resume';

function Resume() {
    function mapStudies(studies) {
        return studies.map((study) =>
                <li key={study}>
                    <h3>Title: {study.title}</h3>
                    <p>ID: {study.id}</p>
                    <p>Institutio: {study.institution}</p>
                    <p>Date: {study.date}</p>
                </li>
        )
    };

    function mapExperiences(experiences) {
        return experiences.map((experience) =>
                <li key={experience}>
                    <h3>Title: {experience.title}</h3>
                    <p>ID: {experience.id}</p>
                    <p>Company: {experience.company}</p>
                    <p>Date: {experience.date}</p>
                </li>
        )
    }

    return (
        <>
            <h1>My resume</h1>
            <div>
                <h2>My studies</h2>
                <ul>
                    {mapStudies(studies)}
                </ul>
            </div>
            <div>
                <h2>My experiences</h2>
                <ul>
                    {mapExperiences(experiences)}
                </ul>
            </div>
        </>
    )
}

export default Resume
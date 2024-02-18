import Project from '../Project';
import dataProjects from '../../dataProjects.json'


const ProjectGallery = () => {

    return (
        <>
            <h1>These are my projects!</h1>

            {dataProjects.map(project => (
                <Project key={project.id} project={project} />
            ))}
        </>
    )
}

export default ProjectGallery
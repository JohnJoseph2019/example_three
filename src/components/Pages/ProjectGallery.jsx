import Project from '../Project'
// import Project from '../Project/Project';
import dataProjects from '../../dataProjects.json'
import Footer from '../Footer';


const ProjectGallery = () => {

    return (
        <>
            <h1>These are my projects!</h1>

            {dataProjects.map(project => (
                <Project key={project.id} project={project} />
            ))}

            <Footer />
        
        
        </>
    )
}

export default ProjectGallery
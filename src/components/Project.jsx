import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../components/style.css";


function ProjectCard({project}) {
  return (
    <Card className="Card" style={{ width: '25rem' }}>
      <Card.Img className="img-container" variant="top" src={project.screenshot} />
      <Card.Body className="content">
        <Card.Title>{project.name}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
        <a href={project.github}>  <Button className="button" variant="primary">GitHub Repo</Button></a>
        <a href={project.web}><Button className="button" variant="primary">Deployed Web</Button></a>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard
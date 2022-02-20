import PropTypes from 'prop-types';
import { IoArrowForwardSharp } from 'react-icons/io5';
import Badge from './Badge';

const Project = (props) => {
  const { project } = props;

  return (
    <article className="project-card">
      <img
        src={project.image}
        alt="project_image"
        className="project-img"
      />
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <ul className="tech-list">
          {project.technologies.map((technology) => (
            <Badge key={technology.id} tech={technology.tech} />
          ))}
        </ul>
        <button
          type="button"
          className="project-btn"
        >
          See this project
          <IoArrowForwardSharp className="arrow-right" />
        </button>
      </div>
    </article>
  );
};

Project.propTypes = {
  project: PropTypes.instanceOf(Object).isRequired,
};

export default Project;

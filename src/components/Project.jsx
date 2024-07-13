
function Project({ project }) {
  const { name, repo, deployedlink, description, image } = project;

  return (
    <div className="project" key={name}>
      <img
        src={image}
        alt={name}
        className="project-bg"
      />
      <div className="project-text">
        <h3>
          <a href={deployedlink}>{name}</a>
          &nbsp;
          <a href={repo}>
            <i className="fa-brands fa-github" />
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;

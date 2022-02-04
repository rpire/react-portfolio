import Project from './Project';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Obelisk Language Center',
      description: 'This is the first project.',
      image: './media/work-img-6.svg',
      technologies: [
        {
          id: 1,
          tech: 'HTML/CSS',
        },
        {
          id: 2,
          tech: 'JavaScript',
        },
        {
          id: 3,
          tech: 'Ruby on Rails',
        },
      ],
      url: ['url.one', 'url.two'],
    },
    {
      id: 2,
      title: 'Obelisk Language Center',
      description: 'This is the first project.',
      image: './media/work-img-5.svg',
      technologies: [
        {
          id: 1,
          tech: 'HTML/CSS',
        },
        {
          id: 2,
          tech: 'React/Redux',
        },
      ],
      url: ['url.one', 'url.two'],
    },
    {
      id: 3,
      title: 'Obelisk Language Center',
      description: 'This is the first project.',
      image: './media/work-img-6.svg',
      technologies: [
        {
          id: 1,
          tech: 'HTML/CSS',
        },
        {
          id: 2,
          tech: 'React/Redux',
        },
      ],
      url: ['url.one', 'url.two'],
    },
    {
      id: 4,
      title: 'Mi mama me mima',
      description: 'Mi mama me ama',
      image: './media/work-img-5.svg',
      technologies: [
        {
          id: 1,
          tech: 'React/Redux',
        },
        {
          id: 2,
          tech: 'Ruby on Rails',
        },
      ],
      url: ['url.one', 'url.two'],
    },
  ];

  return (
    <section className="portfolio">
      <h2 id="portfolio">Projects</h2>
      <ul>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
};

export default Portfolio;

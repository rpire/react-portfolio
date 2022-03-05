import Project from './Project';
import PortfolioHeader from './PortfolioHeader';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'First Project',
      description: 'This model should display information about the first project.',
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
      title: 'Second Project',
      description: 'This modal should display information about the second project.',
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
      title: 'Were You Expecting the Third Project?',
      description: 'Sorry to disappoint, I didn\'t want all projects to be the same.',
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
      title: 'Mi Mama me Mima',
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
    {
      id: 5,
      title: 'Do You Like Avocados?',
      description: 'I\'m asking because I love them!',
      image: './media/work-img-6.svg',
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
    {
      id: 6,
      title: 'Last Project',
      description: 'This modal should display information about the last project in the list. Is it? Great!',
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
      <ul className="work-list">
        <PortfolioHeader />
        <li className="project-1">
          <Project project={projects[0]} />
        </li>
        <li className="project-2">
          <Project project={projects[1]} />
          <img src="./media/image-geometry_2-1.svg" alt="" className="work-deco-2" />
        </li>
        <li className="project-3">
          <Project project={projects[2]} />
          <img src="./media/rhombus.svg" alt="" className="work-deco-3" />
        </li>
        <li className="project-4">
          <div className="work-deco-4">
            <img src="./media/image-geometry_5.svg" alt="" />
          </div>
          <Project project={projects[3]} />
        </li>
        <li className="project-5">
          <Project project={projects[4]} />
          <img src="./media/group-deco-2.svg" alt="" className="work-deco-5" />
        </li>
        <li className="project-6">
          <Project project={projects[5]} />
        </li>
        <div className="work-deco">
          <img src="./media/image_dots.svg" alt="" className="work-dots work-img" />
        </div>
      </ul>
    </section>
  );
};

export default Portfolio;

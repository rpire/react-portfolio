import Project from './Project';
import PortfolioHeader from './PortfolioHeader';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'First Project',
      description: 'This model should display information about the first project.',
      images: ['./media/wrk-img-1.svg', './media/wrk-img-1.svg'],
      technologies: [
        { id: 1, tech: 'HTML/CSS' },
        { id: 2, tech: 'JavaScript' },
        { id: 3, tech: 'Ruby on Rails' },
      ],
      links: ['url.one', 'url.two'],
    },
    {
      id: 2,
      title: 'Second Project',
      description: 'This modal should display information about the second project.',
      images: ['./media/wrk-img-2.svg', './media/wrk-img-2.svg'],
      technologies: [
        { id: 1, tech: 'HTML/CSS' },
        { id: 2, tech: 'React/Redux' },
      ],
      links: ['url.one', 'url.two'],
    },
    {
      id: 3,
      title: 'Expecting "Third Project"?',
      description: 'Sorry to disappoint, I didn\'t want all projects to be the same.',
      images: ['./media/wrk-img-3.svg', './media/wrk-img-3.svg'],
      technologies: [
        { id: 1, tech: 'HTML/CSS' },
        { id: 2, tech: 'React/Redux' },
      ],
      links: ['url.one', 'url.two'],
    },
    {
      id: 4,
      title: 'Mi Mama me Mima',
      description: 'Mi mama me ama',
      images: ['./media/wrk-img-4.svg', './media/wrk-img-4.svg'],
      technologies: [
        { id: 1, tech: 'React/Redux' },
        { id: 2, tech: 'Ruby on Rails' },
      ],
      links: ['url.one', 'url.two'],
    },
    {
      id: 5,
      title: 'Do You Like Avocados?',
      description: 'I\'m asking because I love them!',
      images: ['./media/wrk-img-5.svg', './media/wrk-img-5.svg'],
      technologies: [
        { id: 1, tech: 'React/Redux' },
        { id: 2, tech: 'Ruby on Rails' },
      ],
      links: ['url.one', 'url.two'],
    },
    {
      id: 6,
      title: 'Last Project',
      description: 'This modal should display information about the last project in the list. Is it? Great! But also, I will give this project a lot of text. I will give this project a lot of text because I want to test if there is any problem with doing so, of course, I can always use "alt-z" to wrap the text and make everything much, much readable, so I don\'t care too much about puttin all of this text in just one single line in one of my files. Well, I think that is enough, I don\'t think any of my project will have such a description. Bye!',
      images: ['./media/wrk-img-6.svg', 'https://github.com/rpire/covid-metrics/blob/dev/desktop_screenshot.png?raw=true'],
      technologies: [
        { id: 1, tech: 'HTML/CSS' },
        { id: 2, tech: 'React' },
        { id: 3, tech: 'Redux' },
      ],
      links: ['https://rpire.github.io/covid-metrics', 'https://github.com/rpire/covid-metrics'],
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

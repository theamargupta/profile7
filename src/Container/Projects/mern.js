const ProjectData = [
  {
    id: 1,
    title: 'Weather App',
    imageUrl: 'https://i.ibb.co/p3qhbqw/2.png',
    description: `This project uses Handlebars for the front-end and a NodeJs/Express + OpenWeather for the back-end to create a fully responsive web application that pings the
	Clarifai API for face detection in images and displays the image with a bounding box around the face along with the name
	of the celebrity.`,
    github: 'https://github.com/theamargupta/weatherapp',
    live: 'https://amar-weather.herokuapp.com/',
  },
  {
    id: 2,
    title: 'TO-DO App',
    imageUrl: 'https://i.ibb.co/mvb2Q81/4.png',
    description: `A simple Todo List App  .This application is a very basic one but it has the following features:
    Add and complete a task on a single page. 
    Store both new and completed task in a different array.
    Uses the express framework.
    And a very minimal CSS styling`,
    github: 'https://github.com/theamargupta/crown-cart',
    live: 'https://amar-todoapp.herokuapp.com/',
  },
  {
    id: 3,
    title: 'The Web Dev',
    imageUrl:
      'https://i.ibb.co/G9BkwKH/Screenshot-2020-06-23-at-5-07-21-PM.png',
    description: `The web dev app is a blog app purely based on Node.js with minimalistic CSS. It has the following features:
    This app has authentication, so users have to sign in before being allowed to do any CRUD (create, read, update, delete) actions  
  Users can log in and sign up for their accounts.`,
    github: 'https://github.com/theamargupta/thewebdev',
    live: 'https://thewebdev.herokuapp.com/',
  },
];

export default ProjectData;

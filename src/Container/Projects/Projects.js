import React from 'react';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import Mern from './mern';
import ReactPro from './react';
import Vue from './Vue';
import Next from './Next';
import Static from './static';

import './Projects.scss';
import Header from '../../Components/Header/Header';

const Projects = () => {
  return (
    <div className='outer'>
      <Header projects />
      <h1 className='prohead'>React.Js</h1>
      <div className='projectcollection'>
        {ReactPro.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <h1 className='prohead'>Vue.Js</h1>
      <div className='projectcollection'>
        {Vue.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <h1 className='prohead'>Next.Js</h1>
      <div className='projectcollection'>
        {Next.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <h1 className='prohead'>Node.JS</h1>
      <div className='projectcollection'>
        {Mern.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <h1 className='prohead'>Static</h1>
      <div className='projectcollection'>
        {Static.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

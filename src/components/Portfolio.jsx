import { useState } from 'react';
import Project from "./Project";
import  passwordGenerator from '../assets/projects/passwordGenerator.png';
import  workDayScheduler from '../assets/projects/workDayScheduler.png';
import  logoMaker from '../assets/projects/logoMaker.png';
import  employeeTracker from '../assets/projects/employeeTracker.png';
import  eCommerce from '../assets/projects/eCommerce.png';
import  readmeGenerator from '../assets/projects/readmeGenerator.png';

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Password Generator',
      description: 'To create a strong password that provides greater security by randomly generating a password that meets a certain criteria.',
      deployedlink: "https://jeflynn135.github.io/Password-Generator/",
      repo: "https://github.com/jeflynn135/Password-Generator",
      image: passwordGenerator
    },
    {
      name: 'Work Day Scheduler',
      description: 'To be able to add important events to a daily planner in order to manage time effectively',
      deployedlink: "https://jeflynn135.github.io/Work-Day-Scheduler/",
      repo: "https://github.com/jeflynn135/Work-Day-Scheduler",
      image: workDayScheduler
    },
    {
      name: 'Logo Maker',
      description: 'To generate a simple SVG logo for projects so users dont have to pay a graphic designer',
      deployedlink: "https://drive.google.com/file/d/1xT-4SzY7IaMHPovC68e06C-LhyGCJqF7/view",
      repo: "https://github.com/jeflynn135/SVG-Logo-Maker",
      image: logoMaker
    },
    {
      name: 'Employee Tracker',
      description: 'To be able to view and manage the departments, roles, and employees in a company in order to organize and plan',
      deployedlink: "https://drive.google.com/file/d/10txXtiZUJS0lIMMMgbUSDk5hBkK1-ewJ/view",
      repo: "https://github.com/jeflynn135/Employee-Tracker-SQL",
      image: employeeTracker
    },
    {
      name: 'E-Commerce',
      description: 'Create a back end for my e-commerce website that uses the latest technologies so companies can compete with other e-commerce companies',
      deployedlink: "https://drive.google.com/file/d/1c7jJ5pcyzX1wKCfN5HMX5ZJVDFY2who0/view",
      repo: "https://github.com/jeflynn135/E-Commerce-ORM",
      image: eCommerce
    },
    {
      name: 'README Generator',
      description: 'To quickly create a professional README for a new project',
      deployedink: "https://drive.google.com/file/d/1vXn1YhGPVClINV4cDiXK4Xso6JcJQTk4/view",
      repo: "https://github.com/jeflynn135/README-Generator",
      image: readmeGenerator
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;

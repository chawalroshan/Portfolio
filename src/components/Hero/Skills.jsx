import React from 'react';
import './Skills.css';
import { FaReact, FaJs, FaPhp, FaWordpress, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import materialUILogo from '../../assets/images/material-ui-logo.png';

const Skills = () => {
  return (
    <div className='Skills__container'>
      <h1>Skills</h1>
      <div className='Skills__list'>
        <ul className='Skills__item'>
          <li className='l1'><FaReact /> React</li>
          <li className='l2'><FaJs /> JavaScript</li>
          <li className='l3'><FaPhp /> PHP</li>
          <li className='l4'><FaWordpress /> WordPress</li>
          <li className='l5'><FaNodeJs /> Node</li>
          <li className='l6'><FaHtml5 /> HTML</li>
          <li className='l7'><FaCss3Alt /> CSS</li>
          <li className='l8'>
            <img src={materialUILogo} alt="Material UI" width="16" height="16" />
            Material UI
          </li>
          <li className='l9'><FaGithub /> GitHub</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;

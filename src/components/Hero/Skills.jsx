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
          <li className='l1'><a href='https://react.dev/'><FaReact /> React</a></li>
          <li className='l2'><a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'><FaJs /> JavaScript</a></li>
          <li className='l3'><a href='https://www.php.net/'><FaPhp /> PHP</a></li>
          <li className='l4'><a href='https://wordpress.org/'><FaWordpress /> WordPress</a></li>
          <li className='l5'><a href='https://nodejs.org/'><FaNodeJs /> Node</a></li>
          <li className='l6'><a href='https://developer.mozilla.org/en-US/docs/Web/HTML'><FaHtml5 /> HTML</a></li>
          <li className='l7'><a href='https://developer.mozilla.org/en-US/docs/Web/CSS'><FaCss3Alt /> CSS</a></li>
          <li className='l8'><a href='https://mui.com/'>
            <img src={materialUILogo} alt="Material UI" width="16" height="16" />
            Material UI
            </a></li>
          <li className='l9'><a href='https://github.com/'><FaGithub /> GitHub</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;

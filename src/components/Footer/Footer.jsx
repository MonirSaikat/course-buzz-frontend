import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function chunkArray(arr, chunkSize = 3) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}

function Footer() {
  const links = [
    {
      to: '',
      text: 'Courses'
    },
    {
      to: '/sign-in',
      text: 'Sign In',
    },
    {
      to: '/sign-up',
      text: 'Sign Up'
    },
    {
      to: '/community',
      text: 'Community'
    },
    {
      to: '/blogs',
      text: 'Blog'
    },
    {
      to: '/',
      text: 'Support'
    },
    {
      to: '/about',
      text: 'About Us',
    },
    {
      to: '/privacy',
      text: 'Privacy',
    },
    {
      to: '/',
      text: 'Code of conduct'
    },
    {
      to: '/',
      text: 'Terms and policy'
    }
  ];

  const renderLinks = () => {
    let chunks = chunkArray(links);

    return chunks.map((uiLinks, index) => {
      return(
        <div className="col" key={index}>
          <ul>
            { uiLinks.map((link, index1) => {
              return <li key={index1}>
                <Link to={link.to}>{link.text}</Link>
              </li>
            }) }
          </ul>
        </div>
      );
    });
  };

  const renderCopyRightText = (
    <p className="bottom-text">
      Allright reserved by <strong>CoureBuzz</strong>
      {' | '}
      <span>© {new Date().getFullYear()}</span>
    </p>
  );

  return (
    <footer className="footer">
      <div className="container">
        <div className="top-text">
          <h3>CourseBuzz</h3>
          <p>Learn everything for free</p>
        </div>

        <div className="row">
          { renderLinks() }
        </div>
        { renderCopyRightText }
      </div>
    </footer>
  );
}

export default Footer;

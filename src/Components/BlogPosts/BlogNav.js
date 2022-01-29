import React from 'react';
import { Link } from 'react-router-dom';

const BlogNav = ({links, navHeader}) => {
  return <div className='blogNav'>
      <h4 className='blogasideH'>{navHeader}</h4>
      <ul className="blogList">
          {links.map((navitems, i) =>{
              return    <li key={i} className="blogItem"><Link to="/#" className='blogLink'>{navitems}</Link></li>
          })}
      </ul>
  </div>;
};

export default BlogNav;

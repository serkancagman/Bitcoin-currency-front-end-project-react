import React from 'react';
import { Link } from 'react-router-dom';

const BlogNav = ({links, navHeader}) => {
  return <div className='blogNav my-4'>
      <h4 className='blogasideH'>{navHeader}</h4>
      <ul className="blogList">
          {links.map(navitems =>{
              return    <li className="blogItem"><Link to="/#" className='blogLink'>{navitems}</Link></li>
          })}
      </ul>
  </div>;
};

export default BlogNav;

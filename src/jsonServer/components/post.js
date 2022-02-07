import React from 'react';
import { Link } from 'react-router-dom';

export default function Post({elem}) {
    return (
    <Link to={`/post/${elem.id}`} className="link">    
        <div className='list'>
            
            <div>{elem.id}</div>
            <div>{elem.title}</div>
            <div>{elem.author}</div>
        </div>
    </Link>    
  )
}

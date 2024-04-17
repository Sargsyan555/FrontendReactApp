import { useState } from 'react';
import Comments from '../../componets/users/Comments';
import Posts from '../../componets/users/Posts';
import Images from '../../componets/users/Images';
import "./UserPage.scss"
import { useNavigate } from 'react-router-dom';
export default function UserPage() {
    const [activePage, setActivePage] = useState('posts');
    const handleNavClick = (page) => {
        setActivePage(page);
    };
    const navigate = useNavigate() 

  return (
    <div className='userPage'>
        <nav className='nav'>
            <h2>Logo</h2>
            <div className="links">
                <button className={activePage === 'posts' ? 'active' : ''} onClick={() => handleNavClick("posts")}>Posts</button>
                <button className={activePage === 'comments' ? 'active' : ''} onClick={() => handleNavClick("comments")}>Comments</button>
                <button className={activePage === 'images' ? 'active' : ''} onClick={ () => handleNavClick("images")}>Images</button>
            </div>
            <button onClick={() => navigate("../")}>Logout</button>
        </nav>
        <div className="content">
                {activePage === 'posts' && <Posts/>}
                {activePage === 'comments' && <Comments/>}
                {activePage === 'images' && <Images />}
        </div>
    </div>
  )
}

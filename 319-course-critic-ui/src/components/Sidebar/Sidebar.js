import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
 
function Sidebar() {

    return (
        <>
            <nav className='nav-menu active'>
                <ul className='nav-menu-items'>
                    <li className='navbar-title'>
                        <h1>
                            Course <br/>
                            Critic
                        </h1>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}

export default Sidebar

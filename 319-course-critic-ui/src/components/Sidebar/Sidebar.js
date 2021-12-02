import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';

const Sidebar = () => {

    const [classBar, setClassBar] = useState(false);

    const showClassBar = () => setClassBar(!classBar);

    return (
        <>
            <nav className='nav-menu active'>
                <ul className='nav-menu-items'>
                    {SidebarData.map((item, index) => {
                        if(item.subNav){
                            return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                        }
                    })}
                </ul>
            </nav>            
            <h1 className='navbar-title'>
                Course <br/>
                Critic
            </h1>
        </>
    );
}

export default Sidebar

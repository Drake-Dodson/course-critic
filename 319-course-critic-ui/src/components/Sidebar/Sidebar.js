import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { ClassRepo } from '../../repositories/ClassRepo';
import * as AiIcons from 'react-icons/ai';
import './Popout.css';
import './Sidebar.css';

const Sidebar = () => {

    // Expand code provided from this stackoverflow post https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
    const [expanded, setExpanded] = useState(false);

    function expand() {
        setExpanded(true);
        document.getElementById('exit-button').focus();
    }

    function close() {
        setExpanded(false);
    }

    return (
        <>
            <div className='popout' id='focus-bar' tabIndex={0}>
                <nav className={expanded ? 'class-menu active' : 'class-menu'}> 

                    <h1 className='class-title' id='focus-title'>
                        Classes 
                    </h1>                    

                    <ul className='class-menu-items'>
                        {ClassRepo.map((item, index) => {
                            return (
                                <li key={index} className='class-menu-item'>
                                    <Link to={"class/" + item.classID} onClick={close}>
                                        <span>{item.className}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>                    
                    <AiIcons.AiOutlineDoubleLeft className='exit-button' id='exit-button' onClick={close}/>
                </nav>
            </div>
            <nav className='nav-menu active'>
                <ul className='nav-menu-items'>
                    {SidebarData.map((item, index) => {
                        if(!item.subNav){
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path} onClick={close}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        }
                        else {
                            return (
                                <li key={index} className={item.cName}>
                                    <button id='popout' onClick={() => {
                                            expand();
                                            document.getElementById('focus-title').focus();
                                        }}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </button>
                                </li>
                            );
                        }
                    })}
                </ul>
            </nav>            
            <h1 className='navbar-title'>
                <Link to= '/'>                
                    Course <br/>
                    Critic
                </Link>
            </h1>
        </>
    );
}

export default Sidebar

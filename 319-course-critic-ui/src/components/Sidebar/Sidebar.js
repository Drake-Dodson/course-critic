import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { ClassRepo } from '../../repositories/ClassRepo';
import './Popout.css';
import './Sidebar.css';

const Sidebar = ({callback}) => {

    // Code provided from this stackoverflow post https://stackoverflow.com/questions/32553158/detect-click-outside-react-component

    const [selected, setSelected] = useState("");
    const [expanded, setExpanded] = useState(false);

    function expand() {
        setExpanded(true);
    }

    function close() {
        setExpanded(false);
    }

    function select(event) {
        const value = event.target.textContent;
        callback(value);
        close();
        setSelected(value);
    }

    return (
        <>
        <div className="popout" tabIndex={0} onBlur={close} onFocus={expand}>
            <nav className={expanded ? 'class-menu active' : 'class-menu'}> 
                <h1 className="class-title">
                    Classes 
                </h1>
                <ul className='class-menu-items'>
                    {ClassRepo.map((item, index) => {
                        return (
                            <li key={index} className="class-menu-item">
                                <Link to={item.classPath}>
                                    <span>{item.className}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            </div>
            <nav className='nav-menu active'>
                <ul className='nav-menu-items'>
                    {SidebarData.map((item, index) => {
                        if(!item.subNav){
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        }
                        else {
                            return (
                                <li key={index} className={item.cName}>
                                    <button id="popout" onClick={expand}>
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
                Course <br/>
                Critic
            </h1>
        </>
    );
}

export default Sidebar

import React from 'react';
import { ClassRepo } from './repositories/ClassRepo.js';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as CgIcons from 'react-icons/cg';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Classes',
        path: '/classes',
        icon: <GiIcons.GiNotebook />,
        cName: 'nav-text',
        subNav: [
            ClassRepo.map((item, index) => {
                return {
                    path: '/classes/' + item.classId, 
                    title: item.className,
                }
            })
        ]
    },
    {
        title: 'Reviews',
        path: '/reviews',
        icon: <MdIcons.MdRateReview />,
        cName: 'nav-text'
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <CgIcons.CgProfile />,
        cName: 'nav-text'
    }
]

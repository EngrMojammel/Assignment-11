'use client'

import Link from 'next/link';
import React from 'react';
import {usePathname} from "next/navigation";

const Navbar = () => {
    let currentPath = usePathname();
    return (
        <nav className='flex space-x-10 font-bold'>
            <div> <Link className={currentPath==="/"?'active-link':'pending-link'} href='/'>Home</Link> </div>
            <div> <Link className={currentPath==="/blog"?'active-link':'pending-link'} href='/blog'>Blog</Link> </div>
                       
        </nav>
    );
};

export default Navbar;
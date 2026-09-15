import { path } from 'framer-motion/client'
import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaTimes, FaBeer, FaBars } from "react-icons/fa"
import { useState } from 'react';

export const Navbar = () => {

    const navLinks = [
        {
            id: 1,
            title: "Home",
            path: "/",
        },
        {
            id: 2,
            title: "About",
            path: "/about",
        },
        {
            id: 3,
            title: "Skills",
            path: "/skills",
        },
        {
            id: 4,
            title: "Projects",
            path: "/projects",
        },

        {
            id: 5,
            title: "Contact",
            path: "/contact"
        }
    ];

    const [menuOpen, SetMemuOpen] = useState(false);
    return (
        <nav className='fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800'>
            <div className='max-w-7xl mx-auto flex items-center justify-between px-6 py-4'>
                {/* Logo*/}
                <NavLink to="/">
                    <div>
                        <h1 className='text-2xl font-bold'>Aditya<span className='text-indigo-500'>.</span></h1>
                    </div>
                </NavLink>

                {/* Nav Link*/}
                <div className="hidden md:flex items-center gap-8">{navLinks.map((link) => <NavLink key={link.id}
                    to={link.path} className={({ isActive }) => isActive
                        ? "text-indigo-500 font-semibold"
                        : "text-gray-300 hover:text-white transition-all duration-300"}>{link.title}</NavLink>)}
                </div>
                {
                    menuOpen && (
                        <div className='absolute  top-full left-0 w-full bg-slate-900/95 md:hidden'>
                            <div className='flex flex-col items-center py-6 gap-6'>
                                {navLinks.map((link) => (<NavLink key={link.id}
                                    to={link.path}
                                    onClick={() => setMenuOpen(false)}  >
                                    {link.title}</NavLink>
                                ))}
                                <a href="/Aditya-Pratap-Singh-Resume.pdf"
                                    target='_blank'
                                    rel='noneferrer'
                                    onClick={()=>setMenuOpen(false)}
                                    className='px-5 py-2 rounded-lg bg-indigo-500 text-white'>
                                    Resume</a>

                            </div>
                        </div>
                    )
                }

                {/* Resume Button */}
                <div>
                    <a href="/Aditya-Pratap-Singh-Resume.pdf"
                        target='_blank'
                        rel='noneferrer'
                        className='hidden md:block bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-md transition-all duration-300'>
                        View Resume</a>

                </div>
                <div className='md:hidden'>
                    <button onClick={() => SetMemuOpen(!menuOpen)}>{menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}</button>
                </div>

            </div>

        </nav>
    )
}

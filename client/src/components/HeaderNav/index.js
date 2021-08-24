import React from "react";
import './style.css';

export default function HeaderNav ({ currentPage, handlePageChange }) {
    return (
        <header className="header" > 
            <h1 className="name-header">Smiley Recruiter</h1>

            <nav>
                <ul className="nav nav-list justify-content-end">

                    <li className="nav-item">
                        <a href="#searchPage"
                            onClick={() => handlePageChange('SearchPage')}
                            className={currentPage === 'SearchPage' ? 'nav-link disabled' : 'nav-link'}>
                            Search for Jobs
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#profilePage"
                            onClick={() => handlePageChange('ProfilePage')}
                            className={currentPage === 'ProfilePage' ? 'nav-link disabled' : 'nav-link'}>
                            My Profile
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#loginPage"
                            onClick={() => handlePageChange('LoginPage')}
                            className={currentPage === 'LoginPage' ? 'nav-link disabled' : 'nav-link'}>
                            Login &amp; Sign-Up
                        </a>
                    </li>

                </ul>
            </nav>
        </header>
    );
}





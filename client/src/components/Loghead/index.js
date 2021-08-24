import React from "react";

export default function Loghead({ currentPage, handlePageChange }) {
    return (
        <>
            <nav>
                <ul className="nav nav-list border border-dark p-2 m-2">

                    <li className="nav-item justify-content-start">
                        <a href="#searchPage"
                            onClick={() => handlePageChange('SearchPage')}
                            className={currentPage === 'SearchPage' ? 'nav-link disabled' : 'nav-link'}>
                            Search Jobs
                        </a>
                    </li>

                    <li className="nav-item justify-content-start">
                        <a href="#profilePage"
                            onClick={() => handlePageChange('ProfilePage')}
                            className={currentPage === 'ProfilePage' ? 'nav-link disabled' : 'nav-link'}>
                            My Profile
                        </a>
                    </li>
                    <li className="justify-content-end">
                        <a href="#searchPage"
                            onClick={() => handlePageChange('SearchPage')}
                            className={currentPage === 'SearchPage' ? 'nav-link disabled' : 'nav-link'}>
                            Sign Out
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
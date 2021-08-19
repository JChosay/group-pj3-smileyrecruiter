import React from "react";
import { useState } from 'react';
import HeaderNav from './HeaderNav';
import SearchPage from './pages/SearchPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';

export default function Body() {
    // make default page the Bio page
    const [currentPage, setCurrentPage] = useState('SearchPage');

    const renderPage = () => {
        if (currentPage === 'SearchPage') {
            return <SearchPage />;
        }
        if (currentPage === 'LoginPage') {
            return <LoginPage />;
        }
        if (currentPage === 'ProfilePage') {
            return <ProfilePage />;
        }
       
        return <SearchPage />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>
            <div>
                <HeaderNav 
                currentPage={currentPage} 
                handlePageChange={handlePageChange} 
                />
                {renderPage()}
            </div>
        </>
    );
}
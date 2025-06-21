import React, { createContext, useState, useContext } from 'react';

const ReportsContext = createContext();

export const ReportsProvider = ({ children }) => {
    const [reports, setReports] = useState([]);

    const addReport = (newReport) => {
        setReports(prev => [...prev, {
            ...newReport,
            id: Date.now().toString(),
            date: new Date().toISOString()
        }]);
    };

    return (
        <ReportsContext.Provider value={{ reports, addReport }}>
            {children}
        </ReportsContext.Provider>
    );
};

export const useReports = () => useContext(ReportsContext);

import React from 'react';

export const NotFound = () => {
    return (
        <div className="exception-body notfound">
            <div className="exception-panel"></div>

            <div className="exception-content">
                <img src="assets/layout/images/thanos5.png" alt="babylon-layout" />
                <h1>
                    <span className="exception-name">PAGE NOT AVAILABLE</span> 
                </h1>
                <a href="/#">Back to Dashboard</a>
            </div>
        </div>
    );
};

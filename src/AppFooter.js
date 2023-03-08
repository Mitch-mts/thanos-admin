import React from 'react';

const AppFooter = () => {
    return (
        <div className="layout-footer">
            <div className="grid">
                <div className="col-6">
                    <button type="button" className="p-link logo-container">
                        <img src="assets/layout/images/thanos5.png" alt="babylon-layout" />
                    </button>
                </div>
                <div className="col-6 footer-icons">
                    <button type="button" className="p-link">
                        &copy; {1900 + new Date().getYear()}, Designed with &#128149; by BigMitch Innovation
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AppFooter;

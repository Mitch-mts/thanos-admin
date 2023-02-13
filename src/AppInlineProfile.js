import React, { useRef } from 'react';
import { classNames } from 'primereact/utils';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

const AppInlineProfile = (props) => {
    const menuRef = useRef(null);
    const profileClassName = classNames('layout-profile', { 'layout-profile-active': props.inlineMenuActive });
    const menuitemLinkTabindex = !props.inlineMenuActive ? '-1' : null;

    return (
        <div className={profileClassName}>
            <button type="button" onClick={props.onProfileButtonClick} className="p-link layout-profile-button">
                <img src="assets/layout/images/avatar.png" alt="babylon-layout" />
                <div className="layout-profile-userinfo">
                    <span className="layout-profile-name">Mitch T Severa</span>
                    <span className="layout-profile-role">Software Engineer</span>
                </div>
                <i className="layout-profile-icon pi pi-angle-down"></i>
            </button>
            <CSSTransition nodeRef={menuRef} classNames="layout-profile-menu" in={props.inlineMenuActive} timeout={{ enter: 1000, exit: 400 }} unmountOnExit>
                <ul ref={menuRef} className="layout-profile-menu">
                <Link to={`/profile`}>
                    <li role="menuitem">
                        <button type="button" className="p-link" tabIndex={menuitemLinkTabindex}>
                            <i className="pi pi-user"></i>
                            <span>Profile</span>
                        </button>
                    </li>
                </Link>
                <Link to={`/settings`}>
                    <li role="menuitem">
                        <button type="button" className="p-link" tabIndex={menuitemLinkTabindex}>
                            <i className="pi pi-cog"></i>
                            <span>Settings</span>
                        </button>
                    </li>
                </Link>
                <Link to={`/login`}>
                    <li role="menuitem">
                        <button type="button" className="p-link" tabIndex={menuitemLinkTabindex}>
                            <i className="pi pi-sign-out"></i>
                            <span>Logout</span>
                        </button>
                    </li>
                </Link>
                </ul>
            </CSSTransition>
        </div>
    );
};

export default AppInlineProfile;

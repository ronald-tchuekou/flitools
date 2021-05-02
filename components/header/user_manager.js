import React, {useState} from 'react';
import Lang from "../../src/lang";

/**
 * Function to manage the users.
 * @param lang
 * @returns {JSX.Element}
 * @constructor
 */
const User_manager = ({lang}) => {
    const [user, setUser] = useState(null);
    return user === null ? (<button className="btn btn-sm round btn-flat-primary">
        <i className="mr-50" data-feather="log-in"> </i>{Lang.header.sign_in[lang]}
    </button>) : (<li className="nav-item dropdown dropdown-user">
            <a className="nav-link dropdown-toggle dropdown-user-link" id="dropdown-user"
               href="" data-toggle="dropdown" aria-haspopup="true"
               aria-expanded="false">
                <div className="user-nav d-sm-flex d-none"><span
                    className="user-name font-weight-bolder">John Doe</span><span
                    className="user-status">Admin</span></div>
                <span className="avatar"><img className="round"
                                              src="app-assets/images/portrait/small/avatar-s-11.jpg"
                                              alt="avatar" height="40" width="40"/> <span
                    className="avatar-status-online"> </span></span>
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-user">
                <a className="dropdown-item" href="#"><i className="mr-50"
                                                         data-feather="user"> </i> Profile</a><a
                className="dropdown-item" href="#"><i className="mr-50" data-feather="mail"> </i> Inbox</a>
                <a className="dropdown-item" href="#"><i className="mr-50"
                                                         data-feather="check-square"> </i> Task</a>
                <a className="dropdown-item" href="#"><i className="mr-50"
                                                         data-feather="message-square"> </i> Chats</a>
                <div className="dropdown-divider"> </div>
                <a className="dropdown-item" href="#"><i className="mr-50"
                                                         data-feather="settings"> </i> Settings</a><a
                className="dropdown-item" href="#"><i className="mr-50"
                                                      data-feather="credit-card"> </i> Pricing</a>
                <a className="dropdown-item" href=""><i className="mr-50"
                                                        data-feather="help-circle"> </i> FAQ</a>
                <a className="dropdown-item" href=""><i className="mr-50"
                                                        data-feather="power"> </i> Logout</a>
            </div>
        </li>);
}

export default User_manager;

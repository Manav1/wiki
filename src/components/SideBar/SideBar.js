import React from 'react'
import './SideBar.css';
import HomeIcon from '@material-ui/icons/Home';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import SettingsOverscanIcon from '@material-ui/icons/SettingsOverscan';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import BookIcon from '@material-ui/icons/Book';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import GestureTwoToneIcon from '@material-ui/icons/GestureTwoTone';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import NavigationIcon from '@material-ui/icons/Navigation';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import EqualizerIcon from '@material-ui/icons/Equalizer';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <center>
                <div className="sidebar_header">
                    <div className="home">
                        <button className="rect_button">
                            <HomeIcon />
                        </button>
                    </div>
                    <div className="browse">
                        <button className="rect_button"><AccountTreeIcon />  Browse</button>
                    </div>

                </div>
                <div className="side_list">
                    <div className="side_listitem"><HomeIcon />Home</div>
                </div>
                <div className="side_list">
                    <h5 className="side_heading">Guides</h5>
                    <div className="side_listitem"><SettingsOverscanIcon />Setting up environment</div>
                    <div className="side_listitem"><ReportProblemIcon />Reporting a bug</div>
                    <div className="side_listitem"><CloudDownloadIcon />Installing Sakura</div>
                    <h5 className="side_listitem">Mantainers</h5>
                    <div className="side_listitem"><GroupAddIcon />Apply for mantainership</div>
                    <div className="side_listitem"><PhoneAndroidIcon />Support new device</div>
                    <div className="side_listitem"><BookIcon />Code of Conduct</div>
                </div>
                <div className="side_list">
                    <h5 className="side_heading">Features</h5>
                    <div className="side_listitem"><SlideshowIcon />Animation</div>
                    <div className="side_listitem"><GestureTwoToneIcon />Gestures</div>
                    <div className="side_listitem"><TouchAppIcon />Hardware Buttons</div>
                    <div className="side_listitem"><GestureTwoToneIcon />Miscellaneous</div>
                    <div className="side_listitem"><NavigationIcon />Navigation</div>
                    <div className="side_listitem"><NotificationsActiveIcon />Notification</div>
                    <div className="side_listitem"><PowerSettingsNewIcon />Power Menu</div>
                    <div className="side_listitem"><EqualizerIcon />Statusbar</div>
                </div>
            </center>
        </div>
    )
}

export default Sidebar

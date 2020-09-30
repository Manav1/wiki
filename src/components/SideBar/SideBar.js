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

const Sidebar = (props) => {
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
                    <div className="side_listitem" onClick={() => props.environmentClicked()}><SettingsOverscanIcon />Setting up environment</div>
                    <div className="side_listitem" onClick={() => props.reportBugClicked()}><ReportProblemIcon />Reporting a bug</div>
                    <div className="side_listitem" onClick={() => props.installSakuraClicked()}><CloudDownloadIcon />Installing Sakura</div>
                    <h5 className="side_heading">Mantainers</h5>
                    <div className="side_listitem" onClick={() => props.applymantainerClicked()}><GroupAddIcon />Apply for mantainership</div>
                    <div className="side_listitem" onClick={() => props.supportNewDeviceClicked()}><PhoneAndroidIcon />Support new device</div>
                    <div className="side_listitem" onClick={() => props.codeOfConductClicked()}><BookIcon />Code of Conduct</div>
                </div>
                <div className="side_list">
                    <h5 className="side_heading">Features</h5>
                    <div className="side_listitem" onClick={() => props.animationClicked()}><SlideshowIcon />Animation</div>
                    <div className="side_listitem" onClick={() => props.gestureClicked()}><GestureTwoToneIcon />Gestures</div>
                    <div className="side_listitem" onClick={() => props.hardwareClicked()}><TouchAppIcon />Hardware Buttons</div>
                    <div className="side_listitem" onClick={() => props.miscellaneousClicked()}><GestureTwoToneIcon />Miscellaneous</div>
                    <div className="side_listitem" onClick={() => props.navigationClicked()}><NavigationIcon />Navigation</div>
                    <div className="side_listitem" onClick={() => props.notificationClicked()}><NotificationsActiveIcon />Notification</div>
                    <div className="side_listitem" onClick={() => props.powerClicked()}><PowerSettingsNewIcon />Power Menu</div>
                    <div className="side_listitem" onClick={() => props.statusBarClicked()}><EqualizerIcon />Statusbar</div>
                </div>
            </center>
        </div>
    )
}

export default Sidebar

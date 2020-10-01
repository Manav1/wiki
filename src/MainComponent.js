import React from 'react';
import './MainComponent.css';
import SideBar from './components/SideBar/SideBar';
import Navbar from './components/Navbar/Navbar';
import BreadCrum from './components/BreadCrums/BreadCrum';



function MainComponent(props) {
    //Navbar Events
    const [visibleSideBar, notVisibleSideBar] = React.useState(true);
    const logoClicked = () => {
        notVisibleSideBar(!visibleSideBar);
    }

    //SideBavbar Events
    const environmentClicked = () => {
        console.log("hello");
    }
    const reportBugClicked = () => {
        console.log("hello");
    }
    const installSakuraClicked = () => {
        console.log("hello");
    }
    const applymantainerClicked = () => {
        console.log("hello");
    }
    const supportNewDeviceClicked = () => {
        console.log("hello");
    }
    const codeOfConductClicked = () => {
        console.log("hello");
    }
    const animationClicked = () => {
        console.log("hello");
    }
    const gestureClicked = () => {
        console.log("hello");
    }
    const hardwareClicked = () => {
        console.log("hello");
    }
    const miscellaneousClicked = () => {
        console.log("hello");
    }
    const navigationClicked = () => {
        console.log("hello");
    }
    const notificationClicked = () => {
        console.log("hello");
    }
    const powerClicked = () => {
        console.log("hello");
    }
    const statusBarClicked = () => {
        console.log("hello");
    }
    return (
        <div className="App">
            <Navbar logoClicked={logoClicked} />
            <div className="main_content">
                <SideBar
                    visibleSideBar={visibleSideBar}
                    environmentClicked={environmentClicked}
                    reportBugClicked={reportBugClicked}
                    installSakuraClicked={installSakuraClicked}
                    applymantainerClicked={applymantainerClicked}
                    supportNewDeviceClicked={supportNewDeviceClicked}
                    codeOfConductClicked={codeOfConductClicked}
                    animationClicked={animationClicked}
                    gestureClicked={gestureClicked}
                    hardwareClicked={hardwareClicked}
                    miscellaneousClicked={miscellaneousClicked}
                    navigationClicked={navigationClicked}
                    notificationClicked={notificationClicked}
                    powerClicked={powerClicked}
                    statusBarClicked={statusBarClicked}
                />
                <div className="mid_content">
                    <BreadCrum logoClicked={logoClicked} />
                </div>
            </div>

        </div>
    );
}

export default MainComponent;

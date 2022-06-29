import { cleanup } from "@testing-library/react";
import React, { useEffect } from "react";
import './Showreel.css';

function Showreel (props) {
    // const closeOnEscapeKeyDown = (event) => {
    //     if((event.charCode || event.keyCode) === 27) {
    //         props.close();
    //     }
    // }

    // useEffect(() => {
    //     document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    //     return function cleanup() {
    //         document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    //     }
    // }, []);

    if(!props.show){
        return null;
    }
    
    return(
        <div onClick={props.close}>
            <div className="video-container" onClick={e => e.stopPropagation()}>
                <span className="close close-cursor"></span>
                <video src="/assets/BCS_Showreel.mp4" type='video/mp4' controls preload="metadata"></video>
                <button type='button' onClick={props.close}>Close</button>
            </div>
        </div>
    );
}

export default Showreel; 
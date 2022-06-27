import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from "./storeMap.module.css";

const StoreMap = ({ toggleMapView }) => {

    useEffect(() => {
        document.body.style.overflow='hidden';

        return ()=> {
            document.body.removeAttribute('style');
        }
    }, [])

    const iframeWrapper = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.357852793258!2d-86.0719437835206!3d40.75415337932719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88146fbeea421ec7%3A0xf1ca5127fe912529!2s18%20N%20Broadway%2C%20Peru%2C%20IN%2046970!5e0!3m2!1sen!2sus!4v1632551627920!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';

    return ( <div onClick={toggleMapView} className={css.overLay}><div className={css.map} dangerouslySetInnerHTML={ { __html: iframeWrapper }}></div></div>);

   

}


createPortal(<StoreMap />, document.getElementById("root"));

 
export default StoreMap;
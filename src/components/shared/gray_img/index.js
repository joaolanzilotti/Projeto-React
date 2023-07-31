import React, {Fragment} from 'react';
import './style.css'

const GrayImg = (props) => {
    return (
        <img className={props.gray ? 'grayImg' : 'colorImg'}
             src={props.img_url}/>
    );
}
export default GrayImg;
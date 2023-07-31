import React from 'react';
import '../../shared/gray_img/style.css';
import GrayImg from "../../shared/gray_img";
import DescriptionWithLink from "../../shared/description_with_link";

const Planet = (props) => {
    const names = ['a', 'b', 'c', 'd', 'e', 'f']


    let title;
    if (props.title_with_underline)
        title = <h4><u>{props.name}</u></h4>
    else
        title = <h4>{props.name}</h4>


    return (
        <div>
            {title}
            <DescriptionWithLink description={props.description} link={props.link}/>
            <GrayImg img_url={props.img_url}
                     gray={true}/>

            <h4>Satélites</h4>
            <ul>
                {
                    names.map((n) => <li>Satélite {n}</li>)
                }
            </ul>
            <hr/>
        </div>
    );
}
export default Planet;
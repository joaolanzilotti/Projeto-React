import React, {Fragment} from 'react';
import '../../shared/gray_img/style.css';

const DescriptionWithLink = (props) => {
    return (
        <Fragment>
            <p>{props.description}</p>
            <div>
                <a href={props.link}>{props.link}</a>
            </div>
        </Fragment>
    );
}
export default DescriptionWithLink;
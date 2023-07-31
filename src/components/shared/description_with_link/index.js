import React, {Fragment} from 'react';
import '../../shared/gray_img/style.css';

const DescriptionWithLink = (props) => {
    if (props.link) {
        return (
            <Fragment>
                <p>{props.description}</p>
                <div>
                    <a href={props.link}>{props.link}</a>
                </div>
            </Fragment>
        );
    } else {
        return (
            <Fragment>
                <p><u>{props.description}</u></p>
            </Fragment>
        )
    }


}
export default DescriptionWithLink;
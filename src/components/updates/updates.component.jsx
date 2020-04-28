import React from 'react';
import fb from '../../firebase';
import './updates.style.css';


const Updates = (props) => {
    return (
        <React.Fragment>
            {
                props.updates && props.updates.length ?
                    props.updates.map(item =>
                        <div className="update-container" key={item.updateDate}>
                            <h5>{item.updateDate}</h5>
                            <br />
                            <hr />
                            <p>{item.updateText}</p>
                        </div>

                    )
                    :
                    null
            }
        </React.Fragment>
    )
}
export default Updates;
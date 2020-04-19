import React from 'react';
import fb from '../../firebase';
import './updates.style.css';

class Updates extends React.Component {


    render() {

        return (
            <React.Fragment>
                {
                    this.props.updates && this.props.updates.length ?
                        this.props.updates.map(item =>
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
}
export default Updates;
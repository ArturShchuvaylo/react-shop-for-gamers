import React, { useEffect } from "react";


const Alert = ({ name = '', changeAlert }) => {

    useEffect(() => {
        let alertId = setTimeout(changeAlert, 3000)
        return () => {
            clearInterval(alertId)
        }
        // eslint-disable-next-line 
    }, [name])

    return (
        <div id='toast-container'>
            <div className="toast">
                {name} is added to cart!
            </div>
        </div>
    );
}


export default Alert; 
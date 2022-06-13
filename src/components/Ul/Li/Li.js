import React from "react";
import classes from './Li.module.scss';


const li = (props) => {
console.log(props)

    return ( 
        <div>
            <ul>
               <li>{props.array}</li>

            </ul>

        </div>
     );
}

import React from "react";export


export default li;
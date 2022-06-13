import React from "react";
import classes from './Ul.module.scss'

const ul = () => {
    return ( 
<div>
    <ul className={classes.Ul}>
    {array.map(item => <ul>{item}</ul>)}
    </ul>
</div>
     );
}

export default ul;
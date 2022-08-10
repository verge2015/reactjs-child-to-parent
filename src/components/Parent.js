import React, {useState} from 'react';
import Child from './Child.js';

//Parent
export default function App(){
    const [UIcolor, setUIColor] = useState(null);

    //Callback function
    const getColor = (color) => {
        setUIColor(color)
    };

    return (
        <div className='App'>
        <div
            className='App_color_container'
            style={{background: `${UIcolor}`}}
        ><p>I'm inside div</p></div>
        <Child getColor={getColor}/>
        </div>
    );
}


import React from 'react'
import './index.css'


export default function App() {
    let curDate = new Date();
    curDate = curDate.getHours();
    let greeting = '';

    const cssStyle = {};

    if (curDate >= 1 && curDate < 12) {
        greeting = 'Good Morning'
        cssStyle.color = 'blue';
    } else if (curDate >= 12 && curDate < 17) {
        greeting = 'Good Afternoon'
        cssStyle.color = 'yellow';
    } else if (curDate >= 17 && curDate < 20) {
        greeting = 'Good Evening'
        cssStyle.color = 'red';
    } else {
        greeting = 'Good Night'
        cssStyle.color = 'black';
    }

    return (
        <>
        <div>
            <h1>Hello Sir,<span style={cssStyle}>{greeting}</span></h1>
        </div>
        </>
    )
}

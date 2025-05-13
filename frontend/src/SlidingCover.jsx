import React from 'react';
import "./SlidingCover.css"
const SlidingCover = () => {
    const [slider, setSlider] = React.useState(true);

    const handleClick = () => {
        setSlider(!slider);
        document.documentElement.style.setProperty('--main-color', slider ? '#ffdddd' : '#b8f6fa');
    }
    return (
        <div className={`sliding-cover ${slider ? `` : `sliding-cover-active`}`}>
            <p onClick={handleClick}>Efidu</p>
            
        </div>
)
}

export default SlidingCover;
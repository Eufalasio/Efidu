import React from 'react';


const SlidingCover = () => {
    const [slider, setSlider] = React.useState(true);

    const handleClick = () => {
        setSlider(!slider);

    }
    return (
        <div className={`sliding-cover ${slider ? `` : `sliding-cover-active`}`} onClick={handleClick}>

        </div>
)
}

export default SlidingCover;
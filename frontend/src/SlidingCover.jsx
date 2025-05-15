import React, { useEffect, useState } from 'react';
import "./SlidingCover.css"
import gradientAnimation from './slidingCoverScript';
class Gradient {
    constructor(val1, val2, val3, gradientAngle) {
        this.val1 = val1;
        this.val2 = val2;
        this.val3 = val3;
        this.gradientAngle = gradientAngle;
        this.updateColors();
    }
    updateColors() {
        this.color1 = `rgba(${this.val1[0]}, ${this.val1[1]}, ${this.val1[2]}, 1) 0%`;
        this.color2 = `rgba(${this.val2[0]}, ${this.val2[1]}, ${this.val2[2]}, 1) 50%`;
        this.color3 = `rgba(${this.val3[0]}, ${this.val3[1]}, ${this.val3[2]}, 1) 100%`;
    }
    setValues(val1, val2, val3, gradientAngle) {
        this.val1 = val1;
        this.val2 = val2;
        this.val3 = val3;
        this.gradientAngle = gradientAngle;
        this.updateColors();
    }
}
const SlidingCover = () => {
    const [slider, setSlider] = useState(true);
    let currentGradient = new Gradient([42, 123, 155], [56, 178, 194], [0, 234, 255], 90);
    const handleClick = () => {
        
        setSlider(!slider);
        let studentGradient = new Gradient([42, 123, 155], [56, 178, 194], [0, 234, 255], 90);
        let teacherGradient = new Gradient([117, 18, 14],[237, 19, 19],[255, 81, 0], 270);

        if(!slider){
            gradientAnimation(currentGradient, studentGradient);
        }
        else{
            gradientAnimation(currentGradient, teacherGradient)
        }


        document.documentElement.style.setProperty('--main-color', slider ? '#ffdddd' : '#b8f6fa');
        document.querySelector('.sliding-cover').style.setProperty('--relative-margin', slider ? '50%' : '0');
    }
    return (
        <div className={`sliding-cover`}>
            <p onClick={handleClick}>Efidu</p>
        </div>
)
}

export default SlidingCover;
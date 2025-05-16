export default function gradientAnimation(currentGradient, targetGradient, duration){
    const start = performance.now();
    const interpolate = (startRGB, endRGB, t) =>
        startRGB.map((startVal, i) => Math.round(startVal + (endRGB[i] - startVal) * t));

    const interpolateNumber = (startVal, endVal, t) =>  Math.round(startVal + (endVal - startVal) * t);

    function animate(time) {
        const elapsed = time - start;
        const t = Math.min(elapsed / duration, 1); // Normalized time (0 to 1)

        const val1 = interpolate(currentGradient.val1, targetGradient.val1, t);
        const val2 = interpolate(currentGradient.val2, targetGradient.val2, t);
        const val3 = interpolate(currentGradient.val3, targetGradient.val3, t);
        const gradientAngle = interpolateNumber(currentGradient.gradientAngle, targetGradient.gradientAngle, t);

        currentGradient.setValues(val1, val2, val3, gradientAngle);

        // Update CSS variables
        document.querySelector('.sliding-cover').style.setProperty('--main-color1', currentGradient.color1);
        document.querySelector('.sliding-cover').style.setProperty('--main-color2', currentGradient.color2);
        document.querySelector('.sliding-cover').style.setProperty('--main-color3', currentGradient.color3);
        document.querySelector('.sliding-cover').style.setProperty('--gradient-angle', `${currentGradient.gradientAngle}deg`);

        if (t < 1) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}
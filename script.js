document.addEventListener('DOMContentLoaded', () => {
    const animateToggle = document.querySelector('#animate-toggle');
    const textAnimate = document.querySelector('#animate');
    const hideToggle = document.querySelector('#hide-toggle');
    const textHide = document.querySelector('#hide');
    const circle = document.querySelector('.progress__bar-circle');
    const progressInput = document.querySelector('.progress__value-input');
    const progressBar = document.querySelector('.progress__bar');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    animateToggle.addEventListener('change',  function () {
        if (this.checked) {
            textAnimate.classList.remove('grey-text');
            textAnimate.classList.add('black-text');

            progressInput.value = "";

            for (let i = 0; i <= 70; i++) {
                setTimeout((j) => {
                setProgress(progressInput.value = j);
                setTimeout(() => {
                    progressBar.classList.add("rotate");
                }, 1500)
                }, i * 10, i);
            }

        } else {
            textAnimate.classList.remove('black-text');
            textAnimate.classList.add('grey-text');
           setProgress(progressInput.value = "");
           progressBar.classList.remove("rotate");
        }
    });

    hideToggle.addEventListener('change', function () {
        if (this.checked) {
            textHide.classList.remove('grey-text');
            textHide.classList.add('black-text');
            progressBar.classList.add('progress__bar-hide');
        } else {
            textHide.classList.remove('black-text');
            textHide.classList.add('grey-text');
            progressBar.classList.remove('progress__bar-hide');
        }
    });


    progressInput.addEventListener('change', function () {
        setProgress(progressInput.value);
    })

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;

    const setProgress = (percent) => {
        const offset = circumference - percent / 100 * circumference;
        circle.style.strokeDashoffset = offset;
    }

});
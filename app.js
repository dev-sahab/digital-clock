

setInterval(() => {

    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');
    
    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    let hr_dot = document.querySelector('.hr_dot');
    let mn_dot = document.querySelector('.mn_dot');
    let sec_dot = document.querySelector('.sec_dot');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h >= 12 ? "PM" : "AM";
    
    // convert 24H clock to 12H clock
    
    if (h > 12) {
        h = h - 12;
    } 
    // when time is 12 AM then it will show 0 for 24H system. Here is convert it into 12 by below code
    h == 0 ? h = 12 : '' ;
    
    // add zero before single digit number
    h = (h < 10) ? "0" + h: h;
    m = (m < 10) ? "0" + m: m;
    s = (s < 10) ? "0" + s: s;
    
    hours.innerHTML = h + "<br><span>Hours</span>";
    minutes.innerHTML = m + "<br><span>Minutes</span>";
    seconds.innerHTML = s + "<br><span>Seconds</span>";
    ampm.innerHTML = am;


    hh.style.strokeDashoffset = 440 - (440 * h) / 12;
    // 12H clock
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    // 60 minutes
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;
    // 60 Seconds


    hr_dot.style.transform = `rotate(${h * 30}deg)`;
    // 360 / 12 = 30
    mn_dot.style.transform = `rotate(${m * 6}deg)`;
    // 360 / 12 = 30
    sec_dot.style.transform = `rotate(${s * 6}deg)`;
    // 360 / 12 = 30
});

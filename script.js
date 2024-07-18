function run() {
    const date = new Date;
    const second = (date.getSeconds() + date.getMilliseconds() / 1000) / 60;
    const minute = (date.getMinutes() + second) / 60;
    const hour = (date.getHours() + minute) / 12;
    let red, grn, blu;

    red = Math.min(255, Math.floor(Math.max(0, Math.min(1, 2 - Math.abs(6 * ((hour + 1 / 3) % 1) - 2))) * 256)).toString(16).padStart(2, '0');
    grn = Math.min(255, Math.floor(Math.max(0, Math.min(1, 2 - Math.abs(6 * (hour % 1) - 2))) * 256)).toString(16).padStart(2, '0');
    blu = Math.min(255, Math.floor(Math.max(0, Math.min(1, 2 - Math.abs(6 * ((hour - 1 / 3) % 1) - 2))) * 256)).toString(16).padStart(2, '0');

    document.getElementById('hour').style.backgroundColor = '#' + red + grn + blu;

    red = Math.min(255, Math.floor(Math.max(0, Math.min(1, 2 - Math.abs(6 * ((minute + 1 / 3) % 1) - 2))) * 256)).toString(16).padStart(2, '0');
    grn = Math.min(255, Math.floor(Math.max(0, Math.min(1, 2 - Math.abs(6 * (minute % 1) - 2))) * 256)).toString(16).padStart(2, '0');
    blu = Math.min(255, Math.floor(Math.max(0, Math.min(1, 2 - Math.abs(6 * ((minute - 1 / 3) % 1) - 2))) * 256)).toString(16).padStart(2, '0');

    document.getElementById('minute').style.backgroundColor = '#' + red + grn + blu;

    red = Math.min(255, Math.floor(Math.max(0, Math.min(1, 2 - Math.abs(6 * ((second + 1 / 3) % 1) - 2))) * 256)).toString(16).padStart(2, '0');
    grn = Math.min(255, Math.floor(Math.max(0, Math.min(1, 2 - Math.abs(6 * (second % 1) - 2))) * 256)).toString(16).padStart(2, '0');
    blu = Math.min(255, Math.floor(Math.max(0, Math.min(1, 2 - Math.abs(6 * ((second - 1 / 3) % 1) - 2))) * 256)).toString(16).padStart(2, '0');

    document.getElementById('second').style.backgroundColor = '#' + red + grn + blu;
}

setInterval(run, 100);
run();

// 1. CLICK: Night button
function changeToNight() {
    document.getElementById('page').style.backgroundColor = 'darkblue';
    document.getElementById('title').innerHTML = 'Good Night!';
    document.getElementById('title').style.color = 'white';
}

// 1. CLICK: Day button
function changeToDay() {
    document.getElementById('page').style.backgroundColor = 'lightblue';
    document.getElementById('title').innerHTML = 'Good Morning!';
    document.getElementById('title').style.color = 'black';
}

// 2. KEYBOARD: shows which key you pressed and changes the box colour
document.addEventListener('keydown', function(event) {
    document.getElementById('message').innerHTML = 'You pressed: ' + event.key;
    document.getElementById('box').style.backgroundColor = 'pink';
});


document.addEventListener('mousemove', function(event) {
    document.getElementById('mouse').innerHTML = 'X: ' + event.clientX + '  Y: ' + event.clientY;
});


window.addEventListener('resize', function() {
    document.getElementById('size').innerHTML = 'Window width: ' + window.innerWidth + 'px';
}); 
// Занесение переменных
const score = document.querySelector('.score'),
    start = document.querySelector('.start'),
    gameArea = document.querySelector('.gameArea'),
    car = document.createElement('div');

car.classList.add('car');

// Добавляем слушатели событий
start.addEventListener('click', startGame);
document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);

// Объект с кнопками "стрелочек"
const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false,
}

// Настройки
const setting = {
    start: false,
    score: 0,
    speed: 3,
    traffic: 3
}

function getQuantityElementElements(heightElement) {
    return document.documentElement.clientHeight / heightElement + 1;
}

console.log(getQuantityElementElements(200));

// Функция запуска игры
function startGame() {
    start.classList.add('hide');
    gameArea.innerHTML = '';
    for(let i = 0; i < getQuantityElementElements(100); i++) {
        const line = document.createElement('div');
        line.classList.add('line');
        line.style.top = (i * 100) + 'px';
        line.y = i * 100;
        gameArea.appendChild(line);
    }

    for(let i = 0; i < getQuantityElementElements(100 * setting.traffic); i++) {
        const enemy = document.createElement('div');
        enemy.classList.add('enemy');
        enemy.y = -100 * setting.traffic * (i + 1);
        enemy.style.left = Math.floor(Math.random() * (gameArea.offsetWidth - 50)) + 'px';
        enemy.style.top = enemy.y + 'px';
        enemy.style.background = 'transparent url(images/enemy.png) center / cover no-repeat;';
        gameArea.appendChild(enemy);
    }

    setting.score = 0;
    setting.start = true;
    gameArea.appendChild(car);
    car.style.left = (gameArea.offsetWidth / 2) - car.offsetWidth / 2;
    car.style.top = 'auto';
    car.style.bottom = '10px';
    setting.x = car.offsetLeft;
    setting.y = car.offsetTop;
    requestAnimationFrame(playGame);
}

// Функция с процессом игры
function playGame() {
    if(setting.start) {
        setting.score += setting.speed;
        score.innerHTML = 'SCORE<br>' + setting.score;
        moveRoad();
        moveEnemy();
        if(keys.ArrowLeft && setting.x > 0) {
            setting.x -= setting.speed;
        }
        if(keys.ArrowRight && setting.x < (gameArea.offsetWidth - car.offsetWidth)) {
            setting.x += setting.speed;
        }
        if(keys.ArrowUp && setting.y > 0) {
            setting.y -= setting.speed;
        }
        if(keys.ArrowDown && setting.y < (gameArea.offsetHeight - car.offsetHeight)) {
            setting.y += setting.speed;
        }

        car.style.left = setting.x + 'px';
        car.style.top = setting.y + 'px';

        requestAnimationFrame(playGame);
    }
}

// Функция старта движения
function startRun(event) {
    event.preventDefault();
    keys[event.key] = true;
}

// Функция конца движения
function stopRun(event) {
    event.preventDefault();
    keys[event.key] = false;
}

// Функция движения дороги
function moveRoad() {
    let lines = document.querySelectorAll('.line');
    lines.forEach(function(line, index) {
        line.y += setting.speed;
        line.style.top = line.y + 'px';

        if(line.y >= document.documentElement.clientHeight) {
            line.y = -100;
        }
    })
}

// Функция движения врагов
function moveEnemy() {
    let enemies = document.querySelectorAll('.enemy');

    enemies.forEach(function(enemy) {
        let carRect = car.getBoundingClientRect();
        let enemyRect = enemy.getBoundingClientRect();

        if(carRect.top <= enemyRect.bottom &&
            carRect.right >= enemyRect.left &&
            carRect.left <= enemyRect.right &&
            carRect.bottom >= enemyRect.top) {
            setting.start = false;
            start.classList.remove('hide');
            start.style.top = score.offsetHeight;
        }

        enemy.y += setting.speed / 2;
        enemy.style.top = enemy.y + 'px';

        if(enemy.y >= document.documentElement.clientHeight) {
            enemy.y = -100 * setting.traffic;
            enemy.style.left = Math.floor(Math.random() * (gameArea.offsetWidth - 50)) + 'px';
        }   
    });
}

const backgrounds = new Array(
    "images/winter-01.jpeg",
    "images/winter-02.jpeg"
);

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function selectBackground()
{
    bg = backgrounds[getRandomInteger(0, backgrounds.length)];
    document.body.background = bg;    
}

selectBackground();

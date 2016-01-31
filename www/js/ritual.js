// Initialize Phaser
var aspect, desiredHeight = 720;
if (screen.width > screen.height) {
    aspect = screen.width / screen.height;
} else {
    aspect = screen.height / screen.width;
}
var game = new Phaser.Game(desiredHeight * aspect, desiredHeight, Phaser.AUTO, 'gameDiv');

// Our 'global' variable
game.global = {
    margin: 20,
    imageZoneCenterY: 400 / 2,
    textZoneTop: 400,
    choiceZoneTop: 520,
    fontStyle: {
        font: '22pt "Pixel Emulator"',
        fill: 'rgb(255, 255, 255)',
        align: 'left',
        stroke: 'rgba(0,0,0,0.85)',
        strokeThickness: 3,
        wordWrap: true,
        wordWrapWidth: (desiredHeight * aspect) - 80,
    }
};

// Define states
game.state.add('boot', bootState);
game.state.add('menu', menuState);
game.state.add('play', playState);

// Start the "boot" state
game.state.start('boot');

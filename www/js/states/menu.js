var menuState = {

    create: function() {
        game.add.image(game.world.centerX, game.world.centerY, 'title')
            .anchor.setTo(0.5, 0.5);

        var touchBtn = game.add.text(game.world.centerX, game.world.height - 200, "Click to Start", game.global.fontStyle);
        touchBtn.anchor.setTo(0.5, 0.5);
        game.input.onDown.addOnce(this.next, this);
        game.add.tween(touchBtn.scale)
            .to({
                x: 1.05,
                y: 1.05
            }, 500)
            .to({
                x: 1,
                y: 1
            }, 500)
            .start()
            .loop();
    },

    next: function() {
        game.sound.stopAll();
        game.state.start('play');
    },

};

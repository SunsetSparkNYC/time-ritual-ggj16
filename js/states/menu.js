var menuState = {

    create: function() {
        music = game.add.audio('menu-music');
        music.play();
        music.loopFull(0.6);
        
        game.add.image(game.world.centerX, game.world.centerY, 'title')
            .anchor.setTo(0.5, 0.5);

        var startBtn = game.add.text(game.world.centerX, game.world.height - 30, "Click to Start", game.global.fontStyle);
        startBtn.anchor.setTo(0.5, 0.5);
        game.input.onUp.addOnce(this.next, this);
        game.add.tween(startBtn.scale)
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
                
        var titleText1 = game.add.text(300, game.world.centerY, " Ritual", game.global.fontStyle);
        titleText1.anchor.setTo(0, 0.5);
        game.add.tween(titleText1)
            .to({angle: '+360'}, 6000)
            .loop().start();
        
        var titleText2 = game.add.text(300, game.world.centerY, " Time", game.global.fontStyle);
        titleText2.anchor.setTo(0, 0.5);
        game.add.tween(titleText2)
            .to({angle: '+360'}, 36000)
            .loop().start();
    },

    next: function() {
        game.sound.stopAll();
        game.state.start('play');
    },

};

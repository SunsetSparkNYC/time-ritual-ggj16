var playState = {

    create: function() {
        var storyArt = game.add.sprite(game.world.centerX, game.global.imageZoneCenterY, 'unicorn');
        storyArt.anchor.setTo(0.5, 0.5);
        game.add.text(game.global.margin, game.global.textZoneTop, 'This is the story', game.global.fontStyle);
        
        var choiceHeightDelta = (game.world.height - game.global.choiceZoneTop) / 3;
        game.add.text(game.global.margin*2, game.global.choiceZoneTop, 'This is a choice', game.global.fontStyle);
        game.add.text(game.global.margin*2, game.global.choiceZoneTop + choiceHeightDelta, 'This is a choice', game.global.fontStyle);
        game.add.text(game.global.margin*2, game.global.choiceZoneTop + 2 * choiceHeightDelta, 'This is a choice', game.global.fontStyle);


    }
};

var bootState = {

    init: function() {
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = true;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.forceOrientation(true, false); // Landscape, not portrait
        this.scale.refresh();

    },

    preload: function() {
        game.load.audio('menu-music', ['sfx/menu-soundtrack.m4a',]);
        game.load.audio('play-music', ['sfx/sound-test.m4a',]);

        
        game.load.image('antagonist', 'img/antagonist.png');
        game.load.image('bed', 'img/bed.png');
        game.load.image('book', 'img/book.png');
        game.load.image('book2', 'img/book2.png');
        game.load.image('cat-camping', 'img/cat-camping.png');
        game.load.image('cat-camping2', 'img/cat-camping2.png');
        game.load.image('cat-dead-trimmed', 'img/cat-dead-trimmed.png');
        game.load.image('cat-dead', 'img/cat-dead.png');
        game.load.image('cat-fire', 'img/cat-fire.png');
        game.load.image('cat-idk', 'img/cat-idk.png');
        game.load.image('cat-idk2', 'img/cat-idk2.png');
        game.load.image('cat-pet', 'img/cat-pet.png');
        game.load.image('cat', 'img/cat.png');
        game.load.image('crocodile-trimmed', 'img/crocodile-trimmed.png');
        game.load.image('crocodile', 'img/crocodile.png');
        game.load.image('elf', 'img/elf.png');
        game.load.image('envelope', 'img/envelope.png');
        game.load.image('flower', 'img/flower.png');
        game.load.image('friend', 'img/friend.png');
        game.load.image('garbage-burning', 'img/garbage-burning.png');
        game.load.image('garbage', 'img/garbage.png');
        game.load.image('girl', 'img/girl.png');
        game.load.image('gnome', 'img/gnome.png');
        game.load.image('monster-trimmed', 'img/monster-trimmed.png');
        game.load.image('monster', 'img/monster.png');
        game.load.image('notebook', 'img/notebook.png');
        game.load.image('pizza', 'img/pizza.png');
        game.load.image('prince', 'img/prince.png');
        game.load.image('scary-guy', 'img/scary-guy.png');
        game.load.image('snake', 'img/snake.png');
        game.load.image('title', 'img/title-clock.png');
        game.load.image('trash-bag', 'img/trash-bag.png');
        game.load.image('trash-under-bed', 'img/trash-under-bed.png');
        game.load.image('unicorn', 'img/unicorn.png');
        game.load.image('unicorn2', 'img/unicorn2.png');
    },

    create: function() {
        // Set a background color
        game.stage.backgroundColor = '#000000';
        game.stage.smoothed = false;
        game.state.start('menu');
    },
};

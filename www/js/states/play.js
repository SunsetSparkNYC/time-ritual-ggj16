var playState = {

    create: function() {
        game.global.points = {
            good: 0,
            neutral: 0,
            bad: 0
        };
        game.global.chose = 0;
        this.screen = {};
        
        music = game.add.audio('play-music');
        music.play();
        music.loopFull(0.6);
        
        this.currentTime = TIMES[0];
        this.nextScenario(this.currentTime);
    },
    
    clear: function() {
        if (this.screen.storyArt) {
            this.screen.storyArt.destroy();
            this.screen.storyText.destroy();
            this.screen.choice1.destroy();
            this.screen.choice2.destroy();
            this.screen.choice3.destroy();
        }
    },
    
    choose: function(clicked) {
        
        // Calc points
        game.global.points[clicked.choice.type] += clicked.choice.points
        game.global.chose += 1;
        
        // Draw it
        this.screen.storyArt.destroy();
        this.screen.storyText.destroy();
        this.screen.choice1.destroy();
        this.screen.choice2.destroy();
        this.screen.choice3.destroy();
        
        if (game.cache.getImage(clicked.choice.after).width > game.world.width) {
            var downsample = game.world.width / game.cache.getImage(clicked.choice.after).width;
            this.screen.storyArt = game.add.sprite(game.world.centerX, 0, clicked.choice.after);
            this.screen.storyArt.anchor.setTo(0.5, 0);
            this.screen.storyArt.scale.setTo(downsample, downsample);
        } else  if (game.cache.getImage(clicked.choice.after).height > 400) {
            this.screen.storyArt = game.add.sprite(game.world.centerX, 0, clicked.choice.after);
            this.screen.storyArt.anchor.setTo(0.5, 0);
        } else {
            this.screen.storyArt = game.add.sprite(game.world.centerX, game.global.imageZoneCenterY, clicked.choice.after);
            this.screen.storyArt.anchor.setTo(0.5, 0.5);
        }
        
        var afterStyle = {
            font: '28pt "Pixel Emulator"',
            fill: 'rgb(255, 255, 255)',
            align: 'center',
            stroke: 'rgba(0,0,0,0.85)',
            strokeThickness: 3,
            wordWrap: true,
            wordWrapWidth: (desiredHeight * aspect) - 80,
        }
        this.screen.storyText = game.add.text(game.world.centerX, game.global.choiceZoneTop, 'You ' + clicked.choice.text, game.global.fontStyle);
        this.screen.storyText.anchor.setTo(0.5, 0.5);
        
        var nextTimeIdx = TIMES.indexOf(this.currentTime) + 1;
        if (nextTimeIdx >= TIMES.length) {
            // Dream
            game.input.onDown.addOnce(function () { this.dream() }, this);
        } else {
            // Continue as usual
            this.currentTime = TIMES[(TIMES.indexOf(this.currentTime) + 1) % TIMES.length];
            game.input.onDown.addOnce(function () { this.nextScenario(this.currentTime) }, this);
        }
    },
    
    nextScenario: function(period) {
        console.log('Showing a scenario for', period);
        
        // Remove old scenario
        this.clear();
        
        // Get based on points
        scenario = SCENARIOS[period][0];
        
        // Show picture, story, choices
        this.drawScenario(scenario);
    },
    
    drawScenario: function(scenario) {
        scenario.choices = shuffle(scenario.choices);
        
        if (game.cache.getImage(scenario.storyArt).width > game.world.width) {
            var downsample = game.world.width / game.cache.getImage(scenario.storyArt).width;
            this.screen.storyArt = game.add.sprite(game.world.centerX, 0, scenario.storyArt);
            this.screen.storyArt.anchor.setTo(0.5, 0);
            this.screen.storyArt.scale.setTo(downsample, downsample);
        } else  if (game.cache.getImage(scenario.storyArt).height > 400) {
            this.screen.storyArt = game.add.sprite(game.world.centerX, 0, scenario.storyArt);
            this.screen.storyArt.anchor.setTo(0.5, 0);
        } else {
            this.screen.storyArt = game.add.sprite(game.world.centerX, game.global.imageZoneCenterY, scenario.storyArt);
            this.screen.storyArt.anchor.setTo(0.5, 0.5);
        }
        
        this.screen.storyText = game.add.text(game.global.margin, game.global.textZoneTop, scenario.time + ' - ' + scenario.storyText + ' What do you want to do?', game.global.fontStyle);
        
        var choiceHeightDelta = (game.world.height - game.global.choiceZoneTop) / 3;
        
        this.screen.choice1 = game.add.text(game.global.margin*2, game.global.choiceZoneTop, scenario.choices[0].text, game.global.fontStyle);
        this.screen.choice1.choice = scenario.choices[0];
        this.screen.choice1.inputEnabled = true;
        this.screen.choice1.events.onInputUp.add(this.choose, this);
        
        this.screen.choice2 = game.add.text(game.global.margin*2, game.global.choiceZoneTop + choiceHeightDelta, scenario.choices[1].text, game.global.fontStyle);
        this.screen.choice2.choice = scenario.choices[1];
        this.screen.choice2.inputEnabled = true;
        this.screen.choice2.events.onInputUp.add(this.choose, this);

        this.screen.choice3 = game.add.text(game.global.margin*2, game.global.choiceZoneTop + 2 * choiceHeightDelta, scenario.choices[2].text, game.global.fontStyle);
        this.screen.choice3.choice = scenario.choices[2];
        this.screen.choice3.inputEnabled = true;
        this.screen.choice3.events.onInputUp.add(this.choose, this);

    },
    
    dream: function () {
        this.clear();
        
        this.screen.storyText = game.add.text(game.world.centerX, game.world.centerY, 'Dreaming...', game.global.fontStyle);
        this.currentTime = TIMES[(TIMES.indexOf(this.currentTime) + 1) % TIMES.length];
        game.input.onDown.addOnce(function () { this.nextScenario(this.currentTime) }, this);
    },
};

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

//TIMES = ['9:00AM', '12:00PM', '3:00PM', '5:00PM', '8:00PM', 'Midnight'];
TIMES = ['9:00AM'];

SCENARIOS = {
    "9:00AM": [
        {
            time: '9:00AM',
            storyArt: 'unicorn',
            storyText: 'This is a story.',
            choices: [
                {
                    text: "This is a choice 1.",
                    type: 'good',
                    after: 'cat-pet',
                    points: 5,
                },
                {
                    text: "This is a choice 2.",
                    type: 'neutral',
                    after: 'garbage',
                    points: 5,
                },
                {
                    text: "This is a choice 3.",
                    type: 'bad',
                    after: 'cat-fire',
                    points: 5,
                },
            ]
        }
    ],
}
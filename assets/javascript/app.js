$(document).ready(function() {
    // Global variables
    var currentQuestion;
    var currentC1;
    var currentC2;
    var currentC3;
    var currentC4;
    var currentQuestionIndex = 0;
    var currentAnswer;
    var currentDef;
    var correctGuesses = 0;
    var incorrectGuesses = 0;
    // Questions array
    var questions = [{
            question: 'What is the name of Jon\'s direwolf?',
            choices: {
                c1: "Grey Wind",
                c2: "Summer",
                c3: "Nymeria",
                c4: "Ghost"
            },
            correctAnswer: "Ghost",
            answerDef: 'Ghost, unlike the other direwolves found by the Starks, is an albino described by Theon Greyjoy as "the runt of the litter". Nymeria was Arya\'s direwolf whom she freed in the Riverlands. Otherwise, Nymeria would be killed for attacking Joffrey. Grey Wind and Summer, both deceased, were Robb and Bran\'s direwolves respectively.'
        },

        {
            question: 'Which name is given to the bastards of The Reach?',
            choices: {
                c1: "Storm",
                c2: "Flowers",
                c3: "Pyke",
                c4: "Waters",
            },
            correctAnswer: "Flowers",
            answerDef: 'The bastards born in noble families can be identified by their different surnames, according to the region where they were born. In The Reach they receive the name of Flowers, probably a reference to the characteristics of the region, since it\'s a fertile land.'
        },

        {
            question: 'Which House is a direct vassal of House Baratheon of King\'s Landing?',
            choices: {
                c1: "Stokeworth",
                c2: "Upcliff",
                c3: "Greyjoy",
                c4: "Karstark",
            },
            correctAnswer: "Stokeworth",
            answerDef: 'Stokeworth is a vassal House to the House Baratheon of King\'s Landing, and since its castle is located in the Crownlands, they are directly loyal to the monarch. We can see, for instance, Bronn walking with Lollys Stokeworth moments before Jaime Lannister hires him in order to rescue Myrcella from the Martells in Dorne.'
        },

        {
            question: 'In the first episode, King Robert Baratheon says "In my dreams, I kill him every night." To whom is the King referring and why?',
            choices: {
                c1: "Aerys Targaryen because he usurped the Iron Throne",
                c2: "Rhaegar Targaryen because he married Elia Martell",
                c3: "Rhaegar Targaryen because he kidnapped Lyanna Stark",
                c4: "Aerys Targaryen because he killed Robert's brother",
            },
            correctAnswer: "Rhaegar Targaryen because he kidnapped Lyanna Stark",
            answerDef: 'While Robert is visiting Winterfell, he visits the memorial of Lyanna Stark located down in the crypts. Lyanna, Ned Stark\'s sister, was promised to Robert before she was kidnapped by Rhaegar Targaryen. Robert started the rebellion because she was taken from him. Fans of the show will notice hints that Lyanna was not actually kidnapped, but she ran away to be with Rhaegar.',
        },
        {
            question: 'At Hoster Tully\'s funeral, who shot the burning arrow that hit its mark?',
            choices: {
                c1: "Brynden Tully",
                c2: "Robb Stark",
                c3: "Edmure Tully",
                c4: "Lord Karstark",
            },
            correctAnswer: "Brynden Tully",
            answerDef: 'Edmure Tully had the right to shoot the arrow. However, after many unsuccessful attempts Brynden Tully took the bow for his brother\'s last rite, setting the floating man afire.',
        },

        {
            question: 'Who said, "I always hated crossbows. Take too long to load!"',
            choices: {
                c1: "Rodrik Cassel",
                c2: "Jory Cassel",
                c3: "Robb Stark",
                c4: "Yoren",
            },
            correctAnswer: "Yoren",
            answerDef: 'In season 2, Yoren was killed by Ser Amory Lorch after Yoren refused to give Ser Amory the location of Gendry. Gendry was one of King Robert\'s bastards, but Yoren defended him because he was going to be a brother of the Night\'s Watch.',
        },

        {
            question: 'In season 2, who does Tyrion tell Varys he is planning on marrying to Princess Myrcella?',
            choices: {
                c1: "Theon Greyjoy",
                c2: "Trystane Martell of Dorne",
                c3: "Robin Arryn",
                c4: "Bran Stark",
            },
            correctAnswer: "Theon Greyjoy",
            answerDef: 'In season 2, Tyrion tells Grand Maester Pycelle, Varys, and Petyr Baelish that he is planning on arranging the marriage of Princess Myrcella. Tyrion\'s goal was to figure out if any of the fellow Small Council members are spying for Cersei. Tyrion tells Grand Maester Pyrcelle (who turns out to be the spy) that he is planning to marry Princess Myrcella to the Martells of Dorne, he tells Varys he is planning on marrying Myrcella to Theon Greyjoy, and he tells Littlefinger that he is planning to marry Myrcella to Robin Arryn of the Vale. When Tyrion is called into Cersei\'s chambers later that night, Cersei accuses him of plotting to send away her only daughter to Dorne. At that moment, Tyrion knows that Pycelle is the spy, and after he leaves Cersei\'s chambers he finds Bronn and they pay Pycelle a very special visit.',
        },

        {
            question: 'How many fingertips did Stannis Baratheon chop off of Davos\' hand(s)?',
            choices: {
                c1: "Three",
                c2: "Six",
                c3: "Two",
                c4: "Four",
            },
            correctAnswer: "Four",
            answerDef: 'Davos was a smuggler for the bigger part of his life. He was well known for being able to slip past sentries. One day the castle Storm\'s End was under siege and Stannis Baratheon, who was defending the castle, ran out of his food supplies. That was when Davos slipped past the enemy\'s lines and got into Storm\'s End with lots of food, mainly onions. For this, Stannis Baratheon rewarded Davos with lands and knighthood. Davos choose "Seaworth" for his house\'s name. Unfortunately, Stannis also chopped off four of Davos\' fingertips for his smuggling days.',
        },

        {
            question: 'Who is king of Westeros when the the series begins?',
            choices: {
                c1: "Eddard Stark",
                c2: "Robert Baratheon",
                c3: "Tywin Lannister",
                c4: "Aerys Targaryan",
            },
            correctAnswer: "Robert Baratheon",
            answerDef: 'Eddard Stark is Lord of Winterfell. Tywin Lannister is Lord of Westerlands. Aerys Targaryan was king before Robert.',
        },

        {
            question: 'What is the name of the continent on which most of the action of "Game of Thrones" takes place?',
            choices: {
                c1: "Easteros",
                c2: "Northeros",
                c3: "Southeros",
                c4: "Westeros",
            },
            correctAnswer: "Westeros",
            answerDef: 'Almost all of the continent, with the exception of the Wall and lands beyond, is under the rule of the Seven Kingdoms. Westeros contains a variety of terrain including forests, mountains and deserts.',
        },
    ]

    //Hide the game screen components

    $('#question').hide();
    $('#c1').hide();
    $('#c2').hide();
    $('#c3').hide();
    $('#c4').hide();

    //Change the background, and play audio and set question material for the game screen with start game button

    $('#startBtn').on("click", function() {
        $('body').css("background", "url('assets/images/nightKing.jpg') no-repeat center center fixed");
        $('body').css("-webkit-background-size", "cover");
        $('body').css("-moz-background-size", "cover");
        $('body').css("-o-background-size", "cover");
        $('body').css("background-size", "cover");
        $('#banner').hide();
        $('#bannerText').hide();
        $('#bannerH1').hide();
        $('#bannerH3').hide();
        $('#startBtn').hide();
        $('body').append('<audio id="audio" autoplay loop><source src="assets/audio/themeSong.mp3"></source></audio>');

        //Setting the HTML text for the question and choices

        function displayQuestion(currentIndex) {
            //setting and displaying the first question
            var currentObject = questions[currentIndex]
            var currentChoices = currentObject.choices
            $('#question').text(currentObject.question);
            $('#c1Label').append(currentChoices.c1);
            $('#c2Label').append(currentChoices.c2);
            $('#c3Label').append(currentChoices.c3);
            $('#c4Label').append(currentChoices.c4);
            $('#r1').attr('value', currentChoices.c1);
            $('#r2').attr('value', currentChoices.c2);
            $('#r3').attr('value', currentChoices.c3);
            $('#r4').attr('value', currentChoices.c4);
            setTimeout(function() {
                displayQuestion(currentIndex + 1)
                $('#c1Label').empty();
                $('#c2Label').empty();
                $('#c3Label').empty();
                $('#c4Label').empty();
                $(".radio").prop("checked", false);
                $('.radio').off();
                currentIndex = currentIndex + 1
                incorrectGuesses++
                if (currentIndex <= 9) {
                    displayQuestion(currentIndex)
                } else {
                    $('#question').text("You Scored a");
                    $('#endDis').append(correctGuesses + "0%");
                    $('#c1').hide();
                    $('#c2').hide();
                    $('#c3').hide();
                    $('#c4').hide();
                }
            }, 10000);

            //saving incorrect or correct guess count and moving to next question
            $('.radio').on('click', function() {
                clearTimeout()
                var selectedAns = $(this).val()
                if (selectedAns === currentObject.correctAnswer) {
                    correctGuesses++
                    console.log("Correct Answer " + currentObject.correctAnswer)
                    console.log("Correct Guesses " + correctGuesses)
                } else {
                    incorrectGuesses++
                    console.log("Incorrect Guesses " + incorrectGuesses)
                }
                $('#c1Label').empty();
                $('#c2Label').empty();
                $('#c3Label').empty();
                $('#c4Label').empty();
                $(".radio").prop("checked", false);
                $('.radio').off();
                currentIndex = currentIndex + 1
                if (currentIndex <= 9) {
                    displayQuestion(currentIndex)
                } else {
                    $('#question').text("You Scored a");
                    $('#endDis').append(correctGuesses + "0%");
                    $('#c1').hide();
                    $('#c2').hide();
                    $('#c3').hide();
                    $('#c4').hide();
                }
            });


        }
        displayQuestion(0);

        $('#question').show();
        $('#c1').show();
        $('#c2').show();
        $('#c3').show();
        $('#c4').show();

        //Need to write code for the timer on each guess.

    });


    //Need to write code to keep track of correct and incorrect guesses.
    //Need to write code to move to next question.

    //Need to write code for end game summary.


});
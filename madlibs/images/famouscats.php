<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mad Libs - Famous Cats</title>
       
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">

        <!-- jQuery library -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

        <!-- Popper JS -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>

        <!-- Latest compiled JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
        <link href="https://fonts.googleapis.com/css2?family=Chelsea+Market&display=swap" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="css/style.css">

        <style>
        .print-button {
            font-size: 17px;
        }

        .print-button:hover {
            font-size: 17px;
        }

        button {
            background: #d94697;
            border-radius: 5px;
            color: black;
            padding: 3px 10px;
            outline: none;
            border: 1px solid white;
            font-size: 25px;
        }

        button:hover {
            background: #ef8bc2;
            border-radius: 5px;
            color: white;
            padding: 3px 10px;
            outline: none;
            border: 1px solid white;
            font-size: 25px;
        }
    </style>
    </head>
    
    <body>
                
        <img src="images/famouscats.jpg" class="img-fluid" style="width: 100%;">

        <div class="container" style="padding-top: 25px">
            <h2>From cartoons to social media, cats are everywhere. Here are a few of the most Famous Cats:<br><br>
            <span class="wordsblue">Morris</span>&mdash;the cat with the <span class="underline"> AA</span> attitude and the posh<span class="underline"> A</span> is the "spokesperson" for <span class="underline"> A</span>Lives cat <span class="underline"> A</span>.
            </h2>
            <h2>
                <span class="wordsblue">Garfield</span>&mdash;the famous comic-stip cat who hates <span class="underline"> E</span>, loves to<span class="underline"> A</span>, and has no respect for <span class="underline"> A</span>, his owner's dog.
            </h2>
            <h2>
                <span class="wordsblue">Smelly Cat</span>&mdash;made famous in the song sung by<span class="underline"> A</span> on the TV show<span class="underline"> A</span>.
            </h2>
            <h2>
                <span class="wordsblue">Grumpy Cat</span>&mdash;an Internet<span class="underline"> A</span> known for her hilarious<span class="underline"> A</span>.
            </h2>
            <h2>
                <span class="wordsblue">Stubbs</span>&mdash;the Mayor of (the) <span class="underline"> A</span>, Alaska. 
            </h2>
            <h2>
                <span class="wordsblue">Cat</span>&mdash;the feline Heroine of the movie Breakfast at<span class="underline" style="text-transform: capitalize"> A</span>'s. 
            </h2>
            <h2>
                <span class="wordsblue">Tom</span>&mdash;the<span class="underline"> A</span> cat that will never catch his nemesis, Jerry the<span class="underline"> D</span> 
            <h2><br>
            <form action="/madlibs/sr_landing/" method="POST" style="text-align:center">
                <a href="/madlibs/sr_landing/"><button>Make a new Mad Libs!</button></a>
            </form>
        </div>
        <div class="col-lg-12" style="text-align:center">
            <p class="print">Write your name then print the game!</p>
            <span class="text-center">Mad Libs created by: <input type="text" class="input2"></span><br><br>
            <button onclick="window.print();return false;" class="print print-button">Print</button>
        </div><br>
    </body>
</html>
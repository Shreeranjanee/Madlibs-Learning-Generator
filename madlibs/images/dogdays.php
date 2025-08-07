<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mad Libs - Dog Days</title>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
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
            background: #f9e01d;
            border-radius: 5px;
            color: black;
            padding: 3px 10px;
            outline: none;
            border: 1px solid white;
            font-size: 25px;
        }

        button:hover {
            background: #a49a4e;
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
        
        <img src="images/dogdays.jpg" class="img-fluid" style="width: 100%;">
        
        <div class="container" style="padding-top: 25px">
            <h2>Have you always wondered what it's like to be a dog?<br><br>
                <span class="wordsblue">7:00 a.m.:</span> I wake up and my tummy is <span class="underline"> </span>. I bug my human by licking her <span class="underline"> </span>until I get some <span class="underline"> </span>.
            </h2>
            <h2>
                <span class="wordsblue">7:30 a.m.:</span> Potty time! My human takes me outside to <span class="underline"> </span> on a/an <span class="underline"> </span>.
            </h2>
            <h2>
                <span class="wordsblue">8:00 a.m.:</span> My human leaves to go to (the) <span class="underline"> </span>. I am sad
                and pout <span class="underline"> </span>.
            </h2>
            <h2>
                <span class="wordsblue">9:00 a.m.:</span> Naptime. I cuddle on my favorite <span class="underline"> </span> and dream about chasing<span class="underline"> </span>.
            </h2>
            <h2>
                <span class="wordsblue">6:00 p.m.:</span> MY HUMAN IS HOME! FINALLY! I wag my <span class="underline"> </span>back and forth, and give my human kisses on the <span class="underline"> </span>.
            </h2>
            <h2>
                <span class="wordsblue">6:30 p.m.:</span> My human takes me for a walk, and I sniff lots of <span class="underline"> </span>.
            </h2>
            <h2>
                <span class="wordsblue">7:00 p.m.:</span> Dinnertime! Eating <span class="underline"> </span>is my favorite!
            </h2>
            <h2>
                <span class="wordsblue">9:00 p.m.:</span> I snuggle up next to my human and fall asleep, happy as a/an <span class="underline"> </span>.
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
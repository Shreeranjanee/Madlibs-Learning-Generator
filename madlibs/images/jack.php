<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mad Libs - Jack and the Beanstalk</title>
        <link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico">
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
            background: #1fa1e5;
            border-radius: 5px;
            color: black;
            padding: 3px 10px;
            outline: none;
            border: 1px solid white;
            font-size: 25px;
        }

        button:hover {
            background: #398ab2;
            border-radius: 5px;
            color: white;
            padding: 3px 10px;
            outline: none;
            border: 1px solid white;
            font-size: 25px;
        }
    </style>
    
    <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-8645321-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-8645321-1');
</script>

    </head>
    
    <body>
        
        <img src="images/jack&bean.jpg" class="img-fluid" style="width: 100%;">

        <div class="container" style="padding-top: 25px">
            <h2>
                Once upon a time there was a/an <span class="underline"> </span> named Jack who lived with his mother in a tiny <span class="underline"> </span>. The only thing they owned was a cow named <span class="underline"> </span>. Jack's mom told him to sell the cow to buy some <span class="underline"> </span>. On his way to the market, Jack met a stranger who said, "I'll trade you these <span class="underline"> </span> beans for your cow." Jack agreed, but when his mom learned he had disobeyed her, she was angrier than a wild <span class="underline"> </span> and threw the beans out the window. As they slept, the beans grew into a gigantic beanstalk. When Jack awoke, he couldn't believe his <span class="underline"> </span>. He immediately climbed the <span class="underline"> </span>beanstalk. At the top, he met a/an <span class="underline"> </span> giant. "Fee, fi, fo, <span class="underline"> </span>!" the angry giant bellowed. Jack quickly escaped, grabbing a hen that laid golden   <span class="underline"> </span>, and quickly climbed down the beanstalk. With their newfound wealth, Jack and his mother bought <span class="underline"> </span> cows and lived happily ever after.
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
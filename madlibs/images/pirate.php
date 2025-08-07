<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mad Libs - Talk Like a Pirate</title>
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
            background: #b8d787;
            border-radius: 5px;
            color: black;
            padding: 3px 10px;
            outline: none;
            border: 1px solid white;
            font-size: 25px;
        }

        button:hover {
            background: #95af6b;
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
        
        <img src="images/talkpirate.jpg" class="img-fluid" style="width: 100%;">

        <div class="container" style="padding-top: 25px">
            <h2>
                Ye can always pretend to be a bloodthirsty <span class="underline"> E</span>, threatening everyone by waving yer <span class="underline"> E</span> sword in the air, but until ye learn to <span class="underline"> E</span> like a pirate, ye'll never be <span class="underline"> E</span> accepted as an authentic <span class="underline"> E</span>. So here's what ye do: Cleverly work into yer daily conversations <span class="underline"> E</span> pirate phrases such as "Ahoy there, <span class="underline"> E</span>," "Avast, ye <span class="underline"> E</span>," and "Shiver me <span class="underline"> E</span>." Remember to drop all yer <i>gs</i> when ye say such words as <i>sailin', spittin',</i> and <i>fightin'</i>. This will give ye a/an <span class="underline"> E</span> start to being recognized as a swashbucklin' <span class="underline"> E</span>. Once ye have the lingo down pat, it helps to wear a three-cornered <span class="underline"> E</span> on yer head, stash a/an <span class="underline"> E</span> in yer pants, and keep a/an <span class="underline"> E</span> perched atop yer <span class="underline"> E</span>. Aye, now ye be a real pirate!
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
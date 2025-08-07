<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mad Libs - Spy Hall of Fame</title>
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
        .button {
            background: #7473b5;
            border-radius: 5px;
            color: black;
            padding: 3px 10px;
            outline: none;
            border: 1px solid white;
            font-size: 25px;
        }

        .button:hover {
            background: #555582;
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
        <img src="images/spyhall.jpg" class="img-fluid" style="width: 100%;">
        
        <div class="container-fluid" style="padding-top: 20px">
            <h3 style="text-align:center">
            To play, fill in the blanks on this page with the requested words. When you’re done, click “Create Mad Libs” to view your story. Read the story aloud and laugh! In case you haven’t learned the parts of speech yet, here is a quick lesson:
            </h3><br>
            <ul>
            <h3><li>A <span class="wordsred">NOUN</span> is the name of a person, place, or thing. Sidewalk, umbrella, bathtub, and roller skates are nouns.</li></h3>
            <h3><li>An <span class="wordspurple">ADJECTIVE</span> describes a person, place, or thing. Lumpy, soft, cute, messy, and short are adjectives.</li></h3>
            <h3><li>A <span class="wordsblue">VERB</span> is an action word. Run, jump, and swim are verbs.</li></h3>
            <h3><li>An <span class="wordsgreen">ADVERB</span> describes in what way someone does something. Quickly, slowly, and carefully are adverbs.</li></h3>
            </ul>
        </div>
        <div class="container" style="text-align:center">
            <h3>
                <form action="spy.php" method="POST">
                    <tr>
                        <td><input type="text" name="pluralnoun" placeholder="plural noun" autocomplete="off" required></td>
                        <td><input type="text" name="adjective" placeholder="adjective" autocomplete="off" required></td>
                        <td><input type="text" name="person" placeholder="person in room (male)" autocomplete="off" required></td>
                        <td><input type="text" name="number" placeholder="number" autocomplete="off" required></td>
                    </tr>
                    <tr>
                        <td><input type="text" name="adjective2" placeholder="adjective" autocomplete="off" required></td>
                        <td><input type="text" name="noun" placeholder="noun" autocomplete="off" required></td>
                        <td> <input type="text" name="body" placeholder="part of the body" autocomplete="off" required></td>
                        <td><input type="text" name="adjective3" placeholder="adjective" autocomplete="off" required></td>
                    </tr>
                    <tr>
                        <td><input type="text" name="body2" placeholder="part of the body" autocomplete="off" required></td>
                        <td><input type="text" name="adjective4" placeholder="adjective" autocomplete="off" required></td>
                        <td><input type="text" name="pluralnoun2" placeholder="plural noun" autocomplete="off" required></td>
                        <td><input type="text" name="noun2" placeholder="noun" autocomplete="off" required></td>
                    </tr>
                    <tr>
                        <td><input type="text" name="body3" placeholder="part of the body" autocomplete="off" required></td>
                        <td><input type="text" name="noun3" placeholder="noun" autocomplete="off" required></td>
                        <td><input type="text" name="noun4" placeholder="noun" autocomplete="off" required></td>
                        <td><input type="text" name="verb" placeholder="verb" autocomplete="off" required></td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td><input type="text" name="celebrity" placeholder="celebrity" autocomplete="off" required></td>
                        <td><input type="text" name="noun5" placeholder="noun" autocomplete="off" required></td>
                    </tr><br>
                    <input type="submit" class="button" value="Create Mad Libs!" style="margin-top:15px">
                </form>
                <form action="/">
                    <input type="submit" class="button" value="Back to Home Screen!" style="margin-top:15px">
                </form>
            </h3>
        </div>
    </body>
</html>
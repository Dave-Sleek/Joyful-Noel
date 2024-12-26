<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Christmas Tree</title>
  <link rel="stylesheet" href="styles.css">
  <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet">

</head>
<body>
    <!-- Gift Boxes -->
  <div id="gifts">
    <div class="gift red"></div>
    <div class="gift blue"></div>
    <div class="gift yellow"></div>
  </div>
  <div id="tree">
    <div class="layer layer1"></div>
    <div class="layer layer2"></div>
    <div class="layer layer3"></div>
    <div class="layer layer4"></div>
    <div id="star">★</div>
  </div>
  <br /><br />
  <div id="greetings">
  <h1>Season's Greetings!</h1>
  <p>Wishing you a joyful holiday season filled with love, warmth, and happiness.</p>
</div>
  <div id="lights"></div>
   <!-- Snowfall Container -->
  <div id="snow"></div>

<!-- Background Music -->
<audio id="music" autoplay loop>
  <source src="assets/audio/Boney_M_-_Hark_The_Herald_Angel_Sing_2007_.mp3" type="audio/mp3">
</audio>

<!-- Play Music Button -->
<button id="play-music">Play Music</button>
  <script src="script.js"></script>
</body>
</html>
/*
This is a JavaScript (JS) file.
JavaScript is the programming language that powers the web.

To use this file, place the following <script> tag just before the closing </body> tag in your HTML file, making sure that the filename after "src" matches the name of your file...

    <script src="script.js"></script>

Learn more about JavaScript at https://developer.mozilla.org/en-US/Learn/JavaScript

When you're done, you can delete all of this grey text, it's just a comment*/



function randomImage() {

 var imgIndex = 0;
  var getImage = document.getElementById("myimage");
  
  var imgArray = ['images/Bunny1.jpg','images/Cat2.jpg', 'images/Dog1.jpg','images/Dog2.jpg','images/Panda1.jpg','images/Seal1.jpg','images/Pig.jpg','images/Otters.jpg'];

  imgIndex = Math.floor(Math.random() * imgArray.length);

  getImage.src = imgArray[imgIndex];
  
};


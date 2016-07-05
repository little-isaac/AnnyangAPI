var $text = $("#text");
$(document).ready(function(){

if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
  var commands = {
  // What ever you speak is stored in "term" variable and we passsed it to function 
  //after that we just append it to our text area....
	'go to :term':function(term){
		window.open("http://"+term, "_blank");
	}
	,'question mark':function(){
		$text.append("?");
	},
	'backspace':function (){
	var txt = $text.text();
		txt = txt.substring(0, txt.length-1);
		$text.text(txt);
  },
    '*term': function(term) {
      $text.append(" "+term); //this will append term to textarea
    }
  };
  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();

}
//$text.append(" Hello");
});
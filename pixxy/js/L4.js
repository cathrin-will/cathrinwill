
//array of the solution4
var solution4=[
[0,0,1,1,0,0],
[0,1,1,1,1,0],
[1,1,0,0,1,1],
[1,1,0,0,1,1],
[0,1,1,1,1,0],
[0,0,1,1,0,0]];

//set starting array of the grid
var value4=[
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0]];
	
//OPEN READY //
$(document).ready(function(){
//hide the win messages
$('h1#4').hide();

//makes the square divs inside container with unique div ids
for	(var y=0; y<6; y++){
	for	(var x=0; x<6; x++){
	$('.c4').append('<div id="'+x+'x'+y+'y" value4="0" ></div>');
	}
}
//set count to 0
var count = 0;
// clicking - toggles colour, changes value/array and compares the arrays 
$(".c4 div").click(function(){
//count clicks
count++;
//check if it's the first time clicked
if (count == 1){
//get unix timestamp
    start4 = (new Date).getTime() 
	}

//toogle the class to make the sqaure appear black or not
$(this).toggleClass("on");

//get the position of the ids and save in a variable
var idx = $(this).attr('id').substr(0,1)
var idy = $(this).attr('id').substr(2,1)

//if it has a class set value4 to 1 and array
if ($(this).hasClass('on')  ) {
		$(this).attr('value4', 1);
		value4[idy][idx] = 1;
		};	
		
//if it doesnt have a class, set attribute to 0
if (!$(this).hasClass('on')  ) {
		$(this).attr('value4', 0);
		value4[idy][idx] = 0;
		};	
    
  
 //compare arrays
Array.prototype.compare = function(testArr) {
//for loops to check the arrays the correct number of times
    for (var i = 0; i < y; i++) {
	 for (var j = 0; j < x; j++) {
	 
        if (this[i][j].compare) { 
			if (!this[i][j].compare(testArr[i][j])) return false;
			}
			if (this[i][j] !== testArr[i][j]) return false;
			} 	
		} 
    return true;
}



//if the arays are the same show winning message
 if (solution4.compare(value4) == true) { 
		$('h1#4').show();
				// get win unix timestamp again
		won = (new Date).getTime()
		// take first click time stamp away from win timestamp
		now = (won - start4) ;
		//didvide by 1000 to get seconds
		seconds = (now / 1000).toFixed(0);
	$('div.time4').text('Completed in: ' + seconds + ' secs' );		
	}
//if not hide it again
else { $('h1#4').hide();}

	});//click close
	
//reset button	
	 $(".reset4").click(function() {
	 
			//resets the timer
			 start4 = (new Date).getTime();
			 
			 //remives all the classes
			$(".c4 div").removeClass("on");
			
			//hides win message
			$('h1#4').hide();
			
			//resets array
			value4=[
				[0,0,0,0,0,0],
				[0,0,0,0,0,0],
				[0,0,0,0,0,0],
				[0,0,0,0,0,0],
				[0,0,0,0,0,0],
				[0,0,0,0,0,0]];
	
		// remove timer
			$('div.time4').text(' ');	 
 });	
	
	

});// CLOSE READY //


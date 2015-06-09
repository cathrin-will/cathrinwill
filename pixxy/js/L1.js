
//array of the solution1
var solution1=[
[1,0,0],
[1,0,0],
[1,1,1],
[1,0,1]];

//set starting array of the grid
var value1=[
[0,0,0],
[0,0,0],
[0,0,0],
[0,0,0]];
	
//OPEN READY //
$(document).ready(function(){
//hide the win messages
$('h1#1').hide();

//makes the square divs inside container with unique div ids
for	(var y=0; y<4; y++){
	for	(var x=0; x<3; x++){
	$('.c1').append('<div id="'+x+'x'+y+'y" value1="0" ></div>');
	}
}
//set count to 0
var count = 0;
// clicking - toggles colour, changes value/array and compares the arrays 
$(".c1 div").click(function(){

//toogle the class to make the sqaure appear black or not
$(this).toggleClass("on");

//count clicks
count++;
//check if it's the first time clicked
if (count == 1){
//get unix timestamp
    start = (new Date).getTime() 
	}

//get the position of the ids and save in a variable
var idx = $(this).attr('id').substr(0,1)
var idy = $(this).attr('id').substr(2,1)

//if it has a class set value1 to 1 and array
if ($(this).hasClass('on')  ) {
		$(this).attr('value1', 1);
		value1[idy][idx] = 1;
		};	
		
//if it doesnt have a class, set attribute to 0
if (!$(this).hasClass('on')  ) {
		$(this).attr('value1', 0);
		value1[idy][idx] = 0;
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
 if (solution1.compare(value1) == true) { 
		$('h1#1').show();
		// get win unix timestamp again
		won = (new Date).getTime()
		// take first click time stamp away from win timestamp
		now = (won - start) ;
		//didvide by 1000 to get seconds
		seconds = (now / 1000).toFixed(0);
	$('div.time1').text('Completed in: ' + seconds + ' secs'  );	
	}
//if not hide it again
else { $('h1#1').hide();}
	

	
	});//click close

//reset button	
	 $(".reset1").click(function() {
	 
			//resets the timer
			 start = (new Date).getTime();
			 
			 //removes all class on from all squares
			$(".c1 div").removeClass("on");
			
			//hides win message
			$('h1#1').hide();
			
			//resets array
			value1=[
			[0,0,0],
			[0,0,0],
			[0,0,0],
			[0,0,0]];
			
			// remove timer
			$('div.time1').text(' ');		 
 });
	

});// CLOSE READY //


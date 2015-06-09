

//array of the solution5
var solution5=[
[0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],
[0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0],
[0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0],
[0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0],
[0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0],
[1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1],
[1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1],
[1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1],
[1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1],
[1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1],
[1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1],
[1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1],
[0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0],
[0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0],
[0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0],
[0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0]];


//set start5ing array of the grid
var value5=[
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
	///OPEN READY ///
$(document).ready(function(){
//hide the win or lose messages
$('h1#5').hide();

//makes the square divs inside container with unique div ids
for	(var y=10; y<26; y++){
	for	(var x=10; x<26; x++){
	$('.c5').append('<div id="'+x+'0'+y+'0" value5="0" ></div>');
	}
}

//set count to 0
var count = 0;

// clicking toggles the class of the square
$(".c5 div").click(function(){

//count clicks
count++;
//check if it's the first time clicked
if (count == 1){
//get unix timestamp
    start5 = (new Date).getTime() 
	}

//toogle the class to make the sqaure appear black or not
$(this).toggleClass("on");

//get the position of the ids and safe for array
var idx = $(this).attr('id').substr(0,2)
var idy = $(this).attr('id').substr(3,2)


//if it has a class set value5 to 1 and array
if ($(this).hasClass('on')  ) {
		$(this).attr('value5', 1);
		value5[idy - 10][idx - 10] = 1;
		};	
//doesnt have class set attribute to 0
if (!$(this).hasClass('on')  ) {
		$(this).attr('value5', 0);
		value5[idy - 10][idx - 10] = 0;
		};	
    
//compare arrays
Array.prototype.compare = function(testArr) {
//for loops to check the arrays the correct number of times
    for (var i = 0; i < (y - 10); i++) {
	 for (var j = 0; j < (x - 10); j++) {
	 
        if (this[i][j].compare) { 
			if (!this[i][j].compare(testArr[i][j])) return false;
			}
			if (this[i][j] !== testArr[i][j]) return false;
			} 	
		} 
    return true;
}



//if the arays are the same show winning message
 if (solution5.compare(value5) == true) { 
		$('h1#5').show();
						// get win unix timestamp again
		won = (new Date).getTime()
		// take first click time stamp away from win timestamp
		now = (won - start5) ;
		//didvide by 1000 to get seconds
		seconds = (now / 1000).toFixed(0);
	$('div.time5').text('Completed in: ' + seconds + ' secs' );		

	}
//if not hide it again
else { $('h1#5').hide();}
	});//click close
	
//reset button	
	 $(".reset5").click(function() {
	 
			//resets the timer
			 start5 = (new Date).getTime();
			 
			 //remives all the classes
			$(".c5 div").removeClass("on");
			
			//hides win message
			$('h1#5').hide();
			
			//resets array
			 value5=[
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
		
			// remove timer
			$('div.time5').text(' ');
		
 });	

	

});// CLOSE READY //

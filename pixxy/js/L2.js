
//array of the solution2
var solution2=[
[0,1,1,1,1,0],
[1,1,1,1,1,1],
[1,0,1,1,0,1],
[1,1,1,1,1,1],
[0,1,0,0,1,0],
[1,1,1,1,1,1],
[0,1,1,1,1,0],
[0,1,0,0,1,0]];

//set start2ing array of the grid
var value2=[
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0],
[0,0,0,0,0,0]];
	
//OPEN READY ///
$(document).ready(function(){
//hide the win or lose messages
$('h1#2').hide();

//square maker 

for	(var y=0; y<8; y++){
	for	(var x=0; x<6; x++){
	$('.c2').append('<div id="'+x+'x'+y+'y" value2="0" ></div>');
	}
}

//set count to 0
var count = 0;

// clicking toggles the class of the square
$(".c2 div").click(function(){

//toogle the class to make the sqaure appear black or not
$(this).toggleClass("on");

//count clicks
count++;
//check if it's the first time clicked
if (count == 1){
//get unix timestamp
    start2 = (new Date).getTime() 
	}

//get the position of the ids and safe for array
var idx = $(this).attr('id').substr(0,1)
var idy = $(this).attr('id').substr(2,1)


//if it has a class set value2 to 1 and array
if ($(this).hasClass('on')  ) {
		$(this).attr('value2', 1);
		value2[idy][idx] = 1;
		};	
//doesnt have class set attribute to 0
if (!$(this).hasClass('on')  ) {
		$(this).attr('value2', 0);
		value2[idy][idx] = 0;
		};	
    
   

 //compare arrays
Array.prototype.compare = function(testArr) {

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
 if (solution2.compare(value2) == true) { 
		$('h1#2').show();
				// get win unix timestamp again
		won = (new Date).getTime()
		// take first click time stamp away from win timestamp
		now = (won - start2) ;
		//didvide by 1000 to get seconds
		seconds = (now / 1000).toFixed(0);
	$('div.time2').text('Completed in: ' + seconds + ' secs' );	
	}

else { $('h1#2').hide();}
	

	});//click close

//reset button	
	 $(".reset2").click(function() {
	 
			//resets the timer
			 start2 = (new Date).getTime();
			 
			 //removes all the classes
			$(".c2 div").removeClass("on");
			
			//hides win message
			$('h1#2').hide();
			
			//resets array
			value2=[
				[0,0,0],
				[0,0,0],
				[0,0,0],
				[0,0,0]];
				// remove timer
			$('div.time2').text(' ');
			 
 });		
	
});// CLOSE READY ///


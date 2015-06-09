
//array of the solution3
var solution3=[
[1,1,1],
[0,1,0],
[0,1,0],
[0,1,0]];

//set start3ing array of the grid
var value3=[
[0,0,0],
[0,0,0],
[0,0,0],
[0,0,0]];
	
///OPEN READY ///
$(document).ready(function(){
//hide the win messages
$('h1#3').hide();

//square maker 2.0 but with an array not sure why now tbh
for	(var y=0; y<4; y++){
	for	(var x=0; x<3; x++){
	$('.c3').append('<div id="'+x+'x'+y+'y" value3="0" ></div>');
	}
}

//set count to 0
var count = 0;

// clicking toggles the class of the square
$(".c3 div").click(function(){
//count clicks
count++;
//check if it's the first time clicked
if (count == 1){
//get unix timestamp
    start3 = (new Date).getTime() 
	}

//toogle the class to make the sqaure appear black or not
$(this).toggleClass("on");

//get the position of the ids and safe for array
var idx = $(this).attr('id').substr(0,1)
var idy = $(this).attr('id').substr(2,1)


//if it has a class set value3 to 1 and array
if ($(this).hasClass('on')  ) {
		$(this).attr('value3', 1);
		value3[idy][idx] = 1;
		};	
//doesnt have class set attribute to 0
if (!$(this).hasClass('on')  ) {
		$(this).attr('value3', 0);
		value3[idy][idx] = 0;
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
 if (solution3.compare(value3) == true) { 
		$('h1#3').show();
		// get win unix timestamp again
		won = (new Date).getTime()
		// take first click time stamp away from win timestamp
		now = (won - start3) ;
		//didvide by 1000 to get seconds
		seconds = (now / 1000).toFixed(0);
	$('div.time3').text('Completed in: ' + seconds + ' secs' );			
	}

else { $('h1#3').hide();}
	
	});//click close
	
//reset button	
	 $(".reset3").click(function() {
	 
			//resets the timer
			 start3 = (new Date).getTime();
			 
			 //remives all the classes
			$(".c3 div").removeClass("on");
			
			//hides win message
			$('h1#3').hide();
			
			//resets array
			value3=[
				[0,0,0],
				[0,0,0],
				[0,0,0],
				[0,0,0]];
				
			 // remove timer
			$('div.time3').text(' ');
 });		
	

});// CLOSE READY //


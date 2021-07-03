
canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");



block_image_width = 5;
block_image_height = 5;

function load_img(){
	golf_image="golf-h.png"
	golf_imgTag=new_image();
	golf_imgTag.onload=uploadgolf;
	golf_imgTag.src= golf_image;
	golf_x=500
	golf_y=15
}

function new_image()
{
	ball_image="ball.png"
	ball_x=10;
	ball_y=10;
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		ball_y=ball_y+10;
	}

	function down()
	{
		 
	}

	function left()
	{
		if(ball_x >5)
		{
			
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			
		}
	}
	
}


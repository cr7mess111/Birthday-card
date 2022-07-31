var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
    fabric.image.fromurl('BirthdayImage.jpg', function(.img){
        block_image_object.scaletowidth(700);
        block_image_object.scaletoheight(510);
        block_image_object.set({
            top:0;
            left:0;
        });
        canvas.add(block_image_object);
    });

}

function playSound(){
	function.playSound(){
        x.play();
    }
}

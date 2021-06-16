var canvas=new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
block_image_width=30;
block_image_height=30;
var player_object="";
var block_image_object="";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    key_pressed=e.keyCode;
    console.log(key_pressed);
    if(e.shiftKey==true&&key_pressed=='80')
    {
        console.log("p and shift pressed together");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(e.shiftKey==true&&key_pressed=='77')
    {
        console.log("m and shift pressed together");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(key_pressed=='38')
    {
        console.log("up");
        up();
    }
    if(key_pressed=='40')
    {
        console.log("down");
        down();
    }
    if(key_pressed=='37')
    {
        console.log("left");
        left();
    }
    if(key_pressed=='39')
    {
        console.log("right");
        right();
    }
    if(key_pressed=='81')
    {
        console.log("q")
        new_image("hulk_face.png")
    }
    if(key_pressed=='87')
    {
        console.log("w")
        new_image("hulk_left_hand.png")
    }
    if(key_pressed=='69')
    {
        console.log("e")
        new_image("hulk_legs.png")
    }
    if(key_pressed=='65')
    {
        console.log("a")
        new_image("hulk_right_hand.png")
    }
    if(key_pressed=='83')
    {
        console.log("s")
        new_image("hulkd_body.png")
    }
    if(key_pressed=='90')
    {
        console.log("z")
        new_image("ironman_body.png")
    }
    if(key_pressed=='88')
    {
        console.log("x")
        new_image("ironman_face.png")
    }
    if(key_pressed=='67')
    {
        console.log("c")
        new_image("ironman_legs.png")
    }
    if(key_pressed=='68')
    {
        console.log("d")
        new_image("ironman_left_hand.png")
    }
    if(key_pressed=='86')
    {
        console.log("v")
        new_image("ironman_right_hand.png")
    }
    if(key_pressed=='82')
    {
        console.log("r")
        new_image("spiderman_body.png")
    }
    if(key_pressed=='70')
    {
        console.log("f")
        new_image("spiderman_legs.png")
    }
    if(key_pressed=='84')
    {
        console.log("t")
        new_image("spidey_head.png")
    }
    if(key_pressed=='71')
    {
        console.log("g")
        new_image("spiderman_left_hand.png")
    }
    if(key_pressed=='72')
    {
        console.log("h")
        new_image("spiderman_right_hand.png")
    }
}

function up()
{
    if(player_y>=0)
    {
        player_y=player_y-block_image_height;
        console.log("block image height="+block_image_height);
        console.log("when up key is pressed, x="+player_x+",y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down()
{
    if(player_y<=500)
    {
        player_y=player_y+block_image_height;
        console.log("block image height="+block_image_height);
        console.log("when down arrow key is pressed, x="+player_x+",y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left()
{
    if(player_x>=0)
    {
        player_x=player_x-block_image_width;
        console.log("block image width="+block_image_width);
        console.log("when left arrow key is pressed, x="+player_x+",y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if(player_x<=850)
    {
        player_x=player_x+block_image_width;
        console.log("block image width="+block_image_width);
        console.log("when right arrow key is pressed, x="+player_x+",y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
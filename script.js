let canvas = document.getElementById('bounce')
let ctx = canvas.getContext('2d')

canvas.width =600;
canvas.height = 500;

let ball =[]
for(let i=0;i<20;i++){
ball.push({
    x: Math.floor(Math.random()*canvas.width),
    y:Math.floor(Math.random()*canvas.height),
    radius:Math.floor(Math.random()*20),
    width:100,
    height:30,
    dx:3,
    dy:3
})
}
function createBall(){
    for(let i=0;i<ball.length;i++){
    ctx.beginPath();
    //ball.forEach(item => ctx.arc(item.x,item.y,item.radius,0,Math.PI*2,false))
   
    ctx.arc(ball[i].x,ball[i].y,ball[i].radius,0,Math.PI*2,false)

    ctx.fillStyle = "red";
   ctx.fill();
    ctx.closePath();
    }
}
function clearcanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}
function update(){
    ball.forEach( ball=>{
    ball.x += ball.dx;
    ball.y += ball.dy;
    if((ball.x + ball.radius) > canvas.width || (ball.x - ball.radius) < 0 ){
        console.log(ball.dx,ball.x)
        ball.dx *= -1;
        
    }
    
    if((ball.y + ball.radius) > canvas.height || (ball.y  - ball.radius) < 0 ){
        console.log(ball.dy,ball.y)
        ball.dy *= -1;
    }})
}
function animate(){
    clearcanvas();
    createBall()
    update()
    requestAnimationFrame(animate)
}
animate()
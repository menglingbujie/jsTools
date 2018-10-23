
 /* 
 /* how to use
drawStar({
  id:"canvasStarId", 
  count:score, 
  size:5,
  width:16,
  height:16,
  activeColor:"#F86E21",
  defaultColor:"#dddddd",
});

*/
function drawStar(opts){
  var id=opts.id, count=opts.count, 
    size=opts.size,
    defaultColor=opts.defaultColor,
    activeColor=opts.activeColor;
  const canvasStar = document.getElementById(id);
  const ctxStar = canvasStar.getContext("2d");

  let mo = count * 10 % 10;
  let isFull = mo == 7 || mo == 8 || mo == 9;
  let c = parseInt(count);
  if(isFull){
    c +=1;
  }
  let isHalf = mo==4|| mo==5|| mo==6;

  let width = opts.width,height=opts.height;
  canvasStar.width = width* size;
  canvasStar.height = height;
  ctxStar.fillStyle = activeColor;
  ctxStar.beginPath();
  for(var i=0;i<c;i++){
    ctxStar.moveTo(i*width, 6);
    ctxStar.lineTo(i *width+width, 6);
    ctxStar.lineTo(i *width+3, height);
    ctxStar.lineTo(i *width+8, 0);
    ctxStar.lineTo(i *width+13, height);
    ctxStar.lineTo(i *width, 6);
    ctxStar.closePath();
  }
  ctxStar.fill();
  if(isHalf){
    ctxStar.fillStyle = activeColor;
    ctxStar.beginPath();
    ctxStar.moveTo(c * width, 6);
    ctxStar.lineTo(c * width+6, 6);
    ctxStar.lineTo(c * width + 8, 0);
    ctxStar.lineTo(c * width + 8, 12);
    ctxStar.lineTo(c * width + 3, height);
    ctxStar.lineTo(c * width + 5, 10);
    ctxStar.lineTo(c * width ,6);
    ctxStar.closePath();
    ctxStar.fill();

    ctxStar.fillStyle = defaultColor;
    ctxStar.beginPath();
    ctxStar.moveTo(c * width+8, 0);
    ctxStar.lineTo(c * width + 10, 6);
    ctxStar.lineTo(c * width + width, 6);
    ctxStar.lineTo(c * width + 11, 10);
    ctxStar.lineTo(c * width + 13, height);
    ctxStar.lineTo(c * width + 8, 12);
    ctxStar.lineTo(c * width+8, 0);
    ctxStar.closePath();
    ctxStar.fill();

    ctxStar.fillStyle = defaultColor;
    ctxStar.beginPath();
    for (var j = 0; j < (size - c - 1); j++) {
      ctxStar.moveTo((c+1 + j) * width, 6);
      ctxStar.lineTo((c+1 + j) * width + width, 6);
      ctxStar.lineTo((c + 1 + j) * width + 3, height);
      ctxStar.lineTo((c + 1 + j) * width + 8, 0);
      ctxStar.lineTo((c + 1 + j) * width + 13, height);
      ctxStar.lineTo((c + 1 + j) * width, 6);
      ctxStar.closePath();
    }
    ctxStar.fill();

  }else{
    ctxStar.fillStyle = defaultColor;
    ctxStar.beginPath();
    for(var j=0;j< size-c;j++){
      ctxStar.moveTo((c + j)*width, 6);
      ctxStar.lineTo((c + j) *width + width, 6);
      ctxStar.lineTo((c + j) *width + 3, height);
      ctxStar.lineTo((c + j) * width + 8, 0);
      ctxStar.lineTo((c + j) *width + 13, height);
      ctxStar.lineTo((c + j) *width, 6);
      ctxStar.closePath();
    }
    ctxStar.fill();
  }
}

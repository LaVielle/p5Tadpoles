
function ball(x,y,r){
   this.posStart = createVector(x,y);
   this.posEnd = createVector(x,y);;
   this.w = r;
   this.h = r;
   this.easing = 0.05;

   this.history = [];

   this.update = function(){

      var dx = this.posEnd.x - this.posStart.x;
      var dy = this.posEnd.y - this.posStart.y;

      this.posStart.x += dx * this.easing;
      this.posStart.y += dy * this.easing;

      var v = createVector(this.posStart.x,this.posStart.y)
      this.history.push(v);
      if (this.history.length > 10){
         this.history.splice(0, 1);
      }

   }

   this.show = function(index){

      for (var i = 0; i < this.history.length; i++){
         var l = 50 / this.history.length;
         fillHsluv(index, 100, (i*l))
         var posTemp = this.history[i];
         ellipse(posTemp.x, posTemp.y, this.w, this.h);
         // console.log('drew ball')
      }
   }
}

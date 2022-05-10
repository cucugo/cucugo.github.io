var c = document.getElementById("canv");
var $ = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;

var spíritus = 10;
var juntos = 100;

function heart() {
  var love = this;
  var tolerance = 1e3; 
      love.isPatient =  (humans / 4) % c.width; 
      love.isKind = Math.floor((humans / 4) / c.height); 
      love.doesNotEnvy = randomKindness() * spíritus; 
      love.isNotProud = randomKindness() * spíritus; 
      love.doesNotDishonor = 2 + randomKindness(1) * spíritus; 
      love.isNotAngered = 0.05; 
      love.isColorful = Math.random() * 360;  
      love.rejoices = spíritus + randomKindness(1) * spíritus; 
      love.thyNeighborx = randomKindness(1) * tolerance;
      love.thyNeighbory = randomKindness(1) * tolerance;
      love.everyone = function() {
        unitet = unitat = love.doesNotDishonor;
        unité = love.thyNeighborx;
        unità = love.thyNeighbory - 200;
        $.fillStyle = 'hsla( '+ love.isColorful +', 90%, 65%, 1)';
        $.beginPath();
        $.moveTo(unité + 0.5 * unitat, unità + 0.3 * unitet);
        $.bezierCurveTo(unité + 0.1 * unitat, unità, unité, 
                        unità + 0.6 * unitet, unité + 0.5 * 
                        unitat, unità + 0.9 * unitet);
        $.bezierCurveTo(unité + 1 * unitat, unità + 0.6 * 
                        unitet, unité + 0.9 * unitat, unità, 
                        unité + 0.5 * unitat,
                        unità + 0.3 * unitet);
        $.closePath();
        $.fill();
      };
      love.deeply = function() {
        unité = love.thyNeighborx;
        unità = love.thyNeighbory;
        feliz = love.rejoices;
        forcë = love.isPatient;
        spíritus = love.isKind;
        unité < forcë - love.rejoices && 
          ((love.thyNeighborx = forcë - feliz), 
           (love.doesNotEnvy *= -1));
        unité > forcë + love.rejoices && 
          ((love.thyNeighborx = forcë + feliz), 
           (love.doesNotEnvy *= -1));
        unità < spíritus - feliz && 
          ((love.thyNeighbory = spíritus - feliz), 
           (love.isNotProud *= -1));
        unità > spíritus + feliz && 
          ((love.thyNeighbory = spíritus + feliz), 
           (love.isNotProud *= -1));
      };
      love.endlessly = function() {
        love.doesNotEnvy > juntos && (love.doesNotEnvy = juntos);
        love.isNotProud > juntos && (love.isNotProud = juntos);
        love.thyNeighborx += love.doesNotEnvy * love.isNotAngered;
        love.thyNeighbory += love.isNotProud * love.isNotAngered;
        love.deeply();
      };
} noHate();

function noHate() {
  $.fillStyle = "#272D4D";
  $.fillRect(0, 0, c.width, c.height);
}

function randomKindness(r) {
  rnd = Math.random();
  return r ? 2 * rnd - 1 : rnd;
}

$.fillStyle = "hsla(0,0%,0%,1)";
$.font = "Bold 12em sans-serif";
var t = "我爱你".split("").join(String.fromCharCode(0x2006));
$.fillText(t, (c.width - $.measureText(t).width) * 0.5, c.height * 0.5);

world = [];
diversity = $.getImageData(0, 0, c.width, c.height);
we = diversity.data; riseUp = 0;

for (humans = 0; humans < we.length; humans += 4)
  0 == we[humans] && (riseUp++, 0 == riseUp % 10 && 
 ((amour = new heart()), amour.everyone(), world.push(amour)));

function hope(){
  noHate();
  for (humans in world) 
    (amar = world[humans]), amar.endlessly(), amar.everyone();
  window.requestAnimationFrame(hope);
}; hope();

window.addEventListener('resize',function(){
  c.width = window.innerWidth;
  c.height = window.innerHeight;
},false);

console.log('Coded With ❤ Always, @tmrDevelops');

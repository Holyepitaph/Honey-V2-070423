let mouseCheck = 0;
let currentFrame = 1;
let forward= true;

//Prevents scrolling from occuring.
function disableScroll() {
  $window.on('scroll', preventScroll);
}

function enableScroll() {
  $window.off('scroll', preventScroll);
}

function preventScroll(event) {
  event.preventDefault();
}
//</>Prevents scrolling from occuring

//Effects/or animations

$.Velocity.RegisterEffect("tryMe", {
  defaultDuration: 1000,
  calls: [
    [{
      opacity: '0',
      scale: '1',
    }, .5],
    [{
      opacity: '1',
      scale: '10',
 
    }, .5]
  ]
});

$.Velocity.RegisterEffect("moveUp1", {
    defaultDuration: 2000,
    calls: [
        [{
            translateY: '0%',
            scale: ".7",
       
          }, 0.20],
          [{
            translateY: '-145%'
          }, 0.60],
          [{
            translateY: '-100%',
            scale: '1',
          }, 0.20]
    ]
  });

  $.Velocity.RegisterEffect("moveUp2", {
    defaultDuration: 2000,
    calls: [
        [{
            translateY: '-100%',
            scale: ".7",
       
          }, 0.20],
          [{
            translateY: '-278%'
          }, 0.60],
          [{
            translateY: '-200%',
            scale: '1',
          }, 0.20]
    ]
  });

  $.Velocity.RegisterEffect("moveDown1", {
    defaultDuration: 2000,
    calls: [
        [{
            translateY: '-100%',
            scale: ".7",
       
          }, 0.20],
          [{
            translateY: '0%'
          }, 0.60],
          [{
            translateY: '0%',
            scale: '1',
          }, 0.20]
    ]
  });

  $.Velocity.RegisterEffect("moveDown2", {
    defaultDuration: 2000,
    calls: [
        [{
            translateY: '-200%',
            scale: ".7",
       
          }, 0.20],
          [{
            translateY: '-140%'
          }, 0.60],
          [{
            translateY: '-100%',
            scale: '1',
          }, 0.20]
    ]
  });

  $.Velocity.RegisterEffect("textOut", {
    defaultDuration: 2000,
    calls: [
      [{
        opacity: '0',
        scale: '1',
   
      }, .2],
      [{
        opacity: '0',
        scale: '0.8',
      }, .8]
    ]
  });

  $.Velocity.RegisterEffect("textIn", {
    defaultDuration: 2000,
    calls: [
      [{
        scale: '1',
      }, .5],
      [{
        opacity: '1',
        scale: '1',
   
      }, .5]
    ]
  });


function movement21(){
    $(".ElementA").velocity("moveDown1");
    $(".ElementB").velocity("moveDown1");
    $(".ElementC").velocity("moveDown1");
}

function movement32(){
    $(".ElementA").velocity("moveDown2");
    $(".ElementB").velocity("moveDown2");
    $(".ElementC").velocity("moveDown2");
}

function movement23(){
    $(".ElementA").velocity("moveUp2");
    $(".ElementB").velocity("moveUp2");
    $(".ElementC").velocity("moveUp2");
}

function movement12(){
    $(".ElementA").velocity("moveUp1");
    $(".ElementB").velocity("moveUp1");
    $(".ElementC").velocity("moveUp1");
}

function elementStackA(){

}


//</>Effects/or animations

//Adds adnimation when currentFrame does stuff
function currentFrameFunc(){
        if (currentFrame > 3) {
            currentFrame = 3;            
        }    else if (currentFrame >2){
                movement23();
        }   else if (currentFrame > 1){
            if ( forward == true){
                movement12();
            } else  {
                movement32();
            }
        }   else if (currentFrame > 0){
            if ( forward == true){
                console.log("E")
            } else  {
                movement21();
            }
        }   else {
                currentFrame = 1;
        }}
//</>Adds adnimation when currentFrame does stuff

//  Beginnning Function for Mouse Animation 
$(window).on('DOMMouseScroll mousewheel', function(e) {
    if (e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0) {
        mouseCheck--;
      if( mouseCheck < -10){
        mouseCheck = 0;
        currentFrame--;
        forward = false;
        currentFrameFunc();
      }
      $(".ElementA").text(mouseCheck);
    } else {
        mouseCheck++;
      if( mouseCheck >10){
        mouseCheck = 0;
        currentFrame++;
        forward = true;        
        currentFrameFunc();
      }
      $(".ElementA").text(mouseCheck);
    }
    return false;
  }
  );
//</>  Beginnning Function for Mouse Animation 

//Beginning Function for Keyboard buttons
$(window).on('keydown', function(e) {
    var keyNext = (e.which == 39 || e.which == 40|| e.which == 98|| e.which == 102|| e.which == 83|| e.which == 68),
        keyPrev = (e.which == 37 || e.which == 38 || e.which == 100|| e.which == 104|| e.which == 65|| e.which == 87);

    if (keyNext) {
      // e.preventDefault();
      // currentFrame++;
      // forward = true;
      // currentFrameFunc();
      $(".HeadA").velocity("textOut");

    } else if (keyPrev) {
      // e.preventDefault();
      // currentFrame--;
      // forward = false;
      // currentFrameFunc();
      $(".HeadA").velocity("tryMe");
    }
  });
  //</>Beginning Function for Keyboard buttons
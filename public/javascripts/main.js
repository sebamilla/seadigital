(function(){
    var lFollowX = 0,
        lFollowY = 0,
        x = 0,
        y = 0,
        friction = 1 / 30;

    function moveBackground() {
        x += (lFollowX - x) * friction;
        y += (lFollowY - y) * friction;

        translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

        $('.background-image').css({
            '-webit-transform': translate,
            '-moz-transform': translate,
            'transform': translate
        });
        
        $('.background-image-wedo').css({
            '-webit-transform': translate,
            '-moz-transform': translate,
            'transform': translate
        });
        
        $('.background-image-projects').css({
            '-webit-transform': translate,
            '-moz-transform': translate,
            'transform': translate
        });

        window.requestAnimationFrame(moveBackground);
    }

    $(window).on('mousemove click', function(e) {
        var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
        var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
        lFollowX = (20 * lMouseX) / 100;
        lFollowY = (10 * lMouseY) / 100;
    });

    moveBackground();


    var scrollFrames = document.querySelectorAll(".full-scroll-window");

    function clearActiveFrames(){
        for (var i = 0; i < scrollFrames.length; i++){
            scrollFrames[i].classList.remove("active");
        }
    }

    function getActiveFrame(frameID){
        //frameID must use # before name
        if (!frameID) {
            return document.querySelector(".full-scroll-window.active");
        }else{
            if (frameID.toString().indexOf('#') < 0)
            {
                frameID = "#" + frameID.toString();
            }
            return document.querySelector(frameID);
        }
    }

    function getFrameIdNumber(frame){
        return +(frame.id.replace('frame', ''));
    }

    function scrollToActiveFrame(frameId){

        getActiveFrame(frameId).scrollIntoView({
            behavior: 'instant'
        });
    }

    function nextFrame(){
        var activeFrame = getActiveFrame();
        if (activeFrame){
            // there is an active frame
            // get the frame id
            var activeID = getFrameIdNumber(activeFrame);
            var nextFrameId = 'frame' + (activeID + 1);

            var nextFrame = document.getElementById(nextFrameId);

            if (nextFrame){
                // remove the previous active frame
                activeFrame.classList.remove('active');

                setTimeout(function(){
                    scrollToActiveFrame(nextFrameId);
                    setTimeout(function(){
                        nextFrame.classList.add('active');
                    }, 100);

                },500)


            }

        }else{
            // there is no active frame
            // do nothing
            console.log('No ACTIVE FRAME FOOL');
        }
    }


    function previousFrame(){
        var activeFrame = getActiveFrame();
        if (activeFrame){
            // there is an active frame
            // get the frame id
            var activeID = getFrameIdNumber(activeFrame);
            var prevFrameId = 'frame' + (activeID - 1);

            var prevFrame = document.getElementById(prevFrameId);



            if (prevFrame){
                // remove the previous active frame
                activeFrame.classList.remove('active');

                setTimeout(function(){
                    scrollToActiveFrame(prevFrameId);
                    setTimeout(function(){
                        prevFrame.classList.add('active');
                    }, 100);

                },500)

            }

        }else{
            // there is no active frame
            // do nothing
            console.log('No ACTIVE FRAME FOOL');
        }
    }





    var downTriggers = document.querySelectorAll(".scroll-down");

    for (i = 0; i < downTriggers.length; ++i){
        downTriggers[i].onclick = nextFrame;
    }




    if (scrollFrames.length) {

        $(document).on('mousewheel DOMMouseScroll', _.debounce(function(e){
            e.preventDefault();
                var delta = e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0 ? 1 : -1;

                if (delta < 0) {
                    nextFrame();
                }else{
                    previousFrame();
                }
        }, 15));

    }


})();

(function() {
  var follower, init, mouseX, mouseY, positionElement, printout, timer;

  follower = document.getElementById('follower');

  printout = document.getElementById('printout');

  mouseX = (event) => {
    return event.clientX;
  };

  mouseY = (event) => {
    return event.clientY;
  };

  positionElement = (event) => {
    var mouse;
    mouse = {
      x: mouseX(event),
      y: mouseY(event)
    };
    follower.style.top = mouse.y + 'px';
    return follower.style.left = mouse.x + 'px';
  };

  timer = false;

  window.onmousemove = init = (event) => {
    var _event;
    _event = event;
    return timer = setTimeout(() => {
      return positionElement(_event);
    }, 1);
  };

}).call(this);

var bee = document.getElementById("bee");
		document.addEventListener("mousemove", getMouse); 


		bee.style.position = "absolute"; //css		
		var beepos = {x:0, y:0};

		setInterval(followMouse, 50);
		
		var mouse = {x:0, y:0}; //mouse.x, mouse.y
		
		var dir = "right";
		function getMouse(e){
			mouse.x = e.pageX -10;
			mouse.y = e.pageY - 93;
        //Checking directional change
        if(mouse.x > beepos.x){
          dir = "right";
        } else {
          dir = "left";
        }
		}
		
		function followMouse(){
			//1. find distance X , distance Y
			var distX = mouse.x - beepos.x;
			var distY = mouse.y - beepos.y;
			//Easing motion
       //Progressive reduction of distance 
			beepos.x += distX/12;
			beepos.y += distY/2;
			
			bee.style.left = beepos.x + "px";
			bee.style.top = beepos.y + "px";
      
      
        //Apply css class 
        if (dir == "right"){
          bee.setAttribute("class", "right");
        } else {
          bee.setAttribute("class", "left");        
        }
			
		}






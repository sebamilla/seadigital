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


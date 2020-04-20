var caller = $("#emcee"),
    box = $("#box");

function foo()
{
    var randX = Math.floor(Math.random() * (window.innerWidth - 100));
    var randY = Math.floor(Math.random() * (window.innerHeight - 100));
    console.log([randX, randY]);
    caller.stop().animate({"left": randX + "px", "top": randY + "px"});

}

function fooAlt(ex,ey, cx, cy)
{
	var randX = cx
	if (ex < cx) {
		randX = Math.min(cx + 40 + Math.floor(Math.random() * (40)), window.innerWidth - 100);
	}
	else {
		randX = Math.max(cx - 40 - Math.floor(Math.random() * (40)), 0);
	}

	var randY = cy
	if (ey < cy) {
		randY = Math.min(cy + 40 + Math.floor(Math.random() * (40)), window.innerHeight - 100);
	}
	else {
		randY = Math.max(cy - 40 - Math.floor(Math.random() * (40)), 0);
	}

    console.log([randX, randY]);
    caller.stop().animate({"left": randX + "px", "top": randY + "px"});

}

$(document).ready(function() {
    
    caller.on('mouseenter', foo);
    caller.on('click', function(){
        // alert('clicked!');
        location.href = "https://insidoubt.github.io/Project3/CoronatinePG2.html";
    });
    
});

function distance(x1,y1, x2,y2) {
	var a = x1 - x2;
	var b = y1 - y2;

	var c = Math.sqrt( a*a + b*b );

	return c;
}


(function() {
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        var eventDoc, doc, body;

        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }

        // Use event.pageX / event.pageY here

        var cx = Number(String(window.getComputedStyle(document.querySelector('#emcee')).left).replace(/[^0-9]*/g, ''))
        var cy = Number(String(window.getComputedStyle(document.querySelector('#emcee')).top).replace(/[^0-9]*/g, ''))


        var d = distance(event.pageX,event.pageY, cx,cy)

        if (d < 150) {
        	fooAlt(event.pageX,event.pageY, cx,cy)
        }


    }
})();

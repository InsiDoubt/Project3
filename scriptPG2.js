
var coronaCount = 1

var maxCorona = 100

function makeNewPosition()
{
    var randX = Math.floor(Math.random() * (window.innerWidth - 100));
    var randY = Math.floor(Math.random() * (window.innerHeight - 100));
    console.log([randX, randY]);
    return [randX, randY]

}


function duplicateCorona(node) {
	if(coronaCount >= maxCorona) {
		return
	}

	// alert("boowho")
	var clone = node.cloneNode()

	coronaCount += 1
	clone.id = "coronaboi-" + coronaCount

	node.parentNode.appendChild(clone)

	animateCorona(clone)

}

$(document).ready(function() {
    
    var coronaArray = document.getElementsByClassName("randomCorona")

    for (var i=0; i<coronaArray.length; i++) {
    	animateCorona(coronaArray[i])
    	// coronaArray[i].stop().animate({"left": 500 + "px", "top": 200 + "px"});
    }
    
});


function animateCorona(node){
    var newq = makeNewPosition();
    console.log(node.id)
    $("#" + node.id).animate({"left": newq[0] + "px", "top": newq[1] + "px"}, 2000, function(){
    	// alert(newq[0])
      animateCorona(node);
    });
    
};
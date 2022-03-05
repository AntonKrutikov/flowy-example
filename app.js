flowy(document.getElementById("canvas"), onGrab, onRelease, onSnap, onRearrange);
function onGrab(block){
	// When the user grabs a block
}
function onRelease(){
	// When the user releases a block
}
function onSnap(block, first, parent){
    return true
}
function onRearrange(block, parent){
	// When a block is rearranged
}
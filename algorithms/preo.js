var current , stack = new Array(10) , index = -1;
function startpreorder(){
	index++;
	stack[index] = "0";
	current = sigInst.graph.nodes("0");
	//current.color = "#ff0000";
}

var b = true;

function preorder(){
	if(b===true){
		startpreorder();
		b=false;
	}
		if(index != -1){
			//current.color = "#0000ff";
			current = sigInst.graph.nodes(stack[index]);
			current.color = "#000000";
			index-- ;
			if(current.right != "null"){
				index++;
				stack[index] = current.right;
			}
			if(current.left != "null"){
				index++;
				stack[index] = current.left;
			}
		}
	
	sigInst.refresh();
}

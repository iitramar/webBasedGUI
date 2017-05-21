var current ,current_node, stack = new Array(10) , index = -1, done = false,nod;
function startinorder(){
	current = "0";
	index++ ;
	stack[index] = current;
	current_node = sigInst.graph.nodes(current);
	current = current_node.left ;
	//current_node.color = "#000000";
}

var b = true;

function inorder(){
	if(b===true){
		startinorder();
		b=false;
	}
		if(index > -1 || current != "null"){
			while(current != "null"){
				index++ ;
				stack[index] = current;
				current_node = sigInst.graph.nodes(current);
				current = current_node.left ;
			}
			nod = sigInst.graph.nodes(stack[index]);
			nod.color = "#000000";
			current = nod.right ;
			index--;

		}
    
    sigInst.refresh();
   }
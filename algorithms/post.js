var nod ,nod1 ,first_stack = new Array(10) , first_index = -1 , second_stack = new Array(10) , second_index = -1;
function startpostorder(){
	first_index++ ;
	first_stack[first_index] = "0" ;
	while(first_index > -1){
		second_index++;
		second_stack[second_index] = first_stack[first_index];
		first_index-- ;
		nod = sigInst.graph.nodes(second_stack[second_index]);
		if(nod.left != "null"){
			first_index++ ;
			first_stack[first_index] = nod.left ;
		}
		if(nod.right != "null"){
			first_index++ ;
			first_stack[first_index] = nod.right ;
		}

	}	
}

var b = true;

function postorder(){
	if(b===true){
		startpostorder();
		b=false;
	}
		if(second_index > -1){
			nod1 = sigInst.graph.nodes(second_stack[second_index]);
			nod1.color = "#000000";
			second_index--;

		}
	
    
    sigInst.refresh();
   }
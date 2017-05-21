var queue;
function startbfs(){
	var n = sigInst.graph.nodes("n0");
	n.color = '#9f0303'; 
	sigInst.refresh();
	queue = ["n0"];
}
b = true;
var nodeId,toKeep,extendedCom;
function bfschange(){
	if(b===true){
		startbfs();
		b=false;
	}
	else{
		if(queue.length!=0){
			nodeId = queue.shift();
		toKeep = sigInst.graph.neighbors(nodeId);
		sigInst.graph.edges().forEach(function(e) {
			if (e.source === nodeId || e.target === nodeId){
		    	e.color = '#9f0303';
		        e.size=20;
			}
      });
		sigInst.graph.nodes().forEach(function(n){
		if(toKeep[n.id] && n.color==='#9900cc'){
			queue.push(n.id);
			n.color = '#9f0303';
		}
	});
		extendedCom = sigInst.graph.nodes(nodeId);
		extendedCom.color = extendedCom.finalColor;
		sigInst.refresh();
		}
		
	}
}
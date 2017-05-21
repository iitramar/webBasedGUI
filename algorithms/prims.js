
var key = new Array(V) , mstSet = new Array(V) , parent = new Array(V) , count, u, startnode, index1, index2;

function startprims(){
	for (var i = 0; i < V; i++){
     	key[i] = 32767, mstSet[i] = false;
     }
     key[0] = 0;     // Make key 0 so that this vertex is picked as first vertex
     parent[0] = -1;
     count = 0;
}

function minKey()
{
   // Initialize min value
   var min = 32767, min_index;
 
   for (var v = 0; v < V; v++)
     if (mstSet[v] == false && key[v] < min)
         min = key[v], min_index = v;
 
   return min_index;
}
b = true;

function prims()
{
	if(b===true){
		startprims();
		b=false;
	}  
     // First node is always root of MST 
 
     // The MST will have V vertices
     if(count<V)
     {
        // Pick thd minimum key vertex from the set of vertices
        // not yet included in MST
        u = minKey();
        index1 = "n" + u.toString();
 	    startnode = sigInst.graph.nodes(index1);
        startnode.color = '#000000';
        // Add the picked vertex to the MST Set
        mstSet[u] = true;
        // Update key value and parent index of the adjacent vertices of
        // the picked vertex. Consider only those vertices which are not yet
        // included in MST
        for (var v = 0; v < V; v++){
	    	// graph[u][v] is non zero only for adjacent vertices of m
	       // mstSet[v] is false for vertices not yet included in MST
	       // Update the key only if graph[u][v] is smaller than key[v]
	      index2 = "n" + v.toString();
          if (checkNeighbor(index1,index2) && mstSet[v] == false && parseInt(edgeweights(index1,index2).label) <  key[v]){
             parent[v]  = u, key[v] = parseInt(edgeweights(index1,index2).label);
             edgeweights(index1,index2).color = '#9f0303';
             edgeweights(index1,index2).size = 20;
          }
         }
     }
     count++ ;
     sigInst.refresh();
}
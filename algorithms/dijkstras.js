var V = 8 ;
var dist = new Array(V) , sptSet = new Array(V),count=0,u, index1, index2;

function startdijkstra(){
	for (var i = 0; i < V; i++){
        dist[i] = 32767, sptSet[i] = false;
	}
	 dist[0] = 0;
   count= 0;
}

function minDistance()
{
   // Initialize min value
   var min = 32767, min_index;
 
   for (var v = 0; v < V; v++)
     if (sptSet[v] == false && dist[v] <= min)
         min = dist[v], min_index = v;
 
   return min_index;
}
b = true;
function dijkstra()
{
 
    if(b===true){

		startdijkstra();
		b=false;
	 } 

     if (count < V)
     {
       // Pick the minimum distance vertex from the set of vertices not
       // yet processed. u is always equal to src in first iteration.
       var u = minDistance();
 		index1 = "n" + u.toString();
 	    startnode = sigInst.graph.nodes(index1);
        startnode.color = '#000000';
       // Mark the picked vertex as processed
       sptSet[u] = true;
 
       // Update dist value of the adjacent vertices of the picked vertex.
       for (var v = 0; v < V; v++){
 			index2 = "n" + v.toString();
         // Update dist[v] only if is not in sptSet, there is an edge from 
         // u to v, and total weight of path from src to  v through u is 
         // smaller than current value of dist[v]
         if (!sptSet[v] && checkNeighbor(index1,index2) && dist[u] != 32767 && dist[u]+parseInt(edgeweights(index1,index2).label) < dist[v]){
         	dist[v] = dist[u] + parseInt(edgeweights(index1,index2).label);
         	sigInst.graph.nodes(index2).label = dist[v].toString();
         	edgeweights(index1,index2).color = '#9f0303';
          edgeweights(index1,index2).size = 20;
         }
        }   
      
     }
 	 count++;
     sigInst.refresh();
     // print the constructed distance array
    // printSolution(dist, V);
}
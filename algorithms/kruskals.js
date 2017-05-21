//var edgeWeights = [2,3,4,5,6,7,10,11,13,18,19];
//var edgeIDs = ['e0','e5','e8','e6','e9','e10','e2','e4','e1','e3','e7'];
var edgeIDs;
//var edge_array, i=0;
//var edgeIDs;
var edge_array1;
var result,e,subsets,next_edgeID,next_edge,i=0,neighbor1,neighbor2,count;

function startkruskals(){
    result = new Array(V); // Tnis will store the resultant MST
    i=0;
    e = 0;
    count= 0 ;
    sigInst.graph.edges().forEach(function(e) {
        count++;               
    });
    edge_array1 = new Array(count);
    edgeIDs = new Array(count);
     // An index variable, used for result[]
       // An index variable, used for sorted edges
 
    // Step 1:  Sort all the edges in non-decreasing order of their weight
    // If we are not allowed to change the given graph, we can create a copy of
    // array of edges
    for(var k=0;k<count ;k++){
        var c = "e" + k.toString();
        edge_array1[k] = sigInst.graph.edges(c);
    }
    for(var j=0 ;j<count ;j++){
        for(var k=j ;k<count ;k++){
            if(parseInt(edge_array1[j].label) >parseInt(edge_array1[k].label) ){
                var swap = edge_array1[j];
                edge_array1[j] = edge_array1[k];
                edge_array1[k] = swap;
            }
        }
    }

    for(var k=0;k<count ;k++){
        edgeIDs[k] = edge_array1[k].id ;
    }

    // Allocate memory for creating V ssubsets
	subsets = new Array(V);
 
    // Create V subsets with single elements
    for (var v = 0; v < V; ++v)
    {
    	subsets[v] = {};
        subsets[v].parent = v;
        subsets[v].rank = 0;
    }
 
}

function find(j){
 if (subsets[j].parent != j)
 	subsets[j].parent = find(subsets[j].parent);
 return subsets[j].parent;
}

function Union(p, q){
    var xroot = find(p);
    var yroot = find(q);
 
    // Attach smaller rank tree under root of high rank tree
    // (Union by Rank)
    if (subsets[xroot].rank < subsets[yroot].rank)
        subsets[xroot].parent = yroot;
    else if (subsets[xroot].rank > subsets[yroot].rank)
        subsets[yroot].parent = xroot;
 
    // If ranks are same, then make one as root and increment
    // its rank by one
    else
    {
        subsets[yroot].parent = xroot;
        subsets[xroot].rank++;
    }
}

b = true;

function kruskals(){
    // Number of edges to be taken is equal to V-1
	if(b===true){
		startkruskals();
		b=false;
	}
    if(e < V - 1)
    {
        // Step 2: Pick the smallest edge. And increment the index
        // for next iteration
        next_edgeID = edgeIDs[i++];
        next_edge = sigInst.graph.edges(next_edgeID);
        var c1 = next_edge.source;
        var c2 = next_edge.target;
        var x = find(c1.slice(1));
        var y = find(c2.slice(1));
 
        // If including this edge does't cause cycle, include it
        // in result and increment the index of result for next edge
        if (x != y)
        {
            result[e++] = next_edge.id;
            next_edge.color = '#9f0303';
            neighbor1 = sigInst.graph.nodes(next_edge.source);
            neighbor2 = sigInst.graph.nodes(next_edge.target);
            neighbor1.color = '#000000';
            neighbor2.color = '#000000';
            next_edge.size = 20;
            Union(x, y);
        }
        else{
        	//kruskals();
        }
        // Else discard the next_edge
    }
    sigInst.refresh();
}
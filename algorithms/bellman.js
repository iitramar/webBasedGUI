var dist = new Array(V), count , edge_index,this_edge,l,j;

function startBellman(){
    for (var i = 0; i < V; i++){
        dist[i] = 99999;
    }
    dist[0] = 0;
    count = 0 ;
    l = 0;
    j=0;
    sigInst.graph.edges().forEach(function(e) {
        count++;               
    });
}

b = true ;
function bellman()
{
    if(b === true){
        startBellman();
        b = false ;
    }
    // Step 1: Initialize distances from src to all other vertices
    // as INFINITE
    
 
    // Step 2: Relax all edges |V| - 1 times. A simple shortest 
    // path from src to any other vertex can have at-most |V| - 1 
    // edges
    if(l <= V-1)
    {
        if(j < count)
        {
            edge_index = "e" + j.toString();
            this_edge = sigInst.graph.edges(edge_index);
            var u = this_edge.source;
            u1 = u ;
            u = u.slice(1);
            u = parseInt(u);
            var v = this_edge.target;
            v1 = v ;
            sigInst.graph.nodes(this_edge.source).color = '#9f0303';
            sigInst.graph.nodes(this_edge.target).color = '#9f0303';
            v = v.slice(1);
            v = parseInt(v);
            var weight = parseInt(this_edge.label);
            if (dist[u] != 99999 && dist[u] + weight < dist[v]){
                dist[v] = dist[u] + weight;
                sigInst.graph.nodes(this_edge.target).label = dist[v].toString();
                this_edge.color = '#9f0303';
                this_edge.size = 20;
                this_edge.type = "arrow";
            }
            j++;
            if(j==count){
                l++;
                j=0;
            }
        }
    }
    //for(var k=0 ;k <)
    // Step 3: check for negative-weight cycles.  The above step 
    // guarantees shortest distances if graph doesn't contain 
    // negative weight cycle.  If we get a shorter path, then there
    // is a cycle.
    else{
        for (var i = 0; i < E; i++)
        {
            edge_index = 'e' + i.toString();
            this_edge = sigInst.graph.edges(edge_index);
            var u = this_edge.source;
            var v = this_edge.target;
            var weight = parseInt(this_edge.label);
            if (dist[u] != 99999 && dist[u] + weight < dist[v])
                alert("Graph contains negative weight cycle");
        }   
    }

    sigInst.refresh();
   // printArr(dist, V);
 
  //  return;
}
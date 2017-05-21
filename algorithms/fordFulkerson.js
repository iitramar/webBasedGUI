var graph;
var u, v,s=0,t=V-1,rGraph,parent,max_flow,path_flow = 32767,sink,node1,node2;

function startFordFulkerson(){
    rGraph = new Array(V);
    for(var i=0;i<V;i++){
        rGraph[i] = new Array(V);
    }
    graph = new Array(V);
    for(var i=0;i<V;i++){
        graph[i] = new Array(V);
    }
    for(var i=0;i<V;i++){
        for(var j=0;j<V;j++){
              sigInst.graph.edges().forEach(function(e) {
                if((e.source === "n" + i.toString() && e.target === "n" + j.toString())){
                    graph[i][j] = parseInt(e.label);
                }
              });
        }
    }

        for (u = 0; u < V; u++){
        for (v = 0; v < V; v++){
            rGraph[u][v] = graph[u][v];
        }
    }
    parent = new Array(V);
    max_flow = 0; 
}

function bfs()
{
    // Create a visited array and mark all vertices as not visited
    var visited = new Array(V);
    for(var i=0;i<V;i++){
        visited[i] = false;
    }
 
    // Create a queue, enqueue source vertex and mark source vertex
    // as visited
    var q = [];
    q.push(s);
    visited[s] = true;
    parent[s] = -1;
 
    // Standard BFS Loop
    while (q.length!=0)
    {
        var u = q.shift();
 
        for (var v=0; v<V; v++)
        {
            if (visited[v]===false && rGraph[u][v] > 0)
            {
                q.push(v);
                parent[v] = u;
                visited[v] = true;
            }
        }
    }
 
    // If we reached sink in BFS starting from source, then return
    // true, else false
    return (visited[t] === true);
}

b = true;
// Returns tne maximum flow from s to t in the given graph
function fordFulkerson()
{
    if(b===true){
        startFordFulkerson();
        b=false;
    }
    // Create a residual graph and fill the residual graph with
    // given capacities in the original graph as residual capacities
    // in residual graph
                     // Residual graph where rGraph[i][j] indicates 
                     // residual capacity of edge from i to j (if there
                     // is an edge. If rGraph[i][j] is 0, then there is not)  
 
      // This array is filled by BFS and to store path
 
    // There is no flow initially
 
    // Augment the flow while tere is path from source to sink
    if (bfs())
    {
        // Find minimum residual capacity of the edhes along the
        // path filled by BFS. Or we can say find the maximum flow
        // through the path found.
        for (v=t; v!=s; v=parent[v])
        {
            u = parent[v];
            path_flow = Math.min(path_flow, rGraph[u][v]);
        }
 
        // update residual capacities of the edges and reverse edges
        // along the path
        for (v=t; v != s; v=parent[v])
        {
            u = parent[v];
            node1 = "n" + u.toString();
            node2 = "n" + v.toString();
            sigInst.graph.nodes(node1).color = '#9f0303';
            sigInst.graph.nodes(node2).color = '#9f0303';
            sigInst.graph.edges().forEach(function(e) {
                if((e.source === node1 && e.target === node2)){
                    e.color = '#9f0303';
                    e.size = 20;
                }
            });
            rGraph[u][v] -= path_flow;
            rGraph[v][u] += path_flow;
        }
 
        // Add path flow to overall flow
        max_flow += path_flow;
    }
    sink = "n" + t.toString();
    // Return the overall flow
    sigInst.graph.nodes(sink).label=max_flow.toString();
    sigInst.graph.nodes(sink).color='#9f0303';
    sigInst.graph.nodes(sink).labelColor = "node";
    sigInst.refresh();
}
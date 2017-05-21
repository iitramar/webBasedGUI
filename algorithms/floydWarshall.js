var graph, dist, i , j , k , V;
function startfloydWarshell(){
  V = document.getElementById("userInput").value;
  V = parseInt(V);
  graph = new Array(V);
  dist = new Array(V);
    for(i=0;i<V;i++){
        graph[i] = new Array(V);
        dist[i] = new Array(V);
    }
    for(i=0;i<V;i++){
        for(j=0;j<V;j++){
              sigInst.graph.edges().forEach(function(e) {
                if((e.source === "n" + i.toString() && e.target === "n" + j.toString())){
                    graph[i][j] = parseInt(e.label);
                }
                // else{
                //   graph[i][j] = 99999;
                // }
              });
        }
    }
    for(i=0 ; i<V ; i++){
      for(j=0; j<V; j++){
        if(i==j){
          graph[i][j] = 0;
        }
        if(graph[i][j]==undefined){
          graph[i][j] = 99999;
        }
      }
    }
 
}

var nod ,x, b = true;

function floydWarshell()
{   if(b===true){
      startfloydWarshell();
      b=false;
    }

    for(i=0;i<V;i++){
      for(j=0;j<V;j++){
        dist[i][j] = graph[i][j];
      }
    }
    for(i=0 ; i< V ;i++){
      for(j=0 ;j<V ;j++){
        console.log(dist[i][j]);
      }
    }
    for (k = 0; k < V; k++)
    {
        // Pick all vertices as source one by one
        for (i = 0; i < V; i++)
        {
            // Pick all vertices as destination for the
            // above picked source
            for (j = 0; j < V; j++)
            {
                // If vertex k is on the shortest path from
                // i to j, then update the value of dist[i][j]
                if (dist[i][k] + dist[k][j] < dist[i][j]){
                   dist[i][j] = dist[i][k] + dist[k][j];
                    x = "n" + k.toString();
                    nod = sigInst.graph.nodes(x);
                    nod.color = "#000000";
                    sigInst.refresh();
                }
            }
        }
    }
  
    // Print the shortest distance matrix
}
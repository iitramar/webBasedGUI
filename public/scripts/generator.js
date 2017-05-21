var bpGraph, b,V=8,E;
function generate(){
  V = document.getElementById("userInput").value;
  V = parseInt(V);
  b = true;
  sigInst.graph.clear();
  var queue = ["n0"];
var i,
    N = V;
    E = V-1;    
    isInGraph = [],
    isNotInGraph = [];

var edge_matrix = new Array(N);
for (var i = 0; i < N; i++) {
  edge_matrix[i] = new Array(N);
}
for (var j = 0; j < N; j++) {
  for (var k = 0; k < N; k++) {
    edge_matrix[j][k] = "no";
  }
}

//adding nodes to my graph
for (i = 0; i < N; i++){
  sigInst.graph.addNode({
    id: 'n' + i,
    label:    i.toString(),
    x: Math.random()*50,
    y: Math.random()*50,
    size: 1,
    color: '#9900cc'
  });
  isNotInGraph.push("n" + i);
}

isInGraph.push("n0");
var ind = isNotInGraph.indexOf("n0");
isNotInGraph.splice(ind ,1);
var c1,c2,index1,index2;
//adding edges
for (i = 0; i < E; i++){
  var x = isInGraph[Math.floor((Math.random() * isInGraph.length) | 0)],
      y = isNotInGraph[Math.floor((Math.random() * isNotInGraph.length) | 0 )];
  var node1 = sigInst.graph.nodes(x);
  var node2 = sigInst.graph.nodes(y);
  var x1 = node1.x,
      y1 = node1.y,
      x2 = node2.x,
      y2 = node2.y,
      distance = Math.sqrt(((x1-x2)*(x1-x2))+((y1-y2)*(y1-y2)));
  distance = Math.floor(distance);
  distance = distance.toString();
  sigInst.graph.addEdge({
    id: 'e' + i,
    label: distance,
    source: x,
    target: y,
    color: '#9900cc',
    type: ['line', 'curve', 'arrow', 'curvedArrow'][Math.random() * 4 | 0]
  });
  isInGraph.push(y);
  var index = isNotInGraph.indexOf(y);
  isNotInGraph.splice(index ,1);

   c1  = x.slice(1);
   c2  = y.slice(1);
   index1 = parseInt(c1);
   index2 = parseInt(c2);
  edge_matrix[index1][index2] = "e" + i.toString() ;
  edge_matrix[index2][index1] = "e" + i.toString() ;
} 
for (i = E ;i<Math.floor(1.5*E); i++) {
   x = isInGraph[Math.floor((Math.random() * isInGraph.length) | 0)],
   y = isInGraph[Math.floor((Math.random() * isInGraph.length) | 0)];
   //e = edge_matrix[x][y];
   c1  = x.slice(1);
   c2  = y.slice(1);
   index1 = parseInt(c1);
   index2 = parseInt(c2);
   while(x == y ||  edge_matrix[index1][index2]!= "no"){
    y = isInGraph[Math.floor((Math.random() * isInGraph.length) | 0)];
    c2  = y.slice(1);
    index2 = parseInt(c2);
    //e = edge_matrix[x][y];
   }
  var node1 = sigInst.graph.nodes(x);
  var node2 = sigInst.graph.nodes(y);
  var x1 = node1.x,
      y1 = node1.y,
      x2 = node2.x,
      y2 = node2.y,
      distance = Math.sqrt(((x1-x2)*(x1-x2))+((y1-y2)*(y1-y2)));
  distance = Math.floor(distance);
  distance = distance.toString();
  sigInst.graph.addEdge({
    id: 'e' + i,
    label: distance,
    source: x,
    target: y,
    color: '#9900cc',
    type: ['line', 'curve', 'arrow', 'curvedArrow'][Math.random() * 4 | 0]
  });
  var c1  = x.slice(1);
  var c2  = y.slice(1);
  var index1 = parseInt(c1);
  var index2 = parseInt(c2);
  edge_matrix[index1][index2] = "e" + i.toString() ;
  edge_matrix[index2][index1] = "e" + i.toString() ;
}
var visited = new Array
for (i = 0; i < N; i++) {
  visited[i] = false ;
}

var start = sigInst.graph.nodes("n0");
var current = start ;
visited[0] = true ;
current.color = "#ff0000";

sigInst.graph.edges().forEach(function(e) {
  e.color = '#9900cc';
});

  sigInst.graph.nodes().forEach(function(n) {
  n.color = '#9900cc';
  n.finalColor = '#000000';
});


// Refresh the graph to see the changes:
sigInst.refresh();
}

function generate1(){
  b = true;
  sigInst.graph.clear();
var i,
    M = document.getElementById("m").value,
    N = document.getElementById("n").value,
    M = parseInt(M),
    N = parseInt(N),
    left = [],
    right = [];
    bpGraph = new Array(M);
    for(var i=0;i<M;i++){
        bpGraph[i] = new Array(N);
    };
    for(var i=0 ; i<M;i++){
      for(var j=0;j<N;j++){
        bpGraph[i][j] = 0;      }
    }
//adding nodes to my graph
for (i = 0; i < M; i++){
  sigInst.graph.addNode({
    id: 'm' + i.toString(),
    label:   'm'+ i.toString(),
    x: -2,
    y: i,
    size: 3,
    color: '#9900cc'
  });
  left.push("m" + i.toString());
}


for (i = 0; i < N; i++){
  sigInst.graph.addNode({
    id: 'n' + i,
    label:  'n' + i,
    x: 2,
    y: i,
    size: 3,
    color: '#9900cc'
  });
  right.push("n" + i.toString());
}

 
//var c1,c2,index1,index2;
//adding edges


var E1 = Math.floor((M+N));

for (i = 0; i < E1; i++){
  var x = left[Math.floor((Math.random() * left.length) | 0)],
      y = right[Math.floor((Math.random() * right.length) | 0 )];

  sigInst.graph.addEdge({
    id: 'e' + i,
    source: x,
    target: y,
    color: '#9900cc',
    type: "arrow"
  });

  var p1  = x.slice(1);
  var p2  = y.slice(1);
  var ind1 = parseInt(p1);
  var ind2 = parseInt(p2);
  bpGraph[ind1][ind2] = 1;
  //bpGraph[ind2][ind1] =  1;
  
} 


sigInst.graph.edges().forEach(function(e) {
  e.color = '#9900cc';
});

  sigInst.graph.nodes().forEach(function(n) {
  n.color = '#9900cc';
  n.finalColor = '#000000';
});


// Refresh the graph to see the changes:
sigInst.refresh();
}

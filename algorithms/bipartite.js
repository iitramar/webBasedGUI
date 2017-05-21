var result,matchR,u,v,m,n;

function startBPM(){
    m = document.getElementById("m").value;
    n = document.getElementById("n").value;

    m = parseInt(m);
    n = parseInt(n);
    matchR = new Array(n);
 
    // Initially all jobs are available
    for(var i=0;i<n;i++){
        matchR[i] = -1;
    }
    u = 0;
    result = 0;
    for(var i=0;i<m;i++){
        for(var j=0;j<n;j++){
            console.log(bpGraph[i][j]);
        }
    }
}
b = true;
function bpm(p,seen)
{
    // Try every job one by one
    for (v = 0; v < n; v++)
    {
        // If applicant u is interested in job v and v is
        // not visited
        if (bpGraph[p][v] && !seen[v])
        {
            seen[v] = true; // Mark v as visited
 
            // If job 'v' is not assigned to an applicant OR
            // previously assigned applicant for job v (which is matchR[v]) 
            // has an alternate job available. 
            // Since v is marked as visited in the above line, matchR[v] 
            // in the following recursive call will not get job 'v' again
            if (matchR[v] < 0 || bpm(matchR[v], seen))
            {
                matchR[v] = p;
                return true;
            }
        }
    }
    return false;
}
 
// Returns maximum number of matching from M to N
function maxBPM()
{ 
    
    // An array to keep track of the applicants assigned to
    // jobs. The value of matchR[i] is the applicant number
    // assigned to job i, the value -1 indicates nobody is
    // assigned.
    if(b===true){
        startBPM();
        b=false;
    }
    if(u < m)
    {
        // Mark all jobs as not seen for next applicant.
        var seen = new Array(n);
        for(var i=0;i<n;i++){
        seen[i] = false;
        }
 
        // Find if the applicant 'u' can get a job
        if (bpm(u,seen)){
            var node1 = "m" + u.toString();
            var node2 = "n" + v.toString();
            sigInst.graph.edges().forEach(function(e) {
                if (e.source === node1 && e.target === node2){
                    sigInst.graph.nodes(node1).color = '#9f0303';
                    sigInst.graph.nodes(node2).color = '#9f0303';
                    e.color = '#9f0303';
                    e.type = "line";
                    e.size=20;
                }
            });
            result++;
        }
    }
    u++;
    //console.log(result);
    sigInst.refresh();
}
//Determine if a path exists from a source node to a destination node


class Edge {
  constructor (value1, value2){
    this.value1 = value1;
    this.value2 = value2;
  }
}
var edge1 = new Edge(1,2);
var edge2 = new Edge(1,3);
var edge3 = new Edge(1,4);
var edge4 = new Edge(2,5);
var edge5 = new Edge(3,5);

var arr = [edge1, edge2, edge3, edge4, edge5];

function putInQueue (arr, value1, value2){
  var queue = [];
  for(var i = 0; i<arr.length; i++){
    if(arr[i].value1 === value1){
      queue.push(arr[i].value2);
    }
  }
  return queue;
}
//return bool
function isPath (arr, value1, value2){
  var queue = putInQueue (arr, value1, value2);
  
  if(queue.length === 0){
    return false;
  }
    
  if(queue[0] === value2){
      return true;
  }
      
  var visited = {};
  visited[value1] = 0;
  while(queue.length !== 0){
    if(queue[0] === value2){
      return true;
    }
    if(visited[queue[0]] !== undefined){
      return false;
    }else{
      visited[queue[0]] = 0;
    }
    queue = queue.concat(putInQueue (arr, queue[0], value2));
    queue.shift();
  }

  return false;

}
isPath (arr, 1,7);

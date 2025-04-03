class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(element, priority) {
        const qElement = { element, priority };
        let added = false;

        for (let i = 0; i < this.items.length; i++) {
            if (qElement.priority <= this.items[i].priority) {
                this.items.splice(i, 0, qElement);
                added = true;
                break;
            }
        }

        if (!added) {
            this.items.push(qElement);
        }
    }

    dequeue() {
        if (this.items.length == 0) {
            return "Underflow";
        }
        return this.items.shift();
    }

    front() {
        if (this.items.length == 0) {
            return "No elements in Queue";
        }
        return this.items[0];
    }
}

function dijkstra(graph, sourceNode) {
    const nodequeue = new PriorityQueue();

    const visitedarr = Array(graph.length).fill(false);
    visitedarr[sourceNode] = true;

    const weightssarr = Array(graph.length).fill(Infinity);
    weightssarr[sourceNode] = 0;

    const bestpaths = Array(graph.length).fill([]);
    bestpaths[sourceNode] = [0];
    
    var hereiam = sourceNode;
    for (var i = 0; i < graph.length; i++){
        var whereami = hereiam;
        for (var j = 0; j < graph.length; j++){
            var newtime = graph[whereami][j] + weightssarr[whereami];
            if (graph[whereami][j] != 0 && weightssarr[j] > newtime) {
                weightssarr[j] = newtime;
                if (visitedarr[j] == false){
                    nodequeue.enqueue(j,newtime)
                }
                
            }
        }
        visitedarr[whereami] = true;
        hereiam = nodequeue.dequeue().element
        if (hereiam == undefined){
            return weightssarr;
        }
        
    }

    return weightssarr;
}
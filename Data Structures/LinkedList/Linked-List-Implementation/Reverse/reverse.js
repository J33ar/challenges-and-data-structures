    class LinkedList{
    // Sample reverse method from LinkedList class
    reverse(){
        // Edge Case 1: Empty list → this.head === null
        let prev = null;
        let current = this.head;
        // Edge Case 2: Single-node list → current.next === null
        // Edge Case 3: List with multiple nodes (including duplicate values)
        let next = null ;
        while(current !== null){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
}
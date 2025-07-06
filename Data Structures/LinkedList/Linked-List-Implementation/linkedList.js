const Node = require("./nodeclasse");

class Linkedlist{
    constructor(){
        this.head = null;
    }

    add(data){
        try {
            const newNode = new Node(data);
            if (this.head === null) { //Edge Case 1: list is empty
                this.head = newNode;
                return;
            }

            let current = this.head;

            while(current.next !== null){
                current = current.next;
            }
            current.next = newNode;
            
        } catch (error) {
            console.error("Error adding node:", error.message);  
        }
    }

    remove(data){
        try {
            if (this.head === null) { //Edge Case 1: list is empty
                console.log("Cannot remove from an empty list.");
                return;
            }

            if (this.head.data === data) { // Edge Case 2: the data is in the head node
                this.head = this.head.next;
                return;
            }

            let current = this.head;
            while (current.next !== null) {
                if(current.next.data === data){
                    current.next = current.next.next;
                    return;
                }
                current = current.next;
            }
             console.log(`Value ${data} not found in the list.`); // Edge Case 3: value not in list

        } catch (error) {
            console.error("Error removing node:", error.message);
        }
    }

    includes(data){
        try {
            if (this.head === null) { //Edge Case 1: list is empty
                console.log("Cannot found from an empty list.");
                return;
            }

            let current = this.head;
            while (current !== null) {
                if (current.data === data) {
                    console.log(`${data} includes ?`,true);
                    return true;
                }
                current = current.next;
            }
            console.log(`${data} includes ?`,false);
            return false;
            
        } catch (error) {
            console.error("Error checking includes:", error.message);
        }
    }

    insertAt(data, index){
       try {
            if(index < 0) //Edge Case 1: negative index
                throw new Error("Invalid index, Index cannot be negative.");
            
            const newNode = new Node(data);
            
            if(index === 0){//Edge Case 2: insert at beginning
                newNode.next = this.head;
                this.head = newNode;
                return;
            }

            let current = this.head;
            let prev = null;
            let i = 0;
            while (current !== null && i<index) {
                prev = current;
                current = current.next;
                i++;
            } 

            if(i !== index)//Edge Case 3: index is greater than list length
                throw new Error("Index out of bounds");
            
            prev.next = newNode;
            newNode.next = current;    
            
        } catch (error) {
            console.error("Error inserting node:", error.message);
            //  throw error;     
        }
    }

    printList(){
        let current = this.head;

        let result = "Head -> ";
        while(current !== null){
            result += current.data + " -> ";
            current = current.next;
        }
        result += "Null";
        console.log(result);
        return result;
    }

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

    mergeSortedLists(list1,list2){
        const mergedList = new Linkedlist();

        let current1= list1.head;
        let current2= list2.head;

        // Edge Case 1: Both input lists are empty
        if (!current1 && !current2) {
            return mergedList; // Return an empty merged list
        }

        // Edge Case 2: list1 is empty
        if (!current1) return list2;

        // Edge Case 3: list2 is empty
        if (!current2) return list1;

        // Edge Case 4: Both lists contain nodes, proceed to compare and merge
        while(current1 && current2){
            if (current1.data <= current2.data) {
                mergedList.add(current1.data);
                current1=current1.next;
            } else {
                mergedList.add(current2.data);
                current2=current2.next;
            }
        }

        // Edge Case 5: One list is exhausted before the other
        while (current1 !== null) {
            mergedList.add(current1.data);
                current1=current1.next;
        }
        while (current2 !== null) {
            mergedList.add(current2.data);
                current2=current2.next;
        }
        return mergedList;
    }

    rotateLeft(k){
        // Edge Case 1: Empty list or single node → no rotation
        if (!this.head || !this.head.next || k === 0) return;

        let length = 1;
        let tail = this.head;

        while (tail.next) {
            tail = tail.next;
            length++;
        }

        // Edge Case 2: k > length → reduce it using modulo
        k = k % length;
          // Edge Case 3: Negative k → convert to right rotation
        if (k < 0) {
            k = length + k;
        }

        // Edge Case 4: After adjustment, if k === 0 → list remains the same
        if (k === 0) return;

        // Step 2: Traverse to the (k)th node
        let current = this.head;
        for (let i = 1; i < k; i++) {
            current = current.next;
        }

        // Step 3: Rotate
        const newHead = current.next;
        current.next = null;     // Break link
        tail.next = this.head;   // Reconnect tail to old head
        this.head = newHead;     // Set new head
    }

    clear() {
        this.head = null; 
    }
}

module.exports = Linkedlist;
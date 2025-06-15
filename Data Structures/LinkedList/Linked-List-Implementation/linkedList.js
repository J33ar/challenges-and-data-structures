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
}

module.exports = Linkedlist;
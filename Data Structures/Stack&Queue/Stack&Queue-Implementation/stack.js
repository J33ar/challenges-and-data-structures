const Node = require("./node");

class Stack{
    constructor(){
        this.top = null;
    }

    isEmpty(){
        return this.top == null ;
    }

    push(data){
        const newNode = new Node(data);
        newNode.next = this.top;
        this.top = newNode;
    }

    pop(){
        if(this.isEmpty())
            return "Cannot pop from an empty stack";

        const poped = this.top.data;
        this.top = this.top.next;
        return poped;

    }
     peek(){
        return this.top ?this.top.data : null;
     }

     printStack(){
        let current = this.top;
        const result = [];

        while(current){
            result.push(current.data);
            current = current.next;
        }
        console.log("Stack - Top",result.join(" -> "),"Null");
     }
    
}
module.exports = Stack;
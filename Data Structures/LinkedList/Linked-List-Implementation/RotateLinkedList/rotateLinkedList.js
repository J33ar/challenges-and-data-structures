class linkedList{   
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
}    
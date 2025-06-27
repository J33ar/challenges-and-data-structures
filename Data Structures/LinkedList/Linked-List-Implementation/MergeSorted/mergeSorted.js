class linkedList{
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
}
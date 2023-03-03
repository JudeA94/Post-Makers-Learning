// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val
        this.next = null
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null
        this.tail = null,
        this.length = 0
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
        } else {
            this.tail.next = newNode
        }
        this.tail = newNode
        this.length ++
        return this
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (!this.length) return undefined
        let current = this.head
        let newTail = current
        while (current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if (!this.length) {
            this.head = null
            this.tail = null
        }
        return current
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        const newNode = new Node(val)
        if (!this.tail) this.tail = newNode
        newNode.next = this.head
        this.head = newNode
        this.length ++
        return this
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (!this.length) return undefined
        const currentHead = this.head
        this.head = this.head.next
        this.length--
        if (!this.length) this.tail = null
        return currentHead
    }

    // TODO: Implement the contains method here
    contains(target) {
        let current = this.head
        while (current) {
            if (current.value === target) return true
            current = current.next
        }
        return false
    }

    // TODO: Implement the get method here
    get(index) {
        if (index < 0 || index >= this.length) return null
        let node = 0
        let current = this.head
        while (node < index) {
            current = current.next
            node++
        }
        return current
    }

    // TODO: Implement the set method here
    set(index, val) {
        const node = this.get(index)
        if (!node) return false
        node.value = val
        return true
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index < 0 || index > this.length) return false
        if (index === this.length) {
            this.addToTail(val)
            return true
        }
        if (index === 0) {
            this.addToHead(val)
            return true
        }
        const newNode = new Node(val)
        const newPrevNode = this.get(index - 1)
        const newNextNode = newPrevNode.next
        newPrevNode.next = newNode
        newNode.next = newNextNode
        this.length++
        return true
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        const newPrevNode = this.get(index - 1)
        const removedNode = newPrevNode.next
        newPrevNode.next = removedNode.next
        this.length--
        return removedNode
    }

    // TODO: Implement the size method here
    size() {
        return this.length
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;

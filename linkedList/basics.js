class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(data) {
    // Append a node to the end of the list
    const node = new Node(data)
    if(!this.head) this.head = node;
    else {
      let current  = this.head;
      while(current.next !== null) {
         current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
console.log(list);

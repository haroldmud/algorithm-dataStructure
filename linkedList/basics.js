class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  insert(data) {
    const node = new Node(data)
    if(!this.head) this.head = node
    else{
      let current = this.head
      while(current.next !== null) {
        current = current.next
      }
      current.next = node
    }
  }
}

const list = new LinkedList()
list.insert("love in the sky");
list.insert("blue sky");
list.insert("another love");
console.log(list) 

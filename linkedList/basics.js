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
  delete(data) {
    let current = this.head
    let prev = null
    while(current) {
      if(current.data === data) {
        if(prev) prev.next = current.next
        else this.head = current.next
        this.length--
        return 'deleted successfully'
      }
      prev = current
      current = current.next
    }
    return 'not found'
  }
  edit(data, newData) {
    let current = this.head
    while(current) {
      if(current.data === data) {
        current.data = newData
        return true
      }
      current = current.next
    }
    return false
  }
  find(data) {
    let current = this.head
    while(current) {
      if(current.data === data) return true
      current = current.next
    }
  }
  toString() {
    let current = this.head
    let result = ''
    while(current) {
      result += current.data + (current.next ? ' >>>>>> ' : ' ')
      current = current.next
    }
    return result || 'empty list'
  }
}

const list = new LinkedList()
list.insert("blue sky");
list.insert("love in the sky");
list.insert("another love");

console.log(list.delete("love in the sky"))
console.log(list.toString())

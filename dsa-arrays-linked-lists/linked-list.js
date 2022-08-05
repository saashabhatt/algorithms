/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } 
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length = this.length + 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length = this.length + 1;
    }
    else {
      const item = this.head;
      this.head = newNode;
      this.head.next = item;
      this.length = this.length + 1;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    if(!this.length === 0) {
      return null;
    }
    else if (this.length === 1) {
      const item = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return item;
    }
    else {
      const retval = this.tail.val;
      let item = this.head;
      for (let i=1; i < this.length - 1; i++) {
        item = item.next;
      }
      this.tail = item;
      this.length = this.length - 1;
      return retval;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.length === 0) {
      return null;
    }
    else if (this.length === 1) {
      const item = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return item;
    } 
    else {
      const item = this.head.val;
      this.head = this.head.next;
      this.length = this.length - 1;
      return item;
    }
    
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx === 0) {
      return this.head.val;
    }
    else if (idx === this.length -1) {
      return this.tail.val;
    }
    else if ((idx >= this.length)|| (idx < 0)) {
      throw new Error("Invalid index.")
    }
    else {
      let item = this.head;
      for (let i=0; i< idx; i++) {
        item = item.next; 
        if (i === idx -1) {
          return item.val;
      }
    }
  }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx === 0) {
      if (this.length === 0) {
        throw new Error("Use push or unshift to add values")
      } 
      else if (this.length === 1) {
        this.tail.val = val;
        this.head.val = val;
      }
      else {
        this.head.val = val;
      }
    }
    else if (idx === this.length -1) {
      this.tail.val = val;
    }
    else if ((idx >= this.length)|| (idx < 0)) {
      throw new Error("Invalid index.")
    }
    else {
      let item = this.head;
      for (let i=0; i< idx; i++) {
        item = item.next;
        if (i === idx -1) {
          item.val = val;
      }
    }
  }
  }
  

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    const newNode = new Node(val);
    if (idx === 0) {
      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
        this.length += 1;
      }
      else {
        let item = this.head;
        this.head = newNode;
        this.head.next = item;
        this.length += 1;
      }
    }
    else if (idx === this.length) {
      let item = this.tail;
      this.tail = newNode;
      item.next = this.tail;
    }
    else if ((idx > this.length) || (idx < 0)) {
      throw new Error("Invalid index.")
    }
    else {
      let item = this.head;
      let preceding;
      for (let i=0; i< idx; i++) {
        item = item.next;
        if (i === idx -2) {
          preceding = item;
        }
        if (i === idx -1) {
          let following = item;
          item = newNode;
          preceding.next = item;
          item.next =following;
          this.length += 1;
      }
      }
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx === 0) {
      if (this.length > 0) {
        this.shift();
      }
      else return null;
    }
    else if (idx === this.length -1) {
      this.pop();
    }
    else if ((idx >= this.length) || (idx < 0)) {
      throw new Error("Invalid index.")
    }
    else {
      let item = this.head;
      let prev;
      let follow;
      if (idx === 1) {
        let print = item.next.val;
        this.head.next = this.head.next.next;
        this.length -= 1;
        return print;
      }
      for (let i=1; i<idx; i++) {
        item = item.next;
        if (i === idx -1) {
          prev = item;
          follow = item.next.next;
          item = item.next
          let print = item.val;
          item = follow;
          prev.next = item;
          this.length = this.length - 1;
          return print;
        }    
      }
    }

  }

  /** average(): return an average of all values in the list */

  average() {
    let sum = 0;
    let i = 0;
    if (this.length === 0) {
      return sum;
    }
    let item = this.head;
    while (i < this.length) {
      sum += item.val;
      item = item.next;
      i += 1;
    }
    return sum/this.length;
  }
}

module.exports = LinkedList;

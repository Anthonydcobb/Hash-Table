function HashTable(size) {
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next){
  this.key = key;
  this.value = value;
  //this is incase of collisons
  this.next = next || null;
}

HashTable.prototype.hash = function(key) {
  let result = 0
  for (letter in key) {
    result += key.charCodeAt(letter)
  }
  //this makes the hash a number that fits the array size
   return result % this.numBuckets;
  
}

HashTable.prototype.insert = function(key, value) {
  let index = this.hash(key);
  if (!this.buckets[index]) {
    this.buckets[index] = new HashNode(key, value)
  } else {
    let currentNode = this.buckets[index];
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = new HashNode(key, value)
    
  }
  
}


let myHT = new HashTable(30);


myHT.insert('anthony', 'ant@gmail.com')
myHT.insert('nikki', 'nikki@gmail.com')
myHT.insert('nikik', 'nikki@gmail.com')

console.log(myHT)

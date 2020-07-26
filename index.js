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
  } else if (this.buckets[index].key === key){  
          this.buckets[index].value = value;
        //you need the return statement to stop the function from continuing
        return
  } else {
    let currentNode = this.buckets[index];
    while (currentNode.next) {
      // this is to update a value if a key inserted is the same
      if (currentNode.next.key === key) {
        currentNode.next.value = value;
        //you need the return statement to stop the function from continuing
        return
      }
      currentNode = currentNode.next
    }
    currentNode.next = new HashNode(key, value)
    
  }
  
}


let myHT = new HashTable(30);


myHT.insert('anthony', 'ant@gmail.com')
myHT.insert('nikki', 'nikki@gmail.com')
myHT.insert('nikik', 'nikik@gmail.com')
myHT.insert('anthony', 'ant2222@gmail.com')
myHT.insert('hank', 'hank@gmail.com')
myHT.insert('jo', 'jo@gmail.com')
myHT.insert('boop', 'boop@gmail.com')
myHT.insert('snoopy', 'snoop@gmail.com')
myHT.insert('sonopy', 'snopo@gmail.com')
myHT.insert('arrggg', 'a@gmail.com')
myHT.insert('jim', 'b@gmail.com')
myHT.insert('slim', 'bigguy@gmail.com')


console.log(myHT)

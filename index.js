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

let myHT = new HashTable(30);
console.log(myHT)
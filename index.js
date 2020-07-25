function HashTable(size) {
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

let myHT = new HashTable(30);
console.log(myHT)
let myArray = [1,2,3,4];  
  
//remove 2 items starting at index 1  
myArray.splice(1, 2);  
console.log(myArray);  
// => [1, 4]  
  
//insert 2 and 3 starting at index 1 (while deleting 0 elements)  
myArray.splice(1, 0, 2, 3);  
console.log(myArray);  
// => [1, 2, 3, 4]  
  
//delete 2 items starting at index 1, and replace them with 20 and 30  
myArray.splice(1, 2, 20, 30);  
console.log(myArray);  
// => [1, 20, 30, 4]
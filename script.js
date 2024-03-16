/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  let arr2=[
    {id: 5, name: "KUMAR", age: "23", profession: "developer"},
    {id: 6, name: "LALITHA", age: "23", profession: "admin"},
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr
    .filter(person => person.profession === "developer")
    .map(developer => console.log(developer.name));
  
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(person => {
      if (person.profession === "developer") {
        console.log(person.name);
      }
    });
  
    }
  
  
  function addData() {
    //Write your code here, just console.log
    const newData = { id: 4, name: "RAMYA", age: "25", profession: "developer" };
    arr.push(newData);
    console.log(arr);
  }
  
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr = arr.filter(person => person.profession !== "admin");
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
  
  arr=arr.concat(...arr2);
  console.log(arr);
  }
  
  
  
  
  
// const submitHTML = document.querySelector("#")

const data = [
    {name:"Naveen", age:18, email:"naveenmv@abcd.com"},
    {name:"Kavi", age:20, email:"kavi@abcd.com"},
    {name:"Venkat", age:22, email:"venkat@abcd.com"}
]



function generateTable(data){
    let table = '<table>';
    table += '<tr><th>Name</th><th>Age</th><th>Email</th></tr>';  
    data.forEach( ele => {
    table += `<tr><td>${ele.name}</td><td>${ele.age}</td><td>${ele.email}</td></tr>`     
    });
    table += '<table>';
    return table;   
}

// consttableContainer = document.getElementById("table-Container");
// tableContainer.innerHTML =generateTable(data);

// console.log(consttableContainer);
// console.log(tableContainer);

// // table +=<tr><td></td><td></td><td></td></tr>

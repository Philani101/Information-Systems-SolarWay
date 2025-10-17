document.addEventListener("DOMContentLoaded", () => {
  const data= [
    { RepairPartID: 23, RepairID: 5, PartID: 68},
    { RepairPartID: 24, RepairID: 10, PartID: 128},
    { RepairPartID: 25, RepairID: 15, PartID: 238},
    { RepairPartID: 26, RepairID: 20, PartID: 434},
    { RepairPartID: 27, RepairID: 25, PartID: 548},
    { RepairPartID: 28, RepairID: 30, PartID: 352},
    { RepairPartID: 29, RepairID: 35, PartID: 845},
    { RepairPartID: 30, RepairID: 40, PartID: 654}
  ];
  
  const loadDataBtn=document.getElementById("viewRepairPartbtn")
  const tableBody = document.querySelector("#RepairPartDataTable");
  
  console.log("populateTable function called");

  function populateTable(data){
  
  
  console.log("populateTable function called 2");
    data.forEach(item =>{
      const row = document.createElement("tr");
  
      Object.values(item).forEach(value => {
        const cell = document.createElement("td")=value;
        cell.textContent;
        row.appendChild(cell);
      });
      tableBody.appendChild(row);
    });
  }
  
  loadDataBtn.addEventListener("click", () =>{
    console.log("Button clicked");
    populateTable(data)
  });
});
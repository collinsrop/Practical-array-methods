document.addEventListener("DOMContentLoaded", () => {
  const carsTime = [
    { name: "Premio c10", Time: 7, price:"120$"},
    { name: "Datsun x1", Time: 8,  price:"100$"},
    { name: "Helux 550", Time: 9, price:"180$"},
    { name: "Corolla", Time: 10, price:"115$"},
    { name: "Subaru Outback", Time: 11 },
    { name: "Nissan Datsun", Time: 12 },
    { name: "Range Rover SPORT", Time: 13 },
    { name: "Discovery 12", Time: 14 },
    { name: "Mini cooper", Time: 15 },
    { name: "Corolla x4", Time: 16 },
    { name: "Toyota 4x4", Time: 17 },
	{name: "Toyota Voxy", Time: 17 },
    { name: "Subaru Forester", Time: 18 },
    { name: "G-wagon", Time: 19 },
  ];
  //seven
  document.querySelector("#seven").addEventListener("click", ()=>{
	let availableCarNow = carsTime.filter(cars=>cars.Time === new Date().getHours());
	let carName = availableCarNow.map(cars=>cars.name);
	let numberOfCars = availableCarNow.length;
	document.querySelector("#carname").innerHTML = carName;
	document.querySelector("#no").innerHTML = numberOfCars;
  });
  //cancel button
  document.querySelector("#cut").addEventListener("click",()=>{
	document.querySelector("#carname").style.display = "none";
	document.querySelector("#no").style.display = "none";
  });
  //button hover effects
  document.querySelector("#cut").addEventListener("mouseover",()=>{
     document.querySelector("#cut").style.backgroundColor = "#ff0000";
	 document.querySelector("#cut").style.transition="200ms";
	 document.querySelector("#cut").style.scale="110%";
  });
  document.querySelector("#cut").addEventListener("mouseout",()=>{
	document.querySelector("#cut").style.backgroundColor ="#ffffff";
	document.querySelector("#cut").style.transition="200ms";
	document.querySelector("#cut").style.scale="100%";
  });
//styles
document.querySelector("#container").style.position ="absolute";
document.querySelector("#container").style.top="50%";
document.querySelector("#container").style.left="50%";
document.querySelector("#container").style.transform = "translate(-50%, -50%)";

});

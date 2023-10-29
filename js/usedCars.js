
document.addEventListener("DOMContentLoaded", function() {
  const makeFilter = document.getElementById("make");
  const priceFilter = document.getElementById("price");
  const carsContainer = document.getElementById("cars");
  const yearFilter = document.getElementById("year");
  

  const usedCars = [
      {
          image: "./images/toyotaa.png",
          year: 2018,
          make: "Toyota",
          model: "Camry",
          mileage: 30000,
          price: 18000,
          color: "Silver",
          gasMileage: "25 mpg city, 35 mpg highway",
        },
        {
          image: "./images/honda.jpeg",
          year: 2016,
          make: "Honda",
          model: "Civic",
          mileage: 45000,
          price: 14000,
          color: "White",
          gasMileage: "30 mpg city, 40 mpg highway",
        },
        {
          image: "./images/ford-black.jpg",
          year: 2017,
          make: "Ford",
          model: "Fusion",
          mileage: 35000,
          price: 16000,
          color: "Black",
          gasMileage: "28 mpg city, 38 mpg highway",
        },
        {
          image: "./images/nissan.jpeg",
          year: 2019,
          make: "Nissan",
          model: "Altima",
          mileage: 25000,
          price: 17000,
          color: "Blue",
          gasMileage: "27 mpg city, 36 mpg highway",
        },
        {
          image: "./images/red-chevy.jpg",
          year: 2015,
          make: "Chevrolet",
          model: "Malibu",
          mileage: 50000,
          price: 12000,
          color: "Red",
          gasMileage: "25 mpg city, 37 mpg highway",
        },
        
        {
          image: "./images/passat,volkswagon.webp",
          year: 2016,
          make: "Volkswagen",
          model: "Passat",
          mileage: 40000,
          price: 15000,
          color: "Gray",
          gasMileage: "29 mpg city, 40 mpg highway",
        },
        {
          image: "./images/silver-elantra.webp",
          year: 2020,
          make: "Hyundai",
          model: "Elantra",
          mileage: 22000,
          price: 16000,
          color: "Silver",
          gasMileage: "30 mpg city, 41 mpg highway",
        },
        {
          image: "./images/green-sub.jpg",
          year: 2014,
          make: "Subaru",
          model: "Outback",
          mileage: 60000,
          price: 14000,
          color: "Green",
          gasMileage: "22 mpg city, 30 mpg highway",
        },
        {
          image: "./images/blue-mazda.png",
          year: 2017,
          make: "Mazda",
          model: "CX-5",
          mileage: 32000,
          price: 19000,
          color: "Blue",
          gasMileage: "24 mpg city, 31 mpg highway",
        },
        {
          image: "./images/white-kia.png",
          year: 2018,
          make: "Kia",
          model: "Sorento",
          mileage: 28000,
          price: 17000,
          color: "White",
          gasMileage: "22 mpg city, 29 mpg highway",
        },
       
        {
          image: "./images/challenger,dodge.webp",
          year: 2015,
          make: "Dodge",
          model: "Challenger",
          mileage: 30000,
          price: 24000,
          color: "Black",
          gasMileage: "19 mpg city, 30 mpg highway",
        },
        {
          image: "./images/red-cadillac.jpg",
          year: 2017,
          make: "Cadillac",
          model: "XT5",
          mileage: 28000,
          price: 32000,
          color: "Red",
          gasMileage: "19 mpg city, 27 mpg highway",
        },
        {
          image: "./images/blue-jag.png",
          year: 2018,
          make: "Jaguar",
          model: "F-PACE",
          mileage: 26000,
          price: 38000,
          color: "Blue",
          gasMileage: "18 mpg city, 23 mpg highway",
        },
        {
          image: "./images/tesla.avif",
          year: 2019,
          make: "Tesla",
          model: "Model S",
          mileage: 18000,
          price: 55000,
          color: "Black",
          gasMileage: "Electric (370 miles per charge)",
        },
        {
          image: "./images/cayenne,porsche.webp",
          year: 2020,
          make: "Porsche",
          model: "Cayenne",
          mileage: 22000,
          price: 68000,
          color: "White",
          gasMileage: "20 mpg city, 26 mpg highway",
        },
        {
          image: "./images/eS,lexus.webp",
          year: 2017,
          make: "Lexus",
          model: "ES",
          mileage: 29000,
          price: 26000,
          color: "White",
          gasMileage: "21 mpg city, 30 mpg highway",
        },
        {
          image: "./images/5,BMW.webp",
          year: 2016,
          make: "BMW",
          model: "5 Series",
          mileage: 32000,
          price: 27000,
          color: "Black",
          gasMileage: "23 mpg city, 34 mpg highway",
        },
  ];


  function renderCars() {
      const selectedMake = makeFilter.value;
      const selectedPrice = priceFilter.value;
      const selectedYear = yearFilter.value;
      const maxMileage = parseInt(document.getElementById("maxMileage").value) || Infinity;
      const selectedColor = document.getElementById("color").value;
      
      const filteredCars = usedCars.filter(car => {
          if (selectedMake !== "all" && car.make !== selectedMake) {
              return false;
          }
  
          if (selectedPrice !== "all" && car.price > parseInt(selectedPrice)) {
              return false;
          }
          
          if (selectedYear !== "all" && car.year !== parseInt(selectedYear)) {
            return false;
        }
          
          if (car.mileage > maxMileage) {
              return false;
          }
          if (selectedColor !== "all" && car.color !== selectedColor) {
              return false;
          }
  
          return true;
      });
  
      
      if (filteredCars.length === 0) {
          carsContainer.innerHTML = "<p>No car matches the filter criteria. Please try again!</p>";
      } else {
     carsContainer.innerHTML = "";
      filteredCars.forEach(car => {
          const carElement = document.createElement("div");
          carElement.classList.add("car");
          carElement.innerHTML = `
              <img class = "car-image" src="${car.image}" alt="${car.make} ${car.model}">
              <h3>${car.make} ${car.model}</h3>
              <p>Year: ${car.year}</p>
              <p>Price: $${car.price}</p>
              <p>Color: ${car.color}</p>
              <p>Mileage: ${car.mileage} miles</p>
              <p>Gas Mileage: ${car.gasMileage}</p> <!-- Add this line -->
          `;
          carsContainer.appendChild(carElement);
      });
  }
}


  makeFilter.addEventListener("change", renderCars);
  priceFilter.addEventListener("change", renderCars);
  yearFilter.addEventListener("change", renderCars);
  document.getElementById("maxMileage").addEventListener("change", renderCars);
  document.getElementById("color").addEventListener("change", renderCars);
 

  renderCars();
});

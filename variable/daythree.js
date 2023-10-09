// let arr = [];
// arr.push(["Car", 2000]);
// arr.push(["Truck", 500]);
// arr.push(["Bike", 6500]);
// arr.push(["Scooter", 1500]);

// arr[0][2] = ["Toyota", "Nissan"];
// arr[1][2] = ["Benz"];
// arr[2][2] = ["Honda"];
// arr[3][2] = ["Unbranded"];

// arr.push([0][3]) = ["Toyotaa"]
// arr.push[2]["Toyota"]

let array = [1, 2, 3, 4, 5, 6, 7, 8]
let [z, m, , , t] = array;
console.log(t)



// console.table(arr);

// let arr2 = [];
// let row1 = [];
// let row2 = [];
// let row3 = [];

let obj1 = {
    name: "Sydney",
    population: 5000,
    temp: 11,
    currency: "AUD"
};

let obj2 = {
    name: "Zanzibar",
    population: 4000,
    temp: 9,
    currency: "Tch"
};

let obj3 = {
    name: "Freetown",
    population: 5700,
    temp: 7,
    currency: "Lns"
};

let arrElement = [];
arrElement.push(obj1);
arrElement.push(obj2);
arrElement.push(obj3);

console.table(arrElement);


// row1.push(null)
// row1.push(obj1);
// row1.push(obj2);
// row1.push(obj3);
// arr2.push(row1)

// let obj4 = {
//     name: "Lagos",
//     population: 6000,
//     temp: 15,
//     currency: "NGN"
// };

// let obj5 = {
//     name: "Shenyang",
//     population: 4000,
//     temp: -5,
//     currency: "RMB"
// }

// let obj6 = {
//     name: "Tokyo",
//     population: 2300,
//     temp: 2,
//     currency: "YEN"
// };

// row2.push(obj4)
// row2.push(obj5);
// row2.push(obj6);
// row2.push(null);

// arr2.push(row2);

// let obj7 = {
//     name: "Toronto",
//     population: 4000,
//     temp: -4,
//     currency: "CAD"
// };

// let obj8 = {
//     name: "Capetown",
//     population: 7000,
//     temp: 7,
//     currency: "RND"
// };

// let obj9 = {
//     name: "Ghana",
//     population: 5100,
//     temp: 1,
//     currency: "CDS"
// };


let arr = ([obj1, obj2, obj3, , obj5, obj6, obj7, obj8, obj9]);
3

row3.push(obj7);
row3.push(obj8);
row3.push(obj9);
row3.push(null);

arr2.push(row3);


console.table(arr2)

let sum = 0;

for (let i = 0; i < arr2.length;i++) {
  for (let j = 0; j < arr2[i].length; j++) {
    if (arr2[i][j] == null){
        continue
    } 

    else if (arr2[i][j].temp <= 10) {
      sum += arr2[i][j].population;
    }
  }
}

console.log(sum);



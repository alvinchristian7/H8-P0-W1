// 1. Melakukan Looping Menggunakan While
var flag = 0;
console.log("1. Melakukan Looping Menggunakan While\nLOOPING PERTAMA");
while(flag < 20) { 
    flag += 2;
    console.log(flag,"- I love coding");
}
console.log("LOOPING KEDUA");
while(flag >= 2) { 
    console.log(flag,"- I will become fullstack developer"); 
    flag -= 2;
}

// 2. Melakukan Looping Menggunakan For
var flag = 0;
console.log("\n2. Melakukan Looping Menggunakan For\nLOOPING PERTAMA");
for(flag++; flag <=20; flag++) { 
    console.log(flag,"- I love coding");
}
console.log("LOOPING KEDUA");
for(flag--; flag >0; flag--) { 
    console.log(flag,"- I will become fullstack developer");
}

// 3. Angka Ganjil dan Genap
var counter = 1;
console.log("\n3. Angka Ganjil dan Genap");
while(counter<=100) {
    if(counter%2==0) console.log("GENAP");
    else console.log("GANJIL");
    counter++;
}
counter = 1;
while(counter<=100) {
    if(counter%3 == 0) console.log(counter,"KELIPATAN 3");
    counter+=2;
}
counter = 1;
while(counter<=100) {
    if(counter%6 == 0) console.log(counter,"KELIPATAN 6");
    counter+=5;
}
counter = 1;
while(counter<=100) {
    if(counter%10 == 0) console.log(counter,"KELIPATAN 10");
    counter+=9;
}
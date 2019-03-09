console.log("\n1. Menyusun Barisan Bintang");
var rows1 = 5;
while(rows1 > 0) { 
    console.log("*");
    rows1 --;
}

console.log("\n2. Menyusun Barisan Bintang Dengan Nested Looping");
var rows2 = 5;
var bintang = "";
var ulang = i = rows2;

while(rows2 > 0) { 
    while(i > 0) {
        bintang += "*";
        i--;
    }
    console.log(bintang);
    bintang = "";
    i = ulang;
    rows2--;
}

console.log("\n3. Menyusun Barisan Tangga Bintang Dengan Nested Looping");
var rows3 = 5;
var bintang = "";
var j = 0;
var i;

while(rows3 > 0) {
    i = 0;
    j++;
    while(i < j) {
        bintang += "*";
        i++;
    }
    console.log(bintang);
    bintang = "";
    rows3--;
}
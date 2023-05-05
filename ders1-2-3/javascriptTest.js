// SORU 1 🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻

// function javascriptTest() {
//   // let vowels = {"a","e","i","o","u"};
//   //   let vowels = Array.of("aeiou");
//   // let vowels = {"a","e","i","o","u"};
// Doğru cevap D🔻
//   let vowels = "aeiou";

//   for (var i = 0; i < vowels.length; i++) {
//     console.log(vowels[i]);
//     // Each letter printed on a seperate line as follows:
//     // Her harf ayrı bir satıra şu şekilde yazdırılır:
//     // a
//     // e
//     // i
//     // o
//     // u
//   }
// }
// javascriptTest();

// SORU 2 🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻

// class Animal {
//   static belly = [];
//   eat() {
//     Animal.belly.push("food");
//   }
// }

// let a = new Animal();
// a.eat();
// // Doğru cevap A🔻
// console.log("deger1", Animal.belly[0]); //Prints food
// // console.log("deger2", Object.getPrototypeOf(a).belly[0]); //Prints food
// // console.log("deger3", a.prototype.belly[0]); //Prints food
// // console.log("deger4", a.belly[0]); //Prints food

// SORU 3 🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻🔻

// What value is printed to the console after this code executes?
// Bu kod yürütüldükten sonra konsola hangi değer yazdırılır?

let cat = Object.create({ type: "lion" });
cat.size = "large";
let copyCat = { ...cat };
cat.type = "tiger";
console.log(copyCat.type, copyCat.size);

// lion undefined
// lion large
//  tiger large
// // Doğru cevap D🔻
//  undefined large

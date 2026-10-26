"use strict";
// operators
let a = 20;
let b = 30;
console.log("Add:", a + b);
console.log("sub:", a - b);
console.log("mul:", a * b);
console.log("div:", a / b);
console.log("rem:", a % b);
console.log("power:", a ** b);
let mark1 = 40;
let attendance = 30;
console.log(mark1 >= 35 && attendance >= 25);
// conditions
let marks1 = 50;
if (marks1 >= 35) {
    console.log("pass");
}
else {
    console.log("fail");
}
let mark = 70;
if (mark >= 90 && mark <= 100) {
    console.log("A grade");
}
else if (mark >= 70 && mark <= 90) {
    console.log("B grade");
}
else {
    console.log("c grade");
}
let marks = 82;
if (marks < 0 || marks > 100) {
    console.log("Invalid marks");
}
else if (marks >= 90) {
    console.log("A Grade");
}
else if (marks >= 75) {
    console.log("B Grade");
}
else if (marks >= 50) {
    console.log("C Grade");
}
else if (marks >= 35) {
    console.log("Pass");
}
else {
    console.log("Fail");
}

let username = "Geerthy";
let password = "Rose@123";
if (username == "Geerthy") {
    if (password == "Rose@123") {
        console.log("Login Successful");
    }
    else {
        console.log("Invalid Password");
    }
}
else {
    console.log("Invalid username");
}
let d = 75;
let result = d > 90 ? "pass" : "fail";
console.log(result);
let f = 70;
if (f % 2 == 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}
let age = 18;
if (age >= 18) {
    console.log("Eligible for vote");
}
else {
    console.log("Not eligible for vote");
}

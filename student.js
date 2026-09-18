let student = {
    name: "Alex",
    age: 19,
    marks: 85
};

// 1. Print all keys
console.log(Object.keys(student));

// 2. Print all values
console.log(Object.values(student));

// 3. Add a new property
student.city = "New York";

// 4. Update marks
student.marks = 91;

// 5. Delete age
delete student.age;

// Final object
console.log(student);
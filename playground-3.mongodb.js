use("lesson_06_cohort_86");

// db.users.insertMany([
//   { firstName: "Ivan", lastName: "Ivanov", age: 22, job: "Developer", hobby: "Football" },
//   { firstName: "Anna", lastName: "Petrova", age: 19, job: "Designer", hobby: "Drawing" },
//   { firstName: "Sergey", lastName: "Sidorov", age: 25, job: "Developer", hobby: "Chess" },
//   { firstName: "Maria", lastName: "Smirnova", age: 31, job: "Marketer", hobby: "Running" },
//   { firstName: "Alexey", lastName: "Kozlov", age: 28, job: "Analyst", hobby: "Football" },
//   { firstName: "Elena", lastName: "Morozova", age: 20, job: "Designer", hobby: "Dancing" },
//   { firstName: "Dmitry", lastName: "Volkov", age: 35, job: "Manager", hobby: "Fishing" },
//   { firstName: "Olga", lastName: "Lebedeva", age: 23, job: "Developer", hobby: "Drawing" },
//   { firstName: "Pavel", lastName: "Pavlov", age: 40, job: "Director", hobby: "Chess" },
//   { firstName: "Natalia", lastName: "Sokolova", age: 26, job: "Marketer", hobby: "Dancing" }
// ]);


// Найдите всех пользователей, у которых профессия (job) — "Developer", и выведите только их
//  имена (firstName) и увлечения (hobby).
// Найдите всех пользователей, которые увлекаются либо "Football", либо "Dancing",
//  и при этом их возраст (age) строго больше 21 года.
// Выведите топ-3 самых старых сотрудников. Результат должен быть отсортирован от 
// самого старшего к младшему.
// Найдите средний, минимальный и максимальный возраст среди всех пользователей 
// в базе данных.
// Сгруппируйте пользователей по их профессии (job), посчитайте количество человек 
// в каждой профессии и отсортируйте полученные группы от большего количества к меньшему.

// db.users.find({job: "Developer"}, {firstName: 1, hobby: 1, _id: 0});

// db.users.find({age: {$gt: 21}, hobby: {$in: ["Football", "Dancing"]}});

// db.users.find().sort({lastName: -1}).limit(3);

// db.users.aggregate([
//   {
//     $group: {
//       _id: 0,
//       averageAge: {$avg: "$age",},
//       minimumAge: {$min: "$age",},
//       maximumAge: {$max: "$age",}
//     },
//   },
// ]);

// db.users.aggregate([
//   {
//     $group:{
//       _id: "$job",
//         count: {$sum: 1},
//     },
//   },
//   {
//     $sort: {count: -1 }
//   }
// ]);

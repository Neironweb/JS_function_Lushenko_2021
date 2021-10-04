// Task 1
// Функция принимает число n. Напишите рекурсивную функцию r1, которая выводит числа от n до нуля в out-1. Разделитель - пробел.

function t1(n) {
  let out = "";

  function r1(z) {
    out += z + " ";
    if (z === 0) return;
    z--;
    r1(z);
  }
  r1(n);
  document.querySelector(".out-1").innerHTML = out;
}

document.querySelector(".b-1").addEventListener("click", () => {
  t1(5);
});

// Task 2
// Функция принимает число. Напишите рекурсивную функцию r2, которая выводит числа от 0 до введенного числа в out-2 с шагом 2. Разделитель - пробел.

function t2(n) {
  let out = "";

  function r2(z) {
    out += z + " ";
    z += 2;
    if (z > n) return;
    r2(z);
  }
  r2(0);
  document.querySelector(".out-2").innerHTML = out;
}

document.querySelector(".b-2").addEventListener("click", () => {
  t2(6);
});

// Task 3.
// Функция t3 принимает аргумент 'odd' или 'even' и должна возвратить четное или не четное число в диапазоне от 0 до 100. Решите задачу рекурсивно. Для генерации случайных чисел используйте функцию randomInteger.

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function t3(arg) {
  let num = randomInteger(0, 100);
  if (num % 2 === 0 && arg === "even") return num;
  if (num % 2 != 0 && arg === "odd") return num;
  return t3(arg);
}

document.querySelector(".b-3").addEventListener("click", () => {
  document.querySelector(".out-3").textContent = t3("even");
});

// Task 4.
// Функция t4 с помощью randomInteger генерирует случайное число от 0 до 10 и проверяет его наличие в массиве ar4. Если число уже есть - выполняет генерацию заново. Если нет - возвращает это число.

let ar4 = [3, 4, 6, 7, 8];

function t4() {
  let num = randomInteger(0, 10);
  if (ar4.includes(num)) {
    return t4();
  } else {
    return num;
  }
}

document.querySelector(".b-4").addEventListener("click", () => {
  document.querySelector(".out-4").textContent = t4();
});

// Task 5.
// Напишите рекурсивную функцию t5, которая генерирует целое число от 0 до 10 ( с помощью randomInteger) и добавляем его в массив ar5. Проверяет, если сумма элементов массива больше 30 - то прекращает свою работу, если меньше - запускается заново. Возвращает массив ar5 по результату работы.

let ar5 = [];

function t5() {
  let num = randomInteger(0, 10);
  ar5.push(num);
  if (ar5.length > 30) {
    return ar5;
  } else return t5();
}

document.querySelector(".b-5").addEventListener("click", () => {
  document.querySelector(".out-5").textContent = t5();
});

// Task 6.
// Напишите рекурсивную функцию t6, которая вытаскивает из массива ar6 числа в массив ar6_res.

let ar6 = [
  1,
  [2, 3, "h"],
  [
    [4, 5, "b"],
    ["c", 6, [7]],
  ],
  8,
  [[[[[9, "i", 10, [11]]]]]],
];
let ar6_res = [];

function t6(arr) {
  for (let key of arr) {
    if (typeof key === "number") {
      ar6_res.push(key);
    }
    if (typeof key === "object") {
      t6(key);
    }
  }
}

document.querySelector(".b-6").addEventListener("click", () => {
  t6(ar6);
  document.querySelector(".out-6").textContent = ar6_res;
});

// Task 7.
// Напишите рекурсивную функцию t7, которая вытаскивает из массива ar7 все строки в ar7_res.

let ar7 = ["hi", ["hii"], [["hiii"]], [[["hiiii"]]], ["i", [[[[[["hi"]]]]]]]];
let ar7_res = [];

function t7(arg) {
  for (let key of arg) {
    if (typeof key === "string") {
      ar7_res.push(key);
    }
    if (typeof key === "object") {
      t7(key);
    }
  }
}

document.querySelector(".b-7").addEventListener("click", () => {
  t7(ar7);
  document.querySelector(".out-7").textContent = ar7_res;
});

// Task 8.
// Напишите рекурсивную функцию t8, которая получает с помощью randomInt целое число от 1000 до 9000 и проверяет если сумма первых двух цифр числа равна сумме 3 и 4 числа то возвращает это число. Если нет - повторяет операцию. Например число 1235 не удовлетворяет этому условию, потому что 1+2 не равно 3+5. А вот число 7180  - удовлетворяет.

function t8() {
  let num = randomInteger(1000, 9000);
  let str = num.toString();
  let number1 = str.substr(0, 2).split("");
  let sum1 = parseInt(number1[0]) + parseInt(number1[1]);
  let number2 = str.substr(2, 2).split("");
  let sum2 = parseInt(number2[0]) + parseInt(number2[1]);

  if (sum1 === sum2) {
    return num;
  } else {
    return t8();
  }
}

document.querySelector(".b-8").addEventListener("click", () => {
  document.querySelector(".out-8").textContent = t8();
});

// Task 9.
// Напишите рекурсивную функцию t9, которая создает массив ar9_res состоящий из возраста (age) пользователей прописанных в ar9.

let ar9 = {
  ivanov: {
    age: 10,
    parent: {
      "ivanov-a": {
        age: 20,
      },
      "ivanov-b": {
        age: 30,
        parent: {
          "sergeev-a": {
            age: 40,
            parent: {
              lionenko: {},
            },
          },
        },
      },
    },
  },
  kostenko: {
    age: 50,
    parent: {
      ignatenko: {},
      sniezko: {
        age: 60,
      },
    },
  },
};

let ar9_res = [];

function t9(obj) {
  if (obj.age) {
    ar9_res.push(obj.age);
  }
  if (obj.parent) {
    for (let key in obj.parent) {
      t9(obj.parent[key]);
    }
  }
  return ar9_res;
}

document.querySelector(".b-9").addEventListener("click", () => {
  for (let key in ar9) {
    t9(ar9[key]);
  }
  document.querySelector(".out-9").innerHTML = ar9_res;
});

// Task 10.
// Напишите рекурсивную функцию t10, которая создает массив ar10_res фамилии людей у которых нет информации о возрасте.

let ar10 = {
  ivanov: {
 age: 25,
    parent: {
      "ivanov-a": {
        age: 45,
        parent: {},
      },
      "ivanov-b": {
        age: 43,
        parent: {
          "sergeev-a": {
            age: 88,
            parent: {
              lionenko: {},
            },
          },
        },
      },
    },
  },
  kostenko: {
    age: 56,
    parent: {
      ignatenko: {
        parent: {
          sidorenko: {},
        },
      },
      sniezko: {
        age: 45,
      },
    },
  },
};

let ar10_res = [];

function t10(k, obj) {
  if (!obj.age) {
    ar10_res.push(k);
  }
  if (obj.parent) {
    for (let key in obj.parent) {
      t10(key, obj.parent[key]);
    }
  }
  return ar10_res;
}

document.querySelector(".b-10").addEventListener("click", () => {
  for (let key in ar10) {
    t10(key, ar10[key]);
  }
  document.querySelector(".out-10").innerHTML = ar10_res;
});

<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B ?

<i>Here we declared the variable named "greeting" but here console "greetign" which is an another variable. JavaScript is case-sensitive, so "greeting" and :greetign" are shown as two different variables. so its shows "ReferenceError: greetign is not defined"</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C ?

<i>The answer will be 12. Because the sum function try to be add the element a and b . But the sum will called a number and a string so the function add a number (1) and a string ("2"). So, when we call sum(1, "2"); , the result will be "12" (a string), not the numeric value 3.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A ?

<i>Here, you have an array food and an object info with a property favoriteFood that is initially assigned the value of the first element of the food array, which is "🍕".However, you then reassign the info.favoriteFood property to "🍝". This reassignment does not affect the original food array in any way. so the result will be `['🍕', '🍫', '🥑', '🍔']` </i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B ?

<i>Here, the function are create with a name parameter, but log ar happened with no parameter. so the parameter will show undefined and anser will be "Hi there, undefined"</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C ?

<i>Here, we have an array nums containing numbers, and we're using the forEach method to iterate over each element of the array. Inside the forEach callback function, we have a conditional statement that checks if num is truthy, it increments the count variable by 1.
the 0 is not count for the function so the answer will be 3 as well.</i>

</p>
</details>

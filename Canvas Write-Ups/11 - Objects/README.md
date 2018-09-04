# Objects

Objects are a way to bring all of the variables values involved in a single entity together. For example, for a rectangle you need an x and y position, a width, and a height. Up until now, we've stored all of these values separately:

```JS
var rectX = 100;
var rectY = 200;
var rectWidth = 300;
var rectHeight = 50;

rect(rectX, rectY, rectWidth, rectHeight);
```

With **objects** you can store all of these values inside a single object, which makes organizing and designing code much easier:

```JS
var rectangle = {
  x: 100,
  y: 200,
  width: 300,
  height: 50
};

rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
```

## Making Objects

Objects are defined by wrapping **key-value pairs** in brackets. A **key** is a label you give a single value inside of an object, similar to how you label variables. A key-value pair looks like this: `name: value`. The colon lets p5 know that you want to refer to this value by this certain name. Each pair is separated by a comma. Many coders like to put a single pair per line, which looks very nice but this is not required.

```JS
var person = {
  age: 28,
  married: true,
  height: 5.875,
  weight: "wow rude", // this is called a trailing comma, it makes adding to an object and rearranging values easier, it is not required
}
```

You can also create an empty object if you want to add values to it in a more structured way later:

```JS
var emptyObj = {};
```

## Using the Values in an Objects

There are two ways to access the values inside of an object: "dot notation" and "bracket notation". Bracket notation is identical to what we used for arrays, but in this case you'll need to have quotes because our indeces (keys) are strings not numbers:

```JS
person["age"] === 28 // true
```

Dot notation uses a period to pull values out. They both work identically, it's just which you personally think is clearer.

```JS
person.height > 6 // false
```

If you are using a variable determine which key you want from an object, you'll have to use bracket notation:

```JS
var key = "age";
person.married; // not found, undefined
person[married]; // true
```

## Changing and Adding Values

You'll use the same notations as above to change values inside of an object:

```JS
person.age = 29; // happy birthday
```

If you use a key that doesn't exist inside of an object, it'll be added for you.

```JS
person.name = "Bob";
person["hungover"] = true; // some party, huh?
person.weighs = 180 // watch your spelling!
```

## Objects and Arrays

Objects allow you to reduce the number of places your information is kept. In the previous lesson, we had a separate array for each value we wanted to save. Now, we can have an array where each object has all the information it needs inside of it.

```JS
// A Structure of Arrays
var circleX = [100, 200, 300];
var circleY = [350, 300, 250];
var circleColors = ["red", "green", "blue"];

for (var i = 0; i < circleX.length; i++) {
  fill(circleColors[i]);
  ellipse(circleX[i], circleY[i], 100);
}
```

versus:

```JS
var circles = [
  { x: 100, y: 350, color: "red" },
  { x: 200, y: 300, color: "green" },
  { x: 300, y: 250, color: "blue" },
]

for (var i = 0; i < circles.length; i++) {
  var c = circles[i]; // save to a short variable for more concise code
  fill(c.color);
  ellipse(c.x, c.y, 100);
}
```

These approaches have different advantages over the other, but at our current level, we just want to use the approach that makes our code easier to understand and without a lot of repeated code.

## Object Factories

In the interest in not repeating too much code, we can use functions to make our objects. This gives consistency and conciseness.

For example, let's say we want to create a star where the mouse is clicked. We also want the stars to all be white and to have a random size and number of sides to keep them looking different. Anything random or set in stone can be handled by the function. Anything that is more dynamic (like the x and y position) should passed in.

```JS
var stars = []; // an array to contain all the stars
function createStar(x, y) {
  // add to the array
  // color can be handled where the stars are drawn
  stars.push({
    x: x,
    y: y,
    points: floor(random(3, 7)),
    size: random(50, 150),
  });
}

function mousePressed() {
  createStar(mouseX, mouseY); // example use
}
```

Creating a drawing function you can pass an object to isn't such a bad idea either.

## Object-Oriented Programming

All of this lends itself to a particular style of program design called **object-oriented programming**. Take a look at the picture below.

![A screenshot of *Crossy Road*](https://assets.vg247.com/current//2015/03/crossy_road_header_1.jpg)

You naturally recognize different things in the picture and can predict how they might behave:

- Cars, which travel in the direction you're facing.
- Logs, which probably drift on the water.
- A Chicken, likely our hero.
- Trees, probably block our path.
- A coin, likely collectable, probably moves with the log.

We also have a few things that aren't part of the world:

- Score
- Coin count

Object-oriented program will apply nicely to the first list, but not so much to the second. Each item in the first list has its own data that it keeps track of and behaviour that it follows. These are things that can be programmed individually as different types of objects.

In most languages that have objects there is a way to tie functions to objects, and Javascript is no exception. We can cover that later, but for now, creating different functions and passing objects to them is not only a great to organize functionality, it's a popular way to program with objects.

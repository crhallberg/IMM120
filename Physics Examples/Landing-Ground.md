# Landing on the Ground

We will be walking through how to have gravity but have an object land on the ground. The final result will work like this: https://cdpn.io/e/OOQEar. Brilliant.

## 1. What Our Program Does

Our program simulates gravity and ground for a box. You can make the box jump when it's on the ground.

## 2. A Review of Gravity

So, to create basics physics, everything that's moving needs a position and a speed. Every frame we need to update everythings position by adding their speed to their position.

```JS
myBox.y += myBox.speedY;
```
> You can see this on line 29. We're only moving vertically.

For gravity, we need to accelerate downwards ([in most cases](https://youtu.be/eDX_fY3wDM0?t=86 "Super Mario Galaxy hurts my brain")). To do that, we need to update our vertical speed, slowly making it larger. This will steer us towards the ground.

```JS
myBox.speedY += .5; // GRAVITY
```
> You can see this on line 31.

## 3. Being on the ground

The core idea behind landing physics is keeping track of whether we are on the ground or not. This is done with a variable, in our example this variable is called `onTheGround` and is ever only set to `true` or `false`. This is called a "status variable" or a "state variable" because it keeps track of the current status of the behavior of the project (often called a state in programming).

Next, we need to determine what we want to happen only when we're on the ground, versus only when we're not on the ground:

| onTheGround             | not onTheGround     |
|-------------------------|---------------------|
| sit still               | rise and fall       |
| jump                    | apply gravity       |
| be even with the ground | be above the ground |

We also want to determine when we switch from being on the ground and not. In our simple case, we want to switch to being onTheGround when we fall and hit it. We're adding the size to y here to calculate using the bottom of the box:

```JS
if (myBox.y + myBox.size >= groundHeight) {
    // ...
    onTheGround = true;
}
```
> Lines 32-38

We want to switch to not being onTheGround when we jump. It's the only case where the box leaves the ground. See keyPressed for the switch there.

## 3. Jumping

To physically jump, we want to make the vertical speed of the box negative. We only want this to happen if the box is on the ground, so we put our jump code inside an if-statement.

```JS
function keyPressed() {
    if (onTheGround) {
        myBox.speedY = -15; // jump!
        onTheGround = false; // we have left the ground
    }
}
```

## 4. Polish

Sometimes, when we detect that the box

```JS
if (myBox.y + myBox.size >= groundHeight) {
    // manually place the box on the ground
    // subtract size to but the bottom on the ground
    myBox.y = groundHeight - myBox.size;
    myBox.speedY = 0;
    onTheGround = true;
}
```

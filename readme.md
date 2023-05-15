# Emo.js

Javascript is a perfect programming language but lacks one thing: emojis. This project addresses this issue by introducing a new superset of javascript: emo.js - javascript with emojis.

## How it works

You can write normal javascript but variables and functions can utilize the power of emojis in their names.

Here is an example:

```js
const 😊🙋‍♂️ = 'Hello world'
console.log(😊🙋‍♂️) // Hello world
```

Here is another one:

```js
function 🤡(🎀,✨,🗒️) {
  if(🗒️ <= 0) {
    return ✨
  }

  return 🤡(✨,🎀+✨,🗒️- 1)
}

🤡(0,1,7) // 21
```

Or this one:

```js
const 🍌 = "Ba"+ +{} + 'a'
console.log(🍌) // BaNaNa
```

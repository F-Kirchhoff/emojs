# Emo.js 🖤🤖

Javascript is a perfect programming language but lacks one thing: emojis. This project addresses this issue by introducing a new superset of javascript: emo.js - javascript with emojis.

## How it works

Create a file with the `.emo` ending and start coding! You can write normal javascript but variables and functions can utilize the power of emojis in their names. Run the code by using the `npm compile` script:

```bash
npm run compile example
```

Here is a code example:

```js
const 😊🙋‍♂️ = 'Hello world'
console.log(😊🙋‍♂️) // Hello world
```

Here is another one:

```js
function 🤡(🎀,✨,🗒️) {
  if(🗒️ <= 0) {
    return 🎀
  }

  if(🗒️ === 1) {
    return ✨
  }

  return 🤡(✨,🎀+✨,🗒️ - 1)
}

🤡(0,1,7) // 13
```

Or this one:

```js
const 🍌 = "Ba"+ +{} + 'a'
console.log(🍌) // BaNaNa
```

You get the picture. The possibilities are literally endless.

## Upsides of emo.js

The following list is an incomplete collection of all the benefits that emo.js brings to the development community:

- less code with shorter variables names (and less code is always better!)
- faster code scanning
- more appealing to a wider audience of possible developers
- colors
- more fun while coding

## Known issues

For now emo.js can't handle emojis in strings, our development team is working relentlessly to solve this issue in order to give you the ultimate emoji experience.

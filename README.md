# upgraded-giggle


## Exempel: Tagged Template literal
```js

function myFunc(foo, ...vals) {
  console.log(foo, vals)
}

foo = "Foo";
bar = "Bar"

myFunc(`normal ${foo} bar: ${bar}`);


// Tagged Template Literal
myFunc`tagged ${foo} bar: ${bar}`;

```
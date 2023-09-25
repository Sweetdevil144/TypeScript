## TypeScript - Type Inference and Explicit Types
- TypeScript is a statically typed language
- TypeScript compiler infers the type of a variable from its value
- TypeScript compiler infers the type of a function from its return value

```
let a = 10; // Type inference
let b: number = 10; // Explicit type
```

```
function add(a: number, b: number) {
    return a + b;
}
```
# TypeScript Teams Stats

## What is an Enum?

Enums (short for "enumerations") in TypeScript are a way to define a set of named constants. They allow you to create meaningful names for numeric or string values, making your code more readable and maintainable.

## When to Use Enums?

1. Follow near-identical syntax rules as normal objects
2. Creates an object with the same keys and values when converted from TS to JS
3. Primary goal is to signal to other engineers that these are all closely related values
4. Use whenever we have a small fixed set of values that are all closely related and known at compile time

## Generics

1. Like function arguments, but for the types in class/function definitions
2. Allow us to define the type of a property/argument/return value at a future point
3. Used heavily when writing reusable code

## Inheritance vs Composition in TypeScript

This document highlights the differences between **Inheritance** and **Composition** in TypeScript. Both are design principles used to share and reuse functionality, but they have distinct use cases and implications.

| Feature                       | Inheritance                                                                     | Composition                                                                                   |
| ----------------------------- | ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| **Definition**                | A mechanism where a class derives properties and behaviors from a parent class. | A design principle where objects are composed of other objects to achieve functionality.      |
| **Implementation**            | Achieved using `extends` keyword.                                               | Achieved by combining multiple smaller objects or functions.                                  |
| **Code Reuse**                | Shares code by inheriting from a base class.                                    | Shares code by delegating tasks to other objects or classes.                                  |
| **Flexibility**               | Less flexible, as changes to the parent class can affect all child classes.     | More flexible, as individual components can be replaced or modified without affecting others. |
| **Tight Coupling**            | Leads to tight coupling between the child and parent classes.                   | Promotes loose coupling between components.                                                   |
| **Hierarchy Depth**           | Can result in deep and complex hierarchies, which are harder to manage.         | Avoids hierarchies by favoring flat structures.                                               |
| **Example Use Cases**         | Best for "is-a" relationships (e.g., `Car extends Vehicle`).                    | Best for "has-a" or "uses-a" relationships (e.g., `Car has Engine`).                          |
| **Code Example**              | See below for examples of **Inheritance** and **Composition**.                  | See below for examples of **Inheritance** and **Composition**.                                |
| **Testing**                   | Harder to mock and test due to dependencies on base class implementation.       | Easier to test due to modularity and separation of concerns.                                  |
| **Design Complexity**         | Simple to implement but can grow complex with deeper hierarchies.               | May require more effort initially but results in a cleaner and more maintainable design.      |
| **TypeScript Keywords/Tools** | `class`, `extends`, `super`.                                                    | `interface`, dependency injection, composition using class members or functions.              |

---

## Code Examples

### Inheritance

```typescript
class Animal {
  eat() {
    console.log("Eating");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Barking");
  }
}

const dog = new Dog();
dog.eat(); // Output: Eating
dog.bark(); // Output: Barking
```

### Composition

```typescript
class Engine {
  start() {
    console.log("Engine starting");
  }
}

class Car {
  constructor(private engine: Engine) {}

  drive() {
    this.engine.start();
    console.log("Car driving");
  }
}

const engine = new Engine();
const car = new Car(engine);
car.drive();
// Output:
// Engine starting
// Car driving
```

# Interfaces vs Abstract Classes in TypeScript

When designing object-oriented applications in TypeScript, you can choose between **interfaces** and **abstract classes** to define the structure and behavior of your objects. The following table summarizes the key differences between them:

| **Feature**               | **Interface**                                                                                   | **Abstract Class**                                                                                               |
| ------------------------- | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Definition**            | A contract that defines the shape of an object or a class without providing any implementation. | A class that can have both abstract methods (without implementation) and concrete methods (with implementation). |
| **Purpose**               | Used to define the structure of objects or classes.                                             | Used to provide a base class with shared behavior and enforce subclasses to implement specific methods.          |
| **Multiple Inheritance**  | Supports multiple inheritance (a class can implement multiple interfaces).                      | Does not support multiple inheritance (a class can only extend one abstract class).                              |
| **Method Implementation** | Cannot have method implementations (only declarations).                                         | Can include method implementations as well as declarations.                                                      |
| **Properties**            | Can only declare properties (no initial values or logic).                                       | Can declare and initialize properties, including private/protected access modifiers.                             |
| **Constructor**           | Cannot define constructors.                                                                     | Can define constructors to initialize data.                                                                      |
| **Usage**                 | Commonly used to define the shape of objects and enforce type checking.                         | Commonly used as a base class for shared behavior and logic among subclasses.                                    |
| **Modifiers**             | Cannot use access modifiers (`public`, `private`, `protected`).                                 | Can use access modifiers for methods and properties.                                                             |
| **Instance Creation**     | Cannot create instances of an interface.                                                        | Cannot create instances of an abstract class.                                                                    |
| **Extensibility**         | A class can implement multiple interfaces.                                                      | A class can only extend one abstract class but can implement interfaces in addition.                             |
|                           |

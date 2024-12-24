// 1. INHERITENCE
// ------1-masala-------
// class Person {
//   name: string
//   age: number
//   constructor (name: string, age: number) {
//     this.name = name
//     this.age = age
//   }
//   getInfo (): string {
//     return `My name is ${this.name} is ${this.age} year${
//       this.age > 1 ? 's' : ''
//     } old`
//   }
// }
// class Student extends Person {
//   course: string
//   constructor (name: string, age: number, course: string) {
//     super(name, age)
//     this.course = course
//   }
// }
// let student = new Student('John', 10, '72')
// console.log(student.getInfo())
// --------------------------------------------------------------------------------------------------------------------
// ------2-masala-------
// class Car {
//   name: string
//   price: number
//   constructor (name: string, price: number) {
//     this.name = name
//     this.price = price
//   }
// }
// class carChild extends Car {
//   color: string
//   constructor (name: string, price: number, color: string) {
//     super(name, price)
//     this.color = color
//   }
// }
// let car = new carChild('Cobalt', 20000, 'white')
// console.log(car)
// ------3-masala-------
// class Dog {
//   name: string
//   voice: string
//   constructor (name: string, voice: string) {
//     this.name = name
//     this.voice = voice
//   }
// }
// class dogChild extends Dog {
//   age: number
//   constructor (name: string, sound: string, age: number) {
//     super(name, sound)
//     this.age = age
//   }
// }
// let dog = new dogChild('dog', 'vov vov', 10)
// console.log(dog)
// --------------------------------------------------------------------------------------------------------------------
// 2. ENCAPSULATION
// ------1-masala-------
// class Bird {
//   private name: string
//   public wing: string
//   readonly feather: string
//   constructor (name: string, wing: string, feather: string) {
//     this.name = name
//     this.wing = wing
//     this.feather = feather
//   }
// }
// let bird = new Bird('burgut', 'qanot', 'pat')
// console.log(bird)
// ------2-masala-------
// class Cap {
//   public color: string
//   public price: number
//   private shap: string
//   constructor (color: string, price: number, shap: string) {
//     this.color = color
//     this.price = price
//     this.shap = shap
//   }
// }
// let cap = new Cap('black', 30000, 'circle')
// console.log(cap)
// ------3-masala-------
// class Book {
//   public page: number
//   private shape: string
//   public price: number
//   constructor (page: number, shape: string, price: number) {
//     this.page = page
//     this.shape = shape
//     this.price = price
//   }
// }
// let book = new Book(500, 'rectangle', 50000)
// console.log(book)
// --------------------------------------------------------------------------------------------------------------------
// 3. ABSTRACTION
// ------1-masala-------
// abstract class Shape {
//   abstract calculatePerimetr(): number
// }
// class Rect extends Shape {
//   a: number
//   b: number
//   constructor (a: number, b: number) {
//     super()
//     this.a = a
//     this.b = b
//   }
//   calculatePerimetr (): number {
//     return 2 * (this.a + this.b)
//   }
// }
// let reactlange = new Rect(5, 6)
// console.log(reactlange.calculatePerimetr())
// ------2-masala-------
// class Circle extends Shape {
//   radius: number
//   constructor (radius: number) {
//     super()
//     this.radius = radius
//   }
//   calculatePerimetr (): number {
//     return 2 * this.radius * Math.PI
//   }
// }
// let circle = new Circle(5)
// console.log(circle.calculatePerimetr())
// ------3-masala-------
// class Triangle extends Shape {
//   a: number
//   b: number
//   c: number
//   constructor (a: number, b: number, c: number) {
//     super()
//     this.a = a
//     this.b = b
//     this.c = c
//   }
//   calculatePerimetr (): number {
//     return this.a + this.b + this.c
//   }
// }
// let triangle = new Triangle(10, 10, 10)
// console.log(triangle.calculatePerimetr())
// --------------------------------------------------------------------------------------------------------------------
// 4. POLYMORPHISM
// ------1-masala-------
// class Payment {
//   pay (amount: number): string {
//     return `Sizga ${amount} miqdorda to'lov qabul qilindi`
//   }
// }
// class CashPayment extends Payment {
//   pay (amount: number): string {
//     return `Sizga ${amount} miqdorda NAXT to'lov qabul qilindi`
//   }
// }
// class CreditPayment extends Payment {
//   pay (amount: number): string {
//     return `Sizga ${amount} miqdorda PLASTIKDA to'lov qabul qilindi`
//   }
// }
// let cash = new CashPayment()
// let credit = new CreditPayment()
// console.log(cash.pay(50000))
// console.log(credit.pay(70000))
// ------2-masala-------
// class Noutbook {
//   noutbook (amount: number): string {
//     return `${amount}`
//   }
// }
// class sell extends Noutbook {
//   noutbook (amount: number): string {
//     return `Siz ${amount}$ ga noutbook sotdingiz`
//   }
// }
// class buy extends Noutbook {
//   noutbook (amount: number): string {
//     return `Siz ${amount}$ ga macbook sotib oldingiz`
//   }
// }
// let sellNoutbook=new sell()
// let buyNoutbook=new buy()
// console.log(sellNoutbook.noutbook(10000));
// console.log(buyNoutbook.noutbook(20000));
// ------3-masala-------
// class Work {
//   toWork (companyName: string): string {
//     return `${companyName}`
//   }
// }
// class jobTrue extends Work {
//   toWork (companyName: string): string {
//     return `Siz ${companyName} ga ishga qabul qilindingiz 😇`
//   }
// }
// class jobFalse extends Work {
//   toWork (companyName: string): string {
//     return `Siz ${companyName} ga ishga qabul qilinmadingiz 😫`
//   }
// }
// let jobtrue = new jobTrue()
// let jobfalse = new jobFalse()
// console.log(jobtrue.toWork('Google'))
// console.log(jobfalse.toWork('Amazon'))

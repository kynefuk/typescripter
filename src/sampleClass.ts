class Person {
  name: string;
  private age: number;
  protected nationality: string;
  constructor(name: string, age: number, nationality: string){
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }
  profile(){
    return this.age;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality)
  }
  hoge(){
    return this.nationality;
  }
}

const android = new Android("hoge", 20, "japan")
//console.log(android.hoge())

class Sample {
  static isProgrammer = true;
  constructor(public name: string, private age: number){}

  static hey() {
    return `hey ${this.isProgrammer}`
  }
}

const s = new Sample("hoge", 21)
console.log(s)
console.log(Sample.isProgrammer)
console.log(Sample.hey())
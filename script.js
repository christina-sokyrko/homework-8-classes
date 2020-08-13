//basic

class Student {
    constructor (university, course, fullName) {
      this.university = university;
      this.course = course;
      this.fullName = fullName;
      this.isStudent = true;
      this.marksList = [];
  }

    getInfo() {
      return `${this.university}, ${this.course}, ${this.fullName}`;
    }
    dismiss () {
      return this.isStudent = false;
    }
    recover () {
      return this.isStudent = true;
    }
     get marks() {
       if (this.isStudent) {
       this.marksList.push(5, 4, 4, 5);
       return this.marksList;
    }
       else {
       return null;
     }
     }
     set marks(customMarks) {
       if (this.isStudent) {
       this.marksList.push(customMarks);
       return this.marksList;
    }
        else {
        return null;
      }
     }
     getAverageMark() {
       let sum = 0;
       this.marksList.forEach ((item) => sum += item);
       const  avrg = sum / this.marksList.length;
       return avrg;
     }

}
const customStudent = new Student('Some University', 'Art Class', 'John Smith');
console.log (customStudent.getInfo());
console.log (customStudent.marks);
customStudent.dismiss();
console.log (customStudent.isStudent);
customStudent.recover();
console.log (customStudent.isStudent);
console.log (customStudent.getAverageMark());

//advanced

class budgetStudent extends Student {
  constructor(university, course, fullName){
    super(university, course, fullName);
    setInterval(() => this.getScholarship(), 30000);
  }
  get marks() {
    if (this.isStudent) {
    this.marksList.push(5, 4, 4, 5);
    return this.marksList;
 }
    else {
    return null;
  }
  }
 getScholarship() {
    if (this.isStudent && this.getAverageMark() >= 4) {
      return 'Ви отримали 1400 грн стипендії';
    }
    else {
      return null;
    }
  };
}

const luckyStudent = new budgetStudent ('Other university', 'Math class', 'Jane Hill');
console.log(luckyStudent.marks);
console.log(luckyStudent.getInfo());
console.log(luckyStudent.getAverageMark());
console.log(luckyStudent.getScholarship());

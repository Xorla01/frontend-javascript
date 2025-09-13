namespace Subjects {
  export class Subject {
    teacher: Teacher = { 
        firstName: "", 
        lastName: "", 
        experienceTeachingC: 0, 
        experienceTeachingReact: 0, 
        experienceTeachingJava: 0 
    };

    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
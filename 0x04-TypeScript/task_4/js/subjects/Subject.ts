namespace Subjects {
    export class subject {
        teacher!: Teacher;

        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }
    }
}
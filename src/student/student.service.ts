import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    {
      id: 1,
      name: 'Student 1',
      age: 20,
    },
    {
      id: 2,
      name: 'Student 2',
      age: 22,
    },
  ];
  getAllStudents() {
    return this.students;
  }
  getStudentById(id: number) {
    const student = this.students.find((student) => student.id === id);
    if (!student) {
      throw new NotFoundException(`Student with id ${id} not found`);
    }
    return student;
  }
  //post
  createStudent(data: { name: string; age: number }) {
    const newStudent = {
      id: this.students.length + 1,
      name: data.name,
      age: data.age,
    };
    this.students.push(newStudent);
    return newStudent;
  }
  //put
  updateStudent(id: number, data: { name: string; age: number }) {
    const student = this.getStudentById(id);
    student.name = data.name ?? student.name;
    student.age = data.age ?? student.age;
    return student;
  }
  //patch
  patchStudent(id: number, data: Partial<{ name?: string; age?: number }>) {
    const student = this.getStudentById(id);
    if (data.name) student.name = data.name;
    if (data.age) student.age = data.age;
    return student;
  }
  //delete
  deleteStudent(id: number) {
    const index = this.students.findIndex((student) => student.id === id);
    if (index === -1) {
      throw new NotFoundException(`Student with id ${id} not found`);
    }
    const deletedStudent = this.students.splice(index, 1);
    return {
      message: `Student with id ${id} deleted successfully`,
      student: deletedStudent[0],
    };
  }
}

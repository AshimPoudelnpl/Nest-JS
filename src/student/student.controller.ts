import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get('/')
  getAll() {
    return this.studentService.getAllStudents();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.studentService.getStudentById(Number(id));
  }

  @Post()
  createStudent(@Body() data: { name: string; age: number }) {
    return this.studentService.createStudent(data);
  }

  @Put(':id')
  updateStudent(
    @Param('id') id: string,
    @Body() data: { name: string; age: number },
  ) {
    return this.studentService.updateStudent(Number(id), data);
  }

  @Patch(':id')
  patchStudent(
    @Param('id') id: string,
    @Body() data: Partial<{ name?: string; age?: number }>,
  ) {
    return this.studentService.patchStudent(Number(id), data);
  }

  @Delete(':id')
  deleteStudent(@Param('id') id: string) {
    return this.studentService.deleteStudent(Number(id));
  }
}

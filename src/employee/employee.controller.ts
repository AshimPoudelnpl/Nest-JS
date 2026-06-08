import { Controller, Get } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
  @Get('/')
  getEmployee() {
    return 'This is the employee controller';
  }
}

import { Controller, Get } from '@nestjs/common';

@Controller('cases')
export class CasesController {
  @Get()
  getCases() {
    return {
      success: true,
      message: 'Cases API is working',
    };
  }
}
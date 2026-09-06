import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';

import { ApiBearerAuth } from '@nestjs/swagger';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateCaseDto } from './dto/create-case.dto';
import { CasesService } from './cases.service';

interface AuthenticatedRequest {
  user: {
    sub: string;
    email: string;
    role: 'CITIZEN' | 'OFFICER' | 'SUPERVISOR' | 'ADMIN';
  };
}

@ApiBearerAuth()
@Controller('cases')
export class CasesController {
  constructor(private readonly casesService: CasesService) {}

  @Get()
  getCases() {
    return {
      success: true,
      message: 'Cases API is working',
    };
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createCase(
    @Req() req: AuthenticatedRequest,
    @Body() dto: CreateCaseDto,
  ) {
    return this.casesService.createCase(
      req.user.sub,
      req.user.role,
      dto,
    );
  }
}
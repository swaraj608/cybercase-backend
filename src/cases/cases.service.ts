import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';

import { CasePriority, Role } from '../../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCaseDto } from './dto/create-case.dto';

@Injectable()
export class CasesService {
  constructor(private readonly prisma: PrismaService) {}

  async createCase(
    userId: string,
    userRole: Role,
    dto: CreateCaseDto,
  ) {
    if (userRole !== Role.CITIZEN) {
      throw new ForbiddenException(
        'Only citizens can register a case',
      );
    }

    const caseNumber = await this.generateCaseNumber();

    const priority = dto.priority ?? CasePriority.MEDIUM;

    const newCase = await this.prisma.$transaction(async (tx) => {
      const createdCase = await tx.case.create({
        data: {
          caseNumber,
          citizenId: userId,
          category: dto.category,
          description: dto.description,
          district: dto.district,
          priority,
          currentStatus: 'REGISTERED',
        },
      });

      await tx.caseHistory.create({
        data: {
          caseId: createdCase.id,
          changedById: userId,
          action: 'CASE_CREATED',
          newStatus: 'REGISTERED',
          remarks: 'Case registered by citizen',
        },
      });

      await tx.auditLog.create({
        data: {
          userId,
          caseId: createdCase.id,
          action: 'CASE_CREATED',
          details: `Case ${createdCase.caseNumber} was created`,
        },
      });

      return createdCase;
    });

    return {
      success: true,
      message: 'Case registered successfully',
      case: newCase,
    };
  }

  private async generateCaseNumber(): Promise<string> {
    const year = new Date().getFullYear();

    const count = await this.prisma.case.count({
      where: {
        createdAt: {
          gte: new Date(`${year}-01-01T00:00:00.000Z`),
          lt: new Date(`${year + 1}-01-01T00:00:00.000Z`),
        },
      },
    });

    const sequence = String(count + 1).padStart(6, '0');

    return `CASE-${year}-${sequence}`;
  }
}
import { CasePriority, Role } from '../../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCaseDto } from './dto/create-case.dto';
export declare class CasesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createCase(userId: string, userRole: Role, dto: CreateCaseDto): Promise<{
        success: boolean;
        message: string;
        case: {
            id: string;
            caseNumber: string;
            category: string;
            description: string;
            district: string | null;
            priority: CasePriority;
            currentStatus: import("../../generated/prisma/enums").CaseStatus;
            createdAt: Date;
            updatedAt: Date;
            closedAt: Date | null;
            citizenId: string;
            assignedOfficerId: string | null;
        };
    }>;
    private generateCaseNumber;
}

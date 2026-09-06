import { CreateCaseDto } from './dto/create-case.dto';
import { CasesService } from './cases.service';
interface AuthenticatedRequest {
    user: {
        sub: string;
        email: string;
        role: 'CITIZEN' | 'OFFICER' | 'SUPERVISOR' | 'ADMIN';
    };
}
export declare class CasesController {
    private readonly casesService;
    constructor(casesService: CasesService);
    getCases(): {
        success: boolean;
        message: string;
    };
    createCase(req: AuthenticatedRequest, dto: CreateCaseDto): Promise<{
        success: boolean;
        message: string;
        case: {
            id: string;
            caseNumber: string;
            category: string;
            description: string;
            district: string | null;
            priority: import("../../generated/prisma/enums").CasePriority;
            currentStatus: import("../../generated/prisma/enums").CaseStatus;
            createdAt: Date;
            updatedAt: Date;
            closedAt: Date | null;
            citizenId: string;
            assignedOfficerId: string | null;
        };
    }>;
}
export {};

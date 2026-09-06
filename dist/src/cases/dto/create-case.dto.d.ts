import { CasePriority } from '../../../generated/prisma/client';
export declare class CreateCaseDto {
    category: string;
    description: string;
    district?: string;
    priority?: CasePriority;
}

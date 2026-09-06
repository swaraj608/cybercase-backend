"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasesService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../generated/prisma/client");
const prisma_service_1 = require("../prisma/prisma.service");
let CasesService = class CasesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createCase(userId, userRole, dto) {
        if (userRole !== client_1.Role.CITIZEN) {
            throw new common_1.ForbiddenException('Only citizens can register a case');
        }
        const caseNumber = await this.generateCaseNumber();
        const priority = dto.priority ?? client_1.CasePriority.MEDIUM;
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
    async generateCaseNumber() {
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
};
exports.CasesService = CasesService;
exports.CasesService = CasesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CasesService);
//# sourceMappingURL=cases.service.js.map
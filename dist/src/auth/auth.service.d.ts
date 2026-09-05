import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
export declare class AuthService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    register(registerDto: RegisterDto): Promise<{
        id: string;
        name: string;
        email: string;
        role: import("../../generated/prisma/enums").Role;
        createdAt: Date;
    }>;
}

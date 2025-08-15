import { UserService } from './user.service';
import { UpdateProfileDto } from '@shared/dtos';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getProfile(user: JwtPayload): Promise<{
        id: string;
        email: string;
        name: string;
        avatar: string | null;
        bio: string | null;
        passwordHash: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    updateProfile(user: JwtPayload, dto: UpdateProfileDto): Promise<{
        id: string;
        email: string;
        name: string;
        avatar: string | null;
        bio: string | null;
        passwordHash: string;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
}

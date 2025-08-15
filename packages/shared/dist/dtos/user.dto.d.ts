export interface UserDto {
    id: string;
    email: string;
    name: string;
    avatar?: string | null;
    bio?: string | null;
    role: 'USER' | 'ADMIN';
    createdAt: string;
    updatedAt: string;
}
export interface UpdateProfileDto {
    name?: string;
    bio?: string;
    avatar?: string;
}
//# sourceMappingURL=user.dto.d.ts.map
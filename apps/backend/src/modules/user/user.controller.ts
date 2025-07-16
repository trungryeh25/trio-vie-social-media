import { Controller, Get, Put, Body, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { GetUser } from '../../common/decorators/get-user.decorator';
import { UpdateProfileDto, UserDto } from '@shared/dtos';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProfile(@GetUser() user: JwtPayload) {
    return this.userService.getProfile(user.sub);
  }

  @UseGuards(JwtAuthGuard)
  @Put('me')
  updateProfile(@GetUser() user: JwtPayload, @Body() dto: UpdateProfileDto) {
    return this.userService.updateProfile(user.sub, dto);
  }
}

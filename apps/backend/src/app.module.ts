import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import jwtConfig from './config/jwt.config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    AuthModule,
    UserModule,
    JwtModule.register({
      secret: jwtConfig.secret,
      signOptions: { expiresIn: jwtConfig.accessTokenExpiresIn },
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'), // path to static files
      serveRoot: '/uploads', // endpoint to serve static files
    }),
  ],
  providers: [PrismaService],
})
export class AppModule {}

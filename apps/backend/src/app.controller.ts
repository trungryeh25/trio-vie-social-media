import { User } from '@shared/types/user';
import { USER_STATUS } from '@shared/constants/status';
import { Controller } from '@nestjs/common';

console.log(USER_STATUS.ACTIVE);

const demoUser: User = {
  id: 'abc',
  name: 'Trio Backend',
  email: 'be@triovie.com',
};

console.log(demoUser);

@Controller()
export class AppController {  
  getHello(): string {
    return 'Hello World!';
  }

  getUser(): User {
    return demoUser;
  }
}

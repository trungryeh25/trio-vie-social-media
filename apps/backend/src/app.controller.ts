import { User } from '@shared/types/user';
import { USER_STATUS } from '@shared/constants/status';

console.log(USER_STATUS.ACTIVE);

const demoUser: User = {
  id: 'abc',
  name: 'Trio Backend',
  email: 'be@triovie.com',
};

console.log(demoUser);

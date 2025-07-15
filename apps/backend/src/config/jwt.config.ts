export default {
  secret: process.env.JWT_SECRET || 'default_jwt_secret',
  accessTokenExpiresIn: '15m',
  refreshTokenExpiresIn: '7d',
};

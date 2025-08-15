"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    secret: process.env.JWT_SECRET || 'default_jwt_secret',
    accessTokenExpiresIn: '15m',
    refreshTokenExpiresIn: '7d',
};
//# sourceMappingURL=jwt.config.js.map
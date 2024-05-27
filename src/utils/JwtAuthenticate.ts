import jwt, { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken';

interface TokenPayload {
    iat: number;
    exp: number;
    user: any;
}

export class JwtAuthenticate {
    private static readonly secretKey = 'dietdietapis@mydietsecretprivkey';

    public static generateJwtToken(user: any): any {
        if (!user || typeof user !== 'object') {
            return false;
        }

        try {
            const issuedAt = Math.floor(Date.now() / 1000);
            const expirationTime = issuedAt + (60 * 60 * 24 * 365);

            const payload: TokenPayload = {
                ...user,
                iat: issuedAt,
                exp: expirationTime
            };

            return jwt.sign(payload, this.secretKey, { algorithm: 'HS256' });
        } catch (error) {
            return false;
        }

    }

    public static validateJwtToken(jwtToken: string): any | null {
        try {
            const decoded = jwt.verify(jwtToken, this.secretKey) as TokenPayload;
            return decoded;
        } catch (error) {
            if (error instanceof TokenExpiredError) {
                return false;
               
            } else if (error instanceof JsonWebTokenError) {
                return false;
               
            } else {
                return false;
               
            }
            return false;
        }
    }
}



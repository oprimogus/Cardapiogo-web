import * as jose from 'jose'
export class JwtService {
    decodeJWT(token: string) {
        return jose.decodeJwt(token)
    }
}

export const jwtService = new JwtService() 
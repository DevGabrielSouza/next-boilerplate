import { User } from '../entities/user'

export class Session {
  constructor(
    private readonly user: User,
    private readonly accessToken: string,
    private readonly refreshToken: string,
    private readonly expires: Date
  ) {}

  getUser(): User {
    return this.user
  }

  getAccessToken(): string {
    return this.accessToken
  }

  getRefreshToken(): string {
    return this.refreshToken
  }

  isExpired(): boolean {
    return this.expires.getTime() < new Date().getTime()
  }

  isValid(): boolean {
    return !!this.accessToken && !!this.refreshToken
  }
}

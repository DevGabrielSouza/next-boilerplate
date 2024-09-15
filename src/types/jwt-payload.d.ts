export type jwtPayload = {
  email: string
  sub: string
  name: string
  image: string | null
  tokenType: string
  emailVerifiedAt: string | null
}

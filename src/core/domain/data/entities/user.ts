export class User {
  constructor(
    private readonly id: string,
    private name: string,
    private email: string,
    private image?: string
  ) {}

  getId(): string {
    return this.id
  }

  getName(): string {
    return this.name
  }

  changeName(newName: string): void {
    if (!newName) {
      throw new Error('Name cannot be empty')
    }
    this.name = newName
  }

  getEmail(): string {
    return this.email
  }

  changeEmail(newEmail: string): void {
    if (!this.validateEmail(newEmail)) {
      throw new Error('Invalid email format')
    }
    this.email = newEmail
  }

  private validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  getImage(): string | undefined {
    return this.image
  }
}

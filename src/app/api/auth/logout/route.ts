import { logout } from '@/actions/logout'

export async function GET() {
  await logout()
}

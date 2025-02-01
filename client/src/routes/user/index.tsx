import { createFileRoute } from '@tanstack/react-router'
import UserPage from '../../features/user/container/UserPage'

export const Route = createFileRoute('/user/')({
  component: UserPage,
})



import { options } from './api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import UserCard from '@/components/UserCard'

export default async function Home() {
  const session = await getServerSession(options)
  return (
    <div>
     {session ? (
      <UserCard user={session?.user} pagetype={'Home'} />      
     ): (
      <h1>NO</h1>
     )}
    </div >
  )
}

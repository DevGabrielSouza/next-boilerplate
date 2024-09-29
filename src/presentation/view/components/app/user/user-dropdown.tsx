'use client'
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/presentation/view/components/ui/avatar'
import { Button } from '@/presentation/view/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/presentation/view/components/ui/dropdown-menu'
import {
  LockClosedIcon,
  MixerVerticalIcon,
  RocketIcon
} from '@radix-ui/react-icons'
import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'
import { useTranslations } from 'next-intl'

type UserDropdownProps = {
  user: Session['user']
}

export function UserDropdown({ user }: UserDropdownProps) {
  const t = useTranslations()

  if (!user) return

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='link'
          className='relative h-8 flex items-center justify-between w-full space-x-2 !px-0'
        >
          <Avatar className='h-8 w-8'>
            <AvatarImage src={user.image as string} alt={user.name as string} />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>

          <div className='flex flex-col flex-1 space-y-1 text-left text-white'>
            {user.name && (
              <p className='text-xs font-medium leading-none'>{user.name}</p>
            )}
            <p className='text-xs leading-none text-violet-200 text-muted-foreground'>
              {user.email}
            </p>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='end' forceMount>
        <DropdownMenuLabel className='font-normal'>
          <div className='flex flex-col space-y-1'>
            <p className='text-sm font-medium leading-none'>{user.name}</p>
            <p className='text-xs leading-none text-muted-foreground'>
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className='cursor-pointer'>
            <MixerVerticalIcon className='w-3 h-3 mr-3' />
            {t('common.settings')}
          </DropdownMenuItem>
          <DropdownMenuItem className='cursor-pointer'>
            <RocketIcon className='w-3 h-3 mr-3' />
            {t('common.upgrade')}
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='cursor-pointer' onClick={() => signOut()}>
          <LockClosedIcon className='w-3 h-3 mr-3' />
          {t('navigation.logout')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

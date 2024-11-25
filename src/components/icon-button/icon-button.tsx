import { cn } from '@/lib/utils'

interface IconButtonProps {
  icon: string
  onClick: () => void
  clasName?: string
}

const IconButton = ({ icon, onClick, clasName }: IconButtonProps) => {
  return (
    <button onClick={onClick} className={cn('rounded-full items-center bg-gray-100 dark:bg-gray-900 border shadow-none p-2 hover:scale-110 transition', clasName)}>
      {icon}
    </button>
  )
}

export { IconButton }

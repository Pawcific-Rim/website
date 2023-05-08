import { twMerge } from 'tailwind-merge'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

const Button = ({ children, onClick = () => {}, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        'rounded-xl bg-gradient-to-b from-[#FF7E40] to-[#FFEB37] p-1 shadow-md hover:shadow-2xl',
        className
      )}
    >
      <div className="back flex h-full w-full items-center justify-center whitespace-nowrap rounded-xl bg-gradient-to-b from-[#FFEE36] to-[#FF7A40]">
        {children}
      </div>
    </button>
  )
}

export default Button

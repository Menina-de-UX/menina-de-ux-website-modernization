// Components
// Utilities
// Hooks
// Interfaces
interface BoxProps {
  children: React.ReactNode
}

export function Box({ children }: BoxProps) {
  return (
    <div className="items-center bg-gray-100 py-8 px-5 lg:px-9 flex flex-col  flex-1 rounded-[1.25rem] border-[1px] border-blue-700/25 ">
      {children}
    </div>
  )
}

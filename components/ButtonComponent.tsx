"use client"
// import  Button  from "./ui/button"
function ButtonComponent({className,children,onClick}:{className:string,children:React.ReactNode,onClick?:()=>void}){ {

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )}
}

export default ButtonComponent
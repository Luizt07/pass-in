import { ComponentProps } from "react"

interface NavProps extends ComponentProps<'nav'> { }

export function Nav(props: NavProps) {
  return (
    <nav {...props} className="flex items-center gap-5" />
  )
}
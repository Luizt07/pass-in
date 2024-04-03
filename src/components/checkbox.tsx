import { ComponentProps } from "react";

interface CheckBoxProps extends ComponentProps<'input'> {}

export function Checkbox(props: CheckBoxProps){
  return (
    <input {...props} type="checkbox" className="size-4 bg-black/20 rounded border border-white/10 focus:border-raisin focus:ring-black/20 text-orange-400 focus-visible:outline-none focus:ring-offset-0" />
  )
}
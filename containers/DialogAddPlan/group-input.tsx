interface Props {
  label: string
  children: JSX.Element
}
export const GroupInput = (props: Props) => {
  return (
    <div className="flex">
      <span>{props.label}</span>
      <div>{props.children}</div>
    </div>
  )
}

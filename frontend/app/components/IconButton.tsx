import Tooltip from "./Tooltip";

interface IconButtonProps {
  icon: React.ReactElement;
  tooltipText?: string;
  children?: string | React.ReactElement;
}

export default function IconButton({ icon, tooltipText, children }: IconButtonProps) {
  const buttonComponent = (
    <button className="p-1 rounded text-sm flex items-center gap-2 hover:bg-twitchGray-250">
      {icon}
      {children ? <p>{ children }</p> : null}
    </button>
  )

  return tooltipText ? (
    <Tooltip text={tooltipText}>
      {buttonComponent}
    </Tooltip>
  ) : (
    buttonComponent
  )
}
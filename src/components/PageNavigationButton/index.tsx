import './styles.css'

type Props = {
  onClick: () => void;
  text: string;
  disabled: boolean;
}


export function PageNavigationButton( {onClick, disabled, text} : Props)  {
  return (
    <>
      <button className="button" onClick={onClick} disabled={disabled} >{text}</button>
    </>
  )
}
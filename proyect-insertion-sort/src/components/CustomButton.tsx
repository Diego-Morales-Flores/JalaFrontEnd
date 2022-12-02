import Button from '@mui/material/Button';
import "./CustomButton.css"
interface PropsButton{
  name: string;
  callback: Function;
}

export default function CustomButton(props:PropsButton) {
  return (
    <div className='button'>
      <Button variant="contained" onClick={(e)=>props.callback(e)}>{props.name}</Button>
    </div>
  )
}



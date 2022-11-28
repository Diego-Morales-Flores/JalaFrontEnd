import Button from '@mui/material/Button';
interface PropsButton{
  name: string;
  callback: Function;
}

export default function CustomButton(props:PropsButton) {
  return (
    <div>
      <Button variant="contained" onClick={(e)=>props.callback(e)}>{props.name}</Button>
    </div>
  )
}



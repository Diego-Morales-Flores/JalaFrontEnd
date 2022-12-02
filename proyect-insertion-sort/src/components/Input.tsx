import TextField from "@mui/material/TextField";
import "./Input.css"
interface PropsInput {
  label: string;
  onAction: Function;
}
export default function Input(props: PropsInput) {
  return (
    <div className="input">
      <TextField
      type="number"
      inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
      label={props.label } variant="outlined" onChange={(e)=>props.onAction(e)}/>
    </div>
  );
}

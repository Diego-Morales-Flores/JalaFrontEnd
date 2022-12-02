import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import './List.css';
interface PropsList {
  array: number[];
  keyValue: number;
  keyValue2: number;
}
export default function List(props: PropsList) {
  const {array, keyValue, keyValue2} =props;
  console.log("list Key: "+keyValue);
  console.log("list Key: "+array.length);
  return (
    <Box className="list" >
      {array.map((num, index): JSX.Element => {
        let styles={bgcolor: 'darkgray', typography: 'h4' }
        if(keyValue!=-1){
          if(index>keyValue){
            styles={...styles, bgcolor: 'error.main'}
            if(index==keyValue2){
              styles={...styles, bgcolor: 'warning.main'}
            }
          }
          else{
            styles={...styles, bgcolor: 'success.main'}
            if(index==keyValue2){
              styles={...styles, bgcolor: 'warning.main'}
            }
          }
        }
        
        return (
          <Paper  sx={styles} className="paper" key={index}>
            {num}
          </Paper>
        );
      })}
    </Box>
  );
}

import CustomButton from '../components/CustomButton'
import { useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';

export default function HomePage() {
  const navigate = useNavigate();
  const toInsertionSortPage=()=>{
    navigate("/InsertionSort")
  }
  return (
    <div>
    <Typography color={'primary.main'} variant="h1" gutterBottom>Welcome to the Insertion Sort Page</Typography>
    <CustomButton name="Let's Started" callback={toInsertionSortPage}/>
    </div>
  )
}

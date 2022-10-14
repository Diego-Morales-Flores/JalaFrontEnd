import {React} from 'react'
import '../components/card.css';
function Card(props){
const text=props.name;
 console.log(text);
    return(
        <div className="card">
            <p className="text">
             {text}
            </p>
        </div>
        
        )
}
export default Card;
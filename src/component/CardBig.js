import { AiFillStar } from "react-icons/ai";
import "./CardBig.css";

export default function CardBig(props) {
  const STAR_COLOR = "rgb(220, 117, 21)";
  const STAR_SIZE = 20;

  return (
    <div className="containerBig" >
      {props ? (
        <>
        <div  >
          <img className="posterBig"  
            src={props.data.imgUrl} alt={props.data.title} 
            />
        </div>
        <div className="descriptionBig">
          <div>
            <h3>{props.data.title}</h3>
            <p>{props.data.author}</p>
            <div>
            <AiFillStar color={STAR_COLOR} size={STAR_SIZE} />
            <AiFillStar color={STAR_COLOR} size={STAR_SIZE} />
            <AiFillStar color={STAR_COLOR} size={STAR_SIZE} />
            <AiFillStar color={STAR_COLOR} size={STAR_SIZE} />
            <AiFillStar color={STAR_COLOR} size={STAR_SIZE} />
            </div>
          </div>

        </div>
        
        </>
            ) : (
                <p>Loading...</p>
            )}
    </div>
    
  );
}

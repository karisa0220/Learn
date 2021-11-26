
import "./Content.css";

export default function Content({ data }) {
  console.log("Hih masak aku masuk sini");
  return (
    <div className="containerBig" >
      {data ? (
        <>
        <div className="image-container">
          <img src={data.imgUrl} alt={data.title} className="pict" />
        </div>
        <div className="desc-container">
          <div>
            <h3>{data.title}</h3>
            <p>{data.author}</p>
            <p>{data.description}</p>

          </div>

        </div>
        </>
            ) : (
                <p>Loading..Nih Detail.</p>
            )}
    </div>
  );
}


import "./CardSmall.css";

export default function CardSmall({ data, onClick }) {
  return (
    <div className="cardSearch" onClick={onClick}>
      <img src={data.volumeInfo.imageLinks.thumbnail} alt="" className="photo" />
      <div className="description">
        <div>
          <p id="title">{data.volumeInfo.title}</p>
          <p id="genre">{data.volumeInfo.publishedDate}</p>
          <p id="genre">{data.volumeInfo.averageRating}</p>
        </div>
      </div>
    </div>

  );
}

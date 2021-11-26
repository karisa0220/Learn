import "./CardAnggota.css";

export default function CardAnggota({ nama, nim, img, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      
      <div className="description">
        <div>
          <img src={img} alt="" className="photo" />
          <p id="nama">{nama}</p>
          <p id="nim">{nim}</p>
        </div>
      </div>
    </div>
  );
}
import "./Plaintext.css";

export default function Plaintext({ data, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="description">
        <div>
          <p id="topic">{data}</p>
        </div>
      </div>
    </div>
  );
}

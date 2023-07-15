import "./card.css";
import "./flip-transition.css";

function Card({onClick}) {
  return (
    <div className="card shadow-2xl" onClick={onClick}>
      <div className="card-back font-mono text-2xl text-white rounded-lg px-5">Delhi</div>
      <div className="card-front font-mono text-2xl text-white rounded-lg px-5 w-60 h-96">What is the Capital of India?</div>
    </div>
  );
}

export default Card;

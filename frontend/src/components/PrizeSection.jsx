import "./PrizeSection.css";
import first from '../assets/first.png'
import second from '../assets/second.png'
import third from '../assets/third.png'
import fourth from '../assets/fourth.png'
import fifth from '../assets/fifth.png'

const prizes = [
  { img: first, rank: "1st", amount: "₹5000", highlight: true },
  { img: second, rank: "2nd", amount: "₹3000" },
  { img: third, rank: "3rd", amount: "₹2000" },
  { img: fourth, rank: "4th", amount: "₹1000" },
  { img: fifth, rank: "5th", amount: "₹1000" }
];

const PrizesSection = () => {
  return (
    <section className="prizes-section">
      <h2 className="prizes-heading">Prizes</h2>

      <div className="prizes-grid">
        {prizes.map((prize, index) => (
          <div key={index} className={`prize-card ${prize.highlight ? "highlight" : ""}`}>
            <img src={prize.img} width="120" height="120" alt="First Prize" />
            <div className="prize-rank">{prize.rank} Prize</div>
            <div className="prize-amount">{prize.amount}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrizesSection;
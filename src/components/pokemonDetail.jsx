import "./reset.css";
import "./reboot.css";
import "./card.css";

import height from "./regla.svg";
import weight from "./bascula.svg";

function PokemonDetail() {
  return (
    <div className="card">
      <div className="card__header">
        <div className="card__name">Bulbasaur</div>
        <div className="card__number">#001</div>
      </div>

      <div className="card__information">
        <div className="card__power">
          <div className="card__power1">Grass</div>
          <div className="card__power2">Poison</div>
        </div>
        <div className="card__information_title">About</div>
        <div className="card__boxHeightWeight">
          <div className="card__boxWeight">
            <img src={weight} alt="Weight" />
          </div>
          <div className="card__line"></div>
          <div>
            <img src={height} alt="Height" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;

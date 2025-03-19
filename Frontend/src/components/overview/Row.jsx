import { useNavigate } from "react-router-dom";

function Row({ data }) {
  const { id: productId, image, organic, price, productName, quantity } = data;
  const navigate = useNavigate();
  return (
    <figure className="card">
      <div className="card__emoji">{image}</div>

      <div className="card__title-box">
        <h2 className="card__title">{productName}</h2>
      </div>

      <div className="card__details">
        <div className="card__detail-box">
          <h6 className="card__detail card__detail--organic">
            {organic ? "Organic" : ""}
          </h6>
        </div>

        <div className="card__detail-box">
          <h6 className="card__detail">{quantity}</h6>
        </div>

        <div className="card__detail-box">
          <h6 className="card__detail card__detail--price">{price}</h6>
        </div>
      </div>

      <button
        onClick={() => {
          navigate(`/product/${productId}`);
        }}
        className="card__link"
      >
        <span>
          Detail <i className="emoji-right">👉</i>
        </span>
      </button>
    </figure>
  );
}

export default Row;

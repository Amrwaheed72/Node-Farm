import { useNavigate, useParams } from 'react-router-dom';
import { useOverview } from '../overview/useOverview';

function ProductContent() {
    const navigate = useNavigate();
    const { data, isPending } = useOverview();
    const { id } = useParams();
    if (isPending) return <h1>loading</h1>;
    return (
        <div className="container">
            {data.map(
                (item) =>
                    item.id === Number(id) && (
                        <figure key={item.id} className="product">
                            <div className="product__organic">
                                <h5>{item.organic ? 'Organic' : ''}</h5>
                            </div>
                            <button
                                onClick={() => {
                                    navigate(-1);
                                }}
                                className="product__back"
                            >
                                <span className="emoji-left">👈</span>
                                Back
                            </button>
                            <div className="product__hero">
                                <span className="product__emoji product__emoji--1">
                                    {item.image}
                                </span>
                                <span className="product__emoji product__emoji--2">
                                    {item.image}
                                </span>
                                <span className="product__emoji product__emoji--3">
                                    {item.image}
                                </span>
                                <span className="product__emoji product__emoji--4">
                                    {item.image}
                                </span>
                                <span className="product__emoji product__emoji--5">
                                    {item.image}
                                </span>
                                <span className="product__emoji product__emoji--6">
                                    {item.image}
                                </span>
                                <span className="product__emoji product__emoji--7">
                                    {item.image}
                                </span>
                                <span className="product__emoji product__emoji--8">
                                    {item.image}
                                </span>
                                <span className="product__emoji product__emoji--9">
                                    {item.image}
                                </span>
                            </div>
                            <h2 className="product__name">
                                {item.productName}
                            </h2>
                            <div className="product__details">
                                <p>
                                    <span className="emoji-left">🌍</span>{' '}
                                    {item.from}
                                </p>
                                <p>
                                    <span className="emoji-left">❤️</span>{' '}
                                    {item.nutrients}
                                </p>
                                <p>
                                    <span className="emoji-left">📦</span>{' '}
                                    {item.quantity}
                                </p>
                                <p>
                                    <span className="emoji-left">🏷</span>{' '}
                                    {item.price}
                                </p>
                            </div>

                            <button
                                onClick={() => {
                                    navigate(-1);
                                }}
                                className="product__link"
                            >
                                <span className="emoji-left">🛒</span>
                                <span>Add to shopping card ({item.price})</span>
                            </button>

                            <p className="product__description">
                                {item.description}
                            </p>
                        </figure>
                    )
            )}
        </div>
    );
}

export default ProductContent;

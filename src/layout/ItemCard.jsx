import "./itemCard.css";

const ItemCard = ({ product }) => {
  return (
    <div className="mt-2">
      <img className="w-full" src={product.thumbnails[2]} alt={product.name} />
      <div className="mx-2 mt-2">
        <h4>{`${product.title} (${product.price}, ${product.size})`}</h4>
        <div className="flex">
          <div className="links">
            <a
              target="_blank"
              rel="noreferrer"
              className="text-gray-500"
              href={product.url.info}
            >
              Info
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="text-gray-500"
              href={product.url.buy}
            >
              Comprar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

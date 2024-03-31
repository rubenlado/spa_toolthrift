import "./itemCard.css";

const formatPrice = (price) => {
  return price.toFixed(2);
};

const ItemCard = ({ product }) => {
  console.log("product", product);
  return (
    <div className="mt-2">
      <img className="w-full" src={product.thumbnails[2]} alt={product.name} />
      <div className="mx-2 mt-2">
        <h4>{`${product.marque} (${product.totalPrice}, ${product.size})`}</h4>
        <div className="flex">
          <div className="links">
            <a
              target="_blank"
              rel="noreferrer"
              className="text-gray-500"
              href={product.url.info}
            >
              More info
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="text-gray-500"
              href={product.url.buy}
            >
              Buy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

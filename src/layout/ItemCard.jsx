const ItemCard = ({ product }) => {
  console.log(product, "product");
  return (
    <div>
      <img className="w-full" src={product.thumbnails[2]} alt={product.name} />
      <div className="mx-2 mt-2">
        <h4>{product.title}</h4>
        <div className="flex">
          <h4 className="pt-2">{product.prix}</h4>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

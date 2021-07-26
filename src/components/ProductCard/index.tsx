import './styles.css'

type ProductProps = {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

type Props = {
  data: ProductProps;
}


export function ProductCard({data}: Props)  {
  return (
    <div className="product-card">

      <h1>{data.name}</h1>
      <img src={data.imageUrl} alt={data.name} />
      <div className="product-card-content">
        <p>{data.price}</p>
        <p>{data.description}</p>
      </div>
    </div>
  )
}
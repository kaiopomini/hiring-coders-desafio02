

import {ProductCard} from '../../components/ProductCard'

import './styles.css';


export function Home() {

  const data = [{
    id: 1,
    name: 'Iphone 12 XYZ',
    price: 9990.02,
    description: 'Aqui tem uma descrição do produto iphone 10',
    imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-purple-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1617130317000'
  },
  {
    id: 2,
    name: 'Iphone 12 XYZ',
    price: 9990.02,
    description: 'Aqui tem uma descrição do produto iphone 10',
    imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-purple-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1617130317000'
  },
  {
    id: 3,
    name: 'Iphone 12 XYZ',
    price: 9990.02,
    description: 'Aqui tem uma descrição do produto iphone 10',
    imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-purple-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1617130317000'
  },
  {
    id: 4,
    name: 'Iphone 12 XYZ',
    price: 9990.02,
    description: 'Aqui tem uma descrição do produto iphone 10',
    imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-purple-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1617130317000'
  },
  ]
  
  return (
    <section className="container">

      <div className="cards-container">
        {data.map( (item) => {
          return (
            <ProductCard key={item.id} data={item}/>

          )
        })}
      </div>
    </section>
  )
}


import { useEffect, useState } from 'react';
import { PageNavigationButton } from '../../components/PageNavigationButton';
import {ProductCard, ProductProps} from '../../components/ProductCard'

import './styles.css';


export function Home() {

  const data = [{
    id: 1,
    name: 'Iphone 1 ABC',
    price: 9990.02,
    description: 'Aqui tem uma descrição do produto iphone 10',
    imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-purple-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1617130317000'
  },
  {
    id: 2,
    name: 'Iphone 2 DEF',
    price: 9990.02,
    description: 'Aqui tem uma descrição do produto iphone 10',
    imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-purple-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1617130317000'
  },
  {
    id: 3,
    name: 'Iphone 3 GHI',
    price: 9990.02,
    description: 'Aqui tem uma descrição do produto iphone 10',
    imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-purple-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1617130317000'
  },
  {
    id: 4,
    name: 'Iphone 4 JKL',
    price: 9990.02,
    description: 'Aqui tem uma descrição do produto iphone 10',
    imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-purple-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1617130317000'
  },
  {
    id: 5,
    name: 'Iphone 5 MNO',
    price: 9990.02,
    description: 'Aqui tem uma descrição do produto iphone 10',
    imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-purple-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1617130317000'
  },
  {
    id: 6,
    name: 'Iphone 6 PQR',
    price: 9990.02,
    description: 'Aqui tem uma descrição do produto iphone 10',
    imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-purple-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1617130317000'
  },
  {
    id: 7,
    name: 'Iphone 7 STU',
    price: 9990.02,
    description: 'Aqui tem uma descrição do produto iphone 10',
    imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-purple-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1617130317000'
  },
  {
    id: 8,
    name: 'Iphone 8 WVXYZ',
    price: 9990.02,
    description: 'Aqui tem uma descrição do produto iphone 10',
    imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-purple-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1617130317000'
  },
  {
    id: 9,
    name: 'Iphone 9 AAA',
    price: 9990.02,
    description: 'Aqui tem uma descrição do produto iphone 10',
    imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-purple-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1617130317000'
  },
  {
    id: 10,
    name: 'Iphone 10 BBB',
    price: 9990.02,
    description: 'Aqui tem uma descrição do produto iphone 10',
    imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-purple-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1617130317000'
  },
  {
    id: 11,
    name: 'Iphone 11 CCC',
    price: 9990.02,
    description: 'Aqui tem uma descrição do produto iphone 10',
    imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-purple-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1617130317000'
  },
  {
    id: 12,
    name: 'Iphone 12 DDD',
    price: 9990.02,
    description: 'Aqui tem uma descrição do produto iphone 10',
    imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-purple-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1617130317000'
  },
  ]

  
  const productsPerPage = 6;
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(0)
  const [hasNoMoreProducts, setHasNoMoreProducts] = useState(false)
  const [productsListPaginated, setProductsListPaginated] = useState(data.slice(page, productsPerPage))
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>([])
  
  useEffect(() => {
    setHasNoMoreProducts(page + productsPerPage >= data.length)
  }, [page, data.length]);

  useEffect(() => {
    const filtered = !!search ? 
      data.filter( item=> {
        return item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      })
      :
      data
    setFilteredProducts(filtered)
  }, [search]);

  function loadMoreProducts() {
    const nextPage = page + productsPerPage;
    const nextProducts = data.slice(nextPage, nextPage + productsPerPage)
    setPage(nextPage)
    const newProductList = [...productsListPaginated];
    newProductList.push(...nextProducts)
    
    setProductsListPaginated(newProductList)
  }
  
  return (
    <section className="container">
      <input type="search" onChange={(e)=>setSearch(e.target.value)}></input>

      <div className="cards-container">

        {!!search ? 
          filteredProducts.map( (item) => {
            return (
              <ProductCard key={item.id} data={item}/>
  
            )
          })
        :
        productsListPaginated.map( (item) => {
          return (
            <ProductCard key={item.id} data={item}/>
          )
        })
       }
      
      </div>
      <div className="button-container">
        {!search && (
          <PageNavigationButton onClick={loadMoreProducts} disabled={hasNoMoreProducts} text="Mais Produtos"/>
        )}
        
      </div>
    </section>
  )
}
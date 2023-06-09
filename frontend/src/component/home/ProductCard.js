import React from 'react'
import {Link } from "react-router-dom"
import {Rating } from "@mui/material"

const ProductCard = ({product}) => {

const options={
    
}

  return (
    <Link className='productCard' to={product._id}  >

<img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <Rating {...options} />{" "}
        <span className="productCardSpan">
          {" "}
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <span>{`₹${product.price}`}</span>

    </Link>
  )
}

export default ProductCard
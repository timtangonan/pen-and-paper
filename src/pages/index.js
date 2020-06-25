import React from "react"
import { Link } from "gatsby"
import { Image } from "cloudinary-react"

const IndexPage = () => {
  return (
    <div className="h-full">
      <div className="flex flex-col items-start justify-center h-full w-1/2 mx-auto">
        <h1 className="mt-4 font-bold text-2xl"><strong className="text-gray-800">Your one-stop shop for art supplies.</strong></h1>
        <p className="mt-4">Pen & Paper online store caters to your needs as a stationery junky. We completely understand the euphoria of smelling book pages and running your fingers over premium paper.</p>
        <button className="py-2 px-6 my-6 bg-blue-700 text-white rounded">
          <Link to="/products">Browse Shop</Link>
        </button>
        <Image
          cloudName="timtangonan"
          publicId="pen-and-paper-ecommerce/web-shopping.png"
          width="400"
          fetchFormat="auto"
          quality="auto"
          className="ml-auto">
        </Image>
      </div>
    </div>
  )
}

export default IndexPage
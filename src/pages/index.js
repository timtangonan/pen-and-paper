import React from "react"
// import { graphql } from "gatsby"
import { Image } from "cloudinary-react"

const IndexPage = () => {
  return (
    <div className="h-full">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="font-bold text-2xl">Welcome to <strong className="text-gray-800">Pen and Paper</strong>!</h1>
        <p className="p-5">Our online store is a place for stationery junkies to get their monthly, ehrmm, daily fix of writing supplies!</p>
        <Image
          cloudName="timtangonan"
          publicId="pen-and-paper-ecommerce/web-shopping.png"
          width="600"
          fetchFormat="auto"
          quality="auto">
        </Image>
      </div>
    </div>
  )
}

export default IndexPage
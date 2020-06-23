import React, { useState } from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
    const [isExpanded, toggleExpansion] = useState(false)
    return(
        <header>
            <Helmet>
                <title>{siteTitle}</title>
            </Helmet>
            <nav className="bg-gray-800 text-white p-4">
                <div className="flex flex-wrap container justify-between mx-auto p-2">
                    <Link to="/" className="flex items-center no-underline"><span className="text-2xl" role="img" aria-label="paperclip">📎</span><span className="ml-2 font-bold">{siteTitle}</span></Link>
                    <button className="block md:hidden border border-white flex items-center px-3 py-2" onClick={() => toggleExpansion(!isExpanded)}>
                        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <rect fill="none" height="22" width="22" y="-1" x="-1"/>
                            </g>
                            <g>
                                <title>Menu</title>
                                <line y2="4.5" x2="18.7426" y1="4.5" x1="1.54282" strokeWidth="3.5" stroke="white" fill="none"/>
                                <line y2="13" x2="18.7426" y1="10" x1="1.54282" strokeWidth="3.5" stroke="white" fill="none"/>
                                <line y2="17.5" x2="18.7426" y1="17.5" x1="1.54282" strokeWidth="3.5" stroke="white" fill="none"/>
                            </g>
                        </svg>
                    </button>
                    <div className={`${
                        isExpanded ? `block` : `hidden`
                    } md:block md:flex md:items-center w-full md:w-auto ml-auto`}>
                        <div className="text-lg font-bold mt-3 md:m-0">
                            <Link to="/" activeClassName="text-gray-500 underline" className="block p-1 md:px-4 md:inline-block">Home</Link>
                            <Link to="/products" activeClassName="text-gray-500 underline" className="block p-1 md:px-4 md:inline-block">Products</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
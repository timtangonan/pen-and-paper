import React from "react"

const Footer = ({ metaData }) => {
    return(
        <footer className="flex p-3 bg-gray-800 text-white text-sm border-t-4 border-blue-400 justify-center">
            <div>{metaData.title} © {new Date().getFullYear()}. Created by <a className="text-blue-400" href={metaData.companyWebsite}>{metaData.author}</a></div>
        </footer>
    )
}

export default Footer 
import React from "react"

const Footer = ({ metaData }) => {
    return(
        <footer className="flex p-3 bg-gray-800 text-white text-sm border-t-4 border-blue-400 justify-center">
            <div>{metaData.title} © {new Date().getFullYear()}. Created by {metaData.author} (<a href={metaData.companyWebsite}>{metaData.company})</a></div>
        </footer>
    )
}

export default Footer 
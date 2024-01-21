import React from "react"
import ImageContent from "../components/imageContent";
const Vision = () => {
    return (
        <div className="m-auto flex flex-col items-center justify-between grid sm:grid-cols-2 gap-20">
            <div></div>
            <ImageContent src="/main-cat.svg" borderRadius="rounded-full"/>
        </div>
    )

}

export default Vision;
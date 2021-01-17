import "./ImageGrid.scss"
import ImageTile from "./ImageTile"

function ImageGrid({ images }) {
    return (
        <div className="section">
            <div className="container flex-container">
                {
                    images.map(image => {
                        return <ImageTile src={image.representations.small} key={image.representations.small} ></ImageTile>
                    })
                }
            </div>
        </div>
    );
}

export default ImageGrid;
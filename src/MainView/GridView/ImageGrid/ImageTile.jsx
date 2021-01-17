import "./ImageTile.scss"

function ImageTile({ src }) {
    return (
        <div className="box image-tile">
            <div className="level is-centered is-mobile">
                <div className="level-item">1</div>
                <div className="level-item">1</div>
                <div className="level-item">23</div>
                <div className="level-item">-13</div>
            </div>
            <img className="image" src={src} alt="twilight sparkle"/>
        </div>
    );
}

export default ImageTile;
import { useEffect, useState } from 'react';
import ImageGrid from './ImageGrid/ImageGrid'
import NavBar from './NavBar';
import dinky from 'dinky.js';

function GridView() {

    const [images, setImages] = useState([])
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        dinky().search(["safe"]).page(1).limit(15).images().then(response => {
            setTotalPages(Math.ceil(response.total / 15))
            setImages(response.images)
        })
    }, [])

    return (
        <div>
            <NavBar totalPages={totalPages} currentPage={1} ></NavBar>
            <ImageGrid images={images}></ImageGrid>
        </div>
    );
}

export default GridView;
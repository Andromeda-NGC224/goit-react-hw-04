import ImageCard from "../ImageCard/ImageCard.jsx";

export default function ImageGallery({ images, onOpenModal}) { 
    return (
        <ul>
            {images.map((image, index) => (
                <li key={index} onClick={()=> onOpenModal(image)}>
                   <ImageCard image={image}></ImageCard> 
</li>
    ))}
</ul>
    )
}
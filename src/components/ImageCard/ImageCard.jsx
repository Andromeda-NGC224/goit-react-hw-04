
import css from './ImageCard.module.css'

export default function ImageCard({ image }) {


    return (
        <div   className={css.cardCont}>
            <img className={css.cardImg} src={image.urls.small} alt={image.slug} />
		</div>
    )
}
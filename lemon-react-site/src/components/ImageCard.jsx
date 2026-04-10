export default function ImageCard({ image, title, text }) {
  return (
    <article className="image-card">
      <img src={image} alt={title} />
      <div className="image-card__body">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  )
}

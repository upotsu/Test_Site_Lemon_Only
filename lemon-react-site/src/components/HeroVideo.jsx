export default function HeroVideo({ videoSrc, eyebrow, title, text, buttonText, onButtonClick }) {
  return (
    <section className="hero-video">
      <video className="hero-video__media" autoPlay muted loop playsInline>
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="hero-video__veil" />
      <div className="hero-video__content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="hero-video__text">{text}</p>
        <button type="button" className="cta-button" onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>
    </section>
  )
}

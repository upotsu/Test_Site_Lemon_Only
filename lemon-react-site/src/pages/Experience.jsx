import lemonPlate from '../assets/images/lemon-plate.jpg'
import lemonDark from '../assets/images/lemon-dark.jpg'
import lemonPour from '../assets/videos/lemon-pour.mp4'

const reactions = [
  { word: 'キュッ', text: '頬の内側が少しだけ縮む感覚。' },
  { word: 'ツン', text: '鼻に抜けるような鋭さ。' },
  { word: 'ゾワ', text: '舌の横が反応する冷たい刺激。' },
]

export default function Experience() {
  return (
    <main className="experience-page">
      <section className="experience-hero">
        <div className="experience-hero__left">
          <p className="eyebrow">SOUR ROOM</p>
          <h1>見ているだけで、<br />酸っぱい。</h1>
          <p>
            レモンを切った瞬間の断面、浮いた果肉、濡れた表面、炭酸の透明感。
            “飲みたい”より先に“すっぱい”が来るように演出しています。
          </p>
          <div className="reaction-list">
            {reactions.map((reaction) => (
              <div key={reaction.word} className="reaction-item">
                <strong>{reaction.word}</strong>
                <span>{reaction.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="experience-hero__right">
          <img src={lemonPlate} alt="皿の上に置かれたレモン" />
        </div>
      </section>

      <section className="section section--acid">
        <div className="acid-grid">
          <div className="acid-grid__video">
            <video autoPlay muted loop playsInline>
              <source src={lemonPour} type="video/mp4" />
            </video>
          </div>
          <div className="acid-grid__copy">
            <p className="eyebrow">ACID DETAIL</p>
            <h2>黄色は明るいのに、<br />味の印象は鋭い。</h2>
            <p>
              黒背景の断面写真と、滴る動画を組み合わせて、見た目のポップさよりも
              刺激の強さを前面に出したページです。
            </p>
            <ul>
              <li>レモン断面の円形を反復</li>
              <li>黄色・白・黒の高コントラスト</li>
              <li>余白を広く取り、1枚ごとの圧を強める</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--dark-gallery">
        <div className="gallery-highlight">
          <img src={lemonDark} alt="黒背景のレモン断面" />
          <div className="gallery-highlight__overlay">
            <p>Half cut, full impact.</p>
            <h2>断面だけで、<br />もう酸っぱい。</h2>
          </div>
        </div>
      </section>
    </main>
  )
}

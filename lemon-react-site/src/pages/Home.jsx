import { useNavigate } from 'react-router-dom'
import HeroVideo from '../components/HeroVideo'
import ImageCard from '../components/ImageCard'
import lemonSqueeze from '../assets/videos/lemon-squeeze.mp4'
import lemonSlice from '../assets/videos/lemon-slice.mp4'
import lemonWater from '../assets/images/lemon-water.jpg'
import lemonTree from '../assets/images/lemon-tree.jpg'
import lemonDrink from '../assets/images/lemon-drink.jpg'

export default function Home() {
  const navigate = useNavigate()

  return (
    <main>
      <HeroVideo
        videoSrc={lemonSqueeze}
        eyebrow="見ただけで、口の奥がきゅっとする。"
        title={<>新しいレモン<br />
	爆誕。</>}
        text="切る、絞る、滴る。新時代のレモン刺激を味わう。"
        buttonText="次ページへ"
        onButtonClick={() => navigate('/experience')}
      />

      <section className="section section--light">
        <div className="section-heading">
          <p className="eyebrow">VISUAL SOURNESS</p>
          <h2>“すっぱさ”の刺激がここに。</h2>
          <p>
            滴る果汁、冷えた炭酸。
          </p>
        </div>

        <div className="card-grid">
          <ImageCard
            image={lemonWater}
            title="凝縮した果実"
            text="透明感と果肉の結晶、喉ではなく舌に刺激が来る設計。"
          />
          <ImageCard
            image={lemonTree}
            title="北部イタリアで育ったレモン"
            text="酸味が強く引き締まった甘さをあなたへ。"
          />
          <ImageCard
            image={lemonDrink}
            title="炭酸に合うレモン"
            text="炭酸の爽快感に適した刺激的な酸味。"
          />
        </div>
      </section>

      <section className="split-section">
        <div className="split-section__media">
          <video autoPlay muted loop playsInline>
            <source src={lemonSlice} type="video/mp4" />
          </video>
        </div>
        <div className="split-section__content">
          <p className="eyebrow">CUT / DRIP / SHIVER</p>
          <h2>果実がぎっしり。</h2>
          <p>
            手軽にレモンを味わいたかったってこと。
          </p>
          <button type="button" className="text-link" onClick={() => navigate('/experience')}>
            次ページへ進む →
          </button>
        </div>
      </section>
    </main>
  )
}

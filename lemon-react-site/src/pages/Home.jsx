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
        title={<>レモンだけで<br />酸っぱくなるサイト。</>}
        text="切る、絞る、滴る。レモンの刺激だけを視覚で味わう、2ページ構成のReactコンセプトサイト。"
        buttonText="もっと酸っぱくなる"
        onButtonClick={() => navigate('/experience')}
      />

      <section className="section section--light">
        <div className="section-heading">
          <p className="eyebrow">VISUAL SOURNESS</p>
          <h2>爽やかじゃなく、<br />あえて“すっぱさ”で刺す。</h2>
          <p>
            黄色の強さ、断面の湿度、滴る果汁、冷えた炭酸。レモンの情報だけで、
            口の中に反応が起きるような構成にしています。
          </p>
        </div>

        <div className="card-grid">
          <ImageCard
            image={lemonWater}
            title="冷たさで刺す"
            text="レモン水の透明感と果肉の白さで、喉ではなく舌に刺激が来る設計。"
          />
          <ImageCard
            image={lemonTree}
            title="空と黄色の対比"
            text="空の青に対してレモンの黄色を浮かせ、視覚的な酸味を強めます。"
          />
          <ImageCard
            image={lemonDrink}
            title="炭酸の湿度"
            text="葉の深い緑と泡の細かさを混ぜて、爽快ではなく刺激的な印象へ。"
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
          <h2>ページを開くたびに、<br />少しだけ顔がすぼむ。</h2>
          <p>
            映像を背景として大胆に使いながら、文字は最小限に。あえて情報量を絞ることで、
            レモンそのものの存在感を主役にしています。
          </p>
          <button type="button" className="text-link" onClick={() => navigate('/experience')}>
            SOUR ROOMへ進む →
          </button>
        </div>
      </section>
    </main>
  )
}

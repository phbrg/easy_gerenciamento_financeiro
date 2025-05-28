import { NavLink } from 'react-router-dom'

import s from './Home.module.css'

export default function Home() {
  return (
    <main className={s.Home}>
      <div className={s.landing}>
        <div className={s.texts}>
          <h1>Gerencie sua Renda: <span>Simples</span>, <span>Seguro</span> e <span>Gratuito</span>!</h1>
          <h2>Conquiste uma vida financeira mais <span>estável</span>. Com a <span>Easy</span>, você organiza seus ganhos e gastos de forma intuitiva e protegida, totalmente <span>grátis</span>.</h2>
        </div>
        <div className={s.buttons}>
          <NavLink to='/dashboard' className={s.button}>Começar agora</NavLink>
          <p>Sua vida financeira mais tranquila com a <span>Easy</span>.</p>
        </div>
      </div>
      <div className={s.wcu}>

      </div>
    </main>
  )
}

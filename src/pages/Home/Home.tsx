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
        <div className={s.oque}>
          <h1>O que a Easy faz?</h1>
          <p>
            A <span>Easy</span> é uma plataforma digital de gestão financeira pensada para quem quer controlar melhor seus ganhos, gastos e objetivos — <span>sem complicação</span>. Com ela, você pode registrar seus salários, despesas, datas de pagamento, fontes de renda e até suas metas financeiras.<br/><br/>A <span>Easy</span> organiza suas informações de forma clara e segura, ajudando você a visualizar onde está gastando, quando precisa pagar algo e quanto sobra no mês.<br/><br/>Além disso, a plataforma oferece dicas básicas de como economizar, investir e se planejar para o futuro — <span>tudo isso sem exigir nenhum dado pessoal</span>, sem servidor e <span>100% gratuito</span>. Seus dados ficam salvos apenas no seu dispositivo, de forma segura e encriptada.
          </p>
        </div>
        <div className={s.line}></div>
        <div className={s.porque}>
          <h1>Por que usar a <span>Easy</span>?</h1>
          <p>
            Porque todo mundo merece começar sua vida financeira com o pé direito. A <span>Easy</span> foi criada por alguém que, como muitos, teve dificuldade em entender para onde ia o dinheiro no fim do mês.<br/><br/>Ao perceber que uma planilha já não era suficiente, surgiu a ideia de desenvolver uma ferramenta mais <span>intuitiva</span>, <span>prática</span> e <span>prática</span>. Com a <span>Easy</span>, você tem controle total da sua renda e despesas, define metas e recebe orientações simples para melhorar seus hábitos financeiros.<br/><br/><span>E o melhor</span>: tudo acontece no seu navegador, sem servidores, sem cadastro e sem burocracia. Seus dados são só seus.<br/><br/>Com a <span>Easy</span>, você aprende a cuidar melhor do seu dinheiro — de forma <span>simples</span>, <span>segura</span> e <span>gratuita</span>.
          </p>
        </div>
      </div>
    </main>
  )
}

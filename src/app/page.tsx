import "./page.css";

export default function Home() {
  return (
    <div className="landpage">
      <main className="main">
        <div className="main__content">
          <article className="main__content-box">
            <h1 className="title">¿Te atreves?</h1>
            <h2 className="subtitle">Tu mayor aventura está al pasar la siguiente página</h2>
            <p className="text">Regístrate en nuestra página web y se el primero en conocer los mejores best-sellers internacionales.</p>
            <button className="button">Hazte socio</button>
          </article>
        </div>
      </main>
      <section className="section">
        <h3 className="title title--section">Ventajas por ser socio</h3>
      </section>
      <section className="section section--contrast">
        <h3 className="title title--section">Lo que dicen de nosotros</h3>
      </section>
      <section className="section section--banner">
        <h3 className="title title--banner">Empezar una nueva aventura nunca había sido tan fácil</h3>
        <button className="button button--banner">Hazte socio</button>
      </section>
      <section className="section">
        <h3 className="title title--section">Novedades literarias</h3>
        <p className="text">Subscríbete a nuestra Newsletter y entérate de las últimas novedades literarias.</p>
      </section>
      <footer className="footer">
        Footer
      </footer>
    </div>
  );
}

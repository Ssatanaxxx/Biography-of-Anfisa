

export const Home = () => {
    return (
        <section className="screen screen--home" id="home">
            <div className="statements">
                <div className="statement theme--yellow">
                    <h2 className="statement__title">Привет, я Анфиса</h2>
                    <a className="button button--learn-more" href="#about">Узнать больше</a>
                </div>
                <div className="interactive-cat">
                    <p className="statement__desc">💖 Кликни на меня 💖</p>
                    {/* <img src="./image/cat1.jpg" alt="Анфиса" className="cat-avatar" id="catAvatar"> */}
                </div>
            </div>
        </section>

    )
}
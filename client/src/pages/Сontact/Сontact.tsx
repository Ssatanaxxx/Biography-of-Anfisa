


export const Contact = () => {
    return (
        <div className="contact-container">
            <div className="section-up">
                <h2 className="section-title">Свяжитесь со мной</h2>
                <p className="section-subtitle">Если хотите предложить угощение или погладить</p>
                <form className="contact-form">
                    <input type="text" placeholder="Ваше имя" required></input>
                    <input type="email" placeholder="Ваш email" required></input>
                    <textarea placeholder="Ваше сообщение..."></textarea>
                    <button className="button" type="submit">Отправить мур-сообщение</button>
                </form>
            </div>

            <div className="contact-methods">
                {/* <!-- Метод 1 --> */}
                <div className="contact-card">
                    <div className="contact-icon">📧</div>
                    <h3>Email</h3>
                    <p>anfisa@catmail.com</p>
                    <small>Отвечаю в течение 1-3 дней, если не сплю</small>
                </div>

                {/* <!-- Метод 2 --> */}
                <div className="contact-card">
                    <div className="contact-icon">📱</div>
                    <h3>Соцсети</h3>
                    <div className="social-links">
                        <a className="social-link" href="#">Instagram</a>
                        <a className="social-link" href="#">CatTok</a>
                        <a className="social-link" href="#">Purr-terest</a>
                    </div>
                </div>

                {/* <!-- Метод 3 --> */}
                <div className="contact-card">
                    <div className="contact-icon">🏠</div>
                    <h3>Физический адрес</h3>
                    <p>Диван в гостиной, третья подушка слева</p>
                    <small>Часы приема: когда не сплю</small>
                </div>
            </div>


        </div>
    )
}
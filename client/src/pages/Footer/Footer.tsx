

export const Footer = () => {
    return (
        <>
            <div className="footer__bar"></div>
            <div className="footer__content">
                <div className="copyright">© 2023 Анфиса. Продам гараж.</div>
                <ul className="social">
                    <li className="social__item">
                        <a className="social__link social__link--instagram" href="#">Instagram</a>
                    </li>
                    <li className="social__item">
                        <a className="social__link social__link--twitter" href="#">Twitter</a>
                    </li>
                    <li className="social__item">
                        <a className="social__link social__link--youtube" href="#">YouTube</a>
                    </li>
                </ul>
            </div>
        </>
    )
}
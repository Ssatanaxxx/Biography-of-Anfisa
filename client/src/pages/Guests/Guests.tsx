


export const Guests = () => {
    return (
        <div className="guests-container">
            <h2 className="section-title">Когда приходят гости</h2>
            <p className="section-subtitle">Мой официальный протокол поведения для посетителей</p>

            <div className="protocol-steps">
                {/* <!-- Шаг 1 --> */}
                <div className="protocol-card protocol-card--inspection">
                    <div className="protocol-number">01</div>
                    <div className="protocol-content">
                        <h3>Тщательный осмотр</h3>
                        <p>Обнюхиваю гостей на предмет чужих кошачьих запахов и принесенных лакомств. Особое
                            внимание уделяю обуви и сумкам.</p>
                        <div className="protocol-duration">Длительность: 3-7 минут</div>
                    </div>
                    <div className="protocol-icon">🔍</div>
                </div>

                {/* <!-- Шаг 2 --> */}
                <div className="protocol-card protocol-card--ignore">
                    <div className="protocol-number">02</div>
                    <div className="protocol-content">
                        <h3>Тактика игнорирования</h3>
                        <p>Делаю вид, что гости мне совершенно неинтересны. Ухожу в другую комнату,
                            демонстративно повернувшись спиной.</p>
                        <div className="protocol-duration">Длительность: 10-15 минут</div>
                    </div>
                    <div className="protocol-icon">🙈</div>
                </div>

                {/* <!-- Шаг 3 --> */}
                <div className="protocol-card protocol-card--approach">
                    <div className="protocol-number">03</div>
                    <div className="protocol-content">
                        <h3>Осторожное сближение</h3>
                        <p>Подхожу к самому тихому гостю, делая вид, что случайно оказалась рядом. Позволяю
                            погладить себя ровно один раз.</p>
                        <div className="protocol-duration">Длительность: 2-3 минуты</div>
                    </div>
                    <div className="protocol-icon">🐾</div>
                </div>

                {/* <!-- Шаг 4 --> */}
                <div className="protocol-card protocol-card--test">
                    <div className="protocol-number">04</div>
                    <div className="protocol-content">
                        <h3>Проверка на прочность</h3>
                        <p>Внезапно запрыгиваю гостю на колени без предупреждения. Если не сбрасывают -
                            автоматически получают статус "проверенный".</p>
                        <div className="protocol-duration">Длительность: до конца визита</div>
                    </div>
                    <div className="protocol-icon">⚡</div>
                </div>

                {/* <!-- Шаг 5 --> */}
                <div className="protocol-card protocol-card--begging">
                    <div className="protocol-number">05</div>
                    <div className="protocol-content">
                        <h3>Выпрашивание еды</h3>
                        <p>Использую гостей как дополнительный источник угощений. Делаю максимально жалобные
                            глаза, даже если только что поела.</p>
                        <div className="protocol-duration">Длительность: пока не дадут еду</div>
                    </div>
                    <div className="protocol-icon">🥺</div>
                </div>
            </div>

            <div className="guest-rules">
                <h3>Строгие правила для гостей:</h3>
                <ul className="rules-list">
                    <li>Не пытаться брать меня на руки без разрешения</li>
                    <li>Не смотреть мне прямо в глаза - это угроза</li>
                    <li>Не гладить против шерсти - это карается укусом</li>
                    <li>Все принесенные угощения подлежат обязательной проверке</li>
                    <li>Фотосессии только с моего согласия (обычно соглашаюсь за угощение)</li>
                </ul>

                <div className="emergency-box">
                    <h4>Чрезвычайные ситуации:</h4>
                    <p>Если я внезапно убежала и спряталась - значит, кто-то нарушил протокол. Рекомендуется
                        оставить на видном месте пакетик с влажным кормом для примирения.</p>
                </div>
            </div>
        </div>
    )
}
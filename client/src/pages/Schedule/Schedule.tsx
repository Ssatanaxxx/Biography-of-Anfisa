


export const Schedule = () => {
    return (
        <div className="schedule-container">
            <h2 className="section-title">Мой распорядок дня</h2>

            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-time">6:00</div>
                    <div className="timeline-content">
                        <h3>Будильник для хозяев</h3>
                        <p>Тщательно вылизываю лицо хозяина, чтобы разбудить его на работу</p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-time">6:30</div>
                    <div className="timeline-content">
                        <h3>Завтрак</h3>
                        <p>Требую еду, даже если в миске еще есть корм</p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-time">7:00-15:00</div>
                    <div className="timeline-content">
                        <h3>Дневной сон</h3>
                        <p>Восстанавливаю силы после тяжелого утра</p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-time">15:30</div>
                    <div className="timeline-content">
                        <h3>Обед</h3>
                        <p>Снова ем, потому что проснулась</p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-time">16:00-20:00</div>
                    <div className="timeline-content">
                        <h3>Активность</h3>
                        <p>Бегаю по квартире, как будто за мной гонятся</p>
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-time">21:00</div>
                    <div className="timeline-content">
                        <h3>Ночная охота</h3>
                        <p>Ловлю невидимых существ под диваном</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
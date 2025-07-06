


export const Gallery = () => {
    return (
        <div className="gallery-container">
            <h2 className="section-title">Фотосессии</h2>
            <p className="section-subtitle">Мои лучшие моменты в объективе</p>

            <div className="gallery-grid">
                <div className="gallery-item" /*style="background-image: url('./image/cat6.jpg');"*/>
                    <div className="gallery-caption">"Меня любят"</div>
                </div>
                <div className="gallery-item" /*style="background-image: url('./image/cat5.jpg');"*/>
                    <div className="gallery-caption">"Шо тут у нас?"</div>
                </div>
                <div className="gallery-item" /*style="background-image: url('./image/cat7.jpg');"*/>
                    <div className="gallery-caption">"Послеобеденный сон"</div>
                </div>
                <div className="gallery-item" /*style="background-image: url('./image/cat2.jpg');"*/>
                    <div className="gallery-caption">"Охотничья поза"</div>
                </div>
                <div className="gallery-item" /*style="background-image: url('./image/cat9.jpg');"*/>
                    <div className="gallery-caption">"Чуть-чуть грации не помешает"</div>
                </div>
                <div className="gallery-item" /*style="background-image: url('./image/cat8.jpg');"*/>
                    <div className="gallery-caption">"Выгуливаю человека"</div>
                </div>
            </div>

            <div className="gallery-controls">
                <button className="gallery-button gallery-prev">←</button>
                <button className="gallery-button gallery-next">→</button>
            </div>
        </div>
    )
}
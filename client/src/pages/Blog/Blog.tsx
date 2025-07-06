

export const Blog = () => {
    return (
        <div className="blog-container">
            <h2 className="section-title">
                <span className="paw-decor left-paw">🐾</span>
                Мой дневник
                <span className="paw-decor right-paw">🐾</span>
            </h2>

            <div className="blog-timeline">
                {/* <!-- Запись 1 --> */}
                <div className="blog-post">
                    <div className="post-header">
                        <div className="post-date">12.03.2023</div>
                        <div className="post-category science">Наука</div>
                    </div>
                    <h3 className="post-title">Разбила вазу. Снова.</h3>
                    <p className="post-content">Эксперимент по проверке гравитации прошел успешно. Хозяин почему-то
                        не оценил научный подход...</p>
                    <div className="post-footer">
                        <div className="post-tags">
                            <span className="tag">#наука</span>
                            <span className="tag">#гравитация</span>
                            <span className="tag">#вазы</span>
                        </div>
                        <div className="post-reactions">
                            <span className="reaction">😼 12</span>
                            <span className="reaction">💬 5</span>
                        </div>
                    </div>
                    <div className="post-decoration"></div>
                </div>

                {/* <!-- Запись 2 --> */}
                <div className="blog-post">
                    <div className="post-header">
                        <div className="post-date">28.02.2023</div>
                        <div className="post-category food">Гастрономия</div>
                    </div>
                    <h3 className="post-title">Открытие: корм вкуснее из человеческих рук</h3>
                    <p className="post-content">Провела сравнительный анализ. Вердикт: еда из рук хозяина вкуснее на
                        73%, даже если это тот же корм.</p>
                    <div className="post-footer">
                        <div className="post-tags">
                            <span className="tag">#гастрономия</span>
                            <span className="tag">#исследования</span>
                        </div>
                        <div className="post-reactions">
                            <span className="reaction">😼 24</span>
                            <span className="reaction">💬 8</span>
                        </div>
                    </div>
                    <div className="post-decoration"></div>
                </div>

                {/* <!-- Запись 3 --> */}
                <div className="blog-post">
                    <div className="post-header">
                        <div className="post-date">15.02.2023</div>
                        <div className="post-category records">Рекорды</div>
                    </div>
                    <h3 className="post-title">Новый рекорд сна</h3>
                    <p className="post-content">18 часов 37 минут! Побила свой предыдущий рекорд. Проснулась только
                        потому, что услышала звук открывающегося холодильника.</p>
                    <div className="post-footer">
                        <div className="post-tags">
                            <span className="tag">#сон</span>
                            <span className="tag">#рекорды</span>
                        </div>
                        <div className="post-reactions">
                            <span className="reaction">😼 42</span>
                            <span className="reaction">💬 15</span>
                        </div>
                    </div>
                    <div className="post-decoration"></div>
                </div>
            </div>
        </div>
    )
}
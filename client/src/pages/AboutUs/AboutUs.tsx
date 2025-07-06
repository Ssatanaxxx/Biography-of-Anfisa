import { AboutUsItem } from "../../api/AboutUs";

interface AboutUsProps {
    items: AboutUsItem[];
}

export const AboutUs = ({ items }: AboutUsProps) => {
    return (
        <div className="anatomy">
            <div className="anatomy__sections">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="anatomy-section"
                        data-view={getViewType(item.id)}
                    >
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>

            <div className="anatomy__views">
                {items.map((item) => (
                    <div
                        key={`view-${item.id}`}
                        className={`view view--${getViewType(item.id)} ${item.id === 0 ? 'active' : ''}`}
                    >
                        <div className="view__data"></div>
                        <div className="view__display">
                            <button className="button button--close">Закрыть</button>
                            <div className="tube-animation"></div>
                            <h3 className="view__title">{item.title}</h3>
                            <p>{item.description}</p>
                            <div className="view__nav">
                                <button className="button button--nav button--prev">Назад</button>
                                <button className="button button--nav button--next">Вперед</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Вспомогательная функция для преобразования id в view-тип
const getViewType = (id: number): string => {
    const types = ['love', 'sleep', 'hunt', 'food'];
    return types[id] || '';
};
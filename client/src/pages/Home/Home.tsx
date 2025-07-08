import { useRef } from 'react';
import sound1 from "../../assets/sounds/meow1.mp3";
import sound2 from "../../assets/sounds/meow2.mp3";
import sound3 from "../../assets/sounds/meow3.mp3";
import sound4 from "../../assets/sounds/meow4.mp3";
import sound5 from "../../assets/sounds/meow5.mp3";
import sound6 from "../../assets/sounds/meow6.mp3";
import ClickCat from "../../assets/image/cat1.jpg";

export const Home = () => {
    const audioRef = useRef(null);
    const meowSounds = [sound1, sound2, sound3, sound4, sound5, sound6];

    const handleCatClick = () => {
        if (audioRef.current) {
            // Выбираем случайный звук при каждом клике
            const randomSound = meowSounds[Math.floor(Math.random() * meowSounds.length)];
            audioRef.current.src = randomSound;
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    };

    return (
        <section className="screen screen--home" id="home">
            <audio ref={audioRef} src={sound1} preload="auto" />

            <div className="statements">
                <div className="statement theme--yellow">
                    <h1 className="statement__title">Привет, я Анфиса</h1>
                    <p className="statement__subtitle">Фронтенд-разработчик и кошачий энтузиаст</p>
                    <a className="button button--learn-more" href="#about">Узнать больше</a>
                </div>

                <div className="interactive-cat">
                    <img
                        src={ClickCat}
                        alt="Анфиса"
                        className="cat-avatar"
                        id="catAvatar"
                        onClick={handleCatClick}
                    />
                    <p className="statement__desc">💖 Кликни на меня 💖</p>
                </div>
            </div>
        </section>
    )
}
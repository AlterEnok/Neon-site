import { useEffect } from "react";
import "./RequestForm.css";
import { FaTimes } from "react-icons/fa";

export default function RequestForm({ onClose = () => { } }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        onClose();
    };

    // 🚫 блокируем скролл, когда форма открыта
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="request-wrap">
            <button className="request-close" onClick={onClose} aria-label="Закрыть">
                <FaTimes />
            </button>

            <div className="request-form">
                <p className="request-sub">Мы свяжемся с вами в течение 24 часов</p>
                <h2>ОСТАВЬТЕ ЗАЯВКУ</h2>

                <form onSubmit={handleSubmit}>
                    <input type="text" name="telegram" placeholder="Ваш telegram" required />
                    <input type="text" name="niche" placeholder="Ниша вашего бизнеса" required />
                    <button type="submit">ОСТАВИТЬ ЗАЯВКУ</button>
                </form>

                <p className="request-policy">
                    Нажимая «Оставить заявку», вы соглашаетесь с{" "}
                    <a href="#">политикой конфиденциальности</a>
                </p>
            </div>
        </div>
    );
}

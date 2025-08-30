// src/components/Hero/Hero.jsx
import "./Hero.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import person from "../../assets/person.png";
import {
    FaGoogle,
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaTelegramPlane,
    FaYoutube
} from "react-icons/fa";
import { SiTiktok, SiViber } from "react-icons/si";

import RequestForm from "../RequestForm/RequestForm"; // поправь путь если у тебя другая структура

export default function Hero() {
    const [isOpen, setIsOpen] = useState(false);

    const icons = [
        { Icon: FaInstagram, name: "Instagram" },
        { Icon: FaFacebookF, name: "Facebook" },
        { Icon: FaTelegramPlane, name: "Telegram" },
        { Icon: SiViber, name: "Viber" },
        { Icon: SiTiktok, name: "TikTok" },
        { Icon: FaTwitter, name: "Twitter / X" },
        { Icon: FaGoogle, name: "Google" },
        { Icon: FaYoutube, name: "YouTube" }
    ];

    // анимации для списка
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08 }
        }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
    };

    // Закрываем по Esc
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        if (isOpen) window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isOpen]);

    return (
        <>
            <section className="hero">
                {/* Левая часть */}
                <motion.div
                    className="hero-left"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h1 variants={itemVariants}>
                        <span className="neon">РЕКЛАМА БЕЗ ГРАНИЦ</span><br />
                        ДАЖЕ В САМЫХ СЛОЖНЫХ НИШАХ
                    </motion.h1>

                    <motion.p variants={itemVariants}>
                        Настраиваем рекламу, которая приводит клиентов и увеличивает прибыль
                    </motion.p>

                    <motion.button
                        className="hero-btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setIsOpen(true)}
                        variants={itemVariants}
                    >
                        Обсудить проект
                    </motion.button>

                    <motion.div className="platforms" variants={itemVariants}>
                        <p>Мы работаем с ведущими рекламными платформами</p>
                        <motion.div className="logos" variants={containerVariants}>
                            {icons.map((item, i) => {
                                const IconComp = item.Icon;
                                return (
                                    <motion.div
                                        key={i}
                                        className="platform-icon"
                                        title={item.name}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.12, rotate: 4 }}
                                    >
                                        <IconComp />
                                    </motion.div>
                                );
                            })}
                        </motion.div>


                    </motion.div>

                </motion.div>


                {/* Правая часть */}
                <motion.div
                    className="hero-right"
                    initial={{ x: 80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                >
                    <div className="circle"></div>
                    <motion.img
                        src={person}
                        alt="hero"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    />
                    <div className="circle front"></div>
                </motion.div>
            </section>


            {/* Модалка с RequestForm */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)} // закрываем при клике по оверлею
                    >
                        <motion.div
                            className="modal-content"
                            initial={{ scale: 0.9, y: -20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.95, y: 20, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={(e) => e.stopPropagation()} // чтобы клик внутри не закрыл
                        >
                            <RequestForm onClose={() => setIsOpen(false)} />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

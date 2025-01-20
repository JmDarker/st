// pages/contacto.js
import Layout from '../components/Layout/Layout';
import styles from '../components/Contact/Contact.module.css';
import { useState } from 'react';
import Head from 'next/head';

const ContactoPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionMessage, setSubmissionMessage] = useState(null);
    const [submissionMessageType, setSubmissionMessageType] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: null });
        setSubmissionMessage(null);
    };

    const sanitizeInput = (input) => {
        return input.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmissionMessage(null);

        let newErrors = {};

        if (!formData.name) {
            newErrors.name = 'Por favor, ingresa tu nombre.';
        }

        if (!formData.email) {
            newErrors.email = 'Por favor, ingresa tu correo electrónico.';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            newErrors.email = 'Por favor, ingresa un correo electrónico válido.';
        }

        if (!formData.message) {
            newErrors.message = 'Por favor, ingresa tu mensaje.';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                await new Promise(resolve => setTimeout(resolve, 1000));

                console.log('Formulario enviado:', {
                    name: sanitizeInput(formData.name),
                    email: sanitizeInput(formData.email),
                    message: sanitizeInput(formData.message),
                });

                setSubmissionMessage('¡Mensaje enviado correctamente! Gracias por contactarnos.');
                setSubmissionMessageType('success');
                setFormData({ name: '', email: '', message: '' });

            } catch (error) {
                console.error("Error al enviar el formulario:", error);
                setSubmissionMessage('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
                setSubmissionMessageType('error');
            }
        }

        setIsSubmitting(false);
    };

    return (
        <>
            <Head>
                <title>Contacto - Soluciones Tecnológicas JM</title>
                <meta name="description" content="Ponte en contacto con Soluciones Tecnológicas JM para obtener soporte técnico y soluciones informáticas." />
            </Head>
            <Layout>
                <div className={styles.container}>
                    <h2 className={styles.title}>Contáctanos</h2>
                    {submissionMessage && (
                        <div className={`${styles.submissionMessage} ${styles[submissionMessageType]} ${styles.show}`}>
                            {submissionMessage}
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>Nombre:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className={styles.input}
                                value={formData.name}
                                onChange={handleChange}
                                aria-invalid={!!errors.name}
                                aria-describedby={errors.name ? "name-error" : null}
                            />
                            {errors.name && <span id="name-error" className={styles.error}>{errors.name}</span>}
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Correo electrónico:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={styles.input}
                                value={formData.email}
                                onChange={handleChange}
                                aria-invalid={!!errors.email}
                                aria-describedby={errors.email ? "email-error" : null}
                            />
                            {errors.email && <span id="email-error" className={styles.error}>{errors.email}</span>}
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>Mensaje:</label>
                            <textarea
                                id="message"
                                name="message"
                                className={styles.textarea}
                                value={formData.message}
                                onChange={handleChange}
                                aria-invalid={!!errors.message}
                                aria-describedby={errors.message ? "message-error" : null}
                            ></textarea>
                            {errors.message && <span id="message-error" className={styles.error}>{errors.message}</span>}
                        </div>
                        <button type="submit" className={styles.button} disabled={isSubmitting}>
                            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                        </button>
                    </form>
                </div>
            </Layout>
        </>
    );
};

export default ContactoPage;
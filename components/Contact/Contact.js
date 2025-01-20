import styles from './Contact.module.css';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Limpiar errores al escribir en el campo
        setErrors({...errors, [e.target.name]: null});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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
            // Aquí iría la lógica para enviar el formulario (ej. con una API)
            console.log('Formulario enviado:', formData);
            alert("Formulario enviado. ¡Gracias por contactarnos!");
            setFormData({ name: '', email: '', message: '' }); // Limpia el formulario
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Contáctanos</h2>
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
                        aria-invalid={!!errors.name} // Accesibilidad
                        aria-describedby={errors.name ? "name-error" : null} // Accesibilidad
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
                        aria-invalid={!!errors.email} // Accesibilidad
                        aria-describedby={errors.email ? "email-error" : null} // Accesibilidad
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
                        aria-invalid={!!errors.message} // Accesibilidad
                        aria-describedby={errors.message ? "message-error" : null} // Accesibilidad
                    ></textarea>
                    {errors.message && <span id="message-error" className={styles.error}>{errors.message}</span>}
                </div>
                <button type="submit" className={styles.button} disabled={Object.keys(errors).length > 0}>Enviar mensaje</button>
            </form>
        </div>
    );
};

export default Contact;
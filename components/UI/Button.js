import styles from './Button.module.css';
import React from 'react';

const Button = React.forwardRef(({ children, variant = 'primary', size, disabled, onClick, outline, ...props }, ref) => {
  let buttonClasses = styles.button;

  if (variant) {
    buttonClasses += ` ${styles[variant]}`;
  }

  if (size) {
    buttonClasses += ` ${styles[size]}`;
  }

  if (outline) {
    buttonClasses += ` ${styles.outline}`;
  }

  return (
    <button
      {...props} // Permite pasar otras propiedades al botón nativo
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      ref={ref} // Enlaza la ref al elemento button
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button'; // Establece el nombre para mejor depuración

export default Button;
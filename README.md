# 📧 Formulario de Envío de Emails

Formulario web interactivo para simular el envío de correos electrónicos. Incluye validación en tiempo real, spinner de carga, mensaje de éxito y soporte para campo CC opcional.

🔗 **[Ver proyecto en vivo](https://leafy-jelly-248736.netlify.app/)**

---

## 🚀 Funcionalidades

- ✅ Validación de campos en tiempo real (`email`, `asunto`, `mensaje`)
- 🟡 Campo `CC` opcional con validación si se completa
- 🔒 Botón de envío deshabilitado hasta que el formulario esté completo
- 🔁 Botón de reset que limpia el formulario y el estado
- ⏳ Animación de carga (spinner) durante el envío
- 📩 Mensaje de éxito tras el "envío"

---

## 🛠️ Tecnologías usadas

- HTML5
- CSS3 (TailwindCSS)
- JavaScript Vanilla
- Spinner CSS personalizado

---

## 📁 Estructura

/
├── index.html # Formulario principal  
├── js/  
│ └── app.js # Lógica y validaciones del formulario  
├── dist/  
│ ├── app.css # Estilos generales  
│ └── spinner.css # Estilos del spinner de carga

---

## 📝 Notas

Este proyecto no envía correos reales. Está pensado como práctica de validaciones, manejo de eventos y lógica de interfaz.

Puedes usarlo como base para integrarlo con servicios como EmailJS, SendGrid o un backend propio.

// Contact.jsx - Sección de contacto
"use client";
import { useState } from "react";
import { useReveal } from "../lib/useReveal";
import styles from "./Contact.module.scss";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";
import { siteData } from "../lib/data";

export default function Contact() {
  const [ref, isRevealed] = useReveal();
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success, error
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    employees: "",
    service: "",
    message: "",
  });

  const whatsappLink = `https://wa.me/${siteData.company.phone}?text=Hola, me interesa contactar con NODO para una evaluación sin costo`;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulación de envío (en implementación real conectar con backend)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        employees: "",
        service: "",
        message: "",
      });

      // Auto-hide success message after 5 seconds
      setTimeout(() => setFormStatus("idle"), 5000);
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  return (
    <section id="contacto" className={styles.contact}>
      <div className={styles.container}>
        <SectionTitle
          subtitle="Contacto"
          title="Empezá hoy mismo a ordenar tu empresa"
          description="Completá el formulario o contactanos directamente por WhatsApp. Te respondemos en menos de 24 horas."
        />

        <div
          ref={ref}
          className={`${styles.contactContent} ${styles.reveal} ${isRevealed ? styles.revealed : ""}`}
        >
          <div
            className={`${styles.formSection} ${styles.staggerItem}`}
            style={{ "--stagger-delay": 0 }}
          >
            <form className={styles.form} onSubmit={handleSubmit}>
              <h3 className={styles.formTitle}>Evaluación sin costo</h3>
              <p className={styles.formDescription}>
                Contanos sobre tu empresa y te preparamos una propuesta
                personalizada.
              </p>

              {formStatus === "success" && (
                <div className={styles.formSuccess}>
                  ¡Gracias! Recibimos tu consulta. Te contactamos en las
                  próximas 24 horas.
                </div>
              )}

              {formStatus === "error" && (
                <div className={styles.formError}>
                  Hubo un error al enviar el formulario. Por favor, intentá
                  nuevamente o contactanos por WhatsApp.
                </div>
              )}

              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>
                    Nombre y apellido *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.formLabel}>
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    placeholder="+54 9 351 123-4567"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="company" className={styles.formLabel}>
                    Empresa *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    placeholder="Nombre de tu empresa"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="employees" className={styles.formLabel}>
                    Cantidad de empleados
                  </label>
                  <select
                    id="employees"
                    name="employees"
                    value={formData.employees}
                    onChange={handleInputChange}
                    className={styles.formSelect}
                  >
                    <option value="">Seleccionar</option>
                    <option value="Sin empleados">Sin empleados</option>
                    <option value="1-5 empleados">1-5 empleados</option>
                    <option value="6-15 empleados">6-15 empleados</option>
                    <option value="16-50 empleados">16-50 empleados</option>
                    <option value="Más de 50 empleados">
                      Más de 50 empleados
                    </option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="service" className={styles.formLabel}>
                    Servicio de interés
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className={styles.formSelect}
                  >
                    <option value="">Seleccionar</option>
                    <option value="Plan Base">Plan Base - Monotributo</option>
                    <option value="Plan PYME">
                      Plan PYME - Gestión Mensual
                    </option>
                    <option value="Plan Full">
                      Plan Full - Impuestos + Sueldos
                    </option>
                    <option value="Consulta específica">
                      Consulta específica
                    </option>
                    <option value="No estoy seguro">No estoy seguro</option>
                  </select>
                </div>

                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label htmlFor="message" className={styles.formLabel}>
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={styles.formTextarea}
                    placeholder="Contanos más detalles sobre tu empresa y qué necesitás..."
                  />
                </div>
              </div>

              <div className={styles.formSubmit}>
                <Button
                  type="submit"
                  variant="primary"
                  size="large"
                  fullWidth
                  disabled={formStatus === "submitting"}
                  icon={formStatus === "submitting" ? "⏳" : "📋"}
                >
                  {formStatus === "submitting"
                    ? "Enviando..."
                    : "Solicitar evaluación gratuita"}
                </Button>
              </div>
            </form>
          </div>

          <div
            className={`${styles.infoSection} ${styles.staggerItem}`}
            style={{ "--stagger-delay": 1 }}
          >
            <div className={styles.infoCards}>
              <a href={whatsappLink} className={`${styles.infoCard}`}>
                <span className={styles.cardIcon}>💬</span>
                <h4 className={styles.cardTitle}>WhatsApp directo</h4>
                <div className={styles.cardContent}>
                  <p>
                    Para consultas rápidas o urgentes. Te respondemos al
                    instante en horario comercial.
                  </p>
                  <span className={styles.cardLink}>
                    Abrir WhatsApp
                    <span>→</span>
                  </span>
                </div>
              </a>

              <div className={styles.infoCard}>
                <span className={styles.cardIcon}>📧</span>
                <h4 className={styles.cardTitle}>Email</h4>
                <div className={styles.cardContent}>
                  <p>Para consultas más detalladas o envío de documentación.</p>
                  <a
                    href={`mailto:${siteData.company.email}`}
                    className={styles.cardLink}
                  >
                    {siteData.company.email}
                    <span>→</span>
                  </a>
                </div>
              </div>

              <div className={styles.infoCard}>
                <span className={styles.cardIcon}>📍</span>
                <h4 className={styles.cardTitle}>Ubicación</h4>
                <div className={styles.cardContent}>
                  <p>
                    Atendemos en toda Argentina de forma remota. Sede principal
                    en {siteData.company.address}.
                  </p>
                </div>
              </div>
            </div>

            {/* <div className={styles.scheduleInfo}>
              <div className={styles.scheduleTitle}>Horarios de atención</div>
              <p className={styles.scheduleText}>
                Lunes a Viernes: 9:00 - 18:00
                <br />
                Sábados: 9:00 - 13:00
              </p>
            </div> */}
          </div>
        </div>

        <div
          className={`${styles.disclaimer} ${styles.reveal} ${isRevealed ? styles.revealed : ""}`}
        >
          <p>
            <strong>Proyecto conceptual / demo.</strong> Este formulario no
            envía datos reales. En una implementación real se conectaría con un
            backend para procesar las consultas.
          </p>
        </div>
      </div>
    </section>
  );
}

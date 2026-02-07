// data.js - Contenido centralizado para la landing page

export const siteData = {
  company: {
    name: "NODO Contable & Tributario",
    tagline: "Contabilidad simple para PYMEs que quieren crecer",
    proposition:
      "Te ordenamos impuestos, facturación y sueldos para que vos te concentres en vender.",
    phone: "5493510000000",
    email: "contacto@nodocontable.com",
    address: "Córdoba, Argentina",
  },

  benefits: [
    "Te avisamos vencimientos antes de que sea tarde",
    "Ordenamos tu info en la nube (simple y claro)",
    "Respuesta rápida por WhatsApp, sin tecnicismos",
  ],

  targetAudience: [
    "Comercios y e-commerce",
    "Gastronomía",
    "Servicios profesionales (agencias/estudios)",
    "Constructoras chicas",
    "Emprendedores que pasan de monotributo a RI",
  ],

  howItWorks: [
    {
      step: 1,
      title: "Evaluación sin costo",
      description:
        "Analizamos tu situación actual y necesidades específicas en una consulta gratuita.",
      icon: "📋",
    },
    {
      step: 2,
      title: "Plan personalizado",
      description:
        "Diseñamos una estrategia contable y tributaria adaptada a tu rubro y tamaño.",
      icon: "📊",
    },
    {
      step: 3,
      title: "Implementación y seguimiento",
      description:
        "Nos ocupamos de todo mientras vos te concentrás en hacer crecer tu negocio.",
      icon: "🚀",
    },
  ],

  services: [
    {
      id: "impuestos",
      title: "Impuestos & AFIP",
      description:
        "Altas/bajas, presentaciones, regularizaciones, planes de pago, requerimientos.",
      icon: "🏛️",
      features: [
        "Inscripciones y ceses de actividad",
        "Presentación de DDJJ mensuales",
        "Planes de pago y facilidades",
        "Respuesta a intimaciones AFIP",
      ],
    },
    {
      id: "sueldos",
      title: "Sueldos & RRHH",
      description: "Liquidación, cargas sociales, altas/bajas, ART, LSD.",
      icon: "👥",
      features: [
        "Liquidación mensual de haberes",
        "Altas y bajas de empleados",
        "Gestión de ART y medicina laboral",
        "Libro especial de remuneraciones",
      ],
    },
    {
      id: "gestion",
      title: "Gestión PYME",
      description:
        "Costos/márgenes, caja, conciliaciones, reporte mensual, proyección de impuestos.",
      icon: "📈",
      features: [
        "Análisis de costos y rentabilidad",
        "Control de flujo de caja",
        "Conciliaciones bancarias",
        "Reportes gerenciales mensuales",
      ],
    },
    {
      id: "digital",
      title: "Startups & Digital",
      description:
        "Pasarelas (Mercado Pago), facturación electrónica, automatización, canales.",
      icon: "💻",
      features: [
        "Integración con pasarelas de pago",
        "Facturación electrónica automática",
        "Automatización de procesos",
        "Asesoramiento en economía digital",
      ],
    },
  ],

  plans: [
    {
      id: "base",
      name: "Plan Base",
      subtitle: "Monotributo PRO",
      description: "Ideal para emprendedores y monotributistas",
      price: "desde $45.000",
      priceNote: "según categoría",
      features: [
        "Presentación mensual de DDJJ",
        "Asesoramiento tributario básico",
        "Soporte por WhatsApp",
        "Alertas de vencimientos",
      ],
      highlighted: false,
    },
    {
      id: "pyme",
      name: "Plan PYME",
      subtitle: "Gestión Mensual",
      description: "Para empresas en crecimiento",
      price: "desde $85.000",
      priceNote: "según facturación",
      features: [
        "Todo del Plan Base",
        "Gestión completa de impuestos",
        "Reportes mensuales",
        "Conciliaciones bancarias",
        "Análisis de rentabilidad",
      ],
      highlighted: true,
    },
    {
      id: "full",
      name: "Plan Full",
      subtitle: "Impuestos + Sueldos",
      description: "Solución integral para tu empresa",
      price: "desde $120.000",
      priceNote: "según cantidad de empleados",
      features: [
        "Todo del Plan PYME",
        "Liquidación de sueldos",
        "Gestión de RRHH completa",
        "ART y medicina laboral",
        "Soporte prioritario",
      ],
      highlighted: false,
    },
  ],

  results: [
    {
      metric: "+200",
      description: "PYMEs asesoradas",
      icon: "🏢",
    },
    {
      metric: "-85%",
      description: "multas por vencimientos",
      icon: "⚠️",
    },
    {
      metric: "5 años",
      description: "experiencia especializada",
      icon: "⭐",
    },
    {
      metric: "24/48hs",
      description: "tiempo promedio de respuesta",
      icon: "⚡",
    },
  ],

  testimonials: [
    {
      id: 1,
      name: "María González",
      company: "RestauranteElla",
      industry: "Gastronomía",
      size: "5 empleados",
      content:
        "Desde que trabajo con NODO nunca más me olvidé de un vencimiento. Me simplificaron todo y ahora puedo enfocarme en mis clientes.",
      rating: 5,
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      company: "TecnoSoluciones",
      industry: "E-commerce",
      size: "12 empleados",
      content:
        "Excelente atención y muy claros en las explicaciones. Me ayudaron a optimizar mi estructura tributaria y ahorro considerablemente.",
      rating: 5,
    },
    {
      id: 3,
      name: "Ana Rodríguez",
      company: "Estudio Creativo",
      industry: "Marketing",
      size: "3 empleados",
      content:
        "Profesionales muy capacitados. Me resolvieron un tema complejo con AFIP en tiempo récord. Los recomiendo totalmente.",
      rating: 5,
    },
    {
      id: 4,
      name: "Roberto Silva",
      company: "ConstructoraSilva",
      industry: "Construcción",
      size: "18 empleados",
      content:
        "Muy conformes con el servicio. Nos manejan toda la parte contable y de sueldos de manera impecable. Equipo muy profesional.",
      rating: 5,
    },
    {
      id: 5,
      name: "Laura Fernández",
      company: "ModaOnline",
      industry: "Retail",
      size: "8 empleados",
      content:
        "Me ayudaron con la transición de monotributo a responsable inscripto sin complicaciones. Siempre disponibles y muy eficientes.",
      rating: 5,
    },
  ],

  faq: [
    {
      id: 1,
      question: "¿Cómo funciona la evaluación sin costo?",
      answer:
        "Agendás una reunión (presencial o virtual) donde analizamos tu situación actual, necesidades específicas y te recomendamos el plan más conveniente. No hay compromisos.",
    },
    {
      id: 2,
      question: "¿Qué pasa si tengo problemas con AFIP?",
      answer:
        "Nos ocupamos de revisar tu situación, presentar los descargos necesarios y gestionar regularizaciones o planes de pago si fuera necesario. Tenés respaldo profesional completo.",
    },
    {
      id: 3,
      question: "¿Puedo cambiar de plan más adelante?",
      answer:
        "Sí, podés cambiar de plan en cualquier momento según evolucionen las necesidades de tu empresa. El cambio se hace efectivo el mes siguiente.",
    },
    {
      id: 4,
      question: "¿Cómo es el seguimiento y la comunicación?",
      answer:
        "Te contactamos por WhatsApp para consultas rápidas y coordinamos reuniones mensuales para revisar reportes y planificar estrategias. Siempre estás al tanto de todo.",
    },
    {
      id: 5,
      question: "¿Trabajan con empresas de todo el país?",
      answer:
        "Sí, trabajamos de forma remota con clientes de toda Argentina. Para temas que requieren presencia física coordinamos videoconferencias o gestiones a distancia.",
    },
    {
      id: 6,
      question: "¿Qué documentación necesito para empezar?",
      answer:
        "Dependiendo de tu situación, pero generalmente: CUIT, últimas DDJJ presentadas, comprobantes de retenciones y percepciones, y documentación contable básica. Te guiamos en todo el proceso.",
    },
  ],

  resources: [
    {
      id: 1,
      title: "Guía completa: Monotributo vs. Responsable Inscripto en 2024",
      excerpt:
        "Todo lo que necesitás saber para tomar la mejor decisión según tu facturación y tipo de actividad.",
      category: "Tributario",
      readTime: "8 min",
      image: "/images/blog-monotributo.jpg",
    },
    {
      id: 2,
      title: "Cómo optimizar el flujo de caja en tu PYME",
      excerpt:
        "Estrategias prácticas para mejorar la gestión financiera y evitar problemas de liquidez.",
      category: "Gestión",
      readTime: "6 min",
      image: "/images/blog-flujo-caja.jpg",
    },
    {
      id: 3,
      title: "Facturación electrónica: implementación paso a paso",
      excerpt:
        "Guía práctica para migrar a la facturación digital y cumplir con las nuevas normativas.",
      category: "Digital",
      readTime: "10 min",
      image: "/images/blog-facturacion.jpg",
    },
  ],
};

export const socialProof = {
  stats: [
    "200+ PYMEs asesoradas",
    "5 años de experiencia",
    "Respuesta en 24/48hs",
  ],
};

export const navigation = [
  { label: "Inicio", href: "#hero" },
  { label: "Servicios", href: "#servicios" },
  { label: "Planes", href: "#planes" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

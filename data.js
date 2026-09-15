const cvData = {
  es: {
    title: "CV Profesional",
    name: "Carlos Santiago Martínez Murillo",
    profession: "SOFTWARE ENGINEER & INFRASTRUCTURE SPECIALIST",
    skillsTitle: "HABILIDADES",
    educationTitle: "EDUCACIÓN",
    aboutTitle: "ACERCA DE MÍ",
    experienceTitle: "EXPERIENCIA LABORAL",
    projectsTitle: "PROYECTOS DESTACADOS",
    downloadBtn: "Descargar CV",
    lightMode: "Modo Claro",
    darkMode: "Modo Oscuro",
    skills: [
      "Desarrollo de Software (JS, React, Next.js, Astro, Node, Tailwind, Python)",
      "Backend y Datos (Supabase, PostgreSQL, RESTful APIs, Diseño SQL)",
      "Infraestructura y Ops (AWS EC2/S3, Linux Admin, Bash Scripting, Docker, CI/CD, Git)",
      "Hardware y TI (ServiceNow, Diagnósticos L2/L3, SAP, Impresión 3D PETG/TPU)",
      "QA Automation (Python, Selenium, Jest)"
    ],
    education: [
      {
        degree: "Licenciatura en Ing. Ciencias Computacionales",
        school: "Universidad de Guadalajara"
      },
      {
        degree: "Certificación B2 Inglés",
        school: "FILEX"
      }
    ],
    aboutText: "Ingeniero en Ciencias Computacionales con un perfil versátil que une el Desarrollo de Software escalable y la Infraestructura de TI. Poseo sólida experiencia en la creación de aplicaciones web full-stack, administración de servidores (Linux/AWS) y automatización de pruebas. Reconocido por mi capacidad analítica para resolver problemas técnicos complejos y la habilidad para desarrollar herramientas internas (SaaS) que optimizan los flujos de trabajo empresariales.",
    experience: [
      {
        title: "Ingeniero de Sistemas y Software",
        company: "Nivel 10 Consulting",
        date: "Abril 2026 - Presente",
        desc: "Lidero las operaciones integrales de TI y las iniciativas de software para un Centro de Distribución (CEDIS) de misión crítica. Diseñé herramientas internas personalizadas para automatizar el sistema de tickets en ServiceNow, conectando la infraestructura física con soluciones de software escalables. Gestión de despliegues de red complejos y soporte L2/L3, utilizando habilidades de desarrollo para optimizar la confiabilidad del sistema y reducir la carga operativa manual."
      },
      {
        title: "Ingeniero de Pruebas Automatizadas (SDET)",
        company: "Foxconn",
        date: "Noviembre 2024 - Diciembre 2025",
        desc: "Lideré el diagnóstico y resolución de fallas complejas de software ERP. Diseñé e implementé suites de pruebas automatizadas ejecutadas en entornos Linux, reduciendo el tiempo de resolución de tickets en un 30%. Creación de scripts por terminal y flujos de automatización para optimizar los procesos de manufactura diarios, previniendo interrupciones de producción."
      },
      {
        title: "Ingeniero de Soporte Técnico Especializado (L3)",
        company: "Toshiba Mexico",
        date: "Octubre 2023 - Octubre 2024",
        desc: "Gestión avanzada de soporte empresarial L2/L3 y mantenimiento integral del equipo tecnológico. Operación exhaustiva de módulos SAP para agilizar el registro y la resolución operativa mediante diagnósticos analíticos rigurosos, logrando un 98% de cumplimiento de SLA."
      },
      {
        title: "Ingeniero de Integración de Sistemas y Pruebas",
        company: "IBM Campus Guadalajara",
        date: "Agosto 2022 - Septiembre 2023",
        desc: "Configuración y mantenimiento de infraestructuras de servidores y entornos de pruebas masivos. Desarrollo de scripts de automatización nativos en Linux para el monitoreo de sistemas y validación de pruebas. Colaboración con equipos globales para asegurar la entrega de software sin defectos mediante protocolos CI/CD."
      }
    ],
    projects: [
      {
        title: "TechCore (SaaS)",
        desc: "Desarrollo de plataforma multi-tenant para talleres técnicos utilizando Next.js, Supabase y Tailwind CSS. Implementación de generadores de recibos automatizados nativos con jsPDF y funcionalidad de búsqueda global."
      },
      {
        title: "WealthPulse 1.0",
        desc: "Ingeniería de aplicación web para el seguimiento financiero en tiempo real utilizando React, Vite y APIs REST, integrando dashboards interactivos personalizados y gestión avanzada de estado."
      },
      {
        title: "Scribe AI",
        desc: "Aplicación de utilidad basada en la web que aprovecha frameworks frontend modernos e integraciones con la API de Groq para ofrecer interacciones de usuario fluidas impulsadas por inteligencia artificial."
      }
    ]
  },
  en: {
    title: "Professional CV",
    name: "Carlos Santiago Martínez Murillo",
    profession: "SOFTWARE ENGINEER & INFRASTRUCTURE SPECIALIST",
    skillsTitle: "SKILLS",
    educationTitle: "EDUCATION",
    aboutTitle: "ABOUT ME",
    experienceTitle: "WORK EXPERIENCE",
    projectsTitle: "HIGHLIGHTED PROJECTS",
    downloadBtn: "Download CV",
    lightMode: "Light Mode",
    darkMode: "Dark Mode",
    skills: [
      "Software Development (JS, React, Next.js, Astro, Node, Tailwind, Python)",
      "Backend & Data (Supabase, PostgreSQL, RESTful APIs, Database Design)",
      "Infrastructure & Ops (AWS EC2/S3, Linux Admin, Bash Scripting, Docker, CI/CD, Git)",
      "Hardware & IT (ServiceNow, L2/L3 Diagnostics, SAP Operations, 3D Printing)",
      "QA Automation (Python, Selenium, Jest)"
    ],
    education: [
      {
        degree: "B.S. in Computer Science Engineering",
        school: "Universidad de Guadalajara"
      },
      {
        degree: "B2 English Certification",
        school: "FILEX"
      }
    ],
    aboutText: "Computer Science Engineer with a versatile profile bridging scalable Software Development and IT Infrastructure. Possess robust experience in building full-stack web applications, server administration (Linux/AWS), and test automation. Recognized for an analytical capacity to resolve complex technical issues and the ability to develop internal SaaS tooling that optimizes enterprise workflows.",
    experience: [
      {
        title: "Systems & Software Engineer",
        company: "Nivel 10 Consulting",
        date: "April 2026 - Present",
        desc: "Spearheaded end-to-end IT operations and software initiatives for a mission-critical Distribution Center (CEDIS). Architected custom internal tooling to automate ServiceNow ticketing systems, bridging physical infrastructure with scalable software solutions. Managed complex network deployments and L2/L3 support, leveraging development skills to optimize system reliability and reduce manual IT overhead."
      },
      {
        title: "Automated QA Test Engineer (SDET)",
        company: "Foxconn",
        date: "November 2024 - December 2025",
        desc: "Led the diagnosis and resolution of complex ERP software failures. Engineered automated testing suites executed within Linux environments, reducing ticket resolution time by 30%. Created terminal scripts and automation workflows to optimize daily manufacturing processes, preventing production interruptions."
      },
      {
        title: "Specialized Technical Support Engineer (L3)",
        company: "Toshiba Mexico",
        date: "October 2023 - October 2024",
        desc: "Managed advanced L2/L3 enterprise support and comprehensive technological equipment maintenance. Operated SAP modules to streamline logging and operational resolution through rigorous analytical troubleshooting, achieving a 98% SLA completion rate."
      },
      {
        title: "Systems Integration & Test Engineer",
        company: "IBM Campus Guadalajara",
        date: "August 2022 - September 2023",
        desc: "Configured and maintained server infrastructures and massive testing environments. Developed native Linux automation scripts for monitoring systems and validating tests. Collaborated with global teams to ensure defect-free software delivery via CI/CD protocols."
      }
    ],
    projects: [
      {
        title: "TechCore (SaaS)",
        desc: "Developed a multi-tenant platform for technical workshops utilizing Next.js, Supabase, and Tailwind CSS. Implemented automated native jsPDF receipt generators and global search functionality."
      },
      {
        title: "WealthPulse 1.0",
        desc: "Engineered a real-time financial tracking web application utilizing React, Vite, and REST APIs, featuring custom interactive dashboards and state management."
      },
      {
        title: "Scribe AI",
        desc: "Built a web-based utility application leveraging modern frontend frameworks and Groq API integrations to deliver seamless, AI-driven user interactions."
      }
    ]
  }
};

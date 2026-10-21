// Textos de PH Web Studio en los tres idiomas del sitio.
// es: español (por defecto) · en: inglés · pt-BR: portugués de Brasil.
// Las claves deben coincidir en los tres idiomas.
// Si cambias un título o descripción de página, actualiza también
// scripts/prerender-routes.mjs (HTML inicial, en español).
import { useCopy } from '../i18n/context'

const es = {
  // Textos de las maquetas ilustrativas (web de ejemplo dentro de los dispositivos).
  mock: {
    headline: 'Tu negocio, en su mejor versión.',
    headlineLines: ['Tu negocio, en su', 'mejor versión.'],
    book: 'Reservar',
    domain: 'tunegocio.com',
  },
  meta: {
    homeTitle: 'PH Web Studio — Diseño y desarrollo web',
    homeDescription:
      'PH Web Studio: diseño y desarrollo web a medida para pequeños negocios. Webs claras, rápidas y adaptadas al móvil, pensadas para convertir visitas en clientes.',
    notFoundTitle: 'Página no encontrada — PH Web Studio',
  },
  common: {
    skip: 'Saltar al contenido',
    talk: 'Hablemos',
    logoHome: 'PH Web Studio — inicio',
    logoTop: 'PH Web Studio — volver arriba',
    mainNav: 'Principal',
    mobileNav: 'Menú móvil',
    footerNav: 'Pie de página',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
  },
  nav: {
    inicio: 'Inicio',
    servicios: 'Servicios',
    proyectos: 'Proyectos',
    proceso: 'Proceso',
    contacto: 'Contacto',
  },
  hero: {
    title: 'Websites que hacen que tu negocio se vea profesional.',
    lead: 'Diseñamos y desarrollamos webs a medida para pequeños negocios: claras, rápidas y pensadas para convertir visitas en clientes.',
    primary: 'Quiero una web',
    secondary: 'Ver proyectos',
    foot: 'Webs para barberías, restaurantes, gimnasios, hoteles, talleres, clínicas y peluquerías.',
  },
  services: {
    title: 'Lo que hacemos',
    intro:
      'Todo lo que tu negocio necesita para tener una web propia, desde la primera idea hasta el día en que se publica.',
    items: {
      'diseno-web': {
        title: 'Diseño web',
        text: 'Una imagen a medida que refleja la personalidad de tu negocio y transmite confianza desde el primer vistazo.',
      },
      'desarrollo-web': {
        title: 'Desarrollo web',
        text: 'Webs rápidas, seguras y fáciles de mantener, construidas con tecnología actual.',
      },
      'landing-pages': {
        title: 'Landing pages',
        text: 'Páginas con un único objetivo: que te llamen, te escriban o reserven.',
      },
      'optimizacion-movil': {
        title: 'Optimización móvil',
        text: 'Diseñadas primero para el teléfono, donde te busca buena parte de tus clientes.',
      },
      'presencia-digital': {
        title: 'Presencia digital',
        text: 'Dominio, correo profesional y perfil de Google alineados con tu marca.',
      },
    },
  },
  projects: {
    title: 'Proyectos seleccionados',
    intro: 'La prueba de nuestro trabajo: cada proyecto tiene su propia identidad, adaptada al negocio.',
    more: 'Estamos preparando nuevos proyectos para otros sectores.',
    moreLink: '¿Quieres que el próximo sea el tuyo?',
    view: 'Ver proyecto',
    viewAria: (name) => `Ver proyecto ${name}`,
    includes: 'Qué incluye',
    items: {
      barberia: {
        name: 'Web para barberías',
        category: 'Barbería',
        label: 'Demo / concepto — plantilla creada por PH Web Studio',
        description:
          'Ejemplo de website para barberías: servicios claros, galería y reserva de citas desde el móvil. Nombre, logotipo, fotos, colores y textos se personalizan con la identidad de cada negocio.',
        highlights: ['Web completa', 'Reserva de citas', 'Adaptada a móvil'],
      },
    },
  },
  process: {
    title: 'Cómo trabajamos',
    intro: 'Un proceso sencillo y transparente, con tu aprobación en cada paso.',
    steps: [
      { title: 'Hablamos', text: 'Conocemos tu negocio, a tus clientes y lo que necesitas conseguir con la web.' },
      { title: 'Diseñamos', text: 'Definimos la estructura y la propuesta visual antes de escribir una sola línea de código.' },
      { title: 'Construimos', text: 'Desarrollamos la web, rápida y adaptada a cualquier pantalla, y la revisamos contigo.' },
      { title: 'Publicamos', text: 'La ponemos en línea con tu dominio y te acompañamos en los primeros pasos.' },
    ],
  },
  cta: {
    title: '¿Tu negocio necesita una web que esté a la altura?',
    text: 'Cuéntanos tu idea. Te respondemos con una propuesta clara y sin compromiso.',
    button: 'Hablemos de tu proyecto',
  },
  contact: {
    title: 'Hablemos',
    text: 'Cuéntanos qué necesitas y te mostraremos cómo podemos ayudarte.',
    name: 'Nombre',
    email: 'Email',
    message: 'Mensaje',
    trap: 'No rellenar',
    submitSend: 'Enviar mensaje',
    submitMail: 'Enviar por email',
    subject: (name) => `Proyecto web — ${name}`,
    draftTo: 'Para',
    draftSubject: 'Asunto',
    notes: {
      idleSend: 'Te responderemos por email lo antes posible.',
      idleMail: 'Se abrirá tu aplicación de correo con el mensaje preparado. Solo nos llegará cuando lo envíes desde allí.',
      sending: 'Enviando…',
      sent: 'Mensaje enviado. Te responderemos por email lo antes posible.',
      error: (email) =>
        `No se ha podido enviar el mensaje. Tu texto sigue en el formulario: inténtalo de nuevo o escríbenos a ${email}.`,
      mailto: (email) =>
        `Hemos preparado el mensaje en tu aplicación de correo, pero aún no se ha enviado: revísalo y pulsa «Enviar» allí. Si no se ha abierto, copia el mensaje y escríbenos a ${email}.`,
    },
    copyMessage: 'Copiar mensaje',
    copiedMessage: 'Mensaje copiado',
    copyEmail: 'Copiar email',
    copiedEmail: 'Email copiado',
    openMail: 'Abrir correo',
    copyFail: 'No se ha podido copiar. Selecciona el texto del formulario y cópialo manualmente.',
  },
  notFound: {
    title: 'Esta página no existe.',
    text: 'Puede que el enlace haya cambiado.',
    back: 'Volver a PH Web Studio',
  },
  service: {
    tag: 'Servicio',
    wantSite: 'Quiero una web',
    howItWorks: 'Ver cómo funciona',
    allServices: 'Todos los servicios',
    servicesShort: 'Servicios',
    otherTitle: 'Otros servicios',
    otherIntro: 'Cada web combina varias piezas. Estas son las que completan tu proyecto.',
  },
}

const en = {
  mock: {
    headline: 'Your business, at its best.',
    headlineLines: ['Your business,', 'at its best.'],
    book: 'Book now',
    domain: 'yourbusiness.com',
  },
  meta: {
    homeTitle: 'PH Web Studio — Web design and development',
    homeDescription:
      'PH Web Studio: custom web design and development for small businesses. Clear, fast, mobile-friendly websites built to turn visitors into customers.',
    notFoundTitle: 'Page not found — PH Web Studio',
  },
  common: {
    skip: 'Skip to content',
    talk: "Let's talk",
    logoHome: 'PH Web Studio — home',
    logoTop: 'PH Web Studio — back to top',
    mainNav: 'Main',
    mobileNav: 'Mobile menu',
    footerNav: 'Footer',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  nav: {
    inicio: 'Home',
    servicios: 'Services',
    proyectos: 'Projects',
    proceso: 'Process',
    contacto: 'Contact',
  },
  hero: {
    title: 'Websites that make your business look professional.',
    lead: 'We design and build custom websites for small businesses: clear, fast and built to turn visitors into customers.',
    primary: 'I want a website',
    secondary: 'View projects',
    foot: 'Websites for barbershops, restaurants, gyms, hotels, auto repair shops, clinics and hair salons.',
  },
  services: {
    title: 'What we do',
    intro:
      'Everything your business needs to have a website of its own, from the first idea to the day it goes live.',
    items: {
      'diseno-web': {
        title: 'Web design',
        text: "A custom look that reflects your business's personality and builds trust at first glance.",
      },
      'desarrollo-web': {
        title: 'Web development',
        text: 'Fast, secure, easy-to-maintain websites built with modern technology.',
      },
      'landing-pages': {
        title: 'Landing pages',
        text: 'Pages with a single goal: getting people to call you, message you or book.',
      },
      'optimizacion-movil': {
        title: 'Mobile optimization',
        text: 'Designed for the phone first, where many of your customers look for you.',
      },
      'presencia-digital': {
        title: 'Digital presence',
        text: 'Domain, professional email and Google profile aligned with your brand.',
      },
    },
  },
  projects: {
    title: 'Selected projects',
    intro: 'Proof of our work: each project has its own identity, tailored to the business.',
    more: "We're preparing new projects for other industries.",
    moreLink: 'Want the next one to be yours?',
    view: 'View project',
    viewAria: (name) => `View project ${name}`,
    includes: "What's included",
    items: {
      barberia: {
        name: 'Website for barbershops',
        category: 'Barbershop',
        label: 'Demo / concept — template created by PH Web Studio',
        description:
          "Sample website for barbershops: clear services, a gallery and appointment booking from the phone. Name, logo, photos, colors and copy are customized to each business's identity.",
        highlights: ['Full website', 'Appointment booking', 'Mobile-friendly'],
      },
    },
  },
  process: {
    title: 'How we work',
    intro: 'A simple, transparent process, with your approval at every step.',
    steps: [
      { title: 'We talk', text: 'We get to know your business, your customers and what you need your website to achieve.' },
      { title: 'We design', text: 'We define the structure and the visual approach before writing a single line of code.' },
      { title: 'We build', text: 'We develop the website, fast and adapted to any screen, and review it with you.' },
      { title: 'We launch', text: 'We put it online with your domain and support you through the first steps.' },
    ],
  },
  cta: {
    title: 'Does your business need a website that lives up to it?',
    text: "Tell us your idea. We'll get back to you with a clear, no-obligation proposal.",
    button: "Let's talk about your project",
  },
  contact: {
    title: "Let's talk",
    text: "Tell us what you need and we'll show you how we can help.",
    name: 'Name',
    email: 'Email',
    message: 'Message',
    trap: 'Leave blank',
    submitSend: 'Send message',
    submitMail: 'Send by email',
    subject: (name) => `Website project — ${name}`,
    draftTo: 'To',
    draftSubject: 'Subject',
    notes: {
      idleSend: "We'll reply by email as soon as possible.",
      idleMail: "Your email app will open with the message ready. We'll only receive it once you send it from there.",
      sending: 'Sending…',
      sent: "Message sent. We'll reply by email as soon as possible.",
      error: (email) =>
        `The message couldn't be sent. Your text is still in the form: try again or write to us at ${email}.`,
      mailto: (email) =>
        `We've prepared the message in your email app, but it hasn't been sent yet: review it and press “Send” there. If it didn't open, copy the message and write to us at ${email}.`,
    },
    copyMessage: 'Copy message',
    copiedMessage: 'Message copied',
    copyEmail: 'Copy email',
    copiedEmail: 'Email copied',
    openMail: 'Open email',
    copyFail: "Couldn't copy. Select the text in the form and copy it manually.",
  },
  notFound: {
    title: "This page doesn't exist.",
    text: 'The link may have changed.',
    back: 'Back to PH Web Studio',
  },
  service: {
    tag: 'Service',
    wantSite: 'I want a website',
    howItWorks: 'See how it works',
    allServices: 'All services',
    servicesShort: 'Services',
    otherTitle: 'Other services',
    otherIntro: 'Every website combines several pieces. These are the ones that complete your project.',
  },
}

const ptBR = {
  mock: {
    headline: 'Seu negócio, na sua melhor versão.',
    headlineLines: ['Seu negócio, na', 'sua melhor versão.'],
    book: 'Reservar',
    domain: 'seunegocio.com.br',
  },
  meta: {
    homeTitle: 'PH Web Studio — Design e desenvolvimento de sites',
    homeDescription:
      'PH Web Studio: design e desenvolvimento de sites sob medida para pequenos negócios. Sites claros, rápidos e adaptados ao celular, pensados para transformar visitas em clientes.',
    notFoundTitle: 'Página não encontrada — PH Web Studio',
  },
  common: {
    skip: 'Pular para o conteúdo',
    talk: 'Vamos conversar',
    logoHome: 'PH Web Studio — início',
    logoTop: 'PH Web Studio — voltar ao topo',
    mainNav: 'Principal',
    mobileNav: 'Menu mobile',
    footerNav: 'Rodapé',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
  },
  nav: {
    inicio: 'Início',
    servicios: 'Serviços',
    proyectos: 'Projetos',
    proceso: 'Processo',
    contacto: 'Contato',
  },
  hero: {
    title: 'Sites que fazem o seu negócio parecer profissional.',
    lead: 'Criamos e desenvolvemos sites sob medida para pequenos negócios: claros, rápidos e pensados para transformar visitas em clientes.',
    primary: 'Quero um site',
    secondary: 'Ver projetos',
    foot: 'Sites para barbearias, restaurantes, academias, hotéis, oficinas, clínicas e salões de beleza.',
  },
  services: {
    title: 'O que fazemos',
    intro:
      'Tudo o que o seu negócio precisa para ter um site próprio, da primeira ideia até o dia em que ele vai ao ar.',
    items: {
      'diseno-web': {
        title: 'Web design',
        text: 'Uma imagem sob medida que reflete a personalidade do seu negócio e transmite confiança logo no primeiro olhar.',
      },
      'desarrollo-web': {
        title: 'Desenvolvimento web',
        text: 'Sites rápidos, seguros e fáceis de manter, construídos com tecnologia atual.',
      },
      'landing-pages': {
        title: 'Landing pages',
        text: 'Páginas com um único objetivo: fazer o cliente ligar, mandar mensagem ou reservar.',
      },
      'optimizacion-movil': {
        title: 'Otimização para celular',
        text: 'Pensados primeiro para o celular, onde boa parte dos seus clientes procura por você.',
      },
      'presencia-digital': {
        title: 'Presença digital',
        text: 'Domínio, e-mail profissional e perfil no Google alinhados com a sua marca.',
      },
    },
  },
  projects: {
    title: 'Projetos selecionados',
    intro: 'A prova do nosso trabalho: cada projeto tem identidade própria, adaptada ao negócio.',
    more: 'Estamos preparando novos projetos para outros segmentos.',
    moreLink: 'Quer que o próximo seja o seu?',
    view: 'Ver projeto',
    viewAria: (name) => `Ver projeto ${name}`,
    includes: 'O que inclui',
    items: {
      barberia: {
        name: 'Site para barbearias',
        category: 'Barbearia',
        label: 'Demo / conceito — modelo criado pela PH Web Studio',
        description:
          'Exemplo de site para barbearias: serviços claros, galeria e agendamento pelo celular. Nome, logotipo, fotos, cores e textos são personalizados com a identidade de cada negócio.',
        highlights: ['Site completo', 'Agendamento de horários', 'Adaptado ao celular'],
      },
    },
  },
  process: {
    title: 'Como trabalhamos',
    intro: 'Um processo simples e transparente, com a sua aprovação em cada etapa.',
    steps: [
      { title: 'Conversamos', text: 'Conhecemos o seu negócio, os seus clientes e o que você precisa alcançar com o site.' },
      { title: 'Projetamos', text: 'Definimos a estrutura e a proposta visual antes de escrever uma única linha de código.' },
      { title: 'Construímos', text: 'Desenvolvemos o site, rápido e adaptado a qualquer tela, e revisamos com você.' },
      { title: 'Publicamos', text: 'Colocamos o site no ar com o seu domínio e acompanhamos você nos primeiros passos.' },
    ],
  },
  cta: {
    title: 'O seu negócio precisa de um site à altura?',
    text: 'Conte a sua ideia. Respondemos com uma proposta clara e sem compromisso.',
    button: 'Vamos falar do seu projeto',
  },
  contact: {
    title: 'Vamos conversar',
    text: 'Conte o que você precisa e mostraremos como podemos ajudar.',
    name: 'Nome',
    email: 'E-mail',
    message: 'Mensagem',
    trap: 'Não preencher',
    submitSend: 'Enviar mensagem',
    submitMail: 'Enviar por e-mail',
    subject: (name) => `Projeto de site — ${name}`,
    draftTo: 'Para',
    draftSubject: 'Assunto',
    notes: {
      idleSend: 'Responderemos por e-mail o mais rápido possível.',
      idleMail: 'O seu aplicativo de e-mail vai abrir com a mensagem pronta. Ela só chega até nós quando você enviar por lá.',
      sending: 'Enviando…',
      sent: 'Mensagem enviada. Responderemos por e-mail o mais rápido possível.',
      error: (email) =>
        `Não foi possível enviar a mensagem. O seu texto continua no formulário: tente de novo ou escreva para ${email}.`,
      mailto: (email) =>
        `Preparamos a mensagem no seu aplicativo de e-mail, mas ela ainda não foi enviada: revise e toque em “Enviar” por lá. Se ele não abriu, copie a mensagem e escreva para ${email}.`,
    },
    copyMessage: 'Copiar mensagem',
    copiedMessage: 'Mensagem copiada',
    copyEmail: 'Copiar e-mail',
    copiedEmail: 'E-mail copiado',
    openMail: 'Abrir e-mail',
    copyFail: 'Não foi possível copiar. Selecione o texto do formulário e copie manualmente.',
  },
  notFound: {
    title: 'Esta página não existe.',
    text: 'Talvez o link tenha mudado.',
    back: 'Voltar para a PH Web Studio',
  },
  service: {
    tag: 'Serviço',
    wantSite: 'Quero um site',
    howItWorks: 'Veja como funciona',
    allServices: 'Todos os serviços',
    servicesShort: 'Serviços',
    otherTitle: 'Outros serviços',
    otherIntro: 'Todo site combina várias peças. Estas são as que completam o seu projeto.',
  },
}

export const STUDIO_COPY = { es, en, 'pt-BR': ptBR }

// Textos del estudio en el idioma activo.
export const useStudioCopy = () => useCopy(STUDIO_COPY)

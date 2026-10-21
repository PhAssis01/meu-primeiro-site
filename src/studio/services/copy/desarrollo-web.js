// Textos de /servicios/desarrollo-web (es · en · pt-BR).
// `code`: líneas del editor de ejemplo; `g` = fase del relato que resalta cada línea.

const es = {
  description:
    'Desarrollo web a medida: convertimos el diseño en una web rápida, adaptable a cualquier pantalla y fácil de mantener.',
  hero: {
    title: 'Del diseño a una web que funciona.',
    lead: 'Convertimos el diseño en una web real: rápida, adaptable a cualquier pantalla y construida sobre una base ordenada y fácil de mantener.',
  },
  layers: ['Estructura', 'Estilo', 'Interacción'],
  published: 'Publicada',
  sections: {
    what: {
      title: 'Qué es el desarrollo web',
      intro: 'Es la parte que no se ve pero se nota: cómo está construida la web, cómo responde y lo bien que funciona.',
    },
    story: {
      title: 'Cómo un diseño se convierte en web',
      intro: 'Cada bloque de código da forma a una parte de la página. Desplázate para seguir el proceso.',
    },
    responsive: {
      title: 'Adaptada a cada pantalla',
      intro: 'Una sola web que se reorganiza según el dispositivo: columnas en el ordenador, lectura cómoda en el móvil.',
    },
    interactions: {
      title: 'Interacciones',
      intro: 'Pequeños detalles que hacen que la web se sienta viva y fácil de usar. Pruébalos.',
    },
    features: {
      title: 'Estructura y funcionalidades',
      intro: 'Construimos lo que tu negocio necesita, nada más y nada menos.',
    },
    performance: {
      title: 'Rendimiento',
      intro: 'Una web ligera se abre antes y se usa con más gusto, sobre todo desde el móvil.',
    },
    steps: {
      title: 'Cómo trabajamos el desarrollo',
      intro: 'Del diseño aprobado a la web publicada.',
    },
  },
  points: [
    { icon: 'code', title: 'Código a medida', text: 'Convertimos el diseño aprobado en una web real, sin plantillas pesadas.' },
    { icon: 'layers', title: 'Componentes', text: 'Piezas reutilizables que mantienen la web coherente y fácil de ampliar.' },
    { icon: 'phone', title: 'Cualquier pantalla', text: 'La misma web se adapta al móvil, la tablet y el ordenador.' },
    { icon: 'shield', title: 'Fácil de mantener', text: 'Una base ordenada para actualizar contenido sin romper nada.' },
  ],
  stages: [
    { title: 'Estructura', text: 'Primero, el esqueleto: cabecera, contenido principal y pie, con etiquetas que describen qué es cada parte.' },
    { title: 'Componentes', text: 'El diseño se divide en piezas —hero, tarjetas, botones— que se reutilizan en toda la web.' },
    { title: 'Interacciones', text: 'Damos vida a cada elemento: estados al pasar el ratón, menú, formularios y respuestas al tocar.' },
    { title: 'Rendimiento', text: 'Optimizamos imágenes y código y dejamos la web publicada y lista para recibir visitas.' },
  ],
  code: [
    { g: 0, t: '<header>' },
    { g: 0, t: '  <Logo /> <Menu />' },
    { g: 0, t: '</header>' },
    { g: 0, t: '<main>' },
    { g: 1, t: '  <Hero titulo="Tu negocio…" />' },
    { g: 1, t: '  <Servicios columnas={3} />' },
    { g: 2, t: '  <Boton alPulsar={reservar}>' },
    { g: 2, t: '    Reservar' },
    { g: 2, t: '  </Boton>' },
    { g: 0, t: '</main>' },
    { g: 3, t: '// imágenes optimizadas · carga diferida' },
  ],
  responsive: {
    sizes: ['Móvil', 'Tablet', 'Escritorio'],
    group: 'Tamaño de pantalla',
    range: 'Ancho de pantalla',
    note: 'Mueve el control: el contenido se reorganiza solo, igual que en una web real.',
  },
  demos: {
    button: 'Reservar cita',
    states: { title: 'Estados', text: 'Pasa el ratón o pulsa: el botón responde para confirmar la acción.' },
    menuOpen: 'Abrir menú de ejemplo',
    menuClose: 'Cerrar menú de ejemplo',
    menuItems: ['Inicio', 'Servicios', 'Contacto'],
    menu: { title: 'Menú', text: 'Pulsa el icono: un menú claro y cómodo en pantallas pequeñas.' },
    emailLabel: 'Email de ejemplo',
    emailPlaceholder: 'tu@email.com',
    forms: { title: 'Formularios', text: 'Escribe un email: el campo te avisa al momento si está bien escrito.' },
  },
  features: [
    'Formulario de contacto',
    'Reserva de citas',
    'Mapa y horarios',
    'Galería de imágenes',
    'Varios idiomas',
    'Blog o novedades',
    'Botón de WhatsApp',
    'SEO técnico básico',
  ],
  performance: [
    { icon: 'image', title: 'Imágenes adaptadas', text: 'Cada imagen se sirve con el tamaño y el formato adecuados para cada pantalla.' },
    { icon: 'bolt', title: 'Código ligero', text: 'Solo lo necesario: menos peso significa que la web aparece antes.' },
    { icon: 'gauge', title: 'Carga progresiva', text: 'Primero lo que se ve; el resto se carga cuando hace falta.' },
  ],
  steps: [
    { title: 'Maquetación', text: 'Construimos la estructura a partir del diseño aprobado.' },
    { title: 'Funciones', text: 'Añadimos formularios, reservas y todo lo que tu negocio necesite.' },
    { title: 'Pruebas', text: 'Revisamos en distintos navegadores, móviles y tamaños de pantalla.' },
    { title: 'Publicación', text: 'La ponemos en línea con tu dominio, lista para usarse.' },
  ],
}

const en = {
  description:
    'Custom web development: we turn the design into a fast website that adapts to any screen and is easy to maintain.',
  hero: {
    title: 'From design to a website that works.',
    lead: 'We turn the design into a real website: fast, adaptable to any screen and built on a tidy foundation that is easy to maintain.',
  },
  layers: ['Structure', 'Style', 'Interaction'],
  published: 'Live',
  sections: {
    what: {
      title: 'What web development is',
      intro: "It's the part you don't see but you notice: how the website is built, how it responds and how well it works.",
    },
    story: {
      title: 'How a design becomes a website',
      intro: 'Each block of code shapes a part of the page. Scroll to follow the process.',
    },
    responsive: {
      title: 'Adapted to every screen',
      intro: 'One website that rearranges itself for each device: columns on a computer, comfortable reading on a phone.',
    },
    interactions: {
      title: 'Interactions',
      intro: 'Small details that make the website feel alive and easy to use. Try them out.',
    },
    features: {
      title: 'Structure and features',
      intro: 'We build what your business needs, no more and no less.',
    },
    performance: {
      title: 'Performance',
      intro: 'A lightweight website opens sooner and is more enjoyable to use, especially on a phone.',
    },
    steps: {
      title: 'How we approach development',
      intro: 'From the approved design to the live website.',
    },
  },
  points: [
    { icon: 'code', title: 'Custom code', text: 'We turn the approved design into a real website, without heavy templates.' },
    { icon: 'layers', title: 'Components', text: 'Reusable pieces that keep the website consistent and easy to expand.' },
    { icon: 'phone', title: 'Any screen', text: 'The same website adapts to phones, tablets and computers.' },
    { icon: 'shield', title: 'Easy to maintain', text: 'A tidy foundation for updating content without breaking anything.' },
  ],
  stages: [
    { title: 'Structure', text: 'First, the skeleton: header, main content and footer, with tags that describe what each part is.' },
    { title: 'Components', text: 'The design is split into pieces —hero, cards, buttons— that are reused across the whole website.' },
    { title: 'Interactions', text: 'We bring each element to life: hover states, menu, forms and responses to touch.' },
    { title: 'Performance', text: 'We optimize images and code and get the website live and ready for visitors.' },
  ],
  code: [
    { g: 0, t: '<header>' },
    { g: 0, t: '  <Logo /> <Menu />' },
    { g: 0, t: '</header>' },
    { g: 0, t: '<main>' },
    { g: 1, t: '  <Hero title="Your business…" />' },
    { g: 1, t: '  <Services columns={3} />' },
    { g: 2, t: '  <Button onPress={book}>' },
    { g: 2, t: '    Book now' },
    { g: 2, t: '  </Button>' },
    { g: 0, t: '</main>' },
    { g: 3, t: '// optimized images · lazy loading' },
  ],
  responsive: {
    sizes: ['Mobile', 'Tablet', 'Desktop'],
    group: 'Screen size',
    range: 'Screen width',
    note: 'Move the slider: the content rearranges itself, just like on a real website.',
  },
  demos: {
    button: 'Book an appointment',
    states: { title: 'States', text: 'Hover or tap: the button responds to confirm the action.' },
    menuOpen: 'Open sample menu',
    menuClose: 'Close sample menu',
    menuItems: ['Home', 'Services', 'Contact'],
    menu: { title: 'Menu', text: 'Tap the icon: a clear, comfortable menu on small screens.' },
    emailLabel: 'Sample email',
    emailPlaceholder: 'you@email.com',
    forms: { title: 'Forms', text: "Type an email: the field tells you right away whether it's written correctly." },
  },
  features: [
    'Contact form',
    'Appointment booking',
    'Map and opening hours',
    'Image gallery',
    'Multiple languages',
    'Blog or news',
    'WhatsApp button',
    'Basic technical SEO',
  ],
  performance: [
    { icon: 'image', title: 'Optimized images', text: 'Each image is served at the right size and format for every screen.' },
    { icon: 'bolt', title: 'Lightweight code', text: 'Only what is needed: less weight means the website appears sooner.' },
    { icon: 'gauge', title: 'Progressive loading', text: 'What you see comes first; the rest loads when it is needed.' },
  ],
  steps: [
    { title: 'Layout', text: 'We build the structure from the approved design.' },
    { title: 'Features', text: 'We add forms, bookings and everything your business needs.' },
    { title: 'Testing', text: 'We check it across different browsers, phones and screen sizes.' },
    { title: 'Launch', text: 'We put it online with your domain, ready to use.' },
  ],
}

const ptBR = {
  description:
    'Desenvolvimento web sob medida: transformamos o design em um site rápido, adaptável a qualquer tela e fácil de manter.',
  hero: {
    title: 'Do design a um site que funciona.',
    lead: 'Transformamos o design em um site de verdade: rápido, adaptável a qualquer tela e construído sobre uma base organizada e fácil de manter.',
  },
  layers: ['Estrutura', 'Estilo', 'Interação'],
  published: 'No ar',
  sections: {
    what: {
      title: 'O que é desenvolvimento web',
      intro: 'É a parte que não se vê, mas se percebe: como o site é construído, como responde e o quanto funciona bem.',
    },
    story: {
      title: 'Como um design vira site',
      intro: 'Cada bloco de código dá forma a uma parte da página. Role a página para acompanhar o processo.',
    },
    responsive: {
      title: 'Adaptado a cada tela',
      intro: 'Um único site que se reorganiza conforme o dispositivo: colunas no computador, leitura confortável no celular.',
    },
    interactions: {
      title: 'Interações',
      intro: 'Pequenos detalhes que deixam o site vivo e fácil de usar. Experimente.',
    },
    features: {
      title: 'Estrutura e funcionalidades',
      intro: 'Construímos o que o seu negócio precisa, nem mais nem menos.',
    },
    performance: {
      title: 'Desempenho',
      intro: 'Um site leve abre mais rápido e é mais agradável de usar, principalmente no celular.',
    },
    steps: {
      title: 'Como trabalhamos o desenvolvimento',
      intro: 'Do design aprovado ao site no ar.',
    },
  },
  points: [
    { icon: 'code', title: 'Código sob medida', text: 'Transformamos o design aprovado em um site de verdade, sem templates pesados.' },
    { icon: 'layers', title: 'Componentes', text: 'Peças reutilizáveis que mantêm o site coerente e fácil de ampliar.' },
    { icon: 'phone', title: 'Qualquer tela', text: 'O mesmo site se adapta ao celular, ao tablet e ao computador.' },
    { icon: 'shield', title: 'Fácil de manter', text: 'Uma base organizada para atualizar o conteúdo sem quebrar nada.' },
  ],
  stages: [
    { title: 'Estrutura', text: 'Primeiro, o esqueleto: cabeçalho, conteúdo principal e rodapé, com tags que descrevem o que é cada parte.' },
    { title: 'Componentes', text: 'O design é dividido em peças —hero, cards, botões— que são reutilizadas em todo o site.' },
    { title: 'Interações', text: 'Damos vida a cada elemento: estados ao passar o mouse, menu, formulários e respostas ao toque.' },
    { title: 'Desempenho', text: 'Otimizamos imagens e código e deixamos o site no ar, pronto para receber visitas.' },
  ],
  code: [
    { g: 0, t: '<header>' },
    { g: 0, t: '  <Logo /> <Menu />' },
    { g: 0, t: '</header>' },
    { g: 0, t: '<main>' },
    { g: 1, t: '  <Hero titulo="Seu negócio…" />' },
    { g: 1, t: '  <Servicos colunas={3} />' },
    { g: 2, t: '  <Botao aoTocar={reservar}>' },
    { g: 2, t: '    Reservar' },
    { g: 2, t: '  </Botao>' },
    { g: 0, t: '</main>' },
    { g: 3, t: '// imagens otimizadas · carregamento sob demanda' },
  ],
  responsive: {
    sizes: ['Celular', 'Tablet', 'Desktop'],
    group: 'Tamanho da tela',
    range: 'Largura da tela',
    note: 'Mova o controle: o conteúdo se reorganiza sozinho, como em um site de verdade.',
  },
  demos: {
    button: 'Agendar horário',
    states: { title: 'Estados', text: 'Passe o mouse ou toque: o botão responde para confirmar a ação.' },
    menuOpen: 'Abrir menu de exemplo',
    menuClose: 'Fechar menu de exemplo',
    menuItems: ['Início', 'Serviços', 'Contato'],
    menu: { title: 'Menu', text: 'Toque no ícone: um menu claro e confortável em telas pequenas.' },
    emailLabel: 'E-mail de exemplo',
    emailPlaceholder: 'voce@email.com',
    forms: { title: 'Formulários', text: 'Digite um e-mail: o campo avisa na hora se ele está escrito corretamente.' },
  },
  features: [
    'Formulário de contato',
    'Agendamento de horários',
    'Mapa e horários',
    'Galeria de imagens',
    'Vários idiomas',
    'Blog ou novidades',
    'Botão de WhatsApp',
    'SEO técnico básico',
  ],
  performance: [
    { icon: 'image', title: 'Imagens adaptadas', text: 'Cada imagem é entregue no tamanho e no formato certos para cada tela.' },
    { icon: 'bolt', title: 'Código leve', text: 'Só o necessário: menos peso significa que o site aparece mais rápido.' },
    { icon: 'gauge', title: 'Carregamento progressivo', text: 'Primeiro o que aparece na tela; o resto carrega quando for preciso.' },
  ],
  steps: [
    { title: 'Montagem', text: 'Construímos a estrutura a partir do design aprovado.' },
    { title: 'Funcionalidades', text: 'Adicionamos formulários, agendamentos e tudo o que o seu negócio precisar.' },
    { title: 'Testes', text: 'Revisamos em diferentes navegadores, celulares e tamanhos de tela.' },
    { title: 'Publicação', text: 'Colocamos o site no ar com o seu domínio, pronto para usar.' },
  ],
}

export default { es, en, 'pt-BR': ptBR }

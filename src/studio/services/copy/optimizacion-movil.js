// Textos de /servicios/optimizacion-movil (es · en · pt-BR).
// "Olivo" es un restaurante ficticio de la demo: su nombre no se traduce.
// `notes[].at` (progreso 0–1 en que se activa cada nota) está en OptimizacionMovil.jsx.

const es = {
  description:
    'Webs optimizadas para el móvil: diseñadas primero para el teléfono, cómodas de usar con una mano y rápidas de cargar.',
  hero: {
    title: 'Tu web, cómoda en la palma de la mano.',
    lead: 'Buena parte de tus clientes te buscará desde el teléfono. Diseñamos cada web primero para el móvil: clara, rápida y fácil de usar con una mano.',
  },
  sections: {
    why: {
      title: 'Por qué primero el móvil',
      intro: 'Una web pensada para el teléfono se siente natural en la mano y funciona igual de bien en el ordenador.',
    },
    steps: {
      title: 'Cómo la optimizamos',
      intro: 'Cada detalle se revisa en la pantalla donde más se usa.',
    },
  },
  demo: {
    aria: 'Demostración en un teléfono',
    eyebrow: 'Desliza para usarla',
  },
  notes: [
    { label: 'Inicio', title: 'Lo importante, arriba', text: 'Nombre, propuesta y botón de reserva visibles nada más abrir la web.' },
    { label: 'Acciones', title: 'Acciones a un toque', text: 'Llamar, cómo llegar u horario: botones grandes, pensados para el pulgar.' },
    { label: 'Carta', title: 'Textos legibles', text: 'Tamaños de letra y espacios cómodos, sin tener que hacer zoom.' },
    { label: 'Ubicación', title: 'Siempre a mano', text: 'La acción principal se mantiene visible mientras el cliente navega.' },
    { label: 'Reserva', title: 'Reserva en segundos', text: 'Formularios cortos y pasos claros, cómodos de completar con una mano.' },
  ],
  app: {
    eyebrow: 'Cocina mediterránea',
    title: 'Cocina de mercado en el centro.',
    text: 'Producto de temporada, en un espacio tranquilo y cercano.',
    book: 'Reservar mesa',
    menuLink: 'Ver carta',
    actions: ['Llamar', 'Cómo llegar', 'Horario'],
    menuTitle: 'Carta',
    menu: [
      { name: 'Arroz del día', note: 'Para dos personas', price: '16 €' },
      { name: 'Pulpo a la brasa', note: 'Patata y pimentón', price: '18 €' },
      { name: 'Ensalada de temporada', note: 'Verduras de mercado', price: '11 €' },
      { name: 'Tarta de queso', note: 'Receta de la casa', price: '6 €' },
    ],
    hoursTitle: 'Horario',
    hours: [
      { days: 'Lunes a jueves', time: '13:00 – 16:00 · 20:00 – 23:00' },
      { days: 'Viernes y sábado', time: '13:00 – 16:30 · 20:00 – 23:30' },
      { days: 'Domingo', time: '13:00 – 16:30' },
    ],
    whereTitle: 'Dónde estamos',
    address: 'Calle Mayor, 12 · Centro',
    bookingTitle: 'Reserva',
    fields: [
      { label: 'Personas', value: '2' },
      { label: 'Día', value: 'Hoy' },
      { label: 'Hora', value: '21:00' },
    ],
    footer: 'Olivo · Restaurante',
    sheetTitle: 'Tu reserva',
    summary: '2 personas · Hoy · 21:00',
    confirm: 'Confirmar reserva',
    doneTitle: 'Reserva enviada',
    doneText: 'Te enviaremos la confirmación.',
  },
  why: [
    { icon: 'touch', title: 'Pensada para el pulgar', text: 'Botones y enlaces con el tamaño y la separación justos para tocarlos sin fallar.' },
    { icon: 'type', title: 'Lectura cómoda', text: 'Textos que se leen sin hacer zoom y contenidos ordenados en una sola columna.' },
    { icon: 'bolt', title: 'Carga ligera', text: 'Imágenes y recursos adaptados para que la web responda bien también con datos móviles.' },
    { icon: 'call', title: 'Acciones directas', text: 'Llamar, escribir o llegar hasta ti con un solo toque.' },
  ],
  steps: [
    { title: 'Primero el móvil', text: 'Diseñamos cada página empezando por la pantalla pequeña.' },
    { title: 'Toques y tamaños', text: 'Ajustamos botones, textos y formularios al uso con una mano.' },
    { title: 'Pruebas reales', text: 'Revisamos la web en distintos teléfonos y navegadores.' },
    { title: 'Velocidad', text: 'Comprobamos que carga con fluidez antes de publicarla.' },
  ],
}

const en = {
  description:
    'Mobile-optimized websites: designed for the phone first, comfortable to use with one hand and quick to load.',
  hero: {
    title: 'Your website, comfortable in the palm of your hand.',
    lead: 'Many of your customers will look for you on their phone. We design every website for mobile first: clear, fast and easy to use with one hand.',
  },
  sections: {
    why: {
      title: 'Why mobile first',
      intro: 'A website designed for the phone feels natural in the hand and works just as well on a computer.',
    },
    steps: {
      title: 'How we optimize it',
      intro: 'Every detail is checked on the screen where it is used most.',
    },
  },
  demo: {
    aria: 'Demo on a phone',
    eyebrow: 'Scroll to use it',
  },
  notes: [
    { label: 'Home', title: 'What matters, up top', text: 'Name, offer and booking button visible as soon as the website opens.' },
    { label: 'Actions', title: 'One-tap actions', text: 'Call, directions or opening hours: large buttons designed for the thumb.' },
    { label: 'Menu', title: 'Readable text', text: 'Comfortable font sizes and spacing, with no need to zoom.' },
    { label: 'Location', title: 'Always at hand', text: 'The main action stays visible while the customer browses.' },
    { label: 'Booking', title: 'Book in seconds', text: 'Short forms and clear steps, easy to complete with one hand.' },
  ],
  app: {
    eyebrow: 'Mediterranean cuisine',
    title: 'Market-fresh cooking downtown.',
    text: 'Seasonal produce in a calm, welcoming space.',
    book: 'Book a table',
    menuLink: 'See the menu',
    actions: ['Call', 'Directions', 'Hours'],
    menuTitle: 'Menu',
    menu: [
      { name: 'Rice of the day', note: 'For two people', price: '16 €' },
      { name: 'Grilled octopus', note: 'Potato and paprika', price: '18 €' },
      { name: 'Seasonal salad', note: 'Market vegetables', price: '11 €' },
      { name: 'Cheesecake', note: 'House recipe', price: '6 €' },
    ],
    hoursTitle: 'Opening hours',
    hours: [
      { days: 'Monday to Thursday', time: '13:00 – 16:00 · 20:00 – 23:00' },
      { days: 'Friday and Saturday', time: '13:00 – 16:30 · 20:00 – 23:30' },
      { days: 'Sunday', time: '13:00 – 16:30' },
    ],
    whereTitle: 'Find us',
    address: 'Calle Mayor, 12 · City centre',
    bookingTitle: 'Booking',
    fields: [
      { label: 'Guests', value: '2' },
      { label: 'Day', value: 'Today' },
      { label: 'Time', value: '21:00' },
    ],
    footer: 'Olivo · Restaurant',
    sheetTitle: 'Your booking',
    summary: '2 guests · Today · 21:00',
    confirm: 'Confirm booking',
    doneTitle: 'Booking sent',
    doneText: "We'll send you the confirmation.",
  },
  why: [
    { icon: 'touch', title: 'Designed for the thumb', text: 'Buttons and links with just the right size and spacing to tap without missing.' },
    { icon: 'type', title: 'Comfortable reading', text: 'Text you can read without zooming and content arranged in a single column.' },
    { icon: 'bolt', title: 'Light loading', text: 'Images and resources adapted so the website also responds well on mobile data.' },
    { icon: 'call', title: 'Direct actions', text: 'Call, message or find your way to you with a single tap.' },
  ],
  steps: [
    { title: 'Mobile first', text: 'We design every page starting with the small screen.' },
    { title: 'Taps and sizes', text: 'We fine-tune buttons, text and forms for one-handed use.' },
    { title: 'Real-world testing', text: 'We check the website on different phones and browsers.' },
    { title: 'Speed', text: 'We make sure it loads smoothly before going live.' },
  ],
}

const ptBR = {
  description:
    'Sites otimizados para celular: pensados primeiro para o celular, confortáveis de usar com uma mão e rápidos para carregar.',
  hero: {
    title: 'O seu site, confortável na palma da mão.',
    lead: 'Boa parte dos seus clientes vai procurar você pelo celular. Criamos cada site primeiro para o celular: claro, rápido e fácil de usar com uma mão.',
  },
  sections: {
    why: {
      title: 'Por que primeiro o celular',
      intro: 'Um site pensado para o celular parece natural na mão e funciona igualmente bem no computador.',
    },
    steps: {
      title: 'Como otimizamos',
      intro: 'Cada detalhe é revisado na tela em que o site é mais usado.',
    },
  },
  demo: {
    aria: 'Demonstração em um celular',
    eyebrow: 'Role para usar',
  },
  notes: [
    { label: 'Início', title: 'O importante, no topo', text: 'Nome, proposta e botão de reserva visíveis assim que o site abre.' },
    { label: 'Ações', title: 'Ações a um toque', text: 'Ligar, como chegar ou horário: botões grandes, pensados para o polegar.' },
    { label: 'Cardápio', title: 'Textos legíveis', text: 'Tamanhos de letra e espaçamentos confortáveis, sem precisar dar zoom.' },
    { label: 'Localização', title: 'Sempre à mão', text: 'A ação principal continua visível enquanto o cliente navega.' },
    { label: 'Reserva', title: 'Reserva em segundos', text: 'Formulários curtos e etapas claras, fáceis de preencher com uma mão.' },
  ],
  app: {
    eyebrow: 'Cozinha mediterrânea',
    title: 'Cozinha de mercado no centro.',
    text: 'Ingredientes da estação, em um espaço tranquilo e acolhedor.',
    book: 'Reservar mesa',
    menuLink: 'Ver cardápio',
    actions: ['Ligar', 'Como chegar', 'Horário'],
    menuTitle: 'Cardápio',
    menu: [
      { name: 'Arroz do dia', note: 'Para duas pessoas', price: '16 €' },
      { name: 'Polvo na brasa', note: 'Batata e páprica', price: '18 €' },
      { name: 'Salada da estação', note: 'Legumes da feira', price: '11 €' },
      { name: 'Cheesecake', note: 'Receita da casa', price: '6 €' },
    ],
    hoursTitle: 'Horário',
    hours: [
      { days: 'Segunda a quinta', time: '13:00 – 16:00 · 20:00 – 23:00' },
      { days: 'Sexta e sábado', time: '13:00 – 16:30 · 20:00 – 23:30' },
      { days: 'Domingo', time: '13:00 – 16:30' },
    ],
    whereTitle: 'Onde estamos',
    address: 'Calle Mayor, 12 · Centro',
    bookingTitle: 'Reserva',
    fields: [
      { label: 'Pessoas', value: '2' },
      { label: 'Dia', value: 'Hoje' },
      { label: 'Hora', value: '21:00' },
    ],
    footer: 'Olivo · Restaurante',
    sheetTitle: 'Sua reserva',
    summary: '2 pessoas · Hoje · 21:00',
    confirm: 'Confirmar reserva',
    doneTitle: 'Reserva enviada',
    doneText: 'Enviaremos a confirmação para você.',
  },
  why: [
    { icon: 'touch', title: 'Pensado para o polegar', text: 'Botões e links com o tamanho e o espaçamento certos para tocar sem errar.' },
    { icon: 'type', title: 'Leitura confortável', text: 'Textos que se leem sem zoom e conteúdos organizados em uma única coluna.' },
    { icon: 'bolt', title: 'Carregamento leve', text: 'Imagens e recursos adaptados para que o site responda bem também com dados móveis.' },
    { icon: 'call', title: 'Ações diretas', text: 'Ligar, mandar mensagem ou chegar até você com um só toque.' },
  ],
  steps: [
    { title: 'Primeiro o celular', text: 'Criamos cada página começando pela tela pequena.' },
    { title: 'Toques e tamanhos', text: 'Ajustamos botões, textos e formulários para o uso com uma mão.' },
    { title: 'Testes reais', text: 'Revisamos o site em diferentes celulares e navegadores.' },
    { title: 'Velocidade', text: 'Verificamos se ele carrega com fluidez antes de publicar.' },
  ],
}

export default { es, en, 'pt-BR': ptBR }

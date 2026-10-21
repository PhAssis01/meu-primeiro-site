// Textos de la demo para barberías (es · en · pt-BR).
// Los textos entre corchetes son marcadores que se sustituyen por los datos
// reales de cada negocio. Sin precios: se definirán con cada barbería.
// Si cambias el título o la descripción, actualiza también scripts/prerender-routes.mjs.
import { useCopy } from '../../i18n/context'

const es = {
  meta: {
    title: 'Demo de web para barberías — Proyecto conceptual de PH Web Studio',
    description:
      'Demo de website para barberías creada por PH Web Studio: plantilla personalizable con servicios, galería y reserva de citas desde el móvil.',
  },
  // Texto que aparece en los espacios reservados para el logotipo y las fotos.
  brand: 'Nombre de tu barbería',
  logo: 'Tu logo',
  demoLabel: 'Demo para barberías — creada por PH Web Studio',
  demoShort: 'Demo para barberías',
  backPortfolio: 'Volver al portfolio',
  book: 'Reservar cita',
  common: {
    home: 'inicio',
    mainNav: 'Principal',
    mobileNav: 'Menú móvil',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    photoAria: (hint) => `Espacio para una foto de tu barbería${hint ? `: ${hint.toLowerCase()}` : ''}`,
  },
  nav: {
    inicio: 'Inicio',
    concepto: 'Concepto',
    servicios: 'Servicios',
    galeria: 'Galería',
    contacto: 'Contacto',
  },
  hero: {
    title: ['Estilo.', 'Precisión.', 'Carácter.'],
    text: 'Cortes cuidados al detalle, barba con forma y un espacio pensado para que disfrutes del momento.',
    services: 'Ver servicios',
    photo: 'Foto de tus cortes',
  },
  concept: {
    title: 'Una web pensada para barberías, lista para adaptarse a la identidad de cada negocio.',
    lead: 'Este proyecto es una demo creada por PH Web Studio. El nombre, el logotipo, las fotografías, los colores y los textos se sustituyen por los de tu barbería.',
    photo: 'Foto de tu local',
    palette: 'Paleta de ejemplo — se adapta a tu marca',
    items: [
      { title: 'Tu logotipo', text: 'El logotipo marca el tono de toda la web: colores, tipografía y estilo parten de tu marca.' },
      { title: 'Tu espacio', text: 'Las fotos de tu local definen la atmósfera y ayudan a elegir la paleta de la web.' },
      { title: 'Tu trabajo', text: 'Los cortes son los protagonistas. El diseño deja espacio para que tus fotografías hablen.' },
    ],
  },
  palette: ['Negro', 'Dorado', 'Marfil'],
  services: {
    title: 'Nuestros servicios',
    note: 'Precios por definir con el negocio.',
    price: 'Precio: por definir',
    book: 'Reservar',
    items: [
      { name: 'Corte', text: 'Clásico o actual, a tijera o a máquina, adaptado a tu tipo de pelo y a tu estilo.' },
      { name: 'Barba', text: 'Perfilado, rebaje y definición para una barba cuidada y con forma.' },
      { name: 'Corte + Barba', text: 'El servicio completo para salir con la imagen terminada de principio a fin.' },
      { name: 'Tratamientos', text: 'Cuidados para el pelo y la barba que completan el resultado.' },
    ],
  },
  gallery: {
    title: 'Tu espacio y tu trabajo',
    note: 'Espacios reservados para las fotos de tu barbería.',
    spaceHint: 'Foto del local',
    space: 'Tu espacio',
    cutHint: 'Foto de un corte',
    cuts: 'Tus cortes',
    cta: 'Tu próximo corte empieza aquí.',
  },
  booking: {
    title: 'Reserva tu cita',
    lead: 'Elige tu momento y déjanos cuidar de tu estilo.',
    small: 'En la web final, este formulario puede conectarse con el sistema de reservas que utilice la barbería.',
    name: 'Nombre',
    phone: 'Teléfono',
    service: 'Servicio',
    choose: 'Elige un servicio',
    date: 'Fecha',
    time: 'Hora',
    sent: 'Demostración: la solicitud no se ha enviado.',
    idle: 'Formulario de demostración: no envía datos.',
  },
  contact: {
    title: 'Visítanos',
    note: 'Datos de ejemplo: se completan con los de cada negocio.',
    items: [
      { title: 'Dirección', value: '[Dirección del local]' },
      { title: 'Teléfono', value: '[Teléfono de contacto]' },
      { title: 'Horario', value: '[Horario de apertura]' },
    ],
  },
}

const en = {
  meta: {
    title: 'Barbershop website demo — Concept project by PH Web Studio',
    description:
      'Barbershop website demo created by PH Web Studio: a customizable template with services, a gallery and appointment booking from the phone.',
  },
  brand: 'Your barbershop name',
  logo: 'Your logo',
  demoLabel: 'Barbershop demo — created by PH Web Studio',
  demoShort: 'Barbershop demo',
  backPortfolio: 'Back to portfolio',
  book: 'Book now',
  common: {
    home: 'home',
    mainNav: 'Main',
    mobileNav: 'Mobile menu',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    photoAria: (hint) => `Space for a photo of your barbershop${hint ? `: ${hint.toLowerCase()}` : ''}`,
  },
  nav: {
    inicio: 'Home',
    concepto: 'Concept',
    servicios: 'Services',
    galeria: 'Gallery',
    contacto: 'Contact',
  },
  hero: {
    title: ['Style.', 'Precision.', 'Character.'],
    text: 'Haircuts crafted down to the detail, a well-shaped beard and a space designed for you to enjoy the moment.',
    services: 'View services',
    photo: 'Photo of your haircuts',
  },
  concept: {
    title: "A website designed for barbershops, ready to adapt to each business's identity.",
    lead: "This project is a demo created by PH Web Studio. The name, logo, photos, colors and copy are replaced with your barbershop's own.",
    photo: 'Photo of your shop',
    palette: 'Sample palette — adapts to your brand',
    items: [
      { title: 'Your logo', text: 'Your logo sets the tone for the whole website: colors, typography and style all start from your brand.' },
      { title: 'Your space', text: "Photos of your shop set the atmosphere and help choose the website's palette." },
      { title: 'Your work', text: 'The haircuts take center stage. The design leaves room for your photos to speak.' },
    ],
  },
  palette: ['Black', 'Gold', 'Ivory'],
  services: {
    title: 'Our services',
    note: 'Prices to be set with the business.',
    price: 'Price: to be defined',
    book: 'Book',
    items: [
      { name: 'Haircut', text: 'Classic or modern, with scissors or clippers, tailored to your hair type and your style.' },
      { name: 'Beard', text: 'Shaping, trimming and definition for a well-groomed, well-shaped beard.' },
      { name: 'Haircut + Beard', text: 'The full service, so you leave with your look finished from start to finish.' },
      { name: 'Treatments', text: 'Hair and beard care that completes the result.' },
    ],
  },
  gallery: {
    title: 'Your space and your work',
    note: "Spaces reserved for your barbershop's photos.",
    spaceHint: 'Photo of the shop',
    space: 'Your space',
    cutHint: 'Photo of a haircut',
    cuts: 'Your haircuts',
    cta: 'Your next haircut starts here.',
  },
  booking: {
    title: 'Book your appointment',
    lead: 'Choose your time and let us take care of your style.',
    small: 'On the final website, this form can be connected to the booking system the barbershop uses.',
    name: 'Name',
    phone: 'Phone',
    service: 'Service',
    choose: 'Choose a service',
    date: 'Date',
    time: 'Time',
    sent: 'Demo: the request has not been sent.',
    idle: 'Demo form: no data is sent.',
  },
  contact: {
    title: 'Visit us',
    note: "Sample details: they are filled in with each business's own.",
    items: [
      { title: 'Address', value: '[Shop address]' },
      { title: 'Phone', value: '[Contact phone]' },
      { title: 'Opening hours', value: '[Opening hours]' },
    ],
  },
}

const ptBR = {
  meta: {
    title: 'Demo de site para barbearias — Projeto conceitual da PH Web Studio',
    description:
      'Demo de site para barbearias criada pela PH Web Studio: modelo personalizável com serviços, galeria e agendamento de horários pelo celular.',
  },
  brand: 'Nome da sua barbearia',
  logo: 'Seu logo',
  demoLabel: 'Demo para barbearias — criada pela PH Web Studio',
  demoShort: 'Demo para barbearias',
  backPortfolio: 'Voltar ao portfólio',
  book: 'Agendar horário',
  common: {
    home: 'início',
    mainNav: 'Principal',
    mobileNav: 'Menu mobile',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    photoAria: (hint) => `Espaço para uma foto da sua barbearia${hint ? `: ${hint.toLowerCase()}` : ''}`,
  },
  nav: {
    inicio: 'Início',
    concepto: 'Conceito',
    servicios: 'Serviços',
    galeria: 'Galeria',
    contacto: 'Contato',
  },
  hero: {
    title: ['Estilo.', 'Precisão.', 'Caráter.'],
    text: 'Cortes caprichados nos detalhes, barba bem desenhada e um espaço pensado para você aproveitar o momento.',
    services: 'Ver serviços',
    photo: 'Foto dos seus cortes',
  },
  concept: {
    title: 'Um site pensado para barbearias, pronto para se adaptar à identidade de cada negócio.',
    lead: 'Este projeto é uma demo criada pela PH Web Studio. O nome, o logotipo, as fotos, as cores e os textos são substituídos pelos da sua barbearia.',
    photo: 'Foto do seu espaço',
    palette: 'Paleta de exemplo — se adapta à sua marca',
    items: [
      { title: 'Seu logotipo', text: 'O logotipo dá o tom de todo o site: cores, tipografia e estilo partem da sua marca.' },
      { title: 'Seu espaço', text: 'As fotos do seu espaço definem a atmosfera e ajudam a escolher a paleta do site.' },
      { title: 'Seu trabalho', text: 'Os cortes são os protagonistas. O design deixa espaço para que as suas fotos falem por si.' },
    ],
  },
  palette: ['Preto', 'Dourado', 'Marfim'],
  services: {
    title: 'Nossos serviços',
    note: 'Preços a definir com o negócio.',
    price: 'Preço: a definir',
    book: 'Agendar',
    items: [
      { name: 'Corte', text: 'Clássico ou moderno, na tesoura ou na máquina, adaptado ao seu tipo de cabelo e ao seu estilo.' },
      { name: 'Barba', text: 'Desenho, acabamento e definição para uma barba bem cuidada e com forma.' },
      { name: 'Corte + Barba', text: 'O serviço completo para sair com o visual pronto do começo ao fim.' },
      { name: 'Tratamentos', text: 'Cuidados para o cabelo e a barba que completam o resultado.' },
    ],
  },
  gallery: {
    title: 'Seu espaço e seu trabalho',
    note: 'Espaços reservados para as fotos da sua barbearia.',
    spaceHint: 'Foto do espaço',
    space: 'Seu espaço',
    cutHint: 'Foto de um corte',
    cuts: 'Seus cortes',
    cta: 'Seu próximo corte começa aqui.',
  },
  booking: {
    title: 'Agende seu horário',
    lead: 'Escolha o seu horário e deixe com a gente o cuidado com o seu estilo.',
    small: 'No site final, este formulário pode ser conectado ao sistema de agendamento que a barbearia usa.',
    name: 'Nome',
    phone: 'Telefone',
    service: 'Serviço',
    choose: 'Escolha um serviço',
    date: 'Data',
    time: 'Horário',
    sent: 'Demonstração: a solicitação não foi enviada.',
    idle: 'Formulário de demonstração: não envia dados.',
  },
  contact: {
    title: 'Visite-nos',
    note: 'Dados de exemplo: são preenchidos com os de cada negócio.',
    items: [
      { title: 'Endereço', value: '[Endereço do espaço]' },
      { title: 'Telefone', value: '[Telefone de contato]' },
      { title: 'Horário', value: '[Horário de funcionamento]' },
    ],
  },
}

export const BARBER_COPY = { es, en, 'pt-BR': ptBR }

// Textos de la demo en el idioma activo.
export const useBarberCopy = () => useCopy(BARBER_COPY)

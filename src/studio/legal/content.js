// Textos legales de PH Web Studio (Aviso legal, Privacidad, Cookies) en los tres idiomas.
//
// · Los datos del titular NO se escriben aquí: salen de LEGAL en ../data.js.
// · Marcadores que se sustituyen al mostrar el texto (ver LegalPage.jsx):
//   {owner} {taxId} {address} {registry} {email} {site} {retention}
//   {notice} {privacy} {cookies}  → enlaces internos a cada página legal
//   {aepd}                        → enlace a www.aepd.es
// · Describen SOLO lo que la web hace de verdad (revisado el 2026-11-12):
//   sin cookies, sin analítica, sin publicidad, sin contenidos de terceros
//   incrustados, fuentes servidas desde el propio dominio, formulario que
//   abre la aplicación de correo del visitante (no envía datos a un servidor).
//   Si algo de esto cambia (analítica, formulario con envío, mapas, vídeos…),
//   hay que actualizar estos textos ANTES de publicarlo.
// · La versión en español es la de referencia; EN y PT-BR son traducciones.

const es = {
  ui: {
    tag: 'Información legal',
    updated: 'Última actualización',
    back: 'Volver al inicio',
    backShort: 'Inicio',
    nav: 'Información legal',
    links: { notice: 'Aviso legal', privacy: 'Privacidad', cookies: 'Cookies' },
    linkNames: { notice: 'Aviso legal', privacy: 'Política de privacidad', cookies: 'Política de cookies' },
    pending: 'pendiente de publicación',
    pendingTitle: 'Información pendiente de completar',
    pendingNotice: {
      notice:
        'Algunos datos identificativos del titular exigidos por la normativa (art. 10 LSSI-CE y art. 13 RGPD) todavía no se han publicado y aparecen marcados como «pendiente de publicación». Se completarán lo antes posible. Mientras tanto, para cualquier consulta o para ejercer tus derechos de protección de datos, escribe a {email}.',
      privacy:
        'La identificación completa del responsable del tratamiento que exige la normativa (art. 13 RGPD) está pendiente de publicación y se incorporará a esta política lo antes posible. Mientras tanto, para cualquier consulta o para ejercer tus derechos de protección de datos, escribe a {email}.',
    },
    registryNone: 'No consta inscripción en un registro público.',
    versionNote:
      'Este texto está disponible en español, inglés y portugués. En caso de discrepancia entre versiones, prevalece la versión en español.',
  },
  pages: {
    notice: {
      title: 'Aviso legal',
      description:
        'Aviso legal de PH Web Studio: datos identificativos del titular del sitio web, condiciones de uso y responsabilidad.',
      sections: [
        {
          title: '1. Datos identificativos del titular',
          blocks: [
            'Datos identificativos del titular de este sitio web, que opera bajo la marca «PH Web Studio», según el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE):',
            {
              list: [
                'Titular: {owner}',
                'NIF / NIE / CIF: {taxId}',
                'Domicilio: {address}',
                'Correo electrónico de contacto: {email}',
                'Datos registrales: {registry}',
                'Sitio web: {site}',
              ],
            },
          ],
        },
        {
          title: '2. Objeto del sitio web',
          blocks: [
            'Este sitio web informa sobre los servicios de diseño y desarrollo web de PH Web Studio y muestra ejemplos de trabajos. No permite contratar ni pagar servicios en línea y no publica precios.',
            'Cualquier encargo se formaliza de forma independiente mediante un presupuesto o contrato con sus propias condiciones, que se facilitan antes de la contratación.',
          ],
        },
        {
          title: '3. Condiciones de uso',
          blocks: [
            'El acceso a este sitio web es gratuito y no requiere registro. Quien lo utiliza se compromete a hacerlo de forma lícita, de buena fe y sin dañar el sitio, su funcionamiento ni los derechos de terceros.',
          ],
        },
        {
          title: '4. Propiedad intelectual e industrial',
          blocks: [
            'Los textos, el diseño, el código y los elementos gráficos de este sitio pertenecen a su titular o se usan con licencia. No está permitida su reproducción, distribución o transformación con fines comerciales sin autorización previa, salvo en los casos permitidos por la ley.',
            'Las tipografías utilizadas (Space Grotesk, Inter, Cormorant Garamond y Manrope) se distribuyen con licencia SIL Open Font License.',
            'Los proyectos marcados como «demo» o «concepto» son ejemplos creados por PH Web Studio. Los nombres, textos e imágenes de esas demos son ilustrativos y no corresponden a negocios reales.',
          ],
        },
        {
          title: '5. Responsabilidad',
          blocks: [
            'El titular procura que la información de este sitio sea correcta y esté actualizada, pero no garantiza la ausencia de errores ni la disponibilidad ininterrumpida del sitio. Se adoptan medidas razonables de seguridad, aunque ningún sistema conectado a internet es completamente invulnerable.',
            'Si este sitio incluye enlaces a páginas de terceros, el titular no controla su contenido ni se responsabiliza de él. Si tienes conocimiento de algún contenido ilícito en un sitio enlazado, puedes comunicarlo a {email} y se retirará el enlace.',
          ],
        },
        {
          title: '6. Protección de datos y cookies',
          blocks: [
            'El tratamiento de datos personales se explica en la {privacy}. El uso de cookies y tecnologías similares se explica en la {cookies}.',
          ],
        },
        {
          title: '7. Legislación aplicable',
          blocks: [
            'Este aviso legal se rige por la legislación española. Las controversias se someterán a los juzgados y tribunales que correspondan conforme a la normativa aplicable; si quien reclama tiene la condición de consumidor, serán competentes los de su domicilio cuando así lo establezca la ley.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Política de privacidad',
      description:
        'Política de privacidad de PH Web Studio: qué datos personales se tratan, para qué, con qué base legal, durante cuánto tiempo y cómo ejercer tus derechos.',
      sections: [
        {
          title: '1. Información general',
          blocks: [
            'Esta Política de Privacidad describe cómo se gestiona la información personal que pueda facilitarse a través del sitio web PH Web Studio, así como las finalidades y condiciones aplicables a su tratamiento.',
            'PH Web Studio mantiene el compromiso de proteger la privacidad de los visitantes y de tratar los datos personales de forma responsable, transparente y conforme a la normativa aplicable.',
            'Para cualquier cuestión relacionada con esta política o con tus datos personales, puedes escribir a {email}.',
          ],
        },
        {
          title: '2. Qué datos tratamos y de dónde proceden',
          blocks: [
            'Consultas por correo electrónico. El formulario de contacto de esta web no envía datos a ningún servidor: al pulsar el botón, se abre tu propia aplicación de correo con el mensaje preparado, y solo recibimos los datos si decides enviarlo desde allí. Lo mismo ocurre si nos escribes directamente a {email}. En ambos casos tratamos tu nombre, tu dirección de correo electrónico, el contenido del mensaje y cualquier otro dato que decidas incluir.',
            'Datos técnicos de navegación. Para mostrar la web y protegerla frente a ataques, nuestro proveedor de alojamiento procesa datos técnicos de cada visita, como la dirección IP, el tipo de navegador, la página solicitada y la fecha y hora. No usamos herramientas de analítica, publicidad ni perfiles de usuario.',
            'Preferencias guardadas en tu dispositivo. El idioma que eliges y si ya has visto la animación de bienvenida se guardan únicamente en tu navegador y no se nos envían. Más detalles en la {cookies}.',
            'Te pedimos que no incluyas en tus mensajes datos especialmente protegidos (salud, ideología, etc.), ya que no son necesarios para atender tu consulta.',
          ],
        },
        {
          title: '3. Finalidades y base legal',
          blocks: [
            {
              list: [
                'Responder a tus consultas y, si lo solicitas, preparar un presupuesto. Base legal: aplicación de medidas precontractuales a petición tuya (art. 6.1.b RGPD) y, para consultas generales, nuestro interés legítimo en atender las comunicaciones que recibimos (art. 6.1.f RGPD).',
                'Si llegas a encargar un servicio: gestionar la relación contractual y cumplir las obligaciones fiscales y contables. Base legal: ejecución del contrato (art. 6.1.b RGPD) y cumplimiento de obligaciones legales (art. 6.1.c RGPD).',
                'Mostrar la web de forma segura (datos técnicos de navegación). Base legal: interés legítimo en el funcionamiento y la seguridad del sitio (art. 6.1.f RGPD).',
              ],
            },
            'No enviamos comunicaciones comerciales ni boletines, y no tomamos decisiones automatizadas ni elaboramos perfiles con tus datos.',
          ],
        },
        {
          title: '4. Durante cuánto tiempo conservamos los datos',
          blocks: [
            {
              list: [
                'Consultas que no terminan en un encargo: el tiempo necesario para responder y hacer seguimiento, con un máximo de {retention} meses desde el último contacto. Después se eliminan.',
                'Clientes: mientras dure la relación y, después, durante los plazos legales de conservación (por ejemplo, obligaciones mercantiles y fiscales) y de prescripción de posibles responsabilidades.',
                'Datos técnicos de navegación: los conserva el proveedor de alojamiento durante los plazos que fija su propia política, normalmente breves.',
              ],
            },
          ],
        },
        {
          title: '5. Destinatarios y encargados del tratamiento',
          blocks: [
            'No cedemos tus datos a terceros, salvo obligación legal. Para prestar el servicio utilizamos los siguientes proveedores, que tratan datos por nuestra cuenta o en la medida necesaria para su servicio:',
            {
              list: [
                'Cloudflare, Inc. (EE. UU.): alojamiento y entrega de la web, y protección frente a ataques.',
                'Google (servicio de correo electrónico Gmail): recepción y gestión de los correos que nos envías.',
              ],
            },
          ],
        },
        {
          title: '6. Transferencias internacionales',
          blocks: [
            'Los proveedores indicados pueden tratar datos fuera del Espacio Económico Europeo, en particular en Estados Unidos. Estas transferencias se amparan en el Marco de Privacidad de Datos UE-EE. UU. (decisión de adecuación de la Comisión Europea de 10 de julio de 2023), en el que dichas empresas declaran estar adheridas, y, en su caso, en las cláusulas contractuales tipo aprobadas por la Comisión Europea.',
          ],
        },
        {
          title: '7. Tus derechos',
          blocks: [
            'Puedes ejercer en cualquier momento tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad escribiendo a {email}. Indica qué derecho quieres ejercer; solo te pediremos información adicional para verificar tu identidad si existen dudas razonables sobre ella.',
            'Responderemos en el plazo de un mes, ampliable en dos meses más cuando la complejidad o el número de solicitudes lo justifiquen, en cuyo caso te lo comunicaremos.',
            'Si consideras que no hemos atendido correctamente tus derechos, puedes presentar una reclamación ante la Agencia Española de Protección de Datos ({aepd}, C/ Jorge Juan 6, 28001 Madrid) o ante la autoridad de control de tu país de residencia en la Unión Europea.',
          ],
        },
        {
          title: '8. Menores de edad',
          blocks: [
            'Nuestros servicios se dirigen a negocios y profesionales. No tratamos conscientemente datos de menores de 14 años. Si eres menor de esa edad, no nos envíes datos personales.',
          ],
        },
        {
          title: '9. Seguridad',
          blocks: [
            'La web se sirve mediante conexión cifrada (HTTPS) y aplicamos medidas técnicas y organizativas razonables para proteger los datos. Aun así, ningún sistema de transmisión o almacenamiento es completamente seguro.',
          ],
        },
        {
          title: '10. Cambios en esta política',
          blocks: [
            'Podemos actualizar esta política para reflejar cambios en la web o en la normativa. La fecha de la última actualización figura al principio de esta página.',
          ],
        },
      ],
    },
    cookies: {
      title: 'Política de cookies',
      description:
        'Política de cookies de PH Web Studio: esta web no utiliza cookies de analítica, publicidad ni seguimiento. Información sobre el almacenamiento local del navegador.',
      sections: [
        {
          title: '1. ¿Qué son las cookies?',
          blocks: [
            'Las cookies son pequeños archivos que un sitio web guarda en tu navegador. Existen tecnologías similares, como el almacenamiento local (localStorage y sessionStorage), que también guardan información en tu dispositivo.',
          ],
        },
        {
          title: '2. Cookies que utiliza esta web',
          blocks: [
            'Esta web no instala cookies propias ni de terceros. No utilizamos herramientas de analítica, publicidad, redes sociales ni contenidos de terceros incrustados (mapas, vídeos, etc.), y las tipografías se sirven desde nuestro propio dominio.',
            'Por eso no mostramos un aviso de consentimiento de cookies: no hay nada que requiera tu consentimiento.',
          ],
        },
        {
          title: '3. Almacenamiento local del navegador',
          blocks: [
            'Para que la web funcione como esperas, guardamos en tu navegador la siguiente información técnica. No contiene datos personales, no se nos envía y no se usa para seguirte:',
            {
              table: {
                head: ['Nombre', 'Tipo', 'Finalidad', 'Duración'],
                rows: [
                  ['ph-lang', 'localStorage', 'Recordar el idioma que eliges (solo se guarda si cambias de idioma).', 'Hasta que lo borres desde tu navegador.'],
                  ['ph-intro-seen', 'sessionStorage', 'No repetir la animación de bienvenida durante la misma visita.', 'Se borra al cerrar la pestaña.'],
                ],
              },
            },
            'Se trata de almacenamiento estrictamente necesario para prestar un servicio que tú solicitas (recordar tu idioma, por ejemplo), por lo que está exento de consentimiento según el artículo 22.2 de la LSSI-CE.',
          ],
        },
        {
          title: '4. Proveedor de alojamiento',
          blocks: [
            'La web está alojada en Cloudflare. En la revisión realizada en la fecha indicada arriba, la web no instalaba ninguna cookie. Si en algún momento los sistemas de seguridad de Cloudflare detectan tráfico sospechoso, pueden instalar cookies técnicas de protección (por ejemplo, «__cf_bm» o «cf_clearance»), que son estrictamente necesarias y no se usan para analítica ni publicidad.',
          ],
        },
        {
          title: '5. Cómo borrar o bloquear estos datos',
          blocks: [
            'Puedes borrar las cookies y el almacenamiento local en cualquier momento desde la configuración de tu navegador (normalmente en «Privacidad» o «Datos de sitios»). Si lo haces, la web seguirá funcionando y volverá a mostrarse en español.',
          ],
        },
        {
          title: '6. Cambios',
          blocks: [
            'Si en el futuro incorporamos cookies o tecnologías que requieran tu consentimiento (por ejemplo, analítica), actualizaremos esta política y te pediremos el consentimiento antes de activarlas.',
          ],
        },
      ],
    },
  },
}

const en = {
  ui: {
    tag: 'Legal information',
    updated: 'Last updated',
    back: 'Back to home',
    backShort: 'Home',
    nav: 'Legal information',
    links: { notice: 'Legal notice', privacy: 'Privacy', cookies: 'Cookies' },
    linkNames: { notice: 'Legal Notice', privacy: 'Privacy Policy', cookies: 'Cookie Policy' },
    pending: 'pending publication',
    pendingTitle: 'Information pending completion',
    pendingNotice: {
      notice:
        'Some of the owner identification details required by law (art. 10 LSSI-CE and art. 13 GDPR) have not yet been published and are marked as "pending publication". They will be added as soon as possible. In the meantime, for any enquiry or to exercise your data protection rights, write to {email}.',
      privacy:
        'The full identification of the data controller required by law (art. 13 GDPR) is pending publication and will be added to this policy as soon as possible. In the meantime, for any enquiry or to exercise your data protection rights, write to {email}.',
    },
    registryNone: 'Not registered in a public registry.',
    versionNote:
      'This text is available in Spanish, English and Portuguese. In the event of any discrepancy, the Spanish version prevails.',
  },
  pages: {
    notice: {
      title: 'Legal notice',
      description:
        'PH Web Studio legal notice: identification of the website owner, terms of use and liability.',
      sections: [
        {
          title: '1. Website owner',
          blocks: [
            'Identification details of the owner of this website, which operates under the brand "PH Web Studio", as required by article 10 of Spanish Law 34/2002 of 11 July on Information Society Services and Electronic Commerce (LSSI-CE):',
            {
              list: [
                'Owner: {owner}',
                'Tax ID (NIF / NIE / CIF): {taxId}',
                'Address: {address}',
                'Contact email: {email}',
                'Registry details: {registry}',
                'Website: {site}',
              ],
            },
          ],
        },
        {
          title: '2. Purpose of the website',
          blocks: [
            'This website provides information about the web design and development services of PH Web Studio and shows examples of work. Services cannot be purchased or paid for online, and no prices are published.',
            'Any project is agreed separately through a quote or contract with its own terms, which are provided before any commitment.',
          ],
        },
        {
          title: '3. Terms of use',
          blocks: [
            'Access to this website is free and does not require registration. Users agree to use it lawfully, in good faith and without harming the website, its operation or the rights of others.',
          ],
        },
        {
          title: '4. Intellectual property',
          blocks: [
            'The texts, design, code and graphics of this website belong to its owner or are used under licence. They may not be reproduced, distributed or modified for commercial purposes without prior permission, except where permitted by law.',
            'The typefaces used (Space Grotesk, Inter, Cormorant Garamond and Manrope) are distributed under the SIL Open Font License.',
            'Projects labelled "demo" or "concept" are examples created by PH Web Studio. Names, texts and images in those demos are illustrative and do not belong to real businesses.',
          ],
        },
        {
          title: '5. Liability',
          blocks: [
            'The owner aims to keep the information on this website accurate and up to date, but does not guarantee that it is error-free or that the website will always be available. Reasonable security measures are in place, although no system connected to the internet is completely invulnerable.',
            'Where this website links to third-party sites, the owner does not control and is not responsible for their content. If you become aware of unlawful content on a linked site, please report it to {email} and the link will be removed.',
          ],
        },
        {
          title: '6. Data protection and cookies',
          blocks: [
            'The processing of personal data is explained in the {privacy}. The use of cookies and similar technologies is explained in the {cookies}.',
          ],
        },
        {
          title: '7. Governing law',
          blocks: [
            'This legal notice is governed by Spanish law. Disputes will be submitted to the courts that have jurisdiction under the applicable rules; where the claimant is a consumer, the courts of their place of residence will have jurisdiction where the law so provides.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy policy',
      description:
        'PH Web Studio privacy policy: what personal data is processed, why, on what legal basis, for how long and how to exercise your rights.',
      sections: [
        {
          title: '1. General information',
          blocks: [
            'This Privacy Policy describes how personal information that may be provided through the PH Web Studio website is handled, as well as the purposes and conditions that apply to its processing.',
            'PH Web Studio is committed to protecting the privacy of its visitors and to processing personal data responsibly, transparently and in accordance with the applicable regulations.',
            'For any question about this policy or your personal data, you can write to {email}.',
          ],
        },
        {
          title: '2. What data we process and where it comes from',
          blocks: [
            'Email enquiries. The contact form on this website does not send data to any server: when you press the button, your own email app opens with the message ready, and we only receive the data if you choose to send it from there. The same applies if you write to {email} directly. In both cases we process your name, your email address, the content of your message and any other information you choose to include.',
            'Technical browsing data. To display the website and protect it against attacks, our hosting provider processes technical data about each visit, such as IP address, browser type, requested page and date and time. We do not use analytics, advertising or user profiling tools.',
            'Preferences stored on your device. The language you choose and whether you have already seen the welcome animation are stored only in your browser and are not sent to us. More details in the {cookies}.',
            'Please do not include special categories of data (health, beliefs, etc.) in your messages, as they are not needed to answer your enquiry.',
          ],
        },
        {
          title: '3. Purposes and legal basis',
          blocks: [
            {
              list: [
                'Answering your enquiries and, if you ask, preparing a quote. Legal basis: steps taken at your request prior to entering into a contract (Art. 6(1)(b) GDPR) and, for general enquiries, our legitimate interest in replying to the messages we receive (Art. 6(1)(f) GDPR).',
                'If you commission a service: managing the contractual relationship and meeting tax and accounting obligations. Legal basis: performance of a contract (Art. 6(1)(b) GDPR) and compliance with legal obligations (Art. 6(1)(c) GDPR).',
                'Serving the website securely (technical browsing data). Legal basis: legitimate interest in the operation and security of the website (Art. 6(1)(f) GDPR).',
              ],
            },
            'We do not send marketing communications or newsletters, and we do not make automated decisions or build profiles using your data.',
          ],
        },
        {
          title: '4. How long we keep data',
          blocks: [
            {
              list: [
                'Enquiries that do not lead to a project: as long as needed to reply and follow up, up to a maximum of {retention} months from the last contact. They are then deleted.',
                'Clients: for the duration of the relationship and, afterwards, for the legally required retention periods (for example, commercial and tax obligations) and limitation periods for possible claims.',
                "Technical browsing data: kept by the hosting provider for the periods set in its own policy, which are usually short.",
              ],
            },
          ],
        },
        {
          title: '5. Recipients and processors',
          blocks: [
            'We do not share your data with third parties unless required by law. To provide the service we use the following providers, which process data on our behalf or to the extent necessary for their service:',
            {
              list: [
                'Cloudflare, Inc. (USA): website hosting and delivery, and protection against attacks.',
                'Google (Gmail email service): receiving and managing the emails you send us.',
              ],
            },
          ],
        },
        {
          title: '6. International transfers',
          blocks: [
            'These providers may process data outside the European Economic Area, in particular in the United States. Such transfers rely on the EU-U.S. Data Privacy Framework (European Commission adequacy decision of 10 July 2023), to which these companies state they adhere, and, where applicable, on the Standard Contractual Clauses approved by the European Commission.',
          ],
        },
        {
          title: '7. Your rights',
          blocks: [
            'You may at any time exercise your rights of access, rectification, erasure, objection, restriction of processing and data portability by writing to {email}. Please state which right you wish to exercise; we will only ask for additional information to verify your identity if there are reasonable doubts about it.',
            'We will reply within one month. This period may be extended by two further months where necessary, taking into account the complexity and number of requests, in which case we will let you know.',
            'If you believe we have not handled your rights properly, you may lodge a complaint with the Spanish Data Protection Agency ({aepd}, C/ Jorge Juan 6, 28001 Madrid, Spain) or with the supervisory authority of your country of residence in the European Union.',
          ],
        },
        {
          title: '8. Children',
          blocks: [
            'Our services are aimed at businesses and professionals. We do not knowingly process data of children under 14. If you are under that age, please do not send us personal data.',
          ],
        },
        {
          title: '9. Security',
          blocks: [
            'The website is served over an encrypted connection (HTTPS) and we apply reasonable technical and organisational measures to protect data. Even so, no transmission or storage system is completely secure.',
          ],
        },
        {
          title: '10. Changes to this policy',
          blocks: [
            'We may update this policy to reflect changes to the website or to the law. The date of the last update is shown at the top of this page.',
          ],
        },
      ],
    },
    cookies: {
      title: 'Cookie policy',
      description:
        'PH Web Studio cookie policy: this website does not use analytics, advertising or tracking cookies. Information about browser local storage.',
      sections: [
        {
          title: '1. What are cookies?',
          blocks: [
            'Cookies are small files that a website stores in your browser. Similar technologies, such as local storage (localStorage and sessionStorage), also store information on your device.',
          ],
        },
        {
          title: '2. Cookies used by this website',
          blocks: [
            'This website does not set its own or third-party cookies. We do not use analytics, advertising, social media tools or embedded third-party content (maps, videos, etc.), and the typefaces are served from our own domain.',
            'That is why we do not show a cookie consent banner: there is nothing that requires your consent.',
          ],
        },
        {
          title: '3. Browser local storage',
          blocks: [
            'So that the website works as you expect, we store the following technical information in your browser. It contains no personal data, is not sent to us and is not used to track you:',
            {
              table: {
                head: ['Name', 'Type', 'Purpose', 'Duration'],
                rows: [
                  ['ph-lang', 'localStorage', 'Remembers the language you choose (only stored if you change language).', 'Until you delete it in your browser.'],
                  ['ph-intro-seen', 'sessionStorage', 'Avoids replaying the welcome animation during the same visit.', 'Deleted when you close the tab.'],
                ],
              },
            },
            'This storage is strictly necessary to provide a service you request (such as remembering your language), so it is exempt from consent under article 22.2 of the Spanish LSSI-CE.',
          ],
        },
        {
          title: '4. Hosting provider',
          blocks: [
            "The website is hosted on Cloudflare. At the review carried out on the date shown above, the website set no cookies. If Cloudflare's security systems detect suspicious traffic, they may set technical security cookies (for example \"__cf_bm\" or \"cf_clearance\"), which are strictly necessary and are not used for analytics or advertising.",
          ],
        },
        {
          title: '5. How to delete or block this data',
          blocks: [
            'You can delete cookies and local storage at any time in your browser settings (usually under "Privacy" or "Site data"). If you do, the website will keep working and will be shown in Spanish again.',
          ],
        },
        {
          title: '6. Changes',
          blocks: [
            'If we ever add cookies or technologies that require your consent (for example, analytics), we will update this policy and ask for your consent before enabling them.',
          ],
        },
      ],
    },
  },
}

const ptBR = {
  ui: {
    tag: 'Informações legais',
    updated: 'Última atualização',
    back: 'Voltar ao início',
    backShort: 'Início',
    nav: 'Informações legais',
    links: { notice: 'Aviso legal', privacy: 'Privacidade', cookies: 'Cookies' },
    linkNames: { notice: 'Aviso legal', privacy: 'Política de privacidade', cookies: 'Política de cookies' },
    pending: 'pendente de publicação',
    pendingTitle: 'Informações pendentes',
    pendingNotice: {
      notice:
        'Alguns dados de identificação do titular exigidos pela legislação (art. 10 da LSSI-CE e art. 13 do RGPD) ainda não foram publicados e aparecem marcados como «pendente de publicação». Serão completados o quanto antes. Enquanto isso, para qualquer dúvida ou para exercer os seus direitos de proteção de dados, escreva para {email}.',
      privacy:
        'A identificação completa do responsável pelo tratamento exigida pela legislação (art. 13 do RGPD) está pendente de publicação e será incluída nesta política o quanto antes. Enquanto isso, para qualquer dúvida ou para exercer os seus direitos de proteção de dados, escreva para {email}.',
    },
    registryNone: 'Sem inscrição em registro público.',
    versionNote:
      'Este texto está disponível em espanhol, inglês e português. Em caso de divergência entre as versões, prevalece a versão em espanhol.',
  },
  pages: {
    notice: {
      title: 'Aviso legal',
      description:
        'Aviso legal da PH Web Studio: identificação do titular do site, condições de uso e responsabilidade.',
      sections: [
        {
          title: '1. Identificação do titular',
          blocks: [
            'Dados de identificação do titular deste site, que opera sob a marca «PH Web Studio», conforme exigido pelo artigo 10 da Lei espanhola 34/2002, de 11 de julho, de Serviços da Sociedade da Informação e de Comércio Eletrônico (LSSI-CE):',
            {
              list: [
                'Titular: {owner}',
                'NIF / NIE / CIF: {taxId}',
                'Endereço: {address}',
                'E-mail de contato: {email}',
                'Dados de registro: {registry}',
                'Site: {site}',
              ],
            },
          ],
        },
        {
          title: '2. Objeto do site',
          blocks: [
            'Este site apresenta os serviços de design e desenvolvimento web da PH Web Studio e mostra exemplos de trabalhos. Não é possível contratar nem pagar serviços on-line, e não são publicados preços.',
            'Qualquer projeto é formalizado separadamente por meio de um orçamento ou contrato com condições próprias, informadas antes da contratação.',
          ],
        },
        {
          title: '3. Condições de uso',
          blocks: [
            'O acesso a este site é gratuito e não exige cadastro. Quem o utiliza compromete-se a fazê-lo de forma lícita, de boa-fé e sem prejudicar o site, o seu funcionamento ou os direitos de terceiros.',
          ],
        },
        {
          title: '4. Propriedade intelectual',
          blocks: [
            'Os textos, o design, o código e os elementos gráficos deste site pertencem ao seu titular ou são usados sob licença. Não é permitida a sua reprodução, distribuição ou modificação para fins comerciais sem autorização prévia, salvo nos casos permitidos por lei.',
            'As fontes utilizadas (Space Grotesk, Inter, Cormorant Garamond e Manrope) são distribuídas sob a licença SIL Open Font License.',
            'Os projetos marcados como «demo» ou «conceito» são exemplos criados pela PH Web Studio. Os nomes, textos e imagens dessas demos são ilustrativos e não correspondem a negócios reais.',
          ],
        },
        {
          title: '5. Responsabilidade',
          blocks: [
            'O titular procura manter as informações deste site corretas e atualizadas, mas não garante a ausência de erros nem a disponibilidade ininterrupta do site. São adotadas medidas de segurança razoáveis, embora nenhum sistema conectado à internet seja completamente invulnerável.',
            'Se este site incluir links para páginas de terceiros, o titular não controla nem se responsabiliza pelo seu conteúdo. Se você souber de algum conteúdo ilícito em um site vinculado, comunique a {email} e o link será removido.',
          ],
        },
        {
          title: '6. Proteção de dados e cookies',
          blocks: [
            'O tratamento de dados pessoais é explicado na {privacy}. O uso de cookies e tecnologias semelhantes é explicado na {cookies}.',
          ],
        },
        {
          title: '7. Legislação aplicável',
          blocks: [
            'Este aviso legal rege-se pela legislação espanhola. Os litígios serão submetidos aos juízos e tribunais competentes conforme a legislação aplicável; se quem reclama for consumidor, serão competentes os do seu domicílio quando a lei assim o determinar.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Política de privacidade',
      description:
        'Política de privacidade da PH Web Studio: quais dados pessoais são tratados, para quê, com que base legal, por quanto tempo e como exercer os seus direitos.',
      sections: [
        {
          title: '1. Informações gerais',
          blocks: [
            'Esta Política de Privacidade descreve como são geridas as informações pessoais que possam ser fornecidas por meio do site PH Web Studio, bem como as finalidades e condições aplicáveis ao seu tratamento.',
            'A PH Web Studio mantém o compromisso de proteger a privacidade dos visitantes e de tratar os dados pessoais de forma responsável, transparente e de acordo com a legislação aplicável.',
            'Para qualquer questão relacionada com esta política ou com os seus dados pessoais, você pode escrever para {email}.',
          ],
        },
        {
          title: '2. Quais dados tratamos e de onde vêm',
          blocks: [
            'Contatos por e-mail. O formulário de contato deste site não envia dados a nenhum servidor: ao clicar no botão, abre-se o seu próprio aplicativo de e-mail com a mensagem pronta, e só recebemos os dados se você decidir enviá-la de lá. O mesmo acontece se você nos escrever diretamente para {email}. Em ambos os casos tratamos o seu nome, o seu endereço de e-mail, o conteúdo da mensagem e quaisquer outros dados que você decida incluir.',
            'Dados técnicos de navegação. Para exibir o site e protegê-lo contra ataques, o nosso provedor de hospedagem processa dados técnicos de cada visita, como endereço IP, tipo de navegador, página solicitada e data e hora. Não usamos ferramentas de análise, publicidade nem perfis de usuário.',
            'Preferências salvas no seu dispositivo. O idioma que você escolhe e se você já viu a animação de boas-vindas ficam salvos apenas no seu navegador e não nos são enviados. Mais detalhes na {cookies}.',
            'Pedimos que não inclua nas mensagens dados sensíveis (saúde, crenças etc.), pois não são necessários para responder ao seu contato.',
          ],
        },
        {
          title: '3. Finalidades e base legal',
          blocks: [
            {
              list: [
                'Responder aos seus contatos e, se você pedir, preparar um orçamento. Base legal: diligências pré-contratuais a seu pedido (art. 6.º, n.º 1, alínea b, do RGPD) e, para consultas gerais, o nosso interesse legítimo em responder às mensagens que recebemos (art. 6.º, n.º 1, alínea f, do RGPD).',
                'Se você contratar um serviço: gerir a relação contratual e cumprir obrigações fiscais e contábeis. Base legal: execução do contrato (art. 6.º, n.º 1, alínea b, do RGPD) e cumprimento de obrigações legais (art. 6.º, n.º 1, alínea c, do RGPD).',
                'Exibir o site com segurança (dados técnicos de navegação). Base legal: interesse legítimo no funcionamento e na segurança do site (art. 6.º, n.º 1, alínea f, do RGPD).',
              ],
            },
            'Não enviamos comunicações comerciais nem newsletters, e não tomamos decisões automatizadas nem criamos perfis com os seus dados.',
          ],
        },
        {
          title: '4. Por quanto tempo guardamos os dados',
          blocks: [
            {
              list: [
                'Contatos que não resultam em projeto: o tempo necessário para responder e fazer o acompanhamento, com um máximo de {retention} meses desde o último contato. Depois são eliminados.',
                'Clientes: enquanto durar a relação e, depois, pelos prazos legais de conservação (por exemplo, obrigações comerciais e fiscais) e de prescrição de possíveis responsabilidades.',
                'Dados técnicos de navegação: são guardados pelo provedor de hospedagem pelos prazos definidos na sua própria política, normalmente curtos.',
              ],
            },
          ],
        },
        {
          title: '5. Destinatários e operadores',
          blocks: [
            'Não compartilhamos os seus dados com terceiros, salvo obrigação legal. Para prestar o serviço usamos os seguintes fornecedores, que tratam dados por nossa conta ou na medida necessária para o seu serviço:',
            {
              list: [
                'Cloudflare, Inc. (EUA): hospedagem e entrega do site, e proteção contra ataques.',
                'Google (serviço de e-mail Gmail): recebimento e gestão dos e-mails que você nos envia.',
              ],
            },
          ],
        },
        {
          title: '6. Transferências internacionais',
          blocks: [
            'Esses fornecedores podem tratar dados fora do Espaço Econômico Europeu, em especial nos Estados Unidos. Essas transferências baseiam-se no Quadro de Privacidade de Dados UE-EUA (decisão de adequação da Comissão Europeia de 10 de julho de 2023), ao qual essas empresas declaram aderir, e, quando aplicável, nas cláusulas contratuais-tipo aprovadas pela Comissão Europeia.',
          ],
        },
        {
          title: '7. Os seus direitos',
          blocks: [
            'Você pode exercer a qualquer momento os seus direitos de acesso, retificação, eliminação, oposição, limitação do tratamento e portabilidade escrevendo para {email}. Indique qual direito deseja exercer; só pediremos informações adicionais para confirmar a sua identidade se houver dúvidas razoáveis.',
            'Responderemos no prazo de um mês, prorrogável por mais dois meses quando a complexidade ou o número de pedidos o justificar, caso em que você será informado.',
            'Se considerar que não atendemos corretamente aos seus direitos, você pode apresentar uma reclamação à Agência Espanhola de Proteção de Dados ({aepd}, C/ Jorge Juan 6, 28001 Madri, Espanha) ou à autoridade de controle do seu país de residência na União Europeia.',
          ],
        },
        {
          title: '8. Menores de idade',
          blocks: [
            'Os nossos serviços destinam-se a empresas e profissionais. Não tratamos conscientemente dados de menores de 14 anos. Se você tiver menos dessa idade, não nos envie dados pessoais.',
          ],
        },
        {
          title: '9. Segurança',
          blocks: [
            'O site é servido por conexão criptografada (HTTPS) e aplicamos medidas técnicas e organizacionais razoáveis para proteger os dados. Ainda assim, nenhum sistema de transmissão ou armazenamento é completamente seguro.',
          ],
        },
        {
          title: '10. Alterações nesta política',
          blocks: [
            'Podemos atualizar esta política para refletir mudanças no site ou na legislação. A data da última atualização aparece no início desta página.',
          ],
        },
      ],
    },
    cookies: {
      title: 'Política de cookies',
      description:
        'Política de cookies da PH Web Studio: este site não usa cookies de análise, publicidade nem rastreamento. Informações sobre o armazenamento local do navegador.',
      sections: [
        {
          title: '1. O que são cookies?',
          blocks: [
            'Cookies são pequenos arquivos que um site salva no seu navegador. Existem tecnologias semelhantes, como o armazenamento local (localStorage e sessionStorage), que também guardam informações no seu dispositivo.',
          ],
        },
        {
          title: '2. Cookies usados por este site',
          blocks: [
            'Este site não instala cookies próprios nem de terceiros. Não usamos ferramentas de análise, publicidade, redes sociais nem conteúdos de terceiros incorporados (mapas, vídeos etc.), e as fontes são servidas a partir do nosso próprio domínio.',
            'Por isso não exibimos um aviso de consentimento de cookies: não há nada que exija o seu consentimento.',
          ],
        },
        {
          title: '3. Armazenamento local do navegador',
          blocks: [
            'Para que o site funcione como você espera, guardamos no seu navegador as seguintes informações técnicas. Elas não contêm dados pessoais, não nos são enviadas e não são usadas para rastrear você:',
            {
              table: {
                head: ['Nome', 'Tipo', 'Finalidade', 'Duração'],
                rows: [
                  ['ph-lang', 'localStorage', 'Lembrar o idioma que você escolhe (só é salvo se você trocar de idioma).', 'Até você apagá-lo no navegador.'],
                  ['ph-intro-seen', 'sessionStorage', 'Não repetir a animação de boas-vindas durante a mesma visita.', 'É apagado ao fechar a aba.'],
                ],
              },
            },
            'Trata-se de armazenamento estritamente necessário para prestar um serviço que você solicita (como lembrar o seu idioma), por isso está isento de consentimento segundo o artigo 22.2 da LSSI-CE espanhola.',
          ],
        },
        {
          title: '4. Provedor de hospedagem',
          blocks: [
            'O site está hospedado na Cloudflare. Na revisão feita na data indicada acima, o site não instalava nenhum cookie. Se os sistemas de segurança da Cloudflare detectarem tráfego suspeito, podem instalar cookies técnicos de proteção (por exemplo, «__cf_bm» ou «cf_clearance»), que são estritamente necessários e não são usados para análise nem publicidade.',
          ],
        },
        {
          title: '5. Como apagar ou bloquear esses dados',
          blocks: [
            'Você pode apagar cookies e armazenamento local a qualquer momento nas configurações do navegador (normalmente em «Privacidade» ou «Dados de sites»). Se fizer isso, o site continuará funcionando e voltará a ser exibido em espanhol.',
          ],
        },
        {
          title: '6. Alterações',
          blocks: [
            'Se no futuro incorporarmos cookies ou tecnologias que exijam o seu consentimento (por exemplo, análise), atualizaremos esta política e pediremos o seu consentimento antes de ativá-los.',
          ],
        },
      ],
    },
  },
}

export const LEGAL_COPY = { es, en, 'pt-BR': ptBR }

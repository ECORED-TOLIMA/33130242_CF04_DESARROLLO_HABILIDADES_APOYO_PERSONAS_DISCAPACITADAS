export default {
  global: {
    componenteFormativo:
      'Accesibilidad, ajustes razonables, caja de herramientas y formatos',
    descripcionCurso:
      'En este componente formativo se brindan herramientas para garantizar la accesibilidad en el proceso de valoración de apoyos, mediante la implementación de ajustes razonables, con el objetivo de promover la autonomía y la autodeterminación de las personas con discapacidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Derecho a la accesibilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Principio de universalidad.',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Principio de indivisibilidad.',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Principio de interdependencia.',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Principio de progresividad.',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Principios de igualdad y no discriminación.',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Ajustes razonables: según el tipo de discapacidad y la necesidad de la persona',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Discapacidad física.',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Discapacidad auditiva.',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Discapacidad visual.',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Discapacidad sordoceguera.',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Discapacidad psicosocial.',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Discapacidad intelectual.',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Discapacidad múltiple',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Caja de herramientas para la accesibilidad de las personas con discapacidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Recursos especializados.',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Recursos pedagógicos.',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Herramientas, insumos y acciones afirmativas por categoría de discapacidad',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Formatos propuestos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_XX_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Protección de Derechos Fundamentales',
      referencia:
        'Ferrajoli, L. (1999). Derechos y garantías: <em>La ley del más débil</em>. Editorial Trotta. Disponible en https://archive.org/details/FERRAJOLIDerechosYGarantiasLaLeyDelMasDebil/page/n3/mode/2up',
      tipo: 'Libro en línea',
      link:
        'https://archive.org/details/FERRAJOLIDerechosYGarantiasLaLeyDelMasDebil/page/n3/mode/2up',
    },
  ],
  glosario: [
    {
      termino: 'Accesibilidad',
      significado:
        'medidas pertinentes para asegurar el acceso de las personas con discapacidad, en igualdad de condiciones con las demás, al entorno físico, el transporte, la información y las comunicaciones, incluidos los sistemas y las tecnologías de la información y las comunicaciones, y a otros servicios e instalaciones.',
    },
    {
      termino: 'Acciones afirmativas',
      significado:
        'medidas encaminadas a garantizar la igualdad real y efectiva de oportunidades para las personas con discapacidad, eliminando o disminuyendo las desigualdades que las afectan y promoviendo su participación plena y efectiva en la sociedad.',
    },
    {
      termino: 'Ajustes razonables',
      significado:
        'modificaciones y adaptaciones necesarias y adecuadas que no impongan una carga desproporcionada o indebida, cuando se requieran en un caso particular, para garantizar a las personas con discapacidad el goce o ejercicio, en igualdad de condiciones con las demás, de todos los derechos humanos y libertades fundamentales.',
    },
    {
      termino: 'Apoyos',
      significado:
        'tipos de asistencia que se prestan a la persona con discapacidad para facilitar el ejercicio de su capacidad legal. Esto puede incluir la asistencia en la comunicación, la asistencia para la comprensión de actos jurídicos y sus consecuencias, y la asistencia en la manifestación de la voluntad y preferencias personales.',
    },
    {
      termino: 'Autonomía',
      significado:
        'derecho de las personas a autodeterminarse, a tomar sus propias decisiones, a equivocarse, a su independencia y al libre desarrollo de la personalidad conforme a la voluntad, deseos y preferencias propias, siempre y cuando estos no sean contrarios a la Constitución, la ley o los reglamentos internos que rigen las entidades públicas y privadas.',
    },
    {
      termino: 'Barreras',
      significado:
        'cualquier tipo de obstáculo que impida el ejercicio efectivo de los derechos de las personas con algún tipo de discapacidad. Estas pueden ser: a) actitudinales: conductas, palabras, frases, sentimientos, preconcepciones y estigmas que impiden u obstaculizan el acceso en condiciones de igualdad; b) comunicativas: obstáculos que dificultan el acceso a la información, la consulta y el desarrollo en condiciones de igualdad de procesos comunicativos; c) físicas: obstáculos materiales, tangibles o construidos que impiden el acceso y uso de espacios, objetos y servicios públicos y privados en condiciones de igualdad.',
    },
    {
      termino: 'Derechos humanos',
      significado:
        'derechos inherentes a todos los seres humanos, sin distinción alguna de raza, sexo, nacionalidad, origen étnico, lengua, religión o cualquier otra condición. Incluyen el derecho a la vida y a la libertad, a no estar sometido ni a esclavitud ni a torturas, a la libertad de opinión y de expresión, a la educación y al trabajo, entre otros.',
    },
    {
      termino: 'Discapacidad',
      significado:
        'concepto que evoluciona y resulta de la interacción entre las personas con deficiencias y las barreras debidas a la actitud y al entorno que evitan su participación plena y efectiva en la sociedad, en igualdad de condiciones con las demás.',
    },
    {
      termino: 'Lenguaje inclusivo',
      significado:
        'uso de terminología adecuada para referirse a este grupo poblacional, empleando expresiones como “personas con discapacidad” o “personas en situación de discapacidad”, conforme a los lineamientos de la Convención Internacional por los Derechos de las Personas con Discapacidad.',
    },
    {
      termino: 'Persona facilitadora de la valoración de apoyos',
      significado:
        'persona natural designada por la entidad pública o privada para coordinar y llevar a cabo el proceso de valoración de apoyos, de acuerdo con los lineamientos y el protocolo nacional expedido por el ente rector del Sistema Nacional de Discapacidad.',
    },
    {
      termino: 'Valoración de apoyos',
      significado:
        'proceso que se realiza con base en estándares técnicos y que tiene como finalidad determinar cuáles son los apoyos formales que requiere una persona para tomar decisiones relacionadas con el ejercicio de su capacidad legal.',
    },
  ],
  referencias: [
    {
      referencia:
        'Comisión Nacional de los Derechos Humanos (CNDH). (2018). <em>Los principios de universalidad, interdependencia, indivisibilidad y progresividad de los derechos humanos.</em> CNDH México.',
      link:
        'https://www.cndh.org.mx/sites/default/files/documentos/2019-05/34-Principios-universalidad.pdf',
    },
    {
      referencia:
        'Congreso de Colombia. (2013). <em>Ley Estatutaria 1618 de 2013: Por la cual se establecen disposiciones para garantizar el pleno ejercicio de los derechos de las personas con discapacidad</em>. Diario Oficial No. 48.733.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=52081',
    },
    {
      referencia:
        'Congreso de Colombia. (2019). <em>Ley 1996 de 2019: Por medio de la cual se establece el régimen para el ejercicio de la capacidad legal de las personas con discapacidad mayores de edad<em>. Diario Oficial No. 51.057.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=99712',
    },
    {
      referencia:
        'Ferrajoli, L. (1999). Derechos y garantías: <em>La ley del más débil (P. A. Ibáñez, Intro. y trad.).</em> Editorial Trotta.',
      link:
        'https://archive.org/details/FERRAJOLIDerechosYGarantiasLaLeyDelMasDebil/page/n3/mode/2up',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC). (2023). <em>Conozca tecnologías de asistencia para las personas con discapacidad.</em> TIC Sin Barreras.',
      link: 'https://ticsinbarreras.mintic.gov.co/791/w3-article-326144.html',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones (MinTIC). (2024). ConVerTIC: <em>Transformamos la vida de personas con discapacidad visual.<em>',
      link: 'https://www.convertic.gov.co/641/w3-channel.html',
    },
    {
      referencia:
        'Organización de las Naciones Unidas. (2006). <em>Convención sobre los Derechos de las Personas con Discapacidad.</em>',
      link: 'https://www.un.org/esa/socdev/enable/documents/tccconvs.pdf',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2020). Decreto 1429 de 2020: <em>Por el cual se reglamentan los artículos 16, 17 y 22 de la Ley 1996 de 2019 y se adiciona el Decreto 1069 de 2015, Único Reglamentario del Sector Justicia y del Derecho.</em>',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=144938',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2022). <em>Decreto 487 de 2022: Por el cual se adiciona la Parte 8 en el Libro 2 del Decreto 1081 de 2015, en el sentido de reglamentar la prestación del servicio de valoración de apoyos que realicen las entidades públicas y privadas en los términos de la Ley 1996 de 2019.</em>',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=185226',
    },
    {
      referencia:
        'Red por los Derechos de las Personas con Discapacidad (REDI). (2023). <em>Ajustes razonables y ajustes de procedimientos para las personas con discapacidad.</em>',
      link:
        'https://argentina.unfpa.org/sites/default/files/pub-pdf/sistemas-de-apoyo-ajustes-razonables.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Leidy Castillo Pérez',
          cargo: 'Experto temática',
          centro: 'Universidad de Antioquia ',
        },
        {
          nombre: 'Johan Andrey Rodríguez Rodríguez ',
          cargo: 'Experto temático',
          centro: 'Universidad de Antioquia ',
        },
        {
          nombre: 'Mary Blanca Ángel Franco ',
          cargo: 'Experto temática',
          centro: 'Universidad de Antioquia ',
        },
        {
          nombre: 'Martha Cecilia Builes Alzate ',
          cargo: 'Experto temática',
          centro: 'Universidad de Antioquia ',
        },
        {
          nombre: 'María Patricia Sarmiento ',
          cargo: 'Directora',
          centro:
            'Dirección para la Garantía de los Derechos de las Personas con Discapacidad',
        },
        {
          nombre: 'Jenny Elizabeth Tibocha Julio',
          cargo: 'Profesional especializada',
          centro:
            'Dirección para la Garantía de los Derechos de las Personas con Discapacidad',
        },
        {
          nombre: 'Angie Vanessa Soto Arango ',
          cargo: 'Profesional especializada',
          centro:
            'Dirección para la Garantía de los Derechos de las Personas con Discapacidad',
        },
        {
          nombre: 'Eliana Milena Buitrago Umaña',
          cargo: 'Asesora metodológica ',
          centro:
            'Centro de Talento Humano en Salud - Regional Distrito Capital ',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },

        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}

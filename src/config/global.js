export default {
  global: {
    componenteFormativo: 'Gestión de la comunicación',
    descripcionCurso:
      'El componente formativo permitirá que el aprendiz apropie conocimientos respecto a la comunicación digital, el uso adecuado de la netiqueta en ambiente digitales, el servicio del PQRS para el cliente y <i>Branding</i> como estrategia de <i>marketing</i> digital; aplicables en todos los campos y diferentes tipos de organizaciones que desean generar valor de marca a través la comunicación interactiva con los consumidores.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
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
        titulo: 'Comunicación digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Técnicas y estrategias de la comunicación digital',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Lenguaje y narrativa de la comunicación digital',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Protocolos de la comunicación digital',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'El contenido digital',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Tipos de contenido digital',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo:
              'Generalidades y conceptualización de <i>post</i> y etiquetas',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Netiquetas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'PQRS',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'El servicio al cliente',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Protocolos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'El Estatuto del Consumidor',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'El servicio al cliente en canales digitales',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'El plan de crisis',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: '<i>Branding</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Identidad de marca',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Construcción de la marca',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Posicionamiento de la marca',
            hash: 't_4_3',
          },
        ],
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
        icono: 'fas fa-download',
        titulo: 'Descargar pdf',
        download: 'downloads/CFA.zip',
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
      tema: 'Identidad de marca',
      referencia:
        'Forero Molina, S. C. y Garzón Medina, C. (2020). Consumidores, marcas y construcción de identidad.',
      tipo: 'Capítulo de libro. Introducción',
      link:
        'https://repository.usta.edu.co/bitstream/handle/11634/31217/Obracompleta.Coleccion440.2020Forerosara.pdf?sequence=4&isAllowed=y',
    },
    {
      tema: 'Construcción de Marca',
      referencia:
        'García Capdevilla, D. A.;  Velásquez Valencia, A. & Jiménez Fajardo, J. A. (2022). Estrategias para potencializar el turismo de naturaleza mediado por el marketing en busca de la conservación de los bosques amazónicos.',
      tipo: 'pdf',
      link:
        'https://entornogeografico.univalle.edu.co/index.php/entornogeografico/article/view/11714',
    },
    {
      tema: 'Posicionamiento de una marca',
      referencia:
        'Sierra Rodríguez, O. y Infante Rivera, O. M. (2021). La evolución e implementación de la marca país en Colombia y su internacionalización.',
      tipo: 'pdf',
      link:
        'https://revistas.ufps.edu.co/index.php/visioninternacional/article/view/3198/3818',
    },
  ],
  glosario: [
    {
      termino: 'Analítica <em>web</em>',
      significado:
        'es la forma de medir y analizar los datos de tráfico de un sitio <i>web</i>.',
    },
    {
      termino: '<em>Blog post</em>',
      significado:
        'es el nombre técnico que recibe la acción de publicar una entrada o un artículo en un <i>blog</i>.',
    },
    {
      termino: '<em>Blog roll</em>',
      significado:
        'es un <i>widget</i> (programa integrado de una <i>web</i> externa) que podemos instalar en nuestros <i>blogs</i> y visualiza en forma de lista los <i>blogs</i> que seguimos y que recomendamos a nuestros lectores.',
    },
    {
      termino: 'Comunidad <em>online</em>',
      significado:
        'conjunto de personas con presencia en medios digitales y redes sociales que comparten y dialogan en el entorno 2.0, generalmente en torno a una marca o temática.',
    },
    {
      termino: '<em>Fanpage</em>',
      significado:
        'también llamada “página de fans”, es la plataforma que ofrece <i>Facebook</i> a las empresas, marcas u organizaciones para visibilizar y conectar con los usuarios. A diferencia de un perfil, una fan page no tiene límite de fans y es posible tener acceso a la información estadística de la página.',
    },
    {
      termino: '<em>Hashtag</em>',
      significado:
        'es una etiqueta formada por una palabra o un conjunto de palabras precedidas por el símbolo numeral (#) que transmite una idea, un nombre o un concepto que normalmente va asociado con un mensaje o texto. Su uso se ha extendido principalmente en redes sociales, como: <i>Instagram</i> o <i>Google Plus</i>.',
    },
    {
      termino: 'Influenciador',
      significado:
        'en social media es aquella persona que tiene capacidad para viralizar y compartir contenidos con un amplio número de personas.',
    },
    {
      termino: 'Infografía',
      significado:
        'es una imagen que, con un conjunto de gráficos y textos, conforman un esquema visual que transmite, de forma rápida e intuitiva, conceptos e información.',
    },
    {
      termino: '<em>KPI</em>',
      significado:
        'son las siglas de <i>key performance indicator</i>, son indicadores y herramientas de medición de los cuales se obtiene información útil del nivel de rendimiento de una campaña o estrategia de <i>social media marketing</i>.',
    },
    {
      termino: '<em>Marketing</em> de contenidos',
      significado:
        'son estrategias de <i>marketing</i> enfocadas en ofrecer contenidos útiles y de ayuda a los usuarios principalmente a través del <i>blog</i> y del <i>social media marketing</i>.',
    },
    {
      termino: '<em>Status report</em>',
      significado:
        'documento informativo del estado de los planes de acción en las diferentes estrategias de <i>social media</i>, que incluye datos cuantitativos y cualitativos provenientes del resultado de la analítica <i>web</i>.',
    },
    {
      termino: '<em>Webinars</em>',
      significado:
        'también llamados <i>webminars</i>, son eventos o conferencias que tienen lugar en el medio <i>online</i>. Es una muy buena estrategia para enganchar nuevos seguidores en las redes sociales.',
    },
    {
      termino: '<em>Youtubers</em>',
      significado:
        'son las personas que crean y suben videos a <i>YouTube</i> y han convertido su canal en algo más que una afición. El <i>YouTuber</i> gana dinero por los anuncios de los videos o por mostrar productos patrocinados.',
    },
  ],
  referencias: [
    {
      referencia: 'Aguilar, J. E. y Morales. El servicio al cliente. (2019).',
      link: 'http://www.direcciondepersonal.com/servicio_al_cliente.pdf',
    },
    {
      referencia:
        'Cepeda- Palacio, S. D. (2014). Alcances actuales del concepto de marca. Un estudio comparativo, en la historia.',
      link: 'https://www.redalyc.org/pdf/2654/265433711009.pdf',
    },
    {
      referencia:
        'Congreso de la República de Colombia. Constitución Política de Colombia de 1991.',
      link: 'http://www.secretariasenado.gov.co/constitucion-politica',
    },
    {
      referencia:
        'Echeverry Gómez, P. A. El <i>marketing</i> y la importancia del servicio al cliente en las empresas',
      link:
        'https://repository.unicatolica.edu.co/bitstream/handle/20.500.12237/591/ENSAYO_DIPLOMADO_.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Flores, Allaica T.L. (2014). Elaboración de un manual de procedimientos de calidad para la atención al cliente en el Restaurante Tradicional Mexicano Frida, Riobamba.',
      link: 'http://dspace.espoch.edu.ec/handle/123456789/10813',
    },
    {
      referencia:
        'Decreto 1078 de 2015. [Presidente de la República de Colombia]. Por medio del cual se expide el Decreto Único Reglamentario del Sector de Tecnologías de la Información y las Comunicaciones.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77888',
    },
    {
      referencia:
        'Ley 1581 de 2012. [Congreso de Colombia]. Por la cual se dictan disposiciones generales para la protección de datos personales.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981',
    },
    {
      referencia:
        'Ley 1480 de 2011. [Congreso de Colombia]. Por medio de la cual se expide el Estatuto del Consumidor y se dictan otras disposiciones.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=44306',
    },
    {
      referencia:
        'García Buitrago V. & Iregui Caro, A. (2020). Propuesta de protocolo y análisis de la atención y servicio al cliente en los establecimientos comerciales de ropa y calzado de La Dorada Caldas.',
      link:
        'https://repository.unimilitar.edu.co/bitstream/handle/10654/11456/ensayo%20final%20especilaizaci%F3n%202014%20(1).pdf?sequence=1',
    },
    {
      referencia:
        'Instituto Nacional de Tecnologías Educativa y Formación del Profesorado del Profesorado. Las 22 Leyes Inmutables del <i>Marketing</i>.',
      link:
        'http://acebo.pntic.mec.es/ngabela/Las22LEYESINMUTABLESDEMARKETING.pdf',
    },
    {
      referencia:
        'Ley 1098 de 2006. [Ministerio de la Protección Social. Instituto Colombiano de Bienestar Familiar]. Código de la Infancia y adolescencia.',
      link:
        'https://www.icbf.gov.co/sites/default/files/codigoinfancialey1098.pdf',
    },
    {
      referencia: 'Min Tic. (2022).  Vende digital, campaña para MiPymes.',
      link:
        'https://www.mintic.gov.co/portal/inicio/Sala-de-prensa/Noticias/237764:Siguen-abiertas-inscripciones-para-Vende-Digital-oportunidad-para-que-los-colombianos-implementen-el-comercio-electronico-en-sus-negocios',
    },
    {
      referencia: 'RAE. (2022). Definición de etiqueta.',
      link: 'https://dle.rae.es/etiqueta',
    },
    {
      referencia:
        'Rivera Herrera. (2015). Inclucionándonos al mundo empresarial.',
      link: 'http://riveraherrera.blogspot.com/',
    },
    {
      referencia:
        'Universidad Cooperativa de Colombia. (2020). Análisis de satisfacción del cliente en la empresa Aguas de Valencia S.A.S en el Municipio de Valencia Córdoba.',
      link:
        'https://repository.ucc.edu.co/bitstream/20.500.12494/20514/5/2020_an%C3%A1lisis_satisfacci%C3%B3n_cliente.pdf',
    },
    {
      referencia:
        'Universidad de Azuay. (2019). Estudio del estado del arte de los blogs de moda en el Educador, elaboración de sugerencias para blogueros y aplicación de un caso en un blog emergente.',
      link: 'https://dspace.uazuay.edu.ec/bitstream/datos/8668/1/14329.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gustavo Navarro Macías',
          cargo: 'Experto Temático',
          centro: 'Regional Norte de Santander - Centro CIES',
        },
        {
          nombre: 'María Alejandra Tovar Bernal',
          cargo: 'Experto Temático',
          centro: 'Regional Tolima - Centro de Industria y la Información',
        },
        {
          nombre: 'Ana Vela Rodríguez Velásquez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortes',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Iván Urtibe Ortiz',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Davison Gaitán Escobar',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animador y Productor Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y Productor Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador y Productor Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Davison Gaitán Escobar',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

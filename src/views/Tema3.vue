<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 PQRS
    
    p(data-aos="fade-left") Las PQRS son un sistema que establece procedimientos, protocolos y normas relacionadas con el servicio de atención al cliente. Estas siglas hacen referencia a Peticiones, Quejas, Reclamos y Sugerencias.
    p(data-aos="fade-left") Las PQRS se utilizan como una herramienta organizacional para interactuar con los clientes y buscan implementar un sistema de mejora continua en la atención y prestación de servicios. Esto se logra mediante el uso de personal capacitado y plataformas digitales que permiten brindar respuestas rápidas a las preguntas y comentarios de los usuarios, abordando sus inquietudes y contribuyendo a la satisfacción del cliente, a continuación, se presentan sus definiciones:

    .row.justify-content-center.mb-5.mt-5(data-aos="fade-right")
      .col-sm-6.col-xl-3.col-md-5.mb-4.mb-xl-0(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema3/1.png' alt='')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #DBE5F3")
            .title.d-flex.align-items-center.mb-lg-2.mb-md-5.mb-3
              span
                i.fas.fa-caret-up.fa-2x.me-3(style="color:#B40E0E")
                i.fas.fa-caret-down.fa-2x.me-3(style="color:#B40E0E")
              h5.mb-0 Peticiones
            p El consumidor solicita a la organización cualquier tipo de información.
      .col-sm-6.col-xl-3.col-md-5.mb-4.mb-xl-0(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema3/2.png' alt='')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #DBE5F3")
            .title.d-flex.align-items-center.mb-lg-2.mb-md-5.mb-3
              span
                i.fas.fa-caret-up.fa-2x.me-3(style="color:#B40E0E")
                i.fas.fa-caret-down.fa-2x.me-3(style="color:#B40E0E")
              h5.mb-0 Quejas
            p El consumidor presenta ante la organización su inconformidad con un producto, servicio o actuar de la organización que considere incorrecto y lo esté afectando a él o a la sociedad.
      .col-sm-6.col-xl-3.col-md-5.mb-4.mb-xl-0(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema3/3.png' alt='')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #DBE5F3")
            .title.d-flex.align-items-center.mb-lg-2.mb-md-5.mb-3
              span
                i.fas.fa-caret-up.fa-2x.me-3(style="color:#B40E0E")
                i.fas.fa-caret-down.fa-2x.me-3(style="color:#B40E0E")
              h5.mb-0 Reclamos
            p El consumidor presenta ante la organización su inconformidad ante el servicio prestado.
      .col-sm-6.col-xl-3.col-md-5.mb-4.mb-xl-0(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema3/4.png' alt='')
          .tarjetas-up_card.p-xl-4.p-lg-3.p-4(style="background-color: #DBE5F3")
            .title.d-flex.align-items-center.mb-lg-2.mb-md-5.mb-3
              span
                i.fas.fa-caret-up.fa-2x.me-3(style="color:#B40E0E")
                i.fas.fa-caret-down.fa-2x.me-3(style="color:#B40E0E")
              h5.mb-0 Sugerencias
            p El consumidor presenta una propuesta o sugerencia de mejora ante la organización.
    
    p(data-aos="fade-left") El sistema PQRS, que incluye Peticiones, Quejas, Reclamos, Sugerencias y Felicitaciones (PQRSF), es una herramienta importante para la atención al cliente y la mejora continua en las organizaciones. Aquí se describen algunos aspectos clave de su implementación:

    .row.justify-content-center.mt-5
      .col-lg-10.col-12
        .row.justify-content-center
          .col-lg-10.col-12
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema3/5.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul
                .p-4
                  p <b>Canales de comunicación:</b> las organizaciones deben establecer múltiples canales de comunicación para que los clientes puedan presentar sus PQRSF. Estos canales pueden incluir oficinas físicas, plataformas virtuales, líneas telefónicas, correo electrónico, chatbots o asistentes virtuales. La diversidad de opciones permite a los clientes elegir el método que les resulte más conveniente.
    .row.justify-content-center
      .col-lg-10.col-12
        .row.justify-content-center
          .col-lg-10.col-12
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema3/6.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul
                .p-4
                  p <b>Protocolo y procedimiento:</b> cada organización debe contar con un protocolo y procedimiento de atención al cliente que se ajuste a sus necesidades y cumpla con las normas internacionales. Esto incluye la forma en que se deben recibir, registrar, procesar y responder las PQRSF.
    .row.justify-content-center
      .col-lg-10.col-12
        .row.justify-content-center
          .col-lg-10.col-12
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema3/7.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul
                .p-4
                  p <b>Trazabilidad:</b> es esencial implementar un sistema de seguimiento y trazabilidad de las solicitudes. Esto permite identificar el flujo y el estado de cada PQRSF desde el momento en que se recibe hasta su resolución. El software especializado suele ser de gran ayuda para llevar un registro ordenado y eficiente.
    .row.justify-content-center
      .col-lg-10.col-12
        .row.justify-content-center
          .col-lg-10.col-12
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema3/8.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul
                .p-4
                  p <b>Respuestas oportunas:</b> las respuestas a las PQRSF deben ser proporcionadas de manera oportuna y acorde a la normatividad vigente. Los plazos de respuesta pueden variar según la naturaleza de la solicitud, pero es fundamental que se cumplan en todos los casos.

    p(data-aos="fade-left") La trazabilidad del servicio implica seguir el proceso desde el momento en que se realiza una solicitud de servicio por parte del cliente hasta su finalización. Esto permite medir y evaluar la eficiencia y eficacia de la atención al cliente, identificando áreas de mejora y garantizando una experiencia satisfactoria para los consumidores. Dentro de las trazabilidades del servicio se encuentran:

    .row.justify-content-center.mt-5
      .col-12 
        .titulo-sexto.color-acento-contenido
          h5 Figura 6.
          span #[i Concepto de etiqueta y netiqueta]
        .col-12 
          figure.desktop(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema3/9.svg' alt='En la figura 6 se muestran la trazabilidad documental y metrológica del servicio.')
            
        .row.justify-content-center
          .col-12 
            figure.movil(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema3/10.svg' alt='En la figura 6 se muestran la trazabilidad documental y metrológica del servicio.')

    .row.justify-content-center.mt-5
      .col-lg-11.col-12
        .row.justify-content-center.align-items-center 
          .col-lg-2.col-6.mb-3
            figure
              img(src='@/assets/curso/temas/tema3/11.svg', alt='Imagen decorativa')
          .col-lg-10.col-12.mb-3
            .cajon.color-secundario.p-4.mb-3(style="background-color: #FFFBE5")
              p <b>Por ejemplo:</b>
              p Un cliente se acerca a servicio al cliente, solicitando soporte técnico para un celular que presenta fallas en el sistema a las 10:00 am, por lo cual ingresan en celular a servicio técnico a las <b>10:05 am</b> y el mismo se entrega en perfecto funcionamiento a las <b>11:15 am</b>.
              p De acuerdo al ejemplo citado, al realizar la <b>trazabilidad documental</b>, se indica que se ingresa un celular a servicio técnico a las <b>10:00 am</b>, al cual se realiza actualización del sistema y se entrega en óptimas condiciones y funcionamiento al cliente a las <b>11:15 am</b>, en cuanto a la trazabilidad metrológica, se indica que el <b>servicio técnico se prestó desde las</b> <b>10:00 am</b> a las <b>11:15 am</b>, <b>con una duración de 75 minutos</b>.
            p Un correcto análisis de las trazabilidades permite a las organizaciones:
            li Prestar servicios de calidad.
            li Encontrar cuellos de botella en el servicio.
            li Establecer planes de mejora continua.
    p.mt-5(data-aos="fade-left") Como parte de su aprendizaje autónomo le invito a ver el siguiente video del SENA denominado “Atención PQR” que le afianzará los conocimientos sobre el tema.

    .row.mt-5
      figure(data-aos="fade-right")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/PSiBtkl75Hc?si=iyAK6PokWWdK6HIZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_3_1 3.1 El servicio al cliente
    
    p(data-aos="fade-left") El servicio al cliente es de suma importancia en las organizaciones actuales, ya que deben enfocarse en satisfacer las necesidades de sus clientes, tanto internos como externos. Cada área operativa de la organización debe estar orientada a cumplir estas necesidades y expectativas.
    .cajon.color-secundario.p-4.mb-3(style="background-color: #FFFBE5")
      .row.justify-content-center 
        .col-lg-3.col-6.mb-3
          figure
            img(src='@/assets/curso/temas/tema3/12.svg', alt='Imagen decorativa')
        .col-lg-9.col-12.mb-3
          p(data-aos="fade-left") Varios autores han definido el concepto de servicio. Según Jaques Horovitz, el servicio es un conjunto de prestaciones que el cliente espera, además del producto o servicio básico, debido a la imagen y la reputación de la empresa. Otros autores, como L. Berry, R. Bennnet y W. Brown, consideran que el servicio es un proceso y una realización en lugar de un objeto como los productos tangibles. Los servicios suelen ser intangibles y se consumen al mismo tiempo que se producen, lo que los diferencian de los bienes tangibles. Además, los servicios pueden ser intensivos en la utilización de la fuerza de trabajo.
          p(data-aos="fade-left") Las organizaciones deben proporcionar un servicio de alta calidad que cumpla con estas características y satisfaga las necesidades y expectativas de sus clientes. Esto es esencial para el éxito general de la organización y debe ser una prioridad tanto para los clientes internos como para los externos.
    p(data-aos="fade-left") Teniendo en cuenta lo anterior, es importante tener claro las características que tiene un buen servicio al cliente al interior de una organización, entre las cuales se destacan:

    .tarjeta.tarjeta--azul.p-4.mb-5.mt-5
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0.p-4
            h4 ¿Qué es un servicio?
            p Se refiere a un conjunto de actividades, acciones o prestaciones que una entidad, empresa u organización realiza con el propósito de satisfacer las necesidades, demandas o deseos de sus clientes o usuarios.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/13.jpg', alt='Imagen decorativa')
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0.p-4
            h4 ¿Quién recibe el servicio?
            p El receptor del servicio puede ser un cliente, paciente, estudiante, ciudadano o empleado, dependiendo del tipo de servicio y la situación. Identificar al receptor del servicio es fundamental para adaptar el servicio y satisfacer sus necesidades y expectativas de manera efectiva.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/14.jpg', alt='Imagen decorativa')
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0.p-4
            h4 ¿Cuándo se evalúa el servicio?
            p El servicio se evalúa en diferentes momentos a lo largo de la interacción entre el proveedor y el cliente, incluyendo antes, durante y después del servicio. La evaluación también puede ser periódica y ocurre en situaciones especiales. El objetivo es mantener y mejorar la calidad del servicio y satisfacer las necesidades del cliente.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/15.jpg', alt='Imagen decorativa')
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0.p-4
            h4 ¿Cuál es la materia prima?
            p La materia prima del servicio es la información, la tecnología, el conocimiento y, en muchos casos, la interacción directa entre el proveedor y el cliente. Estos elementos son esenciales para la creación y entrega del servicio, y su calidad influye directamente en la calidad del servicio proporcionado.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/16.jpg', alt='Imagen decorativa')
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0.p-4
            h4 ¿Cuánto dura un servicio?
            p La duración de un servicio puede variar significativamente según el tipo de servicio y las circunstancias específicas. Algunos servicios pueden ser breves y durar solo unos minutos, mientras que otros pueden extenderse durante horas, días o incluso más tiempo. La duración de un servicio generalmente está determinada por su naturaleza y propósito. Por ejemplo, una consulta médica puede durar 15-30 minutos, mientras que un proceso de diseño de ingeniería puede llevar meses o incluso años.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/17.jpg', alt='Imagen decorativa')
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0.p-4
            h4 ¿En qué se fundamenta el servicio?
            p Se fundamenta en la interacción entre el proveedor y el cliente, donde el proveedor se compromete a cumplir ciertas promesas, y el cliente espera recibir beneficios. La calidad del servicio se mide por su capacidad para cumplir con las expectativas del cliente y brindar satisfacción. La duración de un servicio varía según su naturaleza, y la materia prima del servicio es la capacidad y recursos del proveedor. Las evaluaciones del servicio ocurren a lo largo de toda la interacción y pueden resultar en retroalimentación para la mejora. El servicio puede ser prestado por organizaciones o individuos en diversos contextos.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/18.jpg', alt='Imagen decorativa')
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Importancia del trato directo
            p El trato directo es esencial en la comunicación, las relaciones interpersonales y la resolución de conflictos. Ofrece una comunicación efectiva, construye relaciones sólidas, facilita la resolución de problemas y proporciona retroalimentación inmediata. Además, promueve la empatía, el aprendizaje, el desarrollo y la comprensión emocional. En contextos comerciales, es fundamental para la negociación y la toma de decisiones.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/19.jpg', alt='Imagen decorativa')
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Áreas
            p Las áreas del servicio son divisiones o departamentos dentro de una organización que se encargan de brindar servicios específicos a los clientes o usuarios. Algunas de las áreas comunes del servicio incluyen Servicio al Cliente, Soporte Técnico, Ventas, Marketing y Publicidad, Recursos Humanos, Logística y Entrega, Finanzas y Facturación, Calidad, Investigación y Desarrollo, y Administración y Gestión. Cada área cumple una función específica para garantizar un servicio eficiente y satisfactorio para los clientes.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/20.jpg', alt='Imagen decorativa')
    
    p(data-aos="fade-left") Para mejorar el servicio que se presta en cualquier organización, es fundamental considerar las siguientes tres acciones:

    .tarjeta--container.row.mb-5.mt-5
      .col-md.tarjeta.p-5(style="background-color: #A3BFE4")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/21.svg', alt='Imagen decorativa')
          
        p <b>Ampliar la definición de servicio:</b> significa comprender que el servicio no se limita únicamente a la transacción comercial. Incluye aspectos como la calidad, la atención al cliente, la eficiencia y la satisfacción general de los clientes. Las organizaciones deben prestar atención a cada punto de contacto con el cliente y buscar constantemente formas de mejorar su experiencia en todos los aspectos.
      .col-md.tarjeta.p-5(style="background-color: #FFF198")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/21.svg', alt='Imagen decorativa')
          
        p <b>Reconsiderar quiénes son los clientes:</b> no solo se trata de los compradores finales, sino de todos los stakeholders involucrados en la cadena de valor de la organización. Esto incluye empleados, proveedores, socios comerciales y cualquier otra parte interesada. Todas estas personas desempeñan un papel en la experiencia general del cliente, por lo que es esencial considerar sus necesidades y expectativas.
      .col-md.tarjeta.p-5(style="background-color: #33ECE0")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/21.svg', alt='Imagen decorativa')
          
        p <b>Desarrollar una actitud amistosa hacia el cliente:</b> promover una cultura de servicio al cliente en toda la organización es crucial. Los empleados deben entender la importancia de tratar a los clientes con cortesía, empatía y profesionalismo en cada interacción. Esto contribuirá en gran medida a construir relaciones sólidas y a fomentar la fidelización de los clientes.
    
    p(data-aos="fade-left") Al abordar el servicio al cliente es fundamental comprender y distinguir entre los clientes o consumidores internos y externos de la organización. Aquí se describen brevemente ambos conceptos:
        
    .row.justify-content-center.mt-5
      .col-lg-10.col-12 
        .titulo-sexto.color-acento-contenido
          h5 Figura 7.
          span #[i Clientes internos y externos de la organización]
        .col-12 
          figure.desktop(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema3/24.svg' alt='En la figura 7 se muestra la definición de un cliente interno y un cliente externo de una organización.')
            
        .row.justify-content-center
          .col-12 
            figure.movil(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema3/25.svg' alt='En la figura 7 se muestra la definición de un cliente interno y un cliente externo de una organización.')     
    
    p(data-aos="fade-left") Brindar un excelente servicio a ambos tipos de clientes es esencial para el éxito de la organización. El servicio al cliente externo garantiza la satisfacción y la retención de los clientes, mientras que el servicio al cliente interno promueve un entorno de trabajo productivo y una mejor coordinación entre los equipos, lo que finalmente se traduce en una experiencia más satisfactoria para los clientes externos.
    p(data-aos="fade-left") El servicio al cliente es una parte fundamental en cualquier organización, y su calidad se define por la interacción entre los clientes internos y externos a lo largo del proceso de venta y más allá. En esencia, se trata de brindar asesoramiento, orientación y apoyo a los clientes en todas las etapas de su experiencia, desde antes de la compra hasta después de ella.

    .row.justify-content-center
      .col-12
        .cajon.p-4.mb-3(style="background-color: #FFFBE5")
          .row.justify-content-center.align-items-center
            .col-lg-10.col-12
              .row.justify-content-center.align-items-center
                .col-lg-4.col-6.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema3/26.jpg', alt='Imagen decorativa')
                .col-lg-8.col-12.mb-3
                  p(data-aos="fade-left") Para mejorar la calidad del servicio, es esencial ampliar la definición de servicio más allá de la simple transacción de productos o servicios. También es necesario reconsiderar quiénes son los clientes, tanto internos como externos, y desarrollar una actitud amistosa y proactiva hacia ellos. Esto implica comprender sus necesidades, escuchar sus inquietudes y responder de manera efectiva a sus solicitudes.
                  p(data-aos="fade-left") En este sentido, muchas organizaciones utilizan software especializado para gestionar el servicio al cliente. Estas herramientas permiten registrar y rastrear las solicitudes de los clientes, lo que facilita la comunicación y mejora la eficiencia. Además, el almacenamiento centralizado de datos de clientes brinda una visión completa de la relación con los mismos, lo que puede impulsar la toma de decisiones más informada y personalizada. A continuación, se describen los beneficios de la implementación de software al servicio al cliente:

    .row.justify-content-center.mt-5
      .col-lg-10.col-12 
        .titulo-sexto.color-acento-contenido
          h5 Figura 8.
          span #[i Beneficios de la implementación de software de servicio al cliente]
        .col-12 
          figure.desktop(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema3/27.svg' alt='En la figura 8 se muestran los beneficios de la implementación de software de servicio al cliente.')
            
        .row.justify-content-center
          .col-12 
            figure.movil(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema3/28.svg' alt='En la figura 8 se muestran los beneficios de la implementación de software de servicio al cliente.')
    p.mt-5(data-aos="fade-left") Dentro del software de gestión del servicio al cliente se encuentran: 

    .row.justify-content-center.mt-5
      .col-lg-10.col-12 
        .titulo-sexto.color-acento-contenido
          h5 Figura 9.
          span #[i Software de gestión]
        .col-12 
          figure.desktop(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema3/29.svg' alt='En la figura 9 se muestran los software de gestión del servicio al cliente.')
            
        .row.justify-content-center
          .col-12 
            figure.movil(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema3/30.svg' alt='En la figura 9 se muestran los software de gestión del servicio al cliente.')

    p.mt-5(data-aos="fade-left") A continuación, se presentan las características de los dos tipos de <i>software</i> utilizados por las organizaciones:

    .row.justify-content-center.alig-items-center.mt-5
          .col-lg-10.col-12.mb-3
            .titulo-sexto.color-acento-contenido
              h5 Tabla 3.
              span #[i Características de CMR y SAV]
            .tabla-a.color-acento-contenido.mb-5
              table
                thead(style="background-color: #33ECE0")
                  tr
                    th Sistema de gestión de relaciones con los clientes - CRM
                    th Sistema de Automatizaciones de Ventas - SAV
                tbody
                  tr(style="background-color: #F6F6F6")
                    td ● Permite la relación e interacción entre las organizaciones y el cliente, debido a que automatiza los procesos.
                    td ● Gestiona las ventas de las organizaciones debido a que almacena, implementa y genera informes de los clientes, proveedores, vendedores, inventarios, cuentas por pagar y cuentas por cobrar, etc.
                  tr
                    td ● La implementación de este sistema al interior de las organizaciones permite gestionar los contactos de los clientes, las ventas y el marketing
                    td ● Genera los soportes de las ventas como facturas, desprendibles de pago, órdenes de pago, entre otros soportes contables.
                  tr(style="background-color: #F6F6F6")
                    td ● El sistema de gestión de las relaciones con los clientes desde la tecnología permite el registro y análisis de los datos gestionados de los clientes, las estrategias y los procesos.
                    td ● Permite a las organizaciones tener un contacto con los clientes y gestionar sus datos.
                  tr
                    td ● El sistema de gestión de las relaciones con los clientes desde las estrategias invita a las organizaciones a hacer del cliente el centro de la misma.
                    td ● Fortalece la fuerza de venta debido a que le permite realizar el adecuado seguimiento al proceso.
                  tr
                    td ● El sistema de gestión de las relaciones con los clientes desde los procesos permite gestionar los procesos y procedimientos de servicio al cliente.
                    td 
    p Adicional a esto, existen unas semejanzas entre el CRM y SAV las cuales se mencionan a continuación:

    .row.justify-content-center.mt-5
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center
          .col-lg-6.col-8.mb-3
            figure
              img(src='@/assets/curso/temas/tema3/31.svg', alt='Imagen decorativa')
          .col-lg-6.col-12.mb-3
            li Satisfacción y fidelización del cliente.
            li Automatización de los procesos de servicio al cliente.
            li Almacenamiento de datos.
            li Respuesta eficiente y eficaz al cliente.
            li Seguridad de la información. 
            li Reducción de tiempo.
            li Reducción de costos.

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_3_2 3.2 Protocolos
    
    p(data-aos="fade-left") Los protocolos son documentos, normas o guías que establecen pautas y directrices para actuar en diversas situaciones, ya sea en situaciones formales o en contextos más informales. Estas normas definen comportamientos apropiados y acciones a seguir, recopilando las mejores prácticas para enfrentar situaciones específicas.
    p(data-aos="fade-left") En particular, en el ámbito de la atención al cliente, los protocolos de atención son esenciales para proporcionar orientación y dirección en la gestión de problemas o situaciones que surgen en la interacción entre el personal y los clientes. Estos protocolos buscan promover comportamientos éticos y morales en el personal de servicio, desarrollando habilidades y actitudes que fomentan una comunicación efectiva y la resolución de conflictos, tanto en entornos de atención presencial como en entornos virtuales.
    p(data-aos="fade-left") En el ámbito de los protocolos, se pueden identificar varios tipos según su enfoque y aplicación. A continuación, se describen tres tipos de protocolos:

    .tarjeta.tarjeta--azul.p-4.mb-5.mt-5
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0.p-5
            h4 Protocolo estructural
            p Este tipo de protocolo se enfoca en establecer normas y reglas que rigen la estructura organizativa y el funcionamiento interno de una entidad o institución. Estas normas pueden abordar aspectos como la jerarquía, la toma de decisiones, los procedimientos internos y las responsabilidades de los diferentes departamentos. El protocolo estructural es esencial para mantener la coherencia y la eficiencia en una organización.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/32.jpg', alt='Imagen decorativa')
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0.p-5
            h4 Protocolo de gestión
            p Los protocolos de gestión se centran en definir las pautas y procedimientos para administrar eficazmente los recursos y las operaciones de una organización. Esto puede incluir la gestión de proyectos, la asignación de recursos financieros, la planificación estratégica y otras áreas relacionadas con la dirección y el control de una entidad. Los protocolos de gestión son cruciales para asegurar una administración eficiente y un uso óptimo de los recursos.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/33.jpg', alt='Imagen decorativa')
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0.p-5
            h4 Protocolo de atención y servicio al cliente
            p Estos protocolos están diseñados para regular y mejorar la interacción entre una organización y sus clientes. Establecen directrices sobre cómo abordar las consultas, quejas, solicitudes y necesidades de los clientes. Los protocolos de atención al cliente se centran en la calidad del servicio, la cortesía en la comunicación y la resolución efectiva de problemas. Son fundamentales para garantizar la satisfacción del cliente y construir relaciones sólidas con ellos.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/34.jpg', alt='Imagen decorativa')
    
    P(data-aos="fade-left") La implementación de un protocolo de atención al cliente personalizado en un establecimiento, empresa o negocio es esencial para mantener un criterio uniforme de conducta al tratar con los clientes. Esto se traduce en la entrega de un servicio de alta calidad que añade valor a la experiencia del cliente. Los beneficios de establecer un protocolo de atención al cliente incluyen:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.p-4.col-ipad(style="background-color: #E3ECF7")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/35.svg' alt='AvatarTop')
        p <b>Promoción de la cultura de servicio:</b> establecer un protocolo fomenta la importancia de brindar un excelente servicio al cliente en toda la organización, convirtiéndolo en un valor central.
      .tarjeta.p-4.col-ipad(style="background-color: #FFFBE5")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/36.svg' alt='AvatarTop')
        p <b>Generación de confianza:</b> los clientes confían en que recibirán un servicio consistente y de calidad, lo que mejora la relación entre el cliente y el negocio.
      .tarjeta.p-4.col-ipad(style="background-color: #E3ECF7")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/37.svg' alt='AvatarTop')
        p <b>Desarrollo de habilidades:</b> el protocolo guía a los empleados en el uso de habilidades y actitudes de comunicación adecuadas al interactuar con los clientes.
      .tarjeta.p-4.col-ipad(style="background-color: #FFFBE5")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/38.svg' alt='AvatarTop')
        p <b>Diferenciación:</b> un protocolo de atención al cliente bien implementado puede ser un factor diferenciador en un mercado competitivo. Los clientes pueden elegir un negocio sobre otro debido a la calidad de su servicio.
      .tarjeta.p-4.col-ipad(style="background-color: #E3ECF7")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema3/39.svg' alt='AvatarTop')
        p <b>Aumento de la productividad:</b> al seguir procedimientos bien definidos, los empleados pueden ser más eficientes en la atención al cliente, lo que puede mejorar la productividad general de la organización.
      
    p(data-aos="fade-left") El servicio al cliente es crucial para el éxito de una empresa, y la satisfacción del cliente es un requisito clave para destacar en el mercado. Para lograrlo, es esencial que todas las áreas de la empresa trabajen en conjunto para garantizar la satisfacción de los clientes, no solo el equipo de atención al cliente. Esto implica comprender las expectativas de los clientes y asegurarse de que se cumplan para captar y fidelizar a los consumidores.
    p(data-aos="fade-left") Como parte de su aprendizaje autónomo le invito a ver el siguiente video del SENA denominado “Aspectos y definición para formular protocolos de servicios y atención de ciudadanos”.

    .row.mt-5
      figure(data-aos="fade-right")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/4EabquNz0ME?si=mIXD0RJBKN_3Jyf2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_3_3 3.3 El Estatuto del Consumidor
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_3_4 3.4 El servicio al cliente en canales digitales
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_3_5 3.5 El plan de crisis

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

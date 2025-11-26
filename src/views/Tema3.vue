<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Caja de herramientas para la accesibilidad de las personas con discapacidad
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-6.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img1.png', alt='Imagen decorativa')
      .col-lg-9.mb-4.mb-lg-0
        p(data-aos="fade-left") La caja de herramientas es un conjunto de instrumentos, recursos y apoyos orientados a fortalecer la autonomía, la independencia y la toma de decisiones de las personas con discapacidad, así como a acompañar a quienes facilitan el proceso de valoración de apoyos. Este recurso se vuelve especialmente útil una vez que la persona facilitadora identifica las necesidades específicas de cada persona, colocando en el centro del proceso a la persona con discapacidad.
        .row.align-items-center.bloque-texto-c.color-primario-medio.p-4.mb-4
          .col-2.d-none.d-lg-block(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema3/img2.svg', alt='Imagen decorativa')
          .col-lg-10
            p.mb-0(data-aos="fade-left") El propósito de la caja de herramientas es ofrecer a las personas facilitadoras un conjunto de estrategias, recursos y acciones afirmativas que favorezcan la obtención de información, la comunicación y el vínculo con la persona, garantizando su acceso al servicio de valoración de apoyos. Este enfoque reconoce el derecho a la igualdad de condiciones y oportunidades y promueve la autonomía en la toma de decisiones durante todo el proceso.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .bloque-texto-gg.color-secundario.p-3
          .bloque-texto-gg__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img3.png')})`}"
          )
          .bloque-texto-gg__texto.mt-5.mt-lg-0.p-2
            p.mb-0 La caja de herramientas contribuye a garantizar el derecho a la accesibilidad e incorpora ajustes razonables que, al aplicarse de manera concreta, se convierten en acciones afirmativas.
    
    .row.justify-content-center.align-items-center
      .col-lg-9.order-2.order-lg-1.mb-4.mb-lg-0
        p Para su definición, se parte de la premisa de que cada tipo de discapacidad presenta particularidades, y que cada persona es única y tiene necesidades específicas. Por ello, los ajustes razonables que se implementen deben responder a esas características individuales en el marco del proceso de valoración de apoyos.
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-1.d-none.d-lg-block(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema3/img5.svg', alt='Imagen decorativa')
          .col-lg-11
            p.mb-0(data-aos="fade-left") Los recursos y apoyos incluidos en la caja se presentan considerando tanto las generalidades como las particularidades de cada tipo de discapacidad. Su aplicación será validada e implementada con el consentimiento de la persona que participa en el proceso, reconociendo siempre sus habilidades, competencias y decisiones.
        .row.align-items-center.bloque-texto-c.color-primario-claro.p-3
          .col-lg-1.d-none.d-lg-block.p-0(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema3/img6.svg', alt='Imagen decorativa')
          .col-lg-11
            p.mb-0 Estos recursos y apoyos pueden ser de tipo tecnológico, pedagógico o una combinación de ambos, según lo requiera cada situación. En algunos casos, será necesario utilizar simultáneamente diferentes tipos de herramientas para responder adecuadamente a las necesidades de la persona. La construcción de esta caja de herramientas parte de los desarrollos del Ministerio de las Tecnologías de la Información y la Comunicación (2023, 2024), así como de la experiencia del Programa de Atención a Personas con Discapacidad (PAPD) de la Universidad de Antioquia y del Ministerio de la Igualdad.
      .col-lg-3.col-6.order-1.order-lg-2.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img4.png', alt='Texto que describa la imagen')
 

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.1	Recursos especializados
    .row.justify-content-center.align-items-center
      .col-lg-9.col-12.order-2.order-lg-1(data-aos="fade-left")
        p La identificación y selección adecuada de recursos especializados es un componente esencial dentro de la caja de herramientas para la accesibilidad. Estos recursos permiten responder de manera precisa a las necesidades de cada persona con discapacidad, fortaleciendo su autonomía y facilitando la interacción, la comunicación y el acceso a la información. Su implementación busca garantizar condiciones de igualdad y equidad en los procesos de valoración de apoyos, contribuyendo a eliminar barreras y a promover la participación plena y efectiva en todos los entornos.
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Tecnologías y productos de apoyo")
            p También conocidos como tecnologías de asistencia, comprenden todos los elementos, dispositivos, programas, aplicaciones, sistemas o servicios que utilizan la tecnología para mejorar la autonomía de personas con discapacidad, ya sea física, mental o funcional, y promover su bienestar.
            P Entre estos se encuentran:
            ul.lista-ul  
              li.mb--44
                i.lista-ul__vineta
                | Tableros de comunicación.
              li.mb--44
                i.lista-ul__vineta
                | Uso de gráficos.
              li.mb--44
                i.lista-ul__vineta
                | Sintetizadores de voz.
              li.mb--44
                i.lista-ul__vineta
                | Comunicación gestual.
              li.mb--44
                i.lista-ul__vineta
                | Otros dispositivos tecnológicos que fortalecen la autonomía.
          div(titulo="Recursos comunicativos")
            p Incluyen herramientas como:
            ul.lista-ul 
              li.mb--44
                i.lista-ul__vineta
                p.mb-0 #[i Software] lector de pantalla.
              li.mb--44
                i.lista-ul__vineta
                | Amplificadores de voz.
              li.mb--44
                i.lista-ul__vineta
                | Tabletas.
              li.mb--44
                i.lista-ul__vineta
                | Amplificadores de imagen.
              li.mb--44
                i.lista-ul__vineta
                | Otros dispositivos que facilitan la interacción y el acceso a la información.


      .col-lg-3.col-sm-6.col-8.order-1.order-lg-2.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img7.png', alt='Imagen decorativa')
      
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.2	Recursos pedagógicos
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-6.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img8.png', alt='Imagen decorativa')
      .col-lg-9.mb-4.mb-lg-0
        p(data-aos="fade-left") Se refiere a recursos humanos que desempeñan funciones como docentes de apoyo pedagógico, intérpretes de lengua de señas, guía-intérpretes y modelos lingüísticos. Estos recursos son fundamentales para garantizar el acceso a la comunicación, la información y el aprendizaje en condiciones de equidad.
        .row.align-items-center.bloque-texto-c.color-primario.p-4.mb-4
          .col-2.d-none.d-lg-block(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema3/img9.svg', alt='Imagen decorativa')
          .col-10
            p.mb-0(data-aos="fade-left") La definición de esta caja de herramientas se presenta con unos mínimos necesarios para la realización del proceso de valoración de apoyos, contribuyendo al cumplimiento de su propósito. Esto no implica que sea un insumo estático o definitivo, sino que se caracteriza por ser flexible, dinámico y susceptible de ser retroalimentado y actualizado de manera permanente.

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.3	Herramientas, insumos y acciones afirmativas por categoría de discapacidad
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img10.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La identificación de herramientas, insumos y acciones afirmativas según el tipo de discapacidad permite orientar de manera más precisa las estrategias de accesibilidad durante la valoración de apoyos. Este enfoque reconoce que cada categoría de discapacidad presenta particularidades que requieren soluciones diferenciadas y flexibles, siempre validadas por la propia persona. Al organizar estos recursos por tipo de discapacidad, se facilita la selección y aplicación de ajustes razonables y acciones afirmativas que garanticen condiciones de igualdad, autonomía y participación plena en los procesos.

    .titulo2.mb-4(data-aos="fade-left")
      h5.mb-0 Tipos de apoyo y las sugerencias para la interacción y el acercamiento a personas con discapacidad
    p.mb-4 En el cuadro que se presenta a continuación, se relacionan de manera general, según el tipo de discapacidad, las formas de comunicación utilizadas, los tipos de apoyo requeridos y las sugerencias para la interacción y el acercamiento. Estas generalidades deben ser validadas y aprobadas por las personas que participen en el proceso de valoración de apoyos.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.d-lg-block.d-none(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img11.svg', alt='Imagen decorativa')
      .col-lg-9
        p Para tener en cuenta:
        SlyderF.color-acento-botones.mb-0(columnas="col-lg-6 col-xl-4")
          .tarjeta.tarjeta.color-blanco.borde-sombra.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema3/img12.svg' alt='Imagen decorativa')
            p.text-center.mb-0 Jaws es un #[i software] que convierte en voz la información visual de la pantalla, permitiendo a personas ciegas utilizar el computador y sus aplicaciones de forma autónoma.
          .tarjeta.tarjeta.color-blanco.borde-sombra.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema3/img13.svg' alt='Imagen decorativa')
            p.text-center.mb-0 Para acceder gratuitamente a Jaws y ZoomText, se deben seguir los pasos indicados en ConverTic, programa del Estado colombiano que ofrece licencias país.
          .tarjeta.tarjeta.color-blanco.borde-sombra.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema3/img14.svg' alt='Imagen decorativa')
            p.text-center.mb-0 En el sistema operativo Windows, se puede activar el lector de pantalla Narrador y la herramienta de lupa.
          .tarjeta.tarjeta.color-blanco.borde-sombra.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema3/img15.svg' alt='Imagen decorativa')
            p.text-center.mb-0 VoiceOver es el lector de pantalla disponible en dispositivos Apple como Mac, iPhone, iPad y iPod Touch.
          .tarjeta.tarjeta.color-blanco.borde-sombra.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema3/img16.svg' alt='Imagen decorativa')
            p.text-center.mb-0 En dispositivos Android, se puede activar el lector de pantalla TalkBack.
          .tarjeta.tarjeta.color-blanco.borde-sombra.p-4
            .row.justify-content-center.mb-3
              .col-lg-6.col-sm-4.col-6
                img(src='@/assets/curso/temas/tema3/img17.svg' alt='Imagen decorativa')
            p.text-center.mb-0 La aplicación Be My Eyes, disponible en sistemas operativos Windows, iOS y Android, permite realizar videollamadas para describir imágenes en tiempo real.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1.mb-4.mb-lg-0
        p En este apartado, se abordan los tipos de apoyo que pueden requerir las personas con discapacidad, junto con orientaciones prácticas para favorecer una interacción respetuosa y efectiva en distintos contextos.
        p Cada subtema desarrolla las características del apoyo y las sugerencias para el acercamiento y la comunicación, de manera que sea posible identificar las estrategias más adecuadas según las necesidades de cada persona.
        p.mb-0 Estos contenidos buscan fortalecer la empatía, la comprensión y la capacidad de respuesta de quienes acompañan procesos de valoración o atención, promoviendo una atención centrada en la persona y basada en el respeto por la diversidad.
      .col-lg-3.col-6.order-1.order-lg-2.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img17.png', alt='Texto que describa la imagen')
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Discapacidad visual")
        .col-12
          .tabla-a.color-primario.mb-4
            table
              thead
                tr
                  th(style="width: 553px") Ajustes razonables: tecnológicos, comunicativo, pedagógicos
                  th Medio de lectura
                  th Medio de escritura
                  th Productos de apoyo
              tbody
                tr
                  td
                    ul.lista-ul  
                      li 
                        i.lista-ul__vineta
                        |  Adaptación de material auditivo y táctil.
                      li 
                        i.lista-ul__vineta
                        |  Permitir el acceso a herramientas tiflotecnológicas.
                      li 
                        i.lista-ul__vineta
                        |  Señalización en braille.
                      li 
                        i.lista-ul__vineta
                        |  El contenido gráfico y escrito debe describirse verbalmente.
                      li 
                        i.lista-ul__vineta
                        | Evitar interponer objetos u otros que obstruyan la movilidad de personas con discapacidad visual.
                  td #[i Software] como lectores y magnificadores de pantalla (Jaws, Lupa, ZoomText, Orca, Magic, entre otros).
                  td Braille Macrotipo (letra en mayor tamaño y con tinta en contraste).
                  td Bastón guía para la orientación y la movilidad. Lentes o lupas.
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema3/img18.png', alt='Imagen decorativa')
            .col-lg-8
              .titulo3.mb-4
                h5.mb-0 Mínimos para el acercamiento con las personas
              ul.lista-ul  
                li 
                  i.lista-ul__vineta
                  |   Hablar siempre dirigiendo la mirada a su cara.
                li 
                  i.lista-ul__vineta
                  |   Dirigirse directamente a la persona con discapacidad, no a su acompañante.
                li 
                  i.lista-ul__vineta
                  |   Identificarse con su nombre para que tenga claro quién le está hablando.
                li 
                  i.lista-ul__vineta
                  |  Para saludarle, toque su mano y hágalo normalmente. 
                li 
                  i.lista-ul__vineta
                  |  Describir el lugar donde la persona estará e indíquele si hay más personas presentes. 
                li 
                  i.lista-ul__vineta
                  | Para guiar a la persona, ofrézcale su brazo y camine un paso delante de	ella.

              .titulo3.mb-3
                h5.mb-0 Enlace de acceso a las herramientas
              p.text-bold Lectores de pantalla
              .row.mb-3
                .col-lg-3.col-6
                  a.boton.color-acento-botones(:href="('https://www.convertic.gov.co/641/w3-propertyvalue-15308.html')" target="_blank")
                    span CONVERTIC
                    i.fas.fa-file-code
              
                .col-lg-3.col-6
                  a.boton.color-acento-botones(:href="('https://nvda.es/descargas/descarga-de-nvda/')" target="_blank")
                    span NVDA
                    i.fas.fa-file-code
              p.text-bold  Descriptor de imágenes
              .row
                .col-lg-3.col-6
                  a.boton.color-acento-botones(:href="('https://apps.microsoft.com/detail/9msw46ltdwgf?hl=en-US&gl=US')" target="_blank")
                    span Be My Eyes
                    i.fas.fa-file-code
              
                .col-lg-3.col-6
                  a.boton.color-acento-botones(:href="('https://play.google.com/store/apps/details?id=appinventor.ai_mateo_nicolas_salvatto.Sordos&hl=es_CO')" target="_blank")
                    span Háblalo
                    i.fas.fa-file-code
      .row(titulo="Discapacidad auditiva")
        .col-12
          .tabla-a.color-primario.mb-4
            table
              thead
                tr
                  th(style="width: 553px") Ajustes razonables: tecnológicos, comunicativo, pedagógicos
                  th Medio de lectura
                  th Medio de escritura
                  th Productos de apoyo
              tbody
                tr
                  td
                    ul.lista-ul  
                      li 
                        i.lista-ul__vineta
                        |   Uso de herramientas tecnológicas como dispositivos de ayuda auditiva, teléfonos inteligentes, aplicaciones, entre otras.
                      li 
                        i.lista-ul__vineta
                        |   Recurrir al lenguaje facial y corporal.
                      li 
                        i.lista-ul__vineta
                        |   Tener el recurso del intérprete de lengua de señas colombiana cuando la persona es sordo señante
                      li 
                        i.lista-ul__vineta
                        |  Acceder a los recursos que ofrecen los sistemas aumentativos y alternativos de comunicación.

                  td Lengua de señas colombiana (alfabeto dactilológico).
                  td Lengua de señas colombiana (alfabeto dactilológico).
                  td 
                    ul.lista-ul  
                      li 
                        i.lista-ul__vineta
                        | Tableros de comunicación como pictogramas.
                      li 
                        i.lista-ul__vineta
                        | Audífonos.
                      li 
                        i.lista-ul__vineta
                        | Implantes cocleares o sistemas de frecuencia modulada, entre otros.

          .row.justify-content-center.align-items-center
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema3/img19.png', alt='Imagen decorativa')
            .col-lg-8
              .titulo3.mb-4
                h5.mb-0 Mínimos para el acercamiento con las personas
              ul.lista-ul  
                li 
                  i.lista-ul__vineta
                  | Reconocer que las personas no son iguales comunicativamente.
                li 
                  i.lista-ul__vineta
                  | Si la persona es sordo señante, usar la lengua de señas o solicitar apoyo de un intérprete de lengua de señas colombiana.
                li 
                  i.lista-ul__vineta
                  | Si en la conversación hay un intérprete de lengua de señas, hable con un ritmo y tono de voz natural.
                li 
                  i.lista-ul__vineta
                  | Hablarle directamente a la persona sorda y no al intérprete.
                li 
                  i.lista-ul__vineta
                  | Las personas que utilizan el español hablado como medio de intercambio social, requieren de apoyo visual para precisar la comprensión de los mensajes.
                li 
                  i.lista-ul__vineta
                  | Si el sordo es oralizado, háblele con claridad y a un ritmo normal. Module sin exagerar.
                li 
                  i.lista-ul__vineta
                  | Si desea llamar su atención prenda y apague la luz o mueva sus manos.
                li 
                  i.lista-ul__vineta
                  | No todas las personas sordas tienen buen uso del español, por lo tanto, escribir o entregar textos escritos no siempre garantiza el acceso a la comunicación, si ha de utilizarse, deben ser textos adaptados, con lenguaje sencillo que faciliten la comprensión 

              .titulo3.mb-3
                h5.mb-0 Enlace de acceso a las herramientas
              p.mb-0.text-bold Para la interpretación simultánea
              .row.mb-3
                .col-lg-4.col-6
                  a.boton.color-acento-botones(:href="('https://centroderelevo.gov.co/632/w3-channel.html')" target="_blank")
                    span Signos en Red
                    i.fas.fa-file-code
              
               
              p.mb-0.text-bold Aplicación recomendada para convertir audio a texto o viceversa; sonidos a señales visuales
              .row.mb-3
                .col-lg-3.col-6
                  a.boton.color-acento-botones(:href="('https://www.visualfy.com/es/apps-para-personas-sordas/')" target="_blank")
                    span Visualfy
                    i.fas.fa-file-code
              
              p.mb-0.text-bold Aplicación útil para convertir texto en voz y viceversa; para subtítulos
              .row
                .col-lg-3.col-6
                  a.boton.color-acento-botones(:href="('https://play.google.com/store/apps/details?id=appinventor.ai_mateo_nicolas_salvatto.Sordos&hl=es_CO')" target="_blank")
                    span Háblalo
                    i.fas.fa-file-code
      .row(titulo="Discapacidad física")
        .col-12
          .tabla-a.color-primario.mb-4
            table
              thead
                tr
                  th(style="width: 553px") Ajustes razonables: tecnológicos, comunicativo, pedagógicos
                  th Medio de lectura
                  th Medio de escritura
                  th Productos de apoyo
              tbody
                tr
                  td
                    ul.lista-ul  
                      li 
                        i.lista-ul__vineta
                        |  Adecuación de espacios que faciliten el desplazamiento y la movilidad.
                  td Palabras impresas o manuscritas.
                  td En caso de ser necesario, tener asistencia para el diligenciamiento de respuestas requeridas,  tanto escrito como verbales.
                  td 
                    p Prótesis, órtesis, sillas de ruedas, bastones, caminadores o muletas, entre otros. 
                    p.mb-0 En algunos casos requiere del apoyo de otra persona.

          .row.justify-content-center.align-items-center
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema3/img20.png', alt='Imagen decorativa')
            .col-lg-8
              .titulo3.mb-4
                h5.mb-0 Mínimos para el acercamiento con las personas
              ul.lista-ul  
                li.mb--44
                  i.lista-ul__vineta
                  | Para dirigirse a la persona, sitúese a su misma altura y delante de ella.
                li.mb--44
                  i.lista-ul__vineta
                  |   Hablarle siempre a la persona, no a su acompañante.
                li.mb--44
                  i.lista-ul__vineta
                  |   Si va a mover la silla de ruedas, debe advertirle, con anterioridad, de la maniobra que se va a realizar.
                li.mb--44
                  i.lista-ul__vineta
                  |   La silla de ruedas es parte de su espacio personal, no se apoye ni la mueva sin su permiso.
                li.mb--44
                  i.lista-ul__vineta
                  |   Asegúrese que las muletas, el bastón o cualquier tipo de tecnología de apoyo, estén al lado de la persona. No la retire sin pedirle permiso.
                li.mb--44
                  i.lista-ul__vineta
                  |   Cuando la persona con discapacidad física, tenga además, un componente de dificultad para articular las palabras, se le pide que escriba o utilice una forma alternativa de comunicación como sintetizadores de voz u otra tecnología que ya utilice la persona y lleve consigo.
                li.mb--44
                  i.lista-ul__vineta
                  |   Si es una persona de talla baja, ubique un banquito pequeño al lado de la silla para que se le facilite sentarse en esta.
                li.mb--44
                  i.lista-ul__vineta
                  | Asegúrese de ubicar los objetos a su altura
                li.mb--44
                  i.lista-ul__vineta
                  | Evite poner objetos que limiten su desplazamiento por el espacio.

              .titulo3.mb-3
                h5.mb-0 Enlace de acceso a las herramientas
              p.text-bold Aplicación útil para convertir texto en voz y viceversa; para subtítulos, especialmente para quienes requieren apoyo en el diligenciamiento de respuestas verbales
              .row.mb-3
                .col-lg-3.col-6
                  a.boton.color-acento-botones(:href="('https://play.google.com/store/apps/details?id=appinventor.ai_mateo_nicolas_salvatto.Sordos&hl=es_CO')" target="_blank")
                    span Háblalo
                    i.fas.fa-file-code
              
                
      .row(titulo="Discapacidad intelectual")
        .col-12
          .tabla-a.color-primario.mb-4
            table
              thead
                tr
                  th(style="width: 553px") Ajustes razonables: tecnológicos, comunicativo, pedagógicos
                  th Medio de lectura
                  th Medio de escritura
                  th Productos de apoyo
              tbody
                tr
                  td
                    ul.lista-ul  
                      li 
                        i.lista-ul__vineta
                        | Uso de sistemas aumentativos y alternativos de la comunicación (pictogramas, palabras, gestos, imágenes).
                      li 
                        i.lista-ul__vineta
                        | Promover procesos de atención y memoria.
                  td 
                    p Según nivel de dificultad que presente la persona.
                    p De menor complejidad leen palabras impresas o manuscritas.
                    p.mb De alta complejidad no alcanzan a descifrar el código escrito.

                  td 
                    p En personas con menor complejidad, la lectura es lenta, en ocasiones requiere de asistencia para completar y comprender la lectura.
                    p.mb-0 Las personas de mayor complejidad no alcanzan la destreza de la lectura.

                  td No aplica
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema3/img21.png', alt='Imagen decorativa')
            .col-lg-8
              .titulo3.mb-4
                h5.mb-0 Mínimos para el acercamiento con las personas
              ul.lista-ul  
                li 
                  i.lista-ul__vineta
                  | Las personas con limitación en el aprendizaje procesan la información y responden a las preguntas de forma más lenta.
                li 
                  i.lista-ul__vineta
                  | Utilizar frases cortas y claras.
                li 
                  i.lista-ul__vineta
                  | Actuar de manera natural en la forma de hablar, emplee un lenguaje simple y conciso.
                li 
                  i.lista-ul__vineta
                  | Trate a la persona como adulta, no como sui fuese un niño o niña.
                li 
                  i.lista-ul__vineta
                  | Darle más tiempo para responder a las preguntas. 
                li 
                  i.lista-ul__vineta
                  | Procure no ayudarle en exceso.
                li 
                  i.lista-ul__vineta
                  | Tómese el tiempo necesario para entender a la persona y asegúrese que ella le está entendiendo.
                li 
                  i.lista-ul__vineta
                  | Diríjase siempre a la persona con discapacidad intelectual, no a su acompañante.

              .titulo3.mb-3
                h5.mb-0 Enlace de acceso a las herramientas
              p.text-bold Aplicaciones que favorecen el acompaña miento, la comunicación, la lectura, entre otras necesidades de las personas
              .row.mb-3
                .col-lg-3.col-6
                  a.boton.color-acento-botones(:href="('https://www.discapnet.es/accesibilidad/accesibilidad-en-las-aplicaciones-moviles/discapacidad-intelectual ')" target="_blank")
                    span Discapnet
                    i.fas.fa-file-code
                  
              p.text-bold Aplicación que convierte de texto a pictogramas
              .row
                .col-lg-3.col-6
                  a.boton.color-acento-botones(:href="('https://www.pictofacile.com/es/')" target="_blank")
                    span Pictofacil 
                    i.fas.fa-file-code
      .row(titulo="Sordociegos")
        .col-12
          .tabla-a.color-primario.mb-4
            table
              thead
                tr
                  th(style="width: 553px") Ajustes razonables: tecnológicos, comunicativo, pedagógicos
                  th Medio de lectura
                  th Medio de escritura
                  th Productos de apoyo
              tbody
                tr
                  td
                    ul.lista-ul  
                      li
                        i.lista-ul__vineta
                        |   Utilizar texturas y materiales que estimulen los sentidos, y a través de estos recursos generar códigos de comunicación entre sí.
                      li
                        i.lista-ul__vineta
                        |   Reconocimiento de emociones a través del lenguaje corporal.
                      li
                        i.lista-ul__vineta
                        |   Las conductas disruptivas son la forma de expresar dolor, angustia, miedo y otros.
                      li
                        i.lista-ul__vineta
                        |  Implementar el sentido del tacto y uso de la lengua de señas.
                  td Guía- intérprete.
                  td Guía- intérprete.
                  td Algunas personas pueden utilizar el bastón guía para la orientación y la movilidad. Lentes o lupas.
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema3/img22.png', alt='Imagen decorativa')
            .col-lg-8
              .titulo3.mb-4
                h5.mb-0 Mínimos para el acercamiento con las personas
              ul.lista-ul  
                li.mb--44
                  i.lista-ul__vineta
                  | Preguntar por el sistema comunicativo que la persona sordociega utiliza.   
                li.mb--44
                  i.lista-ul__vineta
                  | La persona sordociega requiere que se le brinde información sobre lo que sucede en su entorno, a través de un guía- interprete.   
                li.mb--44
                  i.lista-ul__vineta
                  | Al relacionar se debe tocar suavemente su hombro o su brazo y decirle quién es antes de iniciar una conversación, incluso se vuelve a hacer después de una interrupción.    
                li.mb--44
                  i.lista-ul__vineta
                  | Debe saludar siempre y despedirse de ella cuando se retira.   
                li.mb--44
                  i.lista-ul__vineta
                  | Algunas personas tienen remanente visual y requieren que el interlocutor(a) se coloque enfrente de ellas, a la altura de sus ojos y muy cerca de su cara. 
              .titulo3.mb-3
                h5.mb-0 Enlace de acceso a las herramientas
              p.text-bold Aplicación que convierte la voz o el texto escrito en pictogramas
              .row.mb-3
                .col-lg-3.col-6
                  a.boton.color-acento-botones(:href="('https://play.google.com/store/apps/details?id=com.orange.dictapicto&hl=es')" target="_blank")
                    span Dictapicto
                    i.fas.fa-file-code             
              
      .row(titulo="Discapacidad psicosocial")
        .col-12
          .tabla-a.color-primario.mb-4
            table
              thead
                tr
                  th(style="width: 553px") Ajustes razonables: tecnológicos, comunicativo, pedagógicos
                  th Medio de lectura
                  th Medio de escritura
                  th Productos de apoyo
              tbody
                tr
                  td
                    ul.lista-ul  
                      li 
                        i.lista-ul__vineta
                        | Disponer de un lapso favorable, sin ocasionar estrés o ansiedad.
                      li 
                        i.lista-ul__vineta
                        | Sensibilizar a las demás personas sobre la discapacidad psicosocial y a su vez promover el apoyo y acompañamiento cuando las personas lo requieren.
                      

                  td Palabras impresas o manuscritas.
                  td Alcanzan la destreza de la lectura escrita o impresa.
                  td No aplica.
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema3/img23.png', alt='Imagen decorativa')
            .col-lg-8
              .titulo3.mb-4
                h5.mb-0 Mínimos para el acercamiento con las personas
              ul.lista-ul  
                li 
                  i.lista-ul__vineta
                  |   Algunas personas usan medicamento psiquiátrico, y otras, usan tratamientos alternativos	para permanecer emocionalmente estables.
                li 
                  i.lista-ul__vineta
                  |   Actuar de manera natural con las personas empleando  un lenguaje igual al que emplea con	los y las demás.
                li 
                  i.lista-ul__vineta
                  | Las personas con discapacidad psicosocial no permanecen en crisis. 
                li 
                  i.lista-ul__vineta
                  | Demostrar un trato digno y respetuoso, evitando hacer señalamientos por conductas, movimientos, expresiones, gestos entre otras. La comunicación debe ser abierta y respetuosa. 
                li 
                  i.lista-ul__vineta
                  | Generar un ambiente de cercanía, calidez y confianza para asegurar la efectividad en el proceso.

              .titulo3.mb-3
                h5.mb-0 Aplicación que se puede utilizar para el desarrollo y el tratamiento cognitivo
              p.text-bold 
              .row.mb-3
                .col-lg-3.col-6
                  a.boton.color-acento-botones(:href="('https://play.google.com/store/apps/details?id=com.imagiration.aphasia&pli=1')" target="_blank")
                    span Aphasia
                    i.fas.fa-file-code
              
      .row(titulo="Discapacidad múltiple")
        .col-12
          .tabla-a.color-primario.mb-4
            table
              thead
                tr
                  th(style="width: 553px") Ajustes razonables: tecnológicos, comunicativo, pedagógicos
                  th Medio de lectura
                  th Medio de escritura
                  th Productos de apoyo
              tbody
                tr
                  td 
                    p Tener en cuenta las recomendaciones escritas en cada tipo de discapacidad, que corresponda a las discapacidades y necesidades de la persona, que al ser múltiple se deben considerar de manera simultánea
                    p Identificar si hay prevalencia en una de las discapacidades.
                  td Según las discapacidades y necesidades de la persona y si hay alguna prevalencia en una de ellas.
                  td Según las discapacidades y necesidad es de la persona y si hay alguna prevalencia en una de ellas.
                  td Según las discapacidad y necesidades de la persona y si hay alguna prevalencia en una de ellas.
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure
                img(src='@/assets/curso/temas/tema3/img24.png', alt='Imagen decorativa')
            .col-lg-8
              .titulo3.mb-4
                h5.mb-0 Mínimos para el acercamiento con las personas
              p Tener en cuenta las recomendaciones escritas en cada tipo de discapacidad que corresponda a las discapacidades y necesidad es de la persona, que al ser múltiple se deben considerar de manera simultánea; Identificar si hay prevalencia en una de las discapacidades.

              .titulo3.mb-3
                h5.mb-0 Enlace de acceso a las herramientas
              p.text-bold Utilizar las aplicaciones y programas según las discapacidades y necesidades de la persona.
              

    .titulo2.mb-4(data-aos="fade-left")
      h5.mb-0 Ejemplo de aplicación de la caja de herramientas - Proceso de entrevista semiestructurada para la valoración de apoyos
    p.mb-4 Este ejemplo parte de la premisa de que ya se han identificado las necesidades específicas de la persona y se cuenta con orientaciones para la realización de la entrevista. En este caso, se trata de una persona con discapacidad intelectual en un nivel grave (según el DSM-5), con dificultades en la comunicación y la interacción. El objetivo es evaluar sus motivaciones y proyecto de vida.
    .row.justify-content-center.align-items-center.mb-4
      .col-10
        .row.bloque-texto-c.color-primario.justify-content-center.align-items-center.p-2
          .col-lg-1.p-0
            figure
              img(src='@/assets/curso/temas/tema3/img25.svg', alt='Imagen decorativa')
          .col-lg-11
            ol.lista-ol--cuadro
              li
              .lista-ol--cuadro__vineta
                span 1 
              | #[b Asegurar la accesibilidad de los materiales]
              p.mb-0.pt-2 Cuando la persona no sabe leer ni escribir, pero comprende a través de estrategias visuales, se recomienda el uso de videos y pictogramas. Las imágenes y símbolos deben representar claramente la información que se desea obtener. Una herramienta útil para este propósito es Pictofacile.
    .row.justify-content-center.align-items-center.mb-4
      .col-10
        .row.bloque-texto-c.color-primario.justify-content-center.align-items-center.p-2
          .col-lg-1.p-0
            figure
              img(src='@/assets/curso/temas/tema3/img26.svg', alt='Imagen decorativa')
          .col-lg-11
            ol.lista-ol--cuadro
              li
              .lista-ol--cuadro__vineta
                span 2 
              | #[b Diseñar preguntas accesibles]
              p.mb-0.pt-2 Para recoger la información necesaria durante la entrevista, se sugiere elaborar un listado de preguntas con lenguaje concreto y sencillo, acompañadas de imágenes o símbolos que representen cada pregunta y motiven a responder. Se recomienda utilizar papel bond, escribiendo una pregunta por hoja junto con su imagen correspondiente. Al presentar la hoja mientras se formula la pregunta de manera clara y pausada, se facilita la asociación entre el contenido verbal y visual, fortaleciendo la comprensión.
    .row.justify-content-center.align-items-center.mb-4
      .col-10
        .row.bloque-texto-c.color-primario.justify-content-center.align-items-center.p-2
          .col-lg-1.p-0
            figure
              img(src='@/assets/curso/temas/tema3/img27.svg', alt='Imagen decorativa')
          .col-lg-11
            ol.lista-ol--cuadro
              li
              .lista-ol--cuadro__vineta
                span 3 
              | #[b Verificar la comprensión]
              p.mb-0.pt-2 Es importante confirmar que la persona ha comprendido la información. Esto se puede identificar si la respuesta es coherente con la pregunta formulada. En caso de confusión, se le puede pedir que explique con sus propias palabras lo que ha entendido. Es fundamental valorar y reforzar los momentos de comprensión, y si es necesario, repetir la explicación con mayor lentitud y lenguaje más sencillo, validando nuevamente la comprensión.

    .row.justify-content-center.align-items-center.mb-4
      .col-10
        .row.bloque-texto-c.color-primario.justify-content-center.align-items-center
          .col-lg-12
            ol.lista-ol--cuadro
              li
              .lista-ol--cuadro__vineta
                span 4 
              | #[b Explorar sueños, intereses y apoyos necesarios]
              p.mb-4.pt-2 Para conocer aspectos esenciales de la vida de la persona, como sus intereses, metas y los apoyos que requiere para alcanzarlos, se recomienda utilizar la técnica del Personal Map (mapa personal), que es una herramienta del campo empresarial, desarrollada por Jurgen Appelo, pero que puede adaptarse a diferentes contextos. Esta herramienta gráfica permite identificar gustos, motivaciones, sueños y objetivos, facilitando una conversación centrada en la persona y sus aspiraciones.

              .titulo-sexto.color-acento-contenido(data-aos="fade-left")
                h5 Figura 4.
                <em> Ejemplo del mapa personal.</em>
              
              .row.justify-content-center.align-items-center
                .col-lg-12.movil(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/tema3/img28_1.svg', alt='En el centro: Nombre de la persona (también se puede poner una foto de la persona) 1. Pregunta motivadora que permita que la persona se centre en la identificación de sus motivaciones, por ejemplo, ¿Qué te gustaría hacer en los siguientes años? Presentarle las ideas de respuestas, acompañadas de imágenes. 2. Sueños y metas (guiada por una pregunta sencilla e imagen de apoyo) 3. Personas que le ayudan a cumplir su sueño y alcanzar la meta-red de apoyo (guiado con una pregunta sencilla e imagen de apoyo) 4. Pregunta motivadora que permita que la persona se centre en la identificación de sus motivaciones, por ejemplo, ¿Qué te gustaría hacer en los siguientes años? Presentarle las ideas de respuestas, acompañadas de imágenes.')
                .col-lg-12.desktop(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/temas/tema3/img28.svg', alt='En el centro: Nombre de la persona (también se puede poner una foto de la persona) 1. Pregunta motivadora que permita que la persona se centre en la identificación de sus motivaciones, por ejemplo, ¿Qué te gustaría hacer en los siguientes años? Presentarle las ideas de respuestas, acompañadas de imágenes. 2. Sueños y metas (guiada por una pregunta sencilla e imagen de apoyo) 3. Personas que le ayudan a cumplir su sueño y alcanzar la meta-red de apoyo (guiado con una pregunta sencilla e imagen de apoyo) 4. Pregunta motivadora que permita que la persona se centre en la identificación de sus motivaciones, por ejemplo, ¿Qué te gustaría hacer en los siguientes años? Presentarle las ideas de respuestas, acompañadas de imágenes.')

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5
        .row.bloque-texto-c.color-primario.justify-content-center.align-items-center
          .col-lg-2
            figure
              img(src='@/assets/curso/temas/tema3/img29.svg', alt='Imagen decorativa')
          .col-lg-10
            ol.lista-ol--cuadro
              li
              .lista-ol--cuadro__vineta
                span  5 
              | Registrar por escrito las respuestas de la persona y acompañarlas con imágenes que faciliten la comprensión y el análisis posterior.

      .col-lg-5
        .row.bloque-texto-c.color-primario.justify-content-center.align-items-center
          .col-lg-2
            figure
              img(src='@/assets/curso/temas/tema3/img30.svg', alt='Imagen decorativa')
          .col-lg-10
            ol.lista-ol--cuadro
              li
              .lista-ol--cuadro__vineta
                span 6 
              | Validar la información obtenida directamente con la persona, asegurándose de que lo registrado refleje fielmente lo que quiso expresar.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.col-12.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema3/img31.png', alt='Imagen decorativa')
      .col-lg-6.mb-4.mb-lg-0
        p(data-aos="fade-left") Es importante destacar que, mediante la estrategia de mapas personales, es posible obtener información adicional que contribuye al cumplimiento del propósito de la entrevista en el proceso de valoración de apoyos. Entre los tipos de mapas que pueden utilizarse se encuentran el mapa de vínculos, el de redes sociales, el biográfico, el de lugares significativos, entre otros. Estas herramientas permiten profundizar en aspectos clave de la vida de la persona, reconociendo sus experiencias, relaciones y entornos desde una perspectiva centrada en sus intereses y necesidades.
        p.mb-0(data-aos="fade-left") A continuación, se desarrolla un diálogo ilustrativo que permite comprender de manera aplicada los pasos y consideraciones del proceso de valoración de apoyos.

    .tarjeta--BG06.p-4.px-md-5.mb-4
      PasosB.color-acento-botones
        .row
          .col-lg-12.movil(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema3/img32_1.svg', alt='Imagen decorativa')
          .col-lg-12.desktop(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema3/img32.svg', alt='Imagen decorativa')
        .row
          .col-lg-12.movil(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema3/img33_1.svg', alt='Imagen decorativa')
          .col-lg-12.desktop(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema3/img33.svg', alt='Imagen decorativa')

        .row
          .col-lg-12.movil(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema3/img34_1.svg', alt='imagen decorativa')
          .col-lg-12.desktop(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema3/img34.svg', alt='imagen decorativa')

        .row
          .col-lg-12.movil(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema3/img35_1.svg', alt='imagen decorativa')
          .col-lg-12.desktop(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema3/img35.svg', alt='imagen decorativa')

        .row
          .col-lg-12.movil(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema3/img36_1.svg', alt='imagen decorativa')
          .col-lg-12.desktop(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema3/img36.svg', alt='imagen decorativa')

        .row
          .col-lg-12.movil(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema3/img37_1.svg', alt='imagen decorativa')
          .col-lg-12.desktop(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema3/img37.svg', alt='imagen decorativa')

    .bloque-texto-c.color-primario-medio.px-4.px-lg-0
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.col-6.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/tema3/img38.png', alt='Imagen decorativa')
        .col-lg-7
          .row.mb-3
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema3/img39.svg', alt='Imagen decorativa')
          p.mb-0 A continuación se presenta un vídeo que explica cómo crear un curso virtual accesible, incorporando elementos que orientan a las personas facilitadoras en el proceso de valoración de apoyos, especialmente al momento de entrevistarse y comunicarse con personas con discapacidad. Esto permite realizar ajustes razonables que garanticen la accesibilidad.

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="1312" height="738" src="https://www.youtube.com/embed/tSKbbHqnRDE" title="Diseñando un curso virtual accesible: paso a paso para la inclusión" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)

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

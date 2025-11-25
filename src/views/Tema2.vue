<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Ajustes razonables: según el tipo de discapacidad y la necesidad de la persona

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8(data-aos="zoom-in")
        p La Convención sobre los Derechos de las Personas con Discapacidad (2006, Art. 2) establece, como parte esencial del derecho a la accesibilidad, la figura de los ajustes razonables. Estos se definen allí como:
        .bloque-texto-c.color-primario.tarjeta.p-4
          .row.justify-content-center.align-items-center
            .col-lg-1.col-6.mb-lg-0.d-none.d-lg-block.mb-4.p-0(data-aos="zoom-in")
              figure
                img.img-fluid(src="@/assets/curso/temas/tema2/img1.svg" alt="Imagen decorativa")
            .col-lg-11
              p.mb-0 Modificaciones y adaptaciones necesarias y adecuadas que no impongan una carga desproporcionada o indebida, cuando se requieran en un caso particular, para garantizar a las personas con discapacidad el goce o ejercicio, en igualdad de condiciones con las demás, de todos los derechos humanos y libertades fundamentales.
      .col-lg-4.col-10.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img.img-fluid(src="@/assets/curso/temas/tema2/img2.png" alt="Imagen decorativa")
    .titulo-sexto.color-acento-contenido.offset-0.offset-lg-1(data-aos="fade-left")
      h5 Figura 3.
      i  Acto de apoyo intergeneracional en la comunidad
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.tarjeta--BG12.tarjeta.p-4
        .row.justify-content-center.align-items-center
          .col-lg-10.movil(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema2/img3_1.svg', alt='En la imagen se observa: Persona: La imagen presenta una ilustración de una mujer joven con el pelo largo y rojizo. Está vestida con una camisa verde y tiene una expresión pensativa, con una mano apoyada en la barbilla. Discurso: A ambos lados de la cabeza de la mujer hay dos burbujas de diálogo. En la burbuja de la izquierda se lee: "¿Cómo se materializan en mi institución y en mi comunidad los principios relacionados con la accesibilidad?" En la burbuja de la derecha se lee: "¿Desde mi rol como persona facilitadora de apoyos qué puedo hacer para garantizar los principios de la accesibilidad?". Atmósfera y estado de ánimo: La atmósfera general de la imagen es reflexiva y curiosa. La mujer parece estar contemplando preguntas importantes sobre la accesibilidad y su papel en promoverla.')
          .col-lg-10.desktop(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema2/img3.svg', alt='En la imagen se observa: Persona: La imagen presenta una ilustración de una mujer joven con el pelo largo y rojizo. Está vestida con una camisa verde y tiene una expresión pensativa, con una mano apoyada en la barbilla. Discurso: A ambos lados de la cabeza de la mujer hay dos burbujas de diálogo. En la burbuja de la izquierda se lee: "¿Cómo se materializan en mi institución y en mi comunidad los principios relacionados con la accesibilidad?" En la burbuja de la derecha se lee: "¿Desde mi rol como persona facilitadora de apoyos qué puedo hacer para garantizar los principios de la accesibilidad?". Atmósfera y estado de ánimo: La atmósfera general de la imagen es reflexiva y curiosa. La mujer parece estar contemplando preguntas importantes sobre la accesibilidad y su papel en promoverla.')

    p.mb-4 De esta definición se desprenden tres elementos clave:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-sm-6.col-8.mb-lg-0.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img4.png', alt='Imagen decorativa')
      .col-lg-8(data-aos="fade-left")
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="1.	Modificaciones y adaptaciones")
            ul.lista-ul  
              li 
                i.lista-ul__vineta
                | Implican estrategias específicas que deben seleccionarse según el tipo de discapacidad.
              li 
                i.lista-ul__vineta
                | Cada persona tiene necesidades particulares, por lo que las soluciones deben ser diversas y flexibles.
              li 
                i.lista-ul__vineta
                | El objetivo es garantizar que todas las personas con discapacidad accedan a la misma cantidad y calidad de información, comunicación y servicios que cualquier otra persona.
          div(titulo="2.	Proporcionalidad")
            ul.lista-ul 
              li 
                i.lista-ul__vineta
                | No se limita al aspecto económico.
              li 
                i.lista-ul__vineta
                | Si la única forma de garantizar el acceso resulta costosa, esto no debe convertirse en una barrera.
              li 
                i.lista-ul__vineta
                | Lo que se considera razonable y proporcional es elegir la alternativa más eficiente en términos de recursos, siempre que asegure el acceso pleno.
              li 
                i.lista-ul__vineta
                | La proporcionalidad reconoce que cada persona es única, por lo que las respuestas deben adaptarse a cada situación.
              li 
                i.lista-ul__vineta
                | Aunque existen estrategias recomendadas según el tipo de discapacidad, no hay soluciones universales ni manuales rígidos.
          div(titulo="3.	Igualdad")
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | No significa aplicar las mismas medidas para todas las personas, sino permitir que cada persona con discapacidad elija la estrategia más adecuada para ejercer sus derechos.
              li 
                i.lista-ul__vineta
                | La igualdad se traduce en un trato digno, en la posibilidad de comprender los procesos que se llevan a cabo y en la garantía de autonomía y toma de decisiones informadas.
    p.mb-4 En coherencia con lo anterior, es importante distinguir entre los ajustes razonables y los ajustes procesales.
    
    .tarjeta--container.row.justify-content-center.mb-4
      .col-lg-5.tarjeta.color-primarios.p-5
        .row.justify-content-center.mb-4
          .col-3
            figure
              img(src='@/assets/curso/temas/tema2/img5.svg', alt='Imagen decorativa')
        h5.text-center Ajustes razonables
        p Buscan garantizar el acceso a la información, la comunicación y los entornos físicos.
      .col-lg-5.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-3
            figure
              img(src='@/assets/curso/temas/tema2/img6.svg', alt='Imagen decorativa')
        h5.text-center Ajustes procesales
        ul.lista-ul 
          li 
            i.lista-ul__vineta
            | Se aplican en contextos judiciales o administrativos.
          li 
            i.lista-ul__vineta
            | Incluyen adaptar entrevistas, audiencias o espacios legales para que las personas con discapacidad comprendan y participen plenamente en los procedimientos.
          li 
            i.lista-ul__vineta
            | Tienen como finalidad asegurar la participación sin depender de terceras personas.
    
    .row.justify-content-center.align-items-center
      .col-lg-3.col-10.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img.img-fluid(src="@/assets/curso/temas/tema2/img7.svg" alt="Imagen decorativa")
      .col-lg-7(data-aos="zoom-in")
        p A continuación, se presentarán ejemplos de ajustes razonables según el tipo de discapacidad, que —según la experiencia del Programa de Atención a Personas con Discapacidad de la Universidad de Antioquia— son útiles para procesos de valoración de apoyos o en general para el trabajo con personas con discapacidad.
        p.mb-0 Es fundamental recordar que la valoración de apoyos no se aplica de manera universal, sino que debe evaluarse en cada caso concreto si es necesaria y pertinente.
        
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1	Discapacidad física

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8(data-aos="zoom-in")
        p Los ajustes razonables propuestos para la valoración de apoyos incluyen:
        .row
          .col-12
            .tarjeta-avatar-b.mb-3
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema2/img8.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul
                .p-4
                  p.mb-0 Garantizar un espacio que permita a la persona con discapacidad física desplazarse de manera autónoma. Esto implica contar con elementos como rampas, ascensores y baños adaptados.
        .row
          .col-12
            .tarjeta-avatar-b.mb-3
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/temas/tema2/img9.svg' alt='AvatarTop')
              .tarjeta.tarjeta--azul
                .p-4
                  p.mb-0 En casos donde la discapacidad impida el uso de teclados convencionales para manipular documentos digitales, se deben proporcionar tecnologías de apoyo que puedan operarse con otras partes del cuerpo, como los pies, el seguimiento ocular o el control por voz.
      .col-lg-4.col-10.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img.img-fluid(src="@/assets/curso/temas/tema2/img10.png" alt="Imagen decorativa")

    p.mb-0 Respecto a los ajustes procesales, si la persona presenta únicamente discapacidad física, no existirían barreras legales que justifiquen la realización de una valoración de apoyos ni otros procedimientos que cuestionen el ejercicio de su capacidad jurídica.


    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.2	Discapacidad auditiva
    p.mb-4 Los ajustes razonables propuestos para la valoración de apoyos incluyen:
    .row.mb-4
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema2/img11.svg' alt="Imagen decorativa")
        P.text-bold.text-center Modelo lingüístico
        p.text-center Cuando la persona no utiliza la lengua de señas como medio principal de comunicación.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema2/img12.svg' alt="Imagen decorativa")
        P.text-bold.text-center Intérprete de lengua de señas
        p.text-center Cuando la persona es usuaria de lengua de señas o tiene un manejo semilingüe.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema2/img13.svg' alt="Imagen decorativa")
        P.text-bold.text-center Lectura fácil
        p.text-center Cuando la persona se comunica principalmente a través del español escrito o es hablante oral.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema2/img14.svg' alt="Imagen decorativa")
        P.text-bold.text-center Textos acompañados de imágenes ilustrativas
        p.text-center Recomendado para cualquier persona con discapacidad auditiva, como apoyo visual para facilitar la comprensión.

    .row.justify-content-center.align-items-center
      .col-lg-10
        p.mb-0 En cuanto a los ajustes procesales, si la persona presenta únicamente discapacidad auditiva, no existirían barreras legales que justifiquen la realización de una valoración de apoyos ni otros procedimientos que cuestionen el ejercicio de su capacidad jurídica.
    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.3	Discapacidad visual
    p.mb-4 Los ajustes razonables propuestos para la valoración de apoyos incluyen:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-2.order-lg-1.mb-4.mb-lg-0
        .bloque-texto-c.color-primario.p-4
          ul.lista-ul 
            li.mb--44 
              i.lista-ul__vineta
              p.text-bold.mb-0 Uso de sistema braille.
            li.mb--44
              i.lista-ul__vineta
              p.text-bold.mb-0 Lectores de pantalla.
            li.mb--44
              i.lista-ul__vineta
              p.text-bold.mb-0 Tipografía en formato macrotipo.
            li.mb--44
              i.lista-ul__vineta
              p.text-bold.mb-0 <em>Software</em> que permita aumentar el tamaño de las imágenes.
            li.mb--44
              i.lista-ul__vineta
              p.text-bold.mb-0 Contraste adecuado entre el color de la letra y el fondo, especialmente para personas con baja visión.
            li.mb--44
              i.lista-ul__vineta
              p.text-bold.mb-0 Audiodescripción en contenidos audiovisuales.
            li.mb--44
              i.lista-ul__vineta
              p.text-bold.mb-0 Descripción de imágenes en los pies de página o en textos alternativos.

      .col-lg-4.col-6.order-1.order-lg-2.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img15.png', alt='Imagen decorativa') 
    .row.justify-content-center.align-items-center
      .col-lg-10
        p.mb-0 En cuanto a los ajustes procesales, si la persona presenta únicamente discapacidad visual, no existirían barreras legales que justifiquen la realización de una valoración de apoyos ni otros procedimientos que cuestionen el ejercicio de su capacidad jurídica.

    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.4	Discapacidad sordoceguera
    p.mb-4 Los ajustes razonables propuestos para la valoración de apoyos incluyen:
    .row.justify-content-center.align-items-center
      .col-lg-4.col-10.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img.img-fluid(src="@/assets/curso/temas/tema2/img16.png" alt="Imagen decorativa")
      .col-lg-8(data-aos="zoom-in")
        
        .bloque-texto-c.color-primario-medio.tarjeta.p-3.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-6.mb-lg-0.d-none.d-lg-block(data-aos="zoom-in")
              figure
                img.img-fluid(src="@/assets/curso/temas/tema2/img17.svg" alt="Imagen decorativa")
            .col-lg-10
              ul.lista-ul.mb-0
                li.mb--44
                  i.lista-ul__vineta
                  p.text-bold.mb-0 Modelo lingüístico adaptado a las necesidades comunicativas de la persona.
                li.mb--44
                  i.lista-ul__vineta
                  p.text-bold.mb-0 Guía-intérprete o mediación especializada en sordoceguera.
                li.mb--44
                  i.lista-ul__vineta
                  p.text-bold.mb-0 Explicaciones mediante el uso de objetos tridimensionales.
                li.mb--44
                  i.lista-ul__vineta
                  p.text-bold.mb-0 Sistema braille.
                li.mb--44
                  i.lista-ul__vineta
                  p.text-bold.mb-0 Materiales y apoyos en alto relieve.
        p.mb-0 En cuanto a los ajustes procesales, si la persona presenta únicamente discapacidad visual, no existirían barreras legales que justifiquen la realización de una valoración de apoyos ni otros procedimientos que cuestionen el ejercicio de su capacidad jurídica.

    separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.5	Discapacidad psicosocial
    p.mb-4 Los ajustes razonables propuestos para la valoración de apoyos incluyen:
    .row.mb-4
      .col-lg-4(data-aos="fade-left")
        .tarjeta.bloque-texto-c.p-4.h-100
          .row.align-items-center
            .col-lg-3
              figure
                img.img-fluid(src="@/assets/curso/temas/tema2/img18.svg" alt="Imagen decorativa")
            .col-lg-9
              p.text-bold.mb-0 Disponer de un espacio tranquilo, sin ruidos y con manejo adecuado de la iluminación.
      .col-lg-4(data-aos="fade-left")
        .tarjeta.bloque-texto-c.p-4.h-100
          .row.align-items-center
            .col-lg-3
              figure
                img.img-fluid(src="@/assets/curso/temas/tema2/img19.svg" alt="Imagen decorativa")
            .col-lg-9
              p.text-bold.mb-0 Utilizar un tono de voz calmado y una forma de hablar pausada.
      .col-lg-4(data-aos="fade-left")
        .tarjeta.bloque-texto-c.p-4.h-100
          .row.align-items-center
            .col-lg-3
              figure
                img.img-fluid(src="@/assets/curso/temas/tema2/img20.svg" alt="Imagen decorativa")
            .col-lg-9
              p.text-bold.mb-0 Incorporar materiales en lectura fácil.
    .row.mb-4
      .col-lg-4(data-aos="fade-right")
        .tarjeta.bloque-texto-c.p-4.h-100
          .row.align-items-center
            .col-lg-3
              figure
                img.img-fluid(src="@/assets/curso/temas/tema2/img21.svg" alt="Imagen decorativa")
            .col-lg-9
              p.text-bold.mb-0 Apoyar la comunicación mediante imágenes ilustrativas.
      .col-lg-4(data-aos="fade-right")
        .tarjeta.bloque-texto-c.p-4.h-100
          .row.align-items-center
            .col-lg-3
              figure
                img.img-fluid(src="@/assets/curso/temas/tema2/img22.svg" alt="Imagen decorativa")
            .col-lg-9
              p.text-bold.mb-0 Ofrecer flexibilidad en los horarios educativos y/o laborales.
      .col-lg-4(data-aos="fade-right")
        .tarjeta.bloque-texto-c.p-4.h-100
          .row.align-items-center
            .col-lg-3
              figure
                img.img-fluid(src="@/assets/curso/temas/tema2/img23.svg" alt="Imagen decorativa")
            .col-lg-9
              p.text-bold.mb-0 Permitir la presencia de un animal de compañía durante la evaluación, si la persona lo requiere.
    .row.justify-content-center.align-items-center
      .col-lg-1.d-none.d-lg-block(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img6.svg', alt='Imagen decorativa')
      .col-lg-11
        p.mb-0(data-aos="fade-left") En cuanto a los ajustes procesales, si la persona presenta discapacidad psicosocial, en principio no existirían barreras legales que justifiquen la realización de una valoración de apoyos ni otros procedimientos que cuestionen el ejercicio de su capacidad jurídica. Sin embargo, dependiendo del tipo y características de la discapacidad psicosocial, podría considerarse la pertinencia de realizar dicha valoración.
    separador
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.6	Discapacidad intelectual
    p.mb-4 Los ajustes razonables propuestos para la valoración de apoyos incluyen:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-6.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img25.png', alt='Imagen decorativa') 
      .col-lg-8.mb-4.mb-lg-0
        .bloque-texto-c.color-primario-medio.p-4
          ul.lista-ul 
            li.mb--44
              i.lista-ul__vineta
              p.text-bold.mb-0 Disponer de un espacio tranquilo, sin ruidos y con iluminación adecuada.
            li.mb--44
              i.lista-ul__vineta
              p.text-bold.mb-0 Utilizar un tono de voz calmado y una forma de comunicación pausada.
            li.mb--44
              i.lista-ul__vineta
              p.text-bold.mb-0 Emplear lenguaje claro y accesible.
            li.mb--44
              i.lista-ul__vineta
              p.text-bold.mb-0 Incorporar materiales en lectura fácil.
            li.mb--44
              i.lista-ul__vineta
              p.text-bold.mb-0 Apoyar las explicaciones con pictogramas, imágenes ilustrativas u objetos tridimensionales.
           
    .row.justify-content-center.align-items-center
      .col-lg-10
        p.mb-0 En cuanto a los ajustes procesales, si la persona presenta discapacidad intelectual, en principio no existirían barreras legales que justifiquen la realización de una valoración de apoyos ni otros procedimientos que cuestionen el ejercicio de su capacidad jurídica. No obstante, dependiendo del tipo y nivel de discapacidad intelectual, podría considerarse la pertinencia de realizar dicha valoración.

    separador
    #t_2_7.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.7	Discapacidad múltiple
    p En los casos de discapacidad múltiple, se recomienda revisar y aplicar las recomendaciones correspondientes a cada tipo de discapacidad que se presente de manera simultánea. La valoración de apoyos debe considerar las necesidades específicas de cada persona, reconociendo que la combinación de distintas discapacidades puede requerir estrategias integradas y flexibles, adaptadas a cada situación particular.
    p.mb-4 A continuación, se presenta un pódcast que plantea aspectos relacionados con el derecho a la accesibilidad.
    .row.justify-content-center
      .col-lg-8(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img26.svg', alt='Texto que describa la imagen')
      .col-lg-8(data-aos="zoom-in")
        .tarjeta.clr--pink.p-4.rounded-0.h-100
          .tarjeta.bg-white.p-4
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="Accesibilidad: El derecho que abre todos los derechos"
              :audio="require('@/assets/actividad/audio/Podcast_01.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
</template>

<script>
export default {
  name: 'Tema2',
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

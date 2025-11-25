<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1.mb-4.mb-lg-0
        p Es probable que, en su labor como persona facilitadora en procesos de valoración de apoyos, se haya enfrentado a dudas, inquietudes y preguntas relacionadas con el procedimiento, especialmente en lo que respecta a la implementación de ajustes razonables. Algunas de las preguntas más frecuentes incluyen:
        .row.align-items-center.bloque-texto-c.color-primario-claro.p-3.mb-3
          .col-lg-2.d-none.d-lg-block(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/intro/img1.svg', alt='Imagen decorativa')
          .col-lg-10
            ul.mb-0.lista-ul
              li
                i.lista-ul__vineta
                p.mb-0.text-bold ¿Qué implica el derecho a la accesibilidad?
              li
                i.lista-ul__vineta
                p.mb-0.text-bold ¿Qué ajustes razonables pueden aplicarse durante la valoración de apoyos, según el tipo de discapacidad y las necesidades de cada persona?
              li
                i.lista-ul__vineta
                p.mb-0.text-bold ¿Con qué herramientas cuenta una persona facilitadora para llevar a cabo este proceso?
              li
                i.lista-ul__vineta
                p.mb-0.text-bold ¿Qué formatos deben utilizarse?

        p Estos aspectos serán abordados en el presente material formativo, cuyo propósito es ofrecer herramientas prácticas y pertinentes para realizar procesos de valoración de apoyos a personas con discapacidad dentro de las instituciones. Esto permitirá proponer ajustes razonables y acciones concretas que contribuyan a garantizar su autonomía, fortalecer su autodeterminación y promover el ejercicio pleno de sus derechos.
        p.mb-0 Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:

      .col-lg-3.col-6.order-1.order-lg-2.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/intro/img2.png', alt='Texto que describa la imagen')


    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="1312" height="738" src="https://www.youtube.com/embed/jVdY71bHNWY" title="Accesibilidad, ajustes razonables, caja de herramientas y formatos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 4
      h1 Formatos propuestos
    p.mb-4 Se anexan como propuesta los siguientes formatos;
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1.mb-4.mb-lg-0
        .bloque-texto-c.color-primario-medio.p-4
          .row 
            .col-lg-10.mb-4(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/tema4/img1.svg', alt='Texto que describa la imagen')
            .col-lg-12  
              ul.lista-ul 
                li 
                  i.lista-ul__vineta
                  | Informe de valoración de apoyos.
                li 
                  i.lista-ul__vineta
                  | Consentimiento informado para la persona con discapacidad.
                li 
                  i.lista-ul__vineta
                  | Consentimiento informado para las personas que se configuran como red de apoyo para la persona en condición de discapacidad y que participan en la valoración.
      .col-lg-3.col-6.order-1.order-lg-2.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema4/img2.png', alt='Imagen decorativa') 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta.color-acento-botones-claro.p-3(data-aos="fade-right")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema4/img3.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-sm-0.mb-4
                  h5.mb-1 Anexo - Formatos
                  p Tipos de apoyo y las sugerencias para la interacción y el acercamiento a personas con discapacidad
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo 2_Formatos CF04.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    .row 
      .col-lg-12.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema4/img3.png', alt='Texto que describa la imagen')
</template>

<script>
export default {
  name: 'Tema4',
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

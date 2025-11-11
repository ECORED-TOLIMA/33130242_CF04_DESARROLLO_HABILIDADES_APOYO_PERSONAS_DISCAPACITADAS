<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p En este componente formativo se aborda el derecho a la accesibilidad y su exigibilidad, comprendido como un elemento esencial en el proceso de valoración de apoyos para personas con discapacidad. La accesibilidad se reconoce como un pilar fundamental, sustentado en los principios de universalidad, indivisibilidad, interdependencia, progresividad, igualdad y no discriminación.
    p A partir de esta base, se resalta la importancia de implementar ajustes razonables según el tipo de discapacidad, los cuales se constituyen en acciones afirmativas que fortalecen la autonomía, la autodeterminación y la libertad en la toma de decisiones. Para este propósito, se dispone de una caja de herramientas con recursos especializados y pedagógicos que las personas facilitadoras de apoyo pueden aplicar tras el análisis de las necesidades particulares de cada caso.
    p.mb0 Asimismo, se incluyen formatos que sirven como guía práctica durante el proceso de valoración de apoyos, garantizando condiciones de equidad y accesibilidad para todas las personas con discapacidad.

    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

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
          img(src="@/assets/curso/temas/sintesis.svg", alt="Diagrama  de la síntesis del componente formativo Accesibilidad, ajustes razonables, caja de herramientas y formatos, que se divide en cuatro bloques principales: Derecho a la accesibilidad, Ajustes razonables según el tipo de discapacidad y la necesidad de la persona, Caja de herramientas para la accesibilidad de las personas con discapacidad y Formatos propuestos. En la sección Derecho a la accesibilidad se despliegan los principios que abarca: principio de universalidad, principio de indivisibilidad, principio de interdependencia, principio de progresividad, y principios de igualdad y no discriminación. En la sección Ajustes razonables según el tipo de discapacidad y la necesidad de la persona se listan distintas categorías de discapacidad: discapacidad física, discapacidad auditiva, discapacidad visual, discapacidad sordo-ceguera, discapacidad psicosocial, discapacidad intelectual y discapacidad múltiple. En la sección Caja de herramientas para la accesibilidad de las personas con discapacidad se incluyen tres elementos: recursos especializados, recursos pedagógicos y herramientas, insumos y acciones afirmativas por categoría de discapacidad. La sección final, Formatos propuestos, se presenta como un bloque independiente sin subdivisiones adicionales.")
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

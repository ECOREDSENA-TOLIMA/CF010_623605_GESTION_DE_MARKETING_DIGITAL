<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 El componente formativo de Gestión de la comunicación se enfoca en abordar la influencia de la sociedad del conocimiento, las nuevas tecnologías, la globalización y la constante innovación en diversos campos, que han arraigado firmemente en el entorno empresarial en las últimas dos décadas. En el contexto actual, las empresas se han visto en la necesidad de ampliar su presencia digital para mantenerse competitivas, lo que ha dado lugar a la creación de departamentos de <i>marketing</i> digital dedicados a diseñar estrategias que comprendan a fondo el mercado, el consumidor y las nuevas vías de comunicación. Estos profesionales se encargan de crear contenidos digitales que logren no solo captar la atención, sino también establecer una conexión profunda con el cliente final o potencial, con el objetivo de fidelizarlos. Por lo tanto, el conocimiento de cómo implementar la comunicación digital en campañas publicitarias se ha vuelto crucial en el entorno empresarial actual.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis del componente formativo Gestión de la comunicación, se enfoca en abordar la influencia de la sociedad del conocimiento, las nuevas tecnologías, la globalización y la constante innovación.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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

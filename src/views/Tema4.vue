<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 <i>Branding</i>

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_4_1 4.1 Identidad de marca
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_4_1 4.1 Construcción de la marca
    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_4_1 4.1 Posicionamiento de la marca

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

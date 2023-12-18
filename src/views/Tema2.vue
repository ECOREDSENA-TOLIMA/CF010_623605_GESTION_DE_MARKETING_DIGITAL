<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Netiquetas
    
    p(data-aos="fade-left") Los nuevos cambios tecnológicos que vive la sociedad han traído avances significativos, en cuanto a los nuevos estilos de vida, sin embargo, al estar interactuando en la sociedad virtual o en comunidades virtuales se exige un buen comportamiento como usuario en cualquier contexto del ciberespacio.
    p(data-aos="fade-left") Por lo anterior nace el concepto netiqueta que se deriva de la palabra etiqueta que significa:

    .row.justify-content-center.mt-5
      .col-12 
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span #[i Concepto de etiqueta y netiqueta]
        .col-12 
          figure.desktop(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/1.svg' alt='En la figura 4 se muestran los conceptos de etiqueta y netiqueta.')
            
        .row.justify-content-center
          .col-12 
            figure.movil(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema2/2.svg' alt='En la figura 4 se muestran los conceptos de etiqueta y netiqueta.')
    
    p.mt-5(data-aos="fade-left") Por lo cual, la netiqueta debe contar con unos protocolos que permitan interactuar en una nueva cultura como es la del ciberespacio, un inadecuado comportamiento o desconocimiento del mismo puede ocasionar malas interpretaciones sobre el contenido y como consecuencia de ello se llega a cometer algunos errores por parte de los usuarios. Por lo que es importante resaltar que detrás de cada dispositivo hay un ser humano que piensa y actúa diferente a nosotros y por ello se hace indispensable establecer un conjunto de reglas, como se muestra en la siguiente figura:

    .row.justify-content-center.mt-5
      .col-lg-10.col-12 
        .titulo-sexto.color-acento-contenido
          h5 Figura 5.
          span #[i Reglas de netiqueta]
        .col-12 
          figure.desktop(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/3.svg' alt='En la figura 5 se muestran las reglas de netiqueta.')
            
        .row.justify-content-center
          .col-12 
            figure.movil(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema2/4.svg' alt='En la figura 5 se muestran las reglas de netiqueta.')
    
    p.mt-5(data-aos="fade-left") Para cerrar este tema se invita a ver el siguiente videoclip denominado “Netiqueta y comunicación en medios digitales” que ampliará los conceptos vistos.

    .row.mt-5
      figure(data-aos="fade-right")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/nETS1sXMKbw?si=HXGZ_SNwXowMoD7o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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

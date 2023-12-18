<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p(data-aos="fade-left") La gestión de la comunicación permite a las organizaciones diseñar técnicas y estrategias de comunicación digital; en las cuales se manejen el lenguaje y protocolos pertinentes a la virtualidad que estarán relacionados estrechamente con el contenido digital y la identidad de marca.
    p.mb-5(data-aos="fade-left") Por lo anterior, las organizaciones demandan personal idóneo, con habilidades y conocimientos en la comunicación digital, netiqueta, PQRS, servicios al cliente y <i>branding</i>; quienes diseñarán estrategias de comunicación digital que creen contacto y fidelización con los consumidores.  Para dar inicio al contenido se invita a ver el siguiente video: gestión de comunidades virtuales.

    .row 
      figure(data-aos="fade-right")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/jXAViMWFZmI?si=HtKzvpf_x07LDwsD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
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

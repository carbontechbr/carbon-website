<template>
   <div class="modal__content">      
      <div class="modalFactory">
         <div class="modalFactory__container">
            <button class="btn__text js-modalFactory-close" @click="closeModal" aria-label="Fechar modal">
               <i class="icon icon-close"></i>
            </button>

            <slot></slot>
         </div>
      </div>      
      <div class="modalFactory__overlay"></div>
   </div>
</template>

<script setup lang="ts">
   
   const closeModal = (e) => { 
      const pauseVideo = document.querySelectorAll('.y-video');
      const thisModal = e.currentTarget.closest('.modal__content');

      thisModal.classList.remove('is__show');

      if(pauseVideo.length) {
         pauseVideo.forEach(function(video){
            video.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
         });
      }
   }
</script>

<style lang="scss" scoped>

   .modal__content {
      display: none;
      animation: FadeOut .5s;

      &.is__show {
         display: block;
         animation: FadeIn .1s;
      }     
   }

   .modalFactory__container {
      width: 90%;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #FFFFFF;
      padding: 48px 32px;
      border-radius: 6px;
      z-index: 30;        
   }

   .modalFactory__overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0, .5);
      pointer-events: none;
      z-index: 20;
   }

   .js-modalFactory-close {
      position: absolute;
      top: 15px;
      right: 32px;
      color: #262E32;
      cursor: pointer;

      .icon {
         font-size: 1.2rem;
         font-weight: 600;
      }
   }   

   @keyframes FadeIn {
      0% {

         opacity: 0;
         display: block;
      }

      100% {
         opacity: 1;
         display: block;
      }
   }

   @keyframes FadeOut {
      0% {
         opacity: 1;
         display: none;
      }
     
      100% {
         display:none;
         opacity: 0;
      }
   }

   @media(screen(md)) {
      .modalFactory__container {
         max-width: 615px;
      }  
   }

   @media(screen(lg)) {
      .modalFactory__container {
         max-width: 815px;
      }  
   }

</style>
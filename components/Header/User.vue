<template>
  <div class="main">
    <div class="button" @click="likesModal = true">
      <p>הרכבים שאהבתי</p>
      <IconsHeaderLikeEmpty class="ico" />
    </div>
    <div v-if="likesModal" class="overlay" />
    <transition name="slide">
      <div
        v-if="likesModal"
        v-click-outside="() => (likesModal = false)"
        class="modal"
      >
        <div class="w-full flex justify-between items-center">
          <div class="flex gap-2 items-center">
            <IconsLikeHeartEmpty class="h-5" />
            הרכבים שאהבתי
          </div>
          <IconsModalExit
            class="h-3 cursor-pointer"
            @click.native="likesModal = false"
          />
        </div>
        <div class="pt-4 grid lg:grid-cols-2 gap-8">
          <CarCard v-for="x in 4" :key="x" :mini="true" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HeaderUserComponent',
  data: () => ({
    likesModal: false,
  }),
}
</script>

<style lang="scss" scoped>
.main {
  .button {
    @apply flex items-center gap-2;
    p {
      @apply cursor-pointer hover:opacity-80;
    }
    .ico {
      @apply h-4 fill-current;
    }
  }

  .overlay {
    @apply bg-white bg-opacity-70;
    @apply fixed inset-0;
    @apply z-[9998];
  }
  .modal {
    @apply fixed left-0 top-0 bg-white text-black  p-4 border;
    @apply z-[9999];
  }
}

.slide-enter {
  transform: translateX(0);
}
.slide-enter-active {
  animation: slide-in 0.3s ease-out forwards;
}
.slide-leave-active {
  animation: slide-out 0.3s ease-out forwards;
}
.slide-leave-to {
  transform: translateX(-100vw);
}
@keyframes slide-in {
  0% {
    transform: translateX(-100vw);
  }
  30% {
    transform: translateX(-50vw);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100vw);
  }
}
</style>

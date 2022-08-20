<template>
  <div id="app">
    <NuxtLoadingIndicator />
    <NavbarAside class="z-1" />
    <!-- <CartOrder/> -->
    <div class="relative pl-20 bg-blueGray-100">
      <div class="relative sticky top-0">
        <div>
          <div class="flex align-middle">
            <div class="">
              <a class="btn btn-ghost normal-case text-xl">OHZAO</a>
            </div>
            <p>OHZAO | Agent</p>
          </div>
        </div>
      </div>
      <main class="pt-5">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

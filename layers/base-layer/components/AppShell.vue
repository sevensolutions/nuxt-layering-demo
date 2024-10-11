<template>
  <div class="pa-2">
    <header>
      <nav class="grid gap-4 grid-cols-1">
        <slot name="nav"></slot>
      </nav>
    </header>

    <main class="mt-4">
      <slot>
        <NuxtPage />
      </slot>
    </main>
  </div>
</template>

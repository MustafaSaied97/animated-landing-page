// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  //----------------------for auto modules----------------------
  modules: [
    // async (_options, nuxt) => {
    //   nuxt.hooks.hook("vite:extendConfig", (config) => {
    //     // @ts-expect-error
    //     config.plugins.push(vuetify({ autoImport: true }));
    //   });
    // },
   ],

  css: ['~/assets/css/main.css'],
  //----------------------for auto imports----------------------
  imports: {
    autoImport: true
    // dirs: [
    //   // Only auto-import from these directories
    //   "composables",
    //   "utils",
    //   "stores",
    // ],
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false, // Important for section imports
      extensions: ['.vue']
    }
  ],
  // ignore: ["pages/**/_*"],

  //----------------------others----------------------
  experimental: {
    componentIslands: true
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.includes('-')
    }
  },

  // Add this typescript configuration
  typescript: {
    shim: false,
    typeCheck: false, // Disable if you don't need runtime type checking
    tsConfig: {
      compilerOptions: {
        types: ['@nuxt/types', '@nuxtjs/tailwindcss']
      }
    }
  }
})

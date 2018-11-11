# nuxt_prismic
Nuxt Modul for Prismic Integration 

# Installation
### Using package managers
`npm install --save nuxt_prismic`


## How to implement in your Projekt?
* Add nuxt_prismic to Nuxt-Modul Option
* Set nuxt_prismic Base-Url
* Add nuxt_prismic to Nuxt-Build-Vendor Option

nuxt.config.js:

```js
export default {
  modules: ['nuxt_prismic']
  prismic: {
    baseURL: "" //required Option
  },
  build: {
    vendor: ["nuxt_prismic"],
 }
}
```

## How to use it?

### In Nuxt-Page Component:
```js
async asyncData({ app, error }) {
    try {
      const { results } = await app.$prismic.query(
        app.$prismic.Predicates.at("document.type", "home")
      );

      return {
        content: results
      };
    } catch (err) {
      error({ statusCode: 404, errorMessage: err });
    }
  },
```
### In Vuex:

```js
const createStore = () => {
  return new Vuex.Store({
    state: {
      settings: ""
    },
    actions: {
      async nuxtServerInit({ commit }) {
        const { results } = await this.$prismic.query(
          this.$prismic.Predicates.at("document.type", "settings")
        );

        commit("SET_SETTINGS", results[0].data);
      }
    },
    mutations: {
      SET_SETTINGS(state, settings) {
        state.settings = settings;
      }
    }
  });
};
```






 
 

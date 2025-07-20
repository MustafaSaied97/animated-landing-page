import { defineComponent, createElementBlock, shallowRef, getCurrentInstance, provide, cloneVNode, h, useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main$2 = {
  __name: "ASCLogoMainIcon",
  __ssrInlineRender: true,
  props: {
    name: { type: String, required: true },
    size: { type: [String, Number], default: 24 }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        width: "401",
        height: "209",
        viewBox: "0 0 401 209",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, _attrs))}><path d="M72.04 198.186H35.6217L31.4019 207.701H0.121094L32.9616 138.972H75.7092L110.66 207.701H76.3512L72.04 198.186ZM53.6015 158.094L44.0614 179.248H63.3252L53.6015 158.094Z" fill="black"></path><path d="M105.8 184.883V184.052H141.209C141.392 187.285 142.86 192.458 154.877 192.458H155.244C166.252 192.458 168.453 189.779 168.453 186.916V186.731C168.453 183.959 167.169 181.557 154.235 181.188L140.658 180.819C113.322 179.987 106.9 170.287 106.9 159.479V158.648C106.9 146.546 115.982 137.771 148.364 137.771H158.454C193.864 137.771 202.028 148.024 202.028 159.387V160.034H167.169C166.985 157.632 165.61 153.66 154.051 153.66H153.593C142.952 153.66 141.484 155.507 141.484 158.001V158.094C141.484 160.773 143.869 162.528 155.427 162.805L168.453 163.082C194.781 163.729 204.505 170.103 204.505 184.052V185.345C204.505 197.262 197.258 208.994 159.83 208.994H149.465C109.744 208.994 105.8 193.751 105.8 184.883Z" fill="black"></path><path d="M234.319 160.857H204.872V139.333H294.771V160.857H265.324V208.062H234.319V160.857Z" fill="black"></path><path d="M347.059 208.994C302.477 208.994 296.147 188.209 296.147 174.537V171.766C296.147 157.909 302.018 137.679 347.059 137.679H350.453C394.027 137.679 399.806 156.708 399.897 166.223V167.517H368.25C367.791 165.854 365.865 158.002 348.344 158.002C331.373 158.002 328.07 165.577 328.07 172.32V173.429C328.07 179.988 331.74 188.486 348.435 188.486C366.323 188.486 367.975 179.895 368.25 178.325H399.897V180.265C399.897 189.687 393.935 208.994 350.453 208.994H347.059Z" fill="black"></path><path d="M66.2669 53.6732L42.8106 111.954C41.4928 115.228 44.1953 118.709 47.6684 118.212L156.915 102.562L185.259 31.1318L74.5966 47.1081C70.858 47.6481 67.6857 50.1484 66.2669 53.6732Z" fill="#3246A9"></path><path d="M153.088 20.8376L126.934 85.8236L226.832 71.1368C231.573 70.4401 235.589 67.2581 237.377 62.7822L260.21 5.62597C261.375 2.70895 258.966 -0.384416 255.875 0.0605114L162.405 13.4994C158.223 14.1007 154.675 16.8956 153.088 20.8376Z" fill="#465AE5"></path><path d="M126.934 85.8232L156.916 102.562L165.827 80.1055L126.934 85.8232Z" fill="#1E2D6E"></path></svg>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/ASCLogoMainIcon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_1 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(props, { slots, attrs }) {
    const mounted = shallowRef(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return () => {
      if (mounted.value) {
        const vnodes = slots.default?.();
        if (vnodes && vnodes.length === 1) {
          return [cloneVNode(vnodes[0], attrs)];
        }
        return vnodes;
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return h(slot);
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _imports_0 = "" + __buildAssetsURL("main_head.By05PoUo.mp4");
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_ASCLogoMainIcon = _sfc_main$2;
  const _component_ClientOnly = __nuxt_component_1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "section" }, _attrs))} data-v-a7c1e792><article class="article-1" data-v-a7c1e792><video autoplay muted loop id="myVideo" class="article-1__video" data-v-a7c1e792><source${ssrRenderAttr("src", _imports_0)} type="video/mp4" data-v-a7c1e792></video><div class="article-1__header" data-v-a7c1e792><div class="header__icon" data-v-a7c1e792>`);
  _push(ssrRenderComponent(_component_ASCLogoMainIcon, null, null, _parent));
  _push(`</div><h2 class="header__text" data-v-a7c1e792><span class="header__text__title header__text__title--normal" data-v-a7c1e792> Arabian for Science and Technology Co. </span><span class="header__text__title header__text__title--bold" data-v-a7c1e792> Innovate Local. Impact Global. </span></h2></div></article><article class="article-2" data-v-a7c1e792><h2 class="article-2__main-title" data-v-a7c1e792>Now Introducing</h2><div class="article-2__header" data-v-a7c1e792><h3 class="article-2__header__features" data-v-a7c1e792>New Strategy. New Identity. New Website.</h3><h3 class="" data-v-a7c1e792>Soon</h3></div>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
  _push(`</article></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/HeroSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-a7c1e792"]]), { __name: "HeroSection" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HeroSection = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-CdoD7yYc.mjs.map

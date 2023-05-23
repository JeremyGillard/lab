<template>
  <div class="bloc">
    <svg
      id="svg"
      width="434"
      height="1386"
      viewBox="0 0 434 1386"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref="path0"
        class="elt elt0 path"
        d="M194 0.5V319"
        stroke="black"
        stroke-width="4"
      />
      <path
        ref="path1"
        class="elt elt2 path"
        d="M194 319H434"
        stroke="black"
        stroke-width="4"
      />
      <path
        ref="path2"
        class="elt elt3 path"
        d="M194 319V686.5"
        stroke="black"
        stroke-width="4"
      />
      <path
        ref="path3"
        class="elt elt6 path"
        d="M194 686.5V1017.5"
        stroke="black"
        stroke-width="4"
      />
      <path
        ref="path4"
        class="elt elt9 path"
        d="M194 1017.5V1385.5"
        stroke="black"
        stroke-width="4"
      />
      <path
        ref="path5"
        class="elt elt5 path"
        d="M194 686.5H0.5"
        stroke="black"
        stroke-width="4"
      />
      <path
        ref="path6"
        class="elt elt8 path"
        d="M194 1017.5H434"
        stroke="black"
        stroke-width="4"
      />
      <circle class="elt elt1" cx="194" cy="319" r="24" fill="black" />
      <circle class="elt elt4" cx="194" cy="687" r="24" fill="black" />
      <circle class="elt elt7" cx="194" cy="1018" r="24" fill="black" />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { useElementBounding } from "@vueuse/core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const path0 = ref<SVGPathElement | null>(null);
const { height: height0 } = useElementBounding(path0);
const path1 = ref<SVGPathElement | null>(null);
const { width: height1 } = useElementBounding(path1);
const path2 = ref<SVGPathElement | null>(null);
const { height: height2 } = useElementBounding(path2);
const path3 = ref<SVGPathElement | null>(null);
const { width: width3 } = useElementBounding(path3);
const path4 = ref<SVGPathElement | null>(null);
const { height: height4 } = useElementBounding(path4);
const path5 = ref<SVGPathElement | null>(null);
const { width: width5 } = useElementBounding(path5);
const path6 = ref<SVGPathElement | null>(null);
const { height: height6 } = useElementBounding(path6);

// TODO: pour éviter d'avoir à calculer la longueur de chaque segment à l'aide de références multiples comme ci-dessus, il sera intéressant d'avoir un réguliraté dans la génération des path
onMounted(() => {
  // gsap.defaults({ ease: "none" });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#svg",
      scrub: true,
      start: "top center",
      end: "bottom center",
    },
  });
  tl.to(".elt0", {
    strokeDashoffset: 0,
    duration: 1,
  });
  tl.from(".elt1", {
    scale: 0,
    transformOrigin: "center",
    ease: "elastic(2.5, 1)",
    duration: 0.2,
  });
  tl.to(".elt2", {
    strokeDashoffset: 0,
    duration: 1,
  });
  tl.to(".elt3", {
    strokeDashoffset: 0,
    duration: 1,
  });
  tl.from(".elt4", {
    scale: 0,
    transformOrigin: "center",
    ease: "elastic(2.5, 1)",
    duration: 1,
  });
  tl.to(".elt5", {
    strokeDashoffset: 0,
    duration: 1,
  });
  tl.to(".elt6", {
    strokeDashoffset: 0,
    duration: 1,
  });
  tl.from(".elt7", {
    scale: 0,
    transformOrigin: "center",
    ease: "elastic(2.5, 1)",
    duration: 1,
  });
  tl.to(".elt8", {
    strokeDashoffset: 0,
    duration: 1,
  });
  tl.to(".elt9", {
    strokeDashoffset: 0,
    duration: 1,
  });
});
</script>

<style scoped>
.elt {
  stroke-width: 12px;
}

.path {
  stroke-dasharray: 400px;
  stroke-dashoffset: 400px;
}

circle {
  fill: var(--clr-neutral-400);
  stroke-width: 12px;
  stroke: black;
}

.line {
  stroke-dasharray: 1584px;
  stroke-dashoffset: 1584px;
}
</style>

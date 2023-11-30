import type { ITodo } from '@/interfaces/todoInterface';
import { useTodoStore } from '@/store/todo';
import { ref } from 'vue';
import { __VLS_TypePropsToRuntimeProps } from './TodoItem.vue.js';

export default (() => {
const __VLS_setup = async () => {
interface Props {
todo: ITodo;
}
const todoStore = useTodoStore();
const props = defineProps<Props>();
const todo = ref(props.todo);
const __VLS_publicComponent = (await import('vue')).defineComponent({
props: ({} as __VLS_TypePropsToRuntimeProps<Props>),
setup() {
return {};
},
});

const __VLS_componentsOption = {};

let __VLS_name!: 'TodoItem';
function __VLS_template() {
let __VLS_ctx!: InstanceType<import('./__VLS_types.js').PickNotAny<typeof __VLS_publicComponent, new () => {}>> & InstanceType<import('./__VLS_types.js').PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_localComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption & typeof __VLS_ctx;
let __VLS_otherComponents!: typeof __VLS_localComponents & import('./__VLS_types.js').GlobalComponents;
let __VLS_own!: import('./__VLS_types.js').SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; }) >;
let __VLS_components!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'completed'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_templateComponents!: {};
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("bg-[#ffffff] rounded-xl px-4 py-2 flex flex-col gap-[35px] items-end justify-start relative overflow-hidden"), style: ({}), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex flex-col gap-[5px] items-start justify-start shrink-0 h-[110px] relative"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex flex-row items-center justify-between self-stretch shrink-0 relative"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("text-[#000000] text-left relative flex-1"), style: ({}), };
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex flex-row items-center justify-between shrink-0  relative "), };
{
({} as JSX.IntrinsicElements).svg;
({} as JSX.IntrinsicElements).svg;
(__VLS_x as JSX.IntrinsicElements)['svg'] = { class: ("shrink-0 w-1.5 h-1.5 relative overflow-visible"), style: ({}), width: ("6"), height: ("7"), viewBox: ("0 0 6 7"), fill: ("none"), xmlns: ("http://www.w3.org/2000/svg"), };
{
({} as JSX.IntrinsicElements).g;
({} as JSX.IntrinsicElements).g;
(__VLS_x as JSX.IntrinsicElements)['g'] = { clipPath: ("url(#clip0_74_12320)"), 'clip-path': ("url(#clip0_74_12320)"), };
{
({} as JSX.IntrinsicElements).path;
(__VLS_x as JSX.IntrinsicElements)['path'] = { d: ("M5.28 0.619995H0.72C0.38916 0.619995 0.12 0.889155 0.12 1.22V5.78C0.12 6.11084 0.38916 6.38 0.72 6.38H5.28C5.61084 6.38 5.88 6.11084 5.88 5.78V1.22C5.88 0.889155 5.61084 0.619995 5.28 0.619995ZM5.64 5.78C5.64 5.97848 5.47848 6.14 5.28 6.14H0.72C0.52152 6.14 0.36 5.97848 0.36 5.78V1.22C0.36 1.02152 0.52152 0.859995 0.72 0.859995H5.28C5.47848 0.859995 5.64 1.02152 5.64 1.22V5.78Z"), fill: ("black"), };
}
{
({} as JSX.IntrinsicElements).path;
(__VLS_x as JSX.IntrinsicElements)['path'] = { d: ("M1.92 4.77032L1.16484 4.01516L0.99516 4.18484L1.92 5.10968L5.00484 2.02484L4.83516 1.85516L1.92 4.77032Z"), fill: ("black"), };
}
}
{
({} as JSX.IntrinsicElements).defs;
({} as JSX.IntrinsicElements).defs;
(__VLS_x as JSX.IntrinsicElements)['defs'] = {};
{
({} as JSX.IntrinsicElements).clipPath;
({} as JSX.IntrinsicElements).clipPath;
(__VLS_x as JSX.IntrinsicElements)['clipPath'] = { id: ("clip0_74_12320"), };
{
({} as JSX.IntrinsicElements).rect;
(__VLS_x as JSX.IntrinsicElements)['rect'] = { width: ("6"), height: ("6"), fill: ("white"), transform: ("translate(0 0.5)"), };
}
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("text-[#2d8636] text-left relative text-[12px]"), };
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("text-[#000000] text-left relative self-stretch "), style: ({}), };
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("flex flex-row gap-[13px] items-start justify-start shrink-0 relative"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("bg-[#97d6f9] rounded-lg flex flex-col gap-2.5 items-start justify-start shrink-0 w-[60px] min-w-[60px] relative overflow-hidden"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("pt-0.5 pr-1 pb-0.5 pl-1 flex flex-row gap-1 items-center justify-center self-stretch shrink-0 h-[25px] relative"), };
{
({} as JSX.IntrinsicElements).svg;
({} as JSX.IntrinsicElements).svg;
(__VLS_x as JSX.IntrinsicElements)['svg'] = { class: ("shrink-0 w-2 h-2 relative overflow-visible"), style: ({}), width: ("9"), height: ("9"), viewBox: ("0 0 9 9"), fill: ("none"), xmlns: ("http://www.w3.org/2000/svg"), };
{
({} as JSX.IntrinsicElements).path;
(__VLS_x as JSX.IntrinsicElements)['path'] = { d: ("M1.95979 8H1V7.04021L5.41846 2.62175L6.37825 3.58154L1.95979 8ZM7.01757 1.02264L7.97736 1.98243L7.55654 2.40326L6.59674 1.44346L7.01757 1.02264Z"), fill: ("black"), stroke: ("black"), };
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("text-[#000000] text-left relative"), style: ({}), };
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("bg-[#db2929] rounded-lg flex flex-col gap-2.5 items-start justify-start shrink-0 w-[60px] min-w-[60px] relative overflow-hidden"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("pt-0.5 pr-1 pb-0.5 pl-1 flex flex-row gap-1 items-center justify-center self-stretch shrink-0 h-[25px] relative"), };
{
({} as JSX.IntrinsicElements).svg;
({} as JSX.IntrinsicElements).svg;
(__VLS_x as JSX.IntrinsicElements)['svg'] = { class: ("shrink-0 w-2 h-2.5 relative overflow-visible"), style: ({}), width: ("9"), height: ("11"), viewBox: ("0 0 9 11"), fill: ("none"), xmlns: ("http://www.w3.org/2000/svg"), };
{
({} as JSX.IntrinsicElements).path;
(__VLS_x as JSX.IntrinsicElements)['path'] = { d: ("M7.94426 4.07197L7.77624 8.94694C7.76193 9.36445 7.57845 9.76019 7.26474 10.0501C6.95103 10.3401 6.5318 10.5015 6.09601 10.5H2.90357C2.46806 10.5015 2.04907 10.3403 1.73541 10.0507C1.42175 9.76111 1.23808 9.36578 1.22334 8.94855L1.05532 4.07197C1.05164 3.96518 1.09237 3.86137 1.16855 3.78336C1.24472 3.70536 1.35011 3.65955 1.46151 3.65603C1.57292 3.65251 1.68122 3.69155 1.7626 3.76457C1.84397 3.83759 1.89176 3.93861 1.89543 4.0454L2.06345 8.92157C2.07182 9.12974 2.16401 9.32669 2.32067 9.47108C2.47732 9.61546 2.68625 9.69604 2.90357 9.69588H6.09601C6.31361 9.69602 6.52278 9.61522 6.67948 9.4705C6.83618 9.32577 6.92818 9.12841 6.93612 8.91996L7.10415 4.0454C7.10782 3.93861 7.15561 3.83759 7.23698 3.76457C7.31836 3.69155 7.42666 3.65251 7.53807 3.65603C7.64947 3.65955 7.75486 3.70536 7.83103 3.78336C7.90721 3.86137 7.94794 3.96518 7.94426 4.07197ZM8.5 2.44967C8.5 2.55646 8.45574 2.65888 8.37697 2.73439C8.29819 2.8099 8.19135 2.85233 8.07994 2.85233H0.920058C0.808651 2.85233 0.701808 2.8099 0.623032 2.73439C0.544256 2.65888 0.5 2.55646 0.5 2.44967C0.5 2.34288 0.544256 2.24046 0.623032 2.16495C0.701808 2.08943 0.808651 2.04701 0.920058 2.04701H2.22224C2.35533 2.04736 2.4838 2.00022 2.58264 1.91478C2.68148 1.82934 2.74362 1.7117 2.75697 1.58476C2.78797 1.28699 2.9335 1.01095 3.16522 0.810415C3.39694 0.609883 3.69824 0.499226 4.01042 0.500004H4.98916C5.30134 0.499226 5.60264 0.609883 5.83436 0.810415C6.06608 1.01095 6.21161 1.28699 6.24261 1.58476C6.25596 1.7117 6.3181 1.82934 6.41694 1.91478C6.51578 2.00022 6.64425 2.04736 6.77734 2.04701H8.07952C8.19093 2.04701 8.29777 2.08943 8.37655 2.16495C8.45532 2.24046 8.49958 2.34288 8.49958 2.44967H8.5ZM3.48619 2.04701H5.51423C5.45903 1.92611 5.42293 1.798 5.40711 1.6669C5.39671 1.56765 5.34824 1.47564 5.2711 1.40868C5.19396 1.34173 5.09364 1.30461 4.98958 1.30451H4.01084C3.90678 1.30461 3.80646 1.34173 3.72932 1.40868C3.65218 1.47564 3.60371 1.56765 3.59331 1.6669C3.57736 1.79802 3.54153 1.92613 3.48619 2.04701ZM3.90919 8.14767V4.71904C3.90919 4.61225 3.86493 4.50984 3.78616 4.43432C3.70738 4.35881 3.60054 4.31639 3.48913 4.31639C3.37772 4.31639 3.27088 4.35881 3.19211 4.43432C3.11333 4.50984 3.06907 4.61225 3.06907 4.71904V8.14928C3.06907 8.25607 3.11333 8.35849 3.19211 8.434C3.27088 8.50951 3.37772 8.55194 3.48913 8.55194C3.60054 8.55194 3.70738 8.50951 3.78616 8.434C3.86493 8.35849 3.90919 8.25607 3.90919 8.14928V8.14767ZM5.93135 8.14767V4.71904C5.93135 4.61225 5.88709 4.50984 5.80831 4.43432C5.72954 4.35881 5.6227 4.31639 5.51129 4.31639C5.39988 4.31639 5.29304 4.35881 5.21426 4.43432C5.13549 4.50984 5.09123 4.61225 5.09123 4.71904V8.14928C5.09123 8.25607 5.13549 8.35849 5.21426 8.434C5.29304 8.50951 5.39988 8.55194 5.51129 8.55194C5.6227 8.55194 5.72954 8.50951 5.80831 8.434C5.88709 8.35849 5.93135 8.25607 5.93135 8.14928V8.14767Z"), fill: ("black"), };
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("text-[#000000] text-left relative"), style: ({}), };
}
}
}
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses['bg-[#ffffff]'];
__VLS_styleScopedClasses['rounded-xl'];
__VLS_styleScopedClasses['px-4'];
__VLS_styleScopedClasses['py-2'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['flex-col'];
__VLS_styleScopedClasses['gap-[35px]'];
__VLS_styleScopedClasses['items-end'];
__VLS_styleScopedClasses['justify-start'];
__VLS_styleScopedClasses['relative'];
__VLS_styleScopedClasses['overflow-hidden'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['flex-col'];
__VLS_styleScopedClasses['gap-[5px]'];
__VLS_styleScopedClasses['items-start'];
__VLS_styleScopedClasses['justify-start'];
__VLS_styleScopedClasses['shrink-0'];
__VLS_styleScopedClasses['h-[110px]'];
__VLS_styleScopedClasses['relative'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['flex-row'];
__VLS_styleScopedClasses['items-center'];
__VLS_styleScopedClasses['justify-between'];
__VLS_styleScopedClasses['self-stretch'];
__VLS_styleScopedClasses['shrink-0'];
__VLS_styleScopedClasses['relative'];
__VLS_styleScopedClasses['text-[#000000]'];
__VLS_styleScopedClasses['text-left'];
__VLS_styleScopedClasses['relative'];
__VLS_styleScopedClasses['flex-1'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['flex-row'];
__VLS_styleScopedClasses['items-center'];
__VLS_styleScopedClasses['justify-between'];
__VLS_styleScopedClasses['shrink-0'];
__VLS_styleScopedClasses['relative'];
__VLS_styleScopedClasses['shrink-0'];
__VLS_styleScopedClasses['w-1.5'];
__VLS_styleScopedClasses['h-1.5'];
__VLS_styleScopedClasses['relative'];
__VLS_styleScopedClasses['overflow-visible'];
__VLS_styleScopedClasses['text-[#2d8636]'];
__VLS_styleScopedClasses['text-left'];
__VLS_styleScopedClasses['relative'];
__VLS_styleScopedClasses['text-[12px]'];
__VLS_styleScopedClasses['text-[#000000]'];
__VLS_styleScopedClasses['text-left'];
__VLS_styleScopedClasses['relative'];
__VLS_styleScopedClasses['self-stretch'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['flex-row'];
__VLS_styleScopedClasses['gap-[13px]'];
__VLS_styleScopedClasses['items-start'];
__VLS_styleScopedClasses['justify-start'];
__VLS_styleScopedClasses['shrink-0'];
__VLS_styleScopedClasses['relative'];
__VLS_styleScopedClasses['bg-[#97d6f9]'];
__VLS_styleScopedClasses['rounded-lg'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['flex-col'];
__VLS_styleScopedClasses['gap-2.5'];
__VLS_styleScopedClasses['items-start'];
__VLS_styleScopedClasses['justify-start'];
__VLS_styleScopedClasses['shrink-0'];
__VLS_styleScopedClasses['w-[60px]'];
__VLS_styleScopedClasses['min-w-[60px]'];
__VLS_styleScopedClasses['relative'];
__VLS_styleScopedClasses['overflow-hidden'];
__VLS_styleScopedClasses['pt-0.5'];
__VLS_styleScopedClasses['pr-1'];
__VLS_styleScopedClasses['pb-0.5'];
__VLS_styleScopedClasses['pl-1'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['flex-row'];
__VLS_styleScopedClasses['gap-1'];
__VLS_styleScopedClasses['items-center'];
__VLS_styleScopedClasses['justify-center'];
__VLS_styleScopedClasses['self-stretch'];
__VLS_styleScopedClasses['shrink-0'];
__VLS_styleScopedClasses['h-[25px]'];
__VLS_styleScopedClasses['relative'];
__VLS_styleScopedClasses['shrink-0'];
__VLS_styleScopedClasses['w-2'];
__VLS_styleScopedClasses['h-2'];
__VLS_styleScopedClasses['relative'];
__VLS_styleScopedClasses['overflow-visible'];
__VLS_styleScopedClasses['text-[#000000]'];
__VLS_styleScopedClasses['text-left'];
__VLS_styleScopedClasses['relative'];
__VLS_styleScopedClasses['bg-[#db2929]'];
__VLS_styleScopedClasses['rounded-lg'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['flex-col'];
__VLS_styleScopedClasses['gap-2.5'];
__VLS_styleScopedClasses['items-start'];
__VLS_styleScopedClasses['justify-start'];
__VLS_styleScopedClasses['shrink-0'];
__VLS_styleScopedClasses['w-[60px]'];
__VLS_styleScopedClasses['min-w-[60px]'];
__VLS_styleScopedClasses['relative'];
__VLS_styleScopedClasses['overflow-hidden'];
__VLS_styleScopedClasses['pt-0.5'];
__VLS_styleScopedClasses['pr-1'];
__VLS_styleScopedClasses['pb-0.5'];
__VLS_styleScopedClasses['pl-1'];
__VLS_styleScopedClasses['flex'];
__VLS_styleScopedClasses['flex-row'];
__VLS_styleScopedClasses['gap-1'];
__VLS_styleScopedClasses['items-center'];
__VLS_styleScopedClasses['justify-center'];
__VLS_styleScopedClasses['self-stretch'];
__VLS_styleScopedClasses['shrink-0'];
__VLS_styleScopedClasses['h-[25px]'];
__VLS_styleScopedClasses['relative'];
__VLS_styleScopedClasses['shrink-0'];
__VLS_styleScopedClasses['w-2'];
__VLS_styleScopedClasses['h-2.5'];
__VLS_styleScopedClasses['relative'];
__VLS_styleScopedClasses['overflow-visible'];
__VLS_styleScopedClasses['text-[#000000]'];
__VLS_styleScopedClasses['text-left'];
__VLS_styleScopedClasses['relative'];
}
declare var __VLS_slots: {};
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {};
},
});
return {} as typeof __VLS_publicComponent;
};
return {} as typeof __VLS_setup extends () => Promise<infer T> ? T : never;
})({} as any);

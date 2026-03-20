(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/shared/CommercialWasteServices.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CommercialWasteServices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$siren$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Siren$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/siren.js [app-client] (ecmascript) <export default as Siren>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-check.js [app-client] (ecmascript) <export default as ClipboardCheck>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const services = [
    {
        title: "Waste Removal",
        desc: "Emergency disposal, bulk removal, live loads, and illegal dumping cleanup for commercial properties nationwide.",
        items: [
            {
                label: "Emergency Disposal",
                desc: "24/7 rapid-response teams for urgent waste situations at any commercial location.",
                img: "/images/stock/service-emergency-overflow.jpg",
                href: "/services/waste-removal"
            },
            {
                label: "Bulk Waste Removal",
                desc: "Large-scale cleanouts for damaged, discontinued, or unsellable products and materials.",
                img: "/images/stock/service-emergency.jpg",
                href: "/services/waste-removal"
            },
            {
                label: "Illegal Dumping Cleanup",
                desc: "Fast removal of mattresses, furniture, and construction debris from parking lots and properties.",
                img: "/images/stock/clean-city.jpg",
                href: "/services/waste-removal"
            }
        ]
    },
    {
        title: "Pressure Washing",
        desc: "Commercial pressure washing for storefronts, stadiums, compactor pads, and post-waste cleanup.",
        items: [
            {
                label: "Storefront Cleaning",
                desc: "Restore curb appeal with professional pressure washing for entrances, sidewalks, and facades.",
                img: "/images/stock/service-commercial.jpg",
                href: "/services/pressure-washing"
            },
            {
                label: "Compactor Pad Cleaning",
                desc: "Odor and grime removal for compactor areas, loading docks, and waste staging zones.",
                img: "/images/stock/service-event-stadium.jpg",
                href: "/services/pressure-washing"
            },
            {
                label: "Post-Waste Cleanup",
                desc: "Deep cleaning after waste removal to leave your site spotless and ready for business.",
                img: "/images/stock/service-maintenance.jpg",
                href: "/services/pressure-washing"
            }
        ]
    },
    {
        title: "Dumpster Rental",
        desc: "Roll-off dumpsters in 10, 20, 30, and 40-yard sizes with flat-rate pricing and prompt delivery.",
        items: [
            {
                label: "Multiple Sizes",
                desc: "10, 20, 30, and 40-yard roll-off containers matched to your specific project needs.",
                img: "/images/stock/service-dumpster-rental.jpg",
                href: "/services/dumpster-rental"
            },
            {
                label: "Flat-Rate Pricing",
                desc: "Transparent, all-inclusive pricing with no hidden fees or surprise charges.",
                img: "/images/stock/service-dumpster.jpg",
                href: "/services/dumpster-rental"
            },
            {
                label: "Prompt Delivery",
                desc: "Same-day or next-day delivery for construction projects, remodels, and cleanouts.",
                img: "/images/stock/service-centralized-program.jpg",
                href: "/services/dumpster-rental"
            }
        ]
    },
    {
        title: "Hauling Services",
        desc: "Compactor transport, bulk hauling, and specialty waste logistics with nationwide reach.",
        items: [
            {
                label: "Compactor Transport",
                desc: "Safe, compliant transport of compactors and heavy waste equipment to any location.",
                img: "/images/stock/hero-skyscrapers.jpg",
                href: "/services/hauling-services"
            },
            {
                label: "Bulk Hauling",
                desc: "High-volume hauling for large-scale commercial projects and multi-site operations.",
                img: "/images/stock/city-nature.jpg",
                href: "/services/hauling-services"
            },
            {
                label: "Nationwide Logistics",
                desc: "Scalable hauling solutions coordinated across 48 states through our vendor network.",
                img: "/images/stock/service-commercial.jpg",
                href: "/services/hauling-services"
            }
        ]
    }
];
const categoryIcons = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$siren$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Siren$3e$__["Siren"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__["ClipboardCheck"]
];
function CommercialWasteServices() {
    _s();
    const [activeService, setActiveService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "services",
        "aria-labelledby": "services-heading",
        className: "py-16 md:py-24 bg-[#F9F9F6]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 md:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.6
                    },
                    className: "mb-10 md:mb-16 max-w-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#042940]/10 text-[#042940] font-bold text-sm shadow-sm mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-2 h-2 rounded-full bg-[#c5d520]"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this),
                                "Our Services"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "services-heading",
                            className: "text-4xl md:text-5xl font-medium text-[#042940] leading-tight mb-4 tracking-tighter",
                            children: "Commercial Waste Services"
                        }, void 0, false, {
                            fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-[#042940]/70",
                            children: "Four core services. One point of contact. Dispatched across 48 states."
                        }, void 0, false, {
                            fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-4 flex flex-col space-y-[6px]",
                            children: services.map((service, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onMouseEnter: ()=>setActiveService(i),
                                    onClick: ()=>setActiveService(i),
                                    "data-testid": `button-service-category-${i}`,
                                    className: `text-left px-6 md:px-8 py-5 rounded-[5px] transition-all duration-300 font-bold text-base md:text-lg relative overflow-hidden group min-h-[52px] ${activeService === i ? "bg-white shadow-lg text-[#042940] border border-[#042940]/5" : "text-[#042940]/60 hover:text-[#042940] active:text-[#042940] hover:bg-white/50 active:bg-white/50"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative z-10 flex items-center justify-between gap-3",
                                            children: [
                                                service.title,
                                                activeService === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                    layoutId: "services-active-indicator",
                                                    className: "w-2 h-2 rounded-full bg-[#c5d520] flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 22
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                                            lineNumber: 88,
                                            columnNumber: 18
                                        }, this),
                                        activeService === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            layoutId: "services-active-bg",
                                            className: "absolute left-0 top-0 bottom-0 w-1 bg-[#c5d520]",
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            exit: {
                                                opacity: 0
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                                            lineNumber: 95,
                                            columnNumber: 20
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                                    lineNumber: 77,
                                    columnNumber: 16
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                            lineNumber: 75,
                            columnNumber: 12
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "wait",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 10
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: -10
                                    },
                                    transition: {
                                        duration: 0.35
                                    },
                                    className: "grid sm:grid-cols-3 gap-4 h-full",
                                    children: services[activeService].items.map((item, idx)=>{
                                        const Icon = categoryIcons[activeService];
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.href,
                                            className: "relative rounded-[5px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 min-h-[420px] group cursor-pointer block ring-0 hover:ring-2 hover:ring-[#c5d520]/40",
                                            "data-testid": `card-service-feature-${activeService}-${idx}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: item.img,
                                                    alt: item.label,
                                                    className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 24
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-t from-[#042940] via-[#042940]/80 to-[#042940]/30 group-hover:via-[#042940]/70 group-hover:to-[#042940]/20 transition-all duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 24
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative z-10 p-6 flex flex-col justify-end h-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-10 h-10 rounded-full bg-[#c5d520]/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mb-4 border border-white/10",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                className: "w-5 h-5 text-[#c5d520]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                                                                lineNumber: 134,
                                                                columnNumber: 28
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 26
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-bold text-white text-base leading-snug mb-2 group-hover:text-[#c5d520] transition-colors",
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                                                            lineNumber: 136,
                                                            columnNumber: 26
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white/75 text-sm leading-relaxed",
                                                            children: item.desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 26
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 24
                                                }, this)
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                                            lineNumber: 120,
                                            columnNumber: 22
                                        }, this);
                                    })
                                }, activeService, false, {
                                    fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                                    lineNumber: 109,
                                    columnNumber: 16
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                                lineNumber: 108,
                                columnNumber: 14
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                            lineNumber: 107,
                            columnNumber: 12
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/shared/CommercialWasteServices.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/shared/CommercialWasteServices.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(CommercialWasteServices, "zZYTNI/jNGE5X7qnGfYrzrq267M=");
_c = CommercialWasteServices;
var _c;
__turbopack_context__.k.register(_c, "CommercialWasteServices");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/shared/CommercialWasteServices.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/shared/CommercialWasteServices.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_shared_CommercialWasteServices_tsx_c9b815f0._.js.map
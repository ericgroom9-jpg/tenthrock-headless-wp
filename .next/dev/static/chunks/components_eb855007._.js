(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-bold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:scale-105 active:scale-95", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-11 px-6 rounded-full",
            sm: "h-9 rounded-full px-4 text-xs",
            lg: "h-14 px-10 rounded-full text-sm uppercase font-extrabold tracking-wide",
            icon: "h-11 w-11 rounded-full"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 47,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/separator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const Separator = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, orientation = "horizontal", decorative = true, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/separator.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Separator;
Separator.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Separator$React.forwardRef");
__turbopack_context__.k.register(_c1, "Separator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/shared/Logo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const logoMain = "/images/logos/TenthRock-Logo.png";
const logoWhite = "/images/logos/Green-White-Logo.png";
function Logo({ className = "", variant = "main" }) {
    const logoSrc = variant === "main" ? logoMain : logoWhite;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center gap-2 ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: logoSrc,
            alt: "Tenth Rock Waste Solutions",
            className: "h-8 md:h-10 w-auto object-contain"
        }, void 0, false, {
            fileName: "[project]/components/shared/Logo.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/shared/Logo.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Logo;
var _c;
__turbopack_context__.k.register(_c, "Logo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/shared/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/Logo.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const serviceLinks = [
    {
        label: "Emergency & Overflow Waste Response",
        href: "/services/emergency-waste-removal"
    },
    {
        label: "Store Decommissioning & Remodel Support",
        href: "/services/store-decommissioning"
    },
    {
        label: "Event & Stadium Waste Logistics",
        href: "/services/event-stadium"
    },
    {
        label: "Dumpster Rental & Temporary Containers",
        href: "/services/dumpster-rentals"
    },
    {
        label: "Centralized Waste Program Management",
        href: "/services/centralized-programs"
    },
    {
        label: "Environmental & Compactor Maintenance Services",
        href: "/services/environmental-maintenance"
    }
];
const sectorLinks = [
    {
        label: "Educational Institutions",
        href: "/industries/educational"
    },
    {
        label: "Stadiums & Events",
        href: "/industries/stadiums-events"
    },
    {
        label: "Faith Based",
        href: "/industries/faith-based"
    },
    {
        label: "Municipalities",
        href: "/industries/municipalities"
    },
    {
        label: "Hospitality",
        href: "/industries/hospitality"
    },
    {
        label: "Natural Disasters",
        href: "/industries/natural-disasters"
    },
    {
        label: "Real Estate",
        href: "/industries/real-estate"
    },
    {
        label: "Retail",
        href: "/industries/retail"
    }
];
function Navbar({ variant = "floating" }) {
    _s();
    const [isNavExpanded, setIsNavExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isServicesOpen, setIsServicesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSectorsOpen, setIsSectorsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isFloating = variant === "floating";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: isFloating ? "fixed top-6 left-0 right-0 z-50 px-4 md:px-8" : "sticky top-0 z-50 px-4 md:px-8 py-3 bg-white/95 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `container mx-auto max-w-[92rem] ${isFloating ? "bg-white rounded-[5px] shadow-lg px-4 sm:px-6 py-3" : "px-0"}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "hover:opacity-90 transition-opacity shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                variant: "main"
                            }, void 0, false, {
                                fileName: "[project]/components/shared/Navbar.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/shared/Navbar.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 xl:hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    className: "bg-[#c5d520] hover:bg-[#d6d98b] active:bg-[#d6d98b] text-[#042940] font-bold text-xs whitespace-nowrap min-h-[52px] px-4",
                                    "data-testid": "button-mobile-cta",
                                    children: "Get a Quote"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Navbar.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "p-3 text-primary rounded-[5px] hover:bg-gray-100 active:bg-gray-100 transition-colors min-w-[52px] min-h-[52px] flex items-center justify-center",
                                    onClick: ()=>setIsNavExpanded(!isNavExpanded),
                                    "aria-expanded": isNavExpanded,
                                    "aria-label": "Toggle navigation menu",
                                    "data-testid": "button-nav-toggle",
                                    children: isNavExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/Navbar.tsx",
                                        lineNumber: 68,
                                        columnNumber: 32
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/Navbar.tsx",
                                        lineNumber: 68,
                                        columnNumber: 60
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Navbar.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/Navbar.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden xl:flex items-center gap-6 flex-1 justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    onMouseEnter: ()=>setIsServicesOpen(true),
                                    onMouseLeave: ()=>setIsServicesOpen(false),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-1 min-h-[44px]",
                                            "data-testid": "button-nav-services",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/services/commercial-waste",
                                                    className: "text-sm font-bold text-primary hover:text-[#c5d520] active:text-[#c5d520] transition-colors",
                                                    children: "Commercial Waste Services"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    "aria-haspopup": "menu",
                                                    "aria-expanded": isServicesOpen,
                                                    onClick: ()=>setIsServicesOpen((v)=>!v),
                                                    className: "p-1 hover:text-[#c5d520] transition-colors",
                                                    "aria-label": "Toggle services menu",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: `w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/shared/Navbar.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/shared/Navbar.tsx",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            children: isServicesOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 8,
                                                    scale: 0.98
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0,
                                                    scale: 1
                                                },
                                                exit: {
                                                    opacity: 0,
                                                    y: 8,
                                                    scale: 0.98
                                                },
                                                transition: {
                                                    duration: 0.16,
                                                    ease: "easeOut"
                                                },
                                                className: "absolute left-0 top-[calc(100%+14px)] w-[420px] rounded-[5px] bg-white shadow-2xl border border-primary/10 overflow-hidden",
                                                role: "menu",
                                                "data-testid": "menu-nav-services",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[11px] font-extrabold tracking-[0.18em] uppercase text-primary/50 px-3 py-2",
                                                            children: "Services"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/shared/Navbar.tsx",
                                                            lineNumber: 113,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid gap-1",
                                                            children: serviceLinks.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: service.href,
                                                                    "data-testid": `link-nav-services-${service.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
                                                                    className: "flex items-center justify-between rounded-[5px] px-3 py-3 text-sm font-bold text-primary hover:bg-[#F9F9F6] active:bg-[#F9F9F6] hover:text-[#042940] active:text-[#042940] transition-colors min-h-[44px]",
                                                                    onClick: ()=>setIsServicesOpen(false),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "pr-3",
                                                                            children: service.label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/shared/Navbar.tsx",
                                                                            lineNumber: 125,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                            className: "w-4 h-4 text-primary/40"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/shared/Navbar.tsx",
                                                                            lineNumber: 126,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, service.label, true, {
                                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                                    lineNumber: 118,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/shared/Navbar.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Navbar.tsx",
                                                lineNumber: 103,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Navbar.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/Navbar.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/services/emergency-waste-removal",
                                    className: "text-sm font-bold text-primary hover:text-[#c5d520] active:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:outline-none transition-colors py-2",
                                    children: "Emergency Waste Removal"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Navbar.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    onMouseEnter: ()=>setIsSectorsOpen(true),
                                    onMouseLeave: ()=>setIsSectorsOpen(false),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-1 min-h-[44px]",
                                            "data-testid": "button-nav-sectors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "/who-we-serve",
                                                    className: "text-sm font-bold text-primary hover:text-[#c5d520] active:text-[#c5d520] transition-colors",
                                                    children: "Who We Serve"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    "aria-haspopup": "menu",
                                                    "aria-expanded": isSectorsOpen,
                                                    onClick: ()=>setIsSectorsOpen((v)=>!v),
                                                    className: "p-1 hover:text-[#c5d520] transition-colors",
                                                    "aria-label": "Toggle sectors menu",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: `w-4 h-4 transition-transform ${isSectorsOpen ? "rotate-180" : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/shared/Navbar.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/shared/Navbar.tsx",
                                            lineNumber: 144,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            children: isSectorsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 8,
                                                    scale: 0.98
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0,
                                                    scale: 1
                                                },
                                                exit: {
                                                    opacity: 0,
                                                    y: 8,
                                                    scale: 0.98
                                                },
                                                transition: {
                                                    duration: 0.16,
                                                    ease: "easeOut"
                                                },
                                                className: "absolute left-0 top-[calc(100%+14px)] w-[320px] rounded-[5px] bg-white shadow-2xl border border-primary/10 overflow-hidden",
                                                role: "menu",
                                                "data-testid": "menu-nav-sectors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[11px] font-extrabold tracking-[0.18em] uppercase text-primary/50 px-3 py-2",
                                                            children: "Industries"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/shared/Navbar.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid gap-1",
                                                            children: sectorLinks.map((sector)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: sector.href,
                                                                    "data-testid": `link-nav-sectors-${sector.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
                                                                    className: "flex items-center justify-between rounded-[5px] px-3 py-3 text-sm font-bold text-primary hover:bg-[#F9F9F6] active:bg-[#F9F9F6] hover:text-[#042940] active:text-[#042940] transition-colors min-h-[44px]",
                                                                    onClick: ()=>setIsSectorsOpen(false),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "pr-3",
                                                                            children: sector.label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/shared/Navbar.tsx",
                                                                            lineNumber: 190,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                            className: "w-4 h-4 text-primary/40"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/shared/Navbar.tsx",
                                                                            lineNumber: 191,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, sector.label, true, {
                                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                                    lineNumber: 183,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/shared/Navbar.tsx",
                                                            lineNumber: 181,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Navbar.tsx",
                                                lineNumber: 168,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Navbar.tsx",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/Navbar.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/our-process",
                                    className: "text-sm font-bold text-primary hover:text-[#c5d520] active:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:outline-none transition-colors py-2",
                                    children: "Our Process"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Navbar.tsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/about",
                                    className: "text-sm font-bold text-primary hover:text-[#c5d520] active:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:outline-none transition-colors py-2",
                                    children: "About Us"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Navbar.tsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/Navbar.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden xl:flex items-center gap-3 shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "lg",
                                    variant: "ghost",
                                    className: "text-primary font-extrabold hover:bg-transparent hover:text-[#c5d520] transition-colors uppercase tracking-wide text-sm px-2 min-h-[52px] whitespace-nowrap",
                                    children: "Login"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Navbar.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "lg",
                                    className: "bg-[#c5d520] hover:bg-[#d6d98b] text-[#042940] shadow-lg shadow-[#c5d520]/20 min-h-[52px] whitespace-nowrap",
                                    children: "Get a Quote"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Navbar.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/Navbar.tsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/shared/Navbar.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: isNavExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
                        initial: {
                            height: 0,
                            opacity: 0
                        },
                        animate: {
                            height: "auto",
                            opacity: 1
                        },
                        exit: {
                            height: 0,
                            opacity: 0
                        },
                        transition: {
                            duration: 0.25,
                            ease: "easeInOut"
                        },
                        className: "xl:hidden overflow-hidden mt-4",
                        "aria-label": "Mobile navigation",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1 pb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between w-full py-4 px-3 rounded-[5px] hover:bg-[#F9F9F6] active:bg-[#F9F9F6] transition-colors min-h-[52px]",
                                            "data-testid": "button-mobile-services",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/services/commercial-waste",
                                                    className: "font-bold text-primary hover:text-[#c5d520] transition-colors flex-1",
                                                    onClick: ()=>setIsNavExpanded(false),
                                                    children: "Commercial Waste Services"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setIsServicesOpen(!isServicesOpen),
                                                    "aria-expanded": isServicesOpen,
                                                    className: "p-2 hover:text-[#c5d520] transition-colors",
                                                    "aria-label": "Toggle services submenu",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: `w-5 h-5 transition-transform ${isServicesOpen ? "rotate-180" : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/shared/Navbar.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/shared/Navbar.tsx",
                                            lineNumber: 230,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            children: isServicesOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    height: 0
                                                },
                                                animate: {
                                                    height: "auto"
                                                },
                                                exit: {
                                                    height: 0
                                                },
                                                transition: {
                                                    duration: 0.2
                                                },
                                                className: "overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pl-4 pb-2",
                                                    children: serviceLinks.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: service.href,
                                                            className: "block font-medium text-primary/80 py-3 px-3 rounded-[5px] hover:bg-[#F9F9F6] active:bg-[#F9F9F6] hover:text-[#c5d520] active:text-[#c5d520] transition-colors min-h-[52px] flex items-center",
                                                            onClick: ()=>{
                                                                setIsNavExpanded(false);
                                                                setIsServicesOpen(false);
                                                            },
                                                            "data-testid": `link-mobile-services-${service.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
                                                            children: service.label
                                                        }, service.label, false, {
                                                            fileName: "[project]/components/shared/Navbar.tsx",
                                                            lineNumber: 262,
                                                            columnNumber: 29
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Navbar.tsx",
                                                lineNumber: 253,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Navbar.tsx",
                                            lineNumber: 251,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/Navbar.tsx",
                                    lineNumber: 229,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/services/emergency-waste-removal",
                                    className: "font-bold text-primary py-4 px-3 rounded-[5px] hover:bg-[#F9F9F6] active:bg-[#F9F9F6] hover:text-[#c5d520] transition-colors min-h-[52px] flex items-center",
                                    onClick: ()=>setIsNavExpanded(false),
                                    children: "Emergency Waste Removal"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Navbar.tsx",
                                    lineNumber: 278,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between w-full py-4 px-3 rounded-[5px] hover:bg-[#F9F9F6] active:bg-[#F9F9F6] transition-colors min-h-[52px]",
                                            "data-testid": "button-mobile-sectors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "/who-we-serve",
                                                    className: "font-bold text-primary hover:text-[#c5d520] transition-colors flex-1",
                                                    onClick: ()=>setIsNavExpanded(false),
                                                    children: "Who We Serve"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setIsSectorsOpen(!isSectorsOpen),
                                                    "aria-expanded": isSectorsOpen,
                                                    className: "p-2 hover:text-[#c5d520] transition-colors",
                                                    "aria-label": "Toggle sectors submenu",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: `w-5 h-5 transition-transform ${isSectorsOpen ? "rotate-180" : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/shared/Navbar.tsx",
                                                        lineNumber: 306,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/shared/Navbar.tsx",
                                            lineNumber: 288,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            children: isSectorsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    height: 0
                                                },
                                                animate: {
                                                    height: "auto"
                                                },
                                                exit: {
                                                    height: 0
                                                },
                                                transition: {
                                                    duration: 0.2
                                                },
                                                className: "overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pl-4 pb-2",
                                                    children: sectorLinks.map((sector)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: sector.href,
                                                            className: "block font-medium text-primary/80 py-3 px-3 rounded-[5px] hover:bg-[#F9F9F6] active:bg-[#F9F9F6] hover:text-[#c5d520] active:text-[#c5d520] transition-colors min-h-[52px] flex items-center",
                                                            onClick: ()=>{
                                                                setIsNavExpanded(false);
                                                                setIsSectorsOpen(false);
                                                            },
                                                            "data-testid": `link-mobile-sectors-${sector.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
                                                            children: sector.label
                                                        }, sector.label, false, {
                                                            fileName: "[project]/components/shared/Navbar.tsx",
                                                            lineNumber: 320,
                                                            columnNumber: 29
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Navbar.tsx",
                                                lineNumber: 311,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Navbar.tsx",
                                            lineNumber: 309,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/Navbar.tsx",
                                    lineNumber: 287,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/our-process",
                                    className: "font-bold text-primary py-4 px-3 rounded-[5px] hover:bg-[#F9F9F6] active:bg-[#F9F9F6] hover:text-[#c5d520] transition-colors min-h-[52px] flex items-center",
                                    onClick: ()=>setIsNavExpanded(false),
                                    children: "Our Process"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Navbar.tsx",
                                    lineNumber: 336,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/about",
                                    className: "font-bold text-primary py-4 px-3 rounded-[5px] hover:bg-[#F9F9F6] active:bg-[#F9F9F6] hover:text-[#c5d520] transition-colors min-h-[52px] flex items-center",
                                    onClick: ()=>setIsNavExpanded(false),
                                    children: "About Us"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Navbar.tsx",
                                    lineNumber: 343,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-3 mt-2 border-t border-gray-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        className: "w-full justify-center font-extrabold text-primary uppercase tracking-wide min-h-[52px] mb-2",
                                        children: "Login"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/Navbar.tsx",
                                        lineNumber: 352,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Navbar.tsx",
                                    lineNumber: 351,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/Navbar.tsx",
                            lineNumber: 227,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/shared/Navbar.tsx",
                        lineNumber: 219,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/shared/Navbar.tsx",
                    lineNumber: 217,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/shared/Navbar.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/shared/Navbar.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(Navbar, "Sj3plOzA9vLyzRpn2ygJ6o9+LHE=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/shared/CommercialWasteServices.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CommercialWasteServices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const imgServiceEmergencyOverflow = "/images/stock/service-emergency-overflow.jpg";
const imgServiceDumpsterRental = "/images/stock/service-dumpster-rental.jpg";
const imgServiceEventStadium = "/images/stock/service-event-stadium.jpg";
const imgServiceMaintenance = "/images/stock/service-maintenance.jpg";
const imgServiceStoreDecommissioning = "/images/stock/service-store-decommissioning.jpg";
const imgServiceCentralizedProgram = "/images/stock/service-centralized-program.jpg";
const services = [
    {
        title: "Emergency & Overflow Waste Response",
        desc: "Rapid-response hauling, overflow pickups, and surge capacity when your operations can't wait. Built for retail, industrial, and multi-site emergencies.",
        img: imgServiceEmergencyOverflow,
        features: [
            "24/7 Dispatch",
            "Overflow & Surge Capacity",
            "Nationwide Network"
        ]
    },
    {
        title: "Store Decommissioning & Remodel Support",
        desc: "Cleanouts, roll-offs, and coordinated haul schedules for remodels, closures, and fixture swaps—without disrupting day-to-day operations.",
        img: imgServiceStoreDecommissioning,
        features: [
            "Project Scheduling",
            "Site Cleanouts",
            "Multi-location Coordination"
        ]
    },
    {
        title: "Event & Stadium Waste Logistics",
        desc: "End-to-end waste plans for venues and large events—placement, swaps, post-event sweeps, and recycling streams managed on tight timelines.",
        img: imgServiceEventStadium,
        features: [
            "Venue Routing",
            "High-volume Support",
            "Diversion Planning"
        ]
    },
    {
        title: "Dumpster Rental & Temporary Containers",
        desc: "Temporary containers and compactor solutions for projects and peaks. Transparent sizing, delivery windows, and swap schedules.",
        img: imgServiceDumpsterRental,
        features: [
            "Roll-offs & Front-load",
            "Fast Delivery",
            "Flexible Terms"
        ]
    },
    {
        title: "Centralized Waste Program Management",
        desc: "One partner to standardize vendors, pricing, reporting, and service levels across all your locations—improving control and visibility.",
        img: imgServiceCentralizedProgram,
        features: [
            "Standardized SLAs",
            "Spend Visibility",
            "Single Point of Contact"
        ]
    },
    {
        title: "Environmental & Compactor Maintenance Services",
        desc: "Preventative maintenance and service for compactors and waste equipment, plus environmental support to keep sites compliant and running.",
        img: imgServiceMaintenance,
        features: [
            "PM Schedules",
            "On-site Repairs",
            "Compliance Support"
        ]
    }
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
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this),
                                "Our Services"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "services-heading",
                            className: "text-4xl md:text-5xl font-medium text-[#042940] leading-tight mb-4 tracking-tighter",
                            children: "Commercial Waste Services"
                        }, void 0, false, {
                            fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-[#042940]/60",
                            children: "Comprehensive solutions for businesses of all sizes, available nationwide."
                        }, void 0, false, {
                            fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-12 gap-8 items-stretch",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-4 flex flex-col space-y-[6px]",
                            children: services.map((service, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveService(i),
                                    onMouseEnter: ()=>setActiveService(i),
                                    className: `text-left px-6 md:px-8 py-4 rounded-[5px] transition-all duration-300 font-bold text-base md:text-lg relative overflow-hidden group min-h-[52px] ${activeService === i ? "bg-white shadow-lg text-[#042940] border border-[#042940]/5" : "text-[#042940]/40 hover:text-[#042940] active:text-[#042940] hover:bg-white/50 active:bg-white/50"}`,
                                    "data-testid": `button-service-${i}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative z-10 flex items-center justify-between",
                                            children: [
                                                service.title,
                                                activeService === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                    layoutId: "services-active-indicator",
                                                    className: "w-2 h-2 rounded-full bg-[#c5d520]"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 22
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                                            lineNumber: 93,
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
                                            lineNumber: 100,
                                            columnNumber: 20
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                                    lineNumber: 82,
                                    columnNumber: 16
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                            lineNumber: 80,
                            columnNumber: 12
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-8 cursor-pointer h-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#c5d520] focus-visible:ring-offset-2 rounded-[5px]",
                            role: "button",
                            tabIndex: 0,
                            "aria-label": "View service details",
                            onClick: ()=>console.log('Navigate to service details'),
                            onKeyDown: (e)=>(e.key === 'Enter' || e.key === ' ') && console.log('Navigate to service details'),
                            "data-testid": "button-service-details",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-full min-h-[560px] rounded-[5px] overflow-hidden shadow-2xl group",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    mode: "wait",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            scale: 1.05
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        exit: {
                                            opacity: 0
                                        },
                                        transition: {
                                            duration: 0.5
                                        },
                                        className: "absolute inset-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: services[activeService].img,
                                                alt: services[activeService].title,
                                                className: "w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                                                lineNumber: 124,
                                                columnNumber: 20
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-[#042940] via-[#042940]/70 md:via-[#042940]/60 to-transparent opacity-95 md:opacity-90"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                                                lineNumber: 129,
                                                columnNumber: 20
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 p-6 md:p-12 flex flex-col justify-end",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: 20
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    transition: {
                                                        delay: 0.2
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 md:mb-6 tracking-tight",
                                                            children: services[activeService].title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 24
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white/90 text-xl leading-relaxed max-w-2xl font-medium mb-8",
                                                            children: services[activeService].desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 24
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-4 mb-8",
                                                            children: services[activeService].features.map((feature, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg text-white text-sm font-bold border border-white/10 hover:bg-white/20 transition-colors",
                                                                    children: feature
                                                                }, idx, false, {
                                                                    fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                                                                    lineNumber: 146,
                                                                    columnNumber: 28
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 24
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 text-[#c5d520] font-bold uppercase tracking-wide group-hover:gap-4 transition-all",
                                                            children: [
                                                                "Learn More ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                    className: "w-5 h-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                                                                    lineNumber: 153,
                                                                    columnNumber: 37
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                                                            lineNumber: 152,
                                                            columnNumber: 24
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 22
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                                                lineNumber: 131,
                                                columnNumber: 20
                                            }, this)
                                        ]
                                    }, activeService, true, {
                                        fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                                        lineNumber: 116,
                                        columnNumber: 18
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                                    lineNumber: 115,
                                    columnNumber: 16
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                                lineNumber: 114,
                                columnNumber: 14
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                            lineNumber: 113,
                            columnNumber: 12
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/shared/CommercialWasteServices.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/shared/CommercialWasteServices.tsx",
        lineNumber: 57,
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
"[project]/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, type, ...props }, ref)=>{
    // h-9 to match icon buttons and default buttons.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 9,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/shared/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/Logo.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const serviceLinks = [
    {
        label: "Emergency & Overflow Waste Response",
        href: "/services/emergency-waste-removal"
    },
    {
        label: "Store Decommissioning & Remodel Support",
        href: "/services/store-decommissioning"
    },
    {
        label: "Event & Stadium Waste Logistics",
        href: "/services/event-stadium"
    },
    {
        label: "Dumpster Rental & Temporary Containers",
        href: "/services/dumpster-rentals"
    },
    {
        label: "Centralized Waste Program Management",
        href: "/services/centralized-programs"
    }
];
const industryLinks = [
    {
        label: "Educational",
        href: "/industries/educational"
    },
    {
        label: "Stadiums & Events",
        href: "/industries/stadiums-events"
    },
    {
        label: "Faith Based",
        href: "/industries/faith-based"
    },
    {
        label: "Municipalities",
        href: "/industries/municipalities"
    },
    {
        label: "Hospitality",
        href: "/industries/hospitality"
    },
    {
        label: "Natural Disasters",
        href: "/industries/natural-disasters"
    },
    {
        label: "Real Estate",
        href: "/industries/real-estate"
    },
    {
        label: "Retail",
        href: "/industries/retail"
    }
];
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        role: "contentinfo",
        "aria-label": "Site footer",
        className: "bg-[#042940] text-white py-20 border-t border-white/5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 md:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16",
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
                                duration: 0.5
                            },
                            className: "space-y-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    variant: "white"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Footer.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/60 leading-relaxed max-w-xs",
                                    children: "Redefining commercial waste management with speed, transparency, and reliability across all 50 states."
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Footer.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c5d520] hover:text-[#042940] transition-colors cursor-pointer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Footer.tsx",
                                                lineNumber: 50,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Footer.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c5d520] hover:text-[#042940] transition-colors cursor-pointer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Footer.tsx",
                                                lineNumber: 53,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Footer.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c5d520] hover:text-[#042940] transition-colors cursor-pointer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Footer.tsx",
                                                lineNumber: 56,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Footer.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c5d520] hover:text-[#042940] transition-colors cursor-pointer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Footer.tsx",
                                                lineNumber: 59,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Footer.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/Footer.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/Footer.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
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
                                duration: 0.5,
                                delay: 0.1
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-lg mb-6 text-white",
                                    children: "Services"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Footer.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-white/60",
                                    children: serviceLinks.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: service.href,
                                                className: "block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors",
                                                children: service.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Footer.tsx",
                                                lineNumber: 75,
                                                columnNumber: 19
                                            }, this)
                                        }, service.href, false, {
                                            fileName: "[project]/components/shared/Footer.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Footer.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/Footer.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
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
                                duration: 0.5,
                                delay: 0.2
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-lg mb-6 text-white",
                                    children: "Industries"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Footer.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-white/60",
                                    children: industryLinks.map((industry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: industry.href,
                                                className: "block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors",
                                                children: industry.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Footer.tsx",
                                                lineNumber: 94,
                                                columnNumber: 19
                                            }, this)
                                        }, industry.href, false, {
                                            fileName: "[project]/components/shared/Footer.tsx",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Footer.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/Footer.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
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
                                duration: 0.5,
                                delay: 0.3
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-lg mb-6 text-white",
                                    children: "Company"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Footer.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-white/60",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/about",
                                                className: "block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors",
                                                children: "About Us"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Footer.tsx",
                                                lineNumber: 111,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Footer.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/our-process",
                                                className: "block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors",
                                                children: "Our Process"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Footer.tsx",
                                                lineNumber: 112,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Footer.tsx",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/who-we-serve",
                                                className: "block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors",
                                                children: "Who We Serve"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Footer.tsx",
                                                lineNumber: 113,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Footer.tsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/locations",
                                                className: "block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors",
                                                children: "Locations"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Footer.tsx",
                                                lineNumber: 114,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Footer.tsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#",
                                                className: "block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors",
                                                children: "Success Stories"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Footer.tsx",
                                                lineNumber: 115,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Footer.tsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#",
                                                className: "block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors",
                                                children: "Partner Program"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Footer.tsx",
                                                lineNumber: 116,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Footer.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "#",
                                                className: "block py-2 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors",
                                                children: "Contact"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Footer.tsx",
                                                lineNumber: 117,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Footer.tsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/Footer.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/Footer.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this),
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
                                duration: 0.5,
                                delay: 0.4
                            },
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-lg text-white",
                                    children: "Stay Updated"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Footer.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/60",
                                    children: "Get the latest industry insights and compliance updates."
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Footer.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            placeholder: "Enter your email",
                                            className: "bg-white/5 border-white/10 text-white placeholder:text-white/30 h-14 focus-visible:ring-[#c5d520] rounded-full px-6"
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Footer.tsx",
                                            lineNumber: 134,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "lg",
                                            className: "bg-[#c5d520] hover:bg-[#d6d98b] active:bg-[#d6d98b] text-[#042940] min-h-[52px]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Footer.tsx",
                                                lineNumber: 139,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Footer.tsx",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/Footer.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-4 border-t border-white/10 mt-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-bold text-white mb-2",
                                            children: "Need Immediate Help?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Footer.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "tel:8885550123",
                                            className: "text-xl font-bold text-[#c5d520] hover:underline",
                                            children: "(888) 555-0123"
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Footer.tsx",
                                            lineNumber: 144,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/Footer.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/Footer.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/shared/Footer.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                    className: "bg-white/10 mb-8"
                }, void 0, false, {
                    fileName: "[project]/components/shared/Footer.tsx",
                    lineNumber: 151,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row justify-between items-center text-sm text-white/40",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "© 2026 Tenth Rock Solutions. All rights reserved."
                        }, void 0, false, {
                            fileName: "[project]/components/shared/Footer.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-8 mt-4 md:mt-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#",
                                    className: "hover:text-white transition-colors",
                                    children: "Privacy Policy"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Footer.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#",
                                    className: "hover:text-white transition-colors",
                                    children: "Terms of Service"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Footer.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "#",
                                    className: "hover:text-white transition-colors",
                                    children: "Cookie Settings"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Footer.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/Footer.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/shared/Footer.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/shared/Footer.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/shared/Footer.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/shared/ReasonsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ReasonsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Headset$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/headset.js [app-client] (ecmascript) <export default as Headset>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
const features = [
    {
        title: "Dedicated Point of Contact",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Headset$3e$__["Headset"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/components/shared/ReasonsSection.tsx",
            lineNumber: 8,
            columnNumber: 48
        }, ("TURBOPACK compile-time value", void 0)),
        desc: "One person to handle everything. No call centers, no runarounds, just answers."
    },
    {
        title: "Job Completion Proof",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/components/shared/ReasonsSection.tsx",
            lineNumber: 9,
            columnNumber: 42
        }, ("TURBOPACK compile-time value", void 0)),
        desc: "Visual confirmation for every job we complete, available instantly."
    },
    {
        title: "Local Crews, National Reach",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/components/shared/ReasonsSection.tsx",
            lineNumber: 10,
            columnNumber: 49
        }, ("TURBOPACK compile-time value", void 0)),
        desc: "We operate in every zip code across the country with vetted local partners."
    },
    {
        title: "Price Savings Just for You",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/components/shared/ReasonsSection.tsx",
            lineNumber: 11,
            columnNumber: 48
        }, ("TURBOPACK compile-time value", void 0)),
        desc: "Volume pricing passed directly to your bottom line, typically saving 15-20%."
    }
];
function ReasonsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 md:py-24 bg-[#F8F8F8]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 md:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-12 gap-12 lg:gap-24 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-5 lg:sticky lg:top-32",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/10 text-primary font-bold text-sm shadow-sm mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-2 h-2 rounded-full bg-secondary"
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/ReasonsSection.tsx",
                                            lineNumber: 28,
                                            columnNumber: 19
                                        }, this),
                                        "Benefits"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/ReasonsSection.tsx",
                                    lineNumber: 27,
                                    columnNumber: 16
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl md:text-5xl font-medium text-primary mb-6 leading-tight tracking-tighter",
                                    children: "More Reasons You'll Love Us"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/ReasonsSection.tsx",
                                    lineNumber: 31,
                                    columnNumber: 16
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-primary/60 mb-8 leading-relaxed",
                                    children: "We've rebuilt waste management from the ground up to serve modern businesses. Say goodbye to hidden fees and confusing contracts."
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/ReasonsSection.tsx",
                                    lineNumber: 34,
                                    columnNumber: 16
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "lg",
                                    className: "w-full sm:w-auto bg-[#c5d520] text-[#042940] hover:bg-[#d6d98b] min-h-[52px] whitespace-nowrap rounded-full",
                                    children: "Request a Service"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/ReasonsSection.tsx",
                                    lineNumber: 37,
                                    columnNumber: 16
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/ReasonsSection.tsx",
                            lineNumber: 21,
                            columnNumber: 14
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/shared/ReasonsSection.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-7 grid sm:grid-cols-2 gap-6",
                        children: features.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "group bg-white p-6 md:p-8 rounded-[5px] shadow-sm border border-transparent hover:border-secondary/20 active:border-secondary/20 hover:shadow-xl active:shadow-xl transition-all duration-300",
                                whileHover: {
                                    y: -5
                                },
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: i * 0.1
                                },
                                viewport: {
                                    once: true
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-14 h-14 rounded-[5px] bg-[#F9F9F6] group-hover:bg-secondary group-hover:text-primary transition-colors duration-300 flex items-center justify-center text-primary mb-6",
                                        children: item.icon
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/ReasonsSection.tsx",
                                        lineNumber: 55,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300",
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/ReasonsSection.tsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-primary/60 leading-relaxed group-hover:text-primary/80 transition-colors duration-300",
                                        children: item.desc
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/ReasonsSection.tsx",
                                        lineNumber: 60,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/components/shared/ReasonsSection.tsx",
                                lineNumber: 46,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/shared/ReasonsSection.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/shared/ReasonsSection.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/shared/ReasonsSection.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/shared/ReasonsSection.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = ReasonsSection;
var _c;
__turbopack_context__.k.register(_c, "ReasonsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/shared/StatsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/separator.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const imgParkWater = "/images/stock/floor-park.jpg";
function StatsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 md:py-24 bg-[#FDFDFD]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 md:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-2 gap-16 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky top-32",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: -20
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.6
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/10 text-primary font-bold text-sm shadow-sm mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-2 h-2 rounded-full bg-secondary"
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/StatsSection.tsx",
                                            lineNumber: 23,
                                            columnNumber: 19
                                        }, this),
                                        "Key Metrics"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/StatsSection.tsx",
                                    lineNumber: 22,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl md:text-5xl font-medium text-primary mb-6 leading-tight tracking-tighter",
                                    children: "Why Clients Call Us Again and Again."
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/StatsSection.tsx",
                                    lineNumber: 26,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-primary/60 mb-8",
                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/StatsSection.tsx",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "lg",
                                            className: "w-full sm:w-auto bg-primary text-white min-h-[52px] whitespace-nowrap rounded-full",
                                            children: "Request a Service"
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/StatsSection.tsx",
                                            lineNumber: 33,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "lg",
                                            variant: "ghost",
                                            className: "w-full sm:w-auto text-primary hover:bg-transparent hover:underline flex items-center justify-center gap-2 min-h-[52px] whitespace-nowrap",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    className: "w-5 h-5 text-secondary"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/StatsSection.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 20
                                                }, this),
                                                " (888) 555-0123"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/shared/StatsSection.tsx",
                                            lineNumber: 36,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/StatsSection.tsx",
                                    lineNumber: 32,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/StatsSection.tsx",
                            lineNumber: 16,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/shared/StatsSection.tsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-8",
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
                                    duration: 0.5,
                                    delay: 0.1
                                },
                                className: "border border-primary/10 p-8 rounded-[5px] bg-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold text-xl text-primary mb-4",
                                        children: "Case / Stat Here"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/StatsSection.tsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-7xl font-extrabold text-primary mb-4",
                                        children: "30%"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/StatsSection.tsx",
                                        lineNumber: 52,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                                        className: "bg-primary/10 mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/StatsSection.tsx",
                                        lineNumber: 53,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-primary/60",
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/StatsSection.tsx",
                                        lineNumber: 54,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/StatsSection.tsx",
                                lineNumber: 44,
                                columnNumber: 14
                            }, this),
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
                                    duration: 0.5,
                                    delay: 0.2
                                },
                                className: "border border-primary/10 p-8 rounded-[5px] bg-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-64 w-full rounded-[5px] overflow-hidden mb-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: imgParkWater,
                                            className: "w-full h-full object-cover",
                                            alt: "Stats Visual"
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/StatsSection.tsx",
                                            lineNumber: 65,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/StatsSection.tsx",
                                        lineNumber: 64,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold text-xl text-primary mb-4",
                                        children: "Case / Stat Here"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/StatsSection.tsx",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-7xl font-extrabold text-primary mb-4",
                                        children: "70K"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/StatsSection.tsx",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                                        className: "bg-primary/10 mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/StatsSection.tsx",
                                        lineNumber: 69,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-primary/60",
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/StatsSection.tsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/StatsSection.tsx",
                                lineNumber: 57,
                                columnNumber: 14
                            }, this),
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
                                    duration: 0.5,
                                    delay: 0.3
                                },
                                className: "border border-primary/10 p-8 rounded-[5px] bg-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold text-xl text-primary mb-4",
                                        children: "Case / Stat Here"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/StatsSection.tsx",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-7xl font-extrabold text-primary mb-4",
                                        children: "80%"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/StatsSection.tsx",
                                        lineNumber: 81,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                                        className: "bg-primary/10 mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/StatsSection.tsx",
                                        lineNumber: 82,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-primary/60",
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/StatsSection.tsx",
                                        lineNumber: 83,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/StatsSection.tsx",
                                lineNumber: 73,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/shared/StatsSection.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/shared/StatsSection.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/shared/StatsSection.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/shared/StatsSection.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = StatsSection;
var _c;
__turbopack_context__.k.register(_c, "StatsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/shared/FaqSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FaqSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const defaultFaqs = [
    {
        question: "How Quickly Can You Arrange a Pickup?",
        answer: "We specialize in rapid response. For emergency requests, we can often be on-site within hours. For standard scheduled services, we can typically start within 24-48 hours of account setup."
    },
    {
        question: "Do You Service Multiple Locations Nationwide?",
        answer: "Yes, we operate in all 50 states. Our centralized management platform allows you to handle waste services for hundreds of locations through a single point of contact and one consolidated invoice."
    },
    {
        question: "What Types of Waste Do You Handle?",
        answer: "We handle almost all non-hazardous commercial waste streams including general trash, recycling (cardboard, plastic, metal), construction debris, organic waste, and e-waste. We also coordinate specialized hazmat disposal upon request."
    },
    {
        question: "Are There Long-Term Contracts?",
        answer: "We believe in earning your business every day. While we offer contract savings, many of our services are available with flexible terms. We want you to stay because you're happy, not because you're locked in."
    },
    {
        question: "How Do You Help With Sustainability Goals?",
        answer: "We provide detailed diversion reporting and waste audits to identify recycling opportunities. Our goal is to minimize your landfill footprint and maximize potential rebates for recyclable materials."
    }
];
function FaqSection({ faqs = defaultFaqs }) {
    _s();
    const [openItem, setOpenItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("item-0");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "faq",
        "aria-labelledby": "faq-heading",
        className: "py-16 md:py-24 bg-[#F9F9F6] relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2"
            }, void 0, false, {
                fileName: "[project]/components/shared/FaqSection.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 md:px-8 max-w-4xl relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-left sm:text-center mb-16 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/10 text-primary font-bold text-sm shadow-sm mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 rounded-full bg-secondary"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/FaqSection.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this),
                                    "Common Questions"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/FaqSection.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "faq-heading",
                                className: "text-4xl md:text-5xl font-medium text-primary tracking-tighter",
                                children: "Frequently Asked Questions"
                            }, void 0, false, {
                                fileName: "[project]/components/shared/FaqSection.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-primary/60 max-w-2xl mx-auto",
                                children: "Everything you need to know about our services, coverage, and process. Can't find the answer you're looking for? Reach out to our team."
                            }, void 0, false, {
                                fileName: "[project]/components/shared/FaqSection.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/shared/FaqSection.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4",
                        children: faqs.map((faq, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.4,
                                    delay: i * 0.1
                                },
                                viewport: {
                                    once: true
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `group rounded-[5px] border transition-all duration-300 overflow-hidden ${openItem === `item-${i}` ? "bg-[#042940] border-[#042940] shadow-xl transform scale-[1.02]" : "bg-white border-transparent hover:border-primary/10 shadow-sm hover:shadow-md"}`,
                                    onClick: ()=>setOpenItem(openItem === `item-${i}` ? "" : `item-${i}`),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-full flex items-center justify-between p-6 md:p-8 text-left outline-none",
                                            "data-testid": `faq-trigger-${i}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-xl font-bold transition-colors duration-300 ${openItem === `item-${i}` ? "text-white" : "text-primary"}`,
                                                    children: faq.question
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/FaqSection.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openItem === `item-${i}` ? "bg-[#c5d520] rotate-180" : "bg-primary/5 group-hover:bg-primary/10"}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: `w-5 h-5 transition-colors duration-300 ${openItem === `item-${i}` ? "text-[#042940]" : "text-primary"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/shared/FaqSection.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/FaqSection.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/shared/FaqSection.tsx",
                                            lineNumber: 77,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `transition-all duration-300 ease-in-out overflow-hidden ${openItem === `item-${i}` ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-6 md:px-8 pb-8 pt-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/80 text-lg leading-relaxed border-t border-white/10 pt-6",
                                                    children: faq.answer
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/FaqSection.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/FaqSection.tsx",
                                                lineNumber: 98,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/FaqSection.tsx",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/FaqSection.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, this)
                            }, i, false, {
                                fileName: "[project]/components/shared/FaqSection.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/shared/FaqSection.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-16 text-left sm:text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-primary/60 mb-4 font-medium",
                                children: "Still Have Questions?"
                            }, void 0, false, {
                                fileName: "[project]/components/shared/FaqSection.tsx",
                                lineNumber: 110,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "lg",
                                className: "w-full sm:w-auto shadow-lg min-h-[52px] whitespace-nowrap rounded-full",
                                children: "Contact Us"
                            }, void 0, false, {
                                fileName: "[project]/components/shared/FaqSection.tsx",
                                lineNumber: 111,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/shared/FaqSection.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/shared/FaqSection.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/shared/FaqSection.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(FaqSection, "mraMue63cub4d8LkxgA+QZUq1rs=");
_c = FaqSection;
var _c;
__turbopack_context__.k.register(_c, "FaqSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/shared/LocationSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LocationSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
"use client";
;
;
;
function LocationSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 md:py-24 bg-white",
        "aria-labelledby": "location-heading",
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
                        duration: 0.5
                    },
                    className: "text-center mb-8 sm:mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "location-heading",
                            className: "text-4xl md:text-5xl font-medium text-[#042940] leading-tight tracking-tighter mb-4",
                            children: "Where to Find Us"
                        }, void 0, false, {
                            fileName: "[project]/components/shared/LocationSection.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 text-base sm:text-lg max-w-2xl mx-auto",
                            children: "Serving businesses nationwide with regional offices for local support."
                        }, void 0, false, {
                            fileName: "[project]/components/shared/LocationSection.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/shared/LocationSection.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-3 gap-8 lg:gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: -20
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.5
                            },
                            className: "space-y-6 lg:space-y-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    className: "h-6 w-6 text-[#c5d520]"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/LocationSection.tsx",
                                                    lineNumber: 35,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg sm:text-xl font-semibold text-[#042940]",
                                                    children: "Office"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/LocationSection.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/shared/LocationSection.tsx",
                                            lineNumber: 34,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 ml-9",
                                            children: "123 Sample St, Sydney NSW 2000 AU"
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/LocationSection.tsx",
                                            lineNumber: 38,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/LocationSection.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    className: "h-6 w-6 text-[#c5d520]"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/LocationSection.tsx",
                                                    lineNumber: 43,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg sm:text-xl font-semibold text-[#042940]",
                                                    children: "Phone"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/LocationSection.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/shared/LocationSection.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 ml-9",
                                            children: "Available 24/7 for emergencies"
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/LocationSection.tsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#042940] font-semibold ml-9",
                                            children: "+1 (555) 000-0000"
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/LocationSection.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/LocationSection.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    className: "h-6 w-6 text-[#c5d520]"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/LocationSection.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg sm:text-xl font-semibold text-[#042940]",
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/LocationSection.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/shared/LocationSection.tsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 ml-9",
                                            children: "hello@tenthrock.com"
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/LocationSection.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/LocationSection.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/LocationSection.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0.95
                            },
                            whileInView: {
                                opacity: 1,
                                scale: 1
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.5
                            },
                            className: "lg:col-span-2 relative aspect-video rounded-[5px] overflow-hidden bg-gray-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                autoPlay: true,
                                loop: true,
                                muted: true,
                                playsInline: true,
                                className: "absolute inset-0 w-full h-full object-cover",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                    src: "/assets_export/videos/us-map-pins-loop.mp4",
                                    type: "video/mp4"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/LocationSection.tsx",
                                    lineNumber: 73,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/shared/LocationSection.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/shared/LocationSection.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/shared/LocationSection.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/shared/LocationSection.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/shared/LocationSection.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = LocationSection;
var _c;
__turbopack_context__.k.register(_c, "LocationSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/shared/CtaBannerSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CtaBannerSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function CtaBannerSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 md:py-24 bg-white relative overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 md:px-8 relative z-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 40
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: true
                },
                transition: {
                    duration: 0.8
                },
                className: "relative bg-[#042940] rounded-[5px] p-8 md:p-12 lg:p-20 overflow-hidden shadow-2xl text-left sm:text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-10 mix-blend-overlay",
                        style: {
                            backgroundImage: `url(/assets_export/generated_images/line_art_us_map_illustration.png)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/shared/CtaBannerSection.tsx",
                        lineNumber: 19,
                        columnNumber: 12
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-20",
                        style: {
                            backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)',
                            backgroundSize: '30px 30px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/shared/CtaBannerSection.tsx",
                        lineNumber: 27,
                        columnNumber: 12
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c5d520]/10 rounded-full blur-[120px] pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/components/shared/CtaBannerSection.tsx",
                        lineNumber: 35,
                        columnNumber: 12
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 max-w-3xl mx-auto flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#c5d520] font-bold text-sm backdrop-blur-sm shadow-sm mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 rounded-full bg-[#c5d520] animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/CtaBannerSection.tsx",
                                        lineNumber: 39,
                                        columnNumber: 17
                                    }, this),
                                    "Service Availability"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/CtaBannerSection.tsx",
                                lineNumber: 38,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl md:text-5xl font-medium text-white leading-tight mb-6 tracking-tighter",
                                children: [
                                    "Check If We Service ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#c5d520]",
                                        children: "Your Area."
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/CtaBannerSection.tsx",
                                        lineNumber: 44,
                                        columnNumber: 36
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/CtaBannerSection.tsx",
                                lineNumber: 43,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl text-white/70 font-medium leading-relaxed max-w-xl mb-10",
                                children: "Enter your zip code below to instantly see if our network of local vendors covers your location."
                            }, void 0, false, {
                                fileName: "[project]/components/shared/CtaBannerSection.tsx",
                                lineNumber: 46,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-4 w-full max-w-lg justify-center items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        placeholder: "Enter Zip Code",
                                        className: "!bg-white/10 border-white/20 text-white placeholder:text-white/40 h-14 rounded-full px-6 text-lg focus-visible:ring-[#c5d520] flex-1 w-full",
                                        style: {
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/CtaBannerSection.tsx",
                                        lineNumber: 51,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "lg",
                                        className: "bg-[#c5d520] text-[#042940] hover:bg-[#d6d98b] active:bg-[#d6d98b] shadow-[0_0_30px_rgba(197,213,32,0.3)] hover:shadow-[0_0_50px_rgba(197,213,32,0.5)] active:shadow-[0_0_50px_rgba(197,213,32,0.5)] transition-all duration-300 w-full sm:w-auto min-h-[52px] whitespace-nowrap rounded-full",
                                        children: "Check Now"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/CtaBannerSection.tsx",
                                        lineNumber: 56,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/CtaBannerSection.tsx",
                                lineNumber: 50,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/shared/CtaBannerSection.tsx",
                        lineNumber: 37,
                        columnNumber: 12
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/shared/CtaBannerSection.tsx",
                lineNumber: 11,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/shared/CtaBannerSection.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/shared/CtaBannerSection.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = CtaBannerSection;
var _c;
__turbopack_context__.k.register(_c, "CtaBannerSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/shared/ProcessSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProcessSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
const steps = [
    {
        num: "01",
        title: "You Request Service",
        desc: "Call us or book online. We are ready 24/7 to handle your waste needs immediately."
    },
    {
        num: "02",
        title: "We Dispatch Your Team",
        desc: "Local crews are deployed within hours, not days, ensuring your project stays on schedule."
    },
    {
        num: "03",
        title: "We Execute The Job",
        desc: "Professional removal, haulage, and site clearing with full safety compliance."
    },
    {
        num: "04",
        title: "Documentation Provided",
        desc: "We provide full digital documentation and audit trails for every job completed."
    },
    {
        num: "05",
        title: "Satisfaction Guaranteed",
        desc: "We ensure your site is spotless and follow up to confirm you are 100% satisfied with our service."
    }
];
function ProcessSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "process",
        "aria-labelledby": "process-heading",
        className: "py-16 md:py-24 bg-white relative overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 md:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-left sm:text-center max-w-3xl mx-auto mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#042940]/10 text-[#042940] font-bold text-sm shadow-sm mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-2 h-2 rounded-full bg-[#c5d520]"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/ProcessSection.tsx",
                                    lineNumber: 19,
                                    columnNumber: 15
                                }, this),
                                "Our Process"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/ProcessSection.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "process-heading",
                            className: "text-4xl md:text-5xl font-medium text-[#042940] mb-6 leading-tight tracking-tighter",
                            children: "How It Works"
                        }, void 0, false, {
                            fileName: "[project]/components/shared/ProcessSection.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-[#042940]/60",
                            children: "A simple, transparent process designed to get your problem solved fast."
                        }, void 0, false, {
                            fileName: "[project]/components/shared/ProcessSection.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/shared/ProcessSection.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-5 gap-3",
                    children: steps.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                duration: 0.5,
                                delay: i * 0.1
                            },
                            className: "group bg-white p-6 md:p-10 rounded-[5px] border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)] active:shadow-[0_12px_24px_rgba(0,0,0,0.08)] transition-all duration-300 relative h-full flex flex-col items-start sm:items-center text-left sm:text-center md:hover:-translate-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 rounded-full bg-[#F9F9F6] group-hover:bg-[#c5d520] transition-colors duration-300 flex items-center justify-center text-lg font-bold text-[#042940] mb-8 shrink-0",
                                    children: step.num
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/ProcessSection.tsx",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-[#042940] mb-4 group-hover:text-[#c5d520] transition-colors duration-300",
                                    children: step.title
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/ProcessSection.tsx",
                                    lineNumber: 43,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#042940]/70 leading-relaxed text-sm",
                                    children: step.desc
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/ProcessSection.tsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/components/shared/ProcessSection.tsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/shared/ProcessSection.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/shared/ProcessSection.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/shared/ProcessSection.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = ProcessSection;
var _c;
__turbopack_context__.k.register(_c, "ProcessSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/shared/FinalCtaSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FinalCtaSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
const imgCyclist = "/images/stock/cyclist.jpg";
function FinalCtaSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 md:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 40
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: true
                },
                transition: {
                    duration: 0.8
                },
                className: "relative bg-[#042940] rounded-[5px] overflow-hidden shadow-2xl flex flex-col lg:flex-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:w-1/2 p-10 md:p-14 flex flex-col justify-center relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-0 w-[400px] h-[400px] bg-[#c5d520]/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"
                            }, void 0, false, {
                                fileName: "[project]/components/shared/FinalCtaSection.tsx",
                                lineNumber: 22,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl md:text-5xl font-medium text-white mb-4 leading-[1.1] tracking-tighter",
                                children: [
                                    "Streamline Your ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#c5d520]",
                                        children: "Waste Management"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/FinalCtaSection.tsx",
                                        lineNumber: 25,
                                        columnNumber: 35
                                    }, this),
                                    " Today"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/FinalCtaSection.tsx",
                                lineNumber: 24,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/80 text-lg font-medium mb-8 max-w-lg leading-relaxed",
                                children: "Join thousands of businesses optimizing their disposal costs and sustainability with Tenth Rock. One partner, zero headaches."
                            }, void 0, false, {
                                fileName: "[project]/components/shared/FinalCtaSection.tsx",
                                lineNumber: 27,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "lg",
                                    className: "w-full sm:w-auto bg-[#c5d520] text-[#042940] hover:bg-[#d6d98b] active:bg-[#d6d98b] shadow-lg md:hover:scale-105 active:scale-95 transition-all duration-300 min-h-[52px] whitespace-nowrap rounded-full",
                                    children: "Request a Service"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/FinalCtaSection.tsx",
                                    lineNumber: 32,
                                    columnNumber: 20
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/shared/FinalCtaSection.tsx",
                                lineNumber: 31,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/shared/FinalCtaSection.tsx",
                        lineNumber: 21,
                        columnNumber: 14
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:w-1/2 relative min-h-[300px] lg:min-h-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: imgCyclist,
                                alt: "Ready to start",
                                className: "absolute inset-0 w-full h-full object-cover object-center lg:object-right"
                            }, void 0, false, {
                                fileName: "[project]/components/shared/FinalCtaSection.tsx",
                                lineNumber: 40,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-[#042940]/40 lg:bg-[#042940]/20 mix-blend-multiply"
                            }, void 0, false, {
                                fileName: "[project]/components/shared/FinalCtaSection.tsx",
                                lineNumber: 41,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#042940] via-[#042940]/60 lg:via-[#042940]/50 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/components/shared/FinalCtaSection.tsx",
                                lineNumber: 42,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    scale: 0.8
                                },
                                whileInView: {
                                    opacity: 1,
                                    scale: 1
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    delay: 0.5,
                                    duration: 0.4
                                },
                                className: "absolute bottom-4 right-4 sm:bottom-8 sm:right-8 md:bottom-12 md:right-12 bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-6 rounded-[5px] max-w-[200px] sm:max-w-xs transform md:hover:scale-105 transition-transform duration-300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 bg-[#c5d520] rounded-full flex items-center justify-center text-[#042940] shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                className: "w-6 h-6"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/FinalCtaSection.tsx",
                                                lineNumber: 54,
                                                columnNumber: 26
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/FinalCtaSection.tsx",
                                            lineNumber: 53,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[#c5d520] text-xl font-bold",
                                                children: "(888) 555-0123"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/FinalCtaSection.tsx",
                                                lineNumber: 57,
                                                columnNumber: 26
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/FinalCtaSection.tsx",
                                            lineNumber: 56,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/FinalCtaSection.tsx",
                                    lineNumber: 52,
                                    columnNumber: 20
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/shared/FinalCtaSection.tsx",
                                lineNumber: 45,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/shared/FinalCtaSection.tsx",
                        lineNumber: 39,
                        columnNumber: 14
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/shared/FinalCtaSection.tsx",
                lineNumber: 13,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/shared/FinalCtaSection.tsx",
            lineNumber: 12,
            columnNumber: 8
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/shared/FinalCtaSection.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = FinalCtaSection;
var _c;
__turbopack_context__.k.register(_c, "FinalCtaSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/shared/CaseStudySection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CaseStudySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
"use client";
;
;
;
const imgCaseStudyMain = "/images/stock/case-study-main.jpg";
const imgCaseStudyThumb1 = "/images/stock/case-study-thumb1.jpg";
const imgCaseStudyThumb2 = "/images/stock/case-study-thumb2.jpg";
const imgCaseStudyThumb3 = "/images/stock/case-study-thumb3.jpg";
const stats = [
    {
        value: "32%",
        label: "Cost Reduction"
    },
    {
        value: "98%",
        label: "Recycling Rate"
    },
    {
        value: "12hr",
        label: "Response Time"
    },
    {
        value: "0",
        label: "Compliance Issues"
    }
];
function CaseStudySection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 md:py-24 bg-white border-b border-primary/5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 md:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-2 gap-12 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 order-2 lg:order-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    scale: 0.95
                                },
                                whileInView: {
                                    opacity: 1,
                                    scale: 1
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.6
                                },
                                className: "rounded-[5px] overflow-hidden h-[400px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: imgCaseStudyMain,
                                    alt: "Case Study Main",
                                    className: "w-full h-full object-cover md:hover:scale-105 transition-transform duration-700"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/CaseStudySection.tsx",
                                    lineNumber: 32,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/shared/CaseStudySection.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 gap-4",
                                children: [
                                    imgCaseStudyThumb1,
                                    imgCaseStudyThumb2,
                                    imgCaseStudyThumb3
                                ].map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                            duration: 0.4,
                                            delay: 0.2 + i * 0.1
                                        },
                                        className: "rounded-[5px] overflow-hidden aspect-square",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: img,
                                            alt: `Case Study Detail ${i + 1}`,
                                            className: "w-full h-full object-cover md:hover:scale-110 transition-transform duration-500"
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/CaseStudySection.tsx",
                                            lineNumber: 48,
                                            columnNumber: 19
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/components/shared/CaseStudySection.tsx",
                                        lineNumber: 40,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/shared/CaseStudySection.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/shared/CaseStudySection.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: 20
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.6
                        },
                        className: "lg:pl-8 order-1 lg:order-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl md:text-5xl font-medium text-primary mb-6 tracking-tighter",
                                children: [
                                    "Case Study: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/shared/CaseStudySection.tsx",
                                        lineNumber: 67,
                                        columnNumber: 27
                                    }, this),
                                    "Urban Redevelopment"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/CaseStudySection.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-primary/70 mb-8 md:mb-12 leading-relaxed",
                                children: "When a major metropolitan development needed a complete waste management overhaul for a 3-year project, they turned to Tenth Rock. We implemented a comprehensive diversion strategy that saved costs and exceeded sustainability goals."
                            }, void 0, false, {
                                fileName: "[project]/components/shared/CaseStudySection.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12",
                                children: stats.map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-4xl font-extrabold text-[#c5d520] mb-1",
                                                children: stat.value
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/CaseStudySection.tsx",
                                                lineNumber: 76,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-bold text-primary uppercase tracking-wide",
                                                children: stat.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/CaseStudySection.tsx",
                                                lineNumber: 77,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-1 w-12 bg-primary/10 mt-3"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/CaseStudySection.tsx",
                                                lineNumber: 78,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/components/shared/CaseStudySection.tsx",
                                        lineNumber: 75,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/shared/CaseStudySection.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary active:bg-primary hover:text-white active:text-white text-primary transition-all duration-300 shadow-sm hover:shadow-lg active:shadow-lg min-w-[44px] min-h-[44px]",
                                        "aria-label": "Previous case study",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "w-5 h-5 rotate-180"
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/CaseStudySection.tsx",
                                            lineNumber: 88,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/CaseStudySection.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-14 h-14 rounded-full bg-[#042940] text-white flex items-center justify-center hover:bg-[#c5d520] active:bg-[#c5d520] hover:text-[#042940] active:text-[#042940] transition-all duration-300 shadow-lg hover:shadow-xl active:shadow-xl active:scale-95 min-w-[44px] min-h-[44px]",
                                        "aria-label": "Next case study",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/CaseStudySection.tsx",
                                            lineNumber: 94,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/CaseStudySection.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/CaseStudySection.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/shared/CaseStudySection.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/shared/CaseStudySection.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/shared/CaseStudySection.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/shared/CaseStudySection.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = CaseStudySection;
var _c;
__turbopack_context__.k.register(_c, "CaseStudySection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/shared/WhoWeHelpSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhoWeHelpSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/landmark.js [app-client] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/utensils.js [app-client] (ecmascript) <export default as Utensils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$siren$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Siren$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/siren.js [app-client] (ecmascript) <export default as Siren>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/store.js [app-client] (ecmascript) <export default as Store>");
"use client";
;
;
;
;
const sectors = [
    {
        title: "Educational",
        img: "/assets_export/stock_images/harvard-university-cambridge-usa_1768502414325.jpg",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/components/shared/WhoWeHelpSection.tsx",
            lineNumber: 8,
            columnNumber: 120
        }, ("TURBOPACK compile-time value", void 0)),
        href: "/industries/educational"
    },
    {
        title: "Stadiums & Events",
        img: "/assets_export/stock_images/industry-stadiums-events.jpg",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/components/shared/WhoWeHelpSection.tsx",
            lineNumber: 9,
            columnNumber: 104
        }, ("TURBOPACK compile-time value", void 0)),
        href: "/industries/stadiums-events"
    },
    {
        title: "Faith Based",
        img: "/assets_export/stock_images/panoramic-view-church-building_1768502470001.jpg",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/components/shared/WhoWeHelpSection.tsx",
            lineNumber: 10,
            columnNumber: 118
        }, ("TURBOPACK compile-time value", void 0)),
        href: "/industries/faith-based"
    },
    {
        title: "Municipalities",
        img: "/assets_export/stock_images/clean_city_street.jpg",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/components/shared/WhoWeHelpSection.tsx",
            lineNumber: 11,
            columnNumber: 94
        }, ("TURBOPACK compile-time value", void 0)),
        href: "/industries/municipalities"
    },
    {
        title: "Hospitality",
        img: "/assets_export/stock_images/industry-hospitality.jpg",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/components/shared/WhoWeHelpSection.tsx",
            lineNumber: 12,
            columnNumber: 94
        }, ("TURBOPACK compile-time value", void 0)),
        href: "/industries/hospitality"
    },
    {
        title: "Natural Disasters",
        img: "/assets_export/stock_images/industry-natural-disasters.jpg",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$siren$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Siren$3e$__["Siren"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/components/shared/WhoWeHelpSection.tsx",
            lineNumber: 13,
            columnNumber: 106
        }, ("TURBOPACK compile-time value", void 0)),
        href: "/industries/natural-disasters"
    },
    {
        title: "Real Estate",
        img: "/assets_export/stock_images/industry-real-estate.jpg",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/components/shared/WhoWeHelpSection.tsx",
            lineNumber: 14,
            columnNumber: 94
        }, ("TURBOPACK compile-time value", void 0)),
        href: "/industries/real-estate"
    },
    {
        title: "Retail",
        img: "/assets_export/stock_images/indoor-hotel-view_1768502512665.jpg",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"], {
            className: "w-6 h-6"
        }, void 0, false, {
            fileName: "[project]/components/shared/WhoWeHelpSection.tsx",
            lineNumber: 15,
            columnNumber: 100
        }, ("TURBOPACK compile-time value", void 0)),
        href: "/industries/retail"
    }
];
function WhoWeHelpSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "sectors",
        "aria-labelledby": "sectors-heading",
        className: "py-16 md:py-24 bg-[#F9F9F6]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 md:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-left sm:text-center max-w-4xl mx-auto mb-10 md:mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/10 text-primary font-bold text-sm shadow-sm mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-2 h-2 rounded-full bg-secondary"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/WhoWeHelpSection.tsx",
                                    lineNumber: 24,
                                    columnNumber: 15
                                }, this),
                                "Industries"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/WhoWeHelpSection.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "sectors-heading",
                            className: "text-4xl md:text-5xl font-medium text-primary mb-6 tracking-tighter",
                            children: "Who We Help"
                        }, void 0, false, {
                            fileName: "[project]/components/shared/WhoWeHelpSection.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-primary/60",
                            children: "From local businesses to enterprise operations, we serve industries that demand reliability."
                        }, void 0, false, {
                            fileName: "[project]/components/shared/WhoWeHelpSection.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/shared/WhoWeHelpSection.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
                    children: sectors.map((sector, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: sector.href,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "group relative h-[280px] md:h-[320px] rounded-[5px] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl active:shadow-xl transition-all duration-300 md:hover:-translate-y-1",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.4,
                                    delay: i * 0.05
                                },
                                viewport: {
                                    once: true
                                },
                                "data-testid": `industry-card-${sector.title.toLowerCase().replace(/\s+/g, '-')}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: sector.img,
                                        className: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110",
                                        alt: sector.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/WhoWeHelpSection.tsx",
                                        lineNumber: 44,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-[#042940]/85 md:bg-[#042940]/80 group-hover:bg-[#042940]/60 group-active:bg-[#042940]/60 transition-colors duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/WhoWeHelpSection.tsx",
                                        lineNumber: 49,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-[#042940] via-[#042940]/40 md:via-transparent to-transparent opacity-90"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/WhoWeHelpSection.tsx",
                                        lineNumber: 50,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 p-6 flex flex-col justify-end",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "transform transition-transform duration-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-4 group-hover:bg-[#c5d520] group-hover:text-[#042940] group-focus-within:bg-[#c5d520] group-focus-within:text-[#042940] transition-colors duration-300",
                                                    children: sector.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/WhoWeHelpSection.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-white font-bold text-xl leading-tight mb-2",
                                                    children: sector.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/WhoWeHelpSection.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white text-sm mt-2",
                                                    children: [
                                                        "Tailored solutions for ",
                                                        sector.title,
                                                        "."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/shared/WhoWeHelpSection.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-[#c5d520] text-sm font-bold mt-4 group-hover:translate-x-1 transition-transform duration-200",
                                                    children: [
                                                        "Learn More ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/shared/WhoWeHelpSection.tsx",
                                                            lineNumber: 62,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/shared/WhoWeHelpSection.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/shared/WhoWeHelpSection.tsx",
                                            lineNumber: 53,
                                            columnNumber: 20
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/WhoWeHelpSection.tsx",
                                        lineNumber: 52,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/WhoWeHelpSection.tsx",
                                lineNumber: 36,
                                columnNumber: 15
                            }, this)
                        }, i, false, {
                            fileName: "[project]/components/shared/WhoWeHelpSection.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/shared/WhoWeHelpSection.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/shared/WhoWeHelpSection.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/shared/WhoWeHelpSection.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = WhoWeHelpSection;
var _c;
__turbopack_context__.k.register(_c, "WhoWeHelpSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/TenthRockHome.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Headset$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/headset.js [app-client] (ecmascript) <export default as Headset>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$CommercialWasteServices$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/CommercialWasteServices.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ReasonsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/ReasonsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$StatsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/StatsSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$FaqSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/FaqSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$LocationSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/LocationSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$CtaBannerSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/CtaBannerSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ProcessSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/ProcessSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$FinalCtaSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/FinalCtaSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$CaseStudySection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/CaseStudySection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$WhoWeHelpSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/WhoWeHelpSection.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Assets - Main Logos
const logoMain = "/images/logos/TenthRock-Logo.png";
const logoWhite = "/images/logos/Green-White-Logo.png";
// Stock images for services
const imgServiceEmergencyOverflow = "/images/stock/service-emergency-overflow.jpg";
const imgServiceDumpsterRental = "/images/stock/service-dumpster-rental.jpg";
const imgServiceEventStadium = "/images/stock/service-event-stadium.jpg";
const imgServiceMaintenance = "/images/stock/service-maintenance.jpg";
const imgServiceStoreDecommissioning = "/images/stock/service-store-decommissioning.jpg";
const imgServiceCentralizedProgram = "/images/stock/service-centralized-program.jpg";
// Stock images for industries
const imgIndustryEducational = "/images/stock/university.jpg";
const imgIndustryStadiumsEvents = "/images/stock/industry-stadiums-events.jpg";
const imgIndustryFaithBased = "/images/stock/church.jpg";
const imgIndustryMunicipalities = "/images/stock/clean-city.jpg";
const imgIndustryHospitality = "/images/stock/industry-hospitality.jpg";
const imgIndustryNaturalDisasters = "/images/stock/industry-natural-disasters.jpg";
const imgIndustryRealEstate = "/images/stock/industry-real-estate.jpg";
const imgIndustryRetail = "/images/stock/hotel.jpg";
// Decorative/Section-specific images
const imgTruck = "/images/stock/white-truck.jpg";
const imgCleanCity = "/images/stock/clean-city.jpg";
const imgCyclist = "/images/stock/cyclist.jpg";
const imgParkWater = "/images/stock/floor-park.jpg";
const imgHeroSkyscrapers = "/images/stock/hero-skyscrapers.jpg";
const imgUSMap = "/images/generated/3d-usa-map.png";
// Case study images
const imgCaseStudyMain = "/images/stock/case-study-main.jpg";
const imgCaseStudyThumb1 = "/images/stock/case-study-thumb1.jpg";
const imgCaseStudyThumb2 = "/images/stock/case-study-thumb2.jpg";
const imgCaseStudyThumb3 = "/images/stock/case-study-thumb3.jpg";
// Hero video
const heroVideo = "/videos/hero-background.mp4";
// Partner Logos
const logo7Eleven = "/images/logos/7-eleven.png";
const logoArbys = "/images/logos/arbys.png";
const logoBestBuy = "/images/logos/best-buy.png";
const logoBonefish = "/images/logos/bonefish.png";
const logoBp = "/images/logos/bp.png";
const logoChipotle = "/images/logos/chipotle.png";
const logoCircleK = "/images/logos/circle-k.png";
const logoDollarGeneral = "/images/logos/dollar-general.png";
const logoDoorDash = "/images/logos/doordash.png";
const logoDunkin = "/images/logos/dunkin.png";
const logoFiveBelow = "/images/logos/five-below.png";
const logoFoodLion = "/images/logos/food-lion.png";
const logoGNC = "/images/logos/gnc.png";
const logoGoodyear = "/images/logos/goodyear.png";
const logoHEB = "/images/logos/heb.png";
const logoKFC = "/images/logos/kfc.png";
const logoKroger = "/images/logos/kroger.png";
const logoMaggianos = "/images/logos/maggianos.png";
const logoMcDonalds = "/images/logos/mcdonalds.png";
const logoRedLobster = "/images/logos/red-lobster.png";
const Logo = ({ className = "", variant = "main" })=>{
    const logoSrc = variant === "main" ? logoMain : logoWhite;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center gap-2 ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: logoSrc,
            alt: "Tenth Rock Waste Solutions",
            className: "h-8 md:h-10 w-auto object-contain"
        }, void 0, false, {
            fileName: "[project]/components/home/TenthRockHome.tsx",
            lineNumber: 129,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/home/TenthRockHome.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Logo;
// Hero Section
const Hero = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-labelledby": "hero-heading",
        className: "relative min-h-screen flex items-center justify-center pt-32 pb-32 overflow-hidden bg-[#042940]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        autoPlay: true,
                        loop: true,
                        muted: true,
                        playsInline: true,
                        className: "w-full h-full object-cover opacity-80",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                            src: heroVideo,
                            type: "video/mp4"
                        }, void 0, false, {
                            fileName: "[project]/components/home/TenthRockHome.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/home/TenthRockHome.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[#042940]/70 md:bg-[#042940]/60 mix-blend-multiply"
                    }, void 0, false, {
                        fileName: "[project]/components/home/TenthRockHome.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-[#042940] via-[#042940]/20 md:via-transparent to-[#042940]/40 md:to-[#042940]/30"
                    }, void 0, false, {
                        fileName: "[project]/components/home/TenthRockHome.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"
                    }, void 0, false, {
                        fileName: "[project]/components/home/TenthRockHome.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/TenthRockHome.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 md:px-8 relative z-10 mt-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.8
                    },
                    className: "max-w-5xl mx-auto text-left sm:text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#c5d520] font-bold text-sm backdrop-blur-md shadow-sm mb-8 animate-fade-in-up",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-2 h-2 rounded-full bg-[#c5d520] animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Nationwide Commercial Waste Solutions"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/TenthRockHome.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            id: "hero-heading",
                            className: "text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[5rem] font-sans font-medium text-white leading-[1.05] tracking-tighter mb-5 drop-shadow-lg",
                            style: {
                                textWrap: "balance"
                            },
                            children: "Fast, Reliable Waste Solutions—Anywhere You Need Them"
                        }, void 0, false, {
                            fileName: "[project]/components/home/TenthRockHome.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto font-normal tracking-tight drop-shadow-md",
                            style: {
                                textWrap: "balance"
                            },
                            children: "Emergency pickups, dumpster rentals, and site cleanouts. We respond in hours — not days."
                        }, void 0, false, {
                            fileName: "[project]/components/home/TenthRockHome.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-4 sm:justify-center sm:items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "lg",
                                    className: "w-full sm:w-auto bg-[#c5d520] hover:bg-[#d6d98b] active:bg-[#d6d98b] text-[#042940] shadow-[0_0_40px_rgba(197,213,32,0.3)] hover:shadow-[0_0_60px_rgba(197,213,32,0.5)] active:shadow-[0_0_60px_rgba(197,213,32,0.5)] transition-all transform md:hover:-translate-y-1 md:hover:scale-105 active:scale-95 focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-2 min-h-[52px] whitespace-nowrap",
                                    "aria-label": "Request a waste removal service",
                                    "data-testid": "button-hero-cta",
                                    children: "Request A Service"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "lg",
                                    variant: "outline",
                                    className: "w-full sm:w-auto backdrop-blur-md bg-white/5 border-white/20 text-white hover:bg-white active:bg-white hover:text-[#042940] active:text-[#042940] shadow-lg transition-all transform md:hover:-translate-y-1 md:hover:scale-105 active:scale-95 focus-visible:ring-4 focus-visible:ring-[#c5d520] focus-visible:ring-offset-2 min-h-[52px] whitespace-nowrap",
                                    onClick: ()=>document.getElementById('process')?.scrollIntoView({
                                            behavior: 'smooth'
                                        }),
                                    "aria-label": "See how our process works",
                                    "data-testid": "button-hero-secondary",
                                    children: "See How It Works"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/TenthRockHome.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/TenthRockHome.tsx",
                    lineNumber: 159,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/home/TenthRockHome.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/TenthRockHome.tsx",
        lineNumber: 141,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = Hero;
// Counter Component
const Counter = ({ from = 0, to, duration = 2, suffix = "", prefix = "" })=>{
    _s();
    const nodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(nodeRef, {
        once: true,
        margin: "-20%"
    });
    const count = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(from);
    const rounded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(count, {
        "Counter.useTransform[rounded]": (latest)=>Math.round(latest)
    }["Counter.useTransform[rounded]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Counter.useEffect": ()=>{
            if (inView) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(count, to, {
                    duration,
                    ease: "easeOut"
                });
            }
        }
    }["Counter.useEffect"], [
        inView,
        count,
        to,
        duration
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: nodeRef,
        className: "flex items-center justify-center",
        children: [
            prefix,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                children: rounded
            }, void 0, false, {
                fileName: "[project]/components/home/TenthRockHome.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            suffix
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/TenthRockHome.tsx",
        lineNumber: 206,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Counter, "pkY2C2Ue7slQxUXIA+YmvKvaGe4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c2 = Counter;
// Simple Numbers 2
const SimpleNumbers = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-label": "Company statistics",
        className: "py-12 md:py-20 bg-white border-b border-primary/5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 md:px-8 max-w-7xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-3 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-primary/10 max-w-5xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center text-center px-4 md:px-8 pt-6 md:pt-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-5xl md:text-6xl font-extrabold text-primary mb-2 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Counter, {
                                    to: 48,
                                    duration: 2.5
                                }, void 0, false, {
                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                    lineNumber: 222,
                                    columnNumber: 18
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/home/TenthRockHome.tsx",
                                lineNumber: 221,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-lg text-primary/60",
                                children: "States Serviced"
                            }, void 0, false, {
                                fileName: "[project]/components/home/TenthRockHome.tsx",
                                lineNumber: 224,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/TenthRockHome.tsx",
                        lineNumber: 220,
                        columnNumber: 12
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center text-center px-4 md:px-8 pt-6 md:pt-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-5xl md:text-6xl font-extrabold text-primary mb-2 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Counter, {
                                    to: 5,
                                    suffix: "K+",
                                    duration: 2.5
                                }, void 0, false, {
                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                    lineNumber: 228,
                                    columnNumber: 18
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/home/TenthRockHome.tsx",
                                lineNumber: 227,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-lg text-primary/60",
                                children: "Jobs Completed"
                            }, void 0, false, {
                                fileName: "[project]/components/home/TenthRockHome.tsx",
                                lineNumber: 230,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/TenthRockHome.tsx",
                        lineNumber: 226,
                        columnNumber: 12
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center text-center px-4 md:px-8 pt-6 md:pt-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-5xl md:text-6xl font-extrabold text-primary mb-2 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Counter, {
                                    to: 24,
                                    suffix: "/7",
                                    duration: 2.5
                                }, void 0, false, {
                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                    lineNumber: 234,
                                    columnNumber: 18
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/home/TenthRockHome.tsx",
                                lineNumber: 233,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-lg text-primary/60",
                                children: "Emergency Support"
                            }, void 0, false, {
                                fileName: "[project]/components/home/TenthRockHome.tsx",
                                lineNumber: 236,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/TenthRockHome.tsx",
                        lineNumber: 232,
                        columnNumber: 12
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/TenthRockHome.tsx",
                lineNumber: 219,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/home/TenthRockHome.tsx",
            lineNumber: 218,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/home/TenthRockHome.tsx",
        lineNumber: 217,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c3 = SimpleNumbers;
// Logo Reel
const LogoList = ()=>{
    const logos = [
        {
            src: logo7Eleven,
            alt: "7-Eleven"
        },
        {
            src: logoArbys,
            alt: "Arby's"
        },
        {
            src: logoBestBuy,
            alt: "Best Buy"
        },
        {
            src: logoBonefish,
            alt: "Bonefish Grill"
        },
        {
            src: logoBp,
            alt: "BP"
        },
        {
            src: logoChipotle,
            alt: "Chipotle"
        },
        {
            src: logoCircleK,
            alt: "Circle K"
        },
        {
            src: logoDollarGeneral,
            alt: "Dollar General"
        },
        {
            src: logoDoorDash,
            alt: "DoorDash"
        },
        {
            src: logoDunkin,
            alt: "Dunkin'"
        },
        {
            src: logoFiveBelow,
            alt: "Five Below"
        },
        {
            src: logoFoodLion,
            alt: "Food Lion"
        },
        {
            src: logoGNC,
            alt: "GNC"
        },
        {
            src: logoGoodyear,
            alt: "Goodyear"
        },
        {
            src: logoHEB,
            alt: "H-E-B"
        },
        {
            src: logoKFC,
            alt: "KFC"
        },
        {
            src: logoKroger,
            alt: "Kroger"
        },
        {
            src: logoMaggianos,
            alt: "Maggiano's"
        },
        {
            src: logoMcDonalds,
            alt: "McDonald's"
        },
        {
            src: logoRedLobster,
            alt: "Red Lobster"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-12 bg-white border-b border-primary/5 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 md:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-left sm:text-center mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-testid": "text-logo-reel-headline",
                        className: "text-xs md:text-sm font-extrabold tracking-[0.2em] uppercase text-primary/70",
                        children: "Supporting these leading national brands"
                    }, void 0, false, {
                        fileName: "[project]/components/home/TenthRockHome.tsx",
                        lineNumber: 273,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/home/TenthRockHome.tsx",
                    lineNumber: 272,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/home/TenthRockHome.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                whileInView: {
                    opacity: 1
                },
                viewport: {
                    once: true
                },
                transition: {
                    duration: 0.8,
                    delay: 0.2
                },
                className: "relative flex overflow-hidden group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-marquee flex gap-16 items-center whitespace-nowrap min-w-full shrink-0 px-8",
                        children: logos.map((logo, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-16 w-32 flex items-center justify-center grayscale md:grayscale opacity-60 md:opacity-60 md:hover:grayscale-0 md:hover:opacity-100 transition-all duration-300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: logo.src,
                                    alt: logo.alt,
                                    className: "max-h-full max-w-full object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                    lineNumber: 289,
                                    columnNumber: 16
                                }, ("TURBOPACK compile-time value", void 0))
                            }, `logo-1-${i}`, false, {
                                fileName: "[project]/components/home/TenthRockHome.tsx",
                                lineNumber: 288,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/components/home/TenthRockHome.tsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-marquee flex gap-16 items-center whitespace-nowrap min-w-full shrink-0 px-8",
                        children: logos.map((logo, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-16 w-32 flex items-center justify-center grayscale md:grayscale opacity-60 md:opacity-60 md:hover:grayscale-0 md:hover:opacity-100 transition-all duration-300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: logo.src,
                                    alt: logo.alt,
                                    className: "max-h-full max-w-full object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                    lineNumber: 296,
                                    columnNumber: 16
                                }, ("TURBOPACK compile-time value", void 0))
                            }, `logo-2-${i}`, false, {
                                fileName: "[project]/components/home/TenthRockHome.tsx",
                                lineNumber: 295,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/components/home/TenthRockHome.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/TenthRockHome.tsx",
                lineNumber: 279,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/TenthRockHome.tsx",
        lineNumber: 270,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c4 = LogoList;
// ServicesSection
const ServicesSection = ()=>{
    _s1();
    const [activeService, setActiveService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const services = [
        {
            title: "Emergency & Overflow Waste Response",
            desc: "Rapid-response hauling, overflow pickups, and surge capacity when your operations can’t wait. Built for retail, industrial, and multi-site emergencies.",
            img: imgServiceEmergencyOverflow,
            features: [
                "24/7 Dispatch",
                "Overflow & Surge Capacity",
                "Nationwide Network"
            ]
        },
        {
            title: "Store Decommissioning & Remodel Support",
            desc: "Cleanouts, roll-offs, and coordinated haul schedules for remodels, closures, and fixture swaps—without disrupting day-to-day operations.",
            img: imgServiceStoreDecommissioning,
            features: [
                "Project Scheduling",
                "Site Cleanouts",
                "Multi-location Coordination"
            ]
        },
        {
            title: "Event & Stadium Waste Logistics",
            desc: "End-to-end waste plans for venues and large events—placement, swaps, post-event sweeps, and recycling streams managed on tight timelines.",
            img: imgServiceEventStadium,
            features: [
                "Venue Routing",
                "High-volume Support",
                "Diversion Planning"
            ]
        },
        {
            title: "Dumpster Rental & Temporary Containers",
            desc: "Temporary containers and compactor solutions for projects and peaks. Transparent sizing, delivery windows, and swap schedules.",
            img: imgServiceDumpsterRental,
            features: [
                "Roll-offs & Front-load",
                "Fast Delivery",
                "Flexible Terms"
            ]
        },
        {
            title: "Centralized Waste Program Management",
            desc: "One partner to standardize vendors, pricing, reporting, and service levels across all your locations—improving control and visibility.",
            img: imgServiceCentralizedProgram,
            features: [
                "Standardized SLAs",
                "Spend Visibility",
                "Single Point of Contact"
            ]
        },
        {
            title: "Environmental & Compactor Maintenance Services",
            desc: "Preventative maintenance and service for compactors and waste equipment, plus environmental support to keep sites compliant and running.",
            img: imgServiceMaintenance,
            features: [
                "PM Schedules",
                "On-site Repairs",
                "Compliance Support"
            ]
        }
    ];
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
                            className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/10 text-primary font-bold text-sm shadow-sm mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-2 h-2 rounded-full bg-secondary"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                    lineNumber: 359,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Our Services"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/TenthRockHome.tsx",
                            lineNumber: 358,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "services-heading",
                            className: "text-4xl md:text-5xl font-medium text-primary leading-tight mb-4 tracking-tighter",
                            children: "Commercial Waste Services"
                        }, void 0, false, {
                            fileName: "[project]/components/home/TenthRockHome.tsx",
                            lineNumber: 362,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-primary/60",
                            children: "Comprehensive solutions for businesses of all sizes, available nationwide."
                        }, void 0, false, {
                            fileName: "[project]/components/home/TenthRockHome.tsx",
                            lineNumber: 365,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/TenthRockHome.tsx",
                    lineNumber: 351,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-12 gap-8 items-stretch",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-4 flex flex-col space-y-[6px]",
                            children: services.map((service, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveService(i),
                                    onMouseEnter: ()=>setActiveService(i),
                                    className: `text-left px-6 md:px-8 py-4 rounded-[5px] transition-all duration-300 font-bold text-base md:text-lg relative overflow-hidden group min-h-[52px] ${activeService === i ? "bg-white shadow-lg text-primary border border-primary/5" : "text-primary/40 hover:text-primary active:text-primary hover:bg-white/50 active:bg-white/50"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative z-10 flex items-center justify-between",
                                            children: [
                                                service.title,
                                                activeService === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                    layoutId: "active-indicator",
                                                    className: "w-2 h-2 rounded-full bg-[#c5d520]"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 22
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/home/TenthRockHome.tsx",
                                            lineNumber: 384,
                                            columnNumber: 18
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        activeService === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            layoutId: "active-bg",
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
                                            fileName: "[project]/components/home/TenthRockHome.tsx",
                                            lineNumber: 391,
                                            columnNumber: 20
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                    lineNumber: 374,
                                    columnNumber: 16
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/components/home/TenthRockHome.tsx",
                            lineNumber: 372,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-8 cursor-pointer h-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#c5d520] focus-visible:ring-offset-2 rounded-[5px]",
                            role: "button",
                            tabIndex: 0,
                            "aria-label": "View service details",
                            onClick: ()=>console.log('Navigate to service details'),
                            onKeyDown: (e)=>(e.key === 'Enter' || e.key === ' ') && console.log('Navigate to service details'),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-full min-h-[560px] rounded-[5px] overflow-hidden shadow-2xl group",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    mode: "wait",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            scale: 1.05
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        exit: {
                                            opacity: 0
                                        },
                                        transition: {
                                            duration: 0.5
                                        },
                                        className: "absolute inset-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: services[activeService].img,
                                                alt: services[activeService].title,
                                                className: "w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/TenthRockHome.tsx",
                                                lineNumber: 415,
                                                columnNumber: 20
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-[#042940] via-[#042940]/70 md:via-[#042940]/60 to-transparent opacity-95 md:opacity-90"
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/TenthRockHome.tsx",
                                                lineNumber: 420,
                                                columnNumber: 20
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 p-6 md:p-12 flex flex-col justify-end",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: 20
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    transition: {
                                                        delay: 0.2
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 md:mb-6 tracking-tight",
                                                            children: services[activeService].title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/TenthRockHome.tsx",
                                                            lineNumber: 428,
                                                            columnNumber: 24
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white/90 text-xl leading-relaxed max-w-2xl font-medium mb-8",
                                                            children: services[activeService].desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/TenthRockHome.tsx",
                                                            lineNumber: 431,
                                                            columnNumber: 24
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-4 mb-8",
                                                            children: services[activeService].features.map((feature, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg text-white text-sm font-bold border border-white/10 hover:bg-white/20 transition-colors",
                                                                    children: feature
                                                                }, idx, false, {
                                                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                                                    lineNumber: 437,
                                                                    columnNumber: 28
                                                                }, ("TURBOPACK compile-time value", void 0)))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/TenthRockHome.tsx",
                                                            lineNumber: 435,
                                                            columnNumber: 24
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 text-[#c5d520] font-bold uppercase tracking-wide group-hover:gap-4 transition-all",
                                                            children: [
                                                                "Learn More ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                    className: "w-5 h-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                                                    lineNumber: 444,
                                                                    columnNumber: 37
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/home/TenthRockHome.tsx",
                                                            lineNumber: 443,
                                                            columnNumber: 24
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                                    lineNumber: 423,
                                                    columnNumber: 22
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/TenthRockHome.tsx",
                                                lineNumber: 422,
                                                columnNumber: 20
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, activeService, true, {
                                        fileName: "[project]/components/home/TenthRockHome.tsx",
                                        lineNumber: 407,
                                        columnNumber: 18
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                    lineNumber: 406,
                                    columnNumber: 16
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/home/TenthRockHome.tsx",
                                lineNumber: 405,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/home/TenthRockHome.tsx",
                            lineNumber: 404,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/TenthRockHome.tsx",
                    lineNumber: 370,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/TenthRockHome.tsx",
            lineNumber: 350,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/home/TenthRockHome.tsx",
        lineNumber: 349,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(ServicesSection, "zZYTNI/jNGE5X7qnGfYrzrq267M=");
_c5 = ServicesSection;
// Feature 3 (Sectors / Who We Help)
// Why You'll Love Tenth Rock (Simple Accordion 1)
const WhyUs = ()=>{
    _s2();
    const [activeItem, setActiveItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("item-0");
    const items = [
        {
            title: "Speed You Can Count On",
            content: "We leverage our nationwide network to ensure rapid deployment and timely pickups, minimizing downtime for your operations.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                className: "w-5 h-5 text-[#c5d520]"
            }, void 0, false, {
                fileName: "[project]/components/home/TenthRockHome.tsx",
                lineNumber: 467,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        },
        {
            title: "Nationwide, Local Execution",
            content: "One contract, one point of contact, but serviced by local experts who know the regulations and requirements of your specific area.",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                className: "w-5 h-5 text-[#c5d520]"
            }, void 0, false, {
                fileName: "[project]/components/home/TenthRockHome.tsx",
                lineNumber: 472,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 md:py-24 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 md:px-8 max-w-7xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.8
                        },
                        className: "h-[350px] lg:h-[600px] relative rounded-[5px] overflow-hidden order-2 lg:order-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: imgTruck,
                            alt: "Tenth Rock Operations",
                            className: "absolute inset-0 w-full h-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/components/home/TenthRockHome.tsx",
                            lineNumber: 488,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/home/TenthRockHome.tsx",
                        lineNumber: 481,
                        columnNumber: 12
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: 20
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.8
                        },
                        className: "flex flex-col justify-center order-1 lg:order-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl md:text-4xl lg:text-5xl font-medium text-[#042940] leading-tight mb-8 md:mb-12 tracking-tighter",
                                children: "Why You’ll Love Tenth Rock Solutions"
                            }, void 0, false, {
                                fileName: "[project]/components/home/TenthRockHome.tsx",
                                lineNumber: 499,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 md:space-y-6 mb-8 md:mb-12",
                                children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 md:p-6 rounded-[5px] border border-gray-100 shadow-sm active:shadow-md md:hover:shadow-md transition-shadow",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1",
                                                    children: item.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                                    lineNumber: 507,
                                                    columnNumber: 24
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-xl font-bold text-[#042940] mb-2",
                                                            children: item.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/TenthRockHome.tsx",
                                                            lineNumber: 511,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#042940]/70 leading-relaxed",
                                                            children: item.content
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/TenthRockHome.tsx",
                                                            lineNumber: 512,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                                    lineNumber: 510,
                                                    columnNumber: 24
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/home/TenthRockHome.tsx",
                                            lineNumber: 506,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, i, false, {
                                        fileName: "[project]/components/home/TenthRockHome.tsx",
                                        lineNumber: 505,
                                        columnNumber: 18
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/components/home/TenthRockHome.tsx",
                                lineNumber: 503,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "lg",
                                        className: "w-full sm:w-auto bg-[#c5d520] text-[#042940] hover:bg-[#d6d98b] active:bg-[#d6d98b] min-h-[52px] whitespace-nowrap",
                                        children: "Get Started"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/TenthRockHome.tsx",
                                        lineNumber: 522,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "lg",
                                        variant: "outline",
                                        className: "w-full sm:w-auto border-[#042940] text-[#042940] hover:bg-[#042940] active:bg-[#042940] hover:text-white active:text-white min-h-[52px] whitespace-nowrap",
                                        children: "Read More"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/TenthRockHome.tsx",
                                        lineNumber: 525,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/TenthRockHome.tsx",
                                lineNumber: 521,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/TenthRockHome.tsx",
                        lineNumber: 492,
                        columnNumber: 12
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/TenthRockHome.tsx",
                lineNumber: 479,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/home/TenthRockHome.tsx",
            lineNumber: 478,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/home/TenthRockHome.tsx",
        lineNumber: 477,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(WhyUs, "xvYS3FTCLFYrqNa40WsikNcBCNw=");
_c6 = WhyUs;
// Reasons Section (Grid with Sticky Feature)
const Reasons = ()=>{
    const features = [
        {
            title: "Dedicated Point of Contact",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Headset$3e$__["Headset"], {
                className: "w-6 h-6"
            }, void 0, false, {
                fileName: "[project]/components/home/TenthRockHome.tsx",
                lineNumber: 539,
                columnNumber: 50
            }, ("TURBOPACK compile-time value", void 0)),
            desc: "One person to handle everything. No call centers, no runarounds, just answers."
        },
        {
            title: "Job Completion Proof",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                className: "w-6 h-6"
            }, void 0, false, {
                fileName: "[project]/components/home/TenthRockHome.tsx",
                lineNumber: 540,
                columnNumber: 44
            }, ("TURBOPACK compile-time value", void 0)),
            desc: "Visual confirmation for every job we complete, available instantly."
        },
        {
            title: "Local Crews, National Reach",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                className: "w-6 h-6"
            }, void 0, false, {
                fileName: "[project]/components/home/TenthRockHome.tsx",
                lineNumber: 541,
                columnNumber: 51
            }, ("TURBOPACK compile-time value", void 0)),
            desc: "We operate in every zip code across the country with vetted local partners."
        },
        {
            title: "Price Savings Just for You",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                className: "w-6 h-6"
            }, void 0, false, {
                fileName: "[project]/components/home/TenthRockHome.tsx",
                lineNumber: 542,
                columnNumber: 50
            }, ("TURBOPACK compile-time value", void 0)),
            desc: "Volume pricing passed directly to your bottom line, typically saving 15-20%."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 md:py-24 bg-[#F8F8F8]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 md:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-12 gap-12 lg:gap-24 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-5 lg:sticky lg:top-32",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/10 text-primary font-bold text-sm shadow-sm mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-2 h-2 rounded-full bg-secondary"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/TenthRockHome.tsx",
                                            lineNumber: 558,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Benefits"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                    lineNumber: 557,
                                    columnNumber: 16
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl md:text-5xl font-medium text-primary mb-6 leading-tight tracking-tighter",
                                    children: "More Reasons You’ll Love Us"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                    lineNumber: 561,
                                    columnNumber: 16
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-primary/60 mb-8 leading-relaxed",
                                    children: "We've rebuilt waste management from the ground up to serve modern businesses. Say goodbye to hidden fees and confusing contracts."
                                }, void 0, false, {
                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                    lineNumber: 564,
                                    columnNumber: 16
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "lg",
                                    className: "w-full sm:w-auto bg-secondary text-primary hover:bg-secondary/90 min-h-[52px] whitespace-nowrap",
                                    children: "Request a Service"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                    lineNumber: 567,
                                    columnNumber: 16
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/TenthRockHome.tsx",
                            lineNumber: 551,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/home/TenthRockHome.tsx",
                        lineNumber: 550,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-7 grid sm:grid-cols-2 gap-6",
                        children: features.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "group bg-white p-6 md:p-8 rounded-[5px] shadow-sm border border-transparent hover:border-secondary/20 active:border-secondary/20 hover:shadow-xl active:shadow-xl transition-all duration-300",
                                whileHover: {
                                    y: -5
                                },
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: i * 0.1
                                },
                                viewport: {
                                    once: true
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-14 h-14 rounded-[5px] bg-[#F9F9F6] group-hover:bg-secondary group-hover:text-primary transition-colors duration-300 flex items-center justify-center text-primary mb-6",
                                        children: item.icon
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/TenthRockHome.tsx",
                                        lineNumber: 585,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-300",
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/TenthRockHome.tsx",
                                        lineNumber: 589,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-primary/60 leading-relaxed group-hover:text-primary/80 transition-colors duration-300",
                                        children: item.desc
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/TenthRockHome.tsx",
                                        lineNumber: 590,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, i, true, {
                                fileName: "[project]/components/home/TenthRockHome.tsx",
                                lineNumber: 576,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/components/home/TenthRockHome.tsx",
                        lineNumber: 574,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/TenthRockHome.tsx",
                lineNumber: 548,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/home/TenthRockHome.tsx",
            lineNumber: 547,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/home/TenthRockHome.tsx",
        lineNumber: 546,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c7 = Reasons;
// Stats Section (Numbers and Media 1)
const Stats = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 md:py-24 bg-[#FDFDFD]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 md:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-2 gap-16 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky top-32",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: -20
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.6
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/10 text-primary font-bold text-sm shadow-sm mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-2 h-2 rounded-full bg-secondary"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/TenthRockHome.tsx",
                                            lineNumber: 614,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Key Metrics"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                    lineNumber: 613,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl md:text-5xl font-medium text-primary mb-6 leading-tight tracking-tighter",
                                    children: "Why Clients Call Us Again and Again."
                                }, void 0, false, {
                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                    lineNumber: 617,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-primary/60 mb-8",
                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
                                }, void 0, false, {
                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                    lineNumber: 620,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "lg",
                                            className: "w-full sm:w-auto bg-primary text-white min-h-[52px] whitespace-nowrap",
                                            children: "Request a Service"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/TenthRockHome.tsx",
                                            lineNumber: 624,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "lg",
                                            variant: "ghost",
                                            className: "w-full sm:w-auto text-primary hover:bg-transparent hover:underline flex items-center justify-center gap-2 min-h-[52px] whitespace-nowrap",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    className: "w-5 h-5 text-secondary"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                                    lineNumber: 628,
                                                    columnNumber: 20
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " (888) 555-0123"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/home/TenthRockHome.tsx",
                                            lineNumber: 627,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                    lineNumber: 623,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/TenthRockHome.tsx",
                            lineNumber: 607,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/home/TenthRockHome.tsx",
                        lineNumber: 606,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-8",
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
                                    duration: 0.5,
                                    delay: 0.1
                                },
                                className: "border border-primary/10 p-8 rounded-[5px] bg-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold text-xl text-primary mb-4",
                                        children: "Case / Stat Here"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/TenthRockHome.tsx",
                                        lineNumber: 642,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-7xl font-extrabold text-primary mb-4",
                                        children: "30%"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/TenthRockHome.tsx",
                                        lineNumber: 643,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                                        className: "bg-primary/10 mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/TenthRockHome.tsx",
                                        lineNumber: 644,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-primary/60",
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/TenthRockHome.tsx",
                                        lineNumber: 645,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/TenthRockHome.tsx",
                                lineNumber: 635,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)),
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
                                    duration: 0.5,
                                    delay: 0.2
                                },
                                className: "border border-primary/10 p-8 rounded-[5px] bg-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-64 w-full rounded-[5px] overflow-hidden mb-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: imgParkWater,
                                            className: "w-full h-full object-cover",
                                            alt: "Stats Visual"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/TenthRockHome.tsx",
                                            lineNumber: 656,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/TenthRockHome.tsx",
                                        lineNumber: 655,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold text-xl text-primary mb-4",
                                        children: "Case / Stat Here"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/TenthRockHome.tsx",
                                        lineNumber: 658,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-7xl font-extrabold text-primary mb-4",
                                        children: "70K"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/TenthRockHome.tsx",
                                        lineNumber: 659,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                                        className: "bg-primary/10 mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/TenthRockHome.tsx",
                                        lineNumber: 660,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-primary/60",
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/TenthRockHome.tsx",
                                        lineNumber: 661,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/TenthRockHome.tsx",
                                lineNumber: 648,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)),
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
                                    duration: 0.5,
                                    delay: 0.3
                                },
                                className: "border border-primary/10 p-8 rounded-[5px] bg-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold text-xl text-primary mb-4",
                                        children: "Case / Stat Here"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/TenthRockHome.tsx",
                                        lineNumber: 671,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-7xl font-extrabold text-primary mb-4",
                                        children: "80%"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/TenthRockHome.tsx",
                                        lineNumber: 672,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                                        className: "bg-primary/10 mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/TenthRockHome.tsx",
                                        lineNumber: 673,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-primary/60",
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/TenthRockHome.tsx",
                                        lineNumber: 674,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/TenthRockHome.tsx",
                                lineNumber: 664,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/TenthRockHome.tsx",
                        lineNumber: 634,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/TenthRockHome.tsx",
                lineNumber: 605,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/home/TenthRockHome.tsx",
            lineNumber: 604,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/home/TenthRockHome.tsx",
        lineNumber: 603,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c8 = Stats;
// Testimonial (Interactive Slider)
const Testimonials = ()=>{
    _s3();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const testimonials = [
        {
            quote: "Tenth Rock transformed our waste management. We saved 30% in the first quarter alone.",
            author: "Sarah Jenkins",
            role: "Director of Operations",
            company: "Retail Giant Co.",
            img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
        },
        {
            quote: "The single point of contact is a game changer. No more chasing vendors across 15 states.",
            author: "Michael Ross",
            role: "Facility Manager",
            company: "National Logistics Inc.",
            img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200"
        },
        {
            quote: "Finally, a partner that understands compliance. The audit trail features are exactly what we needed.",
            author: "David Chen",
            role: "Compliance Officer",
            company: "BioTech Solutions",
            img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
        }
    ];
    const nextTestimonial = ()=>{
        setCurrentIndex((prev)=>(prev + 1) % testimonials.length);
    };
    const prevTestimonial = ()=>{
        setCurrentIndex((prev)=>(prev - 1 + testimonials.length) % testimonials.length);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 md:py-24 bg-[#042940] text-white relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-[#042940] to-[#0a3a55]"
            }, void 0, false, {
                fileName: "[project]/components/home/TenthRockHome.tsx",
                lineNumber: 722,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-10",
                style: {
                    backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }
            }, void 0, false, {
                fileName: "[project]/components/home/TenthRockHome.tsx",
                lineNumber: 725,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 w-[600px] h-[600px] bg-[#c5d520]/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/home/TenthRockHome.tsx",
                lineNumber: 728,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 md:px-8 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    className: "max-w-4xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm backdrop-blur-md shadow-sm mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-2 h-2 rounded-full bg-[#c5d520]"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                    lineNumber: 739,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Client Stories"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/TenthRockHome.tsx",
                            lineNumber: 738,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-1 mb-8",
                            children: [
                                1,
                                2,
                                3,
                                4,
                                5
                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                    className: "w-6 h-6 fill-[#c5d520] text-[#c5d520]"
                                }, i, false, {
                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                    lineNumber: 744,
                                    columnNumber: 37
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/components/home/TenthRockHome.tsx",
                            lineNumber: 743,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative min-h-[300px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "wait",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: -20
                                    },
                                    transition: {
                                        duration: 0.5
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                            className: "text-3xl md:text-5xl font-bold leading-tight mb-10 tracking-tight",
                                            children: [
                                                '"',
                                                testimonials[currentIndex].quote,
                                                '"'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/home/TenthRockHome.tsx",
                                            lineNumber: 756,
                                            columnNumber: 18
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-16 h-16 rounded-full overflow-hidden border-2 border-white/20",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: testimonials[currentIndex].img,
                                                        alt: testimonials[currentIndex].author,
                                                        className: "w-full h-full object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/home/TenthRockHome.tsx",
                                                        lineNumber: 762,
                                                        columnNumber: 24
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                                    lineNumber: 761,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-bold text-xl text-white",
                                                            children: testimonials[currentIndex].author
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/home/TenthRockHome.tsx",
                                                            lineNumber: 765,
                                                            columnNumber: 24
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-white/60 font-medium",
                                                            children: [
                                                                testimonials[currentIndex].role,
                                                                ", ",
                                                                testimonials[currentIndex].company
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/home/TenthRockHome.tsx",
                                                            lineNumber: 766,
                                                            columnNumber: 24
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                                    lineNumber: 764,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/home/TenthRockHome.tsx",
                                            lineNumber: 760,
                                            columnNumber: 18
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, currentIndex, true, {
                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                    lineNumber: 749,
                                    columnNumber: 16
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/home/TenthRockHome.tsx",
                                lineNumber: 748,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/home/TenthRockHome.tsx",
                            lineNumber: 747,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4 pt-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: prevTestimonial,
                                    className: "w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 active:bg-white/10 text-white transition-all duration-300 min-w-[44px] min-h-[44px]",
                                    "aria-label": "Previous testimonial",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "w-5 h-5 rotate-180"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/TenthRockHome.tsx",
                                        lineNumber: 780,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                    lineNumber: 775,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: nextTestimonial,
                                    className: "w-12 h-12 rounded-full bg-[#c5d520] text-[#042940] flex items-center justify-center hover:bg-[#d6d98b] active:bg-[#d6d98b] transition-all duration-300 shadow-lg md:hover:scale-110 active:scale-95 min-w-[44px] min-h-[44px]",
                                    "aria-label": "Next testimonial",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/TenthRockHome.tsx",
                                        lineNumber: 787,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                    lineNumber: 782,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/TenthRockHome.tsx",
                            lineNumber: 774,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/TenthRockHome.tsx",
                    lineNumber: 731,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/home/TenthRockHome.tsx",
                lineNumber: 730,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/TenthRockHome.tsx",
        lineNumber: 720,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s3(Testimonials, "tusBbsahUVevXfyh6oH5R6YDC9Q=");
_c9 = Testimonials;
// FAQ (FAQ 1)
const Faq = ()=>{
    _s4();
    const [openItem, setOpenItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("item-0");
    const faqs = [
        {
            question: "How Quickly Can You Arrange a Pickup?",
            answer: "We specialize in rapid response. For emergency requests, we can often be on-site within hours. For standard scheduled services, we can typically start within 24-48 hours of account setup."
        },
        {
            question: "Do You Service Multiple Locations Nationwide?",
            answer: "Yes, we operate in all 50 states. Our centralized management platform allows you to handle waste services for hundreds of locations through a single point of contact and one consolidated invoice."
        },
        {
            question: "What Types of Waste Do You Handle?",
            answer: "We handle almost all non-hazardous commercial waste streams including general trash, recycling (cardboard, plastic, metal), construction debris, organic waste, and e-waste. We also coordinate specialized hazmat disposal upon request."
        },
        {
            question: "Are There Long-Term Contracts?",
            answer: "We believe in earning your business every day. While we offer contract savings, many of our services are available with flexible terms. We want you to stay because you're happy, not because you're locked in."
        },
        {
            question: "How Do You Help With Sustainability Goals?",
            answer: "We provide detailed diversion reporting and waste audits to identify recycling opportunities. Our goal is to minimize your landfill footprint and maximize potential rebates for recyclable materials."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "faq",
        "aria-labelledby": "faq-heading",
        className: "py-16 md:py-24 bg-[#F9F9F6] relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2"
            }, void 0, false, {
                fileName: "[project]/components/home/TenthRockHome.tsx",
                lineNumber: 826,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 md:px-8 max-w-4xl relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-left sm:text-center mb-16 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/10 text-primary font-bold text-sm shadow-sm mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 rounded-full bg-secondary"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/TenthRockHome.tsx",
                                        lineNumber: 831,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Common Questions"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/TenthRockHome.tsx",
                                lineNumber: 830,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "faq-heading",
                                className: "text-4xl md:text-5xl font-medium text-primary tracking-tighter",
                                children: "Frequently Asked Questions"
                            }, void 0, false, {
                                fileName: "[project]/components/home/TenthRockHome.tsx",
                                lineNumber: 834,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-primary/60 max-w-2xl mx-auto",
                                children: "Everything you need to know about our services, coverage, and process. Can't find the answer you're looking for? Reach out to our team."
                            }, void 0, false, {
                                fileName: "[project]/components/home/TenthRockHome.tsx",
                                lineNumber: 835,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/TenthRockHome.tsx",
                        lineNumber: 829,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4",
                        children: faqs.map((faq, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.4,
                                    delay: i * 0.1
                                },
                                viewport: {
                                    once: true
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `group rounded-[5px] border transition-all duration-300 overflow-hidden ${openItem === `item-${i}` ? "bg-[#042940] border-[#042940] shadow-xl transform scale-[1.02]" : "bg-white border-transparent hover:border-primary/10 shadow-sm hover:shadow-md"}`,
                                    onClick: ()=>setOpenItem(openItem === `item-${i}` ? "" : `item-${i}`),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-full flex items-center justify-between p-6 md:p-8 text-left outline-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-xl font-bold transition-colors duration-300 ${openItem === `item-${i}` ? "text-white" : "text-primary"}`,
                                                    children: faq.question
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                                    lineNumber: 858,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openItem === `item-${i}` ? "bg-[#c5d520] rotate-180" : "bg-primary/5 group-hover:bg-primary/10"}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: `w-5 h-5 transition-colors duration-300 ${openItem === `item-${i}` ? "text-[#042940]" : "text-primary"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/home/TenthRockHome.tsx",
                                                        lineNumber: 868,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                                    lineNumber: 863,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/home/TenthRockHome.tsx",
                                            lineNumber: 857,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `transition-all duration-300 ease-in-out overflow-hidden ${openItem === `item-${i}` ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-6 md:px-8 pb-8 pt-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/80 text-lg leading-relaxed border-t border-white/10 pt-6",
                                                    children: faq.answer
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                                    lineNumber: 879,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/TenthRockHome.tsx",
                                                lineNumber: 878,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/TenthRockHome.tsx",
                                            lineNumber: 873,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                    lineNumber: 849,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, i, false, {
                                fileName: "[project]/components/home/TenthRockHome.tsx",
                                lineNumber: 842,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/components/home/TenthRockHome.tsx",
                        lineNumber: 840,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-16 text-left sm:text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-primary/60 mb-4 font-medium",
                                children: "Still Have Questions?"
                            }, void 0, false, {
                                fileName: "[project]/components/home/TenthRockHome.tsx",
                                lineNumber: 890,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "lg",
                                className: "w-full sm:w-auto shadow-lg min-h-[52px] whitespace-nowrap",
                                children: "Contact Us"
                            }, void 0, false, {
                                fileName: "[project]/components/home/TenthRockHome.tsx",
                                lineNumber: 891,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/TenthRockHome.tsx",
                        lineNumber: 889,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/TenthRockHome.tsx",
                lineNumber: 828,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/TenthRockHome.tsx",
        lineNumber: 824,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s4(Faq, "mraMue63cub4d8LkxgA+QZUq1rs=");
_c10 = Faq;
// One Location 2 - Matching Services Page Design
const Location = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 md:py-24 bg-white",
        "aria-labelledby": "location-heading",
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
                        duration: 0.5
                    },
                    className: "text-center mb-8 sm:mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "location-heading",
                            className: "text-4xl md:text-5xl font-medium text-[#042940] leading-tight tracking-tighter mb-4",
                            children: "Where to Find Us"
                        }, void 0, false, {
                            fileName: "[project]/components/home/TenthRockHome.tsx",
                            lineNumber: 912,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 text-base sm:text-lg max-w-2xl mx-auto",
                            children: "Serving businesses nationwide with regional offices for local support."
                        }, void 0, false, {
                            fileName: "[project]/components/home/TenthRockHome.tsx",
                            lineNumber: 915,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/TenthRockHome.tsx",
                    lineNumber: 905,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-3 gap-8 lg:gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                x: -20
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.5
                            },
                            className: "space-y-6 lg:space-y-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    className: "h-6 w-6 text-[#c5d520]"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                                    lineNumber: 930,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg sm:text-xl font-semibold text-[#042940]",
                                                    children: "Office"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                                    lineNumber: 931,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/home/TenthRockHome.tsx",
                                            lineNumber: 929,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 ml-9",
                                            children: "123 Sample St, Sydney NSW 2000 AU"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/TenthRockHome.tsx",
                                            lineNumber: 933,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                    lineNumber: 928,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    className: "h-6 w-6 text-[#c5d520]"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                                    lineNumber: 938,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg sm:text-xl font-semibold text-[#042940]",
                                                    children: "Phone"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                                    lineNumber: 939,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/home/TenthRockHome.tsx",
                                            lineNumber: 937,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 ml-9",
                                            children: "Available 24/7 for emergencies"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/TenthRockHome.tsx",
                                            lineNumber: 941,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#042940] font-semibold ml-9",
                                            children: "+1 (555) 000-0000"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/TenthRockHome.tsx",
                                            lineNumber: 942,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                    lineNumber: 936,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    className: "h-6 w-6 text-[#c5d520]"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                                    lineNumber: 947,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg sm:text-xl font-semibold text-[#042940]",
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                                    lineNumber: 948,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/home/TenthRockHome.tsx",
                                            lineNumber: 946,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 ml-9",
                                            children: "hello@tenthrock.com"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/TenthRockHome.tsx",
                                            lineNumber: 950,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                    lineNumber: 945,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/TenthRockHome.tsx",
                            lineNumber: 921,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0.95
                            },
                            whileInView: {
                                opacity: 1,
                                scale: 1
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.5
                            },
                            className: "lg:col-span-2 relative aspect-video rounded-[5px] overflow-hidden bg-gray-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                autoPlay: true,
                                loop: true,
                                muted: true,
                                playsInline: true,
                                className: "absolute inset-0 w-full h-full object-cover",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                    src: "/assets_export/videos/us-map-pins-loop.mp4",
                                    type: "video/mp4"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/TenthRockHome.tsx",
                                    lineNumber: 968,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/home/TenthRockHome.tsx",
                                lineNumber: 961,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/home/TenthRockHome.tsx",
                            lineNumber: 954,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/TenthRockHome.tsx",
                    lineNumber: 920,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/TenthRockHome.tsx",
            lineNumber: 904,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/home/TenthRockHome.tsx",
        lineNumber: 903,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c11 = Location;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#F9F9F6] font-sans text-primary selection:bg-secondary selection:text-primary",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#main-content",
                className: "skip-link",
                "data-testid": "skip-link",
                children: "Skip to main content"
            }, void 0, false, {
                fileName: "[project]/components/home/TenthRockHome.tsx",
                lineNumber: 981,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/home/TenthRockHome.tsx",
                lineNumber: 984,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Hero, {}, void 0, false, {
                fileName: "[project]/components/home/TenthRockHome.tsx",
                lineNumber: 985,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                id: "main-content",
                role: "main",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoList, {}, void 0, false, {
                        fileName: "[project]/components/home/TenthRockHome.tsx",
                        lineNumber: 987,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$CommercialWasteServices$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/home/TenthRockHome.tsx",
                        lineNumber: 988,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$WhoWeHelpSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/home/TenthRockHome.tsx",
                        lineNumber: 989,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$CtaBannerSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/home/TenthRockHome.tsx",
                        lineNumber: 990,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ProcessSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/home/TenthRockHome.tsx",
                        lineNumber: 991,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$CaseStudySection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/home/TenthRockHome.tsx",
                        lineNumber: 992,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ReasonsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/home/TenthRockHome.tsx",
                        lineNumber: 993,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$StatsSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/home/TenthRockHome.tsx",
                        lineNumber: 994,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Testimonials, {}, void 0, false, {
                        fileName: "[project]/components/home/TenthRockHome.tsx",
                        lineNumber: 995,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$FaqSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/home/TenthRockHome.tsx",
                        lineNumber: 996,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$LocationSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/home/TenthRockHome.tsx",
                        lineNumber: 997,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$FinalCtaSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/home/TenthRockHome.tsx",
                        lineNumber: 998,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/TenthRockHome.tsx",
                lineNumber: 986,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/home/TenthRockHome.tsx",
                lineNumber: 1000,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/TenthRockHome.tsx",
        lineNumber: 979,
        columnNumber: 5
    }, this);
} //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiaG9tZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFxcXCJyZWFjdFxcXCI7XFxuaW1wb3J0IHsgTGluayB9IGZyb20gXFxcIndvdXRlclxcXCI7XFxuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UsIHVzZUluVmlldywgdXNlTW90aW9uVmFsdWUsIHVzZVRyYW5zZm9ybSwgYW5pbWF0ZSB9IGZyb20gXFxcImZyYW1lci1tb3Rpb25cXFwiO1xcbmltcG9ydCB7IFxcbiAgQXJyb3dSaWdodCwgXFxuICBQaG9uZSwgXFxuICBDaGVja0NpcmNsZTIsIFxcbiAgVHJ1Y2ssIFxcbiAgQ2xvY2ssIFxcbiAgU2hpZWxkQ2hlY2ssIFxcbiAgTWFwUGluLCBcXG4gIE1lbnUsIFxcbiAgWCxcXG4gIENoZXZyb25SaWdodCxcXG4gIENsaXBib2FyZENoZWNrLFxcbiAgSGVhZHNldCxcXG4gIEJ1aWxkaW5nMixcXG4gIEZhY3RvcnksXFxuICBTdG9yZSxcXG4gIEhhcmRIYXQsXFxuICBTdGFyLFxcbiAgQ2hldnJvbkRvd24sXFxuICBNYWlsLFxcbiAgSW5zdGFncmFtLFxcbiAgVHdpdHRlcixcXG4gIEZhY2Vib29rLFxcbiAgTGlua2VkaW4sXFxuICBBcnJvd1VwUmlnaHQsXFxuICBQbGF5LFxcbiAgR3JhZHVhdGlvbkNhcCxcXG4gIFRyb3BoeSxcXG4gIEhlYXJ0LFxcbiAgTGFuZG1hcmssXFxuICBVdGVuc2lscyxcXG4gIFNpcmVuLFxcbiAgSG9tZSBhcyBIb21lSWNvbixcXG4gIFVzZXJcXG59IGZyb20gXFxcImx1Y2lkZS1yZWFjdFxcXCI7XFxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblxcXCI7XFxuaW1wb3J0IHtcXG4gIEFjY29yZGlvbixcXG4gIEFjY29yZGlvbkNvbnRlbnQsXFxuICBBY2NvcmRpb25JdGVtLFxcbiAgQWNjb3JkaW9uVHJpZ2dlcixcXG59IGZyb20gXFxcIkAvY29tcG9uZW50cy91aS9hY2NvcmRpb25cXFwiO1xcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcXFwiQC9jb21wb25lbnRzL3VpL2lucHV0XFxcIjtcXG5pbXBvcnQgeyBTZXBhcmF0b3IgfSBmcm9tIFxcXCJAL2NvbXBvbmVudHMvdWkvc2VwYXJhdG9yXFxcIjtcXG5cXG4vLyBBc3NldHNcXG5pbXBvcnQgbG9nb01haW4gZnJvbSBcXFwiQGFzc2V0cy9UZW50aFJvY2stTG9nb18xXzE3Njg0OTA5NjU5MjIucG5nXFxcIjtcXG5pbXBvcnQgbG9nb1doaXRlIGZyb20gXFxcIkBhc3NldHMvR3JlZW4tV2hpdGUtTG9nb18xXzE3Njg0OTA5NjU5MjMucG5nXFxcIjtcXG5pbXBvcnQgaW1nQ2l0eUJ1aWxkaW5ncyBmcm9tIFxcXCJAYXNzZXRzL21vZGVybi1idWlsZGluZ3NfMTc2ODUwMTkzNjcxNS5qcGdcXFwiO1xcbmltcG9ydCBpbWdVc01hcCBmcm9tIFxcXCJAL2Fzc2V0cy9nZW5lcmF0ZWRfaW1hZ2VzL3VzX21hcF92ZWN0b3IucG5nXFxcIjtcXG5pbXBvcnQgaW1nUGFya1dhdGVyIGZyb20gXFxcIkBhc3NldHMvZmxvb3ItcGFya18xNzY4NTAxOTM2NzE1LmpwZ1xcXCI7XFxuaW1wb3J0IGltZ1NlcnZpY2VFbWVyZ2VuY3lPdmVyZmxvdyBmcm9tIFxcXCJAL2Fzc2V0cy9zdG9ja19pbWFnZXMvc2VydmljZS1lbWVyZ2VuY3ktb3ZlcmZsb3cuanBnXFxcIjtcXG5pbXBvcnQgaW1nSW5kdXN0cnlTdGFkaXVtc0V2ZW50cyBmcm9tIFxcXCJAL2Fzc2V0cy9zdG9ja19pbWFnZXMvaW5kdXN0cnktc3RhZGl1bXMtZXZlbnRzLmpwZ1xcXCI7XFxuaW1wb3J0IGltZ0N5Y2xpc3QgZnJvbSBcXFwiQGFzc2V0cy9wZXJzb24tdXNpbmctemVyby1lbWlzc2lvbnMtbWVhbi10cmFuc3BvcnRhdGlvbi1nby1hcm91bmQtY2l0eV8xNzY4NTAxOTM2NzE1LmpwZ1xcXCI7XFxuaW1wb3J0IGltZ1BhcmtQYXRoIGZyb20gXFxcIkBhc3NldHMvZW1wdHktcm9hZC1hbWlkc3QtdHJlZXMtcGFya18xNzY4NTAxOTM2NzE1LmpwZ1xcXCI7XFxuaW1wb3J0IGltZ1RydWNrIGZyb20gXFxcIkAvYXNzZXRzL3N0b2NrX2ltYWdlcy93aGl0ZV90cnVja19zaWRlX3ZpZXcuanBnXFxcIjtcXG5pbXBvcnQgaW1nU2VydmljZU1haW50ZW5hbmNlIGZyb20gXFxcIkAvYXNzZXRzL3N0b2NrX2ltYWdlcy9zZXJ2aWNlLW1haW50ZW5hbmNlLmpwZ1xcXCI7XFxuaW1wb3J0IGltZ1Jvb2Z0b3AgZnJvbSBcXFwiQGFzc2V0cy9iZWF1dGlmdWwtY2l0eS12aWV3XzE3Njg1MDE5MzY3MTUuanBnXFxcIjtcXG5pbXBvcnQgaW1nSW5kdXN0cnlIb3NwaXRhbGl0eSBmcm9tIFxcXCJAL2Fzc2V0cy9zdG9ja19pbWFnZXMvaW5kdXN0cnktaG9zcGl0YWxpdHkuanBnXFxcIjtcXG5pbXBvcnQgaW1nU2VydmljZVN0b3JlRGVjb21taXNzaW9uaW5nIGZyb20gXFxcIkAvYXNzZXRzL3N0b2NrX2ltYWdlcy9zZXJ2aWNlLXN0b3JlLWRlY29tbWlzc2lvbmluZy5qcGdcXFwiO1xcbmltcG9ydCBpbWdCaWtlUGF0aCBmcm9tIFxcXCJAYXNzZXRzL3VyYmFuLWN5Y2xpbmctcGFyYWRpc2VfMTc2ODUwMTkzNjcxNS5qcGdcXFwiO1xcbmltcG9ydCBpbWdDbGVhbkNpdHkgZnJvbSBcXFwiQC9hc3NldHMvc3RvY2tfaW1hZ2VzL2NsZWFuX2NpdHlfc3RyZWV0LmpwZ1xcXCI7XFxuaW1wb3J0IGltZ1NlcnZpY2VDZW50cmFsaXplZFByb2dyYW0gZnJvbSBcXFwiQC9hc3NldHMvc3RvY2tfaW1hZ2VzL3NlcnZpY2UtY2VudHJhbGl6ZWQtcHJvZ3JhbS5qcGdcXFwiO1xcbmltcG9ydCBpbWdJbmR1c3RyeVJlYWxFc3RhdGUgZnJvbSBcXFwiQC9hc3NldHMvc3RvY2tfaW1hZ2VzL2luZHVzdHJ5LXJlYWwtZXN0YXRlLmpwZ1xcXCI7XFxuaW1wb3J0IGltZ0luZHVzdHJ5TmF0dXJhbERpc2FzdGVycyBmcm9tIFxcXCJAL2Fzc2V0cy9zdG9ja19pbWFnZXMvaW5kdXN0cnktbmF0dXJhbC1kaXNhc3RlcnMuanBnXFxcIjtcXG5pbXBvcnQgaW1nV2FzdGVSZW1vdmFsIGZyb20gXFxcIkBhc3NldHMvcGVvcGxlLWRvaW5nLWNvbW11bml0eS1zZXJ2aWNlLWJ5LWNvbGxlY3RpbmctdHJhc2gtb3V0ZG9vcnNfMTc2ODUwMjExMzE5My5qcGdcXFwiO1xcbmltcG9ydCBpbWdEdW1wc3RlclJlbnRhbCBmcm9tIFxcXCJAYXNzZXRzL21vZGVybi1nYXJiYWdlLWJpbnMtb3V0ZG9vcnNfMTc2ODUwMjE2NzgzOS5qcGdcXFwiO1xcbmltcG9ydCBpbWdTZXJ2aWNlRHVtcHN0ZXJSZW50YWwgZnJvbSBcXFwiQC9hc3NldHMvc3RvY2tfaW1hZ2VzL3NlcnZpY2UtZHVtcHN0ZXItcmVudGFsLmpwZ1xcXCI7XFxuaW1wb3J0IGltZ1JlY3ljbGluZyBmcm9tIFxcXCJAYXNzZXRzL21lZGl1bS1zaG90LW1hbi1raWQtcmVjeWNsaW5nXzE3Njg1MDIzNzI3OTQuanBnXFxcIjtcXG5pbXBvcnQgaW1nRWR1Y2F0aW9uYWwgZnJvbSBcXFwiQGFzc2V0cy9oYXJ2YXJkLXVuaXZlcnNpdHktY2FtYnJpZGdlLXVzYV8xNzY4NTAyNDE0MzI1LmpwZ1xcXCI7XFxuaW1wb3J0IGltZ0ZhaXRoIGZyb20gXFxcIkBhc3NldHMvcGFub3JhbWljLXZpZXctY2h1cmNoLWJ1aWxkaW5nXzE3Njg1MDI0NzAwMDEuanBnXFxcIjtcXG5pbXBvcnQgaW1nUmV0YWlsIGZyb20gXFxcIkBhc3NldHMvaW5kb29yLWhvdGVsLXZpZXdfMTc2ODUwMjUxMjY2NS5qcGdcXFwiO1xcbmltcG9ydCBpbWdNYXAgZnJvbSBcXFwiQGFzc2V0cy9nZW5lcmF0ZWRfaW1hZ2VzLzNkX2lzb21ldHJpY191c2FfbWFwX2RhcmtfYmx1ZV9saW1lX2dyZWVuLnBuZ1xcXCI7XFxuaW1wb3J0IGltZ01hcExpbmUgZnJvbSBcXFwiQGFzc2V0cy9nZW5lcmF0ZWRfaW1hZ2VzL2xpbmVfYXJ0X3VzX21hcF9pbGx1c3RyYXRpb24ucG5nXFxcIjtcXG5pbXBvcnQgaGVyb1ZpZGVvIGZyb20gXFxcIkAvYXNzZXRzL3ZpZGVvcy9oZXJvLWJhY2tncm91bmQubXA0XFxcIjtcXG5pbXBvcnQgbWFwVmlkZW8gZnJvbSBcXFwiQC9hc3NldHMvdmlkZW9zL3VzLW1hcC1waW5zLWxvb3AubXA0XFxcIjtcXG5cXG5pbXBvcnQgaW1nU3RhZGl1bSBmcm9tIFxcXCJAYXNzZXRzL3N0b2NrX2ltYWdlcy9hZXJpYWxfdmlld19vZl9hX2xhcl85YjViM2EwNS5qcGdcXFwiO1xcbmltcG9ydCBpbWdTZXJ2aWNlRXZlbnRTdGFkaXVtIGZyb20gXFxcIkAvYXNzZXRzL3N0b2NrX2ltYWdlcy9zZXJ2aWNlLWV2ZW50LXN0YWRpdW0uanBnXFxcIjtcXG5pbXBvcnQgaW1nQ2FzZVN0dWR5TWFpbiBmcm9tIFxcXCJAL2Fzc2V0cy9zdG9ja19pbWFnZXMvY2FzZV9zdHVkeV9tYWluLmpwZ1xcXCI7XFxuaW1wb3J0IGltZ0Nhc2VTdHVkeVRodW1iMSBmcm9tIFxcXCJAL2Fzc2V0cy9zdG9ja19pbWFnZXMvY2FzZV9zdHVkeV90aHVtYjEuanBnXFxcIjtcXG5pbXBvcnQgaW1nQ2FzZVN0dWR5VGh1bWIyIGZyb20gXFxcIkAvYXNzZXRzL3N0b2NrX2ltYWdlcy9jYXNlX3N0dWR5X3RodW1iMi5qcGdcXFwiO1xcbmltcG9ydCBpbWdDYXNlU3R1ZHlUaHVtYjMgZnJvbSBcXFwiQC9hc3NldHMvc3RvY2tfaW1hZ2VzL2Nhc2Vfc3R1ZHlfdGh1bWIzLmpwZ1xcXCI7XFxuXFxuLy8gUGFydG5lciBMb2dvc1xcbmltcG9ydCBsb2dvN0VsZXZlbiBmcm9tIFxcXCJAYXNzZXRzLzctRWxldmVuX0xvZ29fMF8xXzE3NjkwODY5ODA4ODEucG5nXFxcIjtcXG5pbXBvcnQgbG9nb0FyYnlzIGZyb20gXFxcIkBhc3NldHMvQXJieSdzX0xvZ29fMF8xXzE3NjkwODY5ODA4NzcucG5nXFxcIjtcXG5pbXBvcnQgbG9nb0Jlc3RCdXkgZnJvbSBcXFwiQGFzc2V0cy9CZXN0X0J1eV9pZGtIcWtVTGtvXzBfMV8xNzY5MDg2OTgwODc5LnBuZ1xcXCI7XFxuaW1wb3J0IGxvZ29Cb25lZmlzaCBmcm9tIFxcXCJAYXNzZXRzL0JvbmVmaXNoX0dyaWxsX2lkQl9VaENBZHpfMF8xXzE3NjkwODY5ODA4NzkucG5nXFxcIjtcXG5pbXBvcnQgbG9nb0JwIGZyb20gXFxcIkBhc3NldHMvQnBfTG9nb18wXzFfMTc2OTA4Njk4MDg4Mi5wbmdcXFwiO1xcbmltcG9ydCBsb2dvQ2hpcG90bGUgZnJvbSBcXFwiQGFzc2V0cy9DaGlwb3RsZV9Mb2dvXzBfMV8xNzY5MDg2OTgwODc5LnBuZ1xcXCI7XFxuaW1wb3J0IGxvZ29DaXJjbGVLIGZyb20gXFxcIkBhc3NldHMvQ2lyY2xlX0tfaWRwZ0gyYWxyN18wXzFfMTc2OTA4Njk4MDg4MS5wbmdcXFwiO1xcbmltcG9ydCBsb2dvRG9sbGFyR2VuZXJhbCBmcm9tIFxcXCJAYXNzZXRzL0RvbGxhcl9HZW5lcmFsX0xvZ29fMF8xXzE3NjkwODY5ODA4ODEucG5nXFxcIjtcXG5pbXBvcnQgbG9nb0Rvb3JEYXNoIGZyb20gXFxcIkBhc3NldHMvRG9vckRhc2hfaWRaQ2JjeGhjY18xXzFfMTc2OTA4Njk4MDg4MS5wbmdcXFwiO1xcbmltcG9ydCBsb2dvRHVua2luIGZyb20gXFxcIkBhc3NldHMvRHVua2luX2lkbGtrMzRRN25fMF8xXzE3NjkwODY5ODA4ODAucG5nXFxcIjtcXG5pbXBvcnQgbG9nb0ZpdmVCZWxvdyBmcm9tIFxcXCJAYXNzZXRzL0ZpdmVfQmVsb3dfTG9nb18wXzFfMTc2OTA4Njk4MDg4MC5wbmdcXFwiO1xcbmltcG9ydCBsb2dvRm9vZExpb24gZnJvbSBcXFwiQGFzc2V0cy9Gb29kX0xpb25faWRhcUpxVUpBQ18wXzFfMTc2OTA4Njk4MDg4MC5wbmdcXFwiO1xcbmltcG9ydCBsb2dvR05DIGZyb20gXFxcIkBhc3NldHMvR05DX2lkSDlPVzFWTU5fMF8xXzE3NjkwODY5ODA4ODEucG5nXFxcIjtcXG5pbXBvcnQgbG9nb0dvb2R5ZWFyIGZyb20gXFxcIkBhc3NldHMvR29vZHllYXJfVGlyZXNfTG9nb18wXzFfMTc2OTA4Njk4MDg4MS5wbmdcXFwiO1xcbmltcG9ydCBsb2dvSEVCIGZyb20gXFxcIkBhc3NldHMvSC1FLUJfaWRSTXJLSTh4TF8wXzFfMTc2OTA4Njk4MDg4MC5wbmdcXFwiO1xcbmltcG9ydCBsb2dvS0ZDIGZyb20gXFxcIkBhc3NldHMvS0ZDX2lkak95R3FtdWtfMF8xXzE3NjkwODY5ODA4ODIucG5nXFxcIjtcXG5pbXBvcnQgbG9nb0tyb2dlciBmcm9tIFxcXCJAYXNzZXRzL0tyb2dlcl9Mb2dvX0FsdGVybmF0aXZlXzBfMV8xNzY5MDg2OTgwODgxLnBuZ1xcXCI7XFxuaW1wb3J0IGxvZ29NYWdnaWFub3MgZnJvbSBcXFwiQGFzc2V0cy9NYWdnaWFubydzX0xpdHRsZV9JdGFseV9pZFdyc0JUNEFuXzBfMV8xNzY5MDg2OTgwODgxLnBuZ1xcXCI7XFxuaW1wb3J0IGxvZ29NY0RvbmFsZHMgZnJvbSBcXFwiQGFzc2V0cy9NY0RvbmFsZCdzX1N5bWJvbF8wXzFfMTc2OTA4Njk4MDg4MS5wbmdcXFwiO1xcbmltcG9ydCBsb2dvUmVkTG9ic3RlciBmcm9tIFxcXCJAYXNzZXRzL2lkbWw0LTFtOWdfbG9nb3NfMV8xNzY5MDg2OTgwODgwLnBuZ1xcXCI7XFxuXFxuLy8gTG9nbyBDb21wb25lbnRcXG5jb25zdCBMb2dvID0gKHsgY2xhc3NOYW1lID0gXFxcIlxcXCIsIHZhcmlhbnQgPSBcXFwibWFpblxcXCIgfTogeyBjbGFzc05hbWU/OiBzdHJpbmcsIHZhcmlhbnQ/OiBcXFwibWFpblxcXCIgfCBcXFwid2hpdGVcXFwiIH0pID0+IHtcXG4gIGNvbnN0IGxvZ29TcmMgPSB2YXJpYW50ID09PSBcXFwibWFpblxcXCIgPyBsb2dvTWFpbiA6IGxvZ29XaGl0ZTtcXG4gIFxcbiAgcmV0dXJuIChcXG4gICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiAke2NsYXNzTmFtZX1gfT5cXG4gICAgICA8aW1nIFxcbiAgICAgICAgc3JjPXtsb2dvU3JjfSBcXG4gICAgICAgIGFsdD1cXFwiVGVudGggUm9jayBXYXN0ZSBTb2x1dGlvbnNcXFwiIFxcbiAgICAgICAgY2xhc3NOYW1lPVxcXCJoLTggbWQ6aC0xMCB3LWF1dG8gb2JqZWN0LWNvbnRhaW5cXFwiIFxcbiAgICAgIC8+XFxuICAgIDwvZGl2PlxcbiAgKTtcXG59O1xcblxcbi8vIE5hdmlnYXRpb25cXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XFxuICBjb25zdCBbaXNTY3JvbGxlZCwgc2V0SXNTY3JvbGxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XFxuICBjb25zdCBbaXNNb2JpbGVNZW51T3Blbiwgc2V0SXNNb2JpbGVNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XFxuICBjb25zdCBbaXNTZXJ2aWNlc09wZW4sIHNldElzU2VydmljZXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcXG5cXG4gIHVzZUVmZmVjdCgoKSA9PiB7XFxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHNldElzU2Nyb2xsZWQod2luZG93LnNjcm9sbFkgPiAyMCk7XFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxcXCJzY3JvbGxcXFwiLCBoYW5kbGVTY3JvbGwpO1xcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXFxcInNjcm9sbFxcXCIsIGhhbmRsZVNjcm9sbCk7XFxuICB9LCBbXSk7XFxuXFxuICByZXR1cm4gKFxcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cXFwiZml4ZWQgdG9wLTYgbGVmdC0wIHJpZ2h0LTAgei01MCBweC00IG1kOnB4LThcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJjb250YWluZXIgbXgtYXV0byBtYXgtdy1bOTJyZW1dIGJnLXdoaXRlIHJvdW5kZWQtWzVweF0gc2hhZG93LWxnIHB4LTYgcHktMyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcmVsYXRpdmVcXFwiPlxcbiAgICAgICAgPExpbmsgaHJlZj1cXFwiL1xcXCIgY2xhc3NOYW1lPVxcXCJob3ZlcjpvcGFjaXR5LTkwIHRyYW5zaXRpb24tb3BhY2l0eVxcXCI+XFxuICAgICAgICAgIDxMb2dvIHZhcmlhbnQ9XFxcIm1haW5cXFwiIC8+XFxuICAgICAgICA8L0xpbms+XFxuXFxuICAgICAgICB7LyogRGVza3RvcCBOYXYgLSBDZW50cmFsaXplZCAqL31cXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVxcXCJoaWRkZW4gbGc6ZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTYgYWJzb2x1dGUgbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgd2hpdGVzcGFjZS1ub3dyYXBcXFwiPlxcbiAgICAgICAgICA8ZGl2XFxuICAgICAgICAgICAgY2xhc3NOYW1lPVxcXCJyZWxhdGl2ZVxcXCJcXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldElzU2VydmljZXNPcGVuKHRydWUpfVxcbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SXNTZXJ2aWNlc09wZW4oZmFsc2UpfVxcbiAgICAgICAgICA+XFxuICAgICAgICAgICAgPGJ1dHRvblxcbiAgICAgICAgICAgICAgdHlwZT1cXFwiYnV0dG9uXFxcIlxcbiAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XFxcImJ1dHRvbi1uYXYtc2VydmljZXNcXFwiXFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XFxcImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LVsxM3B4XSB4bDp0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXByaW1hcnkgaG92ZXI6dGV4dC1bI2M1ZDUyMF0gdHJhbnNpdGlvbi1jb2xvcnMgdHJhY2tpbmctbm9ybWFsXFxcIlxcbiAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cXFwibWVudVxcXCJcXG4gICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e2lzU2VydmljZXNPcGVufVxcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNTZXJ2aWNlc09wZW4oKHYpID0+ICF2KX1cXG4gICAgICAgICAgICA+XFxuICAgICAgICAgICAgICA8c3Bhbj5Db21tZXJjaWFsIFdhc3RlIFNlcnZpY2VzPC9zcGFuPlxcbiAgICAgICAgICAgICAgPENoZXZyb25Eb3duIGNsYXNzTmFtZT17YHctNCBoLTQgdHJhbnNpdGlvbi10cmFuc2Zvcm0gJHtpc1NlcnZpY2VzT3BlbiA/IFxcXCJyb3RhdGUtMTgwXFxcIiA6IFxcXCJcXFwifWB9IC8+XFxuICAgICAgICAgICAgPC9idXR0b24+XFxuXFxuICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cXG4gICAgICAgICAgICAgIHtpc1NlcnZpY2VzT3BlbiAmJiAoXFxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XFxuICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiA4LCBzY2FsZTogMC45OCB9fVxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCwgc2NhbGU6IDEgfX1cXG4gICAgICAgICAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAsIHk6IDgsIHNjYWxlOiAwLjk4IH19XFxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4xNiwgZWFzZTogXFxcImVhc2VPdXRcXFwiIH19XFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVxcXCJhYnNvbHV0ZSBsZWZ0LTEvMiAtdHJhbnNsYXRlLXgtMS8yIHRvcC1bY2FsYygxMDAlKzE0cHgpXSB3LVs0MjBweF0gcm91bmRlZC1bNXB4XSBiZy13aGl0ZSBzaGFkb3ctMnhsIGJvcmRlciBib3JkZXItcHJpbWFyeS8xMCBvdmVyZmxvdy1oaWRkZW5cXFwiXFxuICAgICAgICAgICAgICAgICAgcm9sZT1cXFwibWVudVxcXCJcXG4gICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cXFwibWVudS1uYXYtc2VydmljZXNcXFwiXFxuICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwicC0zXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJ0ZXh0LVsxMXB4XSBmb250LWV4dHJhYm9sZCB0cmFja2luZy1bMC4xOGVtXSB1cHBlcmNhc2UgdGV4dC1wcmltYXJ5LzUwIHB4LTMgcHktMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgIFNlcnZpY2VzXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJncmlkIGdhcC0xXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAge1sgXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcIkVtZXJnZW5jeSAmIE92ZXJmbG93IFdhc3RlIFJlc3BvbnNlXFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwiU3RvcmUgRGVjb21taXNzaW9uaW5nICYgUmVtb2RlbCBTdXBwb3J0XFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwiRXZlbnQgJiBTdGFkaXVtIFdhc3RlIExvZ2lzdGljc1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgXFxcIkR1bXBzdGVyIFJlbnRhbCAmIFRlbXBvcmFyeSBDb250YWluZXJzXFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwiQ2VudHJhbGl6ZWQgV2FzdGUgUHJvZ3JhbSBNYW5hZ2VtZW50XFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwiRW52aXJvbm1lbnRhbCAmIENvbXBhY3RvciBNYWludGVuYW5jZSBTZXJ2aWNlc1xcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgIF0ubWFwKChsYWJlbCkgPT4gKFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2xhYmVsfVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cXFwiI3NlcnZpY2VzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9e2BsaW5rLW5hdi1zZXJ2aWNlcy0ke2xhYmVsLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15hLXowLTldKy9nLCBcXFwiLVxcXCIpfWB9XFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XFxcImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiByb3VuZGVkLVs1cHhdIHB4LTMgcHktMiB0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXByaW1hcnkgaG92ZXI6YmctWyNGOUY5RjZdIGhvdmVyOnRleHQtWyMwNDI5NDBdIHRyYW5zaXRpb24tY29sb3JzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNTZXJ2aWNlc09wZW4oZmFsc2UpfVxcbiAgICAgICAgICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cXFwicHItM1xcXCI+e2xhYmVsfTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uUmlnaHQgY2xhc3NOYW1lPVxcXCJ3LTQgaC00IHRleHQtcHJpbWFyeS80MFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICkpfVxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cXG4gICAgICAgICAgICAgICl9XFxuICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XFxuICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICA8YSBocmVmPVxcXCIjZW1lcmdlbmN5XFxcIiBjbGFzc05hbWU9XFxcInRleHQtWzEzcHhdIHhsOnRleHQtc20gZm9udC1ib2xkIHRleHQtcHJpbWFyeSBob3Zlcjp0ZXh0LVsjYzVkNTIwXSB0cmFuc2l0aW9uLWNvbG9ycyB0cmFja2luZy1ub3JtYWxcXFwiPkVtZXJnZW5jeSBXYXN0ZSBSZW1vdmFsPC9hPlxcbiAgICAgICAgICA8YSBocmVmPVxcXCIjc2VjdG9yc1xcXCIgY2xhc3NOYW1lPVxcXCJ0ZXh0LVsxM3B4XSB4bDp0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXByaW1hcnkgaG92ZXI6dGV4dC1bI2M1ZDUyMF0gdHJhbnNpdGlvbi1jb2xvcnMgdHJhY2tpbmctbm9ybWFsXFxcIj5XaG8gV2UgU2VydmU8L2E+XFxuICAgICAgICAgIDxhIGhyZWY9XFxcIiNwcm9jZXNzXFxcIiBjbGFzc05hbWU9XFxcInRleHQtWzEzcHhdIHhsOnRleHQtc20gZm9udC1ib2xkIHRleHQtcHJpbWFyeSBob3Zlcjp0ZXh0LVsjYzVkNTIwXSB0cmFuc2l0aW9uLWNvbG9ycyB0cmFja2luZy1ub3JtYWxcXFwiPk91ciBQcm9jZXNzPC9hPlxcbiAgICAgICAgICA8YSBocmVmPVxcXCIjYWJvdXRcXFwiIGNsYXNzTmFtZT1cXFwidGV4dC1bMTNweF0geGw6dGV4dC1zbSBmb250LWJvbGQgdGV4dC1wcmltYXJ5IGhvdmVyOnRleHQtWyNjNWQ1MjBdIHRyYW5zaXRpb24tY29sb3JzIHRyYWNraW5nLW5vcm1hbFxcXCI+QWJvdXQgVXM8L2E+XFxuICAgICAgICA8L25hdj5cXG5cXG4gICAgICAgIHsvKiBSaWdodCBTaWRlIEFjdGlvbnMgKi99XFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTBcXFwiPlxcbiAgICAgICAgICA8QnV0dG9uIHNpemU9XFxcImxnXFxcIiB2YXJpYW50PVxcXCJnaG9zdFxcXCIgY2xhc3NOYW1lPVxcXCJoaWRkZW4gbGc6ZmxleCB0ZXh0LXByaW1hcnkgZm9udC1leHRyYWJvbGQgaG92ZXI6YmctdHJhbnNwYXJlbnQgaG92ZXI6dGV4dC1bI2M1ZDUyMF0gdHJhbnNpdGlvbi1jb2xvcnMgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1zbSBweC0yXFxcIj5cXG4gICAgICAgICAgICBMb2dpblxcbiAgICAgICAgICA8L0J1dHRvbj5cXG4gICAgICAgICAgPEJ1dHRvbiBzaXplPVxcXCJsZ1xcXCIgY2xhc3NOYW1lPVxcXCJoaWRkZW4gbGc6ZmxleCBiZy1bI2M1ZDUyMF0gaG92ZXI6YmctWyNkNmQ5OGJdIHRleHQtWyMwNDI5NDBdIHNoYWRvdy1sZyBzaGFkb3ctWyNjNWQ1MjBdLzIwXFxcIj5cXG4gICAgICAgICAgICBSZXF1ZXN0IGEgUXVvdGVcXG4gICAgICAgICAgPC9CdXR0b24+XFxuXFxuICAgICAgICAgIHsvKiBNb2JpbGUgTWVudSBUb2dnbGUgKi99XFxuICAgICAgICAgIDxidXR0b24gXFxuICAgICAgICAgICAgY2xhc3NOYW1lPVxcXCJsZzpoaWRkZW4gcC0yIHRleHQtcHJpbWFyeVxcXCJcXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc01vYmlsZU1lbnVPcGVuKCFpc01vYmlsZU1lbnVPcGVuKX1cXG4gICAgICAgICAgPlxcbiAgICAgICAgICAgIHtpc01vYmlsZU1lbnVPcGVuID8gPFggLz4gOiA8TWVudSAvPn1cXG4gICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG5cXG4gICAgICB7LyogTW9iaWxlIE1lbnUgKi99XFxuICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cXG4gICAgICAgIHtpc01vYmlsZU1lbnVPcGVuICYmIChcXG4gICAgICAgICAgPG1vdGlvbi5kaXZcXG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IC0yMCwgc2NhbGU6IDAuOTUgfX1cXG4gICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAsIHNjYWxlOiAxIH19XFxuICAgICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCB5OiAtMjAsIHNjYWxlOiAwLjk1IH19XFxuICAgICAgICAgICAgY2xhc3NOYW1lPVxcXCJsZzpoaWRkZW4gYWJzb2x1dGUgdG9wLTI0IGxlZnQtNCByaWdodC00IGJnLXdoaXRlIHJvdW5kZWQtWzVweF0gc2hhZG93LXhsIHAtNiBib3JkZXIgYm9yZGVyLWdyYXktMTAwXFxcIlxcbiAgICAgICAgICA+XFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImZsZXggZmxleC1jb2wgc3BhY2UteS00IHRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNzZXJ2aWNlc1xcXCIgY2xhc3NOYW1lPVxcXCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LXByaW1hcnlcXFwiIG9uQ2xpY2s9eygpID0+IHNldElzTW9iaWxlTWVudU9wZW4oZmFsc2UpfT5TZXJ2aWNlczwvYT5cXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNzZWN0b3JzXFxcIiBjbGFzc05hbWU9XFxcInRleHQtbGcgZm9udC1ib2xkIHRleHQtcHJpbWFyeVxcXCIgb25DbGljaz17KCkgPT4gc2V0SXNNb2JpbGVNZW51T3BlbihmYWxzZSl9PkluZHVzdHJpZXM8L2E+XFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjYWJvdXRcXFwiIGNsYXNzTmFtZT1cXFwidGV4dC1sZyBmb250LWJvbGQgdGV4dC1wcmltYXJ5XFxcIiBvbkNsaWNrPXsoKSA9PiBzZXRJc01vYmlsZU1lbnVPcGVuKGZhbHNlKX0+V2hvIFdlIEFyZTwvYT5cXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNjb250YWN0XFxcIiBjbGFzc05hbWU9XFxcInRleHQtbGcgZm9udC1ib2xkIHRleHQtcHJpbWFyeVxcXCIgb25DbGljaz17KCkgPT4gc2V0SXNNb2JpbGVNZW51T3BlbihmYWxzZSl9PkNvbnRhY3Q8L2E+XFxuICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XFxcImxnXFxcIiB2YXJpYW50PVxcXCJnaG9zdFxcXCIgY2xhc3NOYW1lPVxcXCJ3LWZ1bGwgdGV4dC1wcmltYXJ5IGZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LXNtXFxcIiBvbkNsaWNrPXsoKSA9PiBzZXRJc01vYmlsZU1lbnVPcGVuKGZhbHNlKX0+XFxuICAgICAgICAgICAgICAgIExvZ2luXFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cXG4gICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cXFwibGdcXFwiIGNsYXNzTmFtZT1cXFwidy1mdWxsIGJnLVsjYzVkNTIwXSB0ZXh0LVsjMDQyOTQwXSBtdC0yXFxcIj5cXG4gICAgICAgICAgICAgICAgUmVxdWVzdCBhIFF1b3RlXFxuICAgICAgICAgICAgICA8L0J1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxcbiAgICAgICAgKX1cXG4gICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cXG4gICAgPC9oZWFkZXI+XFxuICApO1xcbn07XFxuXFxuLy8gSGVybyBTZWN0aW9uXFxuY29uc3QgSGVybyA9ICgpID0+IHtcXG4gIHJldHVybiAoXFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cXFwicmVsYXRpdmUgbWluLWgtc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB0LTMyIHBiLTMyIG92ZXJmbG93LWhpZGRlbiBiZy1bIzA0Mjk0MF1cXFwiPlxcbiAgICAgIHsvKiBCYWNrZ3JvdW5kIFZpZGVvICovfVxcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJhYnNvbHV0ZSBpbnNldC0wIHotMFxcXCI+XFxuICAgICAgICA8dmlkZW8gXFxuICAgICAgICAgIGF1dG9QbGF5IFxcbiAgICAgICAgICBsb29wIFxcbiAgICAgICAgICBtdXRlZCBcXG4gICAgICAgICAgcGxheXNJbmxpbmVcXG4gICAgICAgICAgY2xhc3NOYW1lPVxcXCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciBvcGFjaXR5LTgwXFxcIlxcbiAgICAgICAgPlxcbiAgICAgICAgICA8c291cmNlIHNyYz17aGVyb1ZpZGVvfSB0eXBlPVxcXCJ2aWRlby9tcDRcXFwiIC8+XFxuICAgICAgICA8L3ZpZGVvPlxcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImFic29sdXRlIGluc2V0LTAgYmctWyMwNDI5NDBdLzYwIG1peC1ibGVuZC1tdWx0aXBseVxcXCI+PC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by10IGZyb20tWyMwNDI5NDBdIHZpYS10cmFuc3BhcmVudCB0by1bIzA0Mjk0MF0vMzBcXFwiPjwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImFic29sdXRlIGluc2V0LTAgYmctW3VybCgnaHR0cHM6Ly9ncmFpbnktZ3JhZGllbnRzLnZlcmNlbC5hcHAvbm9pc2Uuc3ZnJyldIG9wYWNpdHktMjAgYnJpZ2h0bmVzcy0xMDAgY29udHJhc3QtMTUwIG1peC1ibGVuZC1vdmVybGF5XFxcIj48L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG5cXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBtZDpweC04IHJlbGF0aXZlIHotMTAgbXQtMTJcXFwiPlxcbiAgICAgICAgPG1vdGlvbi5kaXYgXFxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMzAgfX1cXG4gICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XFxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuOCB9fVxcbiAgICAgICAgICBjbGFzc05hbWU9XFxcIm1heC13LTV4bCBteC1hdXRvIHRleHQtY2VudGVyXFxcIlxcbiAgICAgICAgPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHB4LTQgcHktMiByb3VuZGVkLWZ1bGwgYmctd2hpdGUvNSBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIHRleHQtWyNjNWQ1MjBdIGZvbnQtYm9sZCB0ZXh0LXNtIGJhY2tkcm9wLWJsdXItbWQgc2hhZG93LXNtIG1iLTggYW5pbWF0ZS1mYWRlLWluLXVwXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XFxcInctMiBoLTIgcm91bmRlZC1mdWxsIGJnLVsjYzVkNTIwXSBhbmltYXRlLXB1bHNlXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgTmF0aW9ud2lkZSBDb21tZXJjaWFsIFdhc3RlIFNvbHV0aW9uc1xcbiAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cXFwidGV4dC00eGwgbWQ6dGV4dC02eGwgbGc6dGV4dC03eGwgZm9udC1zYW5zIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgbGVhZGluZy1bMS4wNV0gdHJhY2tpbmctdGlnaHRlciBtYi01IGRyb3Atc2hhZG93LWxnXFxcIiBzdHlsZT17eyB0ZXh0V3JhcDogXFxcImJhbGFuY2VcXFwiIH19PlxcbiAgICAgICAgICAgIEZhc3QsIFJlbGlhYmxlIFdhc3RlIFNvbHV0aW9uc+KAlEFueXdoZXJlIFlvdSBOZWVkIFRoZW1cXG4gICAgICAgICAgPC9oMT5cXG4gICAgICAgICAgXFxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cXFwidGV4dC1bMThweF0gdGV4dC13aGl0ZS85MCBtYi04IGxlYWRpbmctcmVsYXhlZCBtYXgtdy0zeGwgbXgtYXV0byBmb250LW5vcm1hbCB0cmFja2luZy10aWdodCBkcm9wLXNoYWRvdy1tZFxcXCIgc3R5bGU9e3sgdGV4dFdyYXA6IFxcXCJiYWxhbmNlXFxcIiB9fT5cXG4gICAgICAgICAgICBFbWVyZ2VuY3kgcGlja3VwcywgZHVtcHN0ZXIgcmVudGFscywgYW5kIHNpdGUgY2xlYW5vdXRzLiBXZSByZXNwb25kIGluIGhvdXJzIOKAlCBub3QgZGF5cy5cXG4gICAgICAgICAgPC9wPlxcbiAgICAgICAgICBcXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgZ2FwLTYganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICA8QnV0dG9uIHNpemU9XFxcImxnXFxcIiBjbGFzc05hbWU9XFxcImJnLVsjYzVkNTIwXSBob3ZlcjpiZy1bI2Q2ZDk4Yl0gdGV4dC1bIzA0Mjk0MF0gc2hhZG93LVswXzBfNDBweF9yZ2JhKDE5NywyMTMsMzIsMC4zKV0gaG92ZXI6c2hhZG93LVswXzBfNjBweF9yZ2JhKDE5NywyMTMsMzIsMC41KV0gdHJhbnNpdGlvbi1hbGwgdHJhbnNmb3JtIGhvdmVyOi10cmFuc2xhdGUteS0xIGhvdmVyOnNjYWxlLTEwNSBib3JkZXItMiBib3JkZXItWyNjNWQ1MjBdXFxcIj5cXG4gICAgICAgICAgICAgIFJlcXVlc3QgQSBTZXJ2aWNlXFxuICAgICAgICAgICAgPC9CdXR0b24+XFxuICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVxcXCJsZ1xcXCIgdmFyaWFudD1cXFwib3V0bGluZVxcXCIgY2xhc3NOYW1lPVxcXCJiYWNrZHJvcC1ibHVyLW1kIGJnLXdoaXRlLzUgYm9yZGVyLXdoaXRlLzIwIHRleHQtd2hpdGUgaG92ZXI6Ymctd2hpdGUgaG92ZXI6dGV4dC1bIzA0Mjk0MF0gc2hhZG93LWxnIHRyYW5zaXRpb24tYWxsIHRyYW5zZm9ybSBob3ZlcjotdHJhbnNsYXRlLXktMSBob3ZlcjpzY2FsZS0xMDVcXFwiIG9uQ2xpY2s9eygpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9jZXNzJyk/LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pfT5cXG4gICAgICAgICAgICAgIFNlZSBIb3cgSXQgV29ya3NcXG4gICAgICAgICAgICA8L0J1dHRvbj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L21vdGlvbi5kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG4gICk7XFxufTtcXG5cXG4vLyBDb3VudGVyIENvbXBvbmVudFxcbmNvbnN0IENvdW50ZXIgPSAoeyBmcm9tID0gMCwgdG8sIGR1cmF0aW9uID0gMiwgc3VmZml4ID0gXFxcIlxcXCIsIHByZWZpeCA9IFxcXCJcXFwiIH06IHsgZnJvbT86IG51bWJlciwgdG86IG51bWJlciwgZHVyYXRpb24/OiBudW1iZXIsIHN1ZmZpeD86IHN0cmluZywgcHJlZml4Pzogc3RyaW5nIH0pID0+IHtcXG4gIGNvbnN0IG5vZGVSZWYgPSB1c2VSZWYobnVsbCk7XFxuICBjb25zdCBpblZpZXcgPSB1c2VJblZpZXcobm9kZVJlZiwgeyBvbmNlOiB0cnVlLCBtYXJnaW46IFxcXCItMjAlXFxcIiB9KTtcXG4gIGNvbnN0IGNvdW50ID0gdXNlTW90aW9uVmFsdWUoZnJvbSk7XFxuICBjb25zdCByb3VuZGVkID0gdXNlVHJhbnNmb3JtKGNvdW50LCAobGF0ZXN0KSA9PiBNYXRoLnJvdW5kKGxhdGVzdCkpO1xcblxcbiAgdXNlRWZmZWN0KCgpID0+IHtcXG4gICAgaWYgKGluVmlldykge1xcbiAgICAgIGFuaW1hdGUoY291bnQsIHRvLCB7IGR1cmF0aW9uLCBlYXNlOiBcXFwiZWFzZU91dFxcXCIgfSk7XFxuICAgIH1cXG4gIH0sIFtpblZpZXcsIGNvdW50LCB0bywgZHVyYXRpb25dKTtcXG5cXG4gIHJldHVybiAoXFxuICAgIDxzcGFuIHJlZj17bm9kZVJlZn0gY2xhc3NOYW1lPVxcXCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclxcXCI+XFxuICAgICAge3ByZWZpeH1cXG4gICAgICA8bW90aW9uLnNwYW4+e3JvdW5kZWR9PC9tb3Rpb24uc3Bhbj5cXG4gICAgICB7c3VmZml4fVxcbiAgICA8L3NwYW4+XFxuICApO1xcbn07XFxuXFxuLy8gU2ltcGxlIE51bWJlcnMgMlxcbmNvbnN0IFNpbXBsZU51bWJlcnMgPSAoKSA9PiB7XFxuICByZXR1cm4gKFxcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XFxcInB5LTIwIGJnLXdoaXRlIGJvcmRlci1iIGJvcmRlci1wcmltYXJ5LzVcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJjb250YWluZXIgbXgtYXV0byBweC00IG1kOnB4LThcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImdyaWQgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTggZGl2aWRlLXkgbWQ6ZGl2aWRlLXktMCBtZDpkaXZpZGUteCBkaXZpZGUtcHJpbWFyeS8xMCBtYXgtdy01eGwgbXgtYXV0b1xcXCI+XFxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgcHgtOFxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwidGV4dC01eGwgbWQ6dGV4dC02eGwgZm9udC1leHRyYWJvbGQgdGV4dC1wcmltYXJ5IG1iLTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgPENvdW50ZXIgdG89ezQ4fSBkdXJhdGlvbj17Mi41fSAvPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwidGV4dC1sZyB0ZXh0LXByaW1hcnkvNjBcXFwiPlN0YXRlcyBTZXJ2aWNlZDwvZGl2PlxcbiAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgcHgtOFxcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwidGV4dC01eGwgbWQ6dGV4dC02eGwgZm9udC1leHRyYWJvbGQgdGV4dC1wcmltYXJ5IG1iLTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgPENvdW50ZXIgdG89ezV9IHN1ZmZpeD1cXFwiSytcXFwiIGR1cmF0aW9uPXsyLjV9IC8+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJ0ZXh0LWxnIHRleHQtcHJpbWFyeS82MFxcXCI+Sm9icyBDb21wbGV0ZWQ8L2Rpdj5cXG4gICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHRleHQtY2VudGVyIHB4LThcXFwiPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcInRleHQtNXhsIG1kOnRleHQtNnhsIGZvbnQtZXh0cmFib2xkIHRleHQtcHJpbWFyeSBtYi0yIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgIDxDb3VudGVyIHRvPXsyNH0gc3VmZml4PVxcXCIvN1xcXCIgZHVyYXRpb249ezIuNX0gLz5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcInRleHQtbGcgdGV4dC1wcmltYXJ5LzYwXFxcIj5FbWVyZ2VuY3kgU3VwcG9ydDwvZGl2PlxcbiAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcbiAgKTtcXG59O1xcblxcbi8vIExvZ28gUmVlbFxcbmNvbnN0IExvZ29MaXN0ID0gKCkgPT4ge1xcbiAgY29uc3QgbG9nb3MgPSBbXFxuICAgIHsgc3JjOiBsb2dvN0VsZXZlbiwgYWx0OiBcXFwiNy1FbGV2ZW5cXFwiIH0sXFxuICAgIHsgc3JjOiBsb2dvQXJieXMsIGFsdDogXFxcIkFyYnknc1xcXCIgfSxcXG4gICAgeyBzcmM6IGxvZ29CZXN0QnV5LCBhbHQ6IFxcXCJCZXN0IEJ1eVxcXCIgfSxcXG4gICAgeyBzcmM6IGxvZ29Cb25lZmlzaCwgYWx0OiBcXFwiQm9uZWZpc2ggR3JpbGxcXFwiIH0sXFxuICAgIHsgc3JjOiBsb2dvQnAsIGFsdDogXFxcIkJQXFxcIiB9LFxcbiAgICB7IHNyYzogbG9nb0NoaXBvdGxlLCBhbHQ6IFxcXCJDaGlwb3RsZVxcXCIgfSxcXG4gICAgeyBzcmM6IGxvZ29DaXJjbGVLLCBhbHQ6IFxcXCJDaXJjbGUgS1xcXCIgfSxcXG4gICAgeyBzcmM6IGxvZ29Eb2xsYXJHZW5lcmFsLCBhbHQ6IFxcXCJEb2xsYXIgR2VuZXJhbFxcXCIgfSxcXG4gICAgeyBzcmM6IGxvZ29Eb29yRGFzaCwgYWx0OiBcXFwiRG9vckRhc2hcXFwiIH0sXFxuICAgIHsgc3JjOiBsb2dvRHVua2luLCBhbHQ6IFxcXCJEdW5raW4nXFxcIiB9LFxcbiAgICB7IHNyYzogbG9nb0ZpdmVCZWxvdywgYWx0OiBcXFwiRml2ZSBCZWxvd1xcXCIgfSxcXG4gICAgeyBzcmM6IGxvZ29Gb29kTGlvbiwgYWx0OiBcXFwiRm9vZCBMaW9uXFxcIiB9LFxcbiAgICB7IHNyYzogbG9nb0dOQywgYWx0OiBcXFwiR05DXFxcIiB9LFxcbiAgICB7IHNyYzogbG9nb0dvb2R5ZWFyLCBhbHQ6IFxcXCJHb29keWVhclxcXCIgfSxcXG4gICAgeyBzcmM6IGxvZ29IRUIsIGFsdDogXFxcIkgtRS1CXFxcIiB9LFxcbiAgICB7IHNyYzogbG9nb0tGQywgYWx0OiBcXFwiS0ZDXFxcIiB9LFxcbiAgICB7IHNyYzogbG9nb0tyb2dlciwgYWx0OiBcXFwiS3JvZ2VyXFxcIiB9LFxcbiAgICB7IHNyYzogbG9nb01hZ2dpYW5vcywgYWx0OiBcXFwiTWFnZ2lhbm8nc1xcXCIgfSxcXG4gICAgeyBzcmM6IGxvZ29NY0RvbmFsZHMsIGFsdDogXFxcIk1jRG9uYWxkJ3NcXFwiIH0sXFxuICAgIHsgc3JjOiBsb2dvUmVkTG9ic3RlciwgYWx0OiBcXFwiUmVkIExvYnN0ZXJcXFwiIH1cXG4gIF07XFxuXFxuICByZXR1cm4gKFxcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XFxcInB5LTEyIGJnLXdoaXRlIGJvcmRlci1iIGJvcmRlci1wcmltYXJ5LzUgb3ZlcmZsb3ctaGlkZGVuXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBtZDpweC04XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJ0ZXh0LWNlbnRlciBtYi04XFxcIj5cXG4gICAgICAgICAgPGRpdiBkYXRhLXRlc3RpZD1cXFwidGV4dC1sb2dvLXJlZWwtaGVhZGxpbmVcXFwiIGNsYXNzTmFtZT1cXFwidGV4dC14cyBtZDp0ZXh0LXNtIGZvbnQtZXh0cmFib2xkIHRyYWNraW5nLVswLjJlbV0gdXBwZXJjYXNlIHRleHQtcHJpbWFyeS83MFxcXCI+XFxuICAgICAgICAgICAgU3VwcG9ydGluZyB0aGVzZSBsZWFkaW5nIG5hdGlvbmFsIGJyYW5kc1xcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcblxcbiAgICAgIDxtb3Rpb24uZGl2IFxcbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XFxuICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxIH19XFxuICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XFxuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjgsIGRlbGF5OiAwLjIgfX1cXG4gICAgICAgIGNsYXNzTmFtZT1cXFwicmVsYXRpdmUgZmxleCBvdmVyZmxvdy1oaWRkZW4gZ3JvdXBcXFwiXFxuICAgICAgPlxcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImFuaW1hdGUtbWFycXVlZSBmbGV4IGdhcC0xNiBpdGVtcy1jZW50ZXIgd2hpdGVzcGFjZS1ub3dyYXAgbWluLXctZnVsbCBzaHJpbmstMCBweC04XFxcIj5cXG4gICAgICAgICAgIHtsb2dvcy5tYXAoKGxvZ28sIGkpID0+IChcXG4gICAgICAgICAgICAgPGRpdiBrZXk9e2Bsb2dvLTEtJHtpfWB9IGNsYXNzTmFtZT1cXFwiaC0xNiB3LTMyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdyYXlzY2FsZSBvcGFjaXR5LTYwIGhvdmVyOmdyYXlzY2FsZS0wIGhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFxcXCI+XFxuICAgICAgICAgICAgICAgPGltZyBzcmM9e2xvZ28uc3JjfSBhbHQ9e2xvZ28uYWx0fSBjbGFzc05hbWU9XFxcIm1heC1oLWZ1bGwgbWF4LXctZnVsbCBvYmplY3QtY29udGFpblxcXCIgLz5cXG4gICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICApKX1cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImFuaW1hdGUtbWFycXVlZSBmbGV4IGdhcC0xNiBpdGVtcy1jZW50ZXIgd2hpdGVzcGFjZS1ub3dyYXAgbWluLXctZnVsbCBzaHJpbmstMCBweC04XFxcIj5cXG4gICAgICAgICAgIHtsb2dvcy5tYXAoKGxvZ28sIGkpID0+IChcXG4gICAgICAgICAgICAgPGRpdiBrZXk9e2Bsb2dvLTItJHtpfWB9IGNsYXNzTmFtZT1cXFwiaC0xNiB3LTMyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdyYXlzY2FsZSBvcGFjaXR5LTYwIGhvdmVyOmdyYXlzY2FsZS0wIGhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFxcXCI+XFxuICAgICAgICAgICAgICAgPGltZyBzcmM9e2xvZ28uc3JjfSBhbHQ9e2xvZ28uYWx0fSBjbGFzc05hbWU9XFxcIm1heC1oLWZ1bGwgbWF4LXctZnVsbCBvYmplY3QtY29udGFpblxcXCIgLz5cXG4gICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICApKX1cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvbW90aW9uLmRpdj5cXG4gICAgPC9zZWN0aW9uPlxcbiAgKTtcXG59O1xcblxcbi8vIFNlcnZpY2VzU2VjdGlvblxcbmNvbnN0IFNlcnZpY2VzU2VjdGlvbiA9ICgpID0+IHtcXG4gIGNvbnN0IFthY3RpdmVTZXJ2aWNlLCBzZXRBY3RpdmVTZXJ2aWNlXSA9IHVzZVN0YXRlKDApO1xcblxcbiAgY29uc3Qgc2VydmljZXMgPSBbXFxuICAgIHtcXG4gICAgICB0aXRsZTogXFxcIkVtZXJnZW5jeSAmIE92ZXJmbG93IFdhc3RlIFJlc3BvbnNlXFxcIixcXG4gICAgICBkZXNjOiBcXFwiUmFwaWQtcmVzcG9uc2UgaGF1bGluZywgb3ZlcmZsb3cgcGlja3VwcywgYW5kIHN1cmdlIGNhcGFjaXR5IHdoZW4geW91ciBvcGVyYXRpb25zIGNhbuKAmXQgd2FpdC4gQnVpbHQgZm9yIHJldGFpbCwgaW5kdXN0cmlhbCwgYW5kIG11bHRpLXNpdGUgZW1lcmdlbmNpZXMuXFxcIixcXG4gICAgICBpbWc6IGltZ1NlcnZpY2VFbWVyZ2VuY3lPdmVyZmxvdyxcXG4gICAgICBmZWF0dXJlczogW1xcXCIyNC83IERpc3BhdGNoXFxcIiwgXFxcIk92ZXJmbG93ICYgU3VyZ2UgQ2FwYWNpdHlcXFwiLCBcXFwiTmF0aW9ud2lkZSBOZXR3b3JrXFxcIl1cXG4gICAgfSxcXG4gICAge1xcbiAgICAgIHRpdGxlOiBcXFwiU3RvcmUgRGVjb21taXNzaW9uaW5nICYgUmVtb2RlbCBTdXBwb3J0XFxcIixcXG4gICAgICBkZXNjOiBcXFwiQ2xlYW5vdXRzLCByb2xsLW9mZnMsIGFuZCBjb29yZGluYXRlZCBoYXVsIHNjaGVkdWxlcyBmb3IgcmVtb2RlbHMsIGNsb3N1cmVzLCBhbmQgZml4dHVyZSBzd2Fwc+KAlHdpdGhvdXQgZGlzcnVwdGluZyBkYXktdG8tZGF5IG9wZXJhdGlvbnMuXFxcIixcXG4gICAgICBpbWc6IGltZ1NlcnZpY2VTdG9yZURlY29tbWlzc2lvbmluZyxcXG4gICAgICBmZWF0dXJlczogW1xcXCJQcm9qZWN0IFNjaGVkdWxpbmdcXFwiLCBcXFwiU2l0ZSBDbGVhbm91dHNcXFwiLCBcXFwiTXVsdGktbG9jYXRpb24gQ29vcmRpbmF0aW9uXFxcIl1cXG4gICAgfSxcXG4gICAge1xcbiAgICAgIHRpdGxlOiBcXFwiRXZlbnQgJiBTdGFkaXVtIFdhc3RlIExvZ2lzdGljc1xcXCIsXFxuICAgICAgZGVzYzogXFxcIkVuZC10by1lbmQgd2FzdGUgcGxhbnMgZm9yIHZlbnVlcyBhbmQgbGFyZ2UgZXZlbnRz4oCUcGxhY2VtZW50LCBzd2FwcywgcG9zdC1ldmVudCBzd2VlcHMsIGFuZCByZWN5Y2xpbmcgc3RyZWFtcyBtYW5hZ2VkIG9uIHRpZ2h0IHRpbWVsaW5lcy5cXFwiLFxcbiAgICAgIGltZzogaW1nU2VydmljZUV2ZW50U3RhZGl1bSxcXG4gICAgICBmZWF0dXJlczogW1xcXCJWZW51ZSBSb3V0aW5nXFxcIiwgXFxcIkhpZ2gtdm9sdW1lIFN1cHBvcnRcXFwiLCBcXFwiRGl2ZXJzaW9uIFBsYW5uaW5nXFxcIl1cXG4gICAgfSxcXG4gICAge1xcbiAgICAgIHRpdGxlOiBcXFwiRHVtcHN0ZXIgUmVudGFsICYgVGVtcG9yYXJ5IENvbnRhaW5lcnNcXFwiLFxcbiAgICAgIGRlc2M6IFxcXCJUZW1wb3JhcnkgY29udGFpbmVycyBhbmQgY29tcGFjdG9yIHNvbHV0aW9ucyBmb3IgcHJvamVjdHMgYW5kIHBlYWtzLiBUcmFuc3BhcmVudCBzaXppbmcsIGRlbGl2ZXJ5IHdpbmRvd3MsIGFuZCBzd2FwIHNjaGVkdWxlcy5cXFwiLFxcbiAgICAgIGltZzogaW1nU2VydmljZUR1bXBzdGVyUmVudGFsLFxcbiAgICAgIGZlYXR1cmVzOiBbXFxcIlJvbGwtb2ZmcyAmIEZyb250LWxvYWRcXFwiLCBcXFwiRmFzdCBEZWxpdmVyeVxcXCIsIFxcXCJGbGV4aWJsZSBUZXJtc1xcXCJdXFxuICAgIH0sXFxuICAgIHtcXG4gICAgICB0aXRsZTogXFxcIkNlbnRyYWxpemVkIFdhc3RlIFByb2dyYW0gTWFuYWdlbWVudFxcXCIsXFxuICAgICAgZGVzYzogXFxcIk9uZSBwYXJ0bmVyIHRvIHN0YW5kYXJkaXplIHZlbmRvcnMsIHByaWNpbmcsIHJlcG9ydGluZywgYW5kIHNlcnZpY2UgbGV2ZWxzIGFjcm9zcyBhbGwgeW91ciBsb2NhdGlvbnPigJRpbXByb3ZpbmcgY29udHJvbCBhbmQgdmlzaWJpbGl0eS5cXFwiLFxcbiAgICAgIGltZzogaW1nU2VydmljZUNlbnRyYWxpemVkUHJvZ3JhbSxcXG4gICAgICBmZWF0dXJlczogW1xcXCJTdGFuZGFyZGl6ZWQgU0xBc1xcXCIsIFxcXCJTcGVuZCBWaXNpYmlsaXR5XFxcIiwgXFxcIlNpbmdsZSBQb2ludCBvZiBDb250YWN0XFxcIl1cXG4gICAgfSxcXG4gICAge1xcbiAgICAgIHRpdGxlOiBcXFwiRW52aXJvbm1lbnRhbCAmIENvbXBhY3RvciBNYWludGVuYW5jZSBTZXJ2aWNlc1xcXCIsXFxuICAgICAgZGVzYzogXFxcIlByZXZlbnRhdGl2ZSBtYWludGVuYW5jZSBhbmQgc2VydmljZSBmb3IgY29tcGFjdG9ycyBhbmQgd2FzdGUgZXF1aXBtZW50LCBwbHVzIGVudmlyb25tZW50YWwgc3VwcG9ydCB0byBrZWVwIHNpdGVzIGNvbXBsaWFudCBhbmQgcnVubmluZy5cXFwiLFxcbiAgICAgIGltZzogaW1nU2VydmljZU1haW50ZW5hbmNlLFxcbiAgICAgIGZlYXR1cmVzOiBbXFxcIlBNIFNjaGVkdWxlc1xcXCIsIFxcXCJPbi1zaXRlIFJlcGFpcnNcXFwiLCBcXFwiQ29tcGxpYW5jZSBTdXBwb3J0XFxcIl1cXG4gICAgfVxcbiAgXTtcXG5cXG4gIHJldHVybiAoXFxuICAgIDxzZWN0aW9uIGlkPVxcXCJzZXJ2aWNlc1xcXCIgY2xhc3NOYW1lPVxcXCJweS0yNCBiZy1bI0Y5RjlGNl1cXFwiPlxcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJjb250YWluZXIgbXgtYXV0byBweC00IG1kOnB4LThcXFwiPlxcbiAgICAgICAgPG1vdGlvbi5kaXYgXFxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cXG4gICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxcbiAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XFxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNiB9fVxcbiAgICAgICAgICBjbGFzc05hbWU9XFxcIm1iLTE2IG1heC13LTJ4bFxcXCJcXG4gICAgICAgID5cXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBweC00IHB5LTIgcm91bmRlZC1mdWxsIGJnLXdoaXRlIGJvcmRlciBib3JkZXItcHJpbWFyeS8xMCB0ZXh0LXByaW1hcnkgZm9udC1ib2xkIHRleHQtc20gc2hhZG93LXNtIG1iLTZcXFwiPlxcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVxcXCJ3LTIgaC0yIHJvdW5kZWQtZnVsbCBiZy1zZWNvbmRhcnlcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgIE91ciBTZXJ2aWNlc1xcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cXFwidGV4dC00eGwgbWQ6dGV4dC01eGwgZm9udC1tZWRpdW0gdGV4dC1wcmltYXJ5IGxlYWRpbmctdGlnaHQgbWItNCB0cmFja2luZy10aWdodGVyXFxcIj5cXG4gICAgICAgICAgICBDb21tZXJjaWFsIFdhc3RlIFNlcnZpY2VzXFxuICAgICAgICAgIDwvaDI+XFxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cXFwidGV4dC1sZyB0ZXh0LXByaW1hcnkvNjBcXFwiPlxcbiAgICAgICAgICAgIENvbXByZWhlbnNpdmUgc29sdXRpb25zIGZvciBidXNpbmVzc2VzIG9mIGFsbCBzaXplcywgYXZhaWxhYmxlIG5hdGlvbndpZGUuXFxuICAgICAgICAgIDwvcD5cXG4gICAgICAgIDwvbW90aW9uLmRpdj5cXG4gICAgICAgIFxcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImdyaWQgbGc6Z3JpZC1jb2xzLTEyIGdhcC04IGl0ZW1zLXN0cmV0Y2hcXFwiPlxcbiAgICAgICAgICAgey8qIE5hdmlnYXRpb24gTGlzdCAqL31cXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJsZzpjb2wtc3Bhbi00IGZsZXggZmxleC1jb2wgc3BhY2UteS1bNnB4XVxcXCI+XFxuICAgICAgICAgICAgIHtzZXJ2aWNlcy5tYXAoKHNlcnZpY2UsIGkpID0+IChcXG4gICAgICAgICAgICAgICA8YnV0dG9uXFxuICAgICAgICAgICAgICAgICBrZXk9e2l9XFxuICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVTZXJ2aWNlKGkpfVxcbiAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRBY3RpdmVTZXJ2aWNlKGkpfVxcbiAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1sZWZ0IHB4LTggcHktNCByb3VuZGVkLVs1cHhdIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBmb250LWJvbGQgdGV4dC1iYXNlIG1kOnRleHQtbGcgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIGdyb3VwICR7XFxuICAgICAgICAgICAgICAgICAgIGFjdGl2ZVNlcnZpY2UgPT09IGkgXFxuICAgICAgICAgICAgICAgICAgICAgPyBcXFwiYmctd2hpdGUgc2hhZG93LWxnIHRleHQtcHJpbWFyeSBib3JkZXIgYm9yZGVyLXByaW1hcnkvNVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgOiBcXFwidGV4dC1wcmltYXJ5LzQwIGhvdmVyOnRleHQtcHJpbWFyeSBob3ZlcjpiZy13aGl0ZS81MFxcXCJcXG4gICAgICAgICAgICAgICAgIH1gfVxcbiAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cXFwicmVsYXRpdmUgei0xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICB7c2VydmljZS50aXRsZX1cXG4gICAgICAgICAgICAgICAgICAge2FjdGl2ZVNlcnZpY2UgPT09IGkgJiYgKFxcbiAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uc3BhbiBsYXlvdXRJZD1cXFwiYWN0aXZlLWluZGljYXRvclxcXCIgY2xhc3NOYW1lPVxcXCJ3LTIgaC0yIHJvdW5kZWQtZnVsbCBiZy1bI2M1ZDUyMF1cXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICl9XFxuICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICB7YWN0aXZlU2VydmljZSA9PT0gaSAmJiAoXFxuICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XFxuICAgICAgICAgICAgICAgICAgICAgbGF5b3V0SWQ9XFxcImFjdGl2ZS1iZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XFxcImFic29sdXRlIGxlZnQtMCB0b3AtMCBib3R0b20tMCB3LTEgYmctWyNjNWQ1MjBdXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxcbiAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxcbiAgICAgICAgICAgICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCB9fVxcbiAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgKX1cXG4gICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgKSl9XFxuICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgIHsvKiBDb250ZW50IERpc3BsYXkgKi99XFxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwibGc6Y29sLXNwYW4tOCBjdXJzb3ItcG9pbnRlciBoLWZ1bGxcXFwiIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKCdOYXZpZ2F0ZSB0byBzZXJ2aWNlIGRldGFpbHMnKX0+XFxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJyZWxhdGl2ZSBoLWZ1bGwgbWluLWgtWzU2MHB4XSByb3VuZGVkLVs1cHhdIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctMnhsIGdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIG1vZGU9XFxcIndhaXRcXFwiPlxcbiAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcXG4gICAgICAgICAgICAgICAgICAga2V5PXthY3RpdmVTZXJ2aWNlfVxcbiAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHNjYWxlOiAxLjA1IH19XFxuICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgc2NhbGU6IDEgfX1cXG4gICAgICAgICAgICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwIH19XFxuICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxcbiAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XFxcImFic29sdXRlIGluc2V0LTBcXFwiXFxuICAgICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgICAgIDxpbWcgXFxuICAgICAgICAgICAgICAgICAgICAgc3JjPXtzZXJ2aWNlc1thY3RpdmVTZXJ2aWNlXS5pbWd9IFxcbiAgICAgICAgICAgICAgICAgICAgIGFsdD17c2VydmljZXNbYWN0aXZlU2VydmljZV0udGl0bGV9IFxcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cXFwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNzAwIGdyb3VwLWhvdmVyOnNjYWxlLTEwNVxcXCIgXFxuICAgICAgICAgICAgICAgICAgIC8+XFxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1bIzA0Mjk0MF0gdmlhLVsjMDQyOTQwXS82MCB0by10cmFuc3BhcmVudCBvcGFjaXR5LTkwXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJhYnNvbHV0ZSBpbnNldC0wIHAtMTIgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWVuZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcXG4gICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogMC4yIH19XFxuICAgICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cXFwidGV4dC00eGwgbWQ6dGV4dC01eGwgZm9udC1leHRyYWJvbGQgdGV4dC13aGl0ZSBtYi02IHRyYWNraW5nLXRpZ2h0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAge3NlcnZpY2VzW2FjdGl2ZVNlcnZpY2VdLnRpdGxlfVxcbiAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cXG4gICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cXFwidGV4dC13aGl0ZS85MCB0ZXh0LXhsIGxlYWRpbmctcmVsYXhlZCBtYXgtdy0yeGwgZm9udC1tZWRpdW0gbWItOFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlc1thY3RpdmVTZXJ2aWNlXS5kZXNjfVxcbiAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwiZmxleCBmbGV4LXdyYXAgZ2FwLTQgbWItOFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlc1thY3RpdmVTZXJ2aWNlXS5mZWF0dXJlcy5tYXAoKGZlYXR1cmUsIGlkeCkgPT4gKFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aWR4fSBjbGFzc05hbWU9XFxcInB4LTQgcHktMiBiZy13aGl0ZS8xMCBiYWNrZHJvcC1ibHVyLW1kIHJvdW5kZWQtbGcgdGV4dC13aGl0ZSB0ZXh0LXNtIGZvbnQtYm9sZCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIGhvdmVyOmJnLXdoaXRlLzIwIHRyYW5zaXRpb24tY29sb3JzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmZWF0dXJlfVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgKSl9XFxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LVsjYzVkNTIwXSBmb250LWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgZ3JvdXAtaG92ZXI6Z2FwLTQgdHJhbnNpdGlvbi1hbGxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBMZWFybiBNb3JlIDxBcnJvd1JpZ2h0IGNsYXNzTmFtZT1cXFwidy01IGgtNVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XFxuICAgICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XFxuICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcbiAgKTtcXG59O1xcblxcbi8vIEZlYXR1cmUgMyAoU2VjdG9ycyAvIFdobyBXZSBIZWxwKVxcbmNvbnN0IFdob1dlSGVscCA9ICgpID0+IHtcXG4gIGNvbnN0IHNlY3RvcnMgPSBbXFxuICAgIHsgdGl0bGU6IFxcXCJFZHVjYXRpb25hbFxcXCIsIGltZzogaW1nRWR1Y2F0aW9uYWwsIGljb246IDxHcmFkdWF0aW9uQ2FwIGNsYXNzTmFtZT1cXFwidy02IGgtNlxcXCIgLz4gfSxcXG4gICAgeyB0aXRsZTogXFxcIlN0YWRpdW1zICYgRXZlbnRzXFxcIiwgaW1nOiBpbWdJbmR1c3RyeVN0YWRpdW1zRXZlbnRzLCBpY29uOiA8VHJvcGh5IGNsYXNzTmFtZT1cXFwidy02IGgtNlxcXCIgLz4gfSxcXG4gICAgeyB0aXRsZTogXFxcIkZhaXRoIEJhc2VkXFxcIiwgaW1nOiBpbWdGYWl0aCwgaWNvbjogPEhlYXJ0IGNsYXNzTmFtZT1cXFwidy02IGgtNlxcXCIgLz4gfSxcXG4gICAgeyB0aXRsZTogXFxcIk11bmljaXBhbGl0aWVzXFxcIiwgaW1nOiBpbWdDbGVhbkNpdHksIGljb246IDxMYW5kbWFyayBjbGFzc05hbWU9XFxcInctNiBoLTZcXFwiIC8+IH0sXFxuICAgIHsgdGl0bGU6IFxcXCJIb3NwaXRhbGl0eVxcXCIsIGltZzogaW1nSW5kdXN0cnlIb3NwaXRhbGl0eSwgaWNvbjogPFV0ZW5zaWxzIGNsYXNzTmFtZT1cXFwidy02IGgtNlxcXCIgLz4gfSxcXG4gICAgeyB0aXRsZTogXFxcIk5hdHVyYWwgRGlzYXN0ZXJzXFxcIiwgaW1nOiBpbWdJbmR1c3RyeU5hdHVyYWxEaXNhc3RlcnMsIGljb246IDxTaXJlbiBjbGFzc05hbWU9XFxcInctNiBoLTZcXFwiIC8+IH0sXFxuICAgIHsgdGl0bGU6IFxcXCJSZWFsIEVzdGF0ZVxcXCIsIGltZzogaW1nSW5kdXN0cnlSZWFsRXN0YXRlLCBpY29uOiA8SG9tZUljb24gY2xhc3NOYW1lPVxcXCJ3LTYgaC02XFxcIiAvPiB9LFxcbiAgICB7IHRpdGxlOiBcXFwiUmV0YWlsXFxcIiwgaW1nOiBpbWdSZXRhaWwsIGljb246IDxTdG9yZSBjbGFzc05hbWU9XFxcInctNiBoLTZcXFwiIC8+IH1cXG4gIF07XFxuXFxuICByZXR1cm4gKFxcbiAgICA8c2VjdGlvbiBpZD1cXFwic2VjdG9yc1xcXCIgY2xhc3NOYW1lPVxcXCJweS0yNCBiZy1bI0Y5RjlGNl1cXFwiPlxcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJjb250YWluZXIgbXgtYXV0byBweC00IG1kOnB4LThcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcInRleHQtY2VudGVyIG1heC13LTR4bCBteC1hdXRvIG1iLTE2XFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBweC00IHB5LTIgcm91bmRlZC1mdWxsIGJnLXdoaXRlIGJvcmRlciBib3JkZXItcHJpbWFyeS8xMCB0ZXh0LXByaW1hcnkgZm9udC1ib2xkIHRleHQtc20gc2hhZG93LXNtIG1iLTZcXFwiPlxcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVxcXCJ3LTIgaC0yIHJvdW5kZWQtZnVsbCBiZy1zZWNvbmRhcnlcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgIEluZHVzdHJpZXNcXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XFxcInRleHQtNHhsIG1kOnRleHQtNXhsIGZvbnQtbWVkaXVtIHRleHQtcHJpbWFyeSBtYi02IHRyYWNraW5nLXRpZ2h0ZXJcXFwiPldobyBXZSBIZWxwPC9oMj5cXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVxcXCJ0ZXh0LWxnIHRleHQtcHJpbWFyeS82MFxcXCI+XFxuICAgICAgICAgICAgRnJvbSBsb2NhbCBidXNpbmVzc2VzIHRvIGVudGVycHJpc2Ugb3BlcmF0aW9ucywgd2Ugc2VydmUgaW5kdXN0cmllcyB0aGF0IGRlbWFuZCByZWxpYWJpbGl0eS5cXG4gICAgICAgICAgPC9wPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICBcXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IGdhcC00XFxcIj5cXG4gICAgICAgICAge3NlY3RvcnMubWFwKChzZWN0b3IsIGkpID0+IChcXG4gICAgICAgICAgICA8bW90aW9uLmRpdiBcXG4gICAgICAgICAgICAgIGtleT17aX0gXFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XFxcImdyb3VwIHJlbGF0aXZlIGgtWzMyMHB4XSByb3VuZGVkLVs1cHhdIG92ZXJmbG93LWhpZGRlbiBjdXJzb3ItcG9pbnRlciBzaGFkb3ctc20gaG92ZXI6c2hhZG93LXhsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBob3ZlcjotdHJhbnNsYXRlLXktMVxcXCJcXG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cXG4gICAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cXG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNCwgZGVsYXk6IGkgKiAwLjA1IH19XFxuICAgICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XFxuICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgPGltZyBcXG4gICAgICAgICAgICAgICAgc3JjPXtzZWN0b3IuaW1nfSBcXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVxcXCJhYnNvbHV0ZSBpbnNldC0wIHctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTcwMCBncm91cC1ob3ZlcjpzY2FsZS0xMTBcXFwiIFxcbiAgICAgICAgICAgICAgICBhbHQ9e3NlY3Rvci50aXRsZX0gXFxuICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImFic29sdXRlIGluc2V0LTAgYmctWyMwNDI5NDBdLzgwIGdyb3VwLWhvdmVyOmJnLVsjMDQyOTQwXS82MCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDBcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tdCBmcm9tLVsjMDQyOTQwXSB0by10cmFuc3BhcmVudCBvcGFjaXR5LTkwXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImFic29sdXRlIGluc2V0LTAgcC02IGZsZXggZmxleC1jb2wganVzdGlmeS1lbmRcXFwiPlxcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcInRyYW5zZm9ybSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgdHJhbnNsYXRlLXktNCBncm91cC1ob3Zlcjp0cmFuc2xhdGUteS0wXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJ3LTEyIGgtMTIgcm91bmRlZC1mdWxsIGJnLXdoaXRlLzEwIGJhY2tkcm9wLWJsdXItbWQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZSBtYi00IGdyb3VwLWhvdmVyOmJnLVsjYzVkNTIwXSBncm91cC1ob3Zlcjp0ZXh0LVsjMDQyOTQwXSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAge3NlY3Rvci5pY29ufVxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVxcXCJ0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LXhsIGxlYWRpbmctdGlnaHQgbWItMlxcXCI+e3NlY3Rvci50aXRsZX08L2gzPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImgtMCBncm91cC1ob3ZlcjpoLWF1dG8gb3ZlcmZsb3ctaGlkZGVuIG9wYWNpdHktMCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVxcXCJ0ZXh0LXdoaXRlLzgwIHRleHQtc20gbXQtMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgIFRhaWxvcmVkIHNvbHV0aW9ucyBmb3Ige3NlY3Rvci50aXRsZX0uXFxuICAgICAgICAgICAgICAgICAgICAgICA8L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1bI2M1ZDUyMF0gdGV4dC1zbSBmb250LWJvbGQgbXQtNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICBMZWFybiBNb3JlIDxBcnJvd1JpZ2h0IGNsYXNzTmFtZT1cXFwidy00IGgtNFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cXG4gICAgICAgICAgKSl9XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcbiAgKTtcXG59O1xcblxcbi8vIENhc2UgU3R1ZHkgU2VjdGlvblxcbmNvbnN0IENhc2VTdHVkeVNlY3Rpb24gPSAoKSA9PiB7XFxuICBjb25zdCBzdGF0cyA9IFtcXG4gICAgeyB2YWx1ZTogXFxcIjMyJVxcXCIsIGxhYmVsOiBcXFwiQ29zdCBSZWR1Y3Rpb25cXFwiIH0sXFxuICAgIHsgdmFsdWU6IFxcXCI5OCVcXFwiLCBsYWJlbDogXFxcIlJlY3ljbGluZyBSYXRlXFxcIiB9LFxcbiAgICB7IHZhbHVlOiBcXFwiMTJoclxcXCIsIGxhYmVsOiBcXFwiUmVzcG9uc2UgVGltZVxcXCIgfSxcXG4gICAgeyB2YWx1ZTogXFxcIjBcXFwiLCBsYWJlbDogXFxcIkNvbXBsaWFuY2UgSXNzdWVzXFxcIiB9XFxuICBdO1xcblxcbiAgcmV0dXJuIChcXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVxcXCJweS0yNCBiZy13aGl0ZSBib3JkZXItYiBib3JkZXItcHJpbWFyeS81XFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBtZDpweC04XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJncmlkIGxnOmdyaWQtY29scy0yIGdhcC0xMiBpdGVtcy1jZW50ZXJcXFwiPlxcbiAgICAgICAgICB7LyogTGVmdCBDb2x1bW4gLSBJbWFnZXMgKi99XFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJzcGFjZS15LTRcXFwiPlxcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XFxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHNjYWxlOiAwLjk1IH19XFxuICAgICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCBzY2FsZTogMSB9fVxcbiAgICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC42IH19XFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XFxcInJvdW5kZWQtWzVweF0gb3ZlcmZsb3ctaGlkZGVuIGgtWzQwMHB4XVxcXCJcXG4gICAgICAgICAgICA+XFxuICAgICAgICAgICAgICA8aW1nIFxcbiAgICAgICAgICAgICAgICBzcmM9e2ltZ0Nhc2VTdHVkeU1haW59IFxcbiAgICAgICAgICAgICAgICBhbHQ9XFxcIkNhc2UgU3R1ZHkgTWFpblxcXCIgXFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cXFwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgaG92ZXI6c2NhbGUtMTA1IHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTcwMFxcXCIgXFxuICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtNFxcXCI+XFxuICAgICAgICAgICAgICB7W2ltZ0Nhc2VTdHVkeVRodW1iMSwgaW1nQ2FzZVN0dWR5VGh1bWIyLCBpbWdDYXNlU3R1ZHlUaHVtYjNdLm1hcCgoaW1nLCBpKSA9PiAoXFxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XFxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxcbiAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cXG4gICAgICAgICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XFxuICAgICAgICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNCwgZGVsYXk6IDAuMiArIChpICogMC4xKSB9fVxcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cXFwicm91bmRlZC1bNXB4XSBvdmVyZmxvdy1oaWRkZW4gYXNwZWN0LXNxdWFyZVxcXCJcXG4gICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgIDxpbWcgXFxuICAgICAgICAgICAgICAgICAgICBzcmM9e2ltZ30gXFxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2BDYXNlIFN0dWR5IERldGFpbCAke2kgKyAxfWB9IFxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVxcXCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciBob3ZlcjpzY2FsZS0xMTAgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNTAwXFxcIiBcXG4gICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XFxuICAgICAgICAgICAgICApKX1cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgIHsvKiBSaWdodCBDb2x1bW4gLSBDb250ZW50ICovfVxcbiAgICAgICAgICA8bW90aW9uLmRpdlxcbiAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeDogMjAgfX1cXG4gICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB4OiAwIH19XFxuICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxcbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNiB9fVxcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cXFwibGc6cGwtOFxcXCJcXG4gICAgICAgICAgPlxcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XFxcInRleHQtNHhsIG1kOnRleHQtNXhsIGZvbnQtbWVkaXVtIHRleHQtcHJpbWFyeSBtYi02IHRyYWNraW5nLXRpZ2h0ZXJcXFwiPlxcbiAgICAgICAgICAgICAgQ2FzZSBTdHVkeTogPGJyLz5VcmJhbiBSZWRldmVsb3BtZW50XFxuICAgICAgICAgICAgPC9oMj5cXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XFxcInRleHQtbGcgdGV4dC1wcmltYXJ5LzcwIG1iLTEyIGxlYWRpbmctcmVsYXhlZFxcXCI+XFxuICAgICAgICAgICAgICBXaGVuIGEgbWFqb3IgbWV0cm9wb2xpdGFuIGRldmVsb3BtZW50IG5lZWRlZCBhIGNvbXBsZXRlIHdhc3RlIG1hbmFnZW1lbnQgb3ZlcmhhdWwgZm9yIGEgMy15ZWFyIHByb2plY3QsIHRoZXkgdHVybmVkIHRvIFRlbnRoIFJvY2suIFdlIGltcGxlbWVudGVkIGEgY29tcHJlaGVuc2l2ZSBkaXZlcnNpb24gc3RyYXRlZ3kgdGhhdCBzYXZlZCBjb3N0cyBhbmQgZXhjZWVkZWQgc3VzdGFpbmFiaWxpdHkgZ29hbHMuXFxuICAgICAgICAgICAgPC9wPlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJncmlkIGdyaWQtY29scy0yIGdhcC04IG1iLTEyXFxcIj5cXG4gICAgICAgICAgICAgIHtzdGF0cy5tYXAoKHN0YXQsIGkpID0+IChcXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJ0ZXh0LTR4bCBmb250LWV4dHJhYm9sZCB0ZXh0LVsjYzVkNTIwXSBtYi0xXFxcIj57c3RhdC52YWx1ZX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwidGV4dC1zbSBmb250LWJvbGQgdGV4dC1wcmltYXJ5IHVwcGVyY2FzZSB0cmFja2luZy13aWRlXFxcIj57c3RhdC5sYWJlbH08L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwiaC0xIHctMTIgYmctcHJpbWFyeS8xMCBtdC0zXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICApKX1cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwiZmxleCBnYXAtNFxcXCI+XFxuICAgICAgICAgICAgICA8YnV0dG9uIFxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XFxcInctMTQgaC0xNCByb3VuZGVkLWZ1bGwgYm9yZGVyIGJvcmRlci1wcmltYXJ5LzIwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGhvdmVyOmJnLXByaW1hcnkgaG92ZXI6dGV4dC13aGl0ZSB0ZXh0LXByaW1hcnkgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHNoYWRvdy1zbSBob3ZlcjpzaGFkb3ctbGdcXFwiXFxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIlByZXZpb3VzIGNhc2Ugc3R1ZHlcXFwiXFxuICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgIDxBcnJvd1JpZ2h0IGNsYXNzTmFtZT1cXFwidy01IGgtNSByb3RhdGUtMTgwXFxcIiAvPlxcbiAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICA8YnV0dG9uIFxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XFxcInctMTQgaC0xNCByb3VuZGVkLWZ1bGwgYmctWyMwNDI5NDBdIHRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaG92ZXI6YmctWyNjNWQ1MjBdIGhvdmVyOnRleHQtWyMwNDI5NDBdIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBzaGFkb3ctbGcgaG92ZXI6c2hhZG93LXhsIGhvdmVyOnNjYWxlLTEwNVxcXCJcXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cXFwiTmV4dCBjYXNlIHN0dWR5XFxcIlxcbiAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICA8QXJyb3dSaWdodCBjbGFzc05hbWU9XFxcInctNSBoLTVcXFwiIC8+XFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG4gICk7XFxufTtcXG5cXG4vLyBXaHkgWW91J2xsIExvdmUgVGVudGggUm9jayAoU2ltcGxlIEFjY29yZGlvbiAxKVxcbmNvbnN0IFdoeVVzID0gKCkgPT4ge1xcbiAgY29uc3QgW2FjdGl2ZUl0ZW0sIHNldEFjdGl2ZUl0ZW1dID0gdXNlU3RhdGUoXFxcIml0ZW0tMFxcXCIpO1xcblxcbiAgY29uc3QgaXRlbXMgPSBbXFxuICAgIHsgXFxuICAgICAgdGl0bGU6IFxcXCJTcGVlZCBZb3UgQ2FuIENvdW50IE9uXFxcIiwgXFxuICAgICAgY29udGVudDogXFxcIldlIGxldmVyYWdlIG91ciBuYXRpb253aWRlIG5ldHdvcmsgdG8gZW5zdXJlIHJhcGlkIGRlcGxveW1lbnQgYW5kIHRpbWVseSBwaWNrdXBzLCBtaW5pbWl6aW5nIGRvd250aW1lIGZvciB5b3VyIG9wZXJhdGlvbnMuXFxcIixcXG4gICAgICBpY29uOiA8Q2xvY2sgY2xhc3NOYW1lPVxcXCJ3LTUgaC01IHRleHQtWyNjNWQ1MjBdXFxcIiAvPlxcbiAgICB9LFxcbiAgICB7IFxcbiAgICAgIHRpdGxlOiBcXFwiTmF0aW9ud2lkZSwgTG9jYWwgRXhlY3V0aW9uXFxcIiwgXFxuICAgICAgY29udGVudDogXFxcIk9uZSBjb250cmFjdCwgb25lIHBvaW50IG9mIGNvbnRhY3QsIGJ1dCBzZXJ2aWNlZCBieSBsb2NhbCBleHBlcnRzIHdobyBrbm93IHRoZSByZWd1bGF0aW9ucyBhbmQgcmVxdWlyZW1lbnRzIG9mIHlvdXIgc3BlY2lmaWMgYXJlYS5cXFwiLFxcbiAgICAgIGljb246IDxNYXBQaW4gY2xhc3NOYW1lPVxcXCJ3LTUgaC01IHRleHQtWyNjNWQ1MjBdXFxcIiAvPlxcbiAgICB9XFxuICBdO1xcblxcbiAgcmV0dXJuIChcXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVxcXCJweS0yNCBiZy13aGl0ZVxcXCI+XFxuICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbWQ6cHgtOCBtYXgtdy03eGxcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImdyaWQgbGc6Z3JpZC1jb2xzLTIgZ2FwLTEyIGxnOmdhcC0yMCBpdGVtcy1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgey8qIExlZnQgSW1hZ2UgU2lkZSAqL31cXG4gICAgICAgICAgIDxtb3Rpb24uZGl2IFxcbiAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHg6IC0yMCB9fVxcbiAgICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB4OiAwIH19XFxuICAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cXG4gICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC44IH19XFxuICAgICAgICAgICAgIGNsYXNzTmFtZT1cXFwiaC1bNjAwcHhdIHJlbGF0aXZlIHJvdW5kZWQtWzVweF0gb3ZlcmZsb3ctaGlkZGVuXFxcIlxcbiAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ1RydWNrfSBhbHQ9XFxcIlRlbnRoIFJvY2sgT3BlcmF0aW9uc1xcXCIgY2xhc3NOYW1lPVxcXCJhYnNvbHV0ZSBpbnNldC0wIHctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXFxcIiAvPlxcbiAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxcbiAgICAgICAgICAgXFxuICAgICAgICAgICB7LyogUmlnaHQgQ29udGVudCBTaWRlICovfVxcbiAgICAgICAgICAgPG1vdGlvbi5kaXYgXFxuICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeDogMjAgfX1cXG4gICAgICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeDogMCB9fVxcbiAgICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XFxuICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuOCB9fVxcbiAgICAgICAgICAgICBjbGFzc05hbWU9XFxcImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXJcXFwiXFxuICAgICAgICAgICA+XFxuICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XFxcInRleHQtNHhsIG1kOnRleHQtNXhsIGZvbnQtbWVkaXVtIHRleHQtWyMwNDI5NDBdIGxlYWRpbmctdGlnaHQgbWItMTIgdHJhY2tpbmctdGlnaHRlclxcXCI+XFxuICAgICAgICAgICAgICAgV2h5IFlvdeKAmWxsIExvdmUgVGVudGggUm9jayBTb2x1dGlvbnNcXG4gICAgICAgICAgICAgPC9oMj5cXG4gICAgICAgICAgICAgXFxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJzcGFjZS15LTYgbWItMTJcXFwiPlxcbiAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGkpID0+IChcXG4gICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XFxcInAtNiByb3VuZGVkLVs1cHhdIGJvcmRlciBib3JkZXItZ3JheS0xMDAgc2hhZG93LXNtIGhvdmVyOnNoYWRvdy1tZCB0cmFuc2l0aW9uLXNoYWRvd1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwiZmxleCBpdGVtcy1zdGFydCBnYXAtNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwibXQtMVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5pY29ufVxcbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cXFwidGV4dC14bCBmb250LWJvbGQgdGV4dC1bIzA0Mjk0MF0gbWItMlxcXCI+e2l0ZW0udGl0bGV9PC9oMz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cXFwidGV4dC1bIzA0Mjk0MF0vNzAgbGVhZGluZy1yZWxheGVkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uY29udGVudH1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICApKX1cXG4gICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGdhcC00XFxcIj5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVxcXCJsZ1xcXCIgY2xhc3NOYW1lPVxcXCJiZy1bI2M1ZDUyMF0gdGV4dC1bIzA0Mjk0MF0gaG92ZXI6YmctWyNkNmQ5OGJdXFxcIj5cXG4gICAgICAgICAgICAgICAgICBHZXQgU3RhcnRlZFxcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVxcXCJsZ1xcXCIgdmFyaWFudD1cXFwib3V0bGluZVxcXCIgY2xhc3NOYW1lPVxcXCJib3JkZXItWyMwNDI5NDBdIHRleHQtWyMwNDI5NDBdIGhvdmVyOmJnLVsjMDQyOTQwXSBob3Zlcjp0ZXh0LXdoaXRlXFxcIj5cXG4gICAgICAgICAgICAgICAgICBSZWFkIE1vcmVcXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XFxuICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG4gICk7XFxuLy8gU2luZ2xlIENUQSBCYW5uZXIgKENvbW1hbmQgQ2VudGVyIENvbmNlcHQpXFxufTtcXG5jb25zdCBDdGFCYW5uZXIgPSAoKSA9PiB7XFxuICByZXR1cm4gKFxcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XFxcInB5LTI0IGJnLXdoaXRlIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblxcXCI+XFxuICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbWQ6cHgtOCByZWxhdGl2ZSB6LTEwXFxcIj5cXG4gICAgICAgIDxtb3Rpb24uZGl2IFxcbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDQwIH19XFxuICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cXG4gICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxcbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjggfX1cXG4gICAgICAgICAgY2xhc3NOYW1lPVxcXCJyZWxhdGl2ZSBiZy1bIzA0Mjk0MF0gcm91bmRlZC1bNXB4XSBwLTEyIG1kOnAtMjAgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy0yeGwgdGV4dC1jZW50ZXJcXFwiXFxuICAgICAgICA+XFxuICAgICAgICAgICB7LyogQmFja2dyb3VuZCBHcmlkICYgR2xvdyAqL31cXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJhYnNvbHV0ZSBpbnNldC0wIG9wYWNpdHktMTAgbWl4LWJsZW5kLW92ZXJsYXlcXFwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltZ01hcExpbmV9KWAsIGJhY2tncm91bmRTaXplOiAnY292ZXInLCBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInIH19PjwvZGl2PlxcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImFic29sdXRlIGluc2V0LTAgb3BhY2l0eS0yMFxcXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiAncmFkaWFsLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsMC4yKSAxcHgsIHRyYW5zcGFyZW50IDFweCknLCBiYWNrZ3JvdW5kU2l6ZTogJzMwcHggMzBweCcgfX0+PC9kaXY+XFxuICAgICAgICAgICBcXG4gICAgICAgICAgIHsvKiBDZW50ZXIgR2xvdyAqL31cXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJhYnNvbHV0ZSB0b3AtMS8yIGxlZnQtMS8yIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB3LVs2MDBweF0gaC1bNjAwcHhdIGJnLVsjYzVkNTIwXS8xMCByb3VuZGVkLWZ1bGwgYmx1ci1bMTIwcHhdIHBvaW50ZXItZXZlbnRzLW5vbmVcXFwiPjwvZGl2PlxcblxcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcInJlbGF0aXZlIHotMTAgbWF4LXctM3hsIG14LWF1dG8gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHB4LTQgcHktMiByb3VuZGVkLWZ1bGwgYmctd2hpdGUvNSBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIHRleHQtWyNjNWQ1MjBdIGZvbnQtYm9sZCB0ZXh0LXNtIGJhY2tkcm9wLWJsdXItc20gc2hhZG93LXNtIG1iLThcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwidy0yIGgtMiByb3VuZGVkLWZ1bGwgYmctWyNjNWQ1MjBdIGFuaW1hdGUtcHVsc2VcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICBTZXJ2aWNlIEF2YWlsYWJpbGl0eVxcbiAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgXFxuICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XFxcInRleHQtNHhsIG1kOnRleHQtNXhsIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgbGVhZGluZy10aWdodCBtYi02IHRyYWNraW5nLXRpZ2h0ZXJcXFwiPlxcbiAgICAgICAgICAgICAgIENoZWNrIElmIFdlIFNlcnZpY2UgPHNwYW4gY2xhc3NOYW1lPVxcXCJ0ZXh0LVsjYzVkNTIwXVxcXCI+WW91ciBBcmVhLjwvc3Bhbj5cXG4gICAgICAgICAgICAgPC9oMj5cXG4gICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVxcXCJ0ZXh0LXhsIHRleHQtd2hpdGUvNzAgZm9udC1tZWRpdW0gbGVhZGluZy1yZWxheGVkIG1heC13LXhsIG1iLTEwXFxcIj5cXG4gICAgICAgICAgICAgICBFbnRlciB5b3VyIHppcCBjb2RlIGJlbG93IHRvIGluc3RhbnRseSBzZWUgaWYgb3VyIG5ldHdvcmsgb2YgbG9jYWwgdmVuZG9ycyBjb3ZlcnMgeW91ciBsb2NhdGlvbi5cXG4gICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgZ2FwLTQgdy1mdWxsIG1heC13LWxnIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICAgPElucHV0IFxcbiAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIkVudGVyIFppcCBDb2RlXFxcIiBcXG4gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cXFwiYmctd2hpdGUvMTAgYm9yZGVyLXdoaXRlLzIwIHRleHQtd2hpdGUgcGxhY2Vob2xkZXI6dGV4dC13aGl0ZS80MCBoLTE0IHJvdW5kZWQtZnVsbCBweC02IHRleHQtbGcgZm9jdXMtdmlzaWJsZTpyaW5nLVsjYzVkNTIwXSBmbGV4LTEgdy1mdWxsXFxcIiBcXG4gICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cXFwibGdcXFwiIGNsYXNzTmFtZT1cXFwiYmctWyNjNWQ1MjBdIHRleHQtWyMwNDI5NDBdIGhvdmVyOmJnLVsjZDZkOThiXSBzaGFkb3ctWzBfMF8zMHB4X3JnYmEoMTk3LDIxMywzMiwwLjMpXSBob3ZlcjpzaGFkb3ctWzBfMF81MHB4X3JnYmEoMTk3LDIxMywzMiwwLjUpXSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgdy1mdWxsIHNtOnctYXV0b1xcXCI+XFxuICAgICAgICAgICAgICAgICBDaGVjayBOb3dcXG4gICAgICAgICAgICAgICA8L0J1dHRvbj5cXG4gICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvbW90aW9uLmRpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcbiAgKTtcXG59O1xcblxcbi8vIFByb2Nlc3MgU2VjdGlvbiAoSG93IGl0IFdvcmtzIC0gSW50ZXJhY3RpdmUpXFxuY29uc3QgUHJvY2VzcyA9ICgpID0+IHtcXG4gIGNvbnN0IHN0ZXBzID0gW1xcbiAgICB7IG51bTogXFxcIjAxXFxcIiwgdGl0bGU6IFxcXCJZb3UgUmVxdWVzdCBTZXJ2aWNlXFxcIiwgZGVzYzogXFxcIkNhbGwgdXMgb3IgYm9vayBvbmxpbmUuIFdlIGFyZSByZWFkeSAyNC83IHRvIGhhbmRsZSB5b3VyIHdhc3RlIG5lZWRzIGltbWVkaWF0ZWx5LlxcXCIgfSxcXG4gICAgeyBudW06IFxcXCIwMlxcXCIsIHRpdGxlOiBcXFwiV2UgRGlzcGF0Y2ggWW91ciBUZWFtXFxcIiwgZGVzYzogXFxcIkxvY2FsIGNyZXdzIGFyZSBkZXBsb3llZCB3aXRoaW4gaG91cnMsIG5vdCBkYXlzLCBlbnN1cmluZyB5b3VyIHByb2plY3Qgc3RheXMgb24gc2NoZWR1bGUuXFxcIiB9LFxcbiAgICB7IG51bTogXFxcIjAzXFxcIiwgdGl0bGU6IFxcXCJXZSBFeGVjdXRlIFRoZSBKb2JcXFwiLCBkZXNjOiBcXFwiUHJvZmVzc2lvbmFsIHJlbW92YWwsIGhhdWxhZ2UsIGFuZCBzaXRlIGNsZWFyaW5nIHdpdGggZnVsbCBzYWZldHkgY29tcGxpYW5jZS5cXFwiIH0sXFxuICAgIHsgbnVtOiBcXFwiMDRcXFwiLCB0aXRsZTogXFxcIkRvY3VtZW50YXRpb24gUHJvdmlkZWRcXFwiLCBkZXNjOiBcXFwiV2UgcHJvdmlkZSBmdWxsIGRpZ2l0YWwgZG9jdW1lbnRhdGlvbiBhbmQgYXVkaXQgdHJhaWxzIGZvciBldmVyeSBqb2IgY29tcGxldGVkLlxcXCIgfSxcXG4gICAgeyBudW06IFxcXCIwNVxcXCIsIHRpdGxlOiBcXFwiU2F0aXNmYWN0aW9uIEd1YXJhbnRlZWRcXFwiLCBkZXNjOiBcXFwiV2UgZW5zdXJlIHlvdXIgc2l0ZSBpcyBzcG90bGVzcyBhbmQgZm9sbG93IHVwIHRvIGNvbmZpcm0geW91IGFyZSAxMDAlIHNhdGlzZmllZCB3aXRoIG91ciBzZXJ2aWNlLlxcXCIgfSxcXG4gIF07XFxuXFxuICByZXR1cm4gKFxcbiAgICA8c2VjdGlvbiBpZD1cXFwicHJvY2Vzc1xcXCIgY2xhc3NOYW1lPVxcXCJweS0yNCBiZy13aGl0ZSByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cXFwiPlxcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJjb250YWluZXIgbXgtYXV0byBweC00IG1kOnB4LThcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcInRleHQtY2VudGVyIG1heC13LTN4bCBteC1hdXRvIG1iLTE2XFxcIj5cXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBweC00IHB5LTIgcm91bmRlZC1mdWxsIGJnLXdoaXRlIGJvcmRlciBib3JkZXItWyMwNDI5NDBdLzEwIHRleHQtWyMwNDI5NDBdIGZvbnQtYm9sZCB0ZXh0LXNtIHNoYWRvdy1zbSBtYi02XFxcIj5cXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cXFwidy0yIGgtMiByb3VuZGVkLWZ1bGwgYmctWyNjNWQ1MjBdXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICBPdXIgUHJvY2Vzc1xcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cXFwidGV4dC00eGwgbWQ6dGV4dC01eGwgZm9udC1tZWRpdW0gdGV4dC1bIzA0Mjk0MF0gbWItNiBsZWFkaW5nLXRpZ2h0IHRyYWNraW5nLXRpZ2h0ZXJcXFwiPlxcbiAgICAgICAgICAgIEhvdyBJdCBXb3Jrc1xcbiAgICAgICAgICA8L2gyPlxcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XFxcInRleHQtbGcgdGV4dC1bIzA0Mjk0MF0vNjBcXFwiPlxcbiAgICAgICAgICAgIEEgc2ltcGxlLCB0cmFuc3BhcmVudCBwcm9jZXNzIGRlc2lnbmVkIHRvIGdldCB5b3VyIHByb2JsZW0gc29sdmVkIGZhc3QuXFxuICAgICAgICAgIDwvcD5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImdyaWQgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTUgZ2FwLTNcXFwiPlxcbiAgICAgICAgICB7c3RlcHMubWFwKChzdGVwLCBpKSA9PiAoXFxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgXFxuICAgICAgICAgICAgICBrZXk9e2l9XFxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19XFxuICAgICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XFxuICAgICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUsIGRlbGF5OiBpICogMC4xIH19XFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XFxcImdyb3VwIGJnLXdoaXRlIHAtMTAgcm91bmRlZC1bNXB4XSBib3JkZXIgYm9yZGVyLWdyYXktMTAwIHNoYWRvdy1bMF8ycHhfOHB4X3JnYmEoMCwwLDAsMC4wNCldIGhvdmVyOnNoYWRvdy1bMF8xMnB4XzI0cHhfcmdiYSgwLDAsMCwwLjA4KV0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHJlbGF0aXZlIGgtZnVsbCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciBob3ZlcjotdHJhbnNsYXRlLXktMVxcXCJcXG4gICAgICAgICAgICA+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwidy0xNiBoLTE2IHJvdW5kZWQtZnVsbCBiZy1bI0Y5RjlGNl0gZ3JvdXAtaG92ZXI6YmctWyNjNWQ1MjBdIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LVsjMDQyOTQwXSBtYi04IHNocmluay0wXFxcIj5cXG4gICAgICAgICAgICAgICAge3N0ZXAubnVtfVxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVxcXCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LVsjMDQyOTQwXSBtYi00IGdyb3VwLWhvdmVyOnRleHQtWyNjNWQ1MjBdIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMFxcXCI+XFxuICAgICAgICAgICAgICAgIHtzdGVwLnRpdGxlfVxcbiAgICAgICAgICAgICAgPC9oMz5cXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cXFwidGV4dC1bIzA0Mjk0MF0vNzAgbGVhZGluZy1yZWxheGVkIHRleHQtc21cXFwiPlxcbiAgICAgICAgICAgICAgICB7c3RlcC5kZXNjfVxcbiAgICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cXG4gICAgICAgICAgKSl9XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcbiAgKTtcXG59O1xcblxcbi8vIFJlYXNvbnMgU2VjdGlvbiAoR3JpZCB3aXRoIFN0aWNreSBGZWF0dXJlKVxcbmNvbnN0IFJlYXNvbnMgPSAoKSA9PiB7XFxuICBjb25zdCBmZWF0dXJlcyA9IFtcXG4gICAgeyB0aXRsZTogXFxcIkRlZGljYXRlZCBQb2ludCBvZiBDb250YWN0XFxcIiwgaWNvbjogPEhlYWRzZXQgY2xhc3NOYW1lPVxcXCJ3LTYgaC02XFxcIiAvPiwgZGVzYzogXFxcIk9uZSBwZXJzb24gdG8gaGFuZGxlIGV2ZXJ5dGhpbmcuIE5vIGNhbGwgY2VudGVycywgbm8gcnVuYXJvdW5kcywganVzdCBhbnN3ZXJzLlxcXCIgfSxcXG4gICAgeyB0aXRsZTogXFxcIkpvYiBDb21wbGV0aW9uIFByb29mXFxcIiwgaWNvbjogPENoZWNrQ2lyY2xlMiBjbGFzc05hbWU9XFxcInctNiBoLTZcXFwiIC8+LCBkZXNjOiBcXFwiVmlzdWFsIGNvbmZpcm1hdGlvbiBmb3IgZXZlcnkgam9iIHdlIGNvbXBsZXRlLCBhdmFpbGFibGUgaW5zdGFudGx5LlxcXCIgfSxcXG4gICAgeyB0aXRsZTogXFxcIkxvY2FsIENyZXdzLCBOYXRpb25hbCBSZWFjaFxcXCIsIGljb246IDxNYXBQaW4gY2xhc3NOYW1lPVxcXCJ3LTYgaC02XFxcIiAvPiwgZGVzYzogXFxcIldlIG9wZXJhdGUgaW4gZXZlcnkgemlwIGNvZGUgYWNyb3NzIHRoZSBjb3VudHJ5IHdpdGggdmV0dGVkIGxvY2FsIHBhcnRuZXJzLlxcXCIgfSxcXG4gICAgeyB0aXRsZTogXFxcIlByaWNlIFNhdmluZ3MgSnVzdCBmb3IgWW91XFxcIiwgaWNvbjogPFRydWNrIGNsYXNzTmFtZT1cXFwidy02IGgtNlxcXCIgLz4sIGRlc2M6IFxcXCJWb2x1bWUgcHJpY2luZyBwYXNzZWQgZGlyZWN0bHkgdG8geW91ciBib3R0b20gbGluZSwgdHlwaWNhbGx5IHNhdmluZyAxNS0yMCUuXFxcIiB9XFxuICBdO1xcblxcbiAgcmV0dXJuIChcXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVxcXCJweS0yNCBiZy1bI0Y4RjhGOF1cXFwiPlxcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJjb250YWluZXIgbXgtYXV0byBweC00IG1kOnB4LThcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImdyaWQgbGc6Z3JpZC1jb2xzLTEyIGdhcC0xMiBsZzpnYXAtMjQgaXRlbXMtc3RhcnRcXFwiPlxcbiAgICAgICAgICB7LyogTGVmdCBTdGlja3kgQ29udGVudCAqL31cXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImxnOmNvbC1zcGFuLTUgbGc6c3RpY2t5IGxnOnRvcC0zMlxcXCI+XFxuICAgICAgICAgICAgIDxtb3Rpb24uZGl2XFxuICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMCB9fVxcbiAgICAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cXG4gICAgICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XFxuICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC42IH19XFxuICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHB4LTQgcHktMiByb3VuZGVkLWZ1bGwgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1wcmltYXJ5LzEwIHRleHQtcHJpbWFyeSBmb250LWJvbGQgdGV4dC1zbSBzaGFkb3ctc20gbWItNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVxcXCJ3LTIgaC0yIHJvdW5kZWQtZnVsbCBiZy1zZWNvbmRhcnlcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICBCZW5lZml0c1xcbiAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XFxcInRleHQtNHhsIG1kOnRleHQtNXhsIGZvbnQtbWVkaXVtIHRleHQtcHJpbWFyeSBtYi02IGxlYWRpbmctdGlnaHQgdHJhY2tpbmctdGlnaHRlclxcXCI+XFxuICAgICAgICAgICAgICAgICBNb3JlIFJlYXNvbnMgWW914oCZbGwgTG92ZSBVc1xcbiAgICAgICAgICAgICAgIDwvaDI+XFxuICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVxcXCJ0ZXh0LWxnIHRleHQtcHJpbWFyeS82MCBtYi04IGxlYWRpbmctcmVsYXhlZFxcXCI+XFxuICAgICAgICAgICAgICAgICBXZSd2ZSByZWJ1aWx0IHdhc3RlIG1hbmFnZW1lbnQgZnJvbSB0aGUgZ3JvdW5kIHVwIHRvIHNlcnZlIG1vZGVybiBidXNpbmVzc2VzLiBTYXkgZ29vZGJ5ZSB0byBoaWRkZW4gZmVlcyBhbmQgY29uZnVzaW5nIGNvbnRyYWN0cy5cXG4gICAgICAgICAgICAgICA8L3A+XFxuICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVxcXCJsZ1xcXCIgY2xhc3NOYW1lPVxcXCJiZy1zZWNvbmRhcnkgdGV4dC1wcmltYXJ5IGhvdmVyOmJnLXNlY29uZGFyeS85MFxcXCI+XFxuICAgICAgICAgICAgICAgICAgUmVxdWVzdCBhIFNlcnZpY2VcXG4gICAgICAgICAgICAgICA8L0J1dHRvbj5cXG4gICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxcbiAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgey8qIFJpZ2h0IEdyaWQgQ29udGVudCAqL31cXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImxnOmNvbC1zcGFuLTcgZ3JpZCBzbTpncmlkLWNvbHMtMiBnYXAtNlxcXCI+XFxuICAgICAgICAgICAge2ZlYXR1cmVzLm1hcCgoaXRlbSwgaSkgPT4gKFxcbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgXFxuICAgICAgICAgICAgICAgIGtleT17aX0gXFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cXFwiZ3JvdXAgYmctd2hpdGUgcC04IHJvdW5kZWQtWzVweF0gc2hhZG93LXNtIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgaG92ZXI6Ym9yZGVyLXNlY29uZGFyeS8yMCBob3ZlcjpzaGFkb3cteGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXFxcIlxcbiAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHk6IC01IH19XFxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cXG4gICAgICAgICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUsIGRlbGF5OiBpICogMC4xIH19XFxuICAgICAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cXG4gICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcInctMTQgaC0xNCByb3VuZGVkLVs1cHhdIGJnLVsjRjlGOUY2XSBncm91cC1ob3ZlcjpiZy1zZWNvbmRhcnkgZ3JvdXAtaG92ZXI6dGV4dC1wcmltYXJ5IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXByaW1hcnkgbWItNlxcXCI+XFxuICAgICAgICAgICAgICAgICAge2l0ZW0uaWNvbn1cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVxcXCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXByaW1hcnkgbWItMyBncm91cC1ob3Zlcjp0ZXh0LXNlY29uZGFyeSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDBcXFwiPntpdGVtLnRpdGxlfTwvaDM+XFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cXFwidGV4dC1wcmltYXJ5LzYwIGxlYWRpbmctcmVsYXhlZCBncm91cC1ob3Zlcjp0ZXh0LXByaW1hcnkvODAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwXFxcIj57aXRlbS5kZXNjfTwvcD5cXG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cXG4gICAgICAgICAgICApKX1cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcbiAgKTtcXG59O1xcblxcbi8vIFN0YXRzIFNlY3Rpb24gKE51bWJlcnMgYW5kIE1lZGlhIDEpXFxuY29uc3QgU3RhdHMgPSAoKSA9PiB7XFxuICByZXR1cm4gKFxcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XFxcInB5LTI0IGJnLVsjRkRGREZEXVxcXCI+XFxuICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbWQ6cHgtOFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwiZ3JpZCBsZzpncmlkLWNvbHMtMiBnYXAtMTYgaXRlbXMtc3RhcnRcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwic3RpY2t5IHRvcC0zMlxcXCI+XFxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcXG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeDogLTIwIH19XFxuICAgICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB4OiAwIH19XFxuICAgICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjYgfX1cXG4gICAgICAgICAgICA+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHB4LTQgcHktMiByb3VuZGVkLWZ1bGwgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1wcmltYXJ5LzEwIHRleHQtcHJpbWFyeSBmb250LWJvbGQgdGV4dC1zbSBzaGFkb3ctc20gbWItNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVxcXCJ3LTIgaC0yIHJvdW5kZWQtZnVsbCBiZy1zZWNvbmRhcnlcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICBLZXkgTWV0cmljc1xcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVxcXCJ0ZXh0LTR4bCBtZDp0ZXh0LTV4bCBmb250LW1lZGl1bSB0ZXh0LXByaW1hcnkgbWItNiBsZWFkaW5nLXRpZ2h0IHRyYWNraW5nLXRpZ2h0ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICBXaHkgQ2xpZW50cyBDYWxsIFVzIEFnYWluIGFuZCBBZ2Fpbi5cXG4gICAgICAgICAgICAgIDwvaDI+XFxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XFxcInRleHQtbGcgdGV4dC1wcmltYXJ5LzYwIG1iLThcXFwiPlxcbiAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTdXNwZW5kaXNzZSB2YXJpdXMgZW5pbSBpbiBlcm9zIGVsZW1lbnR1bSB0cmlzdGlxdWUuIER1aXMgY3Vyc3VzLCBtaSBxdWlzIHZpdmVycmEgb3JuYXJlLCBlcm9zIGRvbG9yIGludGVyZHVtIG51bGxhLlxcbiAgICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgZ2FwLTRcXFwiPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XFxcImxnXFxcIiBjbGFzc05hbWU9XFxcImJnLXByaW1hcnkgdGV4dC13aGl0ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgUmVxdWVzdCBhIFNlcnZpY2VcXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cXFwibGdcXFwiIHZhcmlhbnQ9XFxcImdob3N0XFxcIiBjbGFzc05hbWU9XFxcInRleHQtcHJpbWFyeSBob3ZlcjpiZy10cmFuc3BhcmVudCBob3Zlcjp1bmRlcmxpbmUgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICA8UGhvbmUgY2xhc3NOYW1lPVxcXCJ3LTUgaC01IHRleHQtc2Vjb25kYXJ5XFxcIiAvPiAoODg4KSA1NTUtMDEyM1xcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJncmlkIGdhcC04XFxcIj5cXG4gICAgICAgICAgICAgPG1vdGlvbi5kaXYgXFxuICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMCB9fVxcbiAgICAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cXG4gICAgICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XFxuICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41LCBkZWxheTogMC4xIH19XFxuICAgICAgICAgICAgICAgY2xhc3NOYW1lPVxcXCJib3JkZXIgYm9yZGVyLXByaW1hcnkvMTAgcC04IHJvdW5kZWQtWzVweF0gYmctd2hpdGVcXFwiXFxuICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImZvbnQtc2VtaWJvbGQgdGV4dC14bCB0ZXh0LXByaW1hcnkgbWItNFxcXCI+Q2FzZSAvIFN0YXQgSGVyZTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwidGV4dC03eGwgZm9udC1leHRyYWJvbGQgdGV4dC1wcmltYXJ5IG1iLTRcXFwiPjMwJTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8U2VwYXJhdG9yIGNsYXNzTmFtZT1cXFwiYmctcHJpbWFyeS8xMCBtYi00XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XFxcInRleHQtcHJpbWFyeS82MFxcXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC48L3A+XFxuICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cXG4gICAgICAgICAgICAgXFxuICAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxcbiAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cXG4gICAgICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XFxuICAgICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxcbiAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSwgZGVsYXk6IDAuMiB9fVxcbiAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cXFwiYm9yZGVyIGJvcmRlci1wcmltYXJ5LzEwIHAtOCByb3VuZGVkLVs1cHhdIGJnLXdoaXRlXFxcIlxcbiAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJoLTY0IHctZnVsbCByb3VuZGVkLVs1cHhdIG92ZXJmbG93LWhpZGRlbiBtYi04XFxcIj5cXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nUGFya1dhdGVyfSBjbGFzc05hbWU9XFxcInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXFxcIiBhbHQ9XFxcIlN0YXRzIFZpc3VhbFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJmb250LXNlbWlib2xkIHRleHQteGwgdGV4dC1wcmltYXJ5IG1iLTRcXFwiPkNhc2UgLyBTdGF0IEhlcmU8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcInRleHQtN3hsIGZvbnQtZXh0cmFib2xkIHRleHQtcHJpbWFyeSBtYi00XFxcIj43MEs8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPFNlcGFyYXRvciBjbGFzc05hbWU9XFxcImJnLXByaW1hcnkvMTAgbWItNFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVxcXCJ0ZXh0LXByaW1hcnkvNjBcXFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuPC9wPlxcbiAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XFxuXFxuICAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxcbiAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cXG4gICAgICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XFxuICAgICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxcbiAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSwgZGVsYXk6IDAuMyB9fVxcbiAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cXFwiYm9yZGVyIGJvcmRlci1wcmltYXJ5LzEwIHAtOCByb3VuZGVkLVs1cHhdIGJnLXdoaXRlXFxcIlxcbiAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJmb250LXNlbWlib2xkIHRleHQteGwgdGV4dC1wcmltYXJ5IG1iLTRcXFwiPkNhc2UgLyBTdGF0IEhlcmU8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcInRleHQtN3hsIGZvbnQtZXh0cmFib2xkIHRleHQtcHJpbWFyeSBtYi00XFxcIj44MCU8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPFNlcGFyYXRvciBjbGFzc05hbWU9XFxcImJnLXByaW1hcnkvMTAgbWItNFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVxcXCJ0ZXh0LXByaW1hcnkvNjBcXFwiPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuPC9wPlxcbiAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG4gICk7XFxufTtcXG5cXG4vLyBUZXN0aW1vbmlhbCAoSW50ZXJhY3RpdmUgU2xpZGVyKVxcbmNvbnN0IFRlc3RpbW9uaWFscyA9ICgpID0+IHtcXG4gIGNvbnN0IFtjdXJyZW50SW5kZXgsIHNldEN1cnJlbnRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcXG5cXG4gIGNvbnN0IHRlc3RpbW9uaWFscyA9IFtcXG4gICAge1xcbiAgICAgIHF1b3RlOiBcXFwiVGVudGggUm9jayB0cmFuc2Zvcm1lZCBvdXIgd2FzdGUgbWFuYWdlbWVudC4gV2Ugc2F2ZWQgMzAlIGluIHRoZSBmaXJzdCBxdWFydGVyIGFsb25lLlxcXCIsXFxuICAgICAgYXV0aG9yOiBcXFwiU2FyYWggSmVua2luc1xcXCIsXFxuICAgICAgcm9sZTogXFxcIkRpcmVjdG9yIG9mIE9wZXJhdGlvbnNcXFwiLFxcbiAgICAgIGNvbXBhbnk6IFxcXCJSZXRhaWwgR2lhbnQgQ28uXFxcIixcXG4gICAgICBpbWc6IFxcXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU3MzQ5NjM1OTE0Mi1iOGQ4NzczNGE1YTI/YXV0bz1mb3JtYXQmZml0PWNyb3AmcT04MCZ3PTIwMCZoPTIwMFxcXCJcXG4gICAgfSxcXG4gICAge1xcbiAgICAgIHF1b3RlOiBcXFwiVGhlIHNpbmdsZSBwb2ludCBvZiBjb250YWN0IGlzIGEgZ2FtZSBjaGFuZ2VyLiBObyBtb3JlIGNoYXNpbmcgdmVuZG9ycyBhY3Jvc3MgMTUgc3RhdGVzLlxcXCIsXFxuICAgICAgYXV0aG9yOiBcXFwiTWljaGFlbCBSb3NzXFxcIixcXG4gICAgICByb2xlOiBcXFwiRmFjaWxpdHkgTWFuYWdlclxcXCIsXFxuICAgICAgY29tcGFueTogXFxcIk5hdGlvbmFsIExvZ2lzdGljcyBJbmMuXFxcIixcXG4gICAgICBpbWc6IFxcXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU2MDI1MDA5Ny0wYjkzNTI4YzMxMWE/YXV0bz1mb3JtYXQmZml0PWNyb3AmcT04MCZ3PTIwMCZoPTIwMFxcXCJcXG4gICAgfSxcXG4gICAge1xcbiAgICAgIHF1b3RlOiBcXFwiRmluYWxseSwgYSBwYXJ0bmVyIHRoYXQgdW5kZXJzdGFuZHMgY29tcGxpYW5jZS4gVGhlIGF1ZGl0IHRyYWlsIGZlYXR1cmVzIGFyZSBleGFjdGx5IHdoYXQgd2UgbmVlZGVkLlxcXCIsXFxuICAgICAgYXV0aG9yOiBcXFwiRGF2aWQgQ2hlblxcXCIsXFxuICAgICAgcm9sZTogXFxcIkNvbXBsaWFuY2UgT2ZmaWNlclxcXCIsXFxuICAgICAgY29tcGFueTogXFxcIkJpb1RlY2ggU29sdXRpb25zXFxcIixcXG4gICAgICBpbWc6IFxcXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ3MjA5OTY0NTc4NS01NjU4YWJmNGZmNGU/YXV0bz1mb3JtYXQmZml0PWNyb3AmcT04MCZ3PTIwMCZoPTIwMFxcXCJcXG4gICAgfVxcbiAgXTtcXG5cXG4gIGNvbnN0IG5leHRUZXN0aW1vbmlhbCA9ICgpID0+IHtcXG4gICAgc2V0Q3VycmVudEluZGV4KChwcmV2KSA9PiAocHJldiArIDEpICUgdGVzdGltb25pYWxzLmxlbmd0aCk7XFxuICB9O1xcblxcbiAgY29uc3QgcHJldlRlc3RpbW9uaWFsID0gKCkgPT4ge1xcbiAgICBzZXRDdXJyZW50SW5kZXgoKHByZXYpID0+IChwcmV2IC0gMSArIHRlc3RpbW9uaWFscy5sZW5ndGgpICUgdGVzdGltb25pYWxzLmxlbmd0aCk7XFxuICB9O1xcblxcbiAgcmV0dXJuIChcXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVxcXCJweS0yNCBiZy1bIzA0Mjk0MF0gdGV4dC13aGl0ZSByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cXFwiPlxcbiAgICAgIHsvKiBCYWNrZ3JvdW5kIEdyYWRpZW50ICovfVxcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tWyMwNDI5NDBdIHRvLVsjMGEzYTU1XVxcXCI+PC9kaXY+XFxuICAgICAgXFxuICAgICAgey8qIEJhY2tncm91bmQgUGF0dGVybiAqL31cXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwiYWJzb2x1dGUgaW5zZXQtMCBvcGFjaXR5LTEwXFxcIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6ICdyYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCAjZmZmZmZmIDFweCwgdHJhbnNwYXJlbnQgMXB4KScsIGJhY2tncm91bmRTaXplOiAnNDBweCA0MHB4JyB9fT48L2Rpdj5cXG4gICAgICBcXG4gICAgICB7LyogR2xvdyBFZmZlY3QgKi99XFxuICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LVs2MDBweF0gaC1bNjAwcHhdIGJnLVsjYzVkNTIwXS81IHJvdW5kZWQtZnVsbCBibHVyLVsxMjBweF0gLXRyYW5zbGF0ZS14LTEvMiAtdHJhbnNsYXRlLXktMS8yIHBvaW50ZXItZXZlbnRzLW5vbmVcXFwiPjwvZGl2PlxcblxcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJjb250YWluZXIgbXgtYXV0byBweC00IG1kOnB4LTggcmVsYXRpdmUgei0xMFxcXCI+XFxuICAgICAgICA8bW90aW9uLmRpdiBcXG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMCB9fVxcbiAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XFxuICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cXG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC42IH19XFxuICAgICAgICAgIGNsYXNzTmFtZT1cXFwibWF4LXctNHhsIG14LWF1dG9cXFwiXFxuICAgICAgICA+XFxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHB4LTQgcHktMiByb3VuZGVkLWZ1bGwgYmctd2hpdGUvMTAgYm9yZGVyIGJvcmRlci13aGl0ZS8yMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCB0ZXh0LXNtIGJhY2tkcm9wLWJsdXItbWQgc2hhZG93LXNtIG1iLThcXFwiPlxcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVxcXCJ3LTIgaC0yIHJvdW5kZWQtZnVsbCBiZy1bI2M1ZDUyMF1cXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgIENsaWVudCBTdG9yaWVzXFxuICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJmbGV4IGdhcC0xIG1iLThcXFwiPlxcbiAgICAgICAgICAgICAge1sxLDIsMyw0LDVdLm1hcChpID0+IDxTdGFyIGtleT17aX0gY2xhc3NOYW1lPVxcXCJ3LTYgaC02IGZpbGwtWyNjNWQ1MjBdIHRleHQtWyNjNWQ1MjBdXFxcIiAvPil9XFxuICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgIFxcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcInJlbGF0aXZlIG1pbi1oLVszMDBweF1cXFwiPlxcbiAgICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIG1vZGU9XFxcIndhaXRcXFwiPlxcbiAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XFxuICAgICAgICAgICAgICAgICBrZXk9e2N1cnJlbnRJbmRleH1cXG4gICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cXG4gICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxcbiAgICAgICAgICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCB5OiAtMjAgfX1cXG4gICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxcbiAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgIDxibG9ja3F1b3RlIGNsYXNzTmFtZT1cXFwidGV4dC0zeGwgbWQ6dGV4dC01eGwgZm9udC1ib2xkIGxlYWRpbmctdGlnaHQgbWItMTAgdHJhY2tpbmctdGlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICBcXFwie3Rlc3RpbW9uaWFsc1tjdXJyZW50SW5kZXhdLnF1b3RlfVxcXCJcXG4gICAgICAgICAgICAgICAgIDwvYmxvY2txdW90ZT5cXG4gICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImZsZXggaXRlbXMtY2VudGVyIGdhcC00XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJ3LTE2IGgtMTYgcm91bmRlZC1mdWxsIG92ZXJmbG93LWhpZGRlbiBib3JkZXItMiBib3JkZXItd2hpdGUvMjBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Rlc3RpbW9uaWFsc1tjdXJyZW50SW5kZXhdLmltZ30gYWx0PXt0ZXN0aW1vbmlhbHNbY3VycmVudEluZGV4XS5hdXRob3J9IGNsYXNzTmFtZT1cXFwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwiZm9udC1ib2xkIHRleHQteGwgdGV4dC13aGl0ZVxcXCI+e3Rlc3RpbW9uaWFsc1tjdXJyZW50SW5kZXhdLmF1dGhvcn08L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJ0ZXh0LXdoaXRlLzYwIGZvbnQtbWVkaXVtXFxcIj57dGVzdGltb25pYWxzW2N1cnJlbnRJbmRleF0ucm9sZX0sIHt0ZXN0aW1vbmlhbHNbY3VycmVudEluZGV4XS5jb21wYW55fTwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XFxuICAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxcbiAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICB7LyogQ29udHJvbHMgKi99XFxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwiZmxleCBnYXAtNCBwdC04XFxcIj5cXG4gICAgICAgICAgICAgIDxidXR0b24gXFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3ByZXZUZXN0aW1vbmlhbH1cXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVxcXCJ3LTEyIGgtMTIgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItd2hpdGUvMjAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaG92ZXI6Ymctd2hpdGUvMTAgdGV4dC13aGl0ZSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcXFwiXFxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIlByZXZpb3VzIHRlc3RpbW9uaWFsXFxcIlxcbiAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICA8QXJyb3dSaWdodCBjbGFzc05hbWU9XFxcInctNSBoLTUgcm90YXRlLTE4MFxcXCIgLz5cXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgPGJ1dHRvbiBcXG4gICAgICAgICAgICAgICAgb25DbGljaz17bmV4dFRlc3RpbW9uaWFsfVxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XFxcInctMTIgaC0xMiByb3VuZGVkLWZ1bGwgYmctWyNjNWQ1MjBdIHRleHQtWyMwNDI5NDBdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGhvdmVyOmJnLVsjZDZkOThiXSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgc2hhZG93LWxnIGhvdmVyOnNjYWxlLTExMFxcXCJcXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cXFwiTmV4dCB0ZXN0aW1vbmlhbFxcXCJcXG4gICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgPEFycm93UmlnaHQgY2xhc3NOYW1lPVxcXCJ3LTUgaC01XFxcIiAvPlxcbiAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvbW90aW9uLmRpdj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcbiAgKTtcXG59O1xcblxcbi8vIEZBUSAoRkFRIDEpXFxuY29uc3QgRmFxID0gKCkgPT4ge1xcbiAgY29uc3QgW29wZW5JdGVtLCBzZXRPcGVuSXRlbV0gPSB1c2VTdGF0ZShcXFwiaXRlbS0wXFxcIik7XFxuXFxuICBjb25zdCBmYXFzID0gW1xcbiAgICB7XFxuICAgICAgcXVlc3Rpb246IFxcXCJIb3cgUXVpY2tseSBDYW4gWW91IEFycmFuZ2UgYSBQaWNrdXA/XFxcIixcXG4gICAgICBhbnN3ZXI6IFxcXCJXZSBzcGVjaWFsaXplIGluIHJhcGlkIHJlc3BvbnNlLiBGb3IgZW1lcmdlbmN5IHJlcXVlc3RzLCB3ZSBjYW4gb2Z0ZW4gYmUgb24tc2l0ZSB3aXRoaW4gaG91cnMuIEZvciBzdGFuZGFyZCBzY2hlZHVsZWQgc2VydmljZXMsIHdlIGNhbiB0eXBpY2FsbHkgc3RhcnQgd2l0aGluIDI0LTQ4IGhvdXJzIG9mIGFjY291bnQgc2V0dXAuXFxcIlxcbiAgICB9LFxcbiAgICB7XFxuICAgICAgcXVlc3Rpb246IFxcXCJEbyBZb3UgU2VydmljZSBNdWx0aXBsZSBMb2NhdGlvbnMgTmF0aW9ud2lkZT9cXFwiLFxcbiAgICAgIGFuc3dlcjogXFxcIlllcywgd2Ugb3BlcmF0ZSBpbiBhbGwgNTAgc3RhdGVzLiBPdXIgY2VudHJhbGl6ZWQgbWFuYWdlbWVudCBwbGF0Zm9ybSBhbGxvd3MgeW91IHRvIGhhbmRsZSB3YXN0ZSBzZXJ2aWNlcyBmb3IgaHVuZHJlZHMgb2YgbG9jYXRpb25zIHRocm91Z2ggYSBzaW5nbGUgcG9pbnQgb2YgY29udGFjdCBhbmQgb25lIGNvbnNvbGlkYXRlZCBpbnZvaWNlLlxcXCJcXG4gICAgfSxcXG4gICAge1xcbiAgICAgIHF1ZXN0aW9uOiBcXFwiV2hhdCBUeXBlcyBvZiBXYXN0ZSBEbyBZb3UgSGFuZGxlP1xcXCIsXFxuICAgICAgYW5zd2VyOiBcXFwiV2UgaGFuZGxlIGFsbW9zdCBhbGwgbm9uLWhhemFyZG91cyBjb21tZXJjaWFsIHdhc3RlIHN0cmVhbXMgaW5jbHVkaW5nIGdlbmVyYWwgdHJhc2gsIHJlY3ljbGluZyAoY2FyZGJvYXJkLCBwbGFzdGljLCBtZXRhbCksIGNvbnN0cnVjdGlvbiBkZWJyaXMsIG9yZ2FuaWMgd2FzdGUsIGFuZCBlLXdhc3RlLiBXZSBhbHNvIGNvb3JkaW5hdGUgc3BlY2lhbGl6ZWQgaGF6bWF0IGRpc3Bvc2FsIHVwb24gcmVxdWVzdC5cXFwiXFxuICAgIH0sXFxuICAgIHtcXG4gICAgICBxdWVzdGlvbjogXFxcIkFyZSBUaGVyZSBMb25nLVRlcm0gQ29udHJhY3RzP1xcXCIsXFxuICAgICAgYW5zd2VyOiBcXFwiV2UgYmVsaWV2ZSBpbiBlYXJuaW5nIHlvdXIgYnVzaW5lc3MgZXZlcnkgZGF5LiBXaGlsZSB3ZSBvZmZlciBjb250cmFjdCBzYXZpbmdzLCBtYW55IG9mIG91ciBzZXJ2aWNlcyBhcmUgYXZhaWxhYmxlIHdpdGggZmxleGlibGUgdGVybXMuIFdlIHdhbnQgeW91IHRvIHN0YXkgYmVjYXVzZSB5b3UncmUgaGFwcHksIG5vdCBiZWNhdXNlIHlvdSdyZSBsb2NrZWQgaW4uXFxcIlxcbiAgICB9LFxcbiAgICB7XFxuICAgICAgcXVlc3Rpb246IFxcXCJIb3cgRG8gWW91IEhlbHAgV2l0aCBTdXN0YWluYWJpbGl0eSBHb2Fscz9cXFwiLFxcbiAgICAgIGFuc3dlcjogXFxcIldlIHByb3ZpZGUgZGV0YWlsZWQgZGl2ZXJzaW9uIHJlcG9ydGluZyBhbmQgd2FzdGUgYXVkaXRzIHRvIGlkZW50aWZ5IHJlY3ljbGluZyBvcHBvcnR1bml0aWVzLiBPdXIgZ29hbCBpcyB0byBtaW5pbWl6ZSB5b3VyIGxhbmRmaWxsIGZvb3RwcmludCBhbmQgbWF4aW1pemUgcG90ZW50aWFsIHJlYmF0ZXMgZm9yIHJlY3ljbGFibGUgbWF0ZXJpYWxzLlxcXCJcXG4gICAgfVxcbiAgXTtcXG5cXG4gIHJldHVybiAoXFxuICAgIDxzZWN0aW9uIGlkPVxcXCJmYXFcXFwiIGNsYXNzTmFtZT1cXFwicHktMjQgYmctWyNGOUY5RjZdIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblxcXCI+XFxuICAgICAgey8qIEJhY2tncm91bmQgRGVjb3IgKi99XFxuICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LVs2MDBweF0gaC1bNjAwcHhdIGJnLXByaW1hcnkvNSByb3VuZGVkLWZ1bGwgYmx1ci1bMTAwcHhdIHBvaW50ZXItZXZlbnRzLW5vbmUgLXRyYW5zbGF0ZS14LTEvMiAtdHJhbnNsYXRlLXktMS8yXFxcIj48L2Rpdj5cXG4gICAgICBcXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBtZDpweC04IG1heC13LTR4bCByZWxhdGl2ZSB6LTEwXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJ0ZXh0LWNlbnRlciBtYi0xNiBzcGFjZS15LTRcXFwiPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHB4LTQgcHktMiByb3VuZGVkLWZ1bGwgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1wcmltYXJ5LzEwIHRleHQtcHJpbWFyeSBmb250LWJvbGQgdGV4dC1zbSBzaGFkb3ctc20gbWItNFxcXCI+XFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XFxcInctMiBoLTIgcm91bmRlZC1mdWxsIGJnLXNlY29uZGFyeVxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgQ29tbW9uIFF1ZXN0aW9uc1xcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cXFwidGV4dC00eGwgbWQ6dGV4dC01eGwgZm9udC1tZWRpdW0gdGV4dC1wcmltYXJ5IHRyYWNraW5nLXRpZ2h0ZXJcXFwiPkZyZXF1ZW50bHkgQXNrZWQgUXVlc3Rpb25zPC9oMj5cXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVxcXCJ0ZXh0LWxnIHRleHQtcHJpbWFyeS82MCBtYXgtdy0yeGwgbXgtYXV0b1xcXCI+XFxuICAgICAgICAgICAgRXZlcnl0aGluZyB5b3UgbmVlZCB0byBrbm93IGFib3V0IG91ciBzZXJ2aWNlcywgY292ZXJhZ2UsIGFuZCBwcm9jZXNzLiBDYW4ndCBmaW5kIHRoZSBhbnN3ZXIgeW91J3JlIGxvb2tpbmcgZm9yPyBSZWFjaCBvdXQgdG8gb3VyIHRlYW0uXFxuICAgICAgICAgIDwvcD5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImdyaWQgZ2FwLTRcXFwiPlxcbiAgICAgICAgICB7ZmFxcy5tYXAoKGZhcSwgaSkgPT4gKFxcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XFxuICAgICAgICAgICAgICBrZXk9e2l9XFxuICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19XFxuICAgICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjQsIGRlbGF5OiBpICogMC4xIH19XFxuICAgICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XFxuICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgPGRpdiBcXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3JvdXAgcm91bmRlZC1bNXB4XSBib3JkZXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIG92ZXJmbG93LWhpZGRlbiAke1xcbiAgICAgICAgICAgICAgICAgIG9wZW5JdGVtID09PSBgaXRlbS0ke2l9YCBcXG4gICAgICAgICAgICAgICAgICAgID8gXFxcImJnLVsjMDQyOTQwXSBib3JkZXItWyMwNDI5NDBdIHNoYWRvdy14bCB0cmFuc2Zvcm0gc2NhbGUtWzEuMDJdXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgIDogXFxcImJnLXdoaXRlIGJvcmRlci10cmFuc3BhcmVudCBob3Zlcjpib3JkZXItcHJpbWFyeS8xMCBzaGFkb3ctc20gaG92ZXI6c2hhZG93LW1kXFxcIlxcbiAgICAgICAgICAgICAgICB9YH1cXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3Blbkl0ZW0ob3Blbkl0ZW0gPT09IGBpdGVtLSR7aX1gID8gXFxcIlxcXCIgOiBgaXRlbS0ke2l9YCl9XFxuICAgICAgICAgICAgICA+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVxcXCJ3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtNiBtZDpwLTggdGV4dC1sZWZ0IG91dGxpbmUtbm9uZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgdGV4dC14bCBmb250LWJvbGQgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwICR7XFxuICAgICAgICAgICAgICAgICAgICBvcGVuSXRlbSA9PT0gYGl0ZW0tJHtpfWAgPyBcXFwidGV4dC13aGl0ZVxcXCIgOiBcXFwidGV4dC1wcmltYXJ5XFxcIlxcbiAgICAgICAgICAgICAgICAgIH1gfT5cXG4gICAgICAgICAgICAgICAgICAgIHtmYXEucXVlc3Rpb259XFxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc2hyaW5rLTAgdy0xMCBoLTEwIHJvdW5kZWQtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgJHtcXG4gICAgICAgICAgICAgICAgICAgIG9wZW5JdGVtID09PSBgaXRlbS0ke2l9YCBcXG4gICAgICAgICAgICAgICAgICAgICAgPyBcXFwiYmctWyNjNWQ1MjBdIHJvdGF0ZS0xODBcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICA6IFxcXCJiZy1wcmltYXJ5LzUgZ3JvdXAtaG92ZXI6YmctcHJpbWFyeS8xMFxcXCJcXG4gICAgICAgICAgICAgICAgICB9YH0+XFxuICAgICAgICAgICAgICAgICAgICA8Q2hldnJvbkRvd24gY2xhc3NOYW1lPXtgdy01IGgtNSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDAgJHtcXG4gICAgICAgICAgICAgICAgICAgICAgb3Blbkl0ZW0gPT09IGBpdGVtLSR7aX1gID8gXFxcInRleHQtWyMwNDI5NDBdXFxcIiA6IFxcXCJ0ZXh0LXByaW1hcnlcXFwiXFxuICAgICAgICAgICAgICAgICAgICB9YH0gLz5cXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxkaXYgXFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IG92ZXJmbG93LWhpZGRlbiAke1xcbiAgICAgICAgICAgICAgICAgICAgb3Blbkl0ZW0gPT09IGBpdGVtLSR7aX1gID8gXFxcIm1heC1oLTk2IG9wYWNpdHktMTAwXFxcIiA6IFxcXCJtYXgtaC0wIG9wYWNpdHktMFxcXCJcXG4gICAgICAgICAgICAgICAgICB9YH1cXG4gICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJweC02IG1kOnB4LTggcGItOCBwdC0wXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cXFwidGV4dC13aGl0ZS84MCB0ZXh0LWxnIGxlYWRpbmctcmVsYXhlZCBib3JkZXItdCBib3JkZXItd2hpdGUvMTAgcHQtNlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgIHtmYXEuYW5zd2VyfVxcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cXG4gICAgICAgICAgKSl9XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIFxcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcIm10LTE2IHRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgICAgIDxwIGNsYXNzTmFtZT1cXFwidGV4dC1wcmltYXJ5LzYwIG1iLTQgZm9udC1tZWRpdW1cXFwiPlN0aWxsIEhhdmUgUXVlc3Rpb25zPzwvcD5cXG4gICAgICAgICAgIDxCdXR0b24gc2l6ZT1cXFwibGdcXFwiIGNsYXNzTmFtZT1cXFwic2hhZG93LWxnXFxcIj5cXG4gICAgICAgICAgICAgIENvbnRhY3QgVXNcXG4gICAgICAgICAgIDwvQnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG4gICk7XFxufTtcXG5cXG4vLyBPbmUgTG9jYXRpb24gMlxcbmNvbnN0IExvY2F0aW9uID0gKCkgPT4ge1xcbiAgcmV0dXJuIChcXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVxcXCJweS0yNCBiZy13aGl0ZVxcXCI+XFxuICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbWQ6cHgtOFxcXCI+XFxuICAgICAgICA8bW90aW9uLmRpdiBcXG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMCB9fVxcbiAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XFxuICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cXG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC42IH19XFxuICAgICAgICAgIGNsYXNzTmFtZT1cXFwidGV4dC1jZW50ZXIgbWItMTZcXFwiXFxuICAgICAgICA+XFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcHgtNCBweS0yIHJvdW5kZWQtZnVsbCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLXByaW1hcnkvMTAgdGV4dC1wcmltYXJ5IGZvbnQtYm9sZCB0ZXh0LXNtIHNoYWRvdy1zbSBtYi02XFxcIj5cXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cXFwidy0yIGgtMiByb3VuZGVkLWZ1bGwgYmctc2Vjb25kYXJ5XFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICBMb2NhdGlvbnNcXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XFxcInRleHQtNHhsIG1kOnRleHQtNXhsIGZvbnQtbWVkaXVtIHRleHQtcHJpbWFyeSBtYi0yIHRyYWNraW5nLXRpZ2h0ZXJcXFwiPldoZXJlIFRvIEZpbmQgVXM8L2gyPlxcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XFxcInRleHQtbGcgdGV4dC1wcmltYXJ5LzYwXFxcIj5cXG4gICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldC5cXG4gICAgICAgICAgPC9wPlxcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxcblxcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImdyaWQgbGc6Z3JpZC1jb2xzLTIgZ2FwLTEyIGl0ZW1zLWNlbnRlclxcXCI+XFxuICAgICAgICAgICA8bW90aW9uLmRpdiBcXG4gICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB4OiAtMjAgfX1cXG4gICAgICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeDogMCB9fVxcbiAgICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XFxuICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNiB9fVxcbiAgICAgICAgICAgICBjbGFzc05hbWU9XFxcInNwYWNlLXktOFxcXCJcXG4gICAgICAgICAgID5cXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJmbGV4IGdhcC02XFxcIj5cXG4gICAgICAgICAgICAgICAgIDxNYXBQaW4gY2xhc3NOYW1lPVxcXCJ3LTggaC04IHRleHQtc2Vjb25kYXJ5IHNocmluay0wXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XFxcInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LXByaW1hcnkgbWItMlxcXCI+T2ZmaWNlPC9oMz5cXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cXFwidGV4dC1sZyB0ZXh0LXByaW1hcnkvNzAgbWItNFxcXCI+MTIzIFNhbXBsZSBTdCwgU3lkbmV5IE5TVyAyMDAwIEFVPC9wPlxcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwiZmxleCBnYXAtNlxcXCI+XFxuICAgICAgICAgICAgICAgICA8UGhvbmUgY2xhc3NOYW1lPVxcXCJ3LTggaC04IHRleHQtc2Vjb25kYXJ5IHNocmluay0wXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XFxcInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LXByaW1hcnkgbWItMlxcXCI+UGhvbmU8L2gzPlxcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVxcXCJ0ZXh0LWxnIHRleHQtcHJpbWFyeS83MFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgIDxhXFxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cXFwidGVsOisxNzI3NTEwNTQ1NFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XFxcInVuZGVybGluZSB1bmRlcmxpbmUtb2Zmc2V0LTQgZGVjb3JhdGlvbi1wcmltYXJ5LzI1IGhvdmVyOmRlY29yYXRpb24tcHJpbWFyeS82MCB0cmFuc2l0aW9uLWNvbG9yc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cXFwibGluay1waG9uZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICg3MjcpIDUxMC01NDU0XFxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwiZmxleCBnYXAtNlxcXCI+XFxuICAgICAgICAgICAgICAgICA8TWFpbCBjbGFzc05hbWU9XFxcInctOCBoLTggdGV4dC1zZWNvbmRhcnkgc2hyaW5rLTBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cXFwidGV4dC0yeGwgZm9udC1ib2xkIHRleHQtcHJpbWFyeSBtYi0yXFxcIj5FbWFpbDwvaDM+XFxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XFxcInRleHQtbGcgdGV4dC1wcmltYXJ5LzcwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgPGFcXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVxcXCJtYWlsdG86aGVsbG9AdGVudGhyb2NrLmNvbVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XFxcInVuZGVybGluZSB1bmRlcmxpbmUtb2Zmc2V0LTQgZGVjb3JhdGlvbi1wcmltYXJ5LzI1IGhvdmVyOmRlY29yYXRpb24tcHJpbWFyeS82MCB0cmFuc2l0aW9uLWNvbG9yc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cXFwibGluay1lbWFpbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbGxvQHRlbnRocm9jay5jb21cXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgIDwvbW90aW9uLmRpdj5cXG5cXG4gICAgICAgICAgIDxtb3Rpb24uZGl2IFxcbiAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHg6IDIwIH19XFxuICAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHg6IDAgfX1cXG4gICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxcbiAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjYgfX1cXG4gICAgICAgICAgICAgY2xhc3NOYW1lPVxcXCJoLVs2MDBweF0gb3ZlcmZsb3ctdmlzaWJsZSByZWxhdGl2ZSBiZy13aGl0ZVxcXCJcXG4gICAgICAgICAgID5cXG4gICAgICAgICAgICAgIHsvKiBNYXAgKi99XFxuICAgICAgICAgICAgICA8dmlkZW8gXFxuICAgICAgICAgICAgICAgIHNyYz17bWFwVmlkZW99IFxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XFxcInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvbnRhaW4gc2NhbGUtMTEwIGJnLXdoaXRlXFxcIiBcXG4gICAgICAgICAgICAgICAgYXV0b1BsYXkgXFxuICAgICAgICAgICAgICAgIGxvb3AgXFxuICAgICAgICAgICAgICAgIG11dGVkIFxcbiAgICAgICAgICAgICAgICBwbGF5c0lubGluZVxcbiAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cXFwidmlkZW8tY292ZXJhZ2UtbWFwXFxcIlxcbiAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgIDwvbW90aW9uLmRpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L3NlY3Rpb24+XFxuICApO1xcbn07XFxuXFxuLy8gRmluYWwgQ1RBIChTcGxpdCBMYXlvdXQgd2l0aCBWaXN1YWwpXFxuY29uc3QgRmluYWxDdGEgPSAoKSA9PiB7XFxuICByZXR1cm4gKFxcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XFxcInB5LTE2IGJnLXdoaXRlXFxcIj5cXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbWQ6cHgtOFxcXCI+XFxuICAgICAgICAgIDxtb3Rpb24uZGl2IFxcbiAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogNDAgfX1cXG4gICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XFxuICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxcbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuOCB9fVxcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cXFwicmVsYXRpdmUgYmctWyMwNDI5NDBdIHJvdW5kZWQtWzVweF0gb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy0yeGwgZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvd1xcXCJcXG4gICAgICAgICAgPlxcbiAgICAgICAgICAgICB7LyogQ29udGVudCBTaWRlICovfVxcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwibGc6dy0xLzIgcC0xMCBtZDpwLTE0IGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgcmVsYXRpdmUgei0xMFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIHctWzQwMHB4XSBoLVs0MDBweF0gYmctWyNjNWQ1MjBdLzEwIHJvdW5kZWQtZnVsbCBibHVyLVsxMDBweF0gcG9pbnRlci1ldmVudHMtbm9uZSAtdHJhbnNsYXRlLXktMS8yIHRyYW5zbGF0ZS14LTEvMlxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVxcXCJ0ZXh0LTR4bCBtZDp0ZXh0LTV4bCBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIG1iLTQgbGVhZGluZy1bMS4xXSB0cmFja2luZy10aWdodGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICBTdHJlYW1saW5lIFlvdXIgPHNwYW4gY2xhc3NOYW1lPVxcXCJ0ZXh0LVsjYzVkNTIwXVxcXCI+V2FzdGUgTWFuYWdlbWVudDwvc3Bhbj4mbmJzcDtUb2RheVxcbiAgICAgICAgICAgICAgICA8L2gyPlxcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XFxcInRleHQtd2hpdGUvODAgdGV4dC1sZyBmb250LW1lZGl1bSBtYi04IG1heC13LWxnIGxlYWRpbmctcmVsYXhlZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgIEpvaW4gdGhvdXNhbmRzIG9mIGJ1c2luZXNzZXMgb3B0aW1pemluZyB0aGVpciBkaXNwb3NhbCBjb3N0cyBhbmQgc3VzdGFpbmFiaWxpdHkgd2l0aCBUZW50aCBSb2NrLiBPbmUgcGFydG5lciwgemVybyBoZWFkYWNoZXMuXFxuICAgICAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGdhcC00XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVxcXCJsZ1xcXCIgY2xhc3NOYW1lPVxcXCJiZy1bI2M1ZDUyMF0gdGV4dC1bIzA0Mjk0MF0gaG92ZXI6YmctWyNkNmQ5OGJdIHNoYWRvdy1sZyBob3ZlcjpzY2FsZS0xMDUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgUmVxdWVzdCBhIFNlcnZpY2VcXG4gICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgey8qIEltYWdlIFNpZGUgKi99XFxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJsZzp3LTEvMiByZWxhdGl2ZSBtaW4taC1bMzAwcHhdIGxnOm1pbi1oLWZ1bGxcXFwiPlxcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nQ3ljbGlzdH0gYWx0PVxcXCJSZWFkeSB0byBzdGFydFxcXCIgY2xhc3NOYW1lPVxcXCJhYnNvbHV0ZSBpbnNldC0wIHctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwiYWJzb2x1dGUgaW5zZXQtMCBiZy1bIzA0Mjk0MF0vMjAgbWl4LWJsZW5kLW11bHRpcGx5XFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tciBmcm9tLVsjMDQyOTQwXSB0by10cmFuc3BhcmVudCBsZzp2aWEtWyMwNDI5NDBdLzUwXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgIHsvKiBGbG9hdGluZyBTdGF0IENhcmQgKi99XFxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxcbiAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgc2NhbGU6IDAuOCB9fVxcbiAgICAgICAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHNjYWxlOiAxIH19XFxuICAgICAgICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDAuNSwgZHVyYXRpb246IDAuNCB9fVxcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cXFwiYWJzb2x1dGUgYm90dG9tLTEyIHJpZ2h0LTEyIGJnLXdoaXRlLzEwIGJhY2tkcm9wLWJsdXItbWQgYm9yZGVyIGJvcmRlci13aGl0ZS8yMCBwLTYgcm91bmRlZC1bNXB4XSBtYXgtdy14cyBoaWRkZW4gbWQ6YmxvY2sgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDBcXFwiXFxuICAgICAgICAgICAgICAgID5cXG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImZsZXggaXRlbXMtY2VudGVyIGdhcC00XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcInctMTIgaC0xMiBiZy1bI2M1ZDUyMF0gcm91bmRlZC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtWyMwNDI5NDBdIHNocmluay0wXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgPFBob25lIGNsYXNzTmFtZT1cXFwidy02IGgtNlxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJ0ZXh0LVsjYzVkNTIwXSB0ZXh0LXhsIGZvbnQtYm9sZFxcXCI+KDg4OCkgNTU1LTAxMjM8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XFxuICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L21vdGlvbi5kaXY+XFxuICAgICAgIDwvZGl2PlxcbiAgICA8L3NlY3Rpb24+XFxuICApO1xcbn07XFxuXFxuLy8gRm9vdGVyIChNb2Rlcm4gRGFyaylcXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XFxuICByZXR1cm4gKFxcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cXFwiYmctWyMwNDI5NDBdIHRleHQtd2hpdGUgcHktMjAgYm9yZGVyLXQgYm9yZGVyLXdoaXRlLzVcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJjb250YWluZXIgbXgtYXV0byBweC00IG1kOnB4LThcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImdyaWQgbGc6Z3JpZC1jb2xzLTQgZ2FwLTEyIGxnOmdhcC04IG1iLTE2XFxcIj5cXG4gICAgICAgICAgXFxuICAgICAgICAgIHsvKiBCcmFuZCBDb2x1bW4gKi99XFxuICAgICAgICAgIDxtb3Rpb24uZGl2IFxcbiAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cXG4gICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XFxuICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxcbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSB9fVxcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cXFwic3BhY2UteS04XFxcIlxcbiAgICAgICAgICA+XFxuICAgICAgICAgICAgPExvZ28gdmFyaWFudD1cXFwid2hpdGVcXFwiIC8+XFxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVxcXCJ0ZXh0LXdoaXRlLzYwIGxlYWRpbmctcmVsYXhlZCBtYXgtdy14c1xcXCI+XFxuICAgICAgICAgICAgICBSZWRlZmluaW5nIGNvbW1lcmNpYWwgd2FzdGUgbWFuYWdlbWVudCB3aXRoIHNwZWVkLCB0cmFuc3BhcmVuY3ksIGFuZCByZWxpYWJpbGl0eSBhY3Jvc3MgYWxsIDUwIHN0YXRlcy5cXG4gICAgICAgICAgICA8L3A+XFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImZsZXggZ2FwLTRcXFwiPlxcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsIGJnLXdoaXRlLzUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaG92ZXI6YmctWyNjNWQ1MjBdIGhvdmVyOnRleHQtWyMwNDI5NDBdIHRyYW5zaXRpb24tY29sb3JzIGN1cnNvci1wb2ludGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgIDxMaW5rZWRpbiBjbGFzc05hbWU9XFxcInctNSBoLTVcXFwiIC8+XFxuICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcInctMTAgaC0xMCByb3VuZGVkLWZ1bGwgYmctd2hpdGUvNSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBob3ZlcjpiZy1bI2M1ZDUyMF0gaG92ZXI6dGV4dC1bIzA0Mjk0MF0gdHJhbnNpdGlvbi1jb2xvcnMgY3Vyc29yLXBvaW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgPFR3aXR0ZXIgY2xhc3NOYW1lPVxcXCJ3LTUgaC01XFxcIiAvPlxcbiAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsIGJnLXdoaXRlLzUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaG92ZXI6YmctWyNjNWQ1MjBdIGhvdmVyOnRleHQtWyMwNDI5NDBdIHRyYW5zaXRpb24tY29sb3JzIGN1cnNvci1wb2ludGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgIDxJbnN0YWdyYW0gY2xhc3NOYW1lPVxcXCJ3LTUgaC01XFxcIiAvPlxcbiAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsIGJnLXdoaXRlLzUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaG92ZXI6YmctWyNjNWQ1MjBdIGhvdmVyOnRleHQtWyMwNDI5NDBdIHRyYW5zaXRpb24tY29sb3JzIGN1cnNvci1wb2ludGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgIDxGYWNlYm9vayBjbGFzc05hbWU9XFxcInctNSBoLTVcXFwiIC8+XFxuICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cXG4gICAgICAgICAgXFxuICAgICAgICAgIHsvKiBTZXJ2aWNlcyBDb2x1bW4gKi99XFxuICAgICAgICAgIDxtb3Rpb24uZGl2XFxuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMCB9fVxcbiAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cXG4gICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XFxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41LCBkZWxheTogMC4xIH19XFxuICAgICAgICAgID5cXG4gICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cXFwiZm9udC1ib2xkIHRleHQtbGcgbWItNiB0ZXh0LXdoaXRlXFxcIj5TZXJ2aWNlczwvaDQ+XFxuICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XFxcInNwYWNlLXktNCB0ZXh0LXdoaXRlLzYwXFxcIj5cXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzTmFtZT1cXFwiaG92ZXI6dGV4dC1bI2M1ZDUyMF0gdHJhbnNpdGlvbi1jb2xvcnNcXFwiPldhc3RlIFJlbW92YWw8L2E+PC9saT5cXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzTmFtZT1cXFwiaG92ZXI6dGV4dC1bI2M1ZDUyMF0gdHJhbnNpdGlvbi1jb2xvcnNcXFwiPkR1bXBzdGVyIFJlbnRhbHM8L2E+PC9saT5cXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzTmFtZT1cXFwiaG92ZXI6dGV4dC1bI2M1ZDUyMF0gdHJhbnNpdGlvbi1jb2xvcnNcXFwiPlJlY3ljbGluZyBQcm9ncmFtczwvYT48L2xpPlxcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCIgY2xhc3NOYW1lPVxcXCJob3Zlcjp0ZXh0LVsjYzVkNTIwXSB0cmFuc2l0aW9uLWNvbG9yc1xcXCI+RW1lcmdlbmN5IENsZWFudXBzPC9hPjwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIiBjbGFzc05hbWU9XFxcImhvdmVyOnRleHQtWyNjNWQ1MjBdIHRyYW5zaXRpb24tY29sb3JzXFxcIj5Db21wbGlhbmNlIEF1ZGl0czwvYT48L2xpPlxcbiAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICA8L21vdGlvbi5kaXY+XFxuXFxuICAgICAgICAgIHsvKiBDb21wYW55IENvbHVtbiAqL31cXG4gICAgICAgICAgPG1vdGlvbi5kaXZcXG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19XFxuICAgICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxcbiAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cXG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUsIGRlbGF5OiAwLjIgfX1cXG4gICAgICAgICAgPlxcbiAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVxcXCJmb250LWJvbGQgdGV4dC1sZyBtYi02IHRleHQtd2hpdGVcXFwiPkNvbXBhbnk8L2g0PlxcbiAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVxcXCJzcGFjZS15LTQgdGV4dC13aGl0ZS82MFxcXCI+XFxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIiBjbGFzc05hbWU9XFxcImhvdmVyOnRleHQtWyNjNWQ1MjBdIHRyYW5zaXRpb24tY29sb3JzXFxcIj5BYm91dCBVczwvYT48L2xpPlxcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCIgY2xhc3NOYW1lPVxcXCJob3Zlcjp0ZXh0LVsjYzVkNTIwXSB0cmFuc2l0aW9uLWNvbG9yc1xcXCI+Q2FyZWVyczwvYT48L2xpPlxcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCIgY2xhc3NOYW1lPVxcXCJob3Zlcjp0ZXh0LVsjYzVkNTIwXSB0cmFuc2l0aW9uLWNvbG9yc1xcXCI+U3VjY2VzcyBTdG9yaWVzPC9hPjwvbGk+XFxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVxcXCIjXFxcIiBjbGFzc05hbWU9XFxcImhvdmVyOnRleHQtWyNjNWQ1MjBdIHRyYW5zaXRpb24tY29sb3JzXFxcIj5QYXJ0bmVyIFByb2dyYW08L2E+PC9saT5cXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzTmFtZT1cXFwiaG92ZXI6dGV4dC1bI2M1ZDUyMF0gdHJhbnNpdGlvbi1jb2xvcnNcXFwiPkNvbnRhY3Q8L2E+PC9saT5cXG4gICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxcblxcbiAgICAgICAgICB7LyogTmV3c2xldHRlci9Db250YWN0IENvbHVtbiAqL31cXG4gICAgICAgICAgPG1vdGlvbi5kaXYgXFxuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMCB9fVxcbiAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cXG4gICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XFxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41LCBkZWxheTogMC4zIH19XFxuICAgICAgICAgICAgY2xhc3NOYW1lPVxcXCJzcGFjZS15LTZcXFwiXFxuICAgICAgICAgID5cXG4gICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cXFwiZm9udC1ib2xkIHRleHQtbGcgdGV4dC13aGl0ZVxcXCI+U3RheSBVcGRhdGVkPC9oND5cXG4gICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVxcXCJ0ZXh0LXdoaXRlLzYwXFxcIj5cXG4gICAgICAgICAgICAgICAgR2V0IHRoZSBsYXRlc3QgaW5kdXN0cnkgaW5zaWdodHMgYW5kIGNvbXBsaWFuY2UgdXBkYXRlcy5cXG4gICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cXFwiZmxleCBnYXAtMlxcXCI+XFxuICAgICAgICAgICAgICAgIDxJbnB1dCBcXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgeW91ciBlbWFpbFxcXCIgXFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVxcXCJiZy13aGl0ZS81IGJvcmRlci13aGl0ZS8xMCB0ZXh0LXdoaXRlIHBsYWNlaG9sZGVyOnRleHQtd2hpdGUvMzAgaC0xNCBmb2N1cy12aXNpYmxlOnJpbmctWyNjNWQ1MjBdIHJvdW5kZWQtZnVsbCBweC02XFxcIiBcXG4gICAgICAgICAgICAgICAgLz5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVxcXCJsZ1xcXCIgY2xhc3NOYW1lPVxcXCJiZy1bI2M1ZDUyMF0gaG92ZXI6YmctWyNkNmQ5OGJdIHRleHQtWyMwNDI5NDBdXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgPEFycm93UmlnaHQgY2xhc3NOYW1lPVxcXCJ3LTUgaC01XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cXG4gICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJwdC00IGJvcmRlci10IGJvcmRlci13aGl0ZS8xMCBtdC02XFxcIj5cXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVxcXCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIG1iLTJcXFwiPk5lZWQgSW1tZWRpYXRlIEhlbHA/PC9wPlxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCJ0ZWw6ODg4NTU1MDEyM1xcXCIgY2xhc3NOYW1lPVxcXCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LVsjYzVkNTIwXSBob3Zlcjp1bmRlcmxpbmVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAoODg4KSA1NTUtMDEyM1xcbiAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICA8L21vdGlvbi5kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIFxcbiAgICAgICAgPFNlcGFyYXRvciBjbGFzc05hbWU9XFxcImJnLXdoaXRlLzEwIG1iLThcXFwiIC8+XFxuICAgICAgICBcXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVxcXCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC1zbSB0ZXh0LXdoaXRlLzQwXFxcIj5cXG4gICAgICAgICAgIDxwPsKpIDIwMjYgVGVudGggUm9jayBTb2x1dGlvbnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuPC9wPlxcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XFxcImZsZXggZ2FwLTggbXQtNCBtZDptdC0wXFxcIj5cXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzTmFtZT1cXFwiaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9yc1xcXCI+UHJpdmFjeSBQb2xpY3k8L2E+XFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzc05hbWU9XFxcImhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnNcXFwiPlRlcm1zIG9mIFNlcnZpY2U8L2E+XFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzc05hbWU9XFxcImhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnNcXFwiPkNvb2tpZSBTZXR0aW5nczwvYT5cXG4gICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZm9vdGVyPlxcbiAgKTtcXG59O1xcblxcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XFxuICByZXR1cm4gKFxcbiAgICA8ZGl2IGNsYXNzTmFtZT1cXFwibWluLWgtc2NyZWVuIGJnLVsjRjlGOUY2XSBmb250LXNhbnMgdGV4dC1wcmltYXJ5IHNlbGVjdGlvbjpiZy1zZWNvbmRhcnkgc2VsZWN0aW9uOnRleHQtcHJpbWFyeVxcXCI+XFxuICAgICAgPE5hdmJhciAvPlxcbiAgICAgIDxIZXJvIC8+XFxuICAgICAgPExvZ29MaXN0IC8+XFxuICAgICAgPFNlcnZpY2VzU2VjdGlvbiAvPlxcbiAgICAgIDxXaG9XZUhlbHAgLz5cXG4gICAgICA8Q3RhQmFubmVyIC8+XFxuICAgICAgPFByb2Nlc3MgLz5cXG4gICAgICA8Q2FzZVN0dWR5U2VjdGlvbiAvPlxcbiAgICAgIDxSZWFzb25zIC8+XFxuICAgICAgPFN0YXRzIC8+XFxuICAgICAgPFRlc3RpbW9uaWFscyAvPlxcbiAgICAgIDxGYXEgLz5cXG4gICAgICA8TG9jYXRpb24gLz5cXG4gICAgICA8RmluYWxDdGEgLz5cXG4gICAgICA8Rm9vdGVyIC8+XFxuICAgIDwvZGl2PlxcbiAgKTtcXG59XFxuXCIiXSwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3Jrc3BhY2UvY2xpZW50L3NyYy9wYWdlcy9ob21lLnRzeCJ9
_c12 = Home;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;
__turbopack_context__.k.register(_c, "Logo");
__turbopack_context__.k.register(_c1, "Hero");
__turbopack_context__.k.register(_c2, "Counter");
__turbopack_context__.k.register(_c3, "SimpleNumbers");
__turbopack_context__.k.register(_c4, "LogoList");
__turbopack_context__.k.register(_c5, "ServicesSection");
__turbopack_context__.k.register(_c6, "WhyUs");
__turbopack_context__.k.register(_c7, "Reasons");
__turbopack_context__.k.register(_c8, "Stats");
__turbopack_context__.k.register(_c9, "Testimonials");
__turbopack_context__.k.register(_c10, "Faq");
__turbopack_context__.k.register(_c11, "Location");
__turbopack_context__.k.register(_c12, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_eb855007._.js.map
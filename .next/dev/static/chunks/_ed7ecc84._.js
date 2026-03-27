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
"[project]/components/ui/phone-input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhoneInput",
    ()=>PhoneInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function formatPhoneNumber(value) {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (digits.length === 0) return "";
    if (digits.length <= 3) return `(${digits}`;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}
const PhoneInput = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s(({ className, value: controlledValue, onChange, ...props }, ref)=>{
    _s();
    const [internalValue, setInternalValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const displayValue = controlledValue !== undefined ? controlledValue : internalValue;
    const handleChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PhoneInput.useCallback[handleChange]": (e)=>{
            const formatted = formatPhoneNumber(e.target.value);
            if (controlledValue === undefined) {
                setInternalValue(formatted);
            }
            onChange?.(formatted);
        }
    }["PhoneInput.useCallback[handleChange]"], [
        controlledValue,
        onChange
    ]);
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PhoneInput.useCallback[handleKeyDown]": (e)=>{
            if (e.key === "Backspace" && displayValue.length > 0) {
                e.preventDefault();
                const digits = displayValue.replace(/\D/g, "");
                const newDigits = digits.slice(0, -1);
                const formatted = formatPhoneNumber(newDigits);
                if (controlledValue === undefined) {
                    setInternalValue(formatted);
                }
                onChange?.(formatted);
            }
        }
    }["PhoneInput.useCallback[handleKeyDown]"], [
        displayValue,
        controlledValue,
        onChange
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute left-3 top-1/2 -translate-y-1/2 text-[#042940]/70 text-sm font-medium select-none pointer-events-none",
                children: "+1"
            }, void 0, false, {
                fileName: "[project]/components/ui/phone-input.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                ref: ref,
                type: "tel",
                inputMode: "numeric",
                value: displayValue,
                onChange: handleChange,
                onKeyDown: handleKeyDown,
                placeholder: "(555) 000-0000",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pl-10", className),
                ...props
            }, void 0, false, {
                fileName: "[project]/components/ui/phone-input.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/phone-input.tsx",
        lineNumber: 53,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
}, "EA0m9J251V/a89QlunFnAOtohgY=")), "EA0m9J251V/a89QlunFnAOtohgY=");
_c1 = PhoneInput;
PhoneInput.displayName = "PhoneInput";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "PhoneInput$forwardRef");
__turbopack_context__.k.register(_c1, "PhoneInput");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
const logoMain = "/images/logos/TenthRock-Logo.png";
const logoWhite = "/images/logos/Green-White-Logo.png";
function Logo({ className = "", variant = "main" }) {
    const logoSrc = variant === "main" ? logoMain : logoWhite;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center gap-2 ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: logoSrc,
            alt: "Tenth Rock Waste Solutions",
            width: 160,
            height: 40,
            className: "h-8 md:h-10 w-auto max-w-[160px] sm:max-w-[200px] md:max-w-none object-contain",
            loading: "eager",
            priority: true
        }, void 0, false, {
            fileName: "[project]/components/shared/Logo.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/shared/Logo.tsx",
        lineNumber: 17,
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
const serviceCategories = [
    {
        label: "Emergency Waste Removal",
        href: "/services/emergency-waste-removal",
        subServices: [
            {
                label: "Emergency Product & Perishable Removal",
                href: "/services/emergency-product-removal"
            },
            {
                label: "Temporary Capacity & Site Stabilization",
                href: "/services/site-stabilization"
            },
            {
                label: "Unplanned Cleanouts & Debris Removal",
                href: "/services/unplanned-cleanouts"
            }
        ]
    },
    {
        label: "Specialized Project Logistics",
        href: "/services/specialized-project-logistics",
        subServices: [
            {
                label: "Site Closures & Remodels",
                href: "/services/site-closures-remodels"
            },
            {
                label: "Events & Stadiums",
                href: "/services/events-stadiums"
            },
            {
                label: "Natural Disaster Mobilization",
                href: "/services/natural-disaster-mobilization"
            }
        ]
    },
    {
        label: "Dumpsters & Temporary Containers",
        href: "/services/dumpsters-containers",
        subServices: [
            {
                label: "On-Demand Service",
                href: "/services/on-demand-service"
            },
            {
                label: "Multiple Sizes",
                href: "/services/multiple-sizes"
            },
            {
                label: "Recycling & Specialty Containers",
                href: "/services/recycling-specialty-containers"
            }
        ]
    },
    {
        label: "Waste Operations Advisory & Enablement",
        href: "/services/waste-operations-advisory",
        subServices: [
            {
                label: "Waste Program Assessments & Roadmaps",
                href: "/services/waste-program-assessments"
            },
            {
                label: "Standards, SOPs & Vendor Training",
                href: "/services/standards-sops-training"
            },
            {
                label: "Ongoing Advisory & Program Implementation",
                href: "/services/ongoing-advisory"
            }
        ]
    }
];
const sectorLinks = [
    {
        label: "Retail",
        href: "/industries/retail"
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
        label: "Real Estate",
        href: "/industries/real-estate"
    },
    {
        label: "Natural Disasters",
        href: "/industries/natural-disasters"
    },
    {
        label: "Hospitality",
        href: "/industries/hospitality"
    },
    {
        label: "Educational",
        href: "/industries/educational"
    },
    {
        label: "Municipalities",
        href: "/industries/municipalities"
    }
];
const locationLinks = [
    "Alabama",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
].map((state)=>({
        label: state,
        href: `/locations/${state.toLowerCase().replace(/\s+/g, "-")}`
    }));
const aboutLinks = [
    {
        label: "About Us",
        href: "/about"
    },
    {
        label: "Join Our Network",
        href: "/join-our-network"
    },
    {
        label: "FAQ",
        href: "/faq"
    },
    {
        label: "Contact Us",
        href: "/contact"
    }
];
function Navbar({ variant = "floating" }) {
    _s();
    const [isNavExpanded, setIsNavExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isServicesOpen, setIsServicesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSectorsOpen, setIsSectorsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLocationsOpen, setIsLocationsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAboutOpen, setIsAboutOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isFloating = variant === "floating";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: isFloating ? "fixed top-6 left-0 right-0 z-50 px-4 md:px-8" : "sticky top-0 z-50 px-4 md:px-8 py-3 bg-white/95 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `container mx-auto max-w-[92rem] ${isFloating ? "bg-white rounded-[5px] shadow-lg px-3 sm:px-6 py-3" : "px-0"}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between gap-2 sm:gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "hover:opacity-90 transition-opacity shrink-0",
                            "data-testid": "link-nav-home",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                variant: "main"
                            }, void 0, false, {
                                fileName: "[project]/components/shared/Navbar.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/shared/Navbar.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 xl:hidden shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    asChild: true,
                                    size: "sm",
                                    className: "bg-[#c5d520] text-[#042940] font-bold text-sm whitespace-nowrap rounded-full px-3 sm:px-4 uppercase",
                                    "data-testid": "button-mobile-cta",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/request-a-service",
                                        children: "Request A Service"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/Navbar.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Navbar.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "p-3 text-primary rounded-[5px] transition-colors flex items-center justify-center min-w-[44px] min-h-[44px]",
                                    onClick: ()=>setIsNavExpanded(!isNavExpanded),
                                    "aria-expanded": isNavExpanded,
                                    "aria-label": "Toggle navigation menu",
                                    "data-testid": "button-nav-toggle",
                                    children: isNavExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/Navbar.tsx",
                                        lineNumber: 124,
                                        columnNumber: 32
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/Navbar.tsx",
                                        lineNumber: 124,
                                        columnNumber: 60
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Navbar.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/Navbar.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden xl:flex items-center gap-6 flex-1 justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    onMouseEnter: ()=>{
                                        setIsServicesOpen(true);
                                        setIsSectorsOpen(false);
                                        setIsLocationsOpen(false);
                                        setIsAboutOpen(false);
                                    },
                                    onMouseLeave: ()=>setIsServicesOpen(false),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-1 min-h-[44px]",
                                            "data-testid": "button-nav-services",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/services/commercial-waste",
                                                    className: "text-sm font-bold text-primary hover:text-[#c5d520] active:text-[#c5d520] transition-colors",
                                                    "data-testid": "link-nav-services",
                                                    children: "Commercial Waste Services"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    "aria-haspopup": "menu",
                                                    "aria-expanded": isServicesOpen,
                                                    onClick: ()=>setIsServicesOpen((v)=>!v),
                                                    className: "p-1 hover:text-[#c5d520] transition-colors",
                                                    "aria-label": "Toggle services menu",
                                                    "data-testid": "button-nav-services-toggle",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: `w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/shared/Navbar.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/shared/Navbar.tsx",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            children: isServicesOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 8
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                exit: {
                                                    opacity: 0,
                                                    y: 8
                                                },
                                                transition: {
                                                    duration: 0.18,
                                                    ease: "easeOut"
                                                },
                                                className: "fixed left-0 right-0 top-[96px] z-50 px-4 md:px-8",
                                                role: "menu",
                                                "data-testid": "menu-nav-services",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "container mx-auto max-w-[92rem] bg-[#042940] rounded-[5px] shadow-2xl px-8 py-10",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-4 gap-8",
                                                        children: serviceCategories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-3 px-3 py-3 text-sm font-bold text-white min-h-[44px]",
                                                                        "data-testid": `label-nav-services-${category.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                                className: "w-3.5 h-3.5 text-[#c5d520] flex-shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/shared/Navbar.tsx",
                                                                                lineNumber: 178,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: category.label
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/shared/Navbar.tsx",
                                                                                lineNumber: 179,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/shared/Navbar.tsx",
                                                                        lineNumber: 174,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    category.subServices.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: sub.href,
                                                                            "data-testid": `link-nav-services-${sub.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
                                                                            className: "group flex items-center gap-3 rounded-[5px] pl-7 pr-3 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 active:bg-white/5 transition-colors min-h-[40px]",
                                                                            onClick: ()=>setIsServicesOpen(false),
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: sub.label
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/shared/Navbar.tsx",
                                                                                lineNumber: 189,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, sub.label, false, {
                                                                            fileName: "[project]/components/shared/Navbar.tsx",
                                                                            lineNumber: 182,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                ]
                                                            }, category.label, true, {
                                                                fileName: "[project]/components/shared/Navbar.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/shared/Navbar.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Navbar.tsx",
                                                lineNumber: 161,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Navbar.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/Navbar.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    onMouseEnter: ()=>{
                                        setIsSectorsOpen(true);
                                        setIsServicesOpen(false);
                                        setIsLocationsOpen(false);
                                        setIsAboutOpen(false);
                                    },
                                    onMouseLeave: ()=>setIsSectorsOpen(false),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-1 min-h-[44px]",
                                            "data-testid": "button-nav-sectors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "/who-we-serve",
                                                    className: "text-sm font-bold text-primary hover:text-[#c5d520] active:text-[#c5d520] transition-colors",
                                                    "data-testid": "link-nav-who-we-serve",
                                                    children: "Who We Serve"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    "aria-haspopup": "menu",
                                                    "aria-expanded": isSectorsOpen,
                                                    onClick: ()=>setIsSectorsOpen((v)=>!v),
                                                    className: "p-1 hover:text-[#c5d520] transition-colors",
                                                    "aria-label": "Toggle sectors menu",
                                                    "data-testid": "button-nav-sectors-toggle",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: `w-4 h-4 transition-transform ${isSectorsOpen ? "rotate-180" : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/shared/Navbar.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/shared/Navbar.tsx",
                                            lineNumber: 207,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            children: isSectorsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 8
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                exit: {
                                                    opacity: 0,
                                                    y: 8
                                                },
                                                transition: {
                                                    duration: 0.18,
                                                    ease: "easeOut"
                                                },
                                                className: "fixed left-0 right-0 top-[96px] z-50 px-4 md:px-8",
                                                role: "menu",
                                                "data-testid": "menu-nav-sectors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "container mx-auto max-w-[92rem] bg-[#042940] rounded-[5px] shadow-2xl px-8 py-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 pb-4 mb-6 border-b border-white/10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-1.5 h-1.5 rounded-full bg-[#c5d520]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                                    lineNumber: 244,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[11px] font-extrabold tracking-[0.18em] uppercase text-[#c5d520]/80",
                                                                    children: "Industries We Serve"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                                    lineNumber: 245,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/shared/Navbar.tsx",
                                                            lineNumber: 243,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-4 gap-x-8 gap-y-1",
                                                            children: sectorLinks.map((sector)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: sector.href,
                                                                    "data-testid": `link-nav-sectors-${sector.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
                                                                    className: "group flex items-center gap-3 rounded-[5px] px-3 py-3 text-sm font-semibold text-white/80 hover:text-white hover:bg-white/5 active:bg-white/5 transition-colors min-h-[44px]",
                                                                    onClick: ()=>setIsSectorsOpen(false),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                            className: "w-3.5 h-3.5 text-[#c5d520]/50 group-hover:text-[#c5d520] transition-colors flex-shrink-0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/shared/Navbar.tsx",
                                                                            lineNumber: 258,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: sector.label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/shared/Navbar.tsx",
                                                                            lineNumber: 259,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, sector.label, true, {
                                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                                    lineNumber: 251,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/shared/Navbar.tsx",
                                                            lineNumber: 249,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Navbar.tsx",
                                                lineNumber: 233,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Navbar.tsx",
                                            lineNumber: 231,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/Navbar.tsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    onMouseEnter: ()=>{
                                        setIsLocationsOpen(true);
                                        setIsServicesOpen(false);
                                        setIsSectorsOpen(false);
                                        setIsAboutOpen(false);
                                    },
                                    onMouseLeave: ()=>setIsLocationsOpen(false),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-1 min-h-[44px]",
                                            "data-testid": "button-nav-locations",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/locations",
                                                    className: "text-sm font-bold text-primary hover:text-[#c5d520] active:text-[#c5d520] transition-colors",
                                                    "data-testid": "link-nav-locations",
                                                    children: "Locations"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                    lineNumber: 279,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    "aria-haspopup": "menu",
                                                    "aria-expanded": isLocationsOpen,
                                                    onClick: ()=>setIsLocationsOpen((v)=>!v),
                                                    className: "p-1 hover:text-[#c5d520] transition-colors",
                                                    "aria-label": "Toggle locations menu",
                                                    "data-testid": "button-nav-locations-toggle",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: `w-4 h-4 transition-transform ${isLocationsOpen ? "rotate-180" : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/shared/Navbar.tsx",
                                                        lineNumber: 295,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/shared/Navbar.tsx",
                                            lineNumber: 275,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            children: isLocationsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 8
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                exit: {
                                                    opacity: 0,
                                                    y: 8
                                                },
                                                transition: {
                                                    duration: 0.18,
                                                    ease: "easeOut"
                                                },
                                                className: "fixed left-0 right-0 top-[96px] z-50 px-4 md:px-8",
                                                role: "menu",
                                                "data-testid": "menu-nav-locations",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "container mx-auto max-w-[92rem] bg-[#042940] rounded-[5px] shadow-2xl px-8 py-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between pb-4 mb-6 border-b border-white/10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-1.5 h-1.5 rounded-full bg-[#c5d520]"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/shared/Navbar.tsx",
                                                                            lineNumber: 313,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[11px] font-extrabold tracking-[0.18em] uppercase text-[#c5d520]/80",
                                                                            children: "Service Locations"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/shared/Navbar.tsx",
                                                                            lineNumber: 314,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                                    lineNumber: 312,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/locations",
                                                                    className: "text-xs font-bold text-[#c5d520] hover:text-[#c5d520]/80 transition-colors",
                                                                    onClick: ()=>setIsLocationsOpen(false),
                                                                    "data-testid": "link-nav-locations-view-all",
                                                                    children: "View All Locations"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                                    lineNumber: 318,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/shared/Navbar.tsx",
                                                            lineNumber: 311,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-4 gap-x-8",
                                                            children: (()=>{
                                                                const colSize = Math.ceil(locationLinks.length / 4);
                                                                return Array.from({
                                                                    length: 4
                                                                }, (_, colIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-col gap-0.5",
                                                                        children: locationLinks.slice(colIdx * colSize, (colIdx + 1) * colSize).map((loc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                href: loc.href,
                                                                                "data-testid": `link-nav-locations-${loc.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
                                                                                className: "group flex items-center gap-3 rounded-[5px] px-3 py-2 text-sm font-semibold text-white/80 hover:text-white hover:bg-white/5 active:bg-white/5 transition-colors",
                                                                                onClick: ()=>setIsLocationsOpen(false),
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                                        className: "w-3 h-3 text-[#c5d520]/50 group-hover:text-[#c5d520] transition-colors flex-shrink-0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/shared/Navbar.tsx",
                                                                                        lineNumber: 340,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        children: loc.label
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/shared/Navbar.tsx",
                                                                                        lineNumber: 341,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, loc.label, true, {
                                                                                fileName: "[project]/components/shared/Navbar.tsx",
                                                                                lineNumber: 333,
                                                                                columnNumber: 33
                                                                            }, this))
                                                                    }, colIdx, false, {
                                                                        fileName: "[project]/components/shared/Navbar.tsx",
                                                                        lineNumber: 331,
                                                                        columnNumber: 29
                                                                    }, this));
                                                            })()
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/shared/Navbar.tsx",
                                                            lineNumber: 327,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Navbar.tsx",
                                                lineNumber: 301,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Navbar.tsx",
                                            lineNumber: 299,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/Navbar.tsx",
                                    lineNumber: 270,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    onMouseEnter: ()=>{
                                        setIsAboutOpen(true);
                                        setIsServicesOpen(false);
                                        setIsSectorsOpen(false);
                                        setIsLocationsOpen(false);
                                    },
                                    onMouseLeave: ()=>setIsAboutOpen(false),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-1 min-h-[44px]",
                                            "data-testid": "button-nav-about",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "/about",
                                                    className: "text-sm font-bold text-primary hover:text-[#c5d520] active:text-[#c5d520] transition-colors",
                                                    "data-testid": "link-nav-about",
                                                    children: "About Us"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                    lineNumber: 364,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    "aria-haspopup": "menu",
                                                    "aria-expanded": isAboutOpen,
                                                    onClick: ()=>setIsAboutOpen((v)=>!v),
                                                    className: "p-1 hover:text-[#c5d520] transition-colors",
                                                    "aria-label": "Toggle about menu",
                                                    "data-testid": "button-nav-about-toggle",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: `w-4 h-4 transition-transform ${isAboutOpen ? "rotate-180" : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/shared/Navbar.tsx",
                                                        lineNumber: 380,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                    lineNumber: 371,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/shared/Navbar.tsx",
                                            lineNumber: 360,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            children: isAboutOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 8
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                exit: {
                                                    opacity: 0,
                                                    y: 8
                                                },
                                                transition: {
                                                    duration: 0.18,
                                                    ease: "easeOut"
                                                },
                                                className: "fixed left-0 right-0 top-[96px] z-50 px-4 md:px-8",
                                                role: "menu",
                                                "data-testid": "menu-nav-about",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "container mx-auto max-w-[92rem] bg-[#042940] rounded-[5px] shadow-2xl px-8 py-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 pb-4 mb-6 border-b border-white/10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-1.5 h-1.5 rounded-full bg-[#c5d520]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                                    lineNumber: 397,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[11px] font-extrabold tracking-[0.18em] uppercase text-[#c5d520]/80",
                                                                    children: "About Tenth Rock"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                                    lineNumber: 398,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/shared/Navbar.tsx",
                                                            lineNumber: 396,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-4 gap-x-8 gap-y-1",
                                                            children: aboutLinks.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: item.href,
                                                                    "data-testid": `link-nav-about-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
                                                                    className: "group flex items-center gap-3 rounded-[5px] px-3 py-3 text-sm font-semibold text-white/80 hover:text-white hover:bg-white/5 active:bg-white/5 transition-colors min-h-[44px]",
                                                                    onClick: ()=>setIsAboutOpen(false),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                            className: "w-3.5 h-3.5 text-[#c5d520]/50 group-hover:text-[#c5d520] transition-colors flex-shrink-0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/shared/Navbar.tsx",
                                                                            lineNumber: 411,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: item.label
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/shared/Navbar.tsx",
                                                                            lineNumber: 412,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, item.label, true, {
                                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                                    lineNumber: 404,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/shared/Navbar.tsx",
                                                            lineNumber: 402,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                    lineNumber: 395,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Navbar.tsx",
                                                lineNumber: 386,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Navbar.tsx",
                                            lineNumber: 384,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/Navbar.tsx",
                                    lineNumber: 355,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/Navbar.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden xl:flex items-center gap-3 shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "lg",
                                    variant: "ghost",
                                    className: "text-primary font-extrabold transition-colors uppercase tracking-wide text-sm px-2 min-h-[52px] whitespace-nowrap",
                                    "data-testid": "button-desktop-login",
                                    children: "Login"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Navbar.tsx",
                                    lineNumber: 425,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    asChild: true,
                                    size: "lg",
                                    className: "bg-[#c5d520] text-[#042940] shadow-lg shadow-[#c5d520]/20 min-h-[52px] whitespace-nowrap",
                                    "data-testid": "button-desktop-cta",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/request-a-service",
                                        children: "Request A Service"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/Navbar.tsx",
                                        lineNumber: 429,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Navbar.tsx",
                                    lineNumber: 428,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/Navbar.tsx",
                            lineNumber: 424,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/shared/Navbar.tsx",
                    lineNumber: 102,
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
                        className: "xl:hidden overflow-hidden border-t border-gray-100 mt-3",
                        "aria-label": "Mobile navigation",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col pb-4 max-h-[calc(100vh-120px)] overflow-y-auto overscroll-contain",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-b border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between w-full py-3 px-4 min-h-[52px]",
                                            "data-testid": "button-mobile-services",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/services/commercial-waste",
                                                    className: "font-bold text-primary text-[15px] hover:text-[#c5d520] transition-colors flex-1",
                                                    onClick: ()=>setIsNavExpanded(false),
                                                    children: "Commercial Waste Services"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                    lineNumber: 452,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setIsServicesOpen(!isServicesOpen),
                                                    "aria-expanded": isServicesOpen,
                                                    className: "p-3 -mr-1 hover:text-[#c5d520] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center",
                                                    "aria-label": "Toggle services submenu",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: `w-5 h-5 transition-transform ${isServicesOpen ? "rotate-180" : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/shared/Navbar.tsx",
                                                        lineNumber: 466,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                    lineNumber: 459,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/shared/Navbar.tsx",
                                            lineNumber: 448,
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
                                                    className: "pl-4 pb-3 space-y-1",
                                                    children: serviceCategories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-bold text-primary text-[15px] py-3 px-4 min-h-[48px] flex items-center",
                                                                    "data-testid": `label-mobile-services-${category.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
                                                                    children: category.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                                    lineNumber: 481,
                                                                    columnNumber: 31
                                                                }, this),
                                                                category.subServices.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: sub.href,
                                                                        className: "font-medium text-primary/60 text-[14px] py-2.5 pl-8 pr-4 rounded-[5px] hover:bg-[#F9F9F6] active:bg-[#F9F9F6] hover:text-[#c5d520] active:text-[#c5d520] transition-colors min-h-[44px] flex items-center",
                                                                        onClick: ()=>{
                                                                            setIsNavExpanded(false);
                                                                            setIsServicesOpen(false);
                                                                        },
                                                                        "data-testid": `link-mobile-services-${sub.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
                                                                        children: sub.label
                                                                    }, sub.label, false, {
                                                                        fileName: "[project]/components/shared/Navbar.tsx",
                                                                        lineNumber: 488,
                                                                        columnNumber: 33
                                                                    }, this))
                                                            ]
                                                        }, category.label, true, {
                                                            fileName: "[project]/components/shared/Navbar.tsx",
                                                            lineNumber: 480,
                                                            columnNumber: 29
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                    lineNumber: 478,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Navbar.tsx",
                                                lineNumber: 471,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Navbar.tsx",
                                            lineNumber: 469,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/Navbar.tsx",
                                    lineNumber: 447,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-b border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between w-full py-3 px-4 min-h-[52px]",
                                            "data-testid": "button-mobile-sectors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "/who-we-serve",
                                                    className: "font-bold text-primary text-[15px] hover:text-[#c5d520] transition-colors flex-1",
                                                    onClick: ()=>setIsNavExpanded(false),
                                                    children: "Who We Serve"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                    lineNumber: 512,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setIsSectorsOpen(!isSectorsOpen),
                                                    "aria-expanded": isSectorsOpen,
                                                    className: "p-3 -mr-1 hover:text-[#c5d520] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center",
                                                    "aria-label": "Toggle sectors submenu",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: `w-5 h-5 transition-transform ${isSectorsOpen ? "rotate-180" : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/shared/Navbar.tsx",
                                                        lineNumber: 526,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                    lineNumber: 519,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/shared/Navbar.tsx",
                                            lineNumber: 508,
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
                                                    className: "pl-4 pb-3",
                                                    children: sectorLinks.map((sector)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: sector.href,
                                                            className: "font-medium text-primary/80 text-[15px] py-3 px-4 rounded-[5px] hover:bg-[#F9F9F6] active:bg-[#F9F9F6] hover:text-[#c5d520] active:text-[#c5d520] transition-colors min-h-[48px] flex items-center",
                                                            onClick: ()=>{
                                                                setIsNavExpanded(false);
                                                                setIsSectorsOpen(false);
                                                            },
                                                            "data-testid": `link-mobile-sectors-${sector.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
                                                            children: sector.label
                                                        }, sector.label, false, {
                                                            fileName: "[project]/components/shared/Navbar.tsx",
                                                            lineNumber: 540,
                                                            columnNumber: 29
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                    lineNumber: 538,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Navbar.tsx",
                                                lineNumber: 531,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Navbar.tsx",
                                            lineNumber: 529,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/Navbar.tsx",
                                    lineNumber: 507,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-b border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between w-full py-3 px-4 min-h-[52px]",
                                            "data-testid": "button-mobile-locations",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/locations",
                                                    className: "font-bold text-primary text-[15px] hover:text-[#c5d520] transition-colors flex-1",
                                                    onClick: ()=>setIsNavExpanded(false),
                                                    children: "Locations"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                    lineNumber: 562,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setIsLocationsOpen(!isLocationsOpen),
                                                    "aria-expanded": isLocationsOpen,
                                                    className: "p-3 -mr-1 hover:text-[#c5d520] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center",
                                                    "aria-label": "Toggle locations submenu",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: `w-5 h-5 transition-transform ${isLocationsOpen ? "rotate-180" : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/shared/Navbar.tsx",
                                                        lineNumber: 576,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                    lineNumber: 569,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/shared/Navbar.tsx",
                                            lineNumber: 558,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            children: isLocationsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                                    className: "pl-4 pb-3 grid grid-cols-2 gap-x-2",
                                                    children: locationLinks.map((loc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: loc.href,
                                                            className: "font-medium text-primary/80 py-3 px-4 rounded-[5px] hover:bg-[#F9F9F6] active:bg-[#F9F9F6] hover:text-[#c5d520] active:text-[#c5d520] transition-colors text-sm min-h-[44px] flex items-center",
                                                            onClick: ()=>{
                                                                setIsNavExpanded(false);
                                                                setIsLocationsOpen(false);
                                                            },
                                                            "data-testid": `link-mobile-locations-${loc.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
                                                            children: loc.label
                                                        }, loc.label, false, {
                                                            fileName: "[project]/components/shared/Navbar.tsx",
                                                            lineNumber: 590,
                                                            columnNumber: 29
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                    lineNumber: 588,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Navbar.tsx",
                                                lineNumber: 581,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Navbar.tsx",
                                            lineNumber: 579,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/Navbar.tsx",
                                    lineNumber: 557,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-b border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between w-full py-3 px-4 min-h-[52px]",
                                            "data-testid": "button-mobile-about",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "/about",
                                                    className: "font-bold text-primary text-[15px] hover:text-[#c5d520] transition-colors flex-1",
                                                    onClick: ()=>setIsNavExpanded(false),
                                                    children: "About Us"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                    lineNumber: 612,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setIsAboutOpen(!isAboutOpen),
                                                    "aria-expanded": isAboutOpen,
                                                    className: "p-3 -mr-1 hover:text-[#c5d520] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center",
                                                    "aria-label": "Toggle about submenu",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: `w-5 h-5 transition-transform ${isAboutOpen ? "rotate-180" : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/shared/Navbar.tsx",
                                                        lineNumber: 626,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                    lineNumber: 619,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/shared/Navbar.tsx",
                                            lineNumber: 608,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            children: isAboutOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                                    className: "pl-4 pb-3",
                                                    children: aboutLinks.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: item.href,
                                                            className: "font-medium text-primary/80 text-[15px] py-3 px-4 rounded-[5px] hover:bg-[#F9F9F6] active:bg-[#F9F9F6] hover:text-[#c5d520] active:text-[#c5d520] transition-colors min-h-[48px] flex items-center",
                                                            onClick: ()=>{
                                                                setIsNavExpanded(false);
                                                                setIsAboutOpen(false);
                                                            },
                                                            "data-testid": `link-mobile-about-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
                                                            children: item.label
                                                        }, item.label, false, {
                                                            fileName: "[project]/components/shared/Navbar.tsx",
                                                            lineNumber: 640,
                                                            columnNumber: 29
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/Navbar.tsx",
                                                    lineNumber: 638,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Navbar.tsx",
                                                lineNumber: 631,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Navbar.tsx",
                                            lineNumber: 629,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/Navbar.tsx",
                                    lineNumber: 607,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-4 px-4 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            className: "w-full justify-center font-extrabold text-primary uppercase tracking-wide min-h-[52px]",
                                            "data-testid": "button-mobile-login",
                                            children: "Login"
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Navbar.tsx",
                                            lineNumber: 657,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            asChild: true,
                                            size: "lg",
                                            className: "w-full bg-[#c5d520] text-[#042940] min-h-[52px] whitespace-nowrap rounded-full",
                                            "data-testid": "button-mobile-menu-cta",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/request-a-service",
                                                onClick: ()=>setIsNavExpanded(false),
                                                children: "Request A Service"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Navbar.tsx",
                                                lineNumber: 666,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Navbar.tsx",
                                            lineNumber: 660,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/Navbar.tsx",
                                    lineNumber: 656,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/Navbar.tsx",
                            lineNumber: 445,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/shared/Navbar.tsx",
                        lineNumber: 437,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/shared/Navbar.tsx",
                    lineNumber: 435,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/shared/Navbar.tsx",
            lineNumber: 101,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/shared/Navbar.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_s(Navbar, "txrMH3lSoqNsMZJ4mKUWTQFAkzc=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
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
        label: "Emergency Waste Removal",
        href: "/services/emergency-waste-removal"
    },
    {
        label: "Specialized Project Logistics",
        href: "/services/specialized-project-logistics"
    },
    {
        label: "Dumpsters & Temporary Containers",
        href: "/services/dumpsters-containers"
    },
    {
        label: "Waste Operations Advisory & Enablement",
        href: "/services/waste-operations-advisory"
    }
];
const industryLinks = [
    {
        label: "Retail",
        href: "/industries/retail"
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
        label: "Real Estate",
        href: "/industries/real-estate"
    },
    {
        label: "Natural Disasters",
        href: "/industries/natural-disasters"
    },
    {
        label: "Hospitality",
        href: "/industries/hospitality"
    },
    {
        label: "Educational",
        href: "/industries/educational"
    },
    {
        label: "Municipalities",
        href: "/industries/municipalities"
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
                    className: "grid md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_2fr] gap-12 lg:gap-10 mb-16",
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
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/60 leading-relaxed max-w-xs",
                                    children: "Redefining commercial waste management with speed, transparency, and reliability across 48 states."
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Footer.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            "aria-label": "LinkedIn",
                                            "data-testid": "link-social-linkedin",
                                            className: "w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c5d520] hover:text-[#042940] transition-colors cursor-pointer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Footer.tsx",
                                                lineNumber: 49,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Footer.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            "aria-label": "Twitter",
                                            "data-testid": "link-social-twitter",
                                            className: "w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c5d520] hover:text-[#042940] transition-colors cursor-pointer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Footer.tsx",
                                                lineNumber: 52,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Footer.tsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            "aria-label": "Instagram",
                                            "data-testid": "link-social-instagram",
                                            className: "w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c5d520] hover:text-[#042940] transition-colors cursor-pointer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Footer.tsx",
                                                lineNumber: 55,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Footer.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            "aria-label": "Facebook",
                                            "data-testid": "link-social-facebook",
                                            className: "w-11 h-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c5d520] hover:text-[#042940] transition-colors cursor-pointer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Footer.tsx",
                                                lineNumber: 58,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Footer.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/Footer.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/Footer.tsx",
                            lineNumber: 36,
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold text-lg mb-6 text-white",
                                    children: "Services"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Footer.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-1 text-white/60 text-sm",
                                    children: serviceLinks.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: service.href,
                                                className: "block py-2.5 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors min-h-[44px] flex items-center",
                                                "data-testid": `link-footer-service-${service.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
                                                children: service.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Footer.tsx",
                                                lineNumber: 74,
                                                columnNumber: 19
                                            }, this)
                                        }, service.href, false, {
                                            fileName: "[project]/components/shared/Footer.tsx",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Footer.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/Footer.tsx",
                            lineNumber: 64,
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold text-lg mb-6 text-white",
                                    children: "Industries"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Footer.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-1 text-white/60 text-sm",
                                    children: industryLinks.map((industry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: industry.href,
                                                className: "block py-2.5 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors min-h-[44px] flex items-center",
                                                "data-testid": `link-footer-industry-${industry.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
                                                children: industry.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Footer.tsx",
                                                lineNumber: 93,
                                                columnNumber: 19
                                            }, this)
                                        }, industry.href, false, {
                                            fileName: "[project]/components/shared/Footer.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Footer.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/Footer.tsx",
                            lineNumber: 83,
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold text-lg mb-6 text-white",
                                    children: "Company"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Footer.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-1 text-white/60 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/about",
                                                className: "block py-2.5 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors min-h-[44px] flex items-center",
                                                "data-testid": "link-footer-about",
                                                children: "About Us"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Footer.tsx",
                                                lineNumber: 110,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Footer.tsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/our-process",
                                                className: "block py-2.5 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors min-h-[44px] flex items-center",
                                                "data-testid": "link-footer-process",
                                                children: "Our Process"
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
                                                href: "/who-we-serve",
                                                className: "block py-2.5 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors min-h-[44px] flex items-center",
                                                "data-testid": "link-footer-who-we-serve",
                                                children: "Who We Serve"
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
                                                href: "/locations",
                                                className: "block py-2.5 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors min-h-[44px] flex items-center",
                                                "data-testid": "link-footer-locations",
                                                children: "Locations"
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
                                                href: "#",
                                                className: "block py-2.5 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors min-h-[44px] flex items-center",
                                                "data-testid": "link-footer-success-stories",
                                                children: "Success Stories"
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
                                                href: "/join-our-network",
                                                className: "block py-2.5 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors min-h-[44px] flex items-center",
                                                "data-testid": "link-footer-join-network",
                                                children: "Join Our Network"
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
                                                href: "/faq",
                                                className: "block py-2.5 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors min-h-[44px] flex items-center",
                                                "data-testid": "link-footer-faq",
                                                children: "FAQ"
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
                                                href: "/contact",
                                                className: "block py-2.5 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors min-h-[44px] flex items-center",
                                                "data-testid": "link-footer-contact",
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
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/request-a-service",
                                                className: "block py-2.5 hover:text-[#c5d520] focus-visible:text-[#c5d520] focus-visible:underline focus-visible:outline-none transition-colors min-h-[44px] flex items-center",
                                                "data-testid": "link-footer-request-service",
                                                children: "Request A Service"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Footer.tsx",
                                                lineNumber: 118,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Footer.tsx",
                                            lineNumber: 118,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/Footer.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/Footer.tsx",
                            lineNumber: 102,
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-bold text-lg text-white",
                                    children: "Stay Updated"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Footer.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/60",
                                    children: "Get service updates, industry news, and waste management tips for multi-location businesses."
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Footer.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            placeholder: "Enter your email",
                                            className: "bg-white/5 border-white/10 text-white placeholder:text-white/30 h-14 focus-visible:ring-[#c5d520] rounded-full px-6",
                                            "data-testid": "input-footer-newsletter"
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Footer.tsx",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "lg",
                                            className: "bg-[#c5d520] text-[#042940] min-h-[52px] no-default-hover-elevate no-default-active-elevate hover:bg-[#d4e232] active:bg-[#b3c11c]",
                                            "data-testid": "button-footer-newsletter",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/Footer.tsx",
                                                lineNumber: 141,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Footer.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/Footer.tsx",
                                    lineNumber: 134,
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
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "tel:7275105454",
                                            className: "text-xl font-bold text-[#c5d520] hover:underline",
                                            "data-testid": "link-footer-phone",
                                            children: "727.510.5454"
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Footer.tsx",
                                            lineNumber: 146,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/Footer.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/Footer.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/shared/Footer.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                    className: "bg-white/10 mb-8"
                }, void 0, false, {
                    fileName: "[project]/components/shared/Footer.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "© 2026 Tenth Rock Solutions. All rights reserved."
                        }, void 0, false, {
                            fileName: "[project]/components/shared/Footer.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-6 mt-2 md:mt-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/privacy-policy",
                                    className: "py-2 hover:text-white transition-colors min-h-[44px] flex items-center",
                                    "data-testid": "link-footer-privacy",
                                    children: "Privacy Policy"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Footer.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/terms-of-service",
                                    className: "py-2 hover:text-white transition-colors min-h-[44px] flex items-center",
                                    "data-testid": "link-footer-terms",
                                    children: "Terms of Service"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Footer.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/Footer.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/shared/Footer.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/shared/Footer.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/shared/Footer.tsx",
        lineNumber: 31,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$hat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardHat$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hard-hat.js [app-client] (ecmascript) <export default as HardHat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/container.js [app-client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-line.js [app-client] (ecmascript) <export default as LineChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const services = [
    {
        title: "Emergency Waste Removal",
        desc: "Same-day junk removal and emergency waste management for spoiled product, overflowing dumpsters, and urgent commercial site cleanouts across 48 states.",
        items: [
            {
                label: "Emergency Product & Perishable Removal",
                desc: "Perishable bulk pickup and spoiled product disposal after cold storage failure or refrigeration failure events. After-hours waste removal available 24/7.",
                img: "/images/stock/service-emergency-overflow.jpg",
                href: "/services/emergency-product-removal"
            },
            {
                label: "Temporary Capacity & Site Stabilization",
                desc: "Compactor failure response, overflowing dumpster support, and urgent bulk waste removal when missed pickups or waste overflow disrupts your operations.",
                img: "/images/stock/service-emergency.jpg",
                href: "/services/site-stabilization"
            },
            {
                label: "Unplanned Cleanouts & Debris Removal",
                desc: "Commercial site cleanout and bulk debris removal for foreclosure cleanouts, code violation cleanup support, and emergency site cleanout situations.",
                img: "/images/stock/clean-city.jpg",
                href: "/services/unplanned-cleanouts"
            }
        ]
    },
    {
        title: "Specialized Project Logistics",
        desc: "End-to-end waste coordination for site decommissioning, commercial cleanouts, event waste logistics, and storm debris removal across multiple sites.",
        items: [
            {
                label: "Site Closures & Remodels",
                desc: "Site decommissioning, post-construction cleanout, and retail remodel waste management. Portfolio-wide site turnover and store closings handled start to finish.",
                img: "/images/stock/service-commercial.jpg",
                href: "/services/site-closures-remodels"
            },
            {
                label: "Events & Stadiums",
                desc: "Event waste logistics and stadium waste coordination for multi-day event waste support. Fairs, festivals, and temporary activations managed on tight timelines.",
                img: "/images/stock/service-event-stadium.jpg",
                href: "/services/events-stadiums"
            },
            {
                label: "Natural Disaster Mobilization",
                desc: "Rapid response for storm debris removal and hurricane debris cleanup. Emergency roll-off rental and open-top dumpsters deployed for multi-site recovery across affected regions.",
                img: "/images/stock/service-maintenance.jpg",
                href: "/services/natural-disaster-mobilization"
            }
        ]
    },
    {
        title: "Dumpsters & Temporary Containers",
        desc: "Same-day dumpster rental, roll-off dumpsters, and open-top dumpsters for commercial projects, cleanouts, and emergency overflow needs.",
        items: [
            {
                label: "On-Demand Service",
                desc: "Same-day dumpster rental and emergency roll-off service. Temporary dumpster deployment for commercial projects with same-day swaps available.",
                img: "/images/stock/service-dumpster-rental.jpg",
                href: "/services/on-demand-service"
            },
            {
                label: "Multiple Sizes",
                desc: "Commercial-grade open-top dumpsters in 20 yard, 30 yard, and 40 yard roll-off sizes. Matched to your project scope from small cleanouts to large-scale construction debris.",
                img: "/images/stock/service-dumpster.jpg",
                href: "/services/multiple-sizes"
            },
            {
                label: "Recycling & Specialty Containers",
                desc: "Commercial recycling dumpster and metal recycling container rental for landfill diversion and source-separated recycling. Cardboard and baler overflow support included.",
                img: "/images/stock/service-centralized-program.jpg",
                href: "/services/recycling-specialty-containers"
            }
        ]
    },
    {
        title: "Waste Operations Advisory & Enablement",
        desc: "Retained waste management advisory providing hands-on program rollout, vendor training and oversight, performance optimization, and portfolio-wide execution management for multi-site operators.",
        items: [
            {
                label: "Waste Program Assessments & Roadmaps",
                desc: "Portfolio-wide waste strategy and operational waste audit to identify cost-control waste optimization opportunities across your multi-site waste roadmap.",
                img: "/images/stock/hero-skyscrapers.jpg",
                href: "/services/waste-program-assessments"
            },
            {
                label: "Standards, SOPs & Vendor Training",
                desc: "Waste management SOP development and multi-site vendor training framework. Vendor performance protocols and site-level execution standards that prevent costly errors.",
                img: "/images/stock/city-nature.jpg",
                href: "/services/standards-sops-training"
            },
            {
                label: "Ongoing Advisory & Program Implementation",
                desc: "Retained advisory for waste workflow optimization, multi-site execution strategy, and ongoing program improvement with oversight services built for scale.",
                img: "/images/stock/service-commercial.jpg",
                href: "/services/ongoing-advisory"
            }
        ]
    }
];
const categoryIcons = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$siren$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Siren$3e$__["Siren"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$hat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardHat$3e$__["HardHat"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__["LineChart"]
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
                            children: "Four core capabilities. One point of contact. Dispatched across 48 states."
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
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex items-center gap-2 mt-4 text-sm font-bold text-[#c5d520] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300",
                                                            "aria-hidden": "true",
                                                            children: [
                                                                "Learn More ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                                                                    lineNumber: 146,
                                                                    columnNumber: 39
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/shared/CommercialWasteServices.tsx",
                                                            lineNumber: 142,
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
        "aria-label": "Check service availability",
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
                                        children: "Your Area"
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
                                children: "Enter your zip code to get started."
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
"[project]/components/shared/CaseStudySection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CaseStudySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const caseStudies = [
    {
        title: "Starbucks",
        subtitle: "Missed Pickup, Same-Day Stabilization",
        tag: "Speed",
        description: "A missed pickup at a Starbucks location sent waste overflowing into the backroom mid-operation, creating immediate compliance risk and customer-facing exposure during normal business hours. Tenth Rock received the call at 6:16 PM, confirmed dispatch in under 10 minutes, and had a local crew on-site clearing waste within an hour. The location remained operational, risks were mitigated, and full documentation was provided, all in under 4 hours.",
        mainImage: "/images/stock/service-emergency-overflow.jpg",
        mainImageAlt: "Starbucks emergency waste stabilization by Tenth Rock",
        thumbImages: [
            {
                src: "/images/stock/service-emergency.jpg",
                alt: "Emergency waste crew dispatched"
            },
            {
                src: "/images/stock/case-study-thumb1.jpg",
                alt: "On-site waste removal in progress"
            },
            {
                src: "/images/stock/case-study-thumb2.jpg",
                alt: "Site restored to operational status"
            }
        ],
        stats: [
            {
                value: "10 min",
                label: "Response Time"
            },
            {
                value: "4 hrs",
                label: "Total Stabilization"
            },
            {
                value: "0",
                label: "Customer Impact"
            },
            {
                value: "1",
                label: "Call to Resolution"
            }
        ]
    },
    {
        title: "2024 Florida Hurricanes",
        subtitle: "Statewide Container Deployment",
        tag: "Scale",
        description: "Following 2 major hurricanes 13 days apart, open-top dumpsters became unavailable statewide as debris volumes overwhelmed local providers. Tenth Rock activated its nationwide network to source containers from out-of-state markets. Inventory was secured and mobilized across state lines, allowing dumpsters to be strategically deployed throughout affected regions while legacy companies were out of inventory.",
        mainImage: "/images/stock/industry-natural-disasters-storm.jpg",
        mainImageAlt: "Florida hurricane emergency dumpster deployment by Tenth Rock",
        thumbImages: [
            {
                src: "/images/stock/service-dumpster-rental.jpg",
                alt: "Roll-off dumpsters staged for deployment"
            },
            {
                src: "/images/stock/service-maintenance.jpg",
                alt: "Multi-site debris coordination"
            },
            {
                src: "/images/stock/case-study-thumb3.jpg",
                alt: "Statewide container logistics"
            }
        ],
        stats: [
            {
                value: "36M+",
                label: "Cubic Yards of Debris"
            },
            {
                value: "5",
                label: "State Inventory Sourcing"
            },
            {
                value: "60+",
                label: "Days Sustained"
            },
            {
                value: "67",
                label: "Counties Impacted"
            }
        ]
    },
    {
        title: "Portfolio-Wide",
        subtitle: "Store Closures Across 8 States",
        tag: "Multi-Site Execution",
        description: "During a multi-location retail transition, stores required a full cleanout after asset recovery teams completed their work. Remaining fixtures, shelving, signage, and debris still needed to be removed for broom-clean turnover. Tenth Rock coordinated labor crews, hauling, and dumpster deployment across multiple locations, handling minor demolition and final punch-list items that had fallen between vendors.",
        mainImage: "/images/stock/service-commercial.jpg",
        mainImageAlt: "Multi-site store decommissioning by Tenth Rock",
        thumbImages: [
            {
                src: "/images/stock/case-study-main.jpg",
                alt: "Store cleanout in progress"
            },
            {
                src: "/images/stock/service-dumpster.jpg",
                alt: "Dumpster deployment at closure site"
            },
            {
                src: "/images/stock/case-study-thumb1.jpg",
                alt: "Broom-clean store turnover"
            }
        ],
        stats: [
            {
                value: "20+",
                label: "Stores Delivered Broom-Clean"
            },
            {
                value: "1",
                label: "Point of Contact"
            },
            {
                value: "3",
                label: "Vendor Types Managed"
            },
            {
                value: "8",
                label: "State Deployment"
            }
        ]
    },
    {
        title: "TJ Maxx / HomeGoods",
        subtitle: "Holiday Overflow Resolution",
        tag: "Creative Solutions",
        description: "During a high-traffic holiday period, a national retail location experienced packaging overflow spilling into public areas, creating immediate safety and reputational risk. The store requested a 30-yard open-top dumpster late in the evening, but no containers were available. Tenth Rock deployed a stabilization crew within the hour, consolidated overflowing waste into a controlled staging area, and secured a 30-yard roll-off for 7:00 AM delivery. The store opened safely and on schedule.",
        mainImage: "/images/stock/service-dumpster-rental.jpg",
        mainImageAlt: "TJ Maxx holiday overflow stabilization by Tenth Rock",
        thumbImages: [
            {
                src: "/images/stock/service-emergency-overflow.jpg",
                alt: "Overflow waste being staged"
            },
            {
                src: "/images/stock/case-study-thumb2.jpg",
                alt: "Staging area prepared overnight"
            },
            {
                src: "/images/stock/case-study-thumb3.jpg",
                alt: "Roll-off delivered next morning"
            }
        ],
        stats: [
            {
                value: "0",
                label: "Overtime Staff Required"
            },
            {
                value: "100%",
                label: "Risk Mitigated"
            },
            {
                value: "8 hrs",
                label: "Total Resolution"
            },
            {
                value: "$0",
                label: "Surge Pricing"
            }
        ]
    },
    {
        title: "Regional Power Outage",
        subtitle: "Perishable Removal Across Multiple Sites",
        tag: "Cost Savings",
        description: "Following a regional power outage caused by severe storms, multiple retail locations were left with large volumes of temperature-sensitive products requiring immediate removal to prevent odor, pest activity, and potential health code violations. Tenth Rock mobilized live-load hauling providers, allowing trailers to be staged and loaded immediately as product was removed from refrigeration areas, eliminating the wait for roll-off containers.",
        mainImage: "/images/stock/service-emergency.jpg",
        mainImageAlt: "Emergency perishable removal after power outage by Tenth Rock",
        thumbImages: [
            {
                src: "/images/stock/service-emergency-overflow.jpg",
                alt: "Perishable product being removed"
            },
            {
                src: "/images/stock/case-study-thumb1.jpg",
                alt: "Live-load trailer staged on site"
            },
            {
                src: "/images/stock/service-centralized-program.jpg",
                alt: "Coordinated multi-site disposal"
            }
        ],
        stats: [
            {
                value: "1",
                label: "Point of Contact"
            },
            {
                value: "0",
                label: "Health Code Violations"
            },
            {
                value: "45%",
                label: "Cost Reduction via Live Loads"
            },
            {
                value: "1",
                label: "Consolidated Invoice"
            }
        ]
    },
    {
        title: "Compactor Failure",
        subtitle: "Emergency Site Stabilization",
        tag: "Project Management",
        description: "A big-box retail location experienced a compactor failure after the unit became overfilled, forcing the door open and preventing the hauler from safely transporting it under DOT regulations. Tenth Rock deployed a stabilization crew to reduce the load, secured the compactor door for safe transport, arranged a same-day open-top dumpster, and coordinated vendors to clean and prepare the compactor area for repair upon return.",
        mainImage: "/images/stock/case-study-main.jpg",
        mainImageAlt: "Compactor failure emergency stabilization by Tenth Rock",
        thumbImages: [
            {
                src: "/images/stock/service-dumpster.jpg",
                alt: "Emergency dumpster deployed on site"
            },
            {
                src: "/images/stock/case-study-thumb2.jpg",
                alt: "Compactor area cleaned for repair"
            },
            {
                src: "/images/stock/case-study-thumb3.jpg",
                alt: "Vendor coordination at site"
            }
        ],
        stats: [
            {
                value: "4",
                label: "Vendors Sequenced"
            },
            {
                value: "1",
                label: "Point of Contact"
            },
            {
                value: "0",
                label: "Health Violations"
            },
            {
                value: "100%",
                label: "Real-Time Visibility"
            }
        ]
    }
];
function CaseStudySection() {
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const goToPrev = ()=>{
        setCurrentIndex((prev)=>prev === 0 ? caseStudies.length - 1 : prev - 1);
    };
    const goToNext = ()=>{
        setCurrentIndex((prev)=>prev === caseStudies.length - 1 ? 0 : prev + 1);
    };
    const study = caseStudies[currentIndex];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 md:py-24 bg-white border-b border-primary/5",
        "aria-label": "Case studies",
        "data-testid": "section-case-studies",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 md:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-2 gap-12 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 order-2 lg:order-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "wait",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        scale: 0.95
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    exit: {
                                        opacity: 0,
                                        scale: 0.95
                                    },
                                    transition: {
                                        duration: 0.4
                                    },
                                    className: "relative rounded-[5px] overflow-hidden h-[400px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: study.mainImage,
                                        alt: study.mainImageAlt,
                                        fill: true,
                                        sizes: "(max-width: 1024px) 100vw, 50vw",
                                        className: "object-cover",
                                        loading: "lazy"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/CaseStudySection.tsx",
                                        lineNumber: 169,
                                        columnNumber: 17
                                    }, this)
                                }, `main-${currentIndex}`, false, {
                                    fileName: "[project]/components/shared/CaseStudySection.tsx",
                                    lineNumber: 161,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/shared/CaseStudySection.tsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 gap-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    mode: "wait",
                                    children: study.thumbImages.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                                y: 20
                                            },
                                            transition: {
                                                duration: 0.3,
                                                delay: i * 0.08
                                            },
                                            className: "relative rounded-[5px] overflow-hidden aspect-square",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: img.src,
                                                alt: img.alt,
                                                fill: true,
                                                sizes: "(max-width: 1024px) 33vw, 16vw",
                                                className: "object-cover",
                                                loading: "lazy"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/CaseStudySection.tsx",
                                                lineNumber: 190,
                                                columnNumber: 21
                                            }, this)
                                        }, `thumb-${currentIndex}-${i}`, false, {
                                            fileName: "[project]/components/shared/CaseStudySection.tsx",
                                            lineNumber: 182,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/CaseStudySection.tsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/shared/CaseStudySection.tsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/shared/CaseStudySection.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:pl-8 order-1 lg:order-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "wait",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        x: -20
                                    },
                                    transition: {
                                        duration: 0.4
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5d520]/10 text-[#042940] font-bold text-xs uppercase tracking-wider mb-4",
                                            "data-testid": "badge-case-study-tag",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-1.5 h-1.5 rounded-full bg-[#c5d520]"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/CaseStudySection.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 19
                                                }, this),
                                                study.tag
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/shared/CaseStudySection.tsx",
                                            lineNumber: 213,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-4xl md:text-5xl font-medium text-primary mb-6 tracking-tighter leading-tight",
                                            children: [
                                                study.title,
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/components/shared/CaseStudySection.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-3xl md:text-4xl",
                                                    children: study.subtitle
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/CaseStudySection.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/shared/CaseStudySection.tsx",
                                            lineNumber: 217,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg text-primary/70 mb-8 md:mb-12 leading-relaxed",
                                            children: study.description
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/CaseStudySection.tsx",
                                            lineNumber: 221,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12",
                                            children: study.stats.map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-testid": `stat-case-study-${i}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-4xl font-extrabold text-[#c5d520] mb-1",
                                                            children: stat.value
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/shared/CaseStudySection.tsx",
                                                            lineNumber: 228,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm font-bold text-primary uppercase tracking-wide",
                                                            children: stat.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/shared/CaseStudySection.tsx",
                                                            lineNumber: 229,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-1 w-12 bg-primary/10 mt-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/shared/CaseStudySection.tsx",
                                                            lineNumber: 230,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/components/shared/CaseStudySection.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/CaseStudySection.tsx",
                                            lineNumber: 225,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, `content-${currentIndex}`, true, {
                                    fileName: "[project]/components/shared/CaseStudySection.tsx",
                                    lineNumber: 206,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/shared/CaseStudySection.tsx",
                                lineNumber: 205,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: goToPrev,
                                        className: "w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary active:bg-primary hover:text-white active:text-white text-primary transition-all duration-300 shadow-sm hover:shadow-lg active:shadow-lg min-w-[44px] min-h-[44px]",
                                        "aria-label": "Previous case study",
                                        "data-testid": "button-case-study-prev",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "w-5 h-5 rotate-180"
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/CaseStudySection.tsx",
                                            lineNumber: 244,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/CaseStudySection.tsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: goToNext,
                                        className: "w-14 h-14 rounded-full bg-[#042940] text-white flex items-center justify-center hover:bg-[#c5d520] active:bg-[#c5d520] hover:text-[#042940] active:text-[#042940] transition-all duration-300 shadow-lg hover:shadow-xl active:shadow-xl active:scale-95 min-w-[44px] min-h-[44px]",
                                        "aria-label": "Next case study",
                                        "data-testid": "button-case-study-next",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/CaseStudySection.tsx",
                                            lineNumber: 252,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/CaseStudySection.tsx",
                                        lineNumber: 246,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-primary/40 ml-2",
                                        "data-testid": "text-case-study-counter",
                                        children: [
                                            currentIndex + 1,
                                            " / ",
                                            caseStudies.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/shared/CaseStudySection.tsx",
                                        lineNumber: 254,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/CaseStudySection.tsx",
                                lineNumber: 237,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/shared/CaseStudySection.tsx",
                        lineNumber: 204,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/shared/CaseStudySection.tsx",
                lineNumber: 158,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/shared/CaseStudySection.tsx",
            lineNumber: 157,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/shared/CaseStudySection.tsx",
        lineNumber: 156,
        columnNumber: 5
    }, this);
}
_s(CaseStudySection, "tusBbsahUVevXfyh6oH5R6YDC9Q=");
_c = CaseStudySection;
var _c;
__turbopack_context__.k.register(_c, "CaseStudySection");
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
        answer: "For emergencies, we can often have crews on-site within hours. For standard scheduled services, we typically start within 24-48 hours of account setup. Our 24/7 dispatch center takes your call day or night."
    },
    {
        question: "Do You Service Multiple Locations Nationwide?",
        answer: "Yes, we operate across 48 states. Our centralized management platform allows you to handle waste services for hundreds of locations through a single point of contact and one consolidated invoice."
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
                                className: "text-4xl md:text-5xl font-medium text-primary tracking-tighter leading-tight",
                                children: "Frequently Asked Questions"
                            }, void 0, false, {
                                fileName: "[project]/components/shared/FaqSection.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-primary/70 max-w-2xl mx-auto",
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
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-full flex items-center justify-between p-6 md:p-8 text-left outline-none",
                                            onClick: ()=>setOpenItem(openItem === `item-${i}` ? "" : `item-${i}`),
                                            "aria-expanded": openItem === `item-${i}`,
                                            "data-testid": `faq-trigger-${i}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-xl font-bold transition-colors duration-300 ${openItem === `item-${i}` ? "text-white" : "text-primary"}`,
                                                    children: faq.question
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/FaqSection.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${openItem === `item-${i}` ? "bg-[#c5d520] rotate-180" : "bg-primary/5 group-hover:bg-primary/10"}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: `w-5 h-5 transition-colors duration-300 ${openItem === `item-${i}` ? "text-[#042940]" : "text-primary"}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/shared/FaqSection.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/FaqSection.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/shared/FaqSection.tsx",
                                            lineNumber: 76,
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
                                                    lineNumber: 103,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/FaqSection.tsx",
                                                lineNumber: 102,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/FaqSection.tsx",
                                            lineNumber: 97,
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
                                className: "text-primary/70 mb-4 font-medium",
                                children: "Still Have Questions?"
                            }, void 0, false, {
                                fileName: "[project]/components/shared/FaqSection.tsx",
                                lineNumber: 114,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "lg",
                                className: "w-full sm:w-auto shadow-lg min-h-[52px] whitespace-nowrap rounded-full",
                                children: "Contact Us"
                            }, void 0, false, {
                                fileName: "[project]/components/shared/FaqSection.tsx",
                                lineNumber: 115,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/shared/FaqSection.tsx",
                        lineNumber: 113,
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
                    className: "text-left sm:text-center mb-8 sm:mb-12",
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
                            children: "Headquartered in Clearwater Beach, FL. Dispatching crews across 48 states, 24/7."
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
                                            children: "140 Island Way Ste.159, Clearwater Beach, FL 33767"
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
                                            children: "727.510.5454"
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
                                preload: "metadata",
                                className: "absolute inset-0 w-full h-full object-cover",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                    src: "/assets_export/videos/us-map-pins-loop.mp4",
                                    type: "video/mp4"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/LocationSection.tsx",
                                    lineNumber: 74,
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
"[project]/components/shared/FinalCtaSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FinalCtaSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const imgCyclist = "/images/stock/cyclist.jpg";
function FinalCtaSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 bg-white",
        "aria-label": "Get started with waste management",
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
                                lineNumber: 23,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl md:text-5xl font-medium text-white mb-4 leading-tight tracking-tighter",
                                children: [
                                    "Streamline Your ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#c5d520]",
                                        children: "Waste Management"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/FinalCtaSection.tsx",
                                        lineNumber: 26,
                                        columnNumber: 35
                                    }, this),
                                    " Today"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/FinalCtaSection.tsx",
                                lineNumber: 25,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/80 text-lg font-medium mb-8 max-w-lg leading-relaxed",
                                children: "One call. One partner. Every location covered. Stop juggling haulers and start saving up to 30% on waste spend."
                            }, void 0, false, {
                                fileName: "[project]/components/shared/FinalCtaSection.tsx",
                                lineNumber: 28,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "lg",
                                    className: "w-full sm:w-auto bg-[#c5d520] text-[#042940] hover:bg-[#d6d98b] active:bg-[#d6d98b] shadow-lg md:hover:scale-105 active:scale-95 transition-all duration-300 min-h-[52px] whitespace-nowrap rounded-full",
                                    children: "Request A Service"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/FinalCtaSection.tsx",
                                    lineNumber: 33,
                                    columnNumber: 20
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/shared/FinalCtaSection.tsx",
                                lineNumber: 32,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/shared/FinalCtaSection.tsx",
                        lineNumber: 22,
                        columnNumber: 14
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:w-1/2 relative min-h-[300px] lg:min-h-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: imgCyclist,
                                alt: "Tenth Rock service crew ready to dispatch",
                                fill: true,
                                sizes: "(max-width: 1024px) 100vw, 50vw",
                                className: "object-cover object-center lg:object-right",
                                loading: "lazy"
                            }, void 0, false, {
                                fileName: "[project]/components/shared/FinalCtaSection.tsx",
                                lineNumber: 41,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-[#042940]/40 lg:bg-[#042940]/20 mix-blend-multiply"
                            }, void 0, false, {
                                fileName: "[project]/components/shared/FinalCtaSection.tsx",
                                lineNumber: 42,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#042940] via-[#042940]/60 lg:via-[#042940]/50 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/components/shared/FinalCtaSection.tsx",
                                lineNumber: 43,
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
                                                lineNumber: 55,
                                                columnNumber: 26
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/FinalCtaSection.tsx",
                                            lineNumber: 54,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[#c5d520] text-xl font-bold",
                                                children: "727.510.5454"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/FinalCtaSection.tsx",
                                                lineNumber: 58,
                                                columnNumber: 26
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/FinalCtaSection.tsx",
                                            lineNumber: 57,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/FinalCtaSection.tsx",
                                    lineNumber: 53,
                                    columnNumber: 20
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/shared/FinalCtaSection.tsx",
                                lineNumber: 46,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/shared/FinalCtaSection.tsx",
                        lineNumber: 40,
                        columnNumber: 14
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/shared/FinalCtaSection.tsx",
                lineNumber: 14,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/shared/FinalCtaSection.tsx",
            lineNumber: 13,
            columnNumber: 8
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/shared/FinalCtaSection.tsx",
        lineNumber: 12,
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
const defaultSteps = [
    {
        num: "01",
        title: "You Call Us",
        desc: "Our experts are on standby 24/7 to solve it immediately."
    },
    {
        num: "02",
        title: "We Scope the Job",
        desc: "A dedicated project manager is assigned to your account. They assess the situation, identify the right local crew, and build a plan."
    },
    {
        num: "03",
        title: "You Get a Flat Rate",
        desc: "One price, upfront, in writing. No hourly surprises, no fuel surcharges, no hidden line items. You approve it before anything moves."
    },
    {
        num: "04",
        title: "Crews Are Dispatched",
        desc: "Our team is deployed to your site. Your project manager coordinates every detail and sends real-time updates until the job is done."
    },
    {
        num: "05",
        title: "Problem Solved",
        desc: "Waste is removed, the site is clean, and you get photo documentation confirming completion. One invoice. Done."
    }
];
function ProcessSection({ tagline = "Our Process", heading = "How It Works", subtitle = "From first call to job complete, here's exactly what happens.", steps = defaultSteps, testIdPrefix = "process" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "process",
        "aria-labelledby": `${testIdPrefix}-heading`,
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
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this),
                                tagline
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/ProcessSection.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: `${testIdPrefix}-heading`,
                            className: "text-4xl md:text-5xl font-medium text-[#042940] mb-6 leading-tight tracking-tighter",
                            children: heading
                        }, void 0, false, {
                            fileName: "[project]/components/shared/ProcessSection.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-[#042940]/70",
                            children: subtitle
                        }, void 0, false, {
                            fileName: "[project]/components/shared/ProcessSection.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/shared/ProcessSection.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `grid md:grid-cols-2 ${steps.length === 5 ? "lg:grid-cols-5" : steps.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-5"} gap-3`,
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
                            "data-testid": `${testIdPrefix}-step-${i}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 rounded-full bg-[#F9F9F6] group-hover:bg-[#c5d520] transition-colors duration-300 flex items-center justify-center text-lg font-bold text-[#042940] mb-8 shrink-0",
                                    children: step.num
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/ProcessSection.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-[#042940] mb-4 group-hover:text-[#c5d520] transition-colors duration-300",
                                    children: step.title
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/ProcessSection.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#042940]/70 leading-relaxed text-sm",
                                    children: step.desc
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/ProcessSection.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/components/shared/ProcessSection.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/shared/ProcessSection.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/shared/ProcessSection.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/shared/ProcessSection.tsx",
        lineNumber: 35,
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
"[project]/lib/data/state-cities.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getStateData",
    ()=>getStateData,
    "getStateName",
    ()=>getStateName,
    "stateCitiesMap",
    ()=>stateCitiesMap
]);
const stateCitiesMap = {
    alabama: {
        abbreviation: "AL",
        cities: [
            "Birmingham",
            "Montgomery",
            "Huntsville",
            "Mobile",
            "Tuscaloosa",
            "Hoover",
            "Dothan",
            "Auburn",
            "Decatur",
            "Madison",
            "Florence",
            "Gadsden",
            "Vestavia Hills",
            "Prattville",
            "Phenix City",
            "Alabaster"
        ]
    },
    arizona: {
        abbreviation: "AZ",
        cities: [
            "Phoenix",
            "Tucson",
            "Mesa",
            "Chandler",
            "Scottsdale",
            "Glendale",
            "Gilbert",
            "Tempe",
            "Peoria",
            "Surprise",
            "Yuma",
            "Avondale",
            "Flagstaff",
            "Goodyear",
            "Lake Havasu City",
            "Buckeye"
        ]
    },
    arkansas: {
        abbreviation: "AR",
        cities: [
            "Little Rock",
            "Fort Smith",
            "Fayetteville",
            "Springdale",
            "Jonesboro",
            "North Little Rock",
            "Conway",
            "Rogers",
            "Pine Bluff",
            "Bentonville",
            "Hot Springs",
            "Benton",
            "Texarkana",
            "Sherwood",
            "Jacksonville",
            "Cabot"
        ]
    },
    california: {
        abbreviation: "CA",
        cities: [
            "Los Angeles",
            "San Diego",
            "San Jose",
            "San Francisco",
            "Fresno",
            "Sacramento",
            "Long Beach",
            "Oakland",
            "Bakersfield",
            "Anaheim",
            "Santa Ana",
            "Riverside",
            "Stockton",
            "Irvine",
            "Chula Vista",
            "Fremont",
            "San Bernardino",
            "Modesto",
            "Fontana",
            "Moreno Valley"
        ]
    },
    colorado: {
        abbreviation: "CO",
        cities: [
            "Denver",
            "Colorado Springs",
            "Aurora",
            "Fort Collins",
            "Lakewood",
            "Thornton",
            "Arvada",
            "Westminster",
            "Pueblo",
            "Centennial",
            "Boulder",
            "Greeley",
            "Longmont",
            "Loveland",
            "Broomfield",
            "Castle Rock"
        ]
    },
    connecticut: {
        abbreviation: "CT",
        cities: [
            "Bridgeport",
            "New Haven",
            "Hartford",
            "Stamford",
            "Waterbury",
            "Norwalk",
            "Danbury",
            "New Britain",
            "Bristol",
            "Meriden",
            "Milford",
            "West Haven",
            "Middletown",
            "Norwich",
            "Shelton",
            "Torrington"
        ]
    },
    delaware: {
        abbreviation: "DE",
        cities: [
            "Wilmington",
            "Dover",
            "Newark",
            "Middletown",
            "Smyrna",
            "Milford",
            "Seaford",
            "Georgetown",
            "Elsmere",
            "New Castle",
            "Millsboro",
            "Laurel",
            "Harrington",
            "Camden",
            "Clayton",
            "Lewes"
        ]
    },
    florida: {
        abbreviation: "FL",
        cities: [
            "Jacksonville",
            "Miami",
            "Tampa",
            "Orlando",
            "St. Petersburg",
            "Hialeah",
            "Tallahassee",
            "Fort Lauderdale",
            "Port St. Lucie",
            "Cape Coral",
            "Pembroke Pines",
            "Hollywood",
            "Gainesville",
            "Miramar",
            "Coral Springs",
            "Clearwater",
            "Palm Bay",
            "Lakeland",
            "Pompano Beach",
            "West Palm Beach"
        ]
    },
    georgia: {
        abbreviation: "GA",
        cities: [
            "Atlanta",
            "Augusta",
            "Columbus",
            "Macon",
            "Savannah",
            "Athens",
            "Sandy Springs",
            "Roswell",
            "Johns Creek",
            "Albany",
            "Warner Robins",
            "Alpharetta",
            "Marietta",
            "Valdosta",
            "Smyrna",
            "Dunwoody"
        ]
    },
    idaho: {
        abbreviation: "ID",
        cities: [
            "Boise",
            "Meridian",
            "Nampa",
            "Idaho Falls",
            "Caldwell",
            "Pocatello",
            "Coeur d'Alene",
            "Twin Falls",
            "Post Falls",
            "Lewiston",
            "Rexburg",
            "Eagle",
            "Kuna",
            "Star",
            "Mountain Home",
            "Garden City"
        ]
    },
    illinois: {
        abbreviation: "IL",
        cities: [
            "Chicago",
            "Aurora",
            "Joliet",
            "Naperville",
            "Rockford",
            "Springfield",
            "Elgin",
            "Peoria",
            "Champaign",
            "Waukegan",
            "Cicero",
            "Bloomington",
            "Arlington Heights",
            "Evanston",
            "Schaumburg",
            "Bolingbrook",
            "Decatur",
            "Palatine"
        ]
    },
    indiana: {
        abbreviation: "IN",
        cities: [
            "Indianapolis",
            "Fort Wayne",
            "Evansville",
            "South Bend",
            "Carmel",
            "Fishers",
            "Bloomington",
            "Hammond",
            "Gary",
            "Lafayette",
            "Muncie",
            "Terre Haute",
            "Kokomo",
            "Noblesville",
            "Anderson",
            "Greenwood"
        ]
    },
    iowa: {
        abbreviation: "IA",
        cities: [
            "Des Moines",
            "Cedar Rapids",
            "Davenport",
            "Sioux City",
            "Iowa City",
            "Waterloo",
            "Ames",
            "West Des Moines",
            "Council Bluffs",
            "Ankeny",
            "Dubuque",
            "Urbandale",
            "Cedar Falls",
            "Marion",
            "Bettendorf",
            "Mason City"
        ]
    },
    kansas: {
        abbreviation: "KS",
        cities: [
            "Wichita",
            "Overland Park",
            "Kansas City",
            "Olathe",
            "Topeka",
            "Lawrence",
            "Shawnee",
            "Manhattan",
            "Lenexa",
            "Salina",
            "Hutchinson",
            "Leavenworth",
            "Leawood",
            "Dodge City",
            "Garden City",
            "Emporia"
        ]
    },
    kentucky: {
        abbreviation: "KY",
        cities: [
            "Louisville",
            "Lexington",
            "Bowling Green",
            "Owensboro",
            "Covington",
            "Richmond",
            "Georgetown",
            "Florence",
            "Hopkinsville",
            "Nicholasville",
            "Elizabethtown",
            "Henderson",
            "Frankfort",
            "Jeffersontown",
            "Paducah",
            "Radcliff"
        ]
    },
    louisiana: {
        abbreviation: "LA",
        cities: [
            "New Orleans",
            "Baton Rouge",
            "Shreveport",
            "Lafayette",
            "Lake Charles",
            "Kenner",
            "Bossier City",
            "Monroe",
            "Alexandria",
            "Houma",
            "New Iberia",
            "Slidell",
            "Central",
            "Ruston",
            "Sulphur",
            "Hammond"
        ]
    },
    maine: {
        abbreviation: "ME",
        cities: [
            "Portland",
            "Lewiston",
            "Bangor",
            "South Portland",
            "Auburn",
            "Biddeford",
            "Sanford",
            "Brunswick",
            "Saco",
            "Scarborough",
            "Westbrook",
            "Windham",
            "Gorham",
            "Augusta",
            "Waterville",
            "Kennebunk"
        ]
    },
    maryland: {
        abbreviation: "MD",
        cities: [
            "Baltimore",
            "Columbia",
            "Germantown",
            "Silver Spring",
            "Waldorf",
            "Glen Burnie",
            "Ellicott City",
            "Frederick",
            "Dundalk",
            "Rockville",
            "Bethesda",
            "Bowie",
            "Towson",
            "Gaithersburg",
            "Hagerstown",
            "Annapolis"
        ]
    },
    massachusetts: {
        abbreviation: "MA",
        cities: [
            "Boston",
            "Worcester",
            "Springfield",
            "Cambridge",
            "Lowell",
            "Brockton",
            "New Bedford",
            "Quincy",
            "Lynn",
            "Fall River",
            "Newton",
            "Lawrence",
            "Somerville",
            "Framingham",
            "Haverhill",
            "Waltham"
        ]
    },
    michigan: {
        abbreviation: "MI",
        cities: [
            "Detroit",
            "Grand Rapids",
            "Warren",
            "Sterling Heights",
            "Ann Arbor",
            "Lansing",
            "Flint",
            "Dearborn",
            "Livonia",
            "Troy",
            "Westland",
            "Farmington Hills",
            "Kalamazoo",
            "Wyoming",
            "Southfield",
            "Rochester Hills"
        ]
    },
    minnesota: {
        abbreviation: "MN",
        cities: [
            "Minneapolis",
            "St. Paul",
            "Rochester",
            "Duluth",
            "Bloomington",
            "Brooklyn Park",
            "Plymouth",
            "Maple Grove",
            "Woodbury",
            "St. Cloud",
            "Eagan",
            "Eden Prairie",
            "Minnetonka",
            "Burnsville",
            "Apple Valley",
            "Edina"
        ]
    },
    mississippi: {
        abbreviation: "MS",
        cities: [
            "Jackson",
            "Gulfport",
            "Southaven",
            "Hattiesburg",
            "Biloxi",
            "Meridian",
            "Tupelo",
            "Olive Branch",
            "Greenville",
            "Horn Lake",
            "Pearl",
            "Madison",
            "Clinton",
            "Starkville",
            "Ridgeland",
            "Columbus"
        ]
    },
    missouri: {
        abbreviation: "MO",
        cities: [
            "Kansas City",
            "St. Louis",
            "Springfield",
            "Columbia",
            "Independence",
            "Lee's Summit",
            "O'Fallon",
            "St. Joseph",
            "St. Charles",
            "Blue Springs",
            "St. Peters",
            "Florissant",
            "Joplin",
            "Chesterfield",
            "Jefferson City",
            "Cape Girardeau"
        ]
    },
    montana: {
        abbreviation: "MT",
        cities: [
            "Billings",
            "Missoula",
            "Great Falls",
            "Bozeman",
            "Butte",
            "Helena",
            "Kalispell",
            "Havre",
            "Anaconda",
            "Miles City",
            "Belgrade",
            "Livingston",
            "Laurel",
            "Whitefish",
            "Lewistown",
            "Sidney"
        ]
    },
    nebraska: {
        abbreviation: "NE",
        cities: [
            "Omaha",
            "Lincoln",
            "Bellevue",
            "Grand Island",
            "Kearney",
            "Fremont",
            "Hastings",
            "Norfolk",
            "North Platte",
            "Columbus",
            "Papillion",
            "La Vista",
            "Scottsbluff",
            "South Sioux City",
            "Beatrice",
            "Lexington"
        ]
    },
    nevada: {
        abbreviation: "NV",
        cities: [
            "Las Vegas",
            "Henderson",
            "Reno",
            "North Las Vegas",
            "Sparks",
            "Carson City",
            "Fernley",
            "Elko",
            "Mesquite",
            "Boulder City",
            "Fallon",
            "Winnemucca",
            "West Wendover",
            "Ely",
            "Yerington",
            "Carlin"
        ]
    },
    "new-hampshire": {
        abbreviation: "NH",
        cities: [
            "Manchester",
            "Nashua",
            "Concord",
            "Derry",
            "Dover",
            "Rochester",
            "Salem",
            "Merrimack",
            "Londonderry",
            "Hudson",
            "Keene",
            "Bedford",
            "Portsmouth",
            "Laconia",
            "Lebanon",
            "Claremont"
        ]
    },
    "new-jersey": {
        abbreviation: "NJ",
        cities: [
            "Newark",
            "Jersey City",
            "Paterson",
            "Elizabeth",
            "Lakewood",
            "Edison",
            "Woodbridge",
            "Toms River",
            "Hamilton",
            "Trenton",
            "Clifton",
            "Camden",
            "Brick",
            "Cherry Hill",
            "Passaic",
            "Union City"
        ]
    },
    "new-mexico": {
        abbreviation: "NM",
        cities: [
            "Albuquerque",
            "Las Cruces",
            "Rio Rancho",
            "Santa Fe",
            "Roswell",
            "Farmington",
            "South Valley",
            "Hobbs",
            "Clovis",
            "Alamogordo",
            "Carlsbad",
            "Gallup",
            "Deming",
            "Los Lunas",
            "Sunland Park",
            "Las Vegas"
        ]
    },
    "new-york": {
        abbreviation: "NY",
        cities: [
            "New York City",
            "Buffalo",
            "Rochester",
            "Yonkers",
            "Syracuse",
            "Albany",
            "New Rochelle",
            "Mount Vernon",
            "Schenectady",
            "Utica",
            "White Plains",
            "Troy",
            "Niagara Falls",
            "Binghamton",
            "Hempstead",
            "Long Beach"
        ]
    },
    "north-carolina": {
        abbreviation: "NC",
        cities: [
            "Charlotte",
            "Raleigh",
            "Greensboro",
            "Durham",
            "Winston-Salem",
            "Fayetteville",
            "Cary",
            "Wilmington",
            "High Point",
            "Concord",
            "Greenville",
            "Asheville",
            "Gastonia",
            "Jacksonville",
            "Chapel Hill",
            "Huntersville"
        ]
    },
    "north-dakota": {
        abbreviation: "ND",
        cities: [
            "Fargo",
            "Bismarck",
            "Grand Forks",
            "Minot",
            "West Fargo",
            "Williston",
            "Dickinson",
            "Mandan",
            "Jamestown",
            "Wahpeton",
            "Devils Lake",
            "Valley City",
            "Grafton",
            "Beulah",
            "Rugby",
            "Bottineau"
        ]
    },
    ohio: {
        abbreviation: "OH",
        cities: [
            "Columbus",
            "Cleveland",
            "Cincinnati",
            "Toledo",
            "Akron",
            "Dayton",
            "Parma",
            "Canton",
            "Youngstown",
            "Lorain",
            "Hamilton",
            "Springfield",
            "Kettering",
            "Elyria",
            "Lakewood",
            "Cuyahoga Falls"
        ]
    },
    oklahoma: {
        abbreviation: "OK",
        cities: [
            "Oklahoma City",
            "Tulsa",
            "Norman",
            "Broken Arrow",
            "Edmond",
            "Lawton",
            "Moore",
            "Midwest City",
            "Enid",
            "Stillwater",
            "Muskogee",
            "Bartlesville",
            "Owasso",
            "Shawnee",
            "Yukon",
            "Bixby"
        ]
    },
    oregon: {
        abbreviation: "OR",
        cities: [
            "Portland",
            "Salem",
            "Eugene",
            "Gresham",
            "Hillsboro",
            "Beaverton",
            "Bend",
            "Medford",
            "Springfield",
            "Corvallis",
            "Albany",
            "Tigard",
            "Lake Oswego",
            "Keizer",
            "Grants Pass",
            "Oregon City"
        ]
    },
    pennsylvania: {
        abbreviation: "PA",
        cities: [
            "Philadelphia",
            "Pittsburgh",
            "Allentown",
            "Reading",
            "Scranton",
            "Bethlehem",
            "Lancaster",
            "Harrisburg",
            "York",
            "Wilkes-Barre",
            "Chester",
            "Erie",
            "State College",
            "Easton",
            "Lebanon",
            "Norristown"
        ]
    },
    "rhode-island": {
        abbreviation: "RI",
        cities: [
            "Providence",
            "Warwick",
            "Cranston",
            "Pawtucket",
            "East Providence",
            "Woonsocket",
            "Coventry",
            "Cumberland",
            "North Providence",
            "South Kingstown",
            "West Warwick",
            "Johnston",
            "North Kingstown",
            "Newport",
            "Bristol",
            "Westerly"
        ]
    },
    "south-carolina": {
        abbreviation: "SC",
        cities: [
            "Charleston",
            "Columbia",
            "North Charleston",
            "Mount Pleasant",
            "Rock Hill",
            "Greenville",
            "Summerville",
            "Goose Creek",
            "Hilton Head Island",
            "Sumter",
            "Florence",
            "Spartanburg",
            "Myrtle Beach",
            "Aiken",
            "Anderson",
            "Greer"
        ]
    },
    "south-dakota": {
        abbreviation: "SD",
        cities: [
            "Sioux Falls",
            "Rapid City",
            "Aberdeen",
            "Brookings",
            "Watertown",
            "Mitchell",
            "Yankton",
            "Huron",
            "Pierre",
            "Spearfish",
            "Vermillion",
            "Brandon",
            "Box Elder",
            "Madison",
            "Sturgis",
            "Belle Fourche"
        ]
    },
    tennessee: {
        abbreviation: "TN",
        cities: [
            "Nashville",
            "Memphis",
            "Knoxville",
            "Chattanooga",
            "Clarksville",
            "Murfreesboro",
            "Franklin",
            "Jackson",
            "Johnson City",
            "Bartlett",
            "Hendersonville",
            "Kingsport",
            "Collierville",
            "Smyrna",
            "Cleveland",
            "Brentwood"
        ]
    },
    texas: {
        abbreviation: "TX",
        cities: [
            "Houston",
            "San Antonio",
            "Dallas",
            "Austin",
            "Fort Worth",
            "El Paso",
            "Arlington",
            "Corpus Christi",
            "Plano",
            "Lubbock",
            "Laredo",
            "Irving",
            "Garland",
            "Frisco",
            "McKinney",
            "Amarillo",
            "Grand Prairie",
            "Brownsville",
            "Killeen",
            "Pasadena"
        ]
    },
    utah: {
        abbreviation: "UT",
        cities: [
            "Salt Lake City",
            "West Valley City",
            "Provo",
            "West Jordan",
            "Orem",
            "Sandy",
            "Ogden",
            "St. George",
            "Layton",
            "South Jordan",
            "Lehi",
            "Millcreek",
            "Taylorsville",
            "Logan",
            "Murray",
            "Draper"
        ]
    },
    vermont: {
        abbreviation: "VT",
        cities: [
            "Burlington",
            "South Burlington",
            "Rutland",
            "Barre",
            "Montpelier",
            "Winooski",
            "St. Albans",
            "Newport",
            "Vergennes",
            "Bennington",
            "Brattleboro",
            "Essex Junction",
            "Hartford",
            "Milton",
            "Colchester",
            "Shelburne"
        ]
    },
    virginia: {
        abbreviation: "VA",
        cities: [
            "Virginia Beach",
            "Norfolk",
            "Chesapeake",
            "Richmond",
            "Newport News",
            "Alexandria",
            "Hampton",
            "Roanoke",
            "Portsmouth",
            "Suffolk",
            "Lynchburg",
            "Harrisonburg",
            "Charlottesville",
            "Manassas",
            "Fredericksburg",
            "Danville"
        ]
    },
    washington: {
        abbreviation: "WA",
        cities: [
            "Seattle",
            "Spokane",
            "Tacoma",
            "Vancouver",
            "Bellevue",
            "Kent",
            "Everett",
            "Renton",
            "Federal Way",
            "Spokane Valley",
            "Kirkland",
            "Bellingham",
            "Kennewick",
            "Auburn",
            "Redmond",
            "Olympia"
        ]
    },
    "west-virginia": {
        abbreviation: "WV",
        cities: [
            "Charleston",
            "Huntington",
            "Morgantown",
            "Parkersburg",
            "Wheeling",
            "Weirton",
            "Fairmont",
            "Martinsburg",
            "Beckley",
            "Clarksburg",
            "South Charleston",
            "St. Albans",
            "Vienna",
            "Bluefield",
            "Bridgeport",
            "Elkins"
        ]
    },
    wisconsin: {
        abbreviation: "WI",
        cities: [
            "Milwaukee",
            "Madison",
            "Green Bay",
            "Kenosha",
            "Racine",
            "Appleton",
            "Waukesha",
            "Eau Claire",
            "Oshkosh",
            "Janesville",
            "West Allis",
            "La Crosse",
            "Sheboygan",
            "Wauwatosa",
            "Fond du Lac",
            "Brookfield"
        ]
    },
    wyoming: {
        abbreviation: "WY",
        cities: [
            "Cheyenne",
            "Casper",
            "Laramie",
            "Gillette",
            "Rock Springs",
            "Sheridan",
            "Green River",
            "Evanston",
            "Riverton",
            "Jackson",
            "Cody",
            "Rawlins",
            "Lander",
            "Torrington",
            "Powell",
            "Douglas"
        ]
    }
};
function getStateData(slug) {
    return stateCitiesMap[slug] || null;
}
function getStateName(slug) {
    return slug.split("-").map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/state-outlines.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stateOutlines",
    ()=>stateOutlines
]);
const stateOutlines = {
    alabama: {
        viewBox: "0 0 200 340",
        path: "M30,5 L170,5 175,15 178,40 180,80 182,120 185,160 183,200 180,240 175,280 170,310 160,330 140,335 120,332 80,330 60,328 40,325 30,315 28,280 25,240 22,200 20,160 22,120 25,80 28,40 Z"
    },
    arizona: {
        viewBox: "0 0 280 320",
        path: "M15,40 L55,10 100,5 180,5 260,15 265,50 260,90 255,130 250,170 245,210 240,250 235,280 230,310 40,305 30,260 20,210 15,160 10,100 Z"
    },
    arkansas: {
        viewBox: "0 0 280 260",
        path: "M15,15 L265,5 270,30 268,60 265,100 260,140 255,175 250,210 240,250 35,245 28,200 22,150 18,100 15,60 Z"
    },
    california: {
        viewBox: "0 0 250 420",
        path: "M80,10 L110,5 130,15 150,30 165,50 175,40 185,50 195,70 200,90 210,120 220,160 230,200 240,240 245,280 235,320 215,360 190,390 165,410 140,400 115,380 90,350 70,310 55,270 45,230 35,190 25,140 20,90 40,50 60,25 Z"
    },
    colorado: {
        viewBox: "0 0 300 220",
        path: "M10,10 L290,10 290,210 10,210 Z"
    },
    connecticut: {
        viewBox: "0 0 200 160",
        path: "M10,30 L170,5 190,40 180,70 165,100 140,120 110,135 70,150 40,140 20,115 5,80 Z"
    },
    delaware: {
        viewBox: "0 0 100 250",
        path: "M30,10 L70,5 80,30 85,70 82,110 75,150 65,190 50,230 35,245 25,210 18,160 15,110 20,60 Z"
    },
    florida: {
        viewBox: "0 0 350 300",
        path: "M5,20 L120,5 220,10 260,15 290,25 310,15 330,25 340,45 335,65 320,85 305,110 290,140 275,170 255,200 235,230 210,260 185,285 165,295 155,275 145,250 130,235 100,225 70,200 40,160 20,110 10,60 Z"
    },
    georgia: {
        viewBox: "0 0 260 300",
        path: "M45,5 L210,5 230,20 240,50 250,90 245,140 235,185 220,225 195,265 170,290 140,295 100,290 65,275 40,245 25,200 18,150 20,100 28,55 Z"
    },
    idaho: {
        viewBox: "0 0 230 380",
        path: "M60,10 L120,5 145,20 160,45 170,35 180,50 195,80 210,120 200,170 185,220 165,270 140,320 115,360 90,375 65,340 45,290 30,230 20,170 25,110 35,60 Z"
    },
    illinois: {
        viewBox: "0 0 210 360",
        path: "M80,5 L150,5 170,25 180,55 175,90 168,130 172,165 165,205 150,245 130,280 105,320 85,355 60,340 40,295 30,245 35,200 40,155 50,110 60,65 Z"
    },
    indiana: {
        viewBox: "0 0 200 310",
        path: "M50,5 L150,5 170,25 180,60 172,100 162,150 150,195 135,240 115,280 95,305 70,290 50,250 40,200 38,150 42,100 48,55 Z"
    },
    iowa: {
        viewBox: "0 0 300 210",
        path: "M10,30 L275,5 290,40 280,80 270,120 260,155 250,185 230,205 55,195 35,165 20,125 12,85 Z"
    },
    kansas: {
        viewBox: "0 0 340 210",
        path: "M10,15 L325,5 335,50 328,100 320,150 310,195 25,205 18,155 12,100 Z"
    },
    kentucky: {
        viewBox: "0 0 380 160",
        path: "M5,60 L40,25 90,8 150,5 220,8 290,5 350,12 375,35 350,70 315,90 270,100 220,108 165,115 110,120 60,125 30,130 15,140 5,110 Z"
    },
    louisiana: {
        viewBox: "0 0 260 280",
        path: "M20,5 L205,5 215,35 225,70 235,110 225,140 210,160 225,190 240,220 225,250 195,265 160,275 125,280 90,268 55,245 35,210 25,165 18,110 12,55 Z"
    },
    maine: {
        viewBox: "0 0 200 310",
        path: "M75,10 L120,5 145,25 165,55 185,90 195,130 185,170 170,210 145,250 120,280 95,305 75,295 60,260 50,215 55,170 62,125 70,75 Z"
    },
    maryland: {
        viewBox: "0 0 320 150",
        path: "M5,60 L55,30 105,12 160,5 230,10 300,25 315,55 295,80 260,70 220,80 175,85 130,90 85,100 55,108 30,120 15,100 Z"
    },
    massachusetts: {
        viewBox: "0 0 300 130",
        path: "M5,50 L75,20 140,5 210,10 280,25 295,50 275,75 235,90 185,100 130,105 80,108 45,100 15,80 Z"
    },
    michigan: {
        viewBox: "0 0 280 330",
        path: "M70,5 L125,15 155,5 180,20 210,12 240,30 265,55 275,90 260,125 240,155 215,185 190,215 165,245 140,275 115,300 90,325 65,310 45,275 30,235 20,190 30,145 40,100 50,60 Z"
    },
    minnesota: {
        viewBox: "0 0 280 320",
        path: "M45,5 L225,5 240,35 250,70 260,115 250,165 240,210 225,260 200,310 65,300 40,260 25,210 15,155 20,100 30,50 Z"
    },
    mississippi: {
        viewBox: "0 0 190 340",
        path: "M55,5 L140,5 150,25 155,55 160,90 155,130 150,170 145,210 140,250 130,285 115,320 95,335 65,330 50,300 40,260 35,215 30,170 35,125 40,80 45,40 Z"
    },
    missouri: {
        viewBox: "0 0 280 280",
        path: "M20,20 L255,5 268,40 262,85 252,125 258,160 268,200 250,240 215,265 175,275 125,272 75,260 40,235 20,190 12,140 15,90 Z"
    },
    montana: {
        viewBox: "0 0 380 220",
        path: "M5,50 L355,5 375,40 365,85 350,130 340,175 330,215 50,210 30,170 15,120 Z"
    },
    nebraska: {
        viewBox: "0 0 340 190",
        path: "M5,30 L320,5 335,40 325,80 315,120 305,155 295,185 30,180 18,140 10,95 Z"
    },
    nevada: {
        viewBox: "0 0 220 360",
        path: "M55,10 L145,5 155,30 165,70 175,120 185,170 195,220 205,270 215,320 200,355 30,340 15,270 20,200 30,130 40,65 Z"
    },
    "new-hampshire": {
        viewBox: "0 0 130 290",
        path: "M45,10 L85,5 100,35 115,75 120,120 110,165 100,205 85,245 65,275 50,290 40,260 30,215 25,165 30,115 35,65 Z"
    },
    "new-jersey": {
        viewBox: "0 0 130 250",
        path: "M40,10 L95,5 110,35 115,70 105,105 95,140 82,175 65,210 50,240 35,225 25,185 20,140 28,95 Z"
    },
    "new-mexico": {
        viewBox: "0 0 280 300",
        path: "M15,10 L270,10 270,290 15,290 Z"
    },
    "new-york": {
        viewBox: "0 0 340 230",
        path: "M5,90 L45,50 85,30 135,15 190,5 250,10 310,20 335,50 320,85 290,105 255,120 215,130 175,140 135,152 95,165 60,175 30,185 15,165 5,135 Z"
    },
    "north-carolina": {
        viewBox: "0 0 400 140",
        path: "M5,55 L50,30 100,15 160,8 230,5 310,8 380,20 395,40 375,65 335,80 280,92 225,100 170,108 115,115 65,120 30,125 15,110 Z"
    },
    "north-dakota": {
        viewBox: "0 0 300 190",
        path: "M10,15 L285,5 295,40 290,80 280,120 270,160 260,185 30,180 15,140 10,90 Z"
    },
    ohio: {
        viewBox: "0 0 220 260",
        path: "M45,5 L130,5 170,20 195,50 215,90 210,130 195,170 175,205 150,240 120,260 90,255 60,235 35,200 20,160 12,120 20,80 30,40 Z"
    },
    oklahoma: {
        viewBox: "0 0 370 220",
        path: "M5,55 L90,15 185,5 300,10 355,25 345,60 330,100 315,140 300,175 280,210 75,205 40,180 15,145 Z"
    },
    oregon: {
        viewBox: "0 0 300 210",
        path: "M5,65 L65,25 140,5 225,10 285,30 280,70 260,110 235,145 200,175 160,200 110,210 60,200 25,175 Z"
    },
    pennsylvania: {
        viewBox: "0 0 330 170",
        path: "M10,20 L310,5 325,40 318,80 308,120 295,155 30,165 15,125 10,75 Z"
    },
    "rhode-island": {
        viewBox: "0 0 100 140",
        path: "M25,10 L75,5 88,30 85,60 75,85 60,110 40,130 25,115 15,85 18,50 Z"
    },
    "south-carolina": {
        viewBox: "0 0 280 210",
        path: "M25,40 L80,12 145,5 200,10 255,25 270,55 245,95 210,130 170,160 130,185 85,200 50,195 30,165 15,120 Z"
    },
    "south-dakota": {
        viewBox: "0 0 300 190",
        path: "M10,15 L285,5 295,40 290,80 280,120 270,160 260,185 30,180 15,140 10,90 Z"
    },
    tennessee: {
        viewBox: "0 0 420 110",
        path: "M5,35 L405,10 395,45 380,65 365,80 345,90 325,100 15,95 5,70 Z"
    },
    texas: {
        viewBox: "0 0 340 360",
        path: "M80,5 L190,5 230,15 260,8 290,20 325,45 335,80 325,120 310,155 290,190 265,225 240,260 210,290 180,315 150,340 120,335 90,310 60,275 40,235 25,195 15,150 25,105 40,65 55,35 Z"
    },
    utah: {
        viewBox: "0 0 210 300",
        path: "M20,15 L155,5 165,15 175,50 185,100 195,160 200,220 205,295 15,285 20,200 12,120 Z"
    },
    vermont: {
        viewBox: "0 0 120 250",
        path: "M40,10 L80,5 95,35 105,70 100,110 90,150 75,190 58,225 42,245 30,220 22,180 18,135 22,90 30,50 Z"
    },
    virginia: {
        viewBox: "0 0 380 150",
        path: "M5,65 L40,35 85,18 140,8 205,5 275,8 345,18 375,35 360,60 320,80 275,92 225,100 175,108 125,115 75,122 40,130 15,125 5,100 Z"
    },
    washington: {
        viewBox: "0 0 300 200",
        path: "M5,60 L65,25 140,5 225,10 285,30 280,70 255,105 220,130 175,155 125,175 70,185 30,170 Z"
    },
    "west-virginia": {
        viewBox: "0 0 200 260",
        path: "M50,10 L110,5 140,25 165,55 185,90 200,130 190,170 170,205 145,230 115,250 85,265 60,250 40,215 25,175 18,130 25,85 35,50 Z"
    },
    wisconsin: {
        viewBox: "0 0 240 280",
        path: "M55,5 L125,5 160,15 185,35 210,60 225,95 215,135 200,175 180,215 155,250 125,275 95,280 65,260 40,225 25,185 18,140 25,95 35,55 Z"
    },
    wyoming: {
        viewBox: "0 0 300 220",
        path: "M10,10 L290,10 290,210 10,210 Z"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/state-location-content.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getStateLocationContent",
    ()=>getStateLocationContent,
    "stateLocationContent",
    ()=>stateLocationContent
]);
const stateLocationContent = {
    "alabama": {
        subtitle: "Commercial waste removal services for businesses across Alabama. From large cleanouts to urgent disposal needs, Tenth Rock Waste Solutions helps companies keep sites clear, compliant, and operating smoothly.",
        bullets: [
            "Emergency waste removal for Alabama businesses",
            "Rapid response for compactor failures and waste overflow",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across Alabama rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates fast, reliable waste removal to keep sites safe, compliant, and operational",
        trustedDesc: "Tenth Rock has supported businesses across Alabama for years, working with commercial clients throughout the state. Our established relationships with Alabama waste facilities help ensure efficient routing, responsive service, and competitive disposal pricing for local operations.",
        thirdHeading: "Waste solutions built for commercial operations",
        thirdDesc: "Commercial waste challenges require fast coordination and dependable service partners. Tenth Rock Waste Solutions works directly with local waste facilities and hauling partners across Alabama to coordinate bulk waste removal, site cleanouts, and operational waste disruptions with minimal downtime.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Alabama?",
                answer: "We specialize in rapid response waste services. For emergency requests in Alabama, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours of account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Alabama. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through a single point of contact and one consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Alabama?",
                answer: "We handle most non-hazardous commercial waste streams in Alabama, including general trash, recycling materials like cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in Alabama are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because you’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Alabama businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "arizona": {
        subtitle: "Commercial waste removal services for businesses across Arizona. From large property cleanouts to urgent disposal needs, Tenth Rock Waste Solutions helps companies keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste response for Arizona businesses",
            "Fast coordination for compactor breakdowns and waste overflow",
            "Perishable inventory disposal and bulk debris clearing"
        ],
        aboutDesc: "Businesses across Arizona rely on Tenth Rock Waste Solutions when unexpected waste issues interrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team organizes dependable waste removal to keep facilities safe, compliant, and running smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across Arizona for years, partnering with commercial clients throughout the state. Our established relationships with Arizona waste facilities help ensure efficient routing, reliable service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "When Waste Piles Up, We Show Up",
        thirdDesc: "Managing waste across commercial sites requires reliable coordination and experienced service partners. Tenth Rock Waste Solutions works with local disposal facilities and hauling partners throughout Arizona to coordinate bulk waste removal, site cleanouts, and operational waste disruptions while minimizing downtime.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Arizona?",
                answer: "We specialize in fast-response waste services. For emergency requests in Arizona, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Arizona. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through one point of contact and a single consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Arizona?",
                answer: "We handle most non-hazardous commercial waste streams in Arizona, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in Arizona are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Arizona businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "arkansas": {
        subtitle: "Commercial waste removal services for businesses across Arkansas. From major site cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps companies keep facilities clear, compliant, and operating without disruption.",
        bullets: [
            "Emergency waste support for Arkansas businesses",
            "Rapid coordination for compactor failures and dumpster overflow",
            "Perishable inventory disposal and large-scale debris removal"
        ],
        aboutDesc: "Businesses across Arkansas rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt daily operations. From spoiled products and refrigeration failures to large commercial cleanouts, our team coordinates reliable waste removal to keep facilities safe, compliant, and running efficiently.",
        trustedDesc: "Tenth Rock has supported businesses across Arkansas for years, partnering with commercial clients throughout the state. Our established relationships with Arkansas waste facilities help ensure efficient routing, dependable service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "When Waste Piles Up, We Show Up",
        thirdDesc: "Handling waste across commercial properties requires dependable coordination and experienced service partners. Tenth Rock Waste Solutions works with local disposal facilities and hauling partners throughout Arkansas to organize bulk waste removal, site cleanouts, and operational waste disruptions while minimizing downtime.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Arkansas?",
                answer: "We specialize in fast-response waste services. For emergency requests in Arkansas, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Arkansas. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through one point of contact and a single consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Arkansas?",
                answer: "We handle most non-hazardous commercial waste streams in Arkansas, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in Arkansas are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Arkansas businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "california": {
        subtitle: "Commercial waste removal services for businesses across California. From large facility cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep sites clear, compliant, and running efficiently.",
        bullets: [
            "Emergency waste support for California businesses",
            "Rapid coordination for compactor failures and waste overflow",
            "Perishable inventory disposal and bulk debris clearing"
        ],
        aboutDesc: "Businesses across California rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and operating smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across California for years, working with commercial clients throughout the state. Our established relationships with California waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Fast Coordination. Dependable Service. Every Time.",
        thirdDesc: "Managing waste across commercial sites requires dependable coordination and experienced service partners. Tenth Rock Waste Solutions works with local disposal facilities and hauling partners throughout California to coordinate bulk waste removal, site cleanouts, and operational waste disruptions while minimizing downtime.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in California?",
                answer: "We specialize in fast-response waste services. For emergency requests in California, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including California. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through one point of contact and a single consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in California?",
                answer: "We handle most non-hazardous commercial waste streams in California, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in California are available with flexible terms. We want clients to stay because they’re satisfied with the service--not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help California businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "colorado": {
        subtitle: "Commercial waste removal services for businesses across Colorado. From major property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste support for Colorado businesses",
            "Rapid coordination for compactor failures and waste overflow",
            "Perishable inventory disposal and bulk debris clearing"
        ],
        aboutDesc: "Businesses across Colorado rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and operating smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across Colorado for years, working with commercial clients throughout the state. Our established relationships with Colorado waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Fast Coordination. Dependable Service. Every Time.",
        thirdDesc: "Tenth Rock Waste Solutions coordinates emergency waste removal, spoiled product disposal, and large-scale commercial cleanouts across Colorado. Our team works directly with local facilities and hauling partners to resolve waste disruptions quickly and keep sites safe, compliant, and operational.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Colorado?",
                answer: "We specialize in fast-response waste services. For emergency requests in Colorado, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Colorado. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through one point of contact and a single consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Colorado?",
                answer: "We handle most non-hazardous commercial waste streams in Colorado, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in Colorado are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Colorado businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "connecticut": {
        subtitle: "Commercial waste removal services for businesses across Connecticut. From large facility cleanouts to urgent disposal needs, Tenth Rock Waste Solutions helps organizations keep sites clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste support for Connecticut businesses",
            "Rapid coordination for compactor failures and waste overflow",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across Connecticut rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and operating smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across Connecticut for years, working with commercial clients throughout the state. Our established relationships with Connecticut waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Waste Logistics Without the Headache",
        thirdDesc: "Managing waste across commercial properties requires dependable coordination and experienced service partners. Tenth Rock Waste Solutions works with local disposal facilities and hauling partners throughout Connecticut to coordinate bulk waste removal, site cleanouts, and operational waste disruptions while minimizing downtime.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Connecticut?",
                answer: "We specialize in fast-response waste services. For emergency requests in Connecticut, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Connecticut. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through one point of contact and a single consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Connecticut?",
                answer: "We handle most non-hazardous commercial waste streams in Connecticut, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in Connecticut are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Connecticut businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "delaware": {
        subtitle: "Commercial waste removal services for businesses across Delaware. From large commercial cleanouts to urgent disposal needs, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste support for Delaware businesses",
            "Rapid coordination for compactor failures and waste overflow",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across Delaware rely on Tenth Rock Waste Solutions when unexpected waste challenges disrupt operations. From spoiled inventory and refrigeration failures to large-scale commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and operating smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across Delaware for years, partnering with commercial clients throughout the state. Our established relationships with Delaware waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Waste Solutions Built to Keep Operations Running",
        thirdDesc: "Managing waste across commercial properties requires dependable coordination and experienced service partners. Tenth Rock Waste Solutions works with local disposal facilities and hauling partners throughout Delaware to coordinate bulk waste removal, site cleanouts, and operational waste disruptions while minimizing downtime.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Delaware?",
                answer: "We specialize in fast-response waste services. For emergency requests in Delaware, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Delaware. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through one point of contact and a single consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Delaware?",
                answer: "We handle most non-hazardous commercial waste streams in Delaware, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in Delaware are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Delaware businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "florida": {
        subtitle: "Commercial waste removal services for businesses across Florida. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste support for Florida businesses",
            "Rapid coordination for compactor failures and waste overflow",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across Florida rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and running smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across Florida for years, partnering with commercial clients throughout the state. Our established relationships with Florida waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Waste Solutions Built to Keep Operations Running",
        thirdDesc: "Managing waste across commercial properties requires dependable coordination and experienced service partners. Tenth Rock Waste Solutions works with local disposal facilities and hauling partners throughout Florida to coordinate bulk waste removal, site cleanouts, and operational waste disruptions while minimizing downtime.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Florida?",
                answer: "We specialize in fast-response waste services. For emergency requests in Florida, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Florida. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through one point of contact and a single consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Florida?",
                answer: "We handle most non-hazardous commercial waste streams in Florida, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in Florida are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Florida businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "georgia": {
        subtitle: "Commercial waste removal services for businesses across Georgia. From major facility cleanouts to urgent disposal needs, Tenth Rock Waste Solutions helps organizations keep sites clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste support for Georgia businesses",
            "Rapid coordination for compactor failures and waste overflow",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across Georgia rely on Tenth Rock Waste Solutions when unexpected waste challenges disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and running smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across Georgia for years, partnering with commercial clients throughout the state. Our established relationships with Georgia waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Waste Solutions Built to Keep Operations Running",
        thirdDesc: "Managing waste across commercial properties requires dependable coordination and experienced service partners. Tenth Rock Waste Solutions works with local disposal facilities and hauling partners throughout Georgia to coordinate bulk waste removal, site cleanouts, and operational waste disruptions while minimizing downtime.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Georgia?",
                answer: "We specialize in fast-response waste services. For emergency requests in Georgia, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Georgia. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through one point of contact and a single consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Georgia?",
                answer: "We handle most non-hazardous commercial waste streams in Georgia, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in Georgia are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Georgia businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "illinois": {
        subtitle: "Commercial waste removal services for businesses across Illinois. From large facility cleanouts to urgent disposal needs, Tenth Rock Waste Solutions helps companies keep sites clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste removal for Illinois businesses",
            "Rapid coordination for compactor failures and waste overflow",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across Illinois rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep sites safe, compliant, and operational.",
        trustedDesc: "Tenth Rock has supported businesses across Illinois for years, working with commercial clients throughout the state. Our established relationships with Illinois waste facilities help ensure efficient routing, responsive service, and competitive disposal pricing for local operations.",
        thirdHeading: "Rapid waste response for Illinois businesses",
        thirdDesc: "Waste disruptions rarely happen on a convenient schedule. When refrigeration systems fail, compactors break down, or waste overflow begins affecting operations, businesses need a response partner that can act quickly.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Illinois?",
                answer: "We specialize in rapid response waste services. For emergency requests in Illinois, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours of account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Illinois. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through a single point of contact and one consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Illinois?",
                answer: "We handle most non-hazardous commercial waste streams in Illinois, including general trash, recycling materials like cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in Illinois are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because you’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Illinois businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "indiana": {
        subtitle: "Commercial waste removal services for businesses across Indiana. From major property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste support for Indiana businesses",
            "Rapid coordination for compactor failures and waste overflow",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across Indiana rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and running smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across Indiana for years, partnering with commercial clients throughout the state. Our established relationships with Indiana waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Waste Solutions Built to Keep Operations Running",
        thirdDesc: "Managing waste across commercial properties requires dependable coordination and experienced service partners. Tenth Rock Waste Solutions works with local disposal facilities and hauling partners throughout Indiana to coordinate bulk waste removal, site cleanouts, and operational waste disruptions while minimizing downtime.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Indiana?",
                answer: "We specialize in fast-response waste services. For emergency requests in Indiana, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Indiana. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through one point of contact and a single consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Indiana?",
                answer: "We handle most non-hazardous commercial waste streams in Indiana, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in Indiana are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Indiana businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "iowa": {
        subtitle: "Commercial waste removal services for businesses across Iowa. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste support for Iowa businesses",
            "Rapid coordination for compactor failures and waste overflow",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across Iowa rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and running smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across Iowa for years, partnering with commercial clients throughout the state. Our established relationships with Iowa waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Reliable waste solutions for smooth operations",
        thirdDesc: "Managing waste across commercial properties requires dependable coordination and experienced service partners. Tenth Rock Waste Solutions works with local disposal facilities and hauling partners throughout Iowa to coordinate bulk waste removal, site cleanouts, and operational waste disruptions while minimizing downtime.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Iowa?",
                answer: "We specialize in fast-response waste services. For emergency requests in Iowa, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Iowa. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through one point of contact and a single consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Iowa?",
                answer: "We handle most non-hazardous commercial waste streams in Iowa, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in Iowa are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Iowa businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "kansas": {
        subtitle: "Commercial waste removal services for businesses across Kansas. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste support for Kansas businesses",
            "Fast response for compactor breakdowns and waste overflow",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across Kansas rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and running smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across Kansas for years, partnering with commercial clients throughout the state. Our established relationships with Kansas waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Waste Solutions Built for your Business",
        thirdDesc: "Managing waste across commercial properties requires dependable coordination and experienced service partners. Tenth Rock Waste Solutions works with local disposal facilities and hauling partners throughout Kansas to coordinate bulk waste removal, site cleanouts, and operational waste disruptions while minimizing downtime.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Kansas?",
                answer: "We specialize in fast-response waste services. For emergency requests in Kansas, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Kansas. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through one point of contact and a single consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Kansas?",
                answer: "We handle most non-hazardous commercial waste streams in Kansas, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in Kansas are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Kansas businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "kentucky": {
        subtitle: "Commercial waste removal services for businesses across Kentucky. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste support for Kentucky businesses",
            "Immediate coordination for compactor outages and excess waste",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across Kentucky rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and running smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across Kentucky for years, partnering with commercial clients throughout the state. Our established relationships with Kentucky waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Waste solutions that keep your operations on track",
        thirdDesc: "Keeping commercial properties clean and operational requires reliable waste coordination. Tenth Rock Waste Solutions partners with disposal facilities and hauling providers across Kentucky to manage bulk debris removal, facility cleanouts, and unexpected waste issues while helping businesses avoid unnecessary downtime.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Kentucky?",
                answer: "We specialize in fast-response waste services. For emergency requests in Kentucky, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Kentucky. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through one point of contact and a single consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Kentucky?",
                answer: "We handle most non-hazardous commercial waste streams in Kentucky, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in Kentucky are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Kentucky businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "louisiana": {
        subtitle: "Commercial waste removal services for businesses across Louisiana. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste support for Louisiana businesses",
            "Rapid coordination for compactor failures and waste overflow",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across Louisiana rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and running smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across Louisiana for years, partnering with commercial clients throughout the state. Our established relationships with Louisiana waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Commercial Waste Solutions That Work Around You",
        thirdDesc: "Commercial facilities often face complex waste challenges that require fast, organized solutions. Tenth Rock Waste Solutions coordinates with disposal sites and hauling providers across Louisiana to handle large debris removal, facility cleanouts, and unexpected waste situations with minimal disruption to operations.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Louisiana?",
                answer: "We specialize in fast-response waste services. For emergency requests in Louisiana, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Louisiana. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through one point of contact and a single consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Louisiana?",
                answer: "We handle most non-hazardous commercial waste streams in Louisiana, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in Louisiana are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Louisiana businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "maine": {
        subtitle: "Commercial waste removal services for businesses across Maine. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste support for Maine businesses",
            "Rapid coordination for compactor failures and waste overflow",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across Maine rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and running smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across Maine for years, partnering with commercial clients throughout the state. Our established relationships with Maine waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Waste Solutions Built to Keep Operations Running",
        thirdDesc: "Commercial waste challenges require organized logistics and reliable partners. Tenth Rock Waste Solutions coordinates with hauling providers and disposal facilities across Maine to manage bulk debris removal, property cleanouts, and unexpected waste issues while helping businesses keep operations running smoothly.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Maine?",
                answer: "We specialize in fast-response waste services. For emergency requests in Maine, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Maine. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through one point of contact and a single consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Maine?",
                answer: "We handle most non-hazardous commercial waste streams in Maine, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in Maine are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Maine businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "maryland": {
        subtitle: "Commercial waste removal services for businesses across Maryland. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste support for Maryland businesses",
            "Rapid coordination for compactor failures and waste overflow",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across Maryland rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and running smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across Maryland for years, partnering with commercial clients throughout the state. Our established relationships with Maryland waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Waste management solutions that keep businesses moving",
        thirdDesc: "Large-scale waste removal often requires coordination between multiple service providers. Tenth Rock Waste Solutions works throughout Maryland to connect businesses with reliable hauling partners and disposal facilities for cleanouts, debris removal, and other waste management needs.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Maryland?",
                answer: "We specialize in fast-response waste services. For emergency requests in Maryland, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Maryland. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through one point of contact and a single consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Maryland?",
                answer: "We handle most non-hazardous commercial waste streams in Maryland, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in Maryland are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Maryland businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "massachusetts": {
        subtitle: "Commercial waste removal services for businesses across Massachusetts. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste support for Massachusetts businesses",
            "Prompt action for compactor problems and waste buildup",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across Massachusetts rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and running smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across Massachusetts for years, partnering with commercial clients throughout the state. Our established relationships with Massachusetts waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Reliable waste management that keeps operations on track",
        thirdDesc: "Handling waste across commercial properties requires organized logistics and trusted partners. Tenth Rock Waste Solutions works with hauling providers and disposal facilities across Massachusetts to arrange bulk debris removal, large cleanouts, and other waste challenges while helping businesses keep operations moving.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Massachusetts?",
                answer: "We specialize in fast-response waste services. For emergency requests in Massachusetts, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Massachusetts. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through one point of contact and a single consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Massachusetts?",
                answer: "We handle most non-hazardous commercial waste streams in Massachusetts, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in Massachusetts are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Massachusetts businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "michigan": {
        subtitle: "Commercial waste removal services for businesses across Michigan. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste support for Michigan businesses",
            "Quick support for compactor malfunctions and overflow issues",
            "Safe disposal of perishable stock and bulk debris clearing"
        ],
        aboutDesc: "Businesses across Michigan rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and running smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across Michigan for years, partnering with commercial clients throughout the state. Our established relationships with Michigan waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Operational waste support built for commercial facilities",
        thirdDesc: "Managing waste across commercial properties requires dependable coordination and experienced service partners. Tenth Rock Waste Solutions works with local disposal facilities and hauling partners throughout Michigan to coordinate bulk waste removal, site cleanouts, and operational waste disruptions while minimizing downtime.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Michigan?",
                answer: "We specialize in fast-response waste services. For emergency requests in Michigan, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Michigan. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through one point of contact and a single consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Michigan?",
                answer: "We handle most non-hazardous commercial waste streams in Michigan, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in Michigan are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Michigan businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "minnesota": {
        subtitle: "Commercial waste removal services for businesses across Minnesota. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste support for Minnesota businesses",
            "Rapid response when compactors fail or waste overflows",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across Minnesota rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and running smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across Minnesota for years, partnering with commercial clients throughout the state. Our established relationships with Minnesota waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Commercial waste solutions for busy operations",
        thirdDesc: "Managing waste across commercial properties requires dependable coordination and experienced service partners. Tenth Rock Waste Solutions works with local disposal facilities and hauling partners throughout Minnesota to coordinate bulk waste removal, site cleanouts, and operational waste disruptions while minimizing downtime.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Minnesota?",
                answer: "We specialize in fast-response waste services. For emergency requests in Minnesota, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Minnesota. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through one point of contact and a single consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Minnesota?",
                answer: "We handle most non-hazardous commercial waste streams in Minnesota, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in Minnesota are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Minnesota businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "mississippi": {
        subtitle: "Commercial waste removal services for businesses across Mississippi. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste support for Mississippi businesses",
            "Immediate coordination for compactor outages and excess waste",
            "Handling spoiled inventory and large debris cleanups"
        ],
        aboutDesc: "Businesses across Mississippi rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and running smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across Mississippi for years, partnering with commercial clients throughout the state. Our established relationships with Mississippi waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Commercial waste handling you can depend on",
        thirdDesc: "Managing waste across commercial properties requires dependable coordination and experienced service partners. Tenth Rock Waste Solutions works with local disposal facilities and hauling partners throughout Mississippi to coordinate bulk waste removal, site cleanouts, and operational waste disruptions while minimizing downtime.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Mississippi?",
                answer: "We specialize in fast-response waste services. For emergency requests in Mississippi, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Mississippi. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through one point of contact and a single consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Mississippi?",
                answer: "We handle most non-hazardous commercial waste streams in Mississippi, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in Mississippi are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Mississippi businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "missouri": {
        subtitle: "Commercial waste removal services for businesses across Missouri. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste support for Missouri businesses",
            "Spoiled inventory removal and high-volume debris cleanup",
            "Quick coordination when compactors stop working or waste accumulates"
        ],
        aboutDesc: "When waste problems create operational challenges, businesses across Missouri rely on Tenth Rock Waste Solutions for fast coordination. We help organize large debris removal, site cleanouts, and urgent disposal needs so facilities can stay safe, compliant, and running efficiently.",
        trustedDesc: "Tenth Rock has supported businesses across Missouri for years, partnering with commercial clients throughout the state. Our established relationships with Missouri waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Waste Removal Solutions for Operational Facilities",
        thirdDesc: "Managing waste across commercial properties requires dependable coordination and experienced service partners. Tenth Rock Waste Solutions works with local disposal facilities and hauling partners throughout Missouri to coordinate bulk waste removal, site cleanouts, and operational waste disruptions while minimizing downtime.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Missouri?",
                answer: "We specialize in fast-response waste services. For emergency requests in Missouri, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Missouri. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through one point of contact and a single consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Missouri?",
                answer: "We handle most non-hazardous commercial waste streams in Missouri, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in Missouri are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Missouri businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "montana": {
        subtitle: "Commercial waste removal services for businesses across Montana. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste support for Montana businesses",
            "Rapid coordination for compactor failures and waste overflow",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across Montana rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and running smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across Montana for years, partnering with commercial clients throughout the state. Our established relationships with Montana waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Efficient Waste Removal for Active Facilities",
        thirdDesc: "Managing waste across commercial properties requires dependable coordination and experienced service partners. Tenth Rock Waste Solutions works with local disposal facilities and hauling partners throughout Montana to coordinate bulk waste removal, site cleanouts, and operational waste disruptions while minimizing downtime.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Montana?",
                answer: "We specialize in fast-response waste services. For emergency requests in Montana, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Montana. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through one point of contact and a single consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Montana?",
                answer: "We handle most non-hazardous commercial waste streams in Montana, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in Montana are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Montana businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "nebraska": {
        subtitle: "Commercial waste removal services for businesses across Nebraska. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Responsive waste coordination for Nebraska businesses",
            "Fast response for compactor outages and waste overflow",
            "Large-volume debris removal and spoiled inventory disposal"
        ],
        aboutDesc: "Businesses across Nebraska turn to Tenth Rock Waste Solutions when waste issues interrupt normal operations. From clearing large amounts of debris to coordinating facility cleanouts and urgent disposal needs, our team arranges dependable removal solutions that help businesses stay safe, compliant, and operating without unnecessary disruption.",
        trustedDesc: "Tenth Rock has supported businesses across Nebraska for years, partnering with commercial clients throughout the state. Our established relationships with Nebraska waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Commercial Waste Removal that Keeps Business Moving",
        thirdDesc: "Managing waste across commercial properties requires dependable coordination and experienced service partners. Tenth Rock Waste Solutions works with local disposal facilities and hauling partners throughout Nebraska to coordinate bulk waste removal, site cleanouts, and operational waste disruptions while minimizing downtime.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Nebraska?",
                answer: "We specialize in fast-response waste services. For emergency requests in Nebraska, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Nebraska. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through one point of contact and a single consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Nebraska?",
                answer: "We handle most non-hazardous commercial waste streams in Nebraska, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in Nebraska are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Nebraska businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "nevada": {
        subtitle: "Commercial waste removal services for businesses across Nevada. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste support for Nevada businesses",
            "Rapid coordination for compactor failures and waste overflow",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across Nevada rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and running smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across Nevada for years, partnering with commercial clients throughout the state. Our established relationships with Nevada waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Coordinated Waste Services for Large-Scale Operations",
        thirdDesc: "Managing waste across commercial properties requires dependable coordination and experienced service partners. Tenth Rock Waste Solutions works with local disposal facilities and hauling partners throughout Nevada to coordinate bulk waste removal, site cleanouts, and operational waste disruptions while minimizing downtime.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Nevada?",
                answer: "We specialize in fast-response waste services. For emergency requests in Nevada, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Nevada. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through one point of contact and a single consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Nevada?",
                answer: "We handle most non-hazardous commercial waste streams in Nevada, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in Nevada are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Nevada businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "new-hampshire": {
        subtitle: "Commercial waste removal services for businesses across New Hampshire. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste support for New Hampshire businesses",
            "Rapid coordination for compactor failures and waste overflow",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across New Hampshire rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and running smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across New Hampshire for years, partnering with commercial clients throughout the state. Our established relationships with New Hampshire waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Reliable Waste Management for Commercial Sites",
        thirdDesc: "Managing waste across commercial properties requires dependable coordination and experienced service partners. Tenth Rock Waste Solutions works with local disposal facilities and hauling partners throughout New Hampshire to coordinate bulk waste removal, site cleanouts, and operational waste disruptions while minimizing downtime.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in New Hampshire?",
                answer: "We specialize in fast-response waste services. For emergency requests in New Hampshire, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including New Hampshire. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through one point of contact and a single consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in New Hampshire?",
                answer: "We handle most non-hazardous commercial waste streams in New Hampshire, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in New Hampshire are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help New Hampshire businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "new-jersey": {
        subtitle: "Commercial waste removal services for businesses across New Jersey. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste support for New Jersey businesses",
            "Rapid coordination for compactor failures and waste overflow",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across New Jersey rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and running smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across New Jersey for years, partnering with commercial clients throughout the state. Our established relationships with New Jersey waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Reliable Waste Management for Commercial Sites",
        thirdDesc: "Businesses across New Jersey rely on dependable waste logistics to keep operations running smoothly. Tenth Rock Waste Solutions partners with local haulers and disposal facilities to coordinate large debris removal, site cleanouts, and other commercial waste needs.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in New Jersey?",
                answer: "We specialize in fast-response waste services. For emergency requests in New Jersey, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including New Jersey. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through one point of contact and a single consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in New Jersey?",
                answer: "We handle most non-hazardous commercial waste streams in New Jersey, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in New Jersey are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help New Jersey businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "new-mexico": {
        subtitle: "Commercial waste removal services for businesses across New Mexico. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste removal for New Mexico businesses",
            "Rapid response for compactor failures and waste overflow",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across New Mexico rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and running smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across New Mexico for years, partnering with commercial clients throughout the state. Our established relationships with New Mexico waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Operational waste solutions for busy facilities",
        thirdDesc: "When waste disruptions occur, quick and reliable coordination is essential. Tenth Rock Waste Solutions connects New Mexico businesses with trusted hauling partners and disposal facilities to manage bulk waste removal, facility cleanouts, and other commercial waste needs.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in New Mexico?",
                answer: "We specialize in rapid response waste services. For emergency requests in New Mexico, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including New Mexico. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through a single point of contact and one consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in New Mexico?",
                answer: "We handle most non-hazardous commercial waste streams in New Mexico, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in New Mexico are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help New Mexico businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "new-york": {
        subtitle: "Commercial waste removal services for businesses across New York. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "On-demand waste removal for businesses across New York",
            "Quick coordination when compactors fail or waste builds up",
            "Removal of spoiled inventory and large debris loads"
        ],
        aboutDesc: "When waste issues interrupt normal operations, businesses across New York turn to Tenth Rock Waste Solutions for support. Our team coordinates reliable removal services for situations ranging from large facility cleanouts to unexpected waste events, helping companies maintain safe and compliant environments.",
        trustedDesc: "Tenth Rock has supported businesses across New York for years, partnering with commercial clients throughout the state. Our established relationships with New York waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Waste solutions tailored for business facilities",
        thirdDesc: "Commercial waste challenges require fast coordination and dependable service partners. Tenth Rock Waste Solutions works with local disposal facilities and hauling partners across New York to coordinate bulk waste removal, site cleanouts, and operational waste disruptions with minimal downtime.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in New York?",
                answer: "We specialize in rapid response waste services. For emergency requests in New York, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including New York. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through a single point of contact and one consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in New York?",
                answer: "We handle most non-hazardous commercial waste streams in New York, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in New York are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help New York businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "north-carolina": {
        subtitle: "Commercial waste removal services for businesses across North Carolina. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste removal for North Carolina businesses",
            "Rapid response for compactor failures and waste overflow",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across North Carolina rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and running smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across North Carolina for years, partnering with commercial clients throughout the state. Our established relationships with North Carolina waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Waste solutions built for commercial operations",
        thirdDesc: "Commercial waste challenges require fast coordination and dependable service partners. Tenth Rock Waste Solutions works with local disposal facilities and hauling partners across North Carolina to coordinate bulk waste removal, site cleanouts, and operational waste disruptions with minimal downtime.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in North Carolina?",
                answer: "We specialize in rapid response waste services. For emergency requests in North Carolina, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including North Carolina. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through a single point of contact and one consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in North Carolina?",
                answer: "We handle most non-hazardous commercial waste streams in North Carolina, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in North Carolina are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help North Carolina businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "north-dakota": {
        subtitle: "Commercial waste removal services for businesses across North Dakota. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste removal for North Dakota businesses",
            "Rapid response for compactor failures and waste overflow",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across North Dakota rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and running smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across North Dakota for years, partnering with commercial clients throughout the state. Our established relationships with North Dakota waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Commercial Waste Removal That Keeps Business Moving",
        thirdDesc: "Businesses facing large waste disruptions need dependable support. Tenth Rock Waste Solutions works alongside hauling providers and disposal facilities throughout North Dakota to arrange bulk waste removal, commercial cleanouts, and other waste-related operational solutions.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in North Dakota?",
                answer: "We specialize in rapid response waste services. For emergency requests in North Dakota, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including North Dakota. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through a single point of contact and one consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in North Dakota?",
                answer: "We handle most non-hazardous commercial waste streams in North Dakota, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in North Dakota are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help North Dakota businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "ohio": {
        subtitle: "Commercial waste removal services for businesses across Ohio. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste removal for Ohio businesses",
            "Rapid response for compactor failures and waste overflow",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across Ohio rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and running smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across Ohio for years, partnering with commercial clients throughout the state. Our established relationships with Ohio waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Waste Services Designed for Commercial Operations",
        thirdDesc: "Commercial waste doesn't wait. Tenth Rock coordinates bulk removal, site cleanouts, and operational disruptions across Ohio -- fast, dependable, and without the downtime.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Ohio?",
                answer: "We specialize in rapid response waste services. For emergency requests in Ohio, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Ohio. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through a single point of contact and one consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Ohio?",
                answer: "We handle most non-hazardous commercial waste streams in Ohio, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in Ohio are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Ohio businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "oklahoma": {
        subtitle: "Commercial waste removal services for businesses across Oklahoma. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste removal for Oklahoma businesses",
            "Rapid response for compactor failures and waste overflow",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across Oklahoma rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and running smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across Oklahoma for years, partnering with commercial clients throughout the state. Our established relationships with Oklahoma waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Waste solutions built for commercial operations",
        thirdDesc: "Commercial waste challenges require fast coordination and dependable service partners. Tenth Rock Waste Solutions works with local disposal facilities and hauling partners across Oklahoma to coordinate bulk waste removal, site cleanouts, and operational waste disruptions with minimal downtime.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Oklahoma?",
                answer: "We specialize in rapid response waste services. For emergency requests in Oklahoma, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Oklahoma. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through a single point of contact and one consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Oklahoma?",
                answer: "We handle most non-hazardous commercial waste streams in Oklahoma, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in Oklahoma are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Oklahoma businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "oregon": {
        subtitle: "Commercial waste removal services for businesses across Oregon. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste removal for Oregon businesses",
            "Rapid response for compactor failures and waste overflow",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across Oregon rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and running smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across Oregon for years, partnering with commercial clients throughout the state. Our established relationships with Oregon waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Keeping Businesses Moving, One Haul at a Time",
        thirdDesc: "Commercial waste challenges require fast coordination and dependable service partners. Tenth Rock Waste Solutions works with local disposal facilities and hauling partners across Oregon to coordinate bulk waste removal, site cleanouts, and operational waste disruptions with minimal downtime.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Oregon?",
                answer: "We specialize in rapid response waste services. For emergency requests in Oregon, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Oregon. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through a single point of contact and one consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Oregon?",
                answer: "We handle most non-hazardous commercial waste streams in Oregon, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in Oregon are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Oregon businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "pennsylvania": {
        subtitle: "Commercial waste removal services for businesses across Pennsylvania. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste removal for Pennsylvania businesses",
            "Rapid response for compactor failures and waste overflow",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across Pennsylvania rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations.",
        trustedDesc: "Tenth Rock has supported businesses across Pennsylvania for years, partnering with commercial clients throughout the state. Our established relationships with Pennsylvania waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Rapid waste response for Pennsylvania businesses",
        thirdDesc: "Waste emergencies rarely happen on a convenient schedule. When refrigeration systems fail, compactors break down, or waste overflow begins affecting operations, businesses need a response partner that can move quickly.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Pennsylvania?",
                answer: "We specialize in rapid response waste services. For emergency requests in Pennsylvania, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Pennsylvania. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through a single point of contact and one consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Pennsylvania?",
                answer: "We handle most non-hazardous commercial waste streams in Pennsylvania, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term Service agreements, many of our commercial waste services in Pennsylvania are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Pennsylvania businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "rhode-island": {
        subtitle: "Commercial waste removal services for businesses across Rhode Island. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste removal for Rhode Island businesses",
            "Rapid response for compactor failures and waste overflow",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across Rhode Island rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and running smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across Rhode Island for years, partnering with commercial clients throughout the state. Our established relationships with Rhode Island waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Dependable Waste Coordination Across Rhode Island",
        thirdDesc: "Commercial waste challenges require fast coordination and dependable service partners. Tenth Rock Waste Solutions works with local disposal facilities and hauling partners across Rhode Island to coordinate bulk waste removal, site cleanouts, and operational waste disruptions with minimal downtime.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Rhode Island?",
                answer: "We specialize in rapid response waste services. For emergency requests in Rhode Island, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Rhode Island. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through a single point of contact and one consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Rhode Island?",
                answer: "We handle most non-hazardous commercial waste streams in Rhode Island, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in Rhode Island are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Rhode Island businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "south-carolina": {
        subtitle: "Commercial waste removal services for businesses across South Carolina. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste removal for South Carolina businesses",
            "Rapid response for compactor failures and waste overflow",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across South Carolina rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and running smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across South Carolina for years, partnering with commercial clients throughout the state. Our established relationships with South Carolina waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Waste Logistics Without the Headache",
        thirdDesc: "Commercial waste challenges require fast coordination and dependable service partners. Tenth Rock Waste Solutions works with local disposal facilities and hauling partners across South Carolina to coordinate bulk waste removal, site cleanouts, and operational waste disruptions with minimal downtime.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in South Carolina?",
                answer: "We specialize in rapid response waste services. For emergency requests in South Carolina, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including South Carolina. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through a single point of contact and one consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in South Carolina?",
                answer: "We handle most non-hazardous commercial waste streams in South Carolina, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in South Carolina are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help South Carolina businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "south-dakota": {
        subtitle: "Commercial waste removal services for businesses across South Dakota. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste removal for South Dakota businesses",
            "Rapid response for compactor failures and waste overflow",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across South Dakota rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and running smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across South Dakota for years, partnering with commercial clients throughout the state. Our established relationships with South Dakota waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Waste solutions built to keep operations running",
        thirdDesc: "Commercial waste challenges require fast coordination and dependable service partners. Tenth Rock Waste Solutions works with local disposal facilities and hauling partners across South Dakota to coordinate bulk waste removal, site cleanouts, and operational waste disruptions with minimal downtime.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in South Dakota?",
                answer: "We specialize in rapid response waste services. For emergency requests in South Dakota, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including South Dakota. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through a single point of contact and one consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in South Dakota?",
                answer: "We handle most non-hazardous commercial waste streams in South Dakota, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in South Dakota are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help South Dakota businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "tennessee": {
        subtitle: "Commercial waste removal services for businesses across Tennessee. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste removal for Tennessee businesses",
            "Rapid response for compactor failures and waste overflow",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across Tennessee rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and running smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across Tennessee for years, partnering with commercial clients throughout the state. Our established relationships with Tennessee waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Commercial Waste Solutions That Work Around You",
        thirdDesc: "Commercial waste challenges require fast coordination and dependable service partners. Tenth Rock Waste Solutions works with local disposal facilities and hauling partners across Tennessee to coordinate bulk waste removal, site cleanouts, and operational waste disruptions with minimal downtime.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Tennessee?",
                answer: "We specialize in rapid response waste services. For emergency requests in Tennessee, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Tennessee. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through a single point of contact and one consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Tennessee?",
                answer: "We handle most non-hazardous commercial waste streams in Tennessee, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in Tennessee are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Tennessee businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "texas": {
        subtitle: "Commercial waste removal services for businesses across Texas. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste removal for Texas businesses",
            "Rapid response for compactor failures and waste overflow",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across Texas rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and running smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across Texas for years, partnering with commercial clients throughout the state. Our established relationships with Texas waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Hauling, Cleanouts, and Coordination -- All in One Place",
        thirdDesc: "Commercial waste challenges require fast coordination and dependable service partners. Tenth Rock Waste Solutions works with local disposal facilities and hauling partners across Texas to coordinate bulk waste removal, site cleanouts, and operational waste disruptions with minimal downtime.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Texas?",
                answer: "We specialize in rapid response waste services. For emergency requests in Texas, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Texas. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through a single point of contact and one consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Texas?",
                answer: "We handle most non-hazardous commercial waste streams in Texas, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in Texas are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Texas businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "utah": {
        subtitle: "Commercial waste removal services for businesses across Utah. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste removal for Utah businesses",
            "Rapid response for compactor failures and waste overflow",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across Utah rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and running smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across Utah for years, partnering with commercial clients throughout the state. Our established relationships with Utah waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Waste Solutions for Utah Businesses",
        thirdDesc: "",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Utah?",
                answer: "We specialize in rapid response waste services. For emergency requests in Utah, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Utah. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through a single point of contact and one consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Utah?",
                answer: "We handle most non-hazardous commercial waste streams in Utah, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in Utah are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Utah businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "vermont": {
        subtitle: "Commercial waste removal services for businesses across Vermont. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste removal for Vermont businesses",
            "Rapid response for compactor failures and waste overflow",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across Vermont rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and running smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across Vermont for years, partnering with commercial clients throughout the state. Our established relationships with Vermont waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Coordinated waste solutions when operations can’t slow down",
        thirdDesc: "Commercial waste challenges require fast coordination and dependable service partners. Tenth Rock Waste Solutions works with local disposal facilities and hauling partners across Vermont to coordinate bulk waste removal, site cleanouts, and operational waste disruptions with minimal downtime.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Vermont?",
                answer: "We specialize in rapid response waste services. For emergency requests in Vermont, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Vermont. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through a single point of contact and one consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Vermont?",
                answer: "We handle most non-hazardous commercial waste streams in Vermont, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in Vermont are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Vermont businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "virginia": {
        subtitle: "Commercial waste removal services for businesses across Virginia. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste removal for Virginia businesses",
            "Rapid response for compactor failures and waste overflow",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across Virginia rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and running smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across Virginia for years, partnering with commercial clients throughout the state. Our established relationships with Virginia waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Coordinated waste solutions when operations can’t slow down",
        thirdDesc: "Commercial waste challenges require fast coordination and dependable service partners. Tenth Rock Waste Solutions works with local disposal facilities and hauling partners across Virginia to coordinate bulk waste removal, site cleanouts, and operational waste disruptions with minimal downtime.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Virginia?",
                answer: "We specialize in rapid response waste services. For emergency requests in Virginia, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Virginia. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through a single point of contact and one consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Virginia?",
                answer: "We handle most non-hazardous commercial waste streams in Virginia, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in Virginia are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Virginia businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "washington": {
        subtitle: "Commercial waste removal services for businesses across Washington. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste removal for Washington businesses",
            "Rapid response for compactor failures and waste overflow",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across Washington rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations.",
        trustedDesc: "Tenth Rock has supported businesses across Washington for years, partnering with commercial clients throughout the state. Our established relationships with Washington waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Waste coordination built for operational demands",
        thirdDesc: "Coordinating commercial waste removal often requires quick response times and reliable service partners. Tenth Rock Waste Solutions collaborates with local hauling providers and disposal facilities across Washington to manage bulk waste removal, site cleanouts, and operational waste disruptions while keeping business downtime to a minimum.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Washington?",
                answer: "We specialize in rapid response waste services. For emergency requests in Washington, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Washington. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through a single point of contact and one consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Washington?",
                answer: "We handle most non-hazardous commercial waste streams in Washington, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in Washington are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Washington businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "west-virginia": {
        subtitle: "Commercial waste removal services for businesses across West Virginia. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste removal for West Virginia businesses",
            "Rapid response for compactor failures and waste overflow",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across West Virginia rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and running smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across West Virginia for years, partnering with commercial clients throughout the state. Our established relationships with West Virginia waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Coordinated waste removal for busy operations",
        thirdDesc: "Commercial waste challenges require fast coordination and dependable service partners. Tenth Rock Waste Solutions works with local disposal facilities and hauling partners across West Virginia to coordinate bulk waste removal, site cleanouts, and operational waste disruptions with minimal downtime.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in West Virginia?",
                answer: "We specialize in rapid response waste services. For emergency requests in West Virginia, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including West Virginia. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through a single point of contact and one consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in West Virginia?",
                answer: "We handle most non-hazardous commercial waste streams in West Virginia, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in West Virginia are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help West Virginia businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "wisconsin": {
        subtitle: "Commercial waste removal services for businesses across Wisconsin. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste removal for Wisconsin businesses",
            "Rapid response for compactor failures and waste overflow",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across Wisconsin rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and running smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across Wisconsin for years, partnering with commercial clients throughout the state. Our established relationships with Wisconsin waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Waste solutions that keep operations running smoothly",
        thirdDesc: "Managing large waste volumes requires quick response and reliable partners. Tenth Rock Waste Solutions coordinates with hauling providers and disposal facilities throughout Wisconsin to handle bulk debris removal, site cleanouts, and unexpected waste issues while keeping operations moving.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Wisconsin?",
                answer: "We specialize in rapid response waste services. For emergency requests in Wisconsin, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Wisconsin. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through a single point of contact and one consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Wisconsin?",
                answer: "We handle most non-hazardous commercial waste streams in Wisconsin, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in Wisconsin are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Wisconsin businesses maximize potential rebates for recyclable materials."
            }
        ]
    },
    "wyoming": {
        subtitle: "Commercial waste removal services for businesses across Wyoming. From large property cleanouts to urgent disposal situations, Tenth Rock Waste Solutions helps organizations keep facilities clear, compliant, and operating efficiently.",
        bullets: [
            "Emergency waste removal for Wyoming businesses",
            "Rapid response for compactor failures and waste overflow",
            "Perishable inventory disposal and bulk debris removal"
        ],
        aboutDesc: "Businesses across Wyoming rely on Tenth Rock Waste Solutions when unexpected waste problems disrupt operations. From spoiled inventory and refrigeration failures to large commercial cleanouts, our team coordinates dependable waste removal to keep facilities safe, compliant, and running smoothly.",
        trustedDesc: "Tenth Rock has supported businesses across Wyoming for years, partnering with commercial clients throughout the state. Our established relationships with Wyoming waste facilities help ensure efficient routing, responsive service coordination, and competitive disposal pricing for local operations.",
        thirdHeading: "Dependable waste coordination when it matters most",
        thirdDesc: "Waste disruptions can slow down business operations without the right support. Tenth Rock Waste Solutions works with hauling providers and disposal facilities throughout Wyoming to arrange large-volume waste removal, facility cleanouts, and urgent debris management with minimal interruption.",
        faqs: [
            {
                question: "How quickly can you arrange a waste pickup in Wyoming?",
                answer: "We specialize in rapid response waste services. For emergency requests in Wyoming, we can often coordinate on-site pickup within hours. For standard commercial waste services, most businesses can begin service within 24-48 hours after account setup."
            },
            {
                question: "Do you service multiple locations nationwide?",
                answer: "Yes. Tenth Rock provides commercial waste management services in all 50 states, including Wyoming. Our centralized management platform allows businesses to coordinate waste services for hundreds of locations through a single point of contact and one consolidated invoice."
            },
            {
                question: "What types of commercial waste do you handle in Wyoming?",
                answer: "We handle most non-hazardous commercial waste streams in Wyoming, including general trash, recycling materials such as cardboard, plastic, and metal, construction debris, organic waste, and e-waste. We can also coordinate specialized hazmat disposal services when needed."
            },
            {
                question: "Are there long-term contracts for waste services?",
                answer: "We believe in earning your business every day. While we offer cost savings through long-term service agreements, many of our commercial waste services in Wyoming are available with flexible terms. We want clients to stay because they’re satisfied with the service, not because they’re locked into a contract."
            },
            {
                question: "How do you help businesses meet sustainability goals?",
                answer: "We help businesses improve waste diversion through recycling programs, detailed reporting, and waste audits. Our goal is to reduce landfill use, identify recycling opportunities, and help Wyoming businesses maximize potential rebates for recyclable materials."
            }
        ]
    }
};
function getStateLocationContent(slug) {
    return stateLocationContent[slug] || null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/locations/[slug]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LocationTemplatePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$phone$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/phone-input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-client] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$CommercialWasteServices$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/CommercialWasteServices.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$CtaBannerSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/CtaBannerSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$CaseStudySection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/CaseStudySection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$FaqSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/FaqSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$LocationSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/LocationSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$FinalCtaSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/FinalCtaSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ProcessSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/ProcessSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$state$2d$cities$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/state-cities.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$state$2d$outlines$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/state-outlines.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$state$2d$location$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/state-location-content.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
;
const imgPlaceholder = "/images/stock/service-centralized-program.jpg";
const imgInfoBlock = "/images/stock/service-dumpster-rental.jpg";
function formatSlug(slug) {
    return slug.split("-").map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
function LocationTemplatePage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const slug = params?.slug || "new-york";
    const locationName = formatSlug(slug);
    const stateData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$state$2d$cities$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStateData"])(slug);
    const stateContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$state$2d$location$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStateLocationContent"])(slug);
    const aboutAccordions = [
        {
            title: `About ${locationName} Waste Solutions`,
            benefits: stateContent?.bullets || [
                "Emergency waste removal for local businesses",
                "Rapid response for compactor failures and waste overflow",
                "Perishable inventory disposal and bulk debris removal"
            ],
            description: stateContent?.aboutDesc || "Our local crews are fully licensed, insured, and trained to handle commercial waste for businesses of all sizes. From emergency overflow pickups to scheduled dumpster service, we deliver fast, reliable waste solutions backed by our nationwide infrastructure."
        },
        {
            title: `Trusted by ${locationName} Businesses`,
            benefits: [],
            description: stateContent?.trustedDesc || "Our operations in this area date back over a decade. We've served hundreds of commercial clients and have deep relationships with local waste facilities, ensuring efficient routing and competitive pricing for your business."
        }
    ];
    const [openAccordion, setOpenAccordion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        interest: "",
        message: "",
        consent: false
    });
    const handleInputChange = (field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/locations/[slug]/page.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative bg-[#042940] pt-24 md:pt-28 overflow-hidden",
                "aria-labelledby": "location-hero-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: imgPlaceholder,
                                alt: "",
                                className: "w-full h-full object-cover",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-[#042940] via-[#042940]/95 to-[#042940]/70"
                            }, void 0, false, {
                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/locations/[slug]/page.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative container mx-auto px-4 md:px-8 py-16 sm:py-20 lg:py-24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-2xl",
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
                                    duration: 0.6
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        id: "location-hero-heading",
                                        className: "text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.05] tracking-tighter mb-4 sm:mb-6 max-w-[800px] lg:max-w-[950px]",
                                        children: [
                                            "Commercial Waste Services in ",
                                            locationName
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base text-white/80 mb-6 sm:mb-8 max-w-md leading-relaxed",
                                        children: stateContent?.subtitle || "On-demand waste removal, dumpster rentals, and managed programs for businesses across the region. Local crews, nationwide support."
                                    }, void 0, false, {
                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row gap-3 sm:gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "lg",
                                                className: "w-full sm:w-auto bg-[#c5d520] hover:bg-[#d6d98b] active:bg-[#d6d98b] text-[#042940] shadow-[0_0_40px_rgba(197,213,32,0.3)] hover:shadow-[0_0_60px_rgba(197,213,32,0.5)] transition-all transform md:hover:-translate-y-1 md:hover:scale-105 active:scale-95 min-h-[52px] whitespace-nowrap",
                                                "data-testid": "button-location-cta",
                                                children: "Request A Service"
                                            }, void 0, false, {
                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "lg",
                                                variant: "outline",
                                                className: "w-full sm:w-auto backdrop-blur-md bg-white/5 border-white/20 text-white hover:bg-white active:bg-white hover:text-[#042940] active:text-[#042940] shadow-lg transition-all transform md:hover:-translate-y-1 md:hover:scale-105 active:scale-95 min-h-[52px] whitespace-nowrap",
                                                "data-testid": "button-location-phone",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                        className: "mr-2 h-5 w-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 19
                                                    }, this),
                                                    "727.510.5454"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                lineNumber: 116,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/locations/[slug]/page.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/locations/[slug]/page.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/locations/[slug]/page.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative bg-white",
                "aria-labelledby": "about-location-heading",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 md:px-8 pt-8 md:pt-10 pb-12 md:pb-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-start",
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
                                    duration: 0.6
                                },
                                className: "space-y-0",
                                children: aboutAccordions.map((section, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            idx > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-px bg-primary/10 my-6"
                                            }, void 0, false, {
                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                lineNumber: 145,
                                                columnNumber: 31
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setOpenAccordion(openAccordion === idx ? -1 : idx),
                                                className: "w-full flex items-center justify-between gap-4 group py-2",
                                                "aria-expanded": openAccordion === idx,
                                                "data-testid": `accordion-about-${idx}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        id: idx === 0 ? "about-location-heading" : undefined,
                                                        className: "text-4xl md:text-5xl font-medium text-primary tracking-tighter leading-tight text-left",
                                                        children: section.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-11 h-11 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${openAccordion === idx ? "bg-primary border-primary" : "border-primary/20 group-hover:border-primary/40"}`,
                                                        children: openAccordion === idx ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                                                            className: "w-5 h-5 text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/locations/[slug]/page.tsx",
                                                            lineNumber: 166,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                            className: "w-5 h-5 text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/locations/[slug]/page.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                lineNumber: 146,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                initial: false,
                                                children: openAccordion === idx && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                                        duration: 0.3,
                                                        ease: "easeInOut"
                                                    },
                                                    className: "overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pt-4 pb-2 space-y-5",
                                                        children: [
                                                            section.benefits.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-3",
                                                                children: section.benefits.map((benefit, bIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-start gap-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                className: "w-5 h-5 text-[#c5d520] mt-0.5 shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                                                lineNumber: 187,
                                                                                columnNumber: 35
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-primary/80 font-medium",
                                                                                children: benefit
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                                                lineNumber: 188,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        ]
                                                                    }, bIdx, true, {
                                                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                                                        lineNumber: 186,
                                                                        columnNumber: 33
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                                lineNumber: 184,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-primary/70 leading-relaxed",
                                                                children: section.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                                lineNumber: 193,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/locations/[slug]/page.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                lineNumber: 173,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                        lineNumber: 144,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                lineNumber: 136,
                                columnNumber: 13
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
                                className: "bg-white rounded-[5px] shadow-xl border border-[#042940]/5 p-6 sm:p-8 lg:-mt-32 relative z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl md:text-2xl font-bold text-[#042940] mb-2",
                                                children: "Request a Quote"
                                            }, void 0, false, {
                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                lineNumber: 211,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#042940]/70 text-sm",
                                                children: "Fill out the form below and we'll get back to you shortly."
                                            }, void 0, false, {
                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                lineNumber: 212,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        className: "space-y-5",
                                        onSubmit: (e)=>{
                                            e.preventDefault();
                                            router.push("/book-a-call");
                                        },
                                        "data-testid": "form-location-quote",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "firstName",
                                                                className: "block text-sm font-medium text-[#042940] mb-2",
                                                                children: "First name"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                                lineNumber: 224,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                id: "firstName",
                                                                value: formData.firstName,
                                                                onChange: (e)=>handleInputChange("firstName", e.target.value),
                                                                className: "w-full h-12 px-4 border border-[#042940]/20 rounded-[5px] bg-white text-[#042940] focus:border-[#c5d520] focus:ring-1 focus:ring-[#c5d520] outline-none transition-colors",
                                                                "data-testid": "input-firstName"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                                lineNumber: 227,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "lastName",
                                                                className: "block text-sm font-medium text-[#042940] mb-2",
                                                                children: "Last name"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                                lineNumber: 237,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                id: "lastName",
                                                                value: formData.lastName,
                                                                onChange: (e)=>handleInputChange("lastName", e.target.value),
                                                                className: "w-full h-12 px-4 border border-[#042940]/20 rounded-[5px] bg-white text-[#042940] focus:border-[#c5d520] focus:ring-1 focus:ring-[#c5d520] outline-none transition-colors",
                                                                "data-testid": "input-lastName"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                                lineNumber: 240,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                lineNumber: 222,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "email",
                                                                className: "block text-sm font-medium text-[#042940] mb-2",
                                                                children: "Email"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                                lineNumber: 253,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "email",
                                                                id: "email",
                                                                value: formData.email,
                                                                onChange: (e)=>handleInputChange("email", e.target.value),
                                                                className: "w-full h-12 px-4 border border-[#042940]/20 rounded-[5px] bg-white text-[#042940] focus:border-[#c5d520] focus:ring-1 focus:ring-[#c5d520] outline-none transition-colors",
                                                                "data-testid": "input-email"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                                lineNumber: 256,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                                        lineNumber: 252,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "phone",
                                                                className: "block text-sm font-medium text-[#042940] mb-2",
                                                                children: "Phone number"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                                lineNumber: 266,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$phone$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhoneInput"], {
                                                                id: "phone",
                                                                value: formData.phone,
                                                                onChange: (value)=>handleInputChange("phone", value),
                                                                className: "w-full h-12 border-[#042940]/20 rounded-[5px] focus:border-[#c5d520] focus:ring-[#c5d520] transition-colors",
                                                                "data-testid": "input-phone"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                                lineNumber: 269,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                                        lineNumber: 265,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                lineNumber: 251,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "company",
                                                                className: "block text-sm font-medium text-[#042940] mb-2",
                                                                children: "Company"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                                lineNumber: 281,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                id: "company",
                                                                value: formData.company,
                                                                onChange: (e)=>handleInputChange("company", e.target.value),
                                                                className: "w-full h-12 px-4 border border-[#042940]/20 rounded-[5px] bg-white text-[#042940] focus:border-[#c5d520] focus:ring-1 focus:ring-[#c5d520] outline-none transition-colors",
                                                                "data-testid": "input-company"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                                lineNumber: 284,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "interest",
                                                                className: "block text-sm font-medium text-[#042940] mb-2",
                                                                children: "I'm interested in help with:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                                lineNumber: 294,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                id: "interest",
                                                                value: formData.interest,
                                                                onChange: (e)=>handleInputChange("interest", e.target.value),
                                                                className: "w-full h-12 pl-4 pr-10 border border-[#042940]/20 rounded-[5px] bg-white text-[#042940] focus:border-[#c5d520] focus:ring-1 focus:ring-[#c5d520] outline-none transition-colors appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23042940%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat",
                                                                "data-testid": "select-interest",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        disabled: true,
                                                                        children: "Select one..."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                                                        lineNumber: 304,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "emergency-waste-removal",
                                                                        children: "Emergency Waste Removal"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                                                        lineNumber: 305,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "specialized-project-logistics",
                                                                        children: "Specialized Project Logistics"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                                                        lineNumber: 306,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "dumpsters-containers",
                                                                        children: "Dumpsters & Temporary Containers"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                                                        lineNumber: 307,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "waste-operations-advisory",
                                                                        children: "Waste Operations Advisory & Enablement"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                                                        lineNumber: 308,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "other",
                                                                        children: "Other"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                                                        lineNumber: 309,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                                lineNumber: 297,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                lineNumber: 279,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "message",
                                                        className: "block text-sm font-medium text-[#042940] mb-2",
                                                        children: "Message"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                                        lineNumber: 315,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        id: "message",
                                                        rows: 4,
                                                        value: formData.message,
                                                        onChange: (e)=>handleInputChange("message", e.target.value),
                                                        placeholder: "Type your message...",
                                                        className: "w-full px-4 py-3 border border-[#042940]/20 rounded-[5px] bg-white text-[#042940] placeholder:text-[#042940]/40 focus:border-[#c5d520] focus:ring-1 focus:ring-[#c5d520] outline-none resize-none transition-colors",
                                                        "data-testid": "textarea-message"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                lineNumber: 314,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-[#042940]/10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "flex items-center gap-3 cursor-pointer",
                                                        "data-testid": "checkbox-consent",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: formData.consent,
                                                                onChange: (e)=>handleInputChange("consent", e.target.checked),
                                                                className: "w-5 h-5 rounded-[3px] border-[#042940]/30 text-[#c5d520] focus:ring-[#c5d520] accent-[#c5d520]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                                lineNumber: 331,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-[#042940]/80",
                                                                children: [
                                                                    "I accept the ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "/privacy-policy",
                                                                        className: "text-[#042940] font-medium underline hover:text-[#c5d520] transition-colors",
                                                                        "data-testid": "link-location-privacy-policy",
                                                                        children: "Privacy Policy"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                                                        lineNumber: 338,
                                                                        columnNumber: 36
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                                lineNumber: 337,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                                        lineNumber: 330,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        type: "submit",
                                                        size: "lg",
                                                        className: "w-full sm:w-auto bg-[#c5d520] text-[#042940] hover:bg-[#d6d98b] font-bold min-h-[52px] rounded-full px-10 shadow-[0_0_20px_rgba(197,213,32,0.3)] hover:shadow-[0_0_30px_rgba(197,213,32,0.5)] transition-all",
                                                        "data-testid": "button-form-submit",
                                                        children: "Submit Request"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                                        lineNumber: 341,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                lineNumber: 329,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                        lineNumber: 214,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                lineNumber: 203,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/locations/[slug]/page.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/locations/[slug]/page.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/locations/[slug]/page.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 md:py-24 bg-white overflow-hidden",
                "aria-labelledby": "info-block-heading",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 md:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-2 gap-10 lg:gap-20 items-center",
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
                                    duration: 0.6
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        id: "info-block-heading",
                                        className: "text-4xl md:text-5xl font-medium text-primary tracking-tighter mb-6 leading-tight",
                                        children: stateContent?.thirdHeading || "Why Local Businesses Choose Us"
                                    }, void 0, false, {
                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                        lineNumber: 366,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-primary/70 leading-relaxed mb-8",
                                        children: stateContent?.thirdDesc || "Managing waste across multiple locations means dealing with different haulers, inconsistent pricing, and service gaps. Tenth Rock eliminates all of that. We vet and manage local vendors so you get reliable pickups, transparent invoicing, and one number to call when something goes wrong. Whether you need a one-time cleanout or ongoing scheduled service, our team handles the coordination so yours doesn't have to."
                                    }, void 0, false, {
                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                        lineNumber: 372,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row gap-3 sm:gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "lg",
                                                className: "w-full sm:w-auto bg-[#c5d520] hover:bg-[#d6d98b] active:bg-[#d6d98b] text-[#042940] shadow-[0_0_40px_rgba(197,213,32,0.3)] hover:shadow-[0_0_60px_rgba(197,213,32,0.5)] transition-all transform md:hover:-translate-y-1 md:hover:scale-105 active:scale-95 min-h-[52px] whitespace-nowrap",
                                                "data-testid": "button-info-cta",
                                                children: "Get a Quote"
                                            }, void 0, false, {
                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                lineNumber: 376,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "lg",
                                                variant: "outline",
                                                className: "w-full sm:w-auto border-[#042940]/20 text-[#042940] hover:bg-[#042940] active:bg-[#042940] hover:text-white active:text-white transition-all transform md:hover:-translate-y-1 md:hover:scale-105 active:scale-95 min-h-[52px] whitespace-nowrap",
                                                "data-testid": "button-info-phone",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                        className: "mr-2 h-5 w-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                                        lineNumber: 389,
                                                        columnNumber: 19
                                                    }, this),
                                                    "727.510.5454"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                lineNumber: 383,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                        lineNumber: 375,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                lineNumber: 360,
                                columnNumber: 13
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
                                    duration: 0.6
                                },
                                className: "rounded-[5px] overflow-hidden h-[350px] md:h-[480px] lg:h-[640px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: imgInfoBlock,
                                    alt: "Commercial waste services in action",
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/app/locations/[slug]/page.tsx",
                                    lineNumber: 402,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                lineNumber: 395,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/locations/[slug]/page.tsx",
                        lineNumber: 359,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/locations/[slug]/page.tsx",
                    lineNumber: 358,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/locations/[slug]/page.tsx",
                lineNumber: 357,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$CommercialWasteServices$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/locations/[slug]/page.tsx",
                lineNumber: 413,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ProcessSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/locations/[slug]/page.tsx",
                lineNumber: 416,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$CtaBannerSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/locations/[slug]/page.tsx",
                lineNumber: 419,
                columnNumber: 7
            }, this),
            stateData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 md:py-24 bg-[#F9F9F6]",
                "aria-labelledby": "cities-we-serve-heading",
                "data-testid": "section-cities-we-serve",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 sm:px-6 md:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-start",
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
                                    duration: 0.6
                                },
                                className: "lg:sticky lg:top-32",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                    className: "relative bg-[#042940] rounded-[5px] overflow-hidden aspect-square max-w-md mx-auto lg:mx-0 shadow-2xl",
                                    "data-testid": "map-state-visual",
                                    role: "img",
                                    "aria-label": `Service coverage map for ${locationName}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 opacity-20",
                                            "aria-hidden": "true",
                                            style: {
                                                backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)',
                                                backgroundSize: '24px 24px'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/locations/[slug]/page.tsx",
                                            lineNumber: 435,
                                            columnNumber: 19
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$state$2d$outlines$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stateOutlines"][slug] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "absolute inset-0 w-full h-full pointer-events-none",
                                            viewBox: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$state$2d$outlines$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stateOutlines"][slug].viewBox,
                                            preserveAspectRatio: "xMidYMid meet",
                                            "aria-hidden": "true",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                        id: "stateGradient",
                                                        x1: "0%",
                                                        y1: "0%",
                                                        x2: "100%",
                                                        y2: "100%",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                offset: "0%",
                                                                stopColor: "#c5d520",
                                                                stopOpacity: "0.15"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                                lineNumber: 445,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                offset: "100%",
                                                                stopColor: "#c5d520",
                                                                stopOpacity: "0.05"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                                lineNumber: 446,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                                        lineNumber: 444,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/locations/[slug]/page.tsx",
                                                    lineNumber: 443,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$state$2d$outlines$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stateOutlines"][slug].path,
                                                    fill: "url(#stateGradient)",
                                                    stroke: "#c5d520",
                                                    strokeWidth: "1.5",
                                                    strokeOpacity: "0.25"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/locations/[slug]/page.tsx",
                                                    lineNumber: 449,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/locations/[slug]/page.tsx",
                                            lineNumber: 437,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#c5d520]/10 rounded-full blur-[80px] pointer-events-none",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/app/locations/[slug]/page.tsx",
                                            lineNumber: 458,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative z-10 flex flex-col items-center justify-center h-full p-8 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-20 h-20 rounded-full bg-[#c5d520]/20 border-2 border-[#c5d520]/40 flex items-center justify-center mb-6",
                                                    "aria-hidden": "true",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        className: "w-10 h-10 text-[#c5d520]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                                        lineNumber: 461,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/locations/[slug]/page.tsx",
                                                    lineNumber: 460,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-7xl md:text-8xl font-bold text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none",
                                                    "aria-hidden": "true",
                                                    children: stateData.abbreviation
                                                }, void 0, false, {
                                                    fileName: "[project]/app/locations/[slug]/page.tsx",
                                                    lineNumber: 463,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl md:text-3xl font-medium text-white mb-3 tracking-tighter",
                                                    "data-testid": "text-state-name",
                                                    children: locationName
                                                }, void 0, false, {
                                                    fileName: "[project]/app/locations/[slug]/page.tsx",
                                                    lineNumber: 466,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/70 text-sm mb-6 max-w-xs",
                                                    children: [
                                                        "Serving ",
                                                        stateData.cities.length,
                                                        "+ cities across ",
                                                        locationName,
                                                        " with local vendor networks and dedicated support."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/locations/[slug]/page.tsx",
                                                    lineNumber: 469,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c5d520]/10 border border-[#c5d520]/30 text-[#c5d520] font-bold text-sm",
                                                    "data-testid": "text-cities-count",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-2 h-2 rounded-full bg-[#c5d520] animate-pulse",
                                                            "aria-hidden": "true"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/locations/[slug]/page.tsx",
                                                            lineNumber: 473,
                                                            columnNumber: 23
                                                        }, this),
                                                        stateData.cities.length,
                                                        " Cities Covered"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/locations/[slug]/page.tsx",
                                                    lineNumber: 472,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/locations/[slug]/page.tsx",
                                            lineNumber: 459,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/locations/[slug]/page.tsx",
                                    lineNumber: 434,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                lineNumber: 427,
                                columnNumber: 15
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
                                    duration: 0.6,
                                    delay: 0.2
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#042940]/10 text-[#042940] font-bold text-sm shadow-sm mb-6",
                                        "data-testid": "badge-cities-we-serve",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 rounded-full bg-[#c5d520]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                lineNumber: 488,
                                                columnNumber: 19
                                            }, this),
                                            "Service Areas"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                        lineNumber: 487,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        id: "cities-we-serve-heading",
                                        className: "text-3xl md:text-4xl lg:text-5xl font-medium text-[#042940] mb-4 leading-tight tracking-tighter",
                                        "data-testid": "heading-cities-we-serve",
                                        children: [
                                            "Cities We Serve in ",
                                            locationName
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                        lineNumber: 491,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#042940]/70 text-base md:text-lg leading-relaxed mb-10",
                                        "data-testid": "text-cities-description",
                                        children: [
                                            "Our network of vetted local vendors ensures fast, reliable waste management services across ",
                                            locationName,
                                            ". Select a city below to learn more about coverage in your area."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                        lineNumber: 494,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0 list-none p-0 m-0",
                                        role: "list",
                                        "aria-label": `Cities served in ${locationName}`,
                                        "data-testid": "list-cities",
                                        children: stateData.cities.map((city, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-center gap-3 py-3 border-b border-[#042940]/5",
                                                "data-testid": `city-item-${i}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-5 h-5 rounded-full bg-[#c5d520]/20 flex items-center justify-center flex-shrink-0",
                                                        "aria-hidden": "true",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-3 h-3 text-[#c5d520]",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            "aria-hidden": "true",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 3,
                                                                d: "M5 13l4 4L19 7"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                                lineNumber: 507,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/locations/[slug]/page.tsx",
                                                            lineNumber: 506,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                                        lineNumber: 505,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#042940] font-medium text-sm md:text-base",
                                                        "data-testid": `text-city-name-${i}`,
                                                        children: city
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                                        lineNumber: 510,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                                lineNumber: 500,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/locations/[slug]/page.tsx",
                                        lineNumber: 498,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/locations/[slug]/page.tsx",
                                lineNumber: 481,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/locations/[slug]/page.tsx",
                        lineNumber: 425,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/locations/[slug]/page.tsx",
                    lineNumber: 424,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/locations/[slug]/page.tsx",
                lineNumber: 423,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$CaseStudySection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/locations/[slug]/page.tsx",
                lineNumber: 522,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$FaqSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                faqs: stateContent?.faqs
            }, void 0, false, {
                fileName: "[project]/app/locations/[slug]/page.tsx",
                lineNumber: 525,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$LocationSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/locations/[slug]/page.tsx",
                lineNumber: 528,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$FinalCtaSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/locations/[slug]/page.tsx",
                lineNumber: 531,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/locations/[slug]/page.tsx",
                lineNumber: 534,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/locations/[slug]/page.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_s(LocationTemplatePage, "NbU55ffkfpvWnpj7Y16clI02VVk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LocationTemplatePage;
var _c;
__turbopack_context__.k.register(_c, "LocationTemplatePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_ed7ecc84._.js.map
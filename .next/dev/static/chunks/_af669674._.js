(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/sections/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const navLinks = [
    {
        href: "#portfolio",
        label: "Портфолио"
    },
    {
        href: "#clients",
        label: "Клиенты"
    },
    {
        href: "#lead",
        label: "Заявка"
    },
    {
        href: "#contacts",
        label: "Контакты"
    }
];
function Header() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const handleScroll = {
                "Header.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 8);
                }
            }["Header.useEffect.handleScroll"];
            handleScroll();
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "Header.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    const handleAnchorClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Header.useCallback[handleAnchorClick]": (event)=>{
            setIsOpen(false);
            const target = event.currentTarget.getAttribute("href");
            if (!target || !target.startsWith("#")) {
                return;
            }
            const element = document.querySelector(target);
            if (element instanceof HTMLElement) {
                window.setTimeout({
                    "Header.useCallback[handleAnchorClick]": ()=>{
                        element.focus({
                            preventScroll: true
                        });
                    }
                }["Header.useCallback[handleAnchorClick]"], 0);
            }
        }
    }["Header.useCallback[handleAnchorClick]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `sticky top-0 z-50 border-b border-steel/60 bg-stone/95 backdrop-blur-sm lg:bg-cream/90 lg:backdrop-blur-xl lg:transition lg:duration-300 ${isScrolled ? "lg:bg-cream/80 lg:backdrop-blur-xl lg:shadow-[0_10px_30px_rgba(44,44,44,0.08)]" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-4 py-3 lg:hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#hero",
                                className: "focus-ring font-heading text-lg font-semibold tracking-[0.2em] text-graphite lg:text-[1.375rem]",
                                children: "АСТРА"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Header.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "hidden items-center gap-3 text-sm text-charcoal/80 md:flex lg:gap-10 lg:text-[length:var(--font-nav)] xl:gap-12",
                                "aria-label": "Основная навигация",
                                children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "focus-ring rounded-full px-3 py-1 text-charcoal transition hover:text-graphite lg:px-4 lg:py-2 lg:text-[length:var(--font-nav)]",
                                        href: link.href,
                                        onClick: handleAnchorClick,
                                        children: link.label
                                    }, link.href, false, {
                                        fileName: "[project]/components/sections/Header.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Header.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#lead",
                                        className: "focus-ring hidden rounded-none bg-graphite px-5 py-2 text-sm font-semibold text-white transition hover:bg-charcoal md:inline-flex lg:px-8 lg:py-4 lg:text-[length:var(--font-nav)]",
                                        onClick: handleAnchorClick,
                                        children: "Рассчитать проект"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Header.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "focus-ring inline-flex h-10 w-10 items-center justify-center rounded-none border border-steel text-graphite md:hidden",
                                        "aria-label": isOpen ? "Закрыть меню" : "Открыть меню",
                                        "aria-expanded": isOpen,
                                        "aria-controls": "mobile-navigation",
                                        onClick: ()=>setIsOpen((prev)=>!prev),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sr-only",
                                                children: isOpen ? "Закрыть меню" : "Открыть меню"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Header.tsx",
                                                lineNumber: 93,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex flex-col items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block h-0.5 w-5 bg-graphite"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/Header.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block h-0.5 w-5 bg-graphite"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/Header.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block h-0.5 w-5 bg-graphite"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/Header.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/Header.tsx",
                                                lineNumber: 96,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/Header.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Header.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Header.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:grid lg:grid-cols-12 lg:items-center lg:py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#hero",
                                className: "focus-ring font-heading text-lg font-semibold tracking-[0.2em] text-graphite lg:col-span-2 lg:col-start-2 lg:justify-self-start lg:text-[1.375rem]",
                                children: "АСТРА"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Header.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "flex items-center justify-center gap-10 text-sm text-charcoal/80 lg:col-span-6 lg:col-start-4 lg:text-[length:var(--font-nav)] xl:gap-12",
                                "aria-label": "Основная навигация",
                                children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "focus-ring rounded-full px-3 py-1 text-charcoal transition hover:text-graphite lg:px-4 lg:py-2 lg:text-[length:var(--font-nav)]",
                                        href: link.href,
                                        onClick: handleAnchorClick,
                                        children: link.label
                                    }, link.href, false, {
                                        fileName: "[project]/components/sections/Header.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Header.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-end gap-3 lg:col-span-3 lg:col-start-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#lead",
                                    className: "focus-ring inline-flex rounded-none bg-graphite px-5 py-2 text-sm font-semibold text-white transition hover:bg-charcoal lg:px-8 lg:py-4 lg:text-[length:var(--font-nav)]",
                                    onClick: handleAnchorClick,
                                    children: "Рассчитать проект"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Header.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Header.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Header.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Header.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `border-t border-steel/60 bg-stone/95 md:hidden ${isOpen ? "block" : "hidden"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    id: "mobile-navigation",
                    className: "mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-4 text-sm text-charcoal/80 sm:px-6",
                    "aria-label": "Мобильная навигация",
                    children: [
                        navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "focus-ring rounded-2xl px-3 py-2 text-charcoal transition hover:text-graphite",
                                href: link.href,
                                onClick: handleAnchorClick,
                                children: link.label
                            }, link.href, false, {
                                fileName: "[project]/components/sections/Header.tsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#lead",
                            className: "focus-ring mt-2 rounded-none bg-graphite px-5 py-2 text-center text-sm font-semibold text-white transition hover:bg-charcoal",
                            onClick: handleAnchorClick,
                            children: "Рассчитать проект"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Header.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Header.tsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/Header.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/Header.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(Header, "mn2IBeYyY0ZYY1I6Z5veRAoy3Gk=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/useDesktopMotion.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useDesktopMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useDesktopMotion() {
    _s();
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const [isDesktop, setIsDesktop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDesktopMotion.useEffect": ()=>{
            setIsMounted(true);
            const checkDesktop = {
                "useDesktopMotion.useEffect.checkDesktop": ()=>{
                    setIsDesktop(window.innerWidth >= 1024);
                }
            }["useDesktopMotion.useEffect.checkDesktop"];
            checkDesktop();
            window.addEventListener("resize", checkDesktop);
            return ({
                "useDesktopMotion.useEffect": ()=>window.removeEventListener("resize", checkDesktop)
            })["useDesktopMotion.useEffect"];
        }
    }["useDesktopMotion.useEffect"], []);
    return {
        shouldAnimate: isMounted && isDesktop && !prefersReducedMotion,
        isDesktop,
        isMounted,
        prefersReducedMotion
    };
}
_s(useDesktopMotion, "lpysAVEovMzWIWN0qqsvtScB0uI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$useDesktopMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/useDesktopMotion.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Hero(props) {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { isMounted, shouldAnimate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$useDesktopMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const heroImageSource = props.heroImageSrc ?? "/astra_main.png";
    const fadeUp = (delay = 0)=>shouldAnimate ? {
            initial: {
                opacity: 0,
                y: 24
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay
            },
            viewport: {
                once: true,
                amount: 0.7
            }
        } : {
            initial: false
        };
    const fadeUpProps = (delay = 0)=>isMounted ? fadeUp(delay) : {};
    const heroText = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                ...fadeUpProps(0),
                className: "max-w-[480px] sm:max-w-[520px] lg:max-w-[600px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-white text-white/80 [&_h1]:text-white",
                    style: {
                        textShadow: "0 2px 20px rgba(0,0,0,0.65)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-heading text-[clamp(1.75rem,6vw,2.5rem)] font-semibold leading-tight sm:text-5xl lg:text-[length:var(--font-h1)] lg:leading-[1.15] lg:tracking-[0.01em] xl:text-[4.5rem]",
                            children: "Мебель, которая становится наследием"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Hero.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mt-4 block h-px w-20 bg-graphite/70 sm:mt-6 lg:mt-8 lg:w-32"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Hero.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 hidden font-body text-sm uppercase tracking-[0.2em] text-beige/70 sm:block lg:text-[0.9375rem] lg:tracking-[0.08em]",
                            children: "Столярное производство полного цикла"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Hero.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Hero.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                ...fadeUpProps(0.1),
                className: "mt-4 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:grid sm:grid-cols-2 sm:gap-5 sm:items-center lg:gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#lead",
                        className: "focus-ring font-body inline-flex h-[44px] w-full items-center justify-center rounded-none bg-graphite px-6 py-3 text-sm font-semibold leading-none text-white transition hover:bg-charcoal box-border shadow-elevated hover-shadow lg:hover:-translate-y-0.5 sm:w-full sm:h-[56px] sm:min-w-[220px] sm:px-10 sm:py-0 sm:bg-black/80 sm:hover:bg-black lg:h-[60px] lg:px-[36px] lg:py-[18px] lg:text-[1.0625rem] lg:leading-none",
                        children: "Рассчитать проект"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Hero.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#portfolio",
                        className: "focus-ring font-body inline-flex h-[44px] w-full items-center justify-center rounded-none border border-white/30 px-6 py-3 text-sm font-normal leading-none text-white/75 transition hover:text-white hover:border-white/50 box-border bg-transparent shadow-elevated hover-shadow lg:hover:-translate-y-0.5 sm:w-full sm:h-[56px] sm:min-w-[220px] sm:px-10 sm:py-0 sm:text-white/90 sm:border-white/40 sm:hover:border-white/60 lg:h-[60px] lg:px-[36px] lg:py-[18px] lg:text-[1.0625rem] lg:leading-none",
                        children: "Смотреть работы"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Hero.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        ref: sectionRef,
        className: "relative w-full overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative min-h-[100svh] max-h-[100svh] sm:min-h-[720px] sm:max-h-none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 z-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: heroImageSource,
                            alt: "Astra main",
                            fill: true,
                            priority: true,
                            sizes: "100vw",
                            className: "object-cover object-[center_85%] sm:object-center sm:hidden"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Hero.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: heroImageSource,
                            alt: "Astra main",
                            fill: true,
                            priority: true,
                            sizes: "100vw",
                            className: "hidden object-cover object-center sm:block"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Hero.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Hero.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-none absolute inset-0 z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sm:hidden absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 via-45% to-transparent"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Hero.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden sm:block absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Hero.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-b from-black/55 via-black/16 to-transparent"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Hero.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Hero.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-20 flex h-full min-h-[inherit] w-full flex-col justify-start  px-4 pt-[calc(env(safe-area-inset-top)+80px)] pb-6 sm:px-6 sm:pt-24 sm:pb-16  lg:px-8 lg:pt-28 lg:pb-20 lg:max-w-none lg:mx-0 lg:pl-[calc((100vw-80rem)/2+2rem)]",
                    children: heroText
                }, void 0, false, {
                    fileName: "[project]/components/sections/Hero.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Hero.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/Hero.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(Hero, "4QK2rEA1b+jexbRi8tckjUQLl4k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$useDesktopMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/ClientsMarquee.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientsMarquee
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$useDesktopMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/useDesktopMotion.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const MOBILE_MEDIA_QUERY = "(max-width: 767px)";
const SPEED_PX_PER_SEC = 50;
const getInitials = (name)=>name.split(" ").filter(Boolean).slice(0, 2).map((part)=>part[0]?.toUpperCase()).join("");
function ClientsMarquee({ clients }) {
    _s();
    const { isMounted, shouldAnimate, prefersReducedMotion } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$useDesktopMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [setWidthPx, setSetWidthPx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const setWidthRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const mobileTrackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mobileFirstItemRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mobileSecondItemRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const desktopTrackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const desktopFirstItemRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const desktopSecondItemRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const resizeTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fadeUp = (delay = 0)=>shouldAnimate ? {
            initial: {
                opacity: 0,
                y: 20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay
            },
            viewport: {
                once: true,
                amount: 0.3
            }
        } : {
            initial: false
        };
    const fadeUpProps = (delay = 0)=>isMounted ? fadeUp(delay) : {};
    const updateSetWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ClientsMarquee.useCallback[updateSetWidth]": ()=>{
            const firstItem = isMobile ? mobileFirstItemRef.current : desktopFirstItemRef.current;
            const secondItem = isMobile ? mobileSecondItemRef.current : desktopSecondItemRef.current;
            if (!firstItem || !secondItem) return;
            const nextWidth = Math.round(secondItem.offsetLeft - firstItem.offsetLeft);
            if (!nextWidth || nextWidth === setWidthRef.current) return;
            setWidthRef.current = nextWidth;
            setSetWidthPx(nextWidth);
        }
    }["ClientsMarquee.useCallback[updateSetWidth]"], [
        isMobile
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientsMarquee.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const mediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY);
            const handleChange = {
                "ClientsMarquee.useEffect.handleChange": ()=>setIsMobile(mediaQuery.matches)
            }["ClientsMarquee.useEffect.handleChange"];
            handleChange();
            if (mediaQuery.addEventListener) {
                mediaQuery.addEventListener("change", handleChange);
                return ({
                    "ClientsMarquee.useEffect": ()=>mediaQuery.removeEventListener("change", handleChange)
                })["ClientsMarquee.useEffect"];
            }
            mediaQuery.addListener(handleChange);
            return ({
                "ClientsMarquee.useEffect": ()=>mediaQuery.removeListener(handleChange)
            })["ClientsMarquee.useEffect"];
        }
    }["ClientsMarquee.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientsMarquee.useEffect": ()=>{
            const trackElement = isMobile ? mobileTrackRef.current : desktopTrackRef.current;
            if (!trackElement) return;
            updateSetWidth();
            let resizeObserver = null;
            if (typeof ResizeObserver !== "undefined") {
                resizeObserver = new ResizeObserver({
                    "ClientsMarquee.useEffect": ()=>updateSetWidth()
                }["ClientsMarquee.useEffect"]);
                resizeObserver.observe(trackElement);
            }
            const handleResize = {
                "ClientsMarquee.useEffect.handleResize": ()=>{
                    if (resizeTimeoutRef.current) {
                        window.clearTimeout(resizeTimeoutRef.current);
                    }
                    resizeTimeoutRef.current = window.setTimeout({
                        "ClientsMarquee.useEffect.handleResize": ()=>{
                            updateSetWidth();
                        }
                    }["ClientsMarquee.useEffect.handleResize"], 120);
                }
            }["ClientsMarquee.useEffect.handleResize"];
            window.addEventListener("resize", handleResize);
            window.addEventListener("orientationchange", handleResize);
            return ({
                "ClientsMarquee.useEffect": ()=>{
                    if (resizeObserver) {
                        resizeObserver.disconnect();
                    }
                    window.removeEventListener("resize", handleResize);
                    window.removeEventListener("orientationchange", handleResize);
                    if (resizeTimeoutRef.current) {
                        window.clearTimeout(resizeTimeoutRef.current);
                    }
                }
            })["ClientsMarquee.useEffect"];
        }
    }["ClientsMarquee.useEffect"], [
        isMobile,
        updateSetWidth
    ]);
    const durationSeconds = setWidthPx > 0 ? setWidthPx / SPEED_PX_PER_SEC : 0;
    const shouldAnimateMobile = isMobile && !prefersReducedMotion && setWidthPx > 0;
    const shouldAnimateDesktop = !isMobile && !prefersReducedMotion && setWidthPx > 0;
    const trackStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ClientsMarquee.useMemo[trackStyle]": ()=>{
            if (!setWidthPx) return undefined;
            return {
                "--marquee-set-width": `${setWidthPx}`,
                "--marquee-mobile-duration": `${durationSeconds}s`
            };
        }
    }["ClientsMarquee.useMemo[trackStyle]"], [
        setWidthPx,
        durationSeconds
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "section-desktop bg-cream-light py-16 sm:py-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                ...fadeUpProps(0),
                className: "section-header",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-title-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "section-title-divider",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/ClientsMarquee.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title",
                            children: "Нам доверяют"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/ClientsMarquee.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/ClientsMarquee.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/ClientsMarquee.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                ...fadeUpProps(0.1),
                className: "mt-8 overflow-hidden lg:mx-auto lg:mt-10 lg:w-full lg:max-w-6xl lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            ref: mobileTrackRef,
                            className: `flex w-max items-center justify-center gap-6 sm:gap-8 lg:gap-10 flex-nowrap whitespace-nowrap box-border ${shouldAnimateMobile ? "marquee-mobile" : ""}`,
                            style: trackStyle,
                            "aria-label": "Список клиентов",
                            children: [
                                0,
                                1
                            ].map((setIndex)=>clients.map((client, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        ref: setIndex === 0 && index === 0 ? mobileFirstItemRef : setIndex === 1 && index === 0 ? mobileSecondItemRef : undefined,
                                        "aria-hidden": setIndex === 1,
                                        className: "relative flex min-w-max flex-shrink-0 items-center gap-3 rounded-none border border-steel px-5 py-2 text-sm text-charcoal lg:gap-4 lg:px-6 lg:py-3 lg:text-[length:var(--font-nav)] lg:tracking-[0.01em] lg:after:absolute lg:after:right-2 lg:after:top-1/2 lg:after:h-6 lg:after:w-px lg:after:-translate-y-1/2 lg:after:bg-steel/60 lg:after:content-[''] lg:last:after:hidden box-border",
                                        children: [
                                            client.logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: client.logo,
                                                alt: `${client.name} логотип`,
                                                className: "h-9 w-9 object-contain lg:h-10 lg:w-10",
                                                loading: "lazy"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/ClientsMarquee.tsx",
                                                lineNumber: 173,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `flex h-9 w-9 items-center justify-center rounded-none border border-steel text-[10px] uppercase tracking-[0.2em] text-charcoal lg:h-10 lg:w-10 ${client.logoTextClassName ?? ""}`,
                                                children: (client.logoText ?? getInitials(client.name)) || "LG"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/ClientsMarquee.tsx",
                                                lineNumber: 180,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "whitespace-nowrap",
                                                children: client.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/ClientsMarquee.tsx",
                                                lineNumber: 186,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, `${client.name}-mobile-${setIndex}-${index}`, true, {
                                        fileName: "[project]/components/sections/ClientsMarquee.tsx",
                                        lineNumber: 160,
                                        columnNumber: 17
                                    }, this)))
                        }, void 0, false, {
                            fileName: "[project]/components/sections/ClientsMarquee.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/ClientsMarquee.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            ref: desktopTrackRef,
                            className: `flex w-max items-center justify-center gap-6 sm:gap-8 lg:gap-10 flex-nowrap whitespace-nowrap ${shouldAnimateDesktop ? "marquee marquee-desktop" : ""}`,
                            style: trackStyle,
                            "aria-label": "Список клиентов",
                            children: [
                                0,
                                1
                            ].map((setIndex)=>clients.map((client, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        ref: setIndex === 0 && index === 0 ? desktopFirstItemRef : setIndex === 1 && index === 0 ? desktopSecondItemRef : undefined,
                                        "aria-hidden": setIndex === 1,
                                        className: "relative flex min-w-max flex-shrink-0 items-center gap-3 rounded-none border border-steel px-5 py-2 text-sm text-charcoal lg:gap-4 lg:px-6 lg:py-3 lg:text-[length:var(--font-nav)] lg:tracking-[0.01em] lg:after:absolute lg:after:right-2 lg:after:top-1/2 lg:after:h-6 lg:after:w-px lg:after:-translate-y-1/2 lg:after:bg-steel/60 lg:after:content-[''] lg:last:after:hidden",
                                        children: [
                                            client.logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: client.logo,
                                                alt: `${client.name} логотип`,
                                                className: "h-9 w-9 object-contain lg:h-10 lg:w-10",
                                                loading: "lazy"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/ClientsMarquee.tsx",
                                                lineNumber: 216,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `flex h-9 w-9 items-center justify-center rounded-none border border-steel text-[10px] uppercase tracking-[0.2em] text-charcoal lg:h-10 lg:w-10 ${client.logoTextClassName ?? ""}`,
                                                children: (client.logoText ?? getInitials(client.name)) || "LG"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/ClientsMarquee.tsx",
                                                lineNumber: 223,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "whitespace-nowrap",
                                                children: client.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/ClientsMarquee.tsx",
                                                lineNumber: 229,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, `${client.name}-desktop-${setIndex}-${index}`, true, {
                                        fileName: "[project]/components/sections/ClientsMarquee.tsx",
                                        lineNumber: 203,
                                        columnNumber: 17
                                    }, this)))
                        }, void 0, false, {
                            fileName: "[project]/components/sections/ClientsMarquee.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/ClientsMarquee.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/ClientsMarquee.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/ClientsMarquee.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
_s(ClientsMarquee, "YAae/hn7Qer2o4IUNY4gBUzN8jc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$useDesktopMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = ClientsMarquee;
var _c;
__turbopack_context__.k.register(_c, "ClientsMarquee");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/Portfolio.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Portfolio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$useDesktopMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/useDesktopMotion.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Portfolio({ categories }) {
    _s();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { isMounted, shouldAnimate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$useDesktopMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const activeCategoryData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Portfolio.useMemo[activeCategoryData]": ()=>categories.find({
                "Portfolio.useMemo[activeCategoryData]": (category)=>category.id === activeCategory
            }["Portfolio.useMemo[activeCategoryData]"])
    }["Portfolio.useMemo[activeCategoryData]"], [
        activeCategory,
        categories
    ]);
    const visibleItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Portfolio.useMemo[visibleItems]": ()=>{
            if (activeCategory === "all") {
                return categories.flatMap({
                    "Portfolio.useMemo[visibleItems]": (category)=>category.items
                }["Portfolio.useMemo[visibleItems]"]);
            }
            return activeCategoryData?.items ?? [];
        }
    }["Portfolio.useMemo[visibleItems]"], [
        activeCategory,
        activeCategoryData,
        categories
    ]);
    const fadeUp = (delay = 0)=>shouldAnimate ? {
            initial: {
                opacity: 0,
                y: 20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay
            },
            viewport: {
                once: true,
                amount: 0.3
            }
        } : {
            initial: false
        };
    const fadeUpProps = (delay = 0)=>isMounted ? fadeUp(delay) : {};
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Portfolio.useEffect": ()=>{
            const slider = sliderRef.current;
            if (!slider || ("TURBOPACK compile-time value", "object") === "undefined") {
                return;
            }
            const mediaQuery = window.matchMedia("(min-width: 1024px)");
            const dragThreshold = 6;
            const wheelMultiplier = 1.2;
            const keyScrollStep = 280;
            let isPointerDown = false;
            let isDragging = false;
            let startX = 0;
            let startScrollLeft = 0;
            let cancelClick = false;
            let wheelRaf = 0;
            let queuedWheelDelta = 0;
            const getMaxScrollLeft = {
                "Portfolio.useEffect.getMaxScrollLeft": ()=>Math.max(0, slider.scrollWidth - slider.clientWidth)
            }["Portfolio.useEffect.getMaxScrollLeft"];
            const clampScrollLeft = {
                "Portfolio.useEffect.clampScrollLeft": (nextValue)=>Math.max(0, Math.min(getMaxScrollLeft(), nextValue))
            }["Portfolio.useEffect.clampScrollLeft"];
            const canScrollInDirection = {
                "Portfolio.useEffect.canScrollInDirection": (delta)=>{
                    if (delta > 0) {
                        return slider.scrollLeft < getMaxScrollLeft() - 1;
                    }
                    if (delta < 0) {
                        return slider.scrollLeft > 1;
                    }
                    return false;
                }
            }["Portfolio.useEffect.canScrollInDirection"];
            const getWheelDelta = {
                "Portfolio.useEffect.getWheelDelta": (event)=>{
                    let delta = event.deltaY;
                    if (event.deltaMode === 1) {
                        delta *= 16;
                    } else if (event.deltaMode === 2) {
                        delta *= slider.clientWidth;
                    }
                    return delta * wheelMultiplier;
                }
            }["Portfolio.useEffect.getWheelDelta"];
            const handleWheel = {
                "Portfolio.useEffect.handleWheel": (event)=>{
                    if (!mediaQuery.matches) {
                        return;
                    }
                    const delta = getWheelDelta(event);
                    if (!canScrollInDirection(delta)) {
                        return;
                    }
                    event.preventDefault();
                    queuedWheelDelta += delta;
                    if (!wheelRaf) {
                        wheelRaf = window.requestAnimationFrame({
                            "Portfolio.useEffect.handleWheel": ()=>{
                                slider.scrollLeft = clampScrollLeft(slider.scrollLeft + queuedWheelDelta);
                                queuedWheelDelta = 0;
                                wheelRaf = 0;
                            }
                        }["Portfolio.useEffect.handleWheel"]);
                    }
                }
            }["Portfolio.useEffect.handleWheel"];
            const handleMouseDown = {
                "Portfolio.useEffect.handleMouseDown": (event)=>{
                    if (!mediaQuery.matches || event.button !== 0) {
                        return;
                    }
                    isPointerDown = true;
                    isDragging = false;
                    cancelClick = false;
                    startX = event.pageX;
                    startScrollLeft = slider.scrollLeft;
                }
            }["Portfolio.useEffect.handleMouseDown"];
            const handleMouseMove = {
                "Portfolio.useEffect.handleMouseMove": (event)=>{
                    if (!mediaQuery.matches || !isPointerDown) {
                        return;
                    }
                    const delta = event.pageX - startX;
                    if (!isDragging && Math.abs(delta) > dragThreshold) {
                        isDragging = true;
                        slider.classList.add("is-dragging");
                    }
                    if (!isDragging) {
                        return;
                    }
                    event.preventDefault();
                    slider.scrollLeft = clampScrollLeft(startScrollLeft - delta);
                }
            }["Portfolio.useEffect.handleMouseMove"];
            const endDrag = {
                "Portfolio.useEffect.endDrag": ()=>{
                    if (!mediaQuery.matches) {
                        return;
                    }
                    if (isDragging) {
                        cancelClick = true;
                    }
                    isPointerDown = false;
                    isDragging = false;
                    slider.classList.remove("is-dragging");
                }
            }["Portfolio.useEffect.endDrag"];
            const handleClickCapture = {
                "Portfolio.useEffect.handleClickCapture": (event)=>{
                    if (!mediaQuery.matches) {
                        return;
                    }
                    if (cancelClick) {
                        event.preventDefault();
                        event.stopPropagation();
                        cancelClick = false;
                    }
                }
            }["Portfolio.useEffect.handleClickCapture"];
            const handleKeyDown = {
                "Portfolio.useEffect.handleKeyDown": (event)=>{
                    if (!mediaQuery.matches) {
                        return;
                    }
                    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
                        return;
                    }
                    const direction = event.key === "ArrowRight" ? 1 : -1;
                    const delta = direction * keyScrollStep;
                    if (!canScrollInDirection(delta)) {
                        return;
                    }
                    event.preventDefault();
                    slider.scrollLeft = clampScrollLeft(slider.scrollLeft + delta);
                }
            }["Portfolio.useEffect.handleKeyDown"];
            const handleDragStart = {
                "Portfolio.useEffect.handleDragStart": (event)=>{
                    event.preventDefault();
                }
            }["Portfolio.useEffect.handleDragStart"];
            slider.addEventListener("wheel", handleWheel, {
                passive: false
            });
            slider.addEventListener("mousedown", handleMouseDown);
            slider.addEventListener("mousemove", handleMouseMove);
            slider.addEventListener("mouseleave", endDrag);
            slider.addEventListener("mouseup", endDrag);
            slider.addEventListener("click", handleClickCapture, true);
            slider.addEventListener("keydown", handleKeyDown);
            slider.addEventListener("dragstart", handleDragStart);
            return ({
                "Portfolio.useEffect": ()=>{
                    slider.removeEventListener("wheel", handleWheel);
                    slider.removeEventListener("mousedown", handleMouseDown);
                    slider.removeEventListener("mousemove", handleMouseMove);
                    slider.removeEventListener("mouseleave", endDrag);
                    slider.removeEventListener("mouseup", endDrag);
                    slider.removeEventListener("click", handleClickCapture, true);
                    slider.removeEventListener("keydown", handleKeyDown);
                    slider.removeEventListener("dragstart", handleDragStart);
                    if (wheelRaf) {
                        window.cancelAnimationFrame(wheelRaf);
                    }
                }
            })["Portfolio.useEffect"];
        }
    }["Portfolio.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "portfolio-section bg-cream-light py-16 sm:py-20 section-desktop",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                ...fadeUpProps(0),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-header",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "section-title-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "section-title-divider",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Portfolio.tsx",
                                    lineNumber: 214,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "section-title",
                                    children: "Наши работы"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Portfolio.tsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/Portfolio.tsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Portfolio.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex flex-wrap gap-3 lg:mt-8 lg:gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setActiveCategory("all"),
                                    className: activeCategory === "all" ? "px-4 py-2 text-sm bg-graphite text-white rounded-none lg:px-6 lg:py-3 lg:text-[length:var(--font-nav)] lg:uppercase lg:tracking-[0.12em] lg:transition lg:duration-200 lg:ease-out shadow-elevated" : "px-4 py-2 text-sm text-charcoal border border-steel rounded-none hover:border-graphite lg:px-6 lg:py-3 lg:text-[length:var(--font-nav)] lg:uppercase lg:tracking-[0.12em] lg:transition lg:duration-200 lg:ease-out lg:hover:-translate-y-0.5",
                                    children: "Все"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Portfolio.tsx",
                                    lineNumber: 222,
                                    columnNumber: 13
                                }, this),
                                categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setActiveCategory(category.id),
                                        className: activeCategory === category.id ? "px-4 py-2 text-sm bg-graphite text-white rounded-none lg:px-6 lg:py-3 lg:text-[length:var(--font-nav)] lg:uppercase lg:tracking-[0.12em] lg:transition lg:duration-200 lg:ease-out shadow-elevated" : "px-4 py-2 text-sm text-charcoal border border-steel rounded-none hover:border-graphite lg:px-6 lg:py-3 lg:text-[length:var(--font-nav)] lg:uppercase lg:tracking-[0.12em] lg:transition lg:duration-200 lg:ease-out lg:hover:-translate-y-0.5",
                                        children: category.title
                                    }, category.id, false, {
                                        fileName: "[project]/components/sections/Portfolio.tsx",
                                        lineNumber: 234,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/Portfolio.tsx",
                            lineNumber: 221,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Portfolio.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Portfolio.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                ...fadeUpProps(0.1),
                className: "mt-10 pb-4 lg:mt-12 lg:pb-0 lg:w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: sliderRef,
                    tabIndex: 0,
                    className: "portfolio-slider portfolio-cards-container flex gap-6 overflow-x-auto px-4 snap-x snap-mandatory scroll-px-4 sm:scroll-px-6 lg:flex-nowrap lg:px-8 lg:scroll-px-8",
                    children: visibleItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "portfolio-card group min-w-[260px] flex-1 snap-start overflow-hidden rounded-3xl border border-steel/25 bg-warm/40 shadow-elevated hover-shadow card-desktop lg:min-w-[320px] lg:flex-none lg:transition lg:duration-300 lg:ease-out lg:hover:-translate-y-1 lg:hover:scale-[1.01]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-48 w-full overflow-hidden sm:h-56 lg:h-auto lg:aspect-[4/3]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: item.image,
                                        alt: item.title,
                                        className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] lg:group-hover:scale-[1.06]",
                                        loading: "lazy",
                                        draggable: false
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Portfolio.tsx",
                                        lineNumber: 266,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Portfolio.tsx",
                                    lineNumber: 265,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4 p-6 lg:p-7",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-graphite font-medium lg:text-lg",
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Portfolio.tsx",
                                            lineNumber: 275,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-ash lg:text-base",
                                            children: item.material
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Portfolio.tsx",
                                            lineNumber: 278,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/Portfolio.tsx",
                                    lineNumber: 274,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, `${item.title}-${item.material}`, true, {
                            fileName: "[project]/components/sections/Portfolio.tsx",
                            lineNumber: 261,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/sections/Portfolio.tsx",
                    lineNumber: 255,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/Portfolio.tsx",
                lineNumber: 251,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-header portfolio-cta mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#lead",
                    className: "focus-ring inline-flex rounded-none border border-graphite px-6 py-3 text-sm font-semibold text-graphite transition hover:bg-graphite hover:text-white lg:px-8 lg:py-4 lg:text-[length:var(--font-nav)]",
                    children: "Хочу похожий проект"
                }, void 0, false, {
                    fileName: "[project]/components/sections/Portfolio.tsx",
                    lineNumber: 286,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/Portfolio.tsx",
                lineNumber: 285,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/Portfolio.tsx",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
_s(Portfolio, "XITWgiuICB/aRA38et66Q9R3tKM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$useDesktopMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Portfolio;
var _c;
__turbopack_context__.k.register(_c, "Portfolio");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/validators.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "furnitureTypeLabels",
    ()=>furnitureTypeLabels,
    "furnitureTypes",
    ()=>furnitureTypes,
    "leadSchema",
    ()=>leadSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
;
const furnitureTypes = [
    "business",
    "sofa",
    "bed",
    "chair",
    "other"
];
const furnitureTypeLabels = {
    business: "Мебель для бизнеса",
    sofa: "Диван",
    bed: "Кровать",
    chair: "Кресло",
    other: "Прочие изделия"
};
const leadSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(2, "Укажите имя").max(80, "Имя слишком длинное"),
    contact: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(5, "Укажите телефон или мессенджер").max(120, "Слишком длинное значение"),
    furnitureType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(furnitureTypes).pipe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(furnitureTypes, "Выберите тип мебели")),
    comment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().max(800, "Комментарий слишком длинный").optional().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("")),
    consent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().refine((value)=>value === true, {
        message: "Нужно согласие на обработку данных"
    }),
    honeypot: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/track.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "track",
    ()=>track
]);
function track(eventName, payload) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const data = {
        event: eventName,
        timestamp: new Date().toISOString(),
        payload: payload ?? {}
    };
    console.info("[analytics]", data);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/LeadForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LeadForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validators.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$track$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/track.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$useDesktopMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/useDesktopMotion.ts [app-client] (ecmascript)");
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
function LeadForm() {
    _s();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [usedTelegramFallback, setUsedTelegramFallback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { isMounted, shouldAnimate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$useDesktopMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const telegramLink = "https://t.me/USERNAME";
    const leadEndpoint = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_LEAD_ENDPOINT;
    const { register, handleSubmit, reset, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leadSchema"]),
        defaultValues: {
            name: "",
            contact: "",
            furnitureType: "business",
            comment: "",
            consent: false,
            honeypot: ""
        }
    });
    const onSubmit = async (values)=>{
        setStatus("loading");
        setUsedTelegramFallback(false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$track$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["track"])("lead_submit", {
            furnitureType: values.furnitureType
        });
        const telegramMessage = [
            "Новая заявка с лендинга",
            `Имя: ${values.name}`,
            `Контакт: ${values.contact}`,
            `Тип изделия: ${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["furnitureTypeLabels"][values.furnitureType]}`,
            `Комментарий: ${values.comment || "—"}`
        ].join("\n");
        const openTelegramFallback = ()=>{
            const shareUrl = `https://t.me/share/url?text=${encodeURIComponent(telegramMessage)}`;
            window.open(shareUrl, "_blank", "noopener,noreferrer");
            setUsedTelegramFallback(true);
            setStatus("success");
            reset();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$track$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["track"])("lead_fallback");
        };
        if (!leadEndpoint) {
            openTelegramFallback();
            return;
        }
        try {
            const response = await fetch(leadEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            });
            if (!response.ok) {
                throw new Error("Request failed");
            }
            setStatus("success");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$track$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["track"])("lead_success");
            reset();
        } catch (error) {
            console.error(error);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$track$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["track"])("lead_error");
            openTelegramFallback();
        }
    };
    const fadeUp = (delay = 0)=>shouldAnimate ? {
            initial: {
                opacity: 0,
                y: 20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay
            },
            viewport: {
                once: true,
                amount: 0.3
            }
        } : {
            initial: false
        };
    const fadeUpProps = (delay = 0)=>isMounted ? fadeUp(delay) : {};
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "lead",
        className: "bg-cream py-16 sm:py-20 section-desktop",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                ...fadeUpProps(0),
                className: "section-header",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-title-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "section-title-divider",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/LeadForm.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "section-title",
                            children: "Обсудим ваш проект"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/LeadForm.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/LeadForm.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/LeadForm.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                ...fadeUpProps(0.1),
                className: "section-header mt-6 sm:mt-8 lg:mt-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-charcoal lg:text-[1.25rem] lg:leading-relaxed",
                                children: "Ответим с вариантами материалов и стоимостью. Обычно — в течение рабочего дня."
                            }, void 0, false, {
                                fileName: "[project]/components/sections/LeadForm.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-3",
                                children: [
                                    "Договор",
                                    "Гарантия",
                                    "Собственное производство"
                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full border border-steel/70 bg-warm/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-charcoal",
                                        children: item
                                    }, item, false, {
                                        fileName: "[project]/components/sections/LeadForm.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/sections/LeadForm.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/LeadForm.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "contact-cta mt-6 md:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: telegramLink,
                            className: "telegram-button",
                            target: "_blank",
                            rel: "noreferrer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    width: "20",
                                    height: "20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/LeadForm.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/LeadForm.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Написать в Telegram"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/LeadForm.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/LeadForm.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/LeadForm.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "contact-info-column mt-10 space-y-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit(onSubmit),
                            className: "contact-form rounded-none border border-steel bg-linen p-6 lg:flex lg:h-full lg:flex-col lg:rounded-2xl lg:p-8 lg:shadow-elevated",
                            "aria-live": "polite",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6 lg:flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-charcoal text-sm",
                                                    htmlFor: "name",
                                                    children: "Имя"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/LeadForm.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "name",
                                                    type: "text",
                                                    placeholder: "Ваше имя",
                                                    className: "focus-ring mt-2 w-full rounded-none border border-steel bg-warm px-4 py-2.5 text-base text-graphite placeholder:text-ash focus-visible:border-graphite focus-visible:ring-0 lg:h-14 lg:rounded-lg lg:py-0",
                                                    ...register("name"),
                                                    "aria-invalid": Boolean(errors.name),
                                                    "aria-describedby": errors.name ? "name-error" : undefined
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/LeadForm.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 17
                                                }, this),
                                                errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    id: "name-error",
                                                    className: "mt-2 text-sm text-rose-600",
                                                    children: errors.name.message
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/LeadForm.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/LeadForm.tsx",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-charcoal text-sm",
                                                    htmlFor: "contact",
                                                    children: "Телефон или мессенджер"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/LeadForm.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "contact",
                                                    type: "text",
                                                    placeholder: "+7 999 000-00-00",
                                                    className: "focus-ring mt-2 w-full rounded-none border border-steel bg-warm px-4 py-2.5 text-base text-graphite placeholder:text-ash focus-visible:border-graphite focus-visible:ring-0 lg:h-14 lg:rounded-lg lg:py-0",
                                                    ...register("contact"),
                                                    "aria-invalid": Boolean(errors.contact),
                                                    "aria-describedby": errors.contact ? "contact-error" : undefined
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/LeadForm.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 17
                                                }, this),
                                                errors.contact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    id: "contact-error",
                                                    className: "mt-2 text-sm text-rose-600",
                                                    children: errors.contact.message
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/LeadForm.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/LeadForm.tsx",
                                            lineNumber: 183,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-charcoal text-sm",
                                                    htmlFor: "furnitureType",
                                                    children: "Тип изделия"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/LeadForm.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    id: "furnitureType",
                                                    className: "focus-ring mt-2 w-full rounded-none border border-steel bg-warm px-4 py-2.5 text-base text-graphite focus-visible:border-graphite focus-visible:ring-0 lg:h-14 lg:rounded-lg lg:py-0",
                                                    ...register("furnitureType"),
                                                    "aria-invalid": Boolean(errors.furnitureType),
                                                    "aria-describedby": errors.furnitureType ? "furniture-type-error" : undefined,
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["furnitureTypes"].map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: type,
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["furnitureTypeLabels"][type]
                                                        }, type, false, {
                                                            fileName: "[project]/components/sections/LeadForm.tsx",
                                                            lineNumber: 217,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/LeadForm.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 17
                                                }, this),
                                                errors.furnitureType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    id: "furniture-type-error",
                                                    className: "mt-2 text-sm text-rose-600",
                                                    children: errors.furnitureType.message
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/LeadForm.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/LeadForm.tsx",
                                            lineNumber: 203,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-charcoal text-sm",
                                                    htmlFor: "comment",
                                                    children: "Комментарий (необязательно)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/LeadForm.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    id: "comment",
                                                    rows: 4,
                                                    placeholder: "Кратко опишите задачу или пожелания",
                                                    className: "focus-ring mt-2 w-full resize-none rounded-none border border-steel bg-warm px-4 py-2.5 text-base text-graphite placeholder:text-ash focus-visible:border-graphite focus-visible:ring-0 lg:rounded-lg lg:py-3",
                                                    ...register("comment"),
                                                    "aria-invalid": Boolean(errors.comment),
                                                    "aria-describedby": errors.comment ? "comment-error" : undefined
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/LeadForm.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 17
                                                }, this),
                                                errors.comment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    id: "comment-error",
                                                    className: "mt-2 text-sm text-rose-600",
                                                    children: errors.comment.message
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/LeadForm.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/LeadForm.tsx",
                                            lineNumber: 229,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "consent",
                                                    type: "checkbox",
                                                    className: "focus-ring mt-1 h-4 w-4 rounded border-steel bg-warm text-graphite accent-graphite",
                                                    ...register("consent"),
                                                    "aria-invalid": Boolean(errors.consent),
                                                    "aria-describedby": errors.consent ? "consent-error" : undefined
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/LeadForm.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-charcoal text-sm",
                                                    htmlFor: "consent",
                                                    children: "Я согласен(а) с политикой обработки персональных данных"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/LeadForm.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/LeadForm.tsx",
                                            lineNumber: 249,
                                            columnNumber: 15
                                        }, this),
                                        errors.consent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            id: "consent-error",
                                            className: "-mt-2 text-sm text-rose-600",
                                            children: errors.consent.message
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/LeadForm.tsx",
                                            lineNumber: 263,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            tabIndex: -1,
                                            autoComplete: "off",
                                            className: "hidden",
                                            "aria-hidden": "true",
                                            ...register("honeypot")
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/LeadForm.tsx",
                                            lineNumber: 268,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/LeadForm.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    className: "focus-ring w-full rounded-none border border-graphite bg-graphite px-6 py-4 text-sm font-semibold text-white transition hover:bg-charcoal disabled:cursor-not-allowed disabled:opacity-60 lg:rounded-lg lg:text-[length:var(--font-nav)]",
                                                    disabled: status === "loading",
                                                    children: status === "loading" ? "Отправляем..." : "Обсудить проект"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/LeadForm.tsx",
                                                    lineNumber: 279,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: telegramLink,
                                                    className: "telegram-button hidden w-full justify-center md:flex",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            viewBox: "0 0 24 24",
                                                            fill: "currentColor",
                                                            width: "20",
                                                            height: "20",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/LeadForm.tsx",
                                                                lineNumber: 300,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/LeadForm.tsx",
                                                            lineNumber: 293,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Написать в Telegram"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/LeadForm.tsx",
                                                            lineNumber: 302,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/LeadForm.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/LeadForm.tsx",
                                            lineNumber: 278,
                                            columnNumber: 15
                                        }, this),
                                        status === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700",
                                            children: usedTelegramFallback ? "Открыли Telegram с вашим сообщением. Если окно не появилось, напишите нам вручную." : "Спасибо. Мы свяжемся с вами в ближайшее время."
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/LeadForm.tsx",
                                            lineNumber: 307,
                                            columnNumber: 17
                                        }, this),
                                        status === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700",
                                            children: "Не удалось отправить. Попробуйте ещё раз или напишите в мессенджер."
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/LeadForm.tsx",
                                            lineNumber: 315,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/LeadForm.tsx",
                                    lineNumber: 277,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/LeadForm.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/LeadForm.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/LeadForm.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/LeadForm.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
_s(LeadForm, "1XmZZeMYzb29dI0yiaSudQhiqiw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$useDesktopMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = LeadForm;
var _c;
__turbopack_context__.k.register(_c, "LeadForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_af669674._.js.map
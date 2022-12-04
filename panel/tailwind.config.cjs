/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,tsx}"],
    theme: {
        extend: {},
        colors: {
            querySolid: "#22c55e",
            queryBg: "#f0fdf4",
            queryBgDark: "#dcfce7",
            queryText: "#16a34a",
            mutationSolid: "#3b82f6",
            mutationBg: "#eff6ff",
            mutationText: "#2563eb",
            mutationBgDark: "#dbeafe",
            routerSolid: "#8b5cf6",
            routerBg: "#faf5ffaa",
            routerBgDark: "#f3e8ff",
            routerText: "#9333ea",
            neutralSolid: "#52525b",
            neutralSolidTransparent: "#64748b",
            neutralBg: "#f1f5f922",
            neutralBgDark: "#e2e8f0",
            neutralText: "#0f172a",
            light: "#f8fafc",
            white: "#fcfcfc", // not actually white btw
            actuallyWhite: "#ffffff",
            error: "#ef4444",
            mainBackground: "#f9fafb",
            panelBorder: "#d4d4d8",
            overlayBackground: "#999a9b88",
        },
    },
    plugins: [],
};

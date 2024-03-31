import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            transparent: "transparent",
            black: "#000",
            white: "#fff",
            // red: "#E23636",
            primary: {
                50: "#D6FFFA",
                100: "#A3FFF4",
                200: "#00FADD",
                300: "#00E0C6",
                400: "#00C7B0",
                500: "#00A895",
                600: "#009987",
                700: "#008575",
                800: "#007063",
                900: "#004D44",
                950: "#003832"
            },
            complementary: {
                50: "#F5F8FF",
                100: "#EBF1FF",
                200: "#D6E4FF",
                300: "#BDD3FF",
                400: "#A3C2FF",
                500: "#81ABFF",
                600: "#6699FF",
                700: "#4785FF",
                800: "#1463FF",
                900: "#0042C7",
                950: "#00308F"
            },
            muted: {
                50: "#FAFAFA",
                100: "#F5F5F5",
                200: "#EDEDED",
                300: "#E0E0E0",
                400: "#D6D6D6",
                500: "#CACACA",
                600: "#B5B5B5",
                700: "#A1A1A1",
                800: "#878787",
                900: "#616161",
                950: "#454545"
            },
            info: "#4A90E2",
            success: "#82DD55",
            warning: "#EDB82A",
            danger: "#E23636",
            rojo: "#E23636",
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            fontWeight: {
                "thin": "100",
                "extra-light": "200",
                "light": "300",
                "normal": "400",
                "medium": "500",
                "semi-bold": "600",
                "bold": "700",
                "extra-bold": "800",
                "black": "900",
            },
        },
    },
    plugins: [],
};
export default config;

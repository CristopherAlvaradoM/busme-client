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
            text: {
                'headline': {
                    fontFamily: 'Poppins',
                    fontSize: '40px',
                    fontWeight: 'semi-bold',
                    color: 'white',
                },
                'title': {
                    fontFamily: 'Poppins',
                    fontSize: '32px',
                    fontWeight: 'semi-bold',
                    color: 'black',
                },
                'introduction': {
                    fontFamily: 'Poppins',
                    fontSize: '22px',
                    fontWeight: 'medium',
                    color: 'white',
                },
                'subtitle': {
                    fontFamily: 'Poppins',
                    fontSize: '20px',
                    fontWeight: 'semi-bold',
                    color: 'black',
                },
                'body': {
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    fontWeight: 'medium',
                    color: 'black',
                },
                'caption': {
                    fontFamily: 'Poppins',
                    fontSize: '16px',
                    fontWeight: 'medium',
                    color: 'muted-700',
                },
                'link': {
                    fontFamily: 'Poppins',
                    fontSize: '18px',
                    fontWeight: 'Medium',
                    color: 'primary-500',
                },
            },
            button: {
                'primary': {
                    backgroundColor: 'primary-800',
                    color: 'white',
                    fontWeight: 'semi-bold',
                    borderRadius: '50px',
                    padding: '10px 20px',
                    cursor: 'pointer',
                },
                'secondary': {
                    backgroundColor: 'primary-600',
                    color: 'white',
                    fontWeight: 'semi-bold',
                    borderRadius: '6px',
                    padding: '10px 20px',
                    cursor: 'pointer',
                },
                'disabled': {
                    backgroundColor: 'muted-500',
                    color: 'black',
                    fontWeight: 'semi-bold',
                    borderRadius: '6px',
                    padding: '10px 20px',
                    cursor: 'not-allowed',
                }
            },
        },
    },
    plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(0 0% 20%)',
				input: 'hsl(0 0% 20%)',
				ring: 'hsl(186 100% 50%)',
				background: 'hsl(0 0% 10%)',
				foreground: 'hsl(0 0% 100%)',
				primary: {
					DEFAULT: 'hsl(186 100% 50%)',
					foreground: 'hsl(0 0% 10%)'
				},
				secondary: {
					DEFAULT: 'hsl(0 0% 15%)',
					foreground: 'hsl(0 0% 100%)'
				},
				destructive: {
					DEFAULT: 'hsl(0 84.2% 60.2%)',
					foreground: 'hsl(0 0% 100%)'
				},
				muted: {
					DEFAULT: 'hsl(0 0% 20%)',
					foreground: 'hsl(0 0% 70%)'
				},
				accent: {
					DEFAULT: 'hsl(186 100% 50%)',
					foreground: 'hsl(0 0% 10%)'
				},
				popover: {
					DEFAULT: 'hsl(0 0% 15%)',
					foreground: 'hsl(0 0% 100%)'
				},
				card: {
					DEFAULT: 'hsl(0 0% 15%)',
					foreground: 'hsl(0 0% 100%)'
				},
				sidebar: {
					DEFAULT: 'hsl(0 0% 10%)',
					foreground: 'hsl(0 0% 100%)',
					primary: 'hsl(186 100% 50%)',
					'primary-foreground': 'hsl(0 0% 10%)',
					accent: 'hsl(0 0% 20%)',
					'accent-foreground': 'hsl(0 0% 100%)',
					border: 'hsl(0 0% 20%)',
					ring: 'hsl(186 100% 50%)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					from: {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
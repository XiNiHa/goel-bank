import styles from "~/global.css?inline";

export function Layout(this: FC) {
	return (
		<>
			<head>
				<style>{css(styles)}</style>
			</head>
			<body>
				<slot />
			</body>
		</>
	);
}

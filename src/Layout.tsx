import { html, raw } from "hono/html";
import type { FC, PropsWithChildren } from "hono/jsx";
import styles from "./global.css?inline";

const Layout: FC<PropsWithChildren> = (props) => {
	const inner = (
		<html lang="ko">
			<head>
				<style>{raw(styles)}</style>
			</head>
			<body>{props.children}</body>
		</html>
	);

	return html`<!DOCTYPE HTML>${inner}`;
};

export default Layout;

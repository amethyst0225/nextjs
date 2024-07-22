"use client"; //server 컴포넌트 안에 client 컴포넌트가 들어갈 수 있음, 반대는 불가
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/navigation.module.css';

export default function Navigation(){
	const path = usePathname();
	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				<li>
					<Link href="/">Home</Link> {path === "/" ? "✨" : ""}
				</li>
				<li>
					<Link href="/about-us">About Us</Link> {path === "/about-us" ? "✨" : ""}
				</li>
			</ul>
		</nav>

	);
}
import { AppBanner } from "@/components/AppBanner";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/HeroNewFixed";
import { CookieBanner } from "@/components/CookieBanner";
import { Services } from "@/components/Services";
import { AboutSection } from "@/components/AboutSection";
import { EarnWithFleet } from "@/components/EarnWithFleet";

export default function Home() {
	return (
		<div className="min-h-screen bg-white text-slate-900">
			<Header />
			<main>
				<Hero />
				<Services />
				<AboutSection />
				<EarnWithFleet />
				<FAQ />
				<AppBanner />
			</main>
			<Footer />
			<CookieBanner />
		</div>
	);
}

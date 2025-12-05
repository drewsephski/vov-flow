import Link from "next/link";
import { CheckIcon } from "../../components/Icon/CheckIcon";
import { api } from "@/api";
import Navbar from "@/components/marketing/navbar";
import PricingHero from "@/components/pricing/pricing-hero";
import PricingQuestions from "@/components/pricing/pricing-questions";

export default async function PricingPage() {
	const { result } = await api.products.list({
		isArchived: false,
	});

	return (
		<div className="w-full flex flex-col justify-center items-center">
			<Navbar />
			<div className="pt-16">
				<PricingHero />
				<div className="flex flex-col items-center py-16">
					<div className="w-full max-w-6xl px-4">
						<div className="grid grid-cols-1 gap-8 justify-items-center">
							{result.items.map((product) => (
								<div
									key={product.id}
									className="w-full max-w-sm flex flex-col justify-between p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 ease-out"
								>
									<div className="flex flex-col gap-y-6">
										<div className="text-center">
											<h3 className="text-2xl font-semibold text-foreground mb-2">{product.name}</h3>
											<p className="text-muted-foreground text-sm leading-relaxed">{product.description}</p>
										</div>
										<div className="space-y-3">
											{product.benefits.map((benefit) => (
												<div
													key={benefit.id}
													className="flex items-start gap-x-3"
												>
													<CheckIcon />
													<span className="text-sm text-foreground leading-relaxed">{benefit.description}</span>
												</div>
											))}
										</div>
									</div>
									<div className="mt-8 space-y-4">
										<div className="text-center">
											<span className="text-3xl font-bold text-foreground">
												{product.prices[0].amountType === "fixed"
													? `$${product.prices[0].priceAmount / 100}`
													: product.prices[0].amountType === "free"
														? "Free"
														: "Pay what you want"}
											</span>
										</div>
										<Link
											className="w-full h-12 flex items-center justify-center rounded-xl bg-primary/80 text-primary-foreground font-medium px-4 hover:bg-primary transition-all duration-200 shadow-sm"
											href={`/checkout?productId=${product.id}`}
										>
											Get Started
										</Link>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<PricingQuestions />
			</div>
		</div>
	);
}



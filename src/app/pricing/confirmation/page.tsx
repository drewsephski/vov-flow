import Navbar from "@/components/marketing/navbar";
import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";

export default function ConfirmationPage({
	searchParams,
}: {
	searchParams: {
		checkoutId?: string;
	};
}) {
	// Checkout has been confirmed
	// Now, make sure to capture the Checkout.updated webhook event to update the order status in your system

	return (
		<div className="w-full relative flex flex-col">
			<Navbar />
			<div className="pt-16">
				<Wrapper className="py-20">
					<Container>
						<div className="flex flex-col items-center justify-center text-center">
							<div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
								<svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<h1 className="text-4xl font-semibold text-foreground mb-4">
								Thank you! Your checkout is now being processed.
							</h1>
							<p className="text-lg text-muted-foreground mb-8 max-w-2xl">
								We've received your payment and are processing your order. You'll receive a confirmation email shortly with your order details.
							</p>
							<div className="flex gap-4">
								<a 
									href="/pricing" 
									className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
								>
									Back to Pricing
								</a>
								<a 
									href="/" 
									className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-colors"
								>
									Home
								</a>
							</div>
						</div>
					</Container>
				</Wrapper>
			</div>
		</div>
	);
}

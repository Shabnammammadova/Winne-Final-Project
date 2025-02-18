import { stripe } from '../lib/stripe';
import { formatAmountForStripe } from '../utils/helpers';



export async function createCheckoutSession(amount: number): Promise<{ url: string | null }> {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: { name: 'Product Name' },
                    unit_amount: formatAmountForStripe(amount, 'usd'),
                },
                quantity: 1,
            }
        ],
        success_url: `${process.env.BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.BASE_URL}/cancel`,
    });


    return { url: session.url };
}

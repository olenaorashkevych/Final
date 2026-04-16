import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51TDSsb6htkwR8jKjCcHEk2NRdEUWNuzmZ62ZVLVxm8kG2BS6am1X5fTSOfnjEhdWYpuJLeMHpeFfGc49X06YRuF900rM72Nqdr");

export const StripeProvider = ({ children }) => {
    return (
        <Elements stripe={stripePromise}>
            {children}
        </Elements>
    );
};
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51LT3cCSF2Y4ItNhSaJrPC42dTQrT6YqgVNF0n2edpY86ELumxgWG1ZaeoVAIPNp1JtWW5R9tVo2xNM8CJEAalnKD009xzB7GeO"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}
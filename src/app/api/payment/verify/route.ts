import { NextResponse } from 'next/server'
import crypto from 'crypto'
import { completeSubscription } from '@/app/actions/user'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { razorpay_payment_id, razorpay_subscription_id, razorpay_signature } = body

    const secret = process.env.RAZORPAY_KEY_SECRET as string

    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(`${razorpay_payment_id}|${razorpay_subscription_id}`)
      .digest('hex')

    if (expectedSignature === razorpay_signature) {
      // Pass the razorpay_subscription_id to your existing db update action 
      // instead of the stripe session_id
      const customer = await completeSubscription(razorpay_subscription_id)
      
      if (customer.status === 200) {
        return NextResponse.json({ status: 200, message: 'Verified' })
      }
    }

    return NextResponse.json({ status: 400, message: 'Invalid signature' })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ status: 500, message: 'Server error' })
  }
}
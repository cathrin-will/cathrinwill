export const maxDuration = 60
import sanityClient from '@/lib/sanity/client'

import { NextResponse } from 'next/server'
export async function POST(req) {
    try {
        const body = await req.json() // Parse the request body
        const response = await sanityClient.create({
            _type: 'formSubmission',
            ...body,
        })

        return NextResponse.json({
            message: 'Form submitted successfully',
            response,
        })
    } catch (err) {
        return NextResponse.json(
            {
                message: `Internal server error: ${err.message}`,
            },
            { status: 500 },
        )
    }
}

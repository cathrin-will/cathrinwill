export const maxDuration = 60
import sanityClient from '@/lib/sanity/client'

import { NextResponse } from 'next/server'
export async function POST(req: Request) {
    try {
        const body = await req.json()
        const response = await sanityClient.create({
            _type: 'formSubmission',
            ...body,
        })

        return NextResponse.json({
            message: 'Form submitted successfully',
            response,
        })
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'unknown'

        return NextResponse.json(
            {
                message: `Internal server error: ${errorMessage}`,
            },
            { status: 500 },
        )
    }
}

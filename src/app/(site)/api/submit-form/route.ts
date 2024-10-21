export const maxDuration = 60
import sanityClient from '@/lib/sanity/client'

import { NextResponse, NextRequest } from 'next/server'

interface FormSubmission {
    [key: string]: any
}

export async function POST(req: NextRequest) {
    try {
        const body = (await req.json()) as FormSubmission
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

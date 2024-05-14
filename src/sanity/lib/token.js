import 'server-only'

// import { experimental_taintUniqueValue } from 'react'

export const token = process.env.SANITY_API_READ_TOKEN

if (!token) {
    throw new Error('Missing SANITY_API_READ_TOKEN')
}

//  this errors would be nice to find a fix one day poss after its stable
// experimental_taintUniqueValue(
//     'Do not pass the sanity API read token to the client.',
//     process,
//     token,
// )

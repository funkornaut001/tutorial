import { NextRequest, NextResponse } from 'next/server';

//creates an api endpoint and creates aresponse

async function getResponse(req: NextRequest): Promise<NextResponse> {
    //grab the id and turn it into a numebr 
  const searchParams = req.nextUrl.searchParams
  const id:any = searchParams.get("id")
  const idAsNumber = parseInt(id)

  const nextId = idAsNumber + 1
    //if its the last image do something slightly different - show two buttons
    if (idAsNumber === 20) {
        return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame 7</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/Qmc3xei83saP6Uq3ufkCVPPe3ZCjafTFt9EwjJQnFaRsKs/golfball.jpg" />
    <meta property="fc:frame:button:1" content="Total Score" />
    <meta property="fc:frame:button:1:action" content="post_redirect" />
    <meta property="fc:frame:button:2" content="Post Score" />
    <meta property="fc:frame:button:2:action" content="post_redirect" />
    <meta property="fc:frame:button:3" content="Share Score" />
    <meta property="fc:frame:button:3:action" content="post_redirect" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end" />
    </head></html>`);
    } else if (idAsNumber === 1) {
        return new NextResponse(`<!DOCTYPE html><html><head>
            <title>This is frame ${id}</title>
            <meta property="fc:frame" content="vNext" />
            <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/Qmc3xei83saP6Uq3ufkCVPPe3ZCjafTFt9EwjJQnFaRsKs/golfball.jpg" />
            <meta property="fc:frame:input:text" name="course_name" content="Where are you playing" />
            <meta property="fc:frame:input:text" name="tees" content="What tees are you playing" />
            <meta property="fc:frame:input:text" name="total_par" content="What is Par" />
            <meta property="fc:frame:button:1" content="Next Page" />
            <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
        </head></html>`);
    } else {
        return new NextResponse(`<!DOCTYPE html><html><head>
            <title>This is frame ${id}</title>
            <meta property="fc:frame" content="vNext" />
            <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/Qmc3xei83saP6Uq3ufkCVPPe3ZCjafTFt9EwjJQnFaRsKs/golfball.jpg" />
            <meta property="fc:frame:input:text" name="score" content="Score" />

            <meta property="fc:frame:button:1" content="Next Page" />
            <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}" />
        </head></html>`);
        }
}

//    // <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/Qme4FXhoxHHfyzTfRxSpASbMF8kajLEPkRQWhwWu9pkUjm/${id}.png" />


export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
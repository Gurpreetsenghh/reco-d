import { client } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // 1. Await both the params and the request body
    const { id } = await params
    const body = await req.json()

    // 2. Validate the body to prevent crashes if filename is missing
    if (!body?.filename) {
      return NextResponse.json({ error: 'Filename is required' }, { status: 400 })
    }

    // 3. Use updateMany instead of update (unless you have a @@unique compound index)
    const completeProcessing = await client.video.updateMany({
      where: {
        userId: id,
        source: body.filename,
      },
      data: {
        processing: false,
      },
    })

    // 4. updateMany returns a count of updated records
    if (completeProcessing.count > 0) {
      return NextResponse.json({ message: 'Video processing completed' }, { status: 200 })
    }

    return NextResponse.json({ error: 'Video not found or already updated' }, { status: 404 })
    
  } catch (error) {
    console.error('VIDEO PROCESSING UPDATE ERROR:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
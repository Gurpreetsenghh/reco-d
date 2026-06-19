import { client } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await req.json()

    // Validate both filename and the new videoUrl
    if (!body?.filename || !body?.videoUrl) {
      return NextResponse.json({ error: 'Filename and Video URL are required' }, { status: 400 })
    }

    const completeProcessing = await client.video.updateMany({
      where: {
        userId: id,
        source: body.filename, // Find the record using the temporary filename
      },
      data: {
        processing: false,
        source: body.videoUrl, // Overwrite the filename with the Cloudinary URL
      },
    })

    if (completeProcessing.count > 0) {
      return NextResponse.json({ message: 'Video processing completed' }, { status: 200 })
    }

    return NextResponse.json({ error: 'Video not found or already updated' }, { status: 404 })
    
  } catch (error) {
    console.error('VIDEO PROCESSING UPDATE ERROR:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
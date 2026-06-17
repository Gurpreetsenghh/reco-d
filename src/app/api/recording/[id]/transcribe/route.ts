import { client } from '@/lib/prisma'
import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await req.json()

    if (!body?.filename || !body?.content || !body?.transcript) {
      return NextResponse.json({ error: 'Missing required payload fields' }, { status: 400 })
    }

    const content = JSON.parse(body.content)

    const transcribed = await client.video.updateMany({
      where: {
        userId: id,
        source: body.filename,
      },
      data: {
        title: content.title,
        description: content.summary,
        summery: body.transcript, 
      },
    })

    if (transcribed.count > 0) {
      console.log('🟢 Transcribed')
      
      try {
        const options = {
          method: 'POST',
          url: process.env.VOICEFLOW_KNOWLEDGE_BASE_API,
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: process.env.VOICEFLOW_API_KEY,
          },
          data: {
            data: {
              schema: {
                searchableFields: ['title', 'transcript'],
                metadataFields: ['title', 'transcript'],
              },
              name: content.title,
              items: [
                {
                  title: content.title,
                  transcript: body.transcript,
                },
              ],
            },
          },
        }

        const updateKB = await axios.request(options)
        console.log('🟢 Voiceflow Sync:', updateKB.data)
        
        return NextResponse.json({ message: 'Transcription saved and Voiceflow updated' }, { status: 200 })
      } catch (voiceflowError) {
        console.error('🔴 Voiceflow Sync Error:', voiceflowError)
        return NextResponse.json({ error: 'Database updated, but Voiceflow sync failed' }, { status: 502 })
      }
    }

    console.log('🔴 Transcription went wrong - Video not found')
    return NextResponse.json({ error: 'Video not found or already updated' }, { status: 404 })

  } catch (error) {
    console.error('🔴 Fatal Route Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
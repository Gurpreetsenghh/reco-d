import { client } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await req.json()

    if (!body?.filename) {
      return NextResponse.json({ error: 'Filename is required' }, { status: 400 })
    }

    const personalworkspaceId = await client.user.findUnique({
      where: {
        id,
      },
      select: {
        workspace: {
          where: {
            type: 'PERSONAL',
          },
          select: {
            id: true,
          },
          orderBy: {
            createdAt: 'asc',
          },
        },
      },
    })

    const workspaceId = personalworkspaceId?.workspace?.[0]?.id

    if (!workspaceId) {
      return NextResponse.json({ error: 'Personal workspace not found' }, { status: 404 })
    }

    const startProcessingVideo = await client.workSpace.update({
      where: {
        id: workspaceId,
      },
      data: {
        videos: {
          create: {
            source: body.filename,
            userId: id,
          },
        },
      },
      select: {
        User: {
          select: {
            subscription: {
              select: {
                plan: true,
              },
            },
          },
        },
      },
    })

    if (startProcessingVideo) {
      return NextResponse.json(
        { plan: startProcessingVideo.User?.subscription?.plan },
        { status: 200 }
      )
    }
    
    return NextResponse.json({ error: 'Failed to process video' }, { status: 400 })
  } catch (error) {
    console.error('🔴 Error in processing video', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
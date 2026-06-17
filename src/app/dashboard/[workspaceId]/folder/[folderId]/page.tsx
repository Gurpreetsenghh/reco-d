import { getAllUserVideos, getFolderInfo } from '@/app/actions/workspace'
import FolderInfo from '@/components/global/folders/folder-info'
import Videos from '@/components/global/videos'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import React from 'react'

type Props = {
  // 1. FIX: Type params as a Promise for Next.js 15
  params: Promise<{
    folderId: string
    workspaceId: string
  }>
}

const page = async ({ params }: Props) => {
  // 2. FIX: Await the params before using them
  const { folderId, workspaceId } = await params

  const query = new QueryClient()
  
  await query.prefetchQuery({
    queryKey: ['folder-videos'],
    queryFn: () => getAllUserVideos(folderId),
  })

  await query.prefetchQuery({
    // 3. FIX: Add folderId to the queryKey array so it exactly matches FolderInfo.tsx
    queryKey: ['folder-info', folderId],
    queryFn: () => getFolderInfo(folderId),
  })

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <FolderInfo folderId={folderId} />
      <Videos
        workspaceId={workspaceId}
        folderId={folderId}
        videosKey="folder-videos"
      />
    </HydrationBoundary>
  )
}

export default page
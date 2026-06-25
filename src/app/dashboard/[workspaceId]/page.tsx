import { getNotifications } from '@/app/actions/user'
import {
  getAllUserVideos,
  getWorkspaceFolders,
  getWorkSpaces,
} from '@/app/actions/workspace'
import CreateForlders from '@/components/global/create-folders'
import CreateWorkspace from '@/components/global/create-workspace'
import Folders from '@/components/global/folders'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'

import React from 'react'

type Props = {
  params: Promise<{ workspaceId: string }>
  children: React.ReactNode
}

const Page = async ( {params} : Props) => {
  const { workspaceId } = await params
  const query = new QueryClient()

  await query.prefetchQuery({
    queryKey: ['workspace-folders'],
    queryFn: () => getWorkspaceFolders(workspaceId),
  })

  await query.prefetchQuery({
    queryKey: ['user-videos'],
    queryFn: () => getAllUserVideos(workspaceId),
  })

 return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className="w-full">
        <Tabs
          defaultValue="videos"
          className="mt-6 w-full flex-col"
        >
          <div className="flex w-full justify-between items-center">
            <TabsList className="bg-transparent gap-2 pl-0">
              <TabsTrigger
                className="p-3.25 px-6 rounded-full data-[state=active]:bg-[#252525]"
                value="videos"
              >
                Videos
              </TabsTrigger>
            </TabsList>
            <div className="flex gap-x-3">
              <CreateWorkspace />
              <CreateForlders workspaceId={workspaceId} />
            </div>
          </div>
          <section className="py-9 w-full">
            <TabsContent value="videos" className="w-full">
              <Folders workspaceId={workspaceId} />
            </TabsContent>
          </section>
        </Tabs>
      </div>
    </HydrationBoundary>
  )
}

export default Page
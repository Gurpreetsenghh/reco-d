'use client'
import FolderDuotone from '@/components/icons/folder-duotone'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Folder from './folder'
import { useQueryData } from '@/hooks/useQueryData'
import { getWorkspaceFolders } from '@/app/actions/workspace'
import { useMutationDataState } from '@/hooks/useMutationData'
import Videos from '@/components/global/videos'
import { useDispatch } from 'react-redux'
import { FOLDERS } from '@/redux/slices/folders'

type Props = {
  workspaceId: string
}

export type FoldersProps = {
  status: number
  data: ({
    _count: {
      videos: number
    }
  } & {
    id: string
    name: string
    createdAt: Date
    workSpaceId: string | null
  })[]
}

const Folders = ({ workspaceId }: Props) => {
  const dispatch = useDispatch()
  //get folders
  const { data, isFetched } = useQueryData(['workspace-folders'], () =>
    getWorkspaceFolders(workspaceId)
  )

  const { latestVariables } = useMutationDataState(['create-folder'])

  const { status, data: folders } = data as FoldersProps

  // if (isFetched && folders) {
  // }

  if (isFetched && folders) {
    dispatch(FOLDERS({ folders: folders }))
  }

  return (
    <div
      className="flex flex-col gap-4"
      suppressHydrationWarning
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <FolderDuotone />
          <h2 className="text-[#BDBDBD] text-xl"> Folders</h2>
        </div>
        <Link
          href={`/dashboard/${workspaceId}/folders`}
          className="flex items-center gap-2 cursor-pointer transition-opacity hover:opacity-80"
        >
          <p className="text-[#BDBDBD]">See all</p>
          <ArrowRight color="#707070" />
        </Link>
      </div>
      
      {/* THE FIX: Replaced flex with a responsive grid */}
      <div
        className={cn(
          status !== 200 && 'flex justify-center',
          status === 200 && 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full'
        )}
      >
        {status !== 200 ? (
          <p className="text-neutral-300">No folders in workspace</p>
        ) : (
          <>
            {latestVariables && latestVariables.status === 'pending' && (
              <Folder
                name={latestVariables.variables.name}
                id={latestVariables.variables.id}
                optimistic
              />
            )}
            {folders.map((folder) => (
              <Folder
                name={folder.name}
                count={folder._count.videos}
                id={folder.id}
                key={folder.id}
              />
            ))}
          </>
        )}
      </div>

      <Videos
        workspaceId={workspaceId}
        folderId={workspaceId}
        videosKey="user-videos"
      />
    </div>
  )
}

export default Folders
'use client'

import React from 'react'
import { getFolderInfo } from '@/app/actions/workspace'
import { useQueryData } from '@/hooks/useQueryData'
import { FolderProps } from '@/types/index.type'

type Props = {
  folderId: string
}

const FolderInfo = ({ folderId }: Props) => {
  const {
    data,
    isPending,
  } = useQueryData(
    ['folder-info', folderId],
    () => getFolderInfo(folderId)
  )

  if (isPending) {
    return (
      <div className="flex items-center">
        <h2 className="text-[#BdBdBd] text-2xl">
          Loading...
        </h2>
      </div>
    )
  }

  const folderData = data as FolderProps | undefined

  if (
    !folderData ||
    folderData.status !== 200 ||
    !folderData.data
  ) {
    return (
      <div className="flex items-center">
        <h2 className="text-[#BdBdBd] text-2xl">
          Folder not found
        </h2>
      </div>
    )
  }

  return (
    <div className="flex items-center">
      <h2 className="text-[#BdBdBd] text-2xl">
        {folderData.data.name}
      </h2>
    </div>
  )
}

export default FolderInfo
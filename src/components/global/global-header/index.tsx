'use client'

import { WorkSpace } from '@prisma/client'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {
  workspace: WorkSpace
}

const GlobalHeader = ({ workspace }: Props) => {
  const pathname = usePathname()

  const relativePath = pathname.startsWith(`/dashboard/${workspace.id}`)
    ? pathname.replace(`/dashboard/${workspace.id}`, '')
    : ''

  const isVideo = relativePath.includes('video')
  const isFolder = relativePath.includes('folder')

  const title =
    !relativePath || isVideo
      ? 'My Library'
      : isFolder
      ? 'Folders'
      : relativePath.slice(1).charAt(0).toUpperCase() +
        relativePath.slice(2).toLowerCase()

  return (
    <article className="flex flex-col gap-2">
      <span className="text-[#707070] text-xs">
        {isVideo ? '' : workspace.type.toUpperCase()}
      </span>

      <h1 className="text-4xl font-bold">{title}</h1>
    </article>
  )
}

export default GlobalHeader
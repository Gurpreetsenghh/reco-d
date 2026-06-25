'use client'

import React from 'react'
import Modal from '../modal'
import { Move, Trash2 } from 'lucide-react'
import ChangeVideoLocation from '@/components/forms/change-video-location'
import { Button } from '@/components/ui/button'
import Loader from '../loader'
import { useMutationData } from '@/hooks/useMutationData'
import { deleteVideo } from '@/app/actions/workspace'
import { toast } from 'sonner'

type Props = {
  videoId: string
  currentWorkspace?: string
  currentFolder?: string
  currentFolderName?: string
  videosKey: string
}

const CardMenu = ({
  videoId,
  currentFolder,
  currentFolderName,
  currentWorkspace,
  videosKey,
}: Props) => {
  const { mutate, isPending } = useMutationData(
    ['delete-video', videoId],
    () => deleteVideo(videoId),
    videosKey,
    () => {
      toast('Deleted', {
        description: 'Video removed from database and Cloudinary',
      })
    }
  )

  return (
    <div className="flex items-center gap-x-2">
      <Modal
        className="flex items-center cursor-pointer gap-x-2"
        title="Move to new Workspace/Folder"
        description="Move this video to another workspace or folder."
        trigger={
          <Move
            size={20}
            fill="#4f4f4f"
            className="text-[#4f4f4f]"
          />
        }
      >
        <ChangeVideoLocation
          currentFolder={currentFolder}
          currentWorkSpace={currentWorkspace}
          videoId={videoId}
          currentFolderName={currentFolderName}
        />
      </Modal>
      <Button
        variant="ghost"
        size="icon"
        // Passed videoId to mutate to satisfy TypeScript's argument requirement
        onClick={() => mutate({ id: videoId } as any)} 
        className="h-8 w-8 text-[#6b6b6b] hover:text-red-500 hover:bg-red-500/10"
      >
        <Loader state={isPending}>
          <Trash2 size={18} />
        </Loader>
      </Button>
    </div>
  )
}

export default CardMenu
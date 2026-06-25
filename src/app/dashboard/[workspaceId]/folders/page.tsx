import { getWorkspaceFolders } from '@/app/actions/workspace'
import FolderDuotone from '@/components/icons/folder-duotone'
import Link from 'next/link'

type Props = {
  params: Promise<{
    workspaceId: string
  }>
}

const FoldersPage = async ({ params }: Props) => {
  const { workspaceId } = await params
  const foldersResponse = await getWorkspaceFolders(workspaceId)
  const folders = foldersResponse.status === 200 ? foldersResponse.data : []

  return (
    <div className="w-full flex flex-col gap-6 py-8">
      <div className="flex items-center gap-3">
        <FolderDuotone />
        <div>
          <h1 className="text-2xl font-semibold text-[#F5F5F5]">Folders</h1>
          <p className="text-sm text-[#9D9D9D]">All folders in this workspace</p>
        </div>
      </div>

      {folders.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {folders.map((folder) => (
            <Link
              key={folder.id}
              href={`/dashboard/${workspaceId}/folder/${folder.id}`}
              className="flex items-center justify-between gap-4 rounded-xl border border-[#27272a] bg-[#141416] px-5 py-4 transition-colors hover:border-[#9d4edd]/50 hover:bg-[#18181b]"
            >
              <div className="flex flex-col gap-1">
                <p className="text-base font-medium text-[#F5F5F5]">{folder.name}</p>
                <span className="text-sm text-[#9D9D9D]">
                  {folder._count.videos} videos
                </span>
              </div>
              <FolderDuotone />
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-[#27272a] bg-[#141416] p-6 text-[#9D9D9D]">
          No folders in this workspace yet.
        </div>
      )}
    </div>
  )
}

export default FoldersPage
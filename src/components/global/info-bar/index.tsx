import VideoRecorderIcon from '@/components/icons/video-recorder'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { UserButton } from '@clerk/nextjs'
import { Search, Download } from 'lucide-react'
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

type Props = {}

const InfoBar = (props: Props) => {
  return (
    <header className="pl-20 md:pl-[66.25px] fixed p-4 w-full flex items-center justify-between gap-4 bg-[#171717]/80 backdrop-blur-md z-40 border-b border-[#252525]">
      <div className="flex gap-4 justify-center items-center border border-[#252525] rounded-full px-4 w-full max-w-lg bg-[#1a1a1a]">
        <Search
          size={25}
          className="text-[#707070]"
        />
        <Input
          className="bg-transparent border-none placeholder-neutral-500 text-white focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder="Search for people, projects, tags & folders"
        />
      </div>
      <div className="flex items-center gap-4">
        
        {/* Record Button wrapped in a Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-[#a22fe0] hover:bg-[#a22fe0]/80 text-white flex items-center gap-2 rounded-full px-6">
              <VideoRecorderIcon />
              <span className="flex items-center gap-2 font-semibold">Record</span>
            </Button>
          </DialogTrigger>
          
          <DialogContent className="bg-[#171717] border-[#252525] text-white sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">Get the Desktop App</DialogTitle>
              <DialogDescription className="text-[#BDBDBD] mt-2">
                To capture your screen, camera, and microphone seamlessly in 1080p, you need the reco-d desktop application.
              </DialogDescription>
            </DialogHeader>
            
            <div className="flex flex-col gap-3 mt-6">
              {/* Added asChild prop and anchor tag for the download link */}
              <Button asChild className="w-full bg-[#a22fe0] hover:bg-[#a22fe0]/80 text-white flex items-center gap-2 py-6 rounded-xl">
                <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                  <Download size={20} />
                  Download for Windows
                </a>
              </Button>
            </div>
            
            <p className="text-center text-xs text-[#707070] mt-4">
              Version 1.0.0 • Lightweight Electron Client
            </p>
          </DialogContent>
        </Dialog>

        <UserButton />
      </div>
    </header>
  )
}

export default InfoBar
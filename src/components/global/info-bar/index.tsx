import VideoRecorderIcon from '@/components/icons/video-recorder'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import { Download, Video } from 'lucide-react'
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-600">
        <Video size={18} />
      </div>
      <span className="text-xl font-bold tracking-tight text-white">
        reco-d
      </span>
    </div>
  )
}

const InfoBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[#0A0A0A]/80 backdrop-blur-md z-40 border-b border-[#252525]">
      
      {/* INNER CONTAINER (this fixes alignment) */}
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        
        {/* LEFT */}
        <Logo />

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-[#a22fe0] hover:bg-[#b944f8] text-white border border-[#c661ff] shadow-[0_0_15px_rgba(162,47,224,0.4)] flex items-center gap-2 rounded-full px-6">
                <VideoRecorderIcon />
                <span className="font-semibold">Record</span>
              </Button>
            </DialogTrigger>

            <DialogContent className="bg-[#171717] border-[#252525] text-white sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  Get the Desktop App
                </DialogTitle>
                <DialogDescription className="text-[#BDBDBD] mt-2">
                  To capture your screen, camera, and microphone seamlessly in 1080p,
                  you need the reco-d desktop application.
                </DialogDescription>
              </DialogHeader>

              <div className="flex flex-col gap-3 mt-6">
                <Button
                  asChild
                  className="w-full bg-[#a22fe0] hover:bg-[#a22fe0]/80 text-white flex items-center gap-2 py-6 rounded-xl"
                >
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
      </div>
    </header>
  )
}

export default InfoBar
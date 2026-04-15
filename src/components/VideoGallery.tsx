import * as React from "react";
import { Play, Pause } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const VIDEOS = [
  "v09044g40000d0d5mufog65gedseua60.mp4",
  "v09044g40000d0d5vgfog65t38kg1gng.mp4",
  "v09044g40000d0d5vqvog65mhaj6ngng.mp4",
  "v09044g40000d0d604nog65gr8ms2c3g.mp4",
  "v09044g40000d0d60c7og65lnefa4r9g.mp4",
  "v09044g40000d0d60qnog65oklghmteg.mp4",
  "v09044g40000d0d622nog65int25bjlg.mp4",
  "v09044g40000d0d6a87og65knfa77tk0.mp4",
  "v09044g40000d0d6agnog65pkh9rhf70.mp4",
  "v09044g40000d0d6g67og65q2i0h8ulg.mp4",
  "v09044g40000d0d6gdnog65j8hemd2ng.mp4",
  "v09044g40000d0dko7fog65gedt9eebg.mp4",
  "v09044g40000d0dko7fog65mmdv30iog.mp4",
  "v09044g40000d0eeh4fog65uftr5a2sg.mp4",
];

function VideoCard({ src }: { src: string }) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative group mx-auto max-w-[280px]">
      {/* Phone Mockup Wrapper */}
      <div className="relative rounded-[2.5rem] border-[8px] border-secondary bg-secondary shadow-2xl overflow-hidden aspect-[9/16] ring-1 ring-border">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-secondary rounded-b-xl z-20" />
        
        <video
          ref={videoRef}
          src={`/videos/${src}`}
          className="w-full h-full object-cover bg-black/10"
          loop
          muted
          playsInline
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Overlay Play Button */}
        <div 
          onClick={togglePlay}
          className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
        >
          <div className="w-16 h-16 rounded-full bg-teal/80 flex items-center justify-center text-white shadow-lg backdrop-blur-sm transform group-hover:scale-110 transition-transform">
            {isPlaying ? <Pause size={32} /> : <Play size={32} className="ml-1" />}
          </div>
        </div>

        {/* Small Play label if not playing */}
        {!isPlaying && (
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-pulse">
            <span className="bg-teal text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold">
              Assistir Relato
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function VideoGallery() {
  return (
    <div className="w-full mt-24">
      <div className="text-center mb-12">
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
          Histórias de Transformação
        </h3>
        <p className="text-muted-foreground text-sm uppercase tracking-widest">
          Resultados Reais • 14 Depoimentos em vídeo
        </p>
      </div>

      <div className="relative px-12 md:px-20">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {VIDEOS.map((video, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <VideoCard src={video} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12" />
          <CarouselNext className="hidden md:flex -right-4 lg:-right-12" />
        </Carousel>
      </div>
    </div>
  );
}

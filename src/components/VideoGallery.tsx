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

import poster from "@/assets/video-poster.png";

const VIDEOS = Array.from({ length: 14 }, (_, i) => `depoimento-${i + 1}.mp4`);

function VideoCard({ src }: { src: string }) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [src]);

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
          className="w-full h-full object-cover bg-black/10"
          loop
          muted
          playsInline
          poster={poster}
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={`/videos/${src}`} type="video/mp4" />
          Seu navegador não suporta este vídeo.
        </video>

        {/* Overlay Play Button */}
        <div 
          onClick={togglePlay}
          className="absolute inset-0 z-10 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
        >
          <div className="w-16 h-16 rounded-full bg-teal/80 flex items-center justify-center text-white shadow-lg backdrop-blur-sm transform group-hover:scale-110 transition-transform">
            {isPlaying ? <Pause size={32} /> : <Play size={32} className="ml-1" />}
          </div>
        </div>

        {/* Small Play label if not playing */}
        {!isPlaying && (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-pulse pointer-events-none">
            <span className="bg-teal text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold whitespace-nowrap">
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

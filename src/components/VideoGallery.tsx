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

const VIDEOS = Array.from({ length: 14 }, (_, i) => `depoimento-${i + 1}`);

function VideoCard({ src }: { src: string }) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const togglePlay = async () => {
    const v = videoRef.current;
    if (!v) return;
    try {
      if (v.paused) {
        v.muted = false;
        await v.play();
      } else {
        v.pause();
      }
    } catch (err) {
      try {
        v.muted = true;
        await v.play();
      } catch (e) {
        console.error("Erro ao reproduzir vídeo:", e);
      }
    }
  };

  return (
    <div className="relative group mx-auto w-full max-w-[320px]">
      <button
        type="button"
        onClick={togglePlay}
        className="relative block w-full rounded-2xl overflow-hidden shadow-xl aspect-[4/5] bg-cream-dark/50 cursor-pointer"
      >
        <video
          ref={videoRef}
          src={`/videos/${src}.mp4`}
          poster={`/videos/thumbs/${src}.jpg`}
          className="w-full h-full object-cover object-center pointer-events-none"
          loop
          playsInline
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          Seu navegador não suporta este vídeo.
        </video>

        {/* Play Button Overlay - always visible when paused */}
        {!isPlaying && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 transition-opacity">
            <div className="w-16 h-16 rounded-full bg-teal flex items-center justify-center text-white shadow-lg backdrop-blur-sm transform group-hover:scale-110 transition-transform">
              <Play size={32} className="ml-1" fill="currentColor" />
            </div>
          </div>
        )}

        {/* Pause overlay - only on hover when playing */}
        {isPlaying && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 hover:bg-black/20 opacity-0 hover:opacity-100 transition-all">
            <div className="w-16 h-16 rounded-full bg-teal/80 flex items-center justify-center text-white shadow-lg backdrop-blur-sm">
              <Pause size={32} />
            </div>
          </div>
        )}

        {/* Small Play label if not playing */}
        {!isPlaying && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
            <span className="bg-teal text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold whitespace-nowrap shadow-sm">
              Assistir Relato
            </span>
          </div>
        )}
      </button>
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
          <CarouselPrevious className="flex left-0 md:-left-4 lg:-left-12" />
          <CarouselNext className="flex right-0 md:-right-4 lg:-right-12" />

        </Carousel>
      </div>
    </div>
  );
}

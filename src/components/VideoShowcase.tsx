import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useState, useRef } from "react";

export const VideoShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="video" className="py-20 md:py-32 bg-background relative">
      {/* Red accent lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display text-foreground mb-4">
            ENGINEERING IN <span className="text-gradient">MOTION</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-border shadow-2xl">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              muted={isMuted}
              loop
              playsInline
              poster="/videos/safewall-video.mp4#t=0.1"
            >
              <source src="/videos/safewall-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video Overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 bg-background/50 flex items-center justify-center">
                <button
                  onClick={togglePlay}
                  className="video-play-btn hover:scale-110 transition-transform"
                  aria-label="Play video"
                >
                  <Play className="w-8 h-8 text-foreground ml-1" fill="currentColor" />
                </button>
              </div>
            )}

            {/* Video Controls */}
            {isPlaying && (
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button
                  onClick={togglePlay}
                  className="p-3 bg-background/80 backdrop-blur-sm rounded-full hover:bg-primary transition-colors"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 text-foreground" />
                  ) : (
                    <Play className="w-5 h-5 text-foreground" fill="currentColor" />
                  )}
                </button>
                <button
                  onClick={toggleMute}
                  className="p-3 bg-background/80 backdrop-blur-sm rounded-full hover:bg-primary transition-colors"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-foreground" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-foreground" />
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Specs Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 bg-card border border-primary/30 rounded-lg p-6"
          >
            <p className="text-center text-lg md:text-xl font-semibold text-foreground mb-6">
              Impact-Tested | Weather-Proven | Championship-Ready
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Impact Absorption", value: "98%" },
                { label: "Durability Rating", value: "9.8/10" },
                { label: "Installation Time", value: "48 hrs" },
                { label: "Warranty Period", value: "10 Years" },
              ].map((spec) => (
                <div key={spec.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-display text-gradient mb-1">
                    {spec.value}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">
                    {spec.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

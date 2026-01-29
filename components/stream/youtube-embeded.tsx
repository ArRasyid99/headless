type YouTubeEmbedProps = {
  videoId: string;
  title?: string;
};

export function YouTubeEmbed({
  videoId,
  title = "YouTube video player",
}: YouTubeEmbedProps) {
  return (
    <div className="relative w-auto h-xl font-medium overflow-hidden rounded-xl bg-black">
      {/* Aspect ratio 16:9 */}
      <div className="pt-[56.25%]" />

      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title={title}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      {/* Fallback SEO */}
      <noscript>
        <p>
          Tonton video di{" "}
          <a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            YouTube
          </a>
        </p>
      </noscript>
    </div>
  );
}

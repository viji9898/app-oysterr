import { useState, useRef } from "react";
import Image from "next/image";
type Testimonial = {
  id: number;
  name: string;
  role: string;
  country: string;
  countryCode: string;
  quote: string[];
  image: string;
  videoUrl?: string;
  videoThumbnail?: string; // add this to match your input
};
type TestimonialsProps = {
  testimonials: Testimonial[];
};

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <div className="space-y-12">
      {testimonials.map((testimonial: Testimonial, index: number) => {
        const iframeRef = useRef<HTMLIFrameElement | null>(null);
        const [showThumbnail, setShowThumbnail] = useState(true);

        return (
          <div
            key={testimonial.id}
            className={`bg-gray-50 rounded-xl overflow-hidden shadow-md ${
              testimonial.videoUrl
                ? index % 2 === 0
                  ? "md:flex"
                  : "md:flex flex-row-reverse"
                : ""
            }`}
          >
            {/* Video embed with landscape thumbnail */}
            {testimonial.videoUrl && (
              <div className="md:w-2/5 bg-black relative">
                <div className="relative aspect-video w-full h-full">
                  <iframe
                    ref={iframeRef}
                    src={testimonial.videoUrl}
                    className="absolute top-0 left-0 w-full h-full z-0"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={`${testimonial.name}'s testimonial video`}
                  ></iframe>

                  {showThumbnail && (
                    <div
                      onClick={() => {
                        const iframe = iframeRef.current;
                        if (iframe) {
                          const src = iframe.src;
                          iframe.src = src.includes("?")
                            ? `${src}&autoplay=1`
                            : `${src}?autoplay=1`;
                        }
                        setShowThumbnail(false);
                      }}
                      className="absolute top-0 left-0 w-full h-full z-10 cursor-pointer"
                    >
                      <img
                        src={testimonial.videoThumbnail}
                        alt={`${testimonial.name}'s video thumbnail`}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white bg-opacity-70 rounded-full flex items-center justify-center text-xl">
                          ▶
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Content */}
            <div
              className={`p-8 ${testimonial.videoUrl ? "md:w-3/5" : "w-full"}`}
            >
              {/* Quote */}
              <div className="mb-6">
                {testimonial.quote.map((paragraph, i) => (
                  <p key={i} className="text-gray-700 mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="mr-4 w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role} |{" "}
                    <span className="inline-flex items-center">
                      {testimonial.countryCode === "CA" && "🇨🇦"}
                      {testimonial.countryCode === "AU" && "🇦🇺"}
                      {testimonial.countryCode === "CO" && "🇨🇴"}
                      {testimonial.countryCode === "CH" && "🇨🇭"}
                      {testimonial.countryCode === "UK" && "🇬🇧"}{" "}
                      {testimonial.country}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

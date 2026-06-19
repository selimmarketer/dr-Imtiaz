interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  objectPosition?: string;
}

export default function Gallery() {
  const items: GalleryItem[] = [
    {
      src: "https://i.imgur.com/mRW100c.jpeg",
      alt: "ডা. ইমতিয়াজ হোসেন অর্ক",
      caption: "ডা. ইমতিয়াজ হোসেন অর্ক (এমবিবিএস, বিসিএস, সিসিডি, এফসিপিএস (মেডিসিন)",
      objectPosition: "center top"
    },
    {
      src: "https://i.imgur.com/mNbKhgU.jpeg",
      alt: "রোগী পরীক্ষা",
      caption: "নিবিড় যত্ন ও সময় নিয়ে চেম্বারে রোগী পরীক্ষা করছেন অর্ক স্যার",
      objectPosition: "center top"
    },
    {
      src: "https://i.imgur.com/sPCsyQ7.jpeg",
      alt: "চেম্বার",
      caption: "উন্নত চিকিৎসাসারঞ্জাম সমৃদ্ধ আধুনিক চেম্বার এলাকা"
    },
    {
      src: "https://i.imgur.com/0CTY6z0.jpeg",
      alt: "একতা ডায়াগনস্টিক ও ইমেজিং সেন্টার",
      caption: "একতা ডায়াগনস্টিক ও ইমেজিং সেন্টার বহির্ভাগ, মধুখালী"
    },
    {
      src: "https://i.imgur.com/WmjEuX7.jpeg",
      alt: "চিকিৎসা সেবা",
      caption: "আধুনিক রোগনির্ণয় প্রযুক্তির মাধ্যমে সঠিক সময়ে নিদান"
    }
  ];

  return (
    <section
      id="gallery"
      className="bg-bg-light py-16 md:py-24 border-b border-primary/5"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title panel */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-[42px] font-black font-bengali text-dark mb-4">
            চেম্বার ও কার্যক্রম
          </h2>
          <p className="text-text-muted font-bengali text-base max-w-lg mx-auto">
            একতা ডায়াগনস্টিক ও ইমেজিং সেন্টার (মধুখালী) এবং রোগীর চিকিৎসাসেবা কার্যপদ্ধতির বাস্তব ঝলক
          </p>
        </div>

        {/* Gallery grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => {
            // Give specific span to balance 5 items on desktop beautifully
            const isSpan = index === 3 || index === 4;
            
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl border border-primary/10 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform h-[280px] md:h-[320px] flex flex-col relative ${
                  isSpan ? 'lg:col-span-1 border-emerald-100' : ''
                }`}
              >
                {/* Image Container */}
                <div className="relative w-full h-[75%] overflow-hidden bg-stone-900">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    width={400}
                    height={300}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      const fallbacks = [
                        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600",
                        "https://images.unsplash.com/photo-1579684389782-64d84b5e905d?auto=format&fit=crop&q=80&w=600",
                        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600",
                        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600",
                        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600"
                      ];
                      e.currentTarget.src = fallbacks[index] || fallbacks[0];
                    }}
                    className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-[1.05] group-hover:brightness-[1.08]"
                    style={{ objectPosition: item.objectPosition || 'center' }}
                  />
                  {/* Subtle dark tint gradient on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Caption Panel */}
                <div className="p-4 flex-grow flex items-center justify-center bg-white border-t border-neutral-100">
                  <p className="text-stone-700 text-center font-bengali font-bold text-sm leading-relaxed group-hover:text-primary transition-colors">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

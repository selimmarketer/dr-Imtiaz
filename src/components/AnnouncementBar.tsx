export default function AnnouncementBar() {
  const announcements = [
    "ডা. ইমতিয়াজ হোসেন অর্ক — সহকারী রেজিস্ট্রার (মেডিসিন বিভাগ), ফরিদপুর মেডিকেল কলেজ হাসপাতাল",
    "🩺 মেডিসিন, ডায়বেটিস, উচ্চ রক্তচাপ, হৃদরোগ, কিডনি রোগ, চর্ম ও যৌন, বাত ব্যাথা, মাথা ব্যাথা, মা ও শিশু, শ্বাসকষ্ট, হাঁপানি ও এ্যাজমা রোগে অভিজ্ঞ",
    "📞 অ্যাপয়েন্টমেন্ট ও সিরিয়াল বুকিং হটলাইন: ০১৮৪৯-৮৯১২৯৮",
    "🗓️ প্রধান চেম্বার (মধুখালী) রোগী দেখার সময়: বৃহস্পতিবার থেকে সোমবার: বিকাল ৩:৩০ মিনিট থেকে সন্ধ্যা ৬:৩০ মিনিট এবং শুক্রবার সকাল ১০টা থেকে দুপুর ২টা",
    "🏥 ফরিদপুর অন কল চেম্বার: নূর ডায়াগনষ্টিক সেন্টার ও ফরিদপুর বারাকা ডায়াগনস্টিক সেন্টার",
    "📱 অনলাইন ভিডিও কনসাল্টেশন ও সরাসরি WhatsApp এ সেবা হয়"
  ];

  const marqueeText = announcements.join(" ✦ ") + " ✦ ";

  return (
    <div
      id="announcement-bar"
      className="bg-primary text-white h-9 overflow-hidden flex items-center relative z-40 border-b border-white/10"
    >
      <div className="relative w-full flex items-center overflow-hidden py-1">
        {/* We repeat the text to ensure the marquee behaves correctly and seamlessly */}
        <div className="flex animate-marquee whitespace-nowrap text-xs md:text-sm tracking-wide">
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
        </div>
      </div>
    </div>
  );
}

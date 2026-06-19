export function getObfuscatedNumber(): string {
  // Obfuscated phone number representation for "8801849891298"
  try {
    return atob("ODgwMTg0OTg5MTI5OA==");
  } catch (e) {
    return "8801849891298";
  }
}

export function getObfuscatedNumberDisplay(): string {
  // Obfuscated phone representation "01849-891298"
  try {
    return atob("MDE4NDktODkxMjk4");
  } catch (e) {
    return "01849-891298";
  }
}

export function buildWhatsAppURL(type: string): string {
  const number = getObfuscatedNumber();
  const messages: Record<string, string> = {
    appointment: "আসসালামুআলাইকুম, আমি ডা. ইমতিয়াজ হোসেন অর্ক স্যারের সাথে অ্যাপয়েন্টমেন্ট নিতে চাই। আমার নাম: [আপনার নাম], সমস্যা: [সমস্যার বিবরণ]। (Website থেকে যোগাযোগ করছি)",
    online: "আসসালামুআলাইকুম, আমি অনলাইন কনসাল্টেশন নিতে চাই। আমার নাম: [নাম], বয়স: [বয়স], সমস্যা: [বিস্তারিত সমস্যা], কতদিন ধরে: [দিন]। (Website থেকে)",
    diabetes: "আসসালামুআলাইকুম, আমার ডায়াবেটিস সমস্যার জন্য ডা. ইমতিয়াজ স্যারের পরামর্শ নিতে চাই। আমার নাম: [নাম]। (Website থেকে)",
    bp: "আসসালামুআলাইকুম, উচ্চ রক্তচাপ বা প্রেসারের সমস্যার জন্য ডা. ইমতিয়াজ স্যারের পরামর্শ নিতে চাই। আমার নাম: [নাম]। (Website থেকে)",
    heart: "আসসালামুআলাইকুম, হৃদরোগ/বুকে ব্যথার সমস্যার জন্য ডাক্তারের পরামর্শ নিতে চাই। নাম: [নাম]। (Website থেকে)",
    kidney: "আসসালামুআলাইকুম, কিডনি সমস্যার জন্য পরামর্শ নিতে চাই। নাম: [নাম], সমস্যা: [বিবরণ]। (Website থেকে)",
    breathing: "আসসালামুআলাইকুম, শ্বাসকষ্ট/হাঁপানি সমস্যার জন্য পরামর্শ নিতে চাই। নাম: [নাম]। (Website থেকে)",
    skin: "আসসালামুআলাইকুম, চর্ম রোগের সমস্যার জন্য পরামর্শ নিতে চাই। নাম: [নাম]। (Website থেকে)",
    child: "আসসালামুআলাইকুম, শিশুর স্বাস্থ্য সমস্যার জন্য পরামর্শ নিতে চাই। শিশুর বয়স: [বয়স], সমস্যা: [বিবরণ]। (Website থেকে)",
    gastric: "আসসালামুআলাইকুম, গ্যাস্ট্রিক ও লিভার রোগের সমস্যার জন্য ডা. ইমতিয়াজ স্যারের পরামর্শ নিতে চাই। আমার নাম: [নাম]। (Website থেকে)",
    general: "আসসালামুআলাইকুম, জ্বর / সাধারণ অসুখের সমস্যার জন্য ডা. ইমতিয়াজ স্যারের পরামর্শ নিতে চাই। আমার নাম: [নাম]। (Website থেকে)",
    ortho: "আসসালামুআলাইকুম, বাত-ব্যথা / জয়েন্ট ব্যথার সমস্যার জন্য ডা. ইমতিয়াজ স্যারের পরামর্শ নিতে চাই। আমার নাম: [নাম]। (Website থেকে)",
    neuro: "আসসালামুআলাইকুম, মাথাব্যথা / মাইগ্রেন সমস্যার জন্য ডা. ইমতিয়াজ স্যারের পরামর্শ নিতে চাই। আমার নাম: [নাম]। (Website থেকে)",
    other: "আসসালামুআলাইকুম, আমি ডা. ইমতিয়াজ হোসেন অর্ক স্যারের সাথে কনসাল্টেশন বা সিরিয়াল নিতে চাই। আমার নাম: [নাম], সমস্যা: [বিবরণ]। (Website থেকে)"
  };
  const msg = encodeURIComponent(messages[type] || messages.appointment);
  
  // Use the universal API endpoint format which is backward-compatible with ancient mobile Safaris & Android WebViews
  return `https://api.whatsapp.com/send?phone=${number}&text=${msg}`;
}


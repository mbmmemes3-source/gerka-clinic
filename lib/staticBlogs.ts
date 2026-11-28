export interface StaticBlog {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image: string;
  published: boolean;
  category: string;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export const staticBlogs: StaticBlog[] = [
  {
    id: "static-thrush-vs-bv",
    title: "Thrush or BV? How to Tell the Difference",
    slug: "thrush-or-bv-how-to-tell-the-difference",
    category: "Women's Health",
    excerpt: "Itching or unusual discharge that keeps returning isn't always thrush. Learn how to tell the difference between thrush and bacterial vaginosis (BV), their causes, and clinical treatments.",
    image: "/infection.webp",
    published: true,
    featured: false,
    createdAt: new Date("2026-11-28T12:00:00Z"),
    updatedAt: new Date("2026-11-28T12:00:00Z"),
    content: `
      <p class="lead text-xl text-zinc-800 font-normal mb-8">
        Itching or unusual discharge that keeps coming back isn't always thrush. Bacterial vaginosis (BV) can cause similar worries but needs different treatment. A proper check tells you which you're dealing with.
      </p>

      <h2 class="text-2xl font-light text-zinc-900 mt-10 mb-4 tracking-tight">What is Thrush?</h2>
      <p>
        Thrush is an overgrowth of <em>Candida</em>, a yeast that is normally harmless and lives naturally in the vagina. Antibiotics, pregnancy, poorly controlled diabetes, HRT, a weakened immune system or irritated skin can trigger an overgrowth.
      </p>
      <p><strong>Common signs include:</strong></p>
      <ul class="list-disc pl-6 space-y-2 my-4 text-zinc-700">
        <li>White discharge, often like cottage cheese, which usually doesn't smell.</li>
        <li>Itching and irritation around the vulva and vagina.</li>
        <li>Soreness or stinging during sex or when peeing.</li>
      </ul>
      <p>
        Thrush is usually treated with an antifungal tablet, pessary or cream. Some creams can damage condoms and diaphragms, so check before relying on them. (<a href="https://www.nhs.uk/conditions/thrush-in-men-and-women/" target="_blank" rel="noopener noreferrer">NHS: thrush</a>)
      </p>

      <h2 class="text-2xl font-light text-zinc-900 mt-10 mb-4 tracking-tight">What is Bacterial Vaginosis?</h2>
      <p>
        BV is an imbalance of the bacteria that live in the vagina. It isn't classed as a sexually transmitted infection, although sex can trigger it.
      </p>
      <p>
        You might notice thin, watery, greyish-white discharge with a strong fishy smell, especially after sex. Itching and soreness are usually absent, and about half of women with BV have no symptoms.
      </p>
      <p>
        BV is usually treated with antibiotic tablets, gels or creams. Perfumed soaps, intimate washes and douching are best avoided. (<a href="https://www.nhs.uk/conditions/bacterial-vaginosis/" target="_blank" rel="noopener noreferrer">NHS: bacterial vaginosis</a>)
      </p>

      <h2 class="text-2xl font-light text-zinc-900 mt-10 mb-4 tracking-tight">Thrush vs BV at a Glance</h2>
      <div class="overflow-x-auto my-6">
        <table class="w-full border-collapse border border-zinc-200 text-sm md:text-base">
          <thead>
            <tr class="bg-zinc-100 text-zinc-900 text-left">
              <th class="p-3 border border-zinc-200 font-semibold">Feature</th>
              <th class="p-3 border border-zinc-200 font-semibold">Thrush</th>
              <th class="p-3 border border-zinc-200 font-semibold">Bacterial Vaginosis (BV)</th>
            </tr>
          </thead>
          <tbody class="text-zinc-700">
            <tr class="bg-white">
              <td class="p-3 border border-zinc-200 font-medium text-zinc-900">Cause</td>
              <td class="p-3 border border-zinc-200">Yeast overgrowth (<em>Candida</em>)</td>
              <td class="p-3 border border-zinc-200">Bacterial imbalance</td>
            </tr>
            <tr class="bg-[#FAF9F6]">
              <td class="p-3 border border-zinc-200 font-medium text-zinc-900">Typical Discharge</td>
              <td class="p-3 border border-zinc-200">White, often like cottage cheese</td>
              <td class="p-3 border border-zinc-200">Thin, watery, greyish-white</td>
            </tr>
            <tr class="bg-white">
              <td class="p-3 border border-zinc-200 font-medium text-zinc-900">Smell</td>
              <td class="p-3 border border-zinc-200">Usually none</td>
              <td class="p-3 border border-zinc-200">Often strongly fishy</td>
            </tr>
            <tr class="bg-[#FAF9F6]">
              <td class="p-3 border border-zinc-200 font-medium text-zinc-900">Itching or Soreness</td>
              <td class="p-3 border border-zinc-200">Common</td>
              <td class="p-3 border border-zinc-200">Usually absent</td>
            </tr>
            <tr class="bg-white">
              <td class="p-3 border border-zinc-200 font-medium text-zinc-900">Usual Treatment</td>
              <td class="p-3 border border-zinc-200">Antifungal</td>
              <td class="p-3 border border-zinc-200">Antibiotic</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-xs text-zinc-500 italic mt-2 mb-6">
        These are typical patterns, not a diagnosis. Symptoms vary, and other conditions can feel similar.
      </p>

      <h2 class="text-2xl font-light text-zinc-900 mt-10 mb-4 tracking-tight">When to Get Checked</h2>
      <p>See a doctor or sexual health clinic if:</p>
      <ul class="list-disc pl-6 space-y-2 my-4 text-zinc-700">
        <li>This is the first time you've had these symptoms.</li>
        <li>Treatment hasn't worked, or symptoms keep returning.</li>
        <li>You're pregnant or breastfeeding.</li>
        <li>You're under 16 or over 60.</li>
        <li>Your immune system is weakened, for example by diabetes, HIV or chemotherapy.</li>
        <li>You think you may have BV.</li>
      </ul>
      <p>
        Getting either infection more than four times in a year is worth a specific conversation about longer-term treatment. A clinician will ask about your symptoms and may examine you or take a swab.
      </p>

      <h2 class="text-2xl font-light text-zinc-900 mt-10 mb-4 tracking-tight">Common Questions</h2>
      <div class="space-y-4 my-6">
        <div class="p-5 rounded-2xl bg-[#FAF9F6] border border-zinc-100">
          <h4 class="font-medium text-zinc-900 mb-1">Can I treat it myself again?</h4>
          <p class="text-zinc-600 text-sm">
            If symptoms are back or haven't cleared, get assessed first. Repeating the wrong treatment won't address the cause.
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-[#FAF9F6] border border-zinc-100">
          <h4 class="font-medium text-zinc-900 mb-1">Does my partner need treatment?</h4>
          <p class="text-zinc-600 text-sm">
            With thrush, only if they have symptoms. With BV, a partner who has a vagina may also need treatment.
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-[#FAF9F6] border border-zinc-100">
          <h4 class="font-medium text-zinc-900 mb-1">Should I use an intimate wash?</h4>
          <p class="text-zinc-600 text-sm">
            Avoid perfumed washes and douches. Gentle external washing is enough.
          </p>
        </div>
      </div>

      <div class="my-10 p-8 rounded-3xl bg-[#FAF9F6] border border-zinc-200">
        <h3 class="text-xl font-light text-zinc-900 mb-2">Book an Appointment at Gerka Clinic</h3>
        <p class="text-zinc-600 text-sm leading-relaxed mb-6">
          If symptoms keep coming back, talk to us. We're open Monday to Saturday, by appointment only.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-700 mb-6 font-light">
          <div><strong>Phone:</strong> <a href="tel:0878888087" class="hover:underline">087 888 8087</a></div>
          <div><strong>WhatsApp:</strong> <a href="https://wa.me/353899448000" class="hover:underline">089 944 8000</a></div>
          <div><strong>Email:</strong> <a href="mailto:info@gerkaclinic.com" class="hover:underline">info@gerkaclinic.com</a></div>
          <div><strong>Website:</strong> <a href="https://www.gerkaclinic.com" class="hover:underline">www.gerkaclinic.com</a></div>
          <div class="sm:col-span-2"><strong>Address:</strong> 1 Priory Office Park, Stillorgan Road, Dublin, A94 NH31</div>
        </div>

        <div class="pt-2">
          <a 
            href="/womens-health" 
            class="btn-cta inline-block px-7 py-3.5 rounded-full bg-zinc-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-md"
            style="color: #ffffff !important; text-decoration: none !important;"
          >
            Explore Women's Health Services →
          </a>
        </div>
      </div>

      <p class="text-xs text-zinc-400 italic">
        This article is general information and doesn't replace medical advice.
      </p>
    `
  }
];

const fetch = require("node-fetch"); // if Node <18

(async () => {
  // 1. Fetch all products
  const res = await fetch("https://southwilliamclinic.com/products.json?limit=250");
  const data = await res.json();

  // 2. 👉 APPLY FILTER HERE
  const zoProducts = data.products.filter(p => {
    const title = p.title.toLowerCase();
    const vendor = (p.vendor || "").toLowerCase();

    return (
      vendor.includes("zo skin health") ||
      title.includes("zo skin")
    );
  });

  console.log("Filtered Products:", zoProducts.length);

  // 3. Clean data (optional but recommended)
  const cleaned = zoProducts.map(p => ({
    name: p.title,
    price: p.variants[0]?.price,
    description: p.body_html,
    images: p.images.map(img => img.src),
  }));

  // 4. Output
  console.log(JSON.stringify(cleaned, null, 2));
})();
export default function sitemap() {
  return [
    {
      url: "https://thonnyvictor.vercel.app",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}

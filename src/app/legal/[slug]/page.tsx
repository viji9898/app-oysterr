// File: app/legal/[slug]/page.tsx
import LegalClient from "./LegalClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function LegalPage({ params }: PageProps) {
  const { slug } = await params;
  return <LegalClient slug={slug} />;
}

// Generate static params for all legal pages
export async function generateStaticParams() {
  return [
    { slug: "terms-of-use" },
    { slug: "privacy-policy" },
    { slug: "trial-terms-and-conditions" },
    { slug: "attributions-and-credits" },
  ];
}

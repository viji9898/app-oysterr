// pages/legal/[slug].js
import Legal from "./[slug]/page.tsx";
// src / app / legal / page.tsx;
const LegalPage = () => {
  return <Legal />;
};

export default LegalPage;

// This tells Next.js which paths to pre-render
export async function getStaticPaths() {
  const paths = [
    { params: { slug: "terms-of-use" } },
    { params: { slug: "privacy-policy" } },
    { params: { slug: "trial-terms-and-conditions" } },
    { params: { slug: "withdrawal-and-refund-policy" } },
    { params: { slug: "attributions-and-credits" } },
    { params: { slug: "affiliate-program" } },
  ];

  return {
    paths,
    fallback: false, // Show 404 for paths not in the list
  };
}

// This runs at build time
export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug,
    },
  };
}

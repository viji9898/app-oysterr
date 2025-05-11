// pages/legal/index.js
import { useEffect } from "react";
import { useRouter } from "next/router";

const LegalIndex = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to terms of use by default
    router.push("/legal/terms-of-use");
  }, [router]);

  return null; // or a loading spinner
};

export default LegalIndex;

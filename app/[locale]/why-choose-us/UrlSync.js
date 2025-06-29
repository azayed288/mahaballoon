'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function UrlSync({ lang, page }) {
    const router = useRouter();
  
    useEffect(() => {
      if (lang === "ar" && reversePathMapping[page]) {
        // Change URL to Arabic slug without affecting the actual route
        window.history.replaceState(
          null,
          "",
          `/${lang}/${reversePathMapping[page] || page}`
        );
      }
    }, [lang, page]);
  
    return null; // No UI, only for URL handling
  }
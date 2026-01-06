import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { applyRouteSEO } from "../seo";

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    applyRouteSEO(pathname);
  }, [pathname]);

  return null;
}

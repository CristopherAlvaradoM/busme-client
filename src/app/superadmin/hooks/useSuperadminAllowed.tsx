import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const useSuperadminAllowed = () => {
  const router = useRouter();
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if(!token) router.push("/");
    
    
  }, [])
}

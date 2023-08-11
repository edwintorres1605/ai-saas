"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("6c394a63-9368-4cb4-aa81-ef2716b7cb0a");
  }, []);

  return null;
}
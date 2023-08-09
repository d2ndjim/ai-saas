"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("8d2d734a-05d0-4533-afaa-a9c960afafcd");
  }, []);

  return null;
};

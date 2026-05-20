"use client";

import React, { useEffect, useState } from "react";
import { LanguageProvider } from "@/lib/LanguageContext";

export default function LanguageProviderWrapper({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}

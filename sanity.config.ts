"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./src/sanity/schemaTypes";
import { projectId, dataset } from "./src/sanity/lib/client";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  title: "Yaman Kazan",

  plugins: [structureTool()],

  schema,
});

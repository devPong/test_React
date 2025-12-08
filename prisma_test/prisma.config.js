import { defineConfig } from "@prisma/config";

export default defineConfig({
  datasources: {
    hr: {
      provider: "postgresql",
      url: process.env.HR_DATABASE_URL,
      schemas: ["prisma/hr/schema.prisma"],
    },
    erp: {
      provider: "postgresql",
      url: process.env.ERP_DATABASE_URL,
      schemas: ["prisma/erp/schema.prisma"],
    },
  },
});

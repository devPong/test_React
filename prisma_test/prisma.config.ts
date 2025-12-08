const { defineConfig } = require("@prisma/config");

module.exports = defineConfig({
  schema: [
    "prisma/erp/schema.prisma",
    "prisma/hr/schema.prisma"
  ]
});
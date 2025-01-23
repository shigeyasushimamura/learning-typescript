import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["tests/**/*.test.{ts,tsx}"], // 含めるファイル
    exclude: ["node_modules/**", "dist/**"], // 除外するファイル
  },
});

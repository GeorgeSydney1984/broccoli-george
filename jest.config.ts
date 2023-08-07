import { pathsToModuleNameMapper, JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  verbose: true,
  preset: "ts-jest",
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules", "<rootDir>"],
  moduleNameMapper: pathsToModuleNameMapper({
    "@components/*": ["app/components/*"],
    "@types": ["app/types/index.ts"],
    "@utils": ["app/common/utils.ts"],
    "@api": ["app/api/index.ts"],
  })
 }

export default jestConfig;
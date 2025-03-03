import { defineBuildConfig } from "unbuild"

export default defineBuildConfig({
  externals: ["@babel/core", "@babel/types", "@babel/traverse", "@babel/parser", "babel-plugin-lingui-macro-solid", "@lingui/conf", "source-map", "convert-source-map"],
})

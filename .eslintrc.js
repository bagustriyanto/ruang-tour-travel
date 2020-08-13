module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:prettier:recommended"],
  plugins: ["prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": "error"
  }
};

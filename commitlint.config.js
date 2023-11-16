module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-full-stop": [2, "never", "."],
    "header-case": [0],
    "header-max-length": [0],
    "type-enum": [
      2,
      "always",
      ["lib", "chore", "feat", "fix", "refactor", "style"],
    ],
  },
};

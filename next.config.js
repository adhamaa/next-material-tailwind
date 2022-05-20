/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")(["@material-tailwind/react"]);

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withTM(nextConfig);

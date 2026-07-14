/** @type {import('next').NextConfig} */
const nextConfig = {
  bundlePagesRouterDependencies: true,
};

export default nextConfig;

import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';

process.env.CLOUDFLARE_HYPERDRIVE_LOCAL_CONNECTION_STRING_HYPERDRIVE ??=
  process.env.DATABASE_URL;

initOpenNextCloudflareForDev();

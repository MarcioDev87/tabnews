import 'dotenv/config';
import { getCloudflareContext } from '@opennextjs/cloudflare';
import postgres from 'postgres';

async function query(queryObject) {
  const sql = postgres(await getConnectionString(), {
    max: 1,
    prepare: false,
  });

  try {
    const result =
      typeof queryObject === 'string'
        ? await sql.unsafe(queryObject)
        : await sql.unsafe(queryObject.text, queryObject.values);

    return {
      rows: [...result],
      rowCount: result.count ?? result.length,
    };
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await sql.end();
  }
}

async function getConnectionString() {
  const hyperdriveConnectionString = await getHyperdriveConnectionString();

  if (hyperdriveConnectionString) {
    return hyperdriveConnectionString;
  }

  if (!process.env.DATABASE_URL) {
    throw new Error(
      'A HYPERDRIVE binding or DATABASE_URL is required to connect to PostgreSQL.',
    );
  }

  return process.env.DATABASE_URL;
}

async function getHyperdriveConnectionString() {
  try {
    const { env } = await getCloudflareContext({ async: true });
    return env.HYPERDRIVE?.connectionString;
  } catch (error) {
    if (process.env.NODE_ENV === 'production') {
      throw error;
    }

    return undefined;
  }
}

export default {
  query,
};

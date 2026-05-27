import database from '/infra/database.js';

async function status(req, res) {
  const updatedAt = new Date().toISOString();

  const databaseVersionResult = await database.query('SHOW server_version;');
  const databaseMaxConnectionsResult = await database.query(
    'SHOW max_connections;',
  );

  res.status(200).json({
    updated_at: updatedAt,
    db_version: databaseVersionResult.rows[0].server_version,
    max_connections: databaseMaxConnectionsResult.rows[0].max_connections,
  });
}

export default status;

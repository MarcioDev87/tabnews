test('Get to /api/v1/status should return 200', async () => {
  const baseUrl = process.env.TEST_BASE_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/v1/status`);
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  expect(responseBody.updated_at).toBeDefined();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);
  console.log(responseBody.updated_at);

  const version = responseBody.db_version;
  expect(version).toMatch(/^\d+(\.\d+)?/);
  console.log(version);

  const maxConnections = responseBody.max_connections;
  expect(Number(maxConnections)).toBeGreaterThan(0);
  console.log(maxConnections);
});

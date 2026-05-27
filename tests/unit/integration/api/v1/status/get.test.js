test("Get to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  expect(responseBody.updated_at).toBeDefined();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);
  console.log(responseBody.updated_at);

  const version = responseBody.db_version;
  expect(version).toEqual("16.13");
  console.log(version);

  const maxConnections = responseBody.max_connections;
  expect(maxConnections).toEqual("100");
  console.log(maxConnections);
});

import { test, expect } from '@playwright/test';
import playwrightApiMatchers from 'odottaa';

expect.extend(playwrightApiMatchers);

test('has title', async ({ request }) => {
  const response = await request.get('https://petstore.swagger.io/v2/pet/10002');

  await expect(response).toHaveStatusCode(404);
});

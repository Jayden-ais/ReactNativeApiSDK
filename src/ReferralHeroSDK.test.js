import { fetchReferralUserData } from './ReferralHeroSDK';

// Mock the fetch function to return a sample response
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([
      {"id":4145637,"name":"Triloki Nath Bharadwaj Ret.","email":"nath_ret_triloki_bharadwaj@blick.example","gender":"female","status":"inactive"},
      {"id":4145636,"name":"Buddhana Ahuja","email":"buddhana_ahuja@oreilly.example","gender":"male","status":"inactive"},
      // ... Add more sample data here if needed ...
    ]),
  })
);

describe('fetchReferralUserData', () => {
  it('should fetch data from the API', async () => {
    // Call the function
    const data = await fetchReferralUserData();

    // Check if the data is an array
    expect(Array.isArray(data)).toBe(true);

    // Check if the data contains objects with specific properties
    expect(data[0]).toHaveProperty('id');
    expect(data[0]).toHaveProperty('name');
    expect(data[0]).toHaveProperty('email');
    expect(data[0]).toHaveProperty('gender');
    expect(data[0]).toHaveProperty('status');

    // You can add more specific checks as needed based on your actual API response data
  });

  // Add more test cases for handling errors, empty responses, etc. if needed
});

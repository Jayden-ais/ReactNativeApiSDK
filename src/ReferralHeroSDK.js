// ReferralHeroSDK.js
const BASE_URL = 'https://gorest.co.in/public/v2';

export const fetchReferralUserData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/user`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

import { getStaffData } from './lib/staff';

async function test() {
  try {
    const data = await getStaffData();
    console.log('Staff count:', data.length);
    console.log('Sample staff:', data[0]);
  } catch (e) {
    console.error('Test failed:', e);
  }
}

test();

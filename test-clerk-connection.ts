import { createClerkClient } from '@clerk/backend';
import dotenv from 'dotenv';
dotenv.config();

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

async function testClerk() {
  try {
    console.log('Testing Clerk API connection...');
    const userList = await clerkClient.users.getUserList({ limit: 1 });
    console.log('Successfully connected to Clerk! Found', userList.data.length, 'users.');
  } catch (error: any) {
    console.error('Clerk API Connection Failed:');
    console.error('Message:', error.message);
    console.error('Status:', error.status);
    console.error('Code:', error.code);
    if (error.errors) {
      console.error('Detailed Errors:', JSON.stringify(error.errors, null, 2));
    }
  }
}

testClerk();

# Environment Setup Instructions

## Step 1: Get Your Neon Connection String

1. Go to [Neon Console](https://console.neon.tech)
2. Log in to your account
3. Select your project (or create a new one)
4. Click on "Connection Details" or "Dashboard"
5. Copy the connection string - it looks like:
   ```
   postgresql://username:password@ep-xxx-xxx.region.aws.neon.tech/dbname?sslmode=require
   ```

## Step 2: Create .env.local File

Create a new file named `.env.local` in the root of your project with this content:

```env
POSTGRES_URL="paste-your-neon-connection-string-here"
```

**Important:** Replace `paste-your-neon-connection-string-here` with your actual Neon connection string from Step 1.

## Step 3: Restart Your Dev Server

After creating the `.env.local` file:
1. Stop the current dev server (Ctrl+C in terminal)
2. Restart it: `npm run dev`

## Step 4: Run Database Schema

Before testing, make sure your database table is created:
1. Go to Neon SQL Editor in your dashboard
2. Copy the contents of `database_setup.sql`
3. Paste and execute it

## Step 5: Test Registration

1. Go to http://localhost:3000
2. Try registering a new user
3. Check if it redirects to /data and shows the user

---

**Note:** The `.env.local` file is gitignored and won't be committed to your repository. This is correct for security - never commit database credentials!

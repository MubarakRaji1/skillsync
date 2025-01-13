/*
  # Fix Profiles Table RLS Policies

  1. Changes
    - Add policy to allow authenticated users to insert their own profile
    - Update existing policies for better security

  2. Security
    - Ensures users can only create their own profile
    - Maintains existing view and update policies
    - Adds proper checks for user authentication
*/

-- Drop existing policies to recreate them with proper permissions
DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;

-- Create new policies with proper permissions
CREATE POLICY "Public profiles are viewable by everyone"
  ON profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);
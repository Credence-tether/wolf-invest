-- Update existing user to admin role
-- Using the new email address provided by the user
UPDATE profiles 
SET 
  role = 'admin',
  updated_at = NOW()
WHERE email = 'johnjamie.hotmail@gmail.com';

-- Or create admin user if they don't exist (after they register)
-- This assumes the user has already registered through the normal flow
UPDATE profiles 
SET 
  role = 'admin',
  full_name = 'System Administrator',
  updated_at = NOW()
WHERE email = 'johnjamie.hotmail@gmail.com' AND role = 'user';

-- Verify admin user was created
SELECT id, email, full_name, role, is_active, created_at 
FROM profiles 
WHERE role = 'admin';

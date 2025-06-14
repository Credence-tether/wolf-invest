-- Check current table structure
SELECT 
    column_name,
    data_type,
    is_nullable,
    column_default
FROM information_schema.columns 
WHERE table_name = 'profiles' 
    AND table_schema = 'public'
ORDER BY ordinal_position;

-- Check if table exists
SELECT EXISTS (
    SELECT FROM information_schema.tables 
    WHERE table_schema = 'public' 
    AND table_name = 'profiles'
) as table_exists;

-- Check current data
SELECT COUNT(*) as total_profiles FROM public.profiles;

-- Show sample data (if any)
SELECT * FROM public.profiles LIMIT 5;

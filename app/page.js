import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default async function Page() {
  let { data, error } = await supabase
    .from('played_games')
    .select('id,username,played')
  if (data) {
    console.log("data:", data)
  } else if (error) {
    console.error("error:", error)
  }

  return (
    <>Hello</>
  )
}
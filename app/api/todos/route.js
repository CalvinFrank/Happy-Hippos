import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request) {
  const { title } = await request.json()
  const supabase =  ({ cookies })
  const { data } = await supabase.from('todos').insert({ title }).select()
  return NextResponse.json(data)
}
export interface Product {
  category: number
  image: string
  id: number
  name: string
  sizes: number
  featured: number
  price: number
  description: string
  is_active: 1 | 0
  created_at: string | null
  updated_at: string | null
  catname: string
  catimage: string | null
  catdescription: string
  size: string
}


export interface PaginatedData<T> {
  data: T[]
  current_page: number
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  next_page_url: string | null
  path: string
  per_page: number
  prev_page_url: string | null
  to: number
  total: number
}
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

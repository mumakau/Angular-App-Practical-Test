export interface Users {
  id: number,
  email?: string,
  first_name?: string,
  last_name?: string,
  avatar?: string
  name?: string
  job?:string
  updatedAt?:string

}
export interface ResponseData {
  page?: number,
  per_page?:  number,
  total?: number,
  total_pages?: number,
  data?:Array<Users>
}

export interface useronAuth {
  autheticated: boolean,
  bearertoken: string,
  name?:string,
  password?:string
}



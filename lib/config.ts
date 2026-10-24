const configurations = {
  env: process.env.NODE_ENV,
  WEB3FORMS_ACCESS_KEY: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '',
}
Object.freeze(configurations)
export default configurations

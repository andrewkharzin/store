/** @format */
import bcryptjs from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@admin.as',
    password: bcryptjs.hashSync('12345', 10),
    isAdmin: true,
  },
  {
    name: 'Brad',
    email: 'brad@admin.as',
    password: bcryptjs.hashSync('12345', 10),
  },
  {
    name: 'John Doe',
    email: 'john@admin.as',
    password: bcryptjs.hashSync('12345', 10),
  },
]

export default users

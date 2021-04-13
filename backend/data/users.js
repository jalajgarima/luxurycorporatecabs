import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Jalaj Admin',
    email: 'jalajadmin@example.com',
    password: bcrypt.hashSync('jalaj1234', 10),
    isAdmin: true,
  },
]

export default users

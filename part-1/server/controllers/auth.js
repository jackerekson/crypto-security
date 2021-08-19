const bcrypt = require('bcryptjs')

const users = []

module.exports = {
    login: (req, res) => {
      const { username, password } = req.body
      
      // console.log('Logging In User')
      // console.log(req.body)
      for (let i = 0; i < users.length; i++) {
        const existing = bcrypt.compareSync(password, users[i].passHash)
        console.log('hit for loop')
        if (users[i].username === username && existing) {
          console.log('passed for loop')
          let messagesToReturn = {...users[i]}
                delete messagesToReturn.password
          res.status(200).send(messagesToReturn)
          return
        }
      }
      res.status(400).send("User not found.")

    },
    
    
    
    register: (req, res) => {
      const {username,email,firstName,lastName,password} = req.body
      const salt = bcrypt.genSaltSync(5)
      const passHash = bcrypt.hashSync(password, salt)
      
      let usersObj = {
        username,
        email,
        firstName,
        lastName, 
        passHash
      }
      console.log('Registering User')
      console.log(usersObj)
      users.push(usersObj)
      res.status(200).send(usersObj)
      
      
      
    }
    
}
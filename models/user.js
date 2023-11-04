import bcrypt from 'bcrypt'
const User = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        unique: true
      },
      username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: true
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
          len:{
            args: [2, 30],
            msg: "First name must be between 2 and 30 charachters"
          }
        }
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        len:{
          args: [2, 30],
          msg: "Last name must be between 2 and 30 charachters"
        }
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
          isEmail: true,
        },
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
          min: 6
        }
      },
      phoneNumber:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
          min: 10
        }
      },
      avatar:{
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "https://google.com"
      },
      bio: {
        type: Sequelize.TEXT,
        validate:{
          len:[ 25, 5000 ]
        }
      },
      type:{
        type: Sequelize.STRING,
        defaultValue: 'athlete',
        validate:{
          isIn: [['athlete', 'scout', 'admin']],
        }
      },
      status:{
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'inactive',
        validate:{
          isIn: [['active', 'inactive']]
        }
      },
      code: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: () => {
          return Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
        }
      },
      tags: {
        type: Sequelize.JSON,
        allowNull: true
      },
      country: {
        type: Sequelize.STRING,
        validate: {
          isIn: [['Egypt', 'Algeria']]
        }
      },
      gender:{
        type: Sequelize.STRING,
        validate:{
          isIn: [['male', 'female']]
        }
      },
      dob: {
          type: Sequelize.DATEONLY,
          validate:{
            isDate: true,
            isBefore: new Date().toDateString(),
        }
      },
      // Virtual Attributes
      fullName: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${this.firstName} ${this.lastName}`;
        },
        set(value) {
          throw new Error('Do not try to set the `fullName` value!');
        }
      },
    },
    {
      hooks : {
        beforeCreate: async (user, options) =>{
          await bcrypt.hash(user.password, 10, function(err, hash) {
            user.update({
              password: hash
            })
          });
        },
        afterCreate : async (user, options) => {
          await user.update({
            username: user.email.slice(0, user.email.indexOf('@'))
          })
        },
      }
  }
);

  return User;
};
export default User;
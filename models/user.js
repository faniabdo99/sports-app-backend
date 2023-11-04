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
        allowNull: true,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
          notNull: true,
          notEmpty: true,
          isEmail: true,
        },
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phoneNumber:{
        type: Sequelize.STRING,
        allowNull: false
      },
      avatar:{
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "https://google.com"
      },
      bio: {
        type: Sequelize.TEXT,
        allowNull: true
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
        allowNull: true,
        validate: {
          isIn: [['Egypt', 'Algeria']]
        }
      },
      gender:{
        type: Sequelize.STRING,
        allowNull: true,
        validate:{
          isIn: [['male', 'female']]
        }
      },
      dob: {
          type: Sequelize.DATEONLY,
          allowNull: true,
          validate:{
            isBeforeToday: function (value) {
              if (new Date(value) >= new Date()) {
                throw new Error('Date must be before today');
              }
          }
        }
      }
    },
    {
      hooks : {
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
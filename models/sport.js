import { toSlugCase } from "../includes/model_helpres.js";
const Sport = (sequelize, Sequelize) => {
    const Sport = sequelize.define("sports", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        unique: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: true
      },
      slug: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true
      },
      image:{
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "images/avatar.png",
        get(){
          return `${process.env.DOMAIN_NAME}${this.getDataValue('image')}`
        }
      },
      cover: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "images/avatar.png",
        get(){
          return `${process.env.DOMAIN_NAME}${this.getDataValue('cover')}`
        }
      }
    },
    {
      hooks : {
        beforeValidate : async (sport, options) => {
          // Generate the sport slug
          sport.slug = toSlugCase(sport, 'title')
        },
      }
  }
);

  return Sport;
};
export default Sport;
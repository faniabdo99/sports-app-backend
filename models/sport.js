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
        defaultValue: "https://google.com"
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "https://google.com"
      }
    },
    {
      hooks : {
        afterCreate : async (sport, options) => {
          await sport.update({
            slug: toSlugCase(sport, 'title')
          })
        },
      }
  }
);

  return Sport;
};
export default Sport;
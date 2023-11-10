import { toSlugCase } from "../includes/model_helpres.js";
import User from "./user.js";
const Porfolio = (sequelize, Sequelize) => {
    const Porfolio = sequelize.define("portfolios", {
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
        link: {
            type: Sequelize.STRING,
            allowNull: false
        },
        type:{
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: 'image',
            validate: {
                isIn: [['image', 'video']]
            }
        },
        userId:{
            type: Sequelize.UUID,
            allowNull: false
        }
        },
        {
        hooks : {
            beforeValidate : async (porfolio, options) => {
            // Generate the porfolio slug
            porfolio.slug = toSlugCase(porfolio, 'title')
            },
        }
    }
    );
  // Associations
  Porfolio.hasOne(User, {
    foreignKey:{
        name: 'userId'
    }
  })
  return Porfolio;
};
export default Porfolio;
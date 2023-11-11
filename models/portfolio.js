import { toSlugCase } from "../includes/model_helpres.js";
import User from "./user.js";
const Portfolio = (sequelize, Sequelize) => {
    const Portfolio = sequelize.define("portfolios", {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4,
            unique: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
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
            beforeValidate : async (portfolio, options) => {
            // Generate the portfolio slug
            portfolio.slug = toSlugCase(portfolio, 'title')
            },
        }
    }
);
//   Portfolio.belongsTo(User)
  return Portfolio;
};
export default Portfolio;
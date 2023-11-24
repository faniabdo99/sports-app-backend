const ContactRequest = (sequelize, Sequelize) => {
  const ContactRequestModel = sequelize.define('contact_requests', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      unique: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    contactMethod: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    message: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  });
  return ContactRequestModel;
};
export default ContactRequest;

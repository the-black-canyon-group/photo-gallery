const Sequelize = require('sequelize');
const sequelize = new Sequelize('MySQL', 'root', 'password', {
    host: localhost,
    dialect: mysql
});

const Listings = sequelize.define('Listings', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    listing: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

const PropertyImages = sequelize.define('PropertyImages', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        defaultValue: null
    }
})

PropertyImages.belongsTo(Listings, { foreignKey: 'listingKey' }); // how does this know which listing it belongs to?
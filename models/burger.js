

module.exports = function(sequelize, Sequelize) {
  	var Burger = sequelize.define("Burger", {
    // Giving the Author model a name of type STRING
	    id: {
	    	type: Sequelize.INTEGER,
	        primaryKey: true,
	        allowNull: false
	    },
	    burger_name: {
	    	type: Sequelize.STRING,
	    	allowNull: false
	    },
	    devoured: {
	    	type: Sequelize.BOOLEAN,
	    	allowNull: false, 
	    	defaultValue: false
	    }
	});
  	return Burger;
};
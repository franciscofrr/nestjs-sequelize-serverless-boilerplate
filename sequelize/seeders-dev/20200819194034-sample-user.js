const sql = `
    insert into nestjs_test."users"(
        "firstName", 
        "lastName", 
        "isActive",
        "created_at",
        "updated_at", 
    ) values (
        'John', 
        'Doe', 
        1,
        'now()', 
        'now()', 
    );
`;

module.exports = {
    up: queryInterface => queryInterface.sequelize.query(sql),
    down: () => {},
};
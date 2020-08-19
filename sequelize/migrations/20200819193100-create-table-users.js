const sql = `
    create table "users" (
        "id" integer unique,
        "firstName" varchar(255),
        "lastName" varchar(255),
        "isActive" boolean,
        "created_at" timestamp,
        "updated_at" timestamp,
        primary key ("id")
    );
`;

module.exports = {
    up: queryInterface => queryInterface.sequelize.query(sql),
    down: () => {},
};
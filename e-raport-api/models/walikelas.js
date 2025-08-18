module.exports = (sequelize, DataTypes) => {
    const WaliKelas = sequelize.define('WaliKelas', {
        nama: DataTypes.STRING,
        nip: DataTypes.STRING
    });
    WaliKelas.associate = models => {
        WaliKelas.hasMany(models.Siswa, { foreignKey: 'waliKelasId' });
    };
    return WaliKelas;
};
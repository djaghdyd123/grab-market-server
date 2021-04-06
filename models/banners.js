module.exports = function (sequalize, dataTypes) {
  const banner = sequalize.define("Banner", {
    imageUrl: {
      type: dataTypes.STRING(300),
      allowNull: false,
    },
    href: {
      type: dataTypes.STRING(300),
      allowNull: false,
    },
  });
  return banner;
};

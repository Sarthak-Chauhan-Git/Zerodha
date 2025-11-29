const { model } = require("mongoose");
const { PostionsSchema } = require("../schema/PositionsSchema");

const PositionsModel = new model("position", PostionsSchema);

module.exports = PositionsModel;

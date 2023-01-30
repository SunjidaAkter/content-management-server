const Content = require("../models/Content");

exports.getContents = async () => {
  const contents = await Content.find({});
  return contents;
};
exports.createContent = async (data) => {
  const contents = await Content.create(data);
  return contents;
};
exports.updateContent = async (id, data) => {
  const contents = await Content.updateOne({ id: id }, { $set: data });
  return contents;
};
exports.getContent = async (id) => {
  const contents = await Content.findById(id);
  return contents;
};

exports.deleteContent = async (id) => {
  const contents = await Content.findOneAndDelete({ _id: id }, { new: true });
  return contents;
};

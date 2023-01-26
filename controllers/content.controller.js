const Company = require("../models/Company");
const Application = require("../models/Application");
const Job = require("../models/Job");
const User = require("../models/User");
const {
  createJobService,
  updateJobService,
  getAllJobsService,
  getJobByIdService,
  applyJobService,
} = require("../services/job.service");
const { jobs } = require("googleapis/build/src/apis/jobs");

exports.getAllJobs = async (req, res) => {
  const result = await contentsService.getAllContents();
  if (!result) throw StatusError("No pricings found!", 404);

  res.status(200).send(result);
};

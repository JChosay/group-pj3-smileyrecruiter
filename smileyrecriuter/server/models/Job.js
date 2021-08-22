const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema(
    {
        job_id: {
            type: String,
            required: true
        },
        job_title: {
            type: String,
            required: true
        },
        job_description: {
            type: String
        },
        job_location: {
            type: String
        },
        job_companyName: {
            type: String,
            required: true
        },
        job_salary: {
            type: Number
        },
        job_comLink: {
            type: String
        },
        job_category: {
            type: String
        },
        job_postDate: {
            type: Date
        }
    }
)

//const Job = mongoose.model('Job', jobSchema);

module.exports = jobSchema;
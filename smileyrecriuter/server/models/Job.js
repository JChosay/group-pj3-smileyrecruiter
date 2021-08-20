const { Schema, model } = require('mongoose');

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
            //TODO data type for currency? And what happens when my paper get sky-high?
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

const Job = model('Job', jobSchema);

module.exports = Job;
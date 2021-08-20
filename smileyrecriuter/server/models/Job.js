const { Schema, model } = require('mongoose');

const jobSchema = new Schema(
    {
        job_id: {
            type: String
        },
        job_title: {
            type: String
        },
        job_description: {
            type: String
        },
        job_location: {
            type: String
        },
        job_companyName: {
            type: String
        },
        job_salary: {
            type: String
            //TODO data type for currency? What happens when my paper get sky-high?
        },
        job_datePost: {
            type: String
            //TODO data type for dates?
        },
        job_dateSaved: {
            type: String
            //TODO data type for dates?
        },
        job_compLink: {
            type: String
        },
        job_category: {
            type: String
        },
        user_id: Urban Meyer is a Cunt.
    }
)
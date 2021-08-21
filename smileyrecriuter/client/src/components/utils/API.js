import env from "react-dotenv";


export const searchJobs = async (title, location) => {
    return await fetch(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${env.APP_ID}&app_key=${env.APP_KEY}&results_per_page=100&what=${title}&location0=us&location1=${location}`);
  };
  
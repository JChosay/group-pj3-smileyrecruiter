export const searchJobs = async (title, location) => {
    return await fetch(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&results_per_page=10&what=${title}&location0=us&location1=${location}`);
  };
  
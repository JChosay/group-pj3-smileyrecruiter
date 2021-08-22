import env from "react-dotenv";


export const searchJobs = async (title, location) => {
  return await fetch(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${env.APP_ID}&app_key=${env.APP_KEY}&results_per_page=100&what=${title}&location0=us&location1=${location}`);
};
  
export const topCompanies = async (title, location) => {
  return await fetch(`https://api.adzuna.com/v1/api/jobs/us/top_companies?app_id=0a7ada16&app_key=d5fa615b8c01ac683eaceb5645376f7e&what=${title}&location0=us&location1=${location}`)
}
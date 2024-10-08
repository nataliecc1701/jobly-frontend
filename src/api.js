import axios from "axios";


const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    try {
      let res = await this.request(`companies/${handle}`);
      return {success: true, company: res.company};
    }
    catch(err) {
      return {success: false, messages: err}
    }
  }
  
  /** Get all companies
   * takes an optional search query argument to search using the parameters
   * provided by the back-end (minEmployees, maxEmployees, nameLike)
   */
  
  static async getCompanies(query={}) {
    let res = await this.request(`companies/`, query);
    return res.companies;
  }

  // obviously, you'll add a lot here ...
  
  /** Get all jobs
   * Takes an optional search query argument to search using the parameters
   * provided by the back-end (minSalary, hasEquity, title)
   */
  
  static async getJobs(query={}) {
    let res = await this.request(`jobs/`, query);
    return res.jobs;
  }
  
  /** get a token and save it (log in) */
  
  static async getAndSaveToken(userData) {
    let res = await this.request(`auth/token/`, userData, "post");
    this.token = res.token;
    return res.token;
  }
  
  static async registerUser(userData) {
    let res = await this.request(`auth/register`, userData, "post");
    this.token = res.token;
    return res.token;
  }
  
  static async getUserData(userName) {
    let res = await this.request(`users/${userName}`);
    return res.user;
  }
  
  static async updateUserData(userData, username) {
    let res = await this.request(`users/${username}`, userData, "patch");
    return res.user;
  }
  
  static async apply(username, jobId) {
    let res = await this.request(`users/${username}/jobs/${jobId}`, {}, "post")
    return res.applied;
  }
}

// for now, put token ("testuser" / "password" on class)
// JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//     "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//     "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

    
export default JoblyApi;
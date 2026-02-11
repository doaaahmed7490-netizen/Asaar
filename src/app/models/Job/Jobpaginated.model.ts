import { PaginationResponse } from "../pagination.response";
import { JobModel } from "./Job.model";

export interface Jobpaginated
  extends PaginationResponse<JobModel> {}
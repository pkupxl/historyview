export interface ProjectInfo {
  name: string;
  description: string;
}

export interface IssueResult{
  issueId:string;
  summary: string;
  description:string;
  createdTime:string;
  issueType:string;
  status:string;
  reporter:string;
  comments:string[];
}

export interface HistoryResult{
  preContent:string;
  content:string;
  commitMessage:string;
  time:string;
  changeSummary:string[];
  hasIssue:boolean;
  issueId:string;
  issueResult:IssueResult;
}

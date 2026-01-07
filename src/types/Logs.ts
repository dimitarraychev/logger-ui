export interface LogEntryType {
  timestamp: string;
  level: string;
  message: string;
  [key: string]: any;
}

export interface UseLogsOptions {
  url?: string;
  pollInterval?: number;
  limit?: number;
}

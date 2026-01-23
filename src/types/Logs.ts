export interface LogEntryType {
  timestamp: string;
  level: string;
  message: string;
  [key: string]: any;
}


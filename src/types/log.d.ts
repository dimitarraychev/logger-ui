export interface LogEntry {
  level: string;
  message: string;
  timestamp: string;
  status?: number;
  path?: string;
  [key: string]: any; 
}

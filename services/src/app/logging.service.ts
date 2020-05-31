export class LoggingService {
  loggStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}

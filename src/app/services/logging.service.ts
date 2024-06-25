export class LoggingService {

    log(message: string) {
        console.log(message);
    }

    logError(message: string) {
        console.error(message);
    }
}
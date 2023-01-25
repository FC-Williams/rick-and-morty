
export default class ErrorHandler {
    error: string;
    
    constructor(error: ErrorHandler){
        if (error) {
            this.error = error.error;
        } else {
            this.error = '';
        }
    }

    getMessage = () => {
        return this.error;
    }
}

//Singleton - Garante que uma classe tenha apenas uma instância e fornece um ponto global de acesso a ela.

class Logger {
    private static instance: Logger | null = null;
    private logs: string[] = [];
  
    private constructor() {}
  
    // Método estático para obter a instância
    public static getInstance(): Logger {
      if (!Logger.instance) {
        Logger.instance = new Logger();
      }
      return Logger.instance;
    }
  
    // Adicionar uma mensagem ao log
    public log(message: string): void {
      const timestamp = new Date().toISOString();
      this.logs.push(`[${timestamp}] ${message}`);
      console.log(`[${timestamp}] ${message}`);
    }
  
    // Recuperar todos os logs
    public getLogs(): string[] {
      return this.logs;
    }
  }
  
  export default Logger;
  
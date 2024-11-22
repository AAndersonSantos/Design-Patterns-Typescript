//Singleton - Garante que uma classe tenha apenas uma instância e fornece um ponto global de acesso a ela.

class DatabaseConnection {
    private static instance: DatabaseConnection | null = null; // Propriedade estática para armazenar a única instância
    private connection: string; // Propriedade da classe para simular a conexão
  
    // Construtor privado para evitar a criação de novas instâncias fora da classe
    private constructor() {
      console.log("Criando uma conexão com o banco de dados...");
      this.connection = "Conexão ativa com o banco de dados!";
    }
  
    // Método estático para obter a instância única
    public static getInstance(): DatabaseConnection {
      console.log("Método getInstance");
      if (!DatabaseConnection.instance) {
        console.log("DatabaseConnection.instance");
        DatabaseConnection.instance = new DatabaseConnection();
      }
      
      return DatabaseConnection.instance;
    }
  
    // Método público para obter a conexão
    public getConnection(): string {
      console.log("Método getConnection");
      return this.connection;
    }
  
    // Método público para simular a alteração da conexão
    public setConnection(newConnection: string): void {
      console.log("Método setConnection");
      this.connection = newConnection;
    }
  }
  
  export default DatabaseConnection;
  
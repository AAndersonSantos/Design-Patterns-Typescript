//Singleton - Garante que uma classe tenha apenas uma instância e fornece um ponto global de acesso a ela.

import DatabaseConnection from "./DatabaseConnection";

// Primeira tentativa de obter a instância
const db1 = DatabaseConnection.getInstance();
console.log("Conexão 1:", db1.getConnection());

// Segunda tentativa de obter a instância
console.log("-------------------------------");
const db2 = DatabaseConnection.getInstance();
console.log("Conexão 2:", db2.getConnection());

// Verificando se ambas as variáveis apontam para a mesma instância
console.log("São a mesma instância?", db1 === db2);

// Alterando a conexão através de uma variável
db1.setConnection("Nova conexão ativa");

// Verificando a conexão através da outra variável
console.log("Conexão em db2:", db2.getConnection());

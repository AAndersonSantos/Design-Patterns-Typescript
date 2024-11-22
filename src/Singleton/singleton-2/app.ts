//Singleton - Garante que uma classe tenha apenas uma instância e fornece um ponto global de acesso a ela.

import Logger from "./Logger";

const logger1 = Logger.getInstance();
logger1.log("Aplicação iniciada");

const logger2 = Logger.getInstance();
logger2.log("Usuário fez login");

console.log("Logger1 e Logger2 são a mesma instância?", logger1 === logger2);

// Recuperar todos os logs
console.log("Logs armazenados:");
console.log(logger1.getLogs());

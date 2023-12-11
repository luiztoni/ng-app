
export class Estado {
    constructor(public id: number, public sigla: string, public nome: string, public regiao: Regiao) {}
}

export class Regiao {
    constructor(public id: number, public sigla: string, public nome: string) {}
}

export class User {
    constructor(public name: string, public age: number) {}
}
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsNomeDeusuarioUnico } from "./is-nome-de-usuario-unico";

export class Usuario {
    id: number;

    @IsNomeDeusuarioUnico({
        message: "O nome de usuário já existe",
    })
    @IsNotEmpty({
        message: "O nome de usuário é obrigatório",
    })
    @IsString({
        message: "O nome de usuário deve ser uma string",
    })
    nomeDeUsuario: string;

    @IsEmail(
        {},
        {
            message: "Email inválido",
        },
    )
    email: string;

    @IsNotEmpty({
        message: "A senha é obrigatória",
    })
    senha: string;

    @IsNotEmpty({
        message: "O nome completo é obrigatório",
    })
    NomeCompleto: string;

    dataDeEntrada: Date;
}

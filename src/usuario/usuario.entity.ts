import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsNomeDeusuarioUnico } from "./is-nome-de-usuario-unico";
import { Exclude, Expose } from "class-transformer";

export class Usuario {
    id: number;

    @Expose({
        name: "username",
    })
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

    @Expose({
        name: "password",
    })
    @Exclude({
        toPlainOnly: true,
    })
    @IsNotEmpty({
        message: "A senha é obrigatória",
    })
    senha: string;

    @Expose({
        name: "fullName",
    })
    @IsNotEmpty({
        message: "O nome completo é obrigatório",
    })
    NomeCompleto: string;

    @Expose({
        name: "joinDate",
    })
    dataDeEntrada: Date; 
}

import { Injectable } from "@nestjs/common";
import { Usuario } from "./usuario.entity";

@Injectable()
export class UsuarioService {
    private usuarios: Array<Usuario> = [
        {
            id: 1,
            nomeDeUsuario: "joao",
            email: "joao@gmail.com",
            senha: "123456",
            NomeCompleto: "João da Silva",
            dataDeEntrada: new Date(),
        },
    ];

    public cria(usuario: Usuario): Usuario {
        this.usuarios.push(usuario);

        return usuario;
    }

    buscaPorNomeDeUsuario(nomeDeUsuario: string): Usuario {
        return this.usuarios.find(usuario => usuario.nomeDeUsuario === nomeDeUsuario);
    }
}

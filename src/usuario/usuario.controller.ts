import { Body, Controller, Post, Get, Param } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { Usuario } from "./usuario.entity";

@Controller("users")
export class UsuarioController {
    constructor(private usuarioService: UsuarioService) {}

    @Get(":nomeDeUsuario")
    public buscaPorNomeDeUsuario(@Param("nomeDeUsuario") nomeDeUsuario: string): Usuario {
        const usuario = this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario);

        return usuario;
    }

    @Post()
    public cria(@Body() usuario: Usuario): Usuario {
        const usuarioCriado = this.usuarioService.cria(usuario);

        return usuarioCriado;
    }
}

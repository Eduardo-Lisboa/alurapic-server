import { Body, Controller, Post, Get, Param } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { Usuario } from "./usuario.entity";

@Controller("users")
export class UsuarioController {
    constructor(private usuarioService: UsuarioService) {}

    @Get(":nomeDeUsuario")
    public buscaPorNomeDeUsuario(@Param("nomeDeUsuario") nomeDeUsuario: string): Usuario {
        try {
            const usuario = this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario);

            return usuario;
        } catch (error) {
            console.error(error);
        }
    }

    @Post()
    public cria(@Body() usuario: Usuario): Usuario {
        try {
            const usuarioCriado = this.usuarioService.cria(usuario);

            return usuarioCriado;
        } catch (error) {
            console.error(error);
        }
    }
}

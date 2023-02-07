import { Body, Controller, Post, Get, Param, Res, HttpStatus } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { Usuario } from "./usuario.entity";

@Controller("users")
export class UsuarioController {
    constructor(private usuarioService: UsuarioService) {}

    @Get(":nomeDeUsuario")
    public buscaPorNomeDeUsuario(@Param("nomeDeU suario") nomeDeUsuario: string): Usuario {
        const usuario = this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario);

        return usuario;
    }

    @Post()
    public cria(@Body() usuario: Usuario, @Res() res) {
        const usuarioCriado = this.usuarioService.cria(usuario);
        res.status(HttpStatus.CREATED).location(`/users/${usuarioCriado.nomeDeUsuario}`).json(usuarioCriado);
    }
}

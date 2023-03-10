import { Body, Controller, Post, Get, Param, HttpStatus, NotFoundException } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { Usuario } from "./usuario.entity";
import { NestResponse } from "./../core/http/nest-response";
import { NestResponseBuilder } from "./../core/http/nest-response-builder";

@Controller("users")
export class UsuarioController {
    constructor(private usuarioService: UsuarioService) {}

    @Get(":nomeDeUsuario")
    public buscaPorNomeDeUsuario(@Param("nomeDeU suario") nomeDeUsuario: string): Usuario {
        const usuario = this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario);

        if (!usuario) {
            throw new NotFoundException({
                status: HttpStatus.NOT_FOUND,
                error: "Usuário não encontrado",
            });
        }
        return usuario;
    }

    @Post()
    public cria(@Body() usuario: Usuario): NestResponse {
        const usuarioCriado = this.usuarioService.cria(usuario);
        return new NestResponseBuilder().comStatus(HttpStatus.CREATED).comHeaders(`Location: /users/${usuarioCriado.nomeDeUsuario}`).comBody(usuarioCriado).build();
    }
}

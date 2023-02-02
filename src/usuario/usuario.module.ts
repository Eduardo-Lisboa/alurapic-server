import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioService } from "./usuario.service";
import { IsNomeDeusuarioUnicoConstraint } from "./is-nome-de-usuario-unico";

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioService, IsNomeDeusuarioUnicoConstraint],
})
export class UsuarioModule {}

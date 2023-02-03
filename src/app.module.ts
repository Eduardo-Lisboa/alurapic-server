import { Module } from "@nestjs/common";
import { UsuarioModule } from "./usuario/usuario.module";
import { APP_FILTER, APP_INTERCEPTOR } from "@nestjs/core";
import { ClassSerializerInterceptor } from "@nestjs/common/serializer";
import { FiltroDeExcecaoHttp } from "./common/filtros/filtro-de-excecao-http.filter";

@Module({
    imports: [UsuarioModule],
    controllers: [],
    providers: [
        {
            provide: APP_FILTER,
            useClass: FiltroDeExcecaoHttp,
        },
        {
            provide: APP_INTERCEPTOR,
            useClass: ClassSerializerInterceptor,
        },
    ],
})
export class AppModule {}

import { Controller, Get, Render, Post, Body } from '@nestjs/common';
import { AppService } from './app.service.js';
import { VasarlasDto } from './vasarlas.dto.js';
import { error } from 'console';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  @Post('/')
  Vasarlas(@Body() body:VasarlasDto) {
    const telefonRegex = /\+36[0-9]{9}/;
    const kuponRegex = /[A-Z]{2}\-[0-9]{4}/;
    const kartyaRegex = /[0-9]{4}\-[0-9]{4}\-[0-9]{4}\-[0-9]{4}/;
    const lejaratRegex = /[0-9]{2}\/[0-9]{2}/;
    const biztonságiKódRegex = /[0-9]{3}/;

    if(!telefonRegex.test(body.telefon))
    {
      return {error: "Érvénytelen telefonszám"}
    }else
    if(!kuponRegex.test(body.kupon) && body.kupon.trim() !== "")
    {
      return {error: "Érvénytelen kupon"}
    }else
    if(!kartyaRegex.test(body.kartyaSzam))
    {
      return {error: "Érvénytelen Kártyaszám"}
    }else
    if(!lejaratRegex.test(body.lejarat)){
      return {error: "Érvénytelen lejárati dátum"}
    }else
    if(!biztonságiKódRegex.test(body.biztonsagiKod))
    {
      return {error: "Érvénytelen biztonsági kód"}
    }else{
      return {error: "Sikeres vásárlás"}
    }


  }
}

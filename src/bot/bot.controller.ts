import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { BotService } from './bot.service';

@Controller()
export class BotController {
  constructor(private readonly botService: BotService) { }

  @Get("bots")
  getBotList() {
    return this.botService.getBotList();
  }
  @Get("searchBots")
  searchBots(@Query("search") search: string) {
    return this.botService.searchBots(search);
  }
  @Get("bot/:id")
  getBot(@Param("id", ParseIntPipe) id: number) {
    return this.botService.getBot(id);
  }
  @Post("note")
  createNote(@Body() body: { id: number, question: string }) {
    return this.botService.createNote(body.id, body.question);
  }

}

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { generateResponse } from 'src/services/ollama';

@Injectable()
export class BotService {
  constructor(private prisma: PrismaService) { }

  async createNote(id: number, question: string) {
    const data = await this.prisma.bot.findUnique({
      where: { id: id }
    })

    if (!data) {
      throw new Error("Bot not found")
    }

    const guidelines = data?.guidelines


    const note = await generateResponse(question, [], guidelines)
    console.log(note)
    const noteReformat = note.messages[0].content.replace("\n", "\\n").split("</think>")[1]
    return noteReformat
  }
  async getBot(id: number) {
    const data = await this.prisma.bot.findUnique({
      where: {
        id: id,
      },
    });
    return data
  }
  async searchBots(search: string) {
    const data = await this.prisma.bot.findMany({
    })
    return data
  }
  async getBotList() {
    const data = await this.prisma.bot.findMany({
    })
    return data
  }
}

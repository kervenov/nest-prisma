import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { GetAllBooksDto } from './dto/get-all-books.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('get-all-books')
  getAllBooks(@Query() query: GetAllBooksDto) {
    return this.appService.getAllBooks(query);
  }
}

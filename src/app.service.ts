import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { GetAllBooksDto } from './dto/get-all-books.dto';
import { DatabaseService } from './database/database.service';

@Injectable()
export class AppService {
    constructor(private prismaClient: DatabaseService) { }

    async getAllBooks(query: GetAllBooksDto) {
        const { limit, offset, category, keyword } = query;
        console.log(query);
    }
}

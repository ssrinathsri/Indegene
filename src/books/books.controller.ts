import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksDto } from '../dto/books.dto';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) { }
    @Post()
    async createBooks(@Body() booksDto: BooksDto): Promise<any> {
        const results = await this.booksService.createBooks(booksDto);
        console.log('Finally added employess', results);
        return results;
    }
    @Get()
    async getAuthors() {
        const results = await this.booksService.getBooks();
        console.log('Get the all employees details', results);
        return results;
    }
    @Get(':awards')
    async getNumberOfAwards(@Param('awards') awards) {
        const getNumberOfAwards = await this.booksService.getNumberOfAwards(awards);
        return getNumberOfAwards;
    }

    @Get(':awardsyear')
    async getNumberOfByYear(@Param('awardsyear') awardsyear) {
        const getNumberOfByYear = await this.booksService.getNumberOfByYear(awardsyear);
        return getNumberOfByYear;

    }

    @Get(':soildout')
    async getTotalNoOfBooksSoid(@Param('soildout') soildout) {
        const getTotalNoOfBooksSoid = await this.booksService.getTotalNoOfBooksSoid(soildout);
        return getTotalNoOfBooksSoid;

    }

    @Get(':profit')
    async getTotalProfit(@Param('profit') profit) {
        const getTotalProfit = await this.booksService.getTotalProfit(profit);
        return getTotalProfit;

    }
}

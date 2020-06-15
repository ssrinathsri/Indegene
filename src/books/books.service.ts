import { BooksDto } from './../dto/books.dto';
import { Injectable, NotFoundException, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BooksInterface } from 'src/books/books.model';

@Injectable()
export class BooksService {
    private booksInterface: BooksInterface[] = [];
    constructor(@InjectModel('Books') private readonly booksModel: Model<BooksInterface>) { }

    async createBooks(booksDto: BooksDto) {
        const newBooks = new this.booksModel(booksDto);
        const results = await newBooks.save();
        console.log(results);
        return results;
    }
    async getBooks() {
        const books = await this.booksModel.find().exec();
        console.log('this getEmployees', books);
        return books;
    }

    async getNumberOfAwards(awards: number): Promise<BooksInterface> {
        const fetchNumberOfAwards = await this.booksModel.find({noOfawards: {$gt: awards}});
        console.log('checking getNumberOfAwards', awards);
        return fetchNumberOfAwards;
    }

    async getNumberOfByYear(awardsyear: number): Promise<BooksInterface> {
        const fetchNumberOfByYear = await this.booksModel.find({noOfawards: {$gt: awardsyear}});
        console.log('checking getNumberOfByYear', fetchNumberOfByYear);
        return fetchNumberOfByYear;
    }

    async getTotalNoOfBooksSoid(soildout: number): Promise<BooksInterface> {
        const fetchTotalNoOfBooksSoid = await this.booksModel.aggregate([ {
            $group: {
               _id: null,
               "TotalAmount": {
                $sum: "$bookPrice"
               }
            }
         } ] );
        console.log('checking getTotalNoOfBooksSoid', fetchTotalNoOfBooksSoid);
        return fetchTotalNoOfBooksSoid;
    }

    async getTotalProfit(profit: number): Promise<BooksInterface> {
        const fetchTotalProfit = await this.booksModel.find({noOfawards: {$gt: profit}});
        console.log('checking getTotalProfit', fetchTotalProfit);
        return fetchTotalProfit;
    }
}

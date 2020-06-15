import * as mongoose from 'mongoose';

export const BooksSchema = new mongoose.Schema({
    bookName: {type: String, requried: true },
    authorName: {type: String, requried: true },
    bookPrice: {type: String, requried: true },
    noOfBookSoid: {type: Number, requried: true },
    bookSoidYear: {type: Number, requried: true },
});

export interface BooksInterface {
    bookName: string;
    authorName: string;
    bookPrice: string;
    noOfBookSoid: number;
    bookSoidYear: number;
}

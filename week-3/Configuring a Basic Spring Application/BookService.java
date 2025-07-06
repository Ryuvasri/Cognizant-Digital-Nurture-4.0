package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    // Setter injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void printBookName() {
        String bookName = bookRepository.getBookName();
        System.out.println("Book fetched from repository: " + bookName);
    }
}

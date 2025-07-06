package com.library.service;

import com.library.repository.BookRepository;

public class BookService 
  {
    private BookRepository bookRepository;
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }
    public void printBookName() 
    {
        String book = bookRepository.getBookName();
        System.out.println("Book fetched from repository: " + book);
    }
}

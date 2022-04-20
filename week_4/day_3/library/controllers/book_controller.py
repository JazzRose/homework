from flask import Flask, render_template,Blueprint,request,redirect
from repositories import book_repository, author_repository
from models.book import Book
from models.author import Author

books_blueprint=Blueprint("books", __name__)

@books_blueprint.route("/books")
def books():
    books = book_repository.select_all()
    return render_template("books/books.html", all_books = books)

@books_blueprint.route('/books/<id>/delete', methods = ['POST'])
def remove_book(id):
    book_repository.delete(id)
    return redirect('/books')

@books_blueprint.route("/books/new")
def new_book():
    authors = author_repository.select_all()
    return render_template("books/new.html", all_authors = authors) #all_users is the list in for loop in html file

@books_blueprint.route("/books/addbook", methods = ['POST'])
def add_book():
    title = request.form['title']
    author_id = request.form['author_id']
    year_published = request.form['year_published']
    author_object = author_repository.select(author_id)
    book_object = Book(title, author_object,year_published)
    book_repository.save(book_object)
    return redirect('/books')

@books_blueprint.route('/books/<id>', methods = ['GET'])
def show_book(id):
    book = book_repository.select(id)
    return render_template('books/show.html',book=book) #first task is referencing show.html e.g task.description
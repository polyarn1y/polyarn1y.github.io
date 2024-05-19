class Book {
    constructor(title, pubYear, price) {
			this._title = '';
			this._pubYear = 0;
			this._price = 0;

      this.title = title;
      this.pubYear = pubYear;
      this.price = price;
    }
    show() {
      console.log(`Название: ${this.title}, Цена: ${this.price}`);
    }

		get title() {
			return this._title;
		}

		get price() {
			return this._price;
		}

		get pubYear() {
			return this._pubYear;
		}

		set title(newTitle) {
			if (!newTitle) {
				console.error('Название книги не может быть пустым');
			} else {
					this._title = newTitle;
			}
		}

		set price(newPrice) {
			if (newPrice <= 0 || typeof newPrice !== 'number') {
				console.error('Цена книги должна быть положительным числом');
			} else {
					this._price = newPrice;
			}
		}

		set pubYear(newPubYear) {
			if (newPubYear <= 0 || typeof newPubYear !== 'number') {
				console.error('Год публикации книги должен быть положительным числом');
			} else {
					this._pubYear = newPubYear;
			}
		}

        static compare(book1, book2) {
            return book1.pubYear - book2.pubYear;
        }
}
  
const books = [
    new Book('Изучаем программирование на JavaScript', 2014, 1410),
    new Book('Изучаем TypeScript', 2023, 2000),
    new Book('Изучаем Python', 2018, 1800)
];

books.sort(Book.compare);

books.forEach(book => book.show());

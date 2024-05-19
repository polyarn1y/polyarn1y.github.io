class Book {
    constructor(title, pubYear, price) {
      this.title = title;
      this.pubYear = pubYear;
      this.price = price;
    }
    show() {
      console.log(`Название: ${this.title}, Цена: ${this.price}`);
    }
}
  
  const myBook = new Book('Изучаем программирование на JavaScript', 2014, 1410);
  
  myBook.show();
// đối tượng tương ứng với bảng trong db


// trong quá trình phát triển có thể thêm thuộc tính mới vào đối tượng này
export class Product {
    constructor(name, price, short_description, long_description, thumbnail) {
        this.name = name;
        this.price = price;
        this.short_description = short_description;
        this.long_description = long_description;
        this.thumbnail = thumbnail;
    }
}
export class Person {
    constructor(ma, hoTen, diaChi, email) {
        this.ma = ma;
        this.hoTen = hoTen;
        this.diaChi = diaChi;
        this.email = email;
    }
}

export class Student extends Person {
    constructor(ma, hoTen, diaChi, email, toan, ly, hoa) {
        super(ma, hoTen, diaChi, email);
        this.toan =toan;
        this.ly =ly;
        this.hoa =hoa;
        this.class = 'student'
    }
    tinhDiemTrungBinh() {
        const diemTrungBinh = (Number(this.toan) + Number(this.ly) + Number(this.hoa)) / 3;
        return diemTrungBinh.toFixed(1)
    }

    
}

export class Employee extends Person {
    constructor(ma, hoTen, diaChi, email, ngayLam, luong) {
        super(ma, hoTen, diaChi, email);
        this.ngayLam = +ngayLam;
        this.luong = +luong;
        this.class = 'employee'
    }

    tinhLuong() {
        return this.ngayLam * this.luong;
    }

   
}

export class Customer extends Person {
    constructor(ma, hoTen, diaChi, email, tenCongTy, hoaDon, danhGia) {
        super(ma, hoTen, diaChi, email);
        this.tenCongTy = tenCongTy;
        this.hoaDon = +hoaDon;
        this.danhGia = danhGia;
        this.class = 'customer'
    }

    
}
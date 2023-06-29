import { Student, Employee, Customer } from "./Person.js";
export class ListPerson {
  danhSach = [];
  themDoiTuong(dt) {
    this.danhSach.push(dt);
  }
  renderTable(selectorTbody) {
    let htmlString = "";
    let string = "";
    for (let user of this.danhSach) {
      switch (user.class) {
        case "student":
          var person = new Student();
          Object.assign(person, user);
          string = `Tổng Điểm : ${person.tinhDiemTrungBinh()}`;
          break;
        case "employee":
          var person = new Employee();
          Object.assign(person, user);
          string = `Tổng Lương : ${person.tinhLuong()}`;
          break;
        case "customer":
          var person = new Customer();
          Object.assign(person, user);
          string = `Tên Công Ty: ${person.tenCongTy} <br/>
          Hóa đơn: ${person.hoaDon} <br/>
          Đánh giá: ${person.danhGia}`;      
          break;
      }

      htmlString += `<thead >
          <tr>
            <th>${user.ma}</th>
            <th>${user.hoTen}</th>
            <th>${user.email}</th>
            <th>${user.diaChi}</th>
            <th>${string}</th>									
            <th><button class="btn btn-success"   data-toggle="modal"
            data-target="#myModal" onclick="xemDoiTuong('${user.ma}')">Xem</button> 
            <button class="btn btn-danger" onclick="xoaDoiTuong('${user.ma}')">Xoá</button>
            </th>
          </tr>
          </thead>`;
    }
    document.querySelector(selectorTbody).innerHTML = htmlString;
    return htmlString;
  }
  renderTableUser(selectorTbody, list) {
    let htmlString = "";
    let string = "";
    for (let user of list) {
      switch (user.class) {
        case "student":
          var person = new Student();
          Object.assign(person, user);
          string = `Tổng Điểm : ${person.tinhDiemTrungBinh()}`;
          break;
        case "employee":
          var person = new Employee();
          Object.assign(person, user);
          string = `Tổng Lương : ${person.tinhLuong()}`;
          break;
        case "customer":
          var person = new Customer();
          Object.assign(person, user);
          string = `Tên Công Ty: ${person.tenCongTy} <br/>
          Hóa đơn: ${person.hoaDon} <br/>
          Đánh giá: ${person.danhGia}`; ;
          break;
      }

      htmlString += `<thead >
          <tr>
            <th>${user.ma}</th>
            <th>${user.hoTen}</th>
            <th>${user.email}</th>
            <th>${user.diaChi}</th>
            <th>${string}</th>									
            <th><button class=" btn btn-success"  data-toggle="modal"
            data-target="#myModal" onclick="xemDoiTuong('${user.ma}')">Xem</button> 
            <button class="btn btn-danger" onclick="xoaDoiTuong('${user.ma}')">Xoá</button>
            </th>
          </tr>
          </thead>`;
    }
    document.querySelector(selectorTbody).innerHTML = htmlString;
    return htmlString;
  }
  saveData() {
    localStorage.setItem("dsdt", JSON.stringify(this.danhSach));
  }
  getData() {
    if (localStorage.getItem("dsdt")) {
      this.danhSach = JSON.parse(localStorage.getItem("dsdt"));
    }
  }
  deleteDT(ma) {
    let indexDel = this.danhSach.findIndex((user) => user.ma === ma);
    if (indexDel !== -1) {
      this.danhSach.splice(indexDel, 1);
    }
  }
  layThongtin(ma) {
    let edit = this.danhSach.find( user => {
      return user.ma === ma;
    });
    return edit;
  }
  capNhat(arr) {
    let user = this.layThongtin(arr.ma);
    Object.assign(user, arr);
  }
  sortName(list, number) {
    if (number === 1) {
      list.sort((a, b) => {
        let x = a.hoTen.toLowerCase();
        let y = b.hoTen.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
      });
    } else {
      list.sort((a, b) => {
        let x = a.hoTen.toLowerCase();
        let y = b.hoTen.toLowerCase();
        if (x < y) { return 1; }
        if (x > y) { return -1; }
        return 0;
      });
    }
    return list;
  }

  filterUser(type) {
    if (type) {
      let filterList = this.danhSach.filter((user) => {
        return user.class === type;
      });
      return filterList;
    } else {
      return this.danhSach;
    }
  }
}

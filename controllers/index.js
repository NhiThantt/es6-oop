import { Student, Employee, Customer } from "../models/Person.js";
import { ListPerson } from "../models/ListPerson.js";
import { renderForm } from "../models/render.js";
import { Validation } from "../models/validation.js";
let listPerson = new ListPerson();
let validation = new Validation();

document.querySelector("#btnThem").addEventListener("click", () => {
  renderForm();
});

document.querySelector("#doiTuong").addEventListener("change", (e) => {
  let personUser = e.target.value;
  switch (personUser) {
    case "student":
      renderForm(personUser);
      break;
    case "employee":
      renderForm(personUser);
      break;
    default:
      renderForm(personUser);
  }
});
const student1 = new Student(
  "0001",
  "Nguyễn Văn Một",
  "HCM",
  "nguyenmot@gmail.com",
  "6",
  "7",
  "8"
);
listPerson.themDoiTuong(student1);
listPerson.getData();
listPerson.renderTable("#tableDanhSach");

function valid(params) {
  var valid = true;
  valid = validation.checkLength(params.ma, 'tbMa', 'Mã', 4, 6)
    & validation.checkName(params.hoTen, 'tbHoTen', 'Họ Tên', "error-tbHoTen")
    & validation.checkEmail(params.email, 'tbEmail', "Email", 'error-tbEmail')
    & validation.checkRong(params.diaChi, 'tbDiaChi', "Địa chỉ")
  return valid;
}

document.querySelector("#btnThemND").onclick = () => {
  let personUser = document.querySelector("#doiTuong").value;
  switch (personUser) {
    case "student":
      {
        let student = new Student();
        let arrinput = document.querySelectorAll(".input-group input");
        for (let input of arrinput) {
          let { id, value } = input;
          student[id] = value;
        }
        let newValid = true;
        newValid = valid(student) & validation.checkNumber(student.toan, 'tbToan', 'Điểm', 0, 10) & validation.checkNumber(student.ly, 'tbLy', 'Điểm', 0, 10) & validation.checkNumber(student.hoa, 'tbHoa', 'Điểm', 0, 10)
        if (!newValid) return;
        listPerson.themDoiTuong(student);
        listPerson.renderTable("#tableDanhSach");
        listPerson.saveData();
      }
      break;

    case "employee":
      {
        let employee = new Employee();
        let arrinput = document.querySelectorAll(".input-group input");
        for (let input of arrinput) {
          let { id, value } = input;
          employee[id] = value;
        }
        let newValid = true;
        newValid = valid(employee) & validation.checkNumber1(employee.ngayLam, 'tbNgay', 'Số ngày làm', 10) & validation.checkNumber1(employee.luong, 'tbLuong', 'Lương', 100000)
        if (!newValid) return;
        listPerson.themDoiTuong(employee);
        listPerson.renderTable("#tableDanhSach");
        listPerson.saveData();
      }
      break;
    case "customer":
      {
        let arrinput = document.querySelectorAll(".input-group input");
        let customer = new Customer();
        for (let input of arrinput) {
          let { id, value } = input;
          customer[id] = value;
        }
        let newValid = true;
        newValid = valid(customer) & validation.checkText(customer.tenCongTy, 'tbTenCongTy', 'Tên Công ty') & validation.checkNumber1(customer.hoaDon, 'tbHoaDon', 'Hóa đơn', 500000) & validation.checkText(customer.danhGia, 'tbDanhGia', 'Đánh Giá')
        if (!newValid) return;
        listPerson.themDoiTuong(customer);
        listPerson.renderTable("#tableDanhSach");
        listPerson.saveData();
      }
      break;
  }
  document.querySelector('#myForm').reset();
};
window.xoaDoiTuong = function (ma) {
  listPerson.deleteDT(ma);
  listPerson.renderTable("#tableDanhSach");
  listPerson.saveData();
};
window.xemDoiTuong = (ma) => {
  document.querySelector('#ma').disabled = 'true';
  document.querySelector("#doiTuong").disabled = 'true'
  document.querySelector("#btnThemND").style.display = "none";
  document.querySelector("#btnCapNhat").style.display = "inline";

  let info = listPerson.layThongtin(ma);
  switch (info.class) {
    case "student":
      renderForm(info.class);
      document.querySelector("#doiTuong").value = info.class;
      break;
    case "employee":
      renderForm(info.class);
      document.querySelector("#doiTuong").value = info.class;
      break;
    default:
      renderForm(info.class);
      document.querySelector("#doiTuong").value = info.class;
  }
  if (info) {
    let arrinput = document.querySelectorAll(".input-group input");
    for (let input of arrinput) {
      let { id } = input;
      input.value = info[id];
    }
  }

};
document.querySelector("#btnThem").onclick = () => {
  document.querySelector('#myForm').reset();
  document.querySelectorAll('.input-group input,.input-group select').forEach((input) => {
    input.disabled = false;
  });
  document.querySelector("#btnCapNhat").style.display = "none";
  document.querySelector("#btnThemND").style.display = "inline";
  renderForm()
};

document.querySelector('#btnCapNhat').onclick = () => {
  let personUser = document.querySelector("#doiTuong").value;
  switch (personUser) {
    case "student":
      {
        let student = new Student();
        let arrinput = document.querySelectorAll(".input-group input");
        for (let input of arrinput) {
          let { id, value } = input;
          student[id] = value;
        }
        let newValid = true;
        newValid = valid(student) & validation.checkNumber(student.toan, 'tbToan', 'Điểm', 0, 10) & validation.checkNumber(student.ly, 'tbLy', 'Điểm', 0, 10) & validation.checkNumber(student.hoa, 'tbHoa', 'Điểm', 0, 10)
        if (!newValid) return;
        listPerson.capNhat(student);
        listPerson.renderTable("#tableDanhSach");
        listPerson.saveData();
      }
      break;
    case "employee":
      {
        let employee = new Employee();
        let arrinput = document.querySelectorAll(".input-group input");
        for (let input of arrinput) {
          let { id, value } = input;
          employee[id] = value;
        }
        let newValid = true;
        newValid = valid(employee) & validation.checkNumber1(employee.ngayLam, 'tbNgay', 'Số ngày làm', 10) & validation.checkNumber1(employee.luong, 'tbLuong', 'Lương', 100000)
        if (!newValid) return;
        listPerson.capNhat(employee);
        listPerson.renderTable("#tableDanhSach");
        listPerson.saveData();
      }
      break;
    case "customer":
      {
        let arrinput = document.querySelectorAll(".input-group input");
        let customer = new Customer();
        for (let input of arrinput) {
          let { id, value } = input;
          customer[id] = value;
        }
        let newValid = true;
        newValid = valid(customer) & validation.checkText(customer.tenCongTy, 'tbTenCongTy', 'Tên Công ty') & validation.checkNumber1(customer.hoaDon, 'tbHoaDon', 'Hóa đơn', 500000) & validation.checkText(customer.danhGia, 'tbDanhGia', 'Đánh Giá')
        if (!newValid) return;
        listPerson.capNhat(customer);
        listPerson.renderTable("#tableDanhSach");
        listPerson.saveData();
      }
      break;
  }
  document.querySelector('#myForm').reset();

};
document.querySelector('#tang').addEventListener('click', () => {
  document.querySelector('#tang').style.display = 'none';
  document.querySelector('#giam').style.display = 'inline';
  listPerson.sortName(listPerson.danhSach, 1);
  listPerson.renderTable('#tableDanhSach');
  listPerson.saveData();
});
document.querySelector('#giam').addEventListener('click', () => {
  document.querySelector('#giam').style.display = 'none';
  document.querySelector('#tang').style.display = 'inline';
  listPerson.sortName(listPerson.danhSach, -1);
  listPerson.renderTable('#tableDanhSach');
  listPerson.saveData();
});

document.querySelector('#selUser').addEventListener('change', (e) => {
  let user = e.target.value;
  let filterList = listPerson.filterUser(user);
  listPerson.renderTableUser('#tableDanhSach', filterList);
});
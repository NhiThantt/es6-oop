export function Validation() {
  this.checkName = function (value, idError, name) {
    var regexLetter = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
    if (value.trim() === "") {
      document.getElementById(idError).innerHTML = `Vui lòng nhập ${name}!`;
      return false;
    } else if (regexLetter.test(value)) {
      
      document.getElementById(idError).innerHTML = "";
      return true;
    }
    document.getElementById(idError).innerHTML = `${name} Chỉ Nhập Ký Tự`;
    return false;
  };

  this.checkEmail = function (value, idError, name) {
    var regexEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    if (value.trim() === "") {
      document.getElementById(idError).innerHTML = `Vui lòng nhập ${name}!`;
      return;
    } else if (regexEmail.test(value)) {
     
      document.getElementById(idError).innerHTML = "";
      return true;
    }
    document.getElementById(idError).innerHTML = `${name} Sai định dạng email`;
    return false;
  };

  this.checkNumber = function (value, idError, name, min, max,) {
    var regexNumber = /^[0-9]*$/;
    if (value.trim() === '') {
      document.getElementById(idError).innerHTML = `Vui lòng nhập ${name}!`;
      return false;
    }
    if (regexNumber.test(value)) {
      if (Number(value) < min || Number(value) > max) {
        document.getElementById(
          idError
        ).innerHTML = `${name} : ${min} - ${max}`;
        return false;
      }
      document.getElementById(idError).innerHTML = "";
      return true;
    }
    document.getElementById(idError).innerHTML = `${name} Vui lòng nhập số`;
    return false;
  };

  this.checkText = function (value, idError, name) {
    var regexLetter =/^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;
    if (value.trim() === '') {
      document.getElementById(idError).innerHTML = `Vui lòng nhập ${name}!`;
      return false;
    }
    if (regexLetter.test(value)) {
      document.getElementById(idError).innerHTML = "";
      return true;
    }
    document.getElementById(idError).innerHTML = `${name} Chỉ nhập ký tự`;
    return false;
  };

  this.checkNumber1 = function (value, idError, name, min,) {
    var regexNumber = /^[0-9]*$/;
    if (value.trim() === '') {
      document.getElementById(idError).innerHTML = `Vui lòng nhập ${name}!`;
      return false;
    }
    if (regexNumber.test(value)) {
      if (Number(value) < min) {
        document.getElementById(
          idError
        ).innerHTML = `${name} phải lớn hơn ${min}`;
        return false;
      }
      document.getElementById(idError).innerHTML = "";
      return true;
    }
    document.getElementById(idError).innerHTML = `${name} Chỉ nhập số`;
    return false;
  };

  this.checkLength = function (value, idError, name, min, max) {
    if (value.trim() === "") {
      document.getElementById(idError).innerHTML = `Vui lòng nhập ${name}!`;
      return false;
    } else if (value.length < min || value.length > max) {
      document.getElementById(
        idError
      ).innerHTML = `${name} Từ ${min} đến ${max} `;
      return false;
    }
    document.getElementById(idError).innerHTML = "";
    return true;
  };
  
  this.checkRong = function (value, idError, name) {
    if(value.trim()=== '') {
      document.getElementById(idError).innerHTML = `Vui Lòng nhập ${name}!`;
      return false;
    }
    document.getElementById(idError).innerHTML = " ";
    return true;
  };
}

import { invalid } from "@angular/compiler/src/render3/view/util";

export class ValidationService {
  static sysdate = new Date();

  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    let config = {
      required: "Campo Obrigatório",
      onlyletter: "Apenas letras",
      invalidEmailAddress: "Endereço de email  invalido",
      invalidPassword:"Invalid password. Password must be at least 6 characters long, and contain a number.",
      minlength: `Minimo de ${validatorValue.requiredLength} caracteres`,
      maxlength: `Maximo de ${validatorValue.requiredLength} caracteres`,
      invalidCPF: "CPF invalido",
      invalidAno: `Digite um ano entre 1994 e ${this.sysdate.getFullYear()}`,
      invalidsenhas: "Senhas não conferem",
      invaliddata: "Data Invalida",
      invaliddatae: "Data Invalida",
      onlynumber: "Apenas numeros"
    };

    return config[validatorName];
  }

  static onlyletterValidator(control) {
    if (control.value.match(/^[a-zA-Z\sà-úÀ-Ú]*$/)) {
      return null;
    } else {
      return { onlyletter: true };
    }
  }

  static onlynunberValidator(control) {
    if (control.value.match(/^[0-9]*$/)) {
      return null;
    } else {
      return { onlynumber: true };
    }
  }

  static emailValidator(control) {
    // RFC 2822 compliant regex
    if (
      control.value.match(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      )
    ) {
      return null;
    } else {
      return { invalidEmailAddress: true };
    }
  }

  static passwordValidator(control) {
    // {6,16}           - Assert password is between 6 and 16 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
      return null;
    } else {
      return { invalidPassword: true };
    }
  }

  static cpfValidator(control) {
    var Soma;
    var Resto;
    var i;
    var nulos = [
      "12345678909",
      "11111111111",
      "22222222222",
      "33333333333",
      "44444444444",
      "55555555555",
      "66666666666",
      "77777777777",
      "88888888888",
      "99999999999",
      "00000000000"
    ];

    Soma = 0;
    if (nulos.indexOf(control.value) > 0) return { invalidCPF: true };

    for (i = 1; i <= 9; i++)
      Soma = Soma + parseInt(control.value.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(control.value.substring(9, 10)))
      return { invalidCPF: true };

    Soma = 0;
    for (i = 1; i <= 10; i++)
      Soma = Soma + parseInt(control.value.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(control.value.substring(10, 11)))
      return { invalidCPF: true };
    return null;
  }

  static anoValidator(control) {
    var sysdate = new Date();

    if (
      parseInt(control.value, 10) >= 1994 &&
      parseInt(control.value, 10) <= sysdate.getFullYear()
    ) {
      return null;
    } else {
      return { invalidAno: true };
    }
  }

  static senhasValidator(control) {
    return { invalidsenhas: true };
  }

  static dataValidator(control) {
    var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    var sysdate = new Date();
    var dia = sysdate.getDate();
    var mes = sysdate.getMonth() + 1; //January is 0!
    var ano = sysdate.getFullYear();

    // Match the date format through regular expression
    if (control.value.match(dateformat)) {
      var pdate = control.value.split("/");

      var dd = parseInt(pdate[0], 10);
      var mm = parseInt(pdate[1], 10);
      var yyyy = parseInt(pdate[2], 10);

      if (
        yyyy >= 1900 &&
        new Date(mm + "/" + dd + "/" + yyyy + " 00:00") <=
          new Date(mes + "/" + dia + "/" + ano + " 00:00")
      ) {
        // Create list of days of a month [assume there is no leap year by default]
        var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (mm == 1 || mm > 2) {
          if (dd > ListofDays[mm - 1]) {
            return { invaliddata: true };
          }
        }
        if (mm == 2) {
          var lyear = false;
          console.log("mes 2");
          if ((!(yyyy % 4) && yyyy % 100) || !(yyyy % 400)) {
            lyear = true;
            console.log("bixestp");
          }
          if (lyear == false && dd >= 29) {
            return { invaliddata: true };
          }
          if (lyear == true && dd > 29) {
            return { invaliddata: true };
          }
        }
      } else {
        return { invaliddata: true };
      }
    } else {
      return { invaliddata: true };
    }
  }

  static dataEValidator(control) {
    var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    var sysdate = new Date();
    var dia = sysdate.getDate();
    var mes = sysdate.getMonth() + 1; //January is 0!
    var ano = sysdate.getFullYear();

    // Match the date format through regular expression
    if (control.value.match(dateformat)) {
      var pdate = control.value.split("/");

      var dd = parseInt(pdate[0], 10);
      var mm = parseInt(pdate[1], 10);
      var yyyy = parseInt(pdate[2], 10);

      // Create list of days of a month [assume there is no leap year by default]
      var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      if (mm == 1 || mm > 2) {
        if (dd > ListofDays[mm - 1]) {
          return { invaliddatae: true };
        }
      }
      if (mm == 2) {
        var lyear = false;
        console.log("mes 2");
        if ((!(yyyy % 4) && yyyy % 100) || !(yyyy % 400)) {
          lyear = true;
          console.log("bixestp");
        }
        if (lyear == false && dd >= 29) {
          return { invaliddatae: true };
        }
        if (lyear == true && dd > 29) {
          return { invaliddatae: true };
        }
      }
    } else {
      return { invaliddatae: true };
    }
  }
}

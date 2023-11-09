window.addEventListener("load", () => {
    const [form] = document.getElementsByTagName("form");
    form.addEventListener("submit", (e) => {
    const {
    [0]: { value: reservationDate },
    } = document.getElementsByName("reservationDate");
    if (!confirm(reservationDate + "に予約しますか?")) {
        e.stopPropagation();
        e.preventDefault();
        }
    });

    Array.from(document.getElementsByName("isAttended")).forEach((radio) => {
        radio.addEventListener("change", ({ target }) => {
        visibleUserForm(target.value == "1" && target.checked);
        setReservationButtonDisable(getErrorFormNameList().length > 0);
        });
        });
        const [{ checked: isAttended } = {}] = Array.from(
        document.getElementsByName("isAttended")
        ).filter(({ value }) => value == "1");
        visibleUserForm(isAttended);

        Array.from(document.getElementsByClassName("card")).forEach((card) => {
            const [link = {}] = card.getElementsByTagName("a");
            const [radio = {}] = card.getElementsByTagName("input");
            card.addEventListener("click", () => {
            radio.click();
            checkedCard(radio.value);
            });
            link.addEventListener("click", (e) => {
            e.stopImmediatePropagation();
            });
            });


        setReservationButtonDisable(getErrorFormNameList().length > 0);


        Object.entries(requireNameList).forEach(
            ([name, { errorMsg, errorLabel }]) => {
            const formObjectList = document.getElementsByName(name);
            formObjectList.forEach((formObject) => {
            // フォーカスアウト or 値の変更でリスナー発火
            formObject.addEventListener("blur", () =>
            checkListener(name, errorMsg, errorLabel)
            );
            formObject.addEventListener("change", () =>
            checkListener(name, errorMsg, errorLabel)
            );
            });
            }
            );    
                      
});

const visibleUserForm = (isVisible) => {
    const [userSection] = document.getElementsByClassName("user");
    if (isVisible) {
    userSection.classList.remove("invisible");
    } else {
    userSection.classList.add("invisible");
    }
};

const checkedCard = (checkedValue) => {
    Array.from(document.getElementsByClassName("card")).forEach((card) => {
    const [{ value } = {}] = card.getElementsByTagName("input");
    if (value == checkedValue) {
    card.classList.add("card-checked");
    } else {
    card.classList.remove("card-checked");
    }
    });
};

    // true:非活性, false:活性
const setReservationButtonDisable = (isError) => {
    document.getElementsByName("reservationButton")[0].disabled = isError;
};

const getErrorFormNameList = () => {
    const errorList = [];
    // 受講者情報の入力欄は、初めての受講者のみ必須
    const isAttended = Array.from(
    document.getElementsByName("isAttended")
    ).reduce(
    (isAttended, radio) => isAttended || (radio.value == "1" && radio.checked),
    false
    );

    Object.entries(requireNameList).forEach(
        ([name, { withUserForm = false }]) => {
        if (!checkRequire(name) && (!withUserForm || isAttended)) {
        errorList.push(name);
        }
        }
        );

    if (isAttended) {
    // 苗字
    const lName = "lName";
    const [{ value: lNameValue } = {}] = document.getElementsByName(lName);
    if (lNameValue.trim() == "") {
    errorList.push(lName);
    }
    console.log(lNameValue);
    // 名前
    const fName = "fName";
    const [{ value: fNameValue } = {}] = document.getElementsByName(fName);
    if (fNameValue.trim() == "") {
    errorList.push(fName);
    }
    console.log(fNameValue);
    }
    return errorList;
};    

// エラーメッセージを挿入 /削除
const setErrorMsg = (isError, errorName, errorMsg) => {
    const [errorSpan] = document.getElementsByName(errorName);
    if (isError) {
    errorSpan.innerText = errorMsg;
    } else {
    errorSpan.innerText = "";
    }
};

const checkListener = (name, errorMsg, errorLabel) => {
    const errorList = getErrorFormNameList();
    setReservationButtonDisable(errorList.length > 0);
    setErrorMsg(errorList.includes(name), errorLabel,
    errorMsg);
    };

const requireNameList = {
    reservationDate: {
    errorMsg: "受講希望日を指定してください。",
    errorLabel: "reservationDateErrorMsg",
    },
    hourType: {
    errorMsg: "受講時間を指定してください。",
    errorLabel: "reservationHourErrorMsg",
    },
    course: {
    errorMsg: "コースを指定してください。",
    errorLabel: "courseErrorMsg",
    },
    isAttended: {
    errorMsg: "ご利用状況を選択してください。",
    errorLabel: "attenededErrorMsg",
    },
    lName: {
    errorMsg: "苗字を入力してください。",
    errorLabel: "lNameErrorMsg",
    withUserForm: true,
    },
    fName: {
    errorMsg: "名前を入力してください。",
    errorLabel: "fNameErrorMsg",
    withUserForm: true,
    },
    telNum: {
    errorMsg: "電話番号を入力してください。",
    errorLabel: "telErrorMsg",
    withUserForm: true,
    },
    mail: {
    errorMsg: "メールアドレスを入力してください。",
    errorLabel: "mailErrorMsg",
    withUserForm: true,
    },
};

const getFormType = (obj = {}) =>
obj.tagName === "SELECT" ? "select" : obj.getAttribute("type");
const checkRequire = (name) => {
const objs = document.getElementsByName(name);
// type毎にチェック方法を変更
switch (getFormType(objs[0])) {
case "select":
const {
[0]: {
selectedIndex = "",
options: { [selectedIndex]: { value: selectedValue = "" } = {} } = {},
} = {},
} = objs || {};
return selectedValue.trim() !== "";
case "radio":
case "checkbox":
return Array.from(objs).some(({ checked = false }) => checked);
default:
const { [0]: { value = "" } = {} } = objs || {};
return value.trim() !== "";
}
};


           //今日の日時を表示
        window.onload = function () {
            //今日の日時を表示
            var date = new Date()
            var year = date.getFullYear()
            var month = date.getMonth() + 1
            var day = date.getDate()
          
            var toTwoDigits = function (num, digit) {
              num += ''
              if (num.length < digit) {
                num = '0' + num
              }
              return num
            }
            
            var yyyy = toTwoDigits(year, 4)
            var mm = toTwoDigits(month, 2)
            var dd = toTwoDigits(day, 2)
            var ymd = yyyy + "-" + mm + "-" + dd;
            
            document.getElementById("reservationDate").value = ymd;
        }
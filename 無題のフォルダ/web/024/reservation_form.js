window.addEventListener("load", () => {
    const [form] = document.getElementsByTagName("form");
    form.addEventListener("submit", () => {
    const {
    [0]: { value: reservationDate },
    } = document.getElementsByName("reservationDate");
    confirm(reservationDate + "に予約しますか?");
    });

    Array.from(document.getElementsByName("isAttended")).forEach((radio) => {
        radio.addEventListener("change", ({ target }) => {
        visibleUserForm(target.value == "1" && target.checked);
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
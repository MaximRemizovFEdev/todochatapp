export const setDataMock = async () => {
    return new Promise<{ ok: boolean; data: any[] }>((resolve, reject) => {
        // Проверяем, есть ли уже сохраненные данные
        const existingCards = localStorage.getItem("cards");
        if (existingCards) {
            // Если данные уже имеются, отклоняем промис с сообщением
            return reject(new Error("use clear api"));
        }
        
        // Данные карточек, которые мы хотим сохранить
        const initialCards = [
            {
                status: "todo",
                bodyText: "react typescript redux",
                headerText: "javascript",
                btns: "any",
                id: "1"
            },
            {
                status: "todo",
                bodyText: "Lorem ipsum react redux",
                headerText: "toolkit",
                btns: "any",
                id: "2"
            },
            {
                status: "done",
                bodyText: "lorem",
                headerText: "Lorem Ipsum",
                btns: "any",
                id: "3"
            }
        ];

        // Сохраняем данные в localStorage
        localStorage.setItem("cards", JSON.stringify(initialCards));

        // Возвращаем успешный ответ с сохраненными данными
        const response = {
            ok: true,
            data: JSON.parse(localStorage.getItem("cards"))
        };
        
        resolve(response);
    });
};
export const clearDataMock = async () => {
    await new Promise((res) => {
        localStorage.clear();
        return res(true);
    })
}
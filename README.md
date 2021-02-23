# Проект 4: Место / Mesto

### Описание

Одностраничный сайт [Mesto](), который позволяет пользователю заполнить профиль своей фотографией и указать имя и фамилию,
чтобы создать галерею с любимыми фотографиями. Галерея состоит из карточек с фотографиями и полями с подписями.
Карточки можно оценивать кнопкой "лайк".

**Макет**

* Сайт был создан по [макету в Figma](https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1),
используя HTML, CSS, java script. 

**Картинки**

Фотографии, что расположены в галерее были взяты с бесплатного [ресурса unsplash.com](https://unsplash.com/)
и оптимизированы через [ресурс](https://tinypng.com/), чтобы сайт работал быстрее.

### Структура
```gitignore

|-- blocks
|   |-- add-button
|   |-- close-button
|   |-- content
|   |   `-- __block
|   |-- edit-button
|   |   `-- __container
|   |-- element
|   |   |-- __image
|   |   |-- __like
|   |   |   |-- __like-hidden
|   |   |   |-- _active
|   |   |   `-- _active-hidden
|   |   |-- __text-box
|   |   `-- __title
|   |-- elements
|   |   `-- __list
|   |-- footer
|   |   `-- __copyright
|   |-- form
|   |   `-- __title
|   |-- header
|   |   `-- __link
|   |-- input__bio
|   |-- input__name
|   |-- logo
|   |-- page
|   |   |-- __container
|   |   |-- __content
|   |   |-- __footer
|   |   `-- __header
|   |-- popup
|   |   `-- __opend
|   |-- profile
|   |   |-- __avatar
|   |   `-- __container
|   |-- profile-info
|   |   |-- __container
|   |   |-- __subtitle
|   |   `-- __title
|   `-- submit-button
|       `-- __title
|-- images
|-- pages
`-- vendor
    `-- fonts

46 directories
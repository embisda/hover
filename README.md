# hover
Поведение элементов при наведении на них курсора<br>
<b>Задача:</b><br>
Есть 2 элемента: картинка и ссылка под ней (относящаяся по смыслу к картинке).<br>
Необходимо при наведении на картинку изменять ее стиль и стиль ссылки под ней.<br>
Так же при наведении на ссылку необходимо менять ее стиль и стиль картинки над ней.<br><br>
<b>Комментарий:</b><br>
Первая часть решается с помощью css записи вида <b><i>.image:hover ~ .ssilka {color: #ff5001;}</i></b><br>
Вторую часть решил на js. Контейнер содержит картинку и ссылку на оригинал картинки.<br>
Возникла еще 1 проблема. Скрипт перестает работать, если картинку поместить в ссылку, чтобы и с картинки и с подписи к ней можно было открыть оригинал.<br>
<b>Подзадача:</b><br>
Сделать универсальный скрипт, которому все равно во что обернута картинка.


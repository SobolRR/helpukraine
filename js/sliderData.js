// Массив объектов с данными, которые нужно применять в каждом повторяющемся блоке
// href - если нужен перех на ссылку
// modal:'modal', href:'#' - если нужен вывод модального окна
let data = [
    { itemID: '1', img: './img/slider1.jpg', modal:'modal', href:'#', title: 'Team of PBM AG donated 3000 Euro to Regionale Entwicklung in Der Ukraine e.V. to help Ukrainian refugees.', date:'11.04.22',text: 'Thank you our dear Team of PBM AG. This donation will be spent to buy food and items of prime necessity to refugees families in Ukraine. We will update you soon.' },
    { itemID: '2', img: './img/slider2.jpg', modal:'modal', href:'#', title: 'A first donation of 800 Euro from Andrea Phillips feed Refugees children in Uzhorod.', date:'09.04.22', text: 'Our partner in Ukraine fed 194 refugees (children and mothers) in one of Refuges center of Uzhorod city which is located on the border nearly on Slovak/Ukrainian border.' },
    { itemID: '3', img: './img/slider3.jpg', modal:'modal', href:'#', title: 'Our partner in Ukraine spent 7800 Euro on medication for children in Maternity Hospital of Kyiv.', date:'17.03.22', text: 'Our partner in Ukraine bought medical supplies for 7800 Euro ( 250 000 UAH) For Kyiv state Maternity Hospital where every year more than 25 000 woman gave birth to babies.' },
    { itemID: '4', img: './img/slider4.jpg', modal:'modal', href:'#', title: '460 Euro spent on food for people in Skrobotivka refugee camp of Ternopol region ', date:'15.04.22', text: 'Centersocial have bought and delivered food and items of prime necessity to Skrobotivka refugee camp in Ternopol region.' },
];
// Функция, которая возвращает один элемент повторяющегося шаблона
// с вставкой в него переменных
const getRowTemplate = (img, title, text, itemID, date, href, modal) => {
    return `
    <div class="item">
    <div class="shadow-effect">
        <h5>${title}</h5>
        <img class="img-responsive" src="${img}" alt=""/>
            <div class="item-details">
                <p>Date of publication: ${date}</p>
                <p>${text}</p>
            </div>
            <a href="${href}" type="button" target="_blank"  class="btn btn-primary" data-toggle="${modal}" data-target="#Modal_${itemID}">
                Read more
              </a>
        </div>
    </div>
    `;
};
// Функция, которая пробегается по всему массиву и на каждой итерации
// подставляет данные из одного элемента массива в функиwb. взятия шаблона Html
const getAllNews = (data) => {
    let content = '';

    data.forEach(el => {
        content += getRowTemplate(el.img, el.title, el.text, el.itemID, el.date, el.href, el.modal);
    });

    return content;
};

// Функция рендера всего контента на основе переданных данных
const renderAllNews = (data) => {
    document.getElementById('customers-testimonials').innerHTML = getAllNews(data);
};

renderAllNews(data);

//
// button
// 

const getRowTemplateButton = (title, text, itemID, img, date) => {
    return `
    <div class="modal fade" id="Modal_${itemID}" tabindex="-1" role="dialog"  aria-hidden="true">
    <div class="modal-dialog" id="modal-dialog" role="document">
      <div class="modal-content" id="modal-content">
        <div class="modal-header" id="modal-header">
          <h4 class="modal-title" id="modal-title">
          ${title}
            </h4>
            <button type="button" class="close" id="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body" id="modal-body">
        <img class="modal-img" id="modal-img"src="${img}" alt=""/>
        <p>Date of publication: ${date}</p>
        <p>${text}</p>           
        </div>
      </div>
    </div>
  </div>
    `;
};
// Функция, которая пробегается по всему массиву и на каждой итерации
// подставляет данные из одного элемента массива в функиwb. взятия шаблона Html
const getAllButton = (data) => {
    let content = '';

    data.forEach(el => {
        content += getRowTemplateButton(el.title, el.text, el.itemID, el.img, el.date);
    });

    return content;
};

// Функция рендера всего контента на основе переданных данных
const renderAllButton = (data) => {
    document.querySelector('.allButton').innerHTML = getAllButton(data);
};

renderAllButton(data);
// Массив объектов с данными, которые нужно применять в каждом повторяющемся блоке
let data = [
    { id: '1', img: './img/slider1.jpg', title: 'Team of PBM AG donated 3000 Euro to Regionale Entwicklung in Der Ukraine e.V. to help Ukrainian refugees.', text: '11.04.22 Thank you our dear Team of PBM AG. This donation will be spent to buy food and items of prime necessity to refugees families in Ukraine. We will update you soon.Thank you our dear Team of PBM AG. This donation will be spent to buy food and items of prime necessity to refugees families in Ukraine. We will update you soon.' },
    { id: '2', img: './img/slider2.jpg', title: 'A first donation of 800 Euro from Andrea Phillips feed Refugees children in Uzhorod.', text: '09.04.22 Our partner in Ukraine fed 194 refugees (children and mothers) in one of Refuges center of Uzhorod city which is located on the border nearly on Slovak/Ukrainian border.' },
    { id: '3', img: './img/slider3.jpg', title: 'Our partner in Ukraine spent 7800 Euro on medication for children in Maternity Hospital of Kyiv.', text: '17.03.22 Our partner in Ukraine bought medical supplies for 7800 Euro ( 250 000 UAH) For Kyiv state Maternity Hospital where every year more than 25 000 woman gave birth to babies.' },
];
// Функция, которая возвращает один элемент повторяющегося шаблона
// с вставкой в него переменных
const getRowTemplate = (img, title, text, id) => {
    return `
    <div class="item">
    <div class="shadow-effect">
        <h5>${title}</h5>
        <img class="img-responsive" src="${img}" alt=""/>
            <div class="item-details">
                <p>${text}</p>
            </div>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Modal_${id}">
                Show More
              </button>
        </div>
    </div>
    `;
};
// Функция, которая пробегается по всему массиву и на каждой итерации
// подставляет данные из одного элемента массива в функиwb. взятия шаблона Html
const getAllNews = (data) => {
    let content = '';

    data.forEach(el => {
        content += getRowTemplate(el.img, el.title, el.text, el.id);
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

const getRowTemplateButton = (title, text, id) => {
    return `
    <div class="modal fade" id="Modal_${id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">
          ${title}
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        ${text}           
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
        content += getRowTemplateButton(el.title, el.text, el.id);
    });

    return content;
};

// Функция рендера всего контента на основе переданных данных
const renderAllButton = (data) => {
    document.querySelector('.allButton').innerHTML = getAllButton(data);
};

renderAllButton(data);
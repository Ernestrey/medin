if (process.env.NODE_ENV !== 'production') {
  /* eslint-disable global-require */
  require('./index.pug')
}

const diagramJson =
  '{"bars": [{"category": "Jan","data": 2.3},{"category": "Feb","data": 3.1},' +
  '{"category": "Mar","data": 4},{"category": "Apr","data": 10.1},{"category": "May","data": 4},' +
  '{"category": "Jun","data": 3.6},{"category": "Jul","data": 3.2},{"category": "Aug","data": 2.3},' +
  '{"category": "Sep","data": 1.4},{"category": "Oct","data": 0.8},{"category": "Nov","data": 0.5},' +
  '{"category": "Dec","data": 0.2}]}'

const diagram = JSON.parse(diagramJson).bars
const densityCanvas = document.querySelector('#densityChart')
const di = []
const cat = []

for (const [i, element] of diagram.entries()) {
  di[i] = element.data
  cat[i] = element.category
}

const densityData = {
  label: 'Diagram',
  data: di,
  backgroundColor: [
    'rgba(250, 99, 132, 0.6)',
    'rgba(230, 99, 132, 0.6)',
    'rgba(210, 99, 132, 0.6)',
    'rgba(190, 99, 132, 0.6)',
    'rgba(170, 99, 132, 0.6)',
    'rgba(150, 99, 132, 0.6)',
    'rgba(130, 99, 132, 0.6)',
    'rgba(110, 99, 132, 0.6)',
    'rgba(90, 99, 132, 0.6)',
    'rgba(70, 99, 132, 0.6)',
    'rgba(50, 99, 132, 0.6)',
    'rgba(30, 99, 132, 0.6)',
  ],
  borderWidth: 2,
  hoverBorderWidth: 0,
}

const chartOptions = {
  scales: {
    yAxes: [
      {
        barPercentage: 0.5,
      },
    ],
  },
  elements: {
    rectangle: {
      borderSkipped: 'left',
    },
  },
}

const barChart = new Chart(densityCanvas, {
  type: 'horizontalBar',
  data: {
    labels: cat,
    datasets: [densityData],
  },
  options: chartOptions,
})

const ul = document.querySelector('#employees_list')
const url = 'https://randomuser.me/api?results=6'

function createNode(element) {
  return document.createElement(element)
}

function append(parent, el) {
  return parent.appendChild(el)
}

fetch(url)
  .then((resp) => resp.json())
  .then((data) => {
    const employees = data.results
    return employees.map((employee) => {
      const li = createNode('li')
      const img = createNode('img')
      const span = createNode('span')

      img.src = employee.picture.medium
      span.innerHTML = `${employee.name.first} ${employee.name.last}`

      append(li, img)
      append(li, span)
      append(ul, li)
    })
  })

  .catch((error) => {
    console.log(error)
  })

const sliders_json =
  '{"slides": [{"img": "https://i0.wp.com/theverybesttop10.com/wp-content/uploads/2014/10/Top-10-Images-of-Angry-Wet-Cats-6.jpg?fit=586%2C404&ssl=1","info": "Новость","title": "Минобороны: ВКС России уничтожили крупный арсенал украинских войск в Кривом Роге"},' +
  '{"img": "https://www.boredpanda.com/blog/wp-content/uploads/2014/02/funny-wet-cats-1.jpg","info": "Новость","title": "Билл Гейтс спрогнозировал новую пандемию в следующие 20 лет с вероятностью 50%"},' +
  '{"img": "https://i.ytimg.com/vi/AsVQVKmI8pA/maxresdefault.jpg","info": "Новость","title": "Представитель МИД Захарова назвала заявления Шольца про многополярный мир плагиатом"},' +
  '{"img": "https://cdn.shopify.com/s/files/1/0344/6469/files/Screen_Shot_2019-01-04_at_5.07.33_PM.png?v=1546639679","info": "Новость","title": "19FortyFive: НАТО столкнулось с трудностями при организации военных учений в Швеции"},' +
  '{"img": "https://i.ytimg.com/vi/317jz-PU7Mg/maxresdefault.jpg","info": "Новость","title": "Экс-командующий ВДВ генерал-полковник Шпак: США запретили Польше вводить войска на Украину"},' +
  '{"img": "https://i.ytimg.com/vi/YSHDBB6id4A/maxresdefault.jpg","info": "Новость","title": "Bloomberg: Еврокомиссия предложила отложить запрет на поставки нефти по «Дружбе»"},' +
  '{"img": "https://preview.redd.it/7aydec8cp6m41.jpg?width=640&crop=smart&auto=webp&s=22d2b330801f064094184eda733e2e6880c58809","info": "Новость","title": "Росавиация продлила ограничение полетов в южные аэропорты до 6 июня"}]}'

const sliders = JSON.parse(sliders_json).slides

const sliderItems = document.querySelectorAll('.slider__item')

for (const [i, sliderItem] of sliderItems.entries()) {
  const img = document.createElement('img')
  img.classList.add('img')
  const info = document.createElement('p')
  info.classList.add('info')
  const title = document.createElement('h1')
  title.classList.add('title')

  img.src = sliders[i].img
  info.innerHTML = sliders[i].info
  title.innerHTML = sliders[i].title

  sliderItem.append(img)
  sliderItem.append(info)
  sliderItem.append(title)
}

const WRAPPER_SELECTOR = '.slider__wrapper'
const ITEMS_SELECTOR = '.slider__items'
const ITEM_SELECTOR = '.slider__item'
const CONTROL_CLASS = 'slider__control'
const SELECTOR_PREV = '.slider__control[data-slide="prev"]'
const SELECTOR_NEXT = '.slider__control[data-slide="next"]'
const SELECTOR_INDICATOR = '.slider__indicators>li'
const CLASS_CONTROL_HIDE = 'slider__control_hide'

function ChiefSlider(selector, config) {
  const $root = typeof selector === 'string' ? document.querySelector(selector) : selector
  this._$root = $root
  this._$wrapper = $root.querySelector(WRAPPER_SELECTOR)
  this._$items = $root.querySelector(ITEMS_SELECTOR)
  this._$itemList = $root.querySelectorAll(ITEM_SELECTOR)
  this._$controlPrev = $root.querySelector(SELECTOR_PREV)
  this._$controlNext = $root.querySelector(SELECTOR_NEXT)
  this._transform = 0
  this._config = {
    loop: true,
    autoplay: false,
    interval: 5000,
    refresh: true,
    swipe: true,
  }
  for (const key in config) {
    if (this._config.hasOwnProperty(key)) {
      this._config[key] = config[key]
    }
  }
  const $itemList = this._$itemList
  const widthItem = $itemList[0].offsetWidth
  const widthWrapper = this._$wrapper.offsetWidth
  const itemsInVisibleArea = Math.round(widthWrapper / widthItem)
  this._itemsInVisibleArea = itemsInVisibleArea
  this._transformStep = 100 / itemsInVisibleArea
  this._addEventListener()
}

ChiefSlider.prototype._addEventListener = function() {
  const $root = this._$root
  function onClick(e) {
    const $target = e.target
    if ($target.classList.contains(CONTROL_CLASS)) {
      e.preventDefault()
      this._direction = $target.dataset.slide
      this._move()
    } else if ($target.dataset.slideTo) {
      const index = parseInt($target.dataset.slideTo)
      this._moveTo(index)
    }
  }

  $root.addEventListener('click', onClick.bind(this))
}

ChiefSlider.prototype._move = function() {
  const step = this._direction === 'next' ? -this._transformStep : this._transformStep
  let transform = this._transform + step
  if (!this._config.loop) {
    const endTransformValue =
      this._transformStep * (this._$itemList.length - this._itemsInVisibleArea)
    transform = Math.round(transform * 10) / 10
    if (transform < -endTransformValue || transform > 0) {
      return
    }
  }
  this._transform = transform
  this._$items.style.transform = `translateX(${transform}%)`
}

document.addEventListener('DOMContentLoaded', () => {
  const slider = new ChiefSlider('.slider', {
    loop: false,
  })
})

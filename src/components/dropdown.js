import { getData } from "../api/getData.js"
import Pagination from "./pagination.js"
import Table from "./table.js"

class Dropdown {
  constructor({ $target }) {
    this.$target = $target
  }

  render() {
    const $div = document.createElement('div')
    $div.setAttribute('class', 'area')
    $div.setAttribute('id', 'dropdown')

    const $select = document.createElement('select')
    $select.addEventListener('change', async (e) => {
      const number = Number(e.target.value)
      const page = 1

      const { data, total } = await getData({ page, number })
      const $table = document.querySelector('#table')
      $table.innerHTML = ''
      new Table({ $target: $table, data }).render()

      const $pagination = document.querySelector('#pagination')
      $pagination.innerHTML = ''
      this.page = page
      new Pagination({ $target: $pagination, total, page, number }).render()
    })

    const data = [5, 15]

    data.forEach(o => {
      const $option = document.createElement('option')
      $option.appendChild(document.createTextNode(`${o}개씩`))
      $option.setAttribute('value', o)
      $select.appendChild($option)
    })

    $div.appendChild($select)
    this.$target.appendChild($div)
  }
}

export default Dropdown
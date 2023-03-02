import Dropdown from "./components/dropdown.js"
import Table from "./components/table.js"
import Pagination from "./components/pagination.js"
import { getData } from "./api/getData.js"

class App {
  constructor({ $target }) {
    this.$target = $target
  }

  async render() {
    const { data, total } = await getData({ page: 1, number: 5 })

    new Dropdown({ $target: this.$target }).render()

    const $tableDiv = document.createElement('div')
    $tableDiv.setAttribute('class', 'area')
    $tableDiv.setAttribute('id', 'table')
    this.$target.appendChild($tableDiv)
    new Table({ $target: $tableDiv, data }).render()

    const $paginationDiv = document.createElement('div')
    $paginationDiv.setAttribute('class', 'area')
    $paginationDiv.setAttribute('id', 'pagination')
    this.$target.appendChild($paginationDiv)
    new Pagination({ $target: $paginationDiv, total, page: 1, number: 5 }).render()
  }
}

export default App
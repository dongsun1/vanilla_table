import { getData } from "../api/getData.js"
import Table from "./table.js"

class Pagination {
  constructor({ $target, total, page, number }) {
    this.$target = $target
    this.total = total
    this.page = page
    this.number = number
  }

  async changePage({ page }) {
    const { data } = await getData({ page, number: this.number })
    const $table = document.querySelector('#table')
    $table.innerHTML = ''
    new Table({ $target: $table, data }).render()

    const $pagination = document.querySelector('#pagination')
    $pagination.innerHTML = ''
    this.page = page
    this.render()
  }

  render() {
    const $LButton = document.createElement('button')
    $LButton.setAttribute('class', 'arrow')
    $LButton.appendChild(document.createTextNode('<<'))
    $LButton.addEventListener('click', async () => await this.changePage({ page: 1 }))
    this.$target.appendChild($LButton)

    for (let i = 0; i < Math.ceil(this.total / this.number); i++) {
      const $button = document.createElement('button')

      if (i + 1 === this.page) $button.setAttribute('style', 'color: red')
      $button.appendChild(document.createTextNode(i + 1))
      this.$target.appendChild($button)

      $button.addEventListener('click', async () => await this.changePage({ page: i + 1 }))
    }

    const $RButton = document.createElement('button')
    $RButton.setAttribute('class', 'arrow')
    $RButton.appendChild(document.createTextNode('>>'))
    $RButton.addEventListener('click', async () => await this.changePage({ page: Math.ceil(this.total / this.number) }))
    this.$target.appendChild($RButton)
  }
}

export default Pagination

{/* <div class="area" id="pagination">
  <button class="arrow">&#60;&#60;</button>
  <button style="color:red">1</button>
  <button>2</button>
  <button>3</button>
  <button>4</button>
  <button>5</button>
  <button class="arrow">>></button>
</div> */}
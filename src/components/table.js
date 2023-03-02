class Table {
  constructor({ $target, data }) {
    this.$target = $target
    this.data = data
  }

  render() {
    const $table = document.createElement('table')
    this.$target.appendChild($table)

    const $thead = document.createElement('thead')
    $table.appendChild($thead)

    const th = ['name', 'title', 'email', 'role']

    for (let i = 0; i < th.length; i++) {
      const $th = document.createElement('th')
      $th.appendChild(document.createTextNode(th[i]))
      $thead.appendChild($th)
    }

    const $tbody = document.createElement('tbody')
    $table.appendChild($tbody)

    for (let i = 0; i < this.data.length; i++) {
      const $tr = document.createElement('tr')
      if ((i + 1) % 2 === 0) $tr.setAttribute('class', 'even')

      for (let j = 0; j < th.length; j++) {
        const $td = document.createElement('td')
        $td.appendChild(document.createTextNode(this.data[i][th[j]]))
        $tr.appendChild($td)
      }

      $tbody.appendChild($tr)
    }
  }
}

export default Table

{/* <div class="area" id="table">
  테이블을 이 영역에 구현해주세요
</div> */}
import {ExcelComponent} from '@core/ExcelComponent'
import {$} from '@core/dom'
import {changeTitle} from '@/redux/actions'
import {defaultTitle} from '@/constants'
import {debounce} from '@core/utils'

export class Header extends ExcelComponent {
  static className = 'excel__header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
<<<<<<< HEAD
      listeners: ['input'],
=======
>>>>>>> 8b0fca5b233493d1a6bcf741ec69ee5006541f30
      ...options,
    })
  }

<<<<<<< HEAD
  prepare() {
    this.onInput = debounce(this.onInput, 300)
  }

  toHTML() {
    const title = this.store.getState().title || defaultTitle
    return `
      <input type="text" class="input" value="${title}" />

      <div>

        <div class="button">
          <i class="material-icons">delete</i>
        </div>

        <div class="button">
=======
  toHTML() {
    return `
      <input type="text" class="input" value="Новая таблица" />

      <div>

        <div class="button">
          <i class="material-icons">delete</i>
        </div>

        <div class="button">
>>>>>>> 8b0fca5b233493d1a6bcf741ec69ee5006541f30
          <i class="material-icons">exit_to_app</i>
        </div>

      </div>
    `
  }
<<<<<<< HEAD

  onInput(event) {
    const $target = $(event.target)
    this.$dispatch(changeTitle($target.text()))
  }
=======
>>>>>>> 8b0fca5b233493d1a6bcf741ec69ee5006541f30
}

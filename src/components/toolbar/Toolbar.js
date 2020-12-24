<<<<<<< HEAD
import {createToolbar} from '@/components/toolbar/toolbar.template'
import {$} from '@core/dom'
import {ExcelStateComponent} from '@core/ExcelStateComponent'
import {defaultStyles} from '@/constants'

export class Toolbar extends ExcelStateComponent {
=======
import {ExcelComponent} from '@core/ExcelComponent'

export class Toolbar extends ExcelComponent {
>>>>>>> 8b0fca5b233493d1a6bcf741ec69ee5006541f30
  static className = 'excel__toolbar'

  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
<<<<<<< HEAD
      subscribe: ['currentStyles'],
=======
>>>>>>> 8b0fca5b233493d1a6bcf741ec69ee5006541f30
      ...options
    })
  }

<<<<<<< HEAD
  prepare() {
    this.initState(defaultStyles)
  }

  get template() {
    return createToolbar(this.state)
  }

  toHTML() {
    return this.template
  }

  storeChanged(changes) {
    this.setState(changes.currentStyles)
  }

  onClick(event) {
    const $target = $(event.target)
    if ($target.data.type === 'button') {
      const value = JSON.parse($target.data.value)
      this.$emit('toolbar:applyStyle', value)
    }
=======
  toHTML() {
    return `
      <div class="button">
        <i class="material-icons">format_align_left</i>
      </div>

      <div class="button">
        <i class="material-icons">format_align_center</i>
      </div>

      <div class="button">
        <i class="material-icons">format_align_right</i>
      </div>

      <div class="button">
        <i class="material-icons">format_bold</i>
      </div>

      <div class="button">
        <i class="material-icons">format_italic</i>
      </div>

      <div class="button">
        <i class="material-icons">format_underlined</i>
      </div>
    `
  }

  onClick(event) {
    console.log(event.target)
>>>>>>> 8b0fca5b233493d1a6bcf741ec69ee5006541f30
  }
}

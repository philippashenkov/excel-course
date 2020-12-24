import {$} from '@core/dom'
import {Emitter} from '@core/Emitter'
<<<<<<< HEAD
import {StoreSubscriber} from '@core/StoreSubscriber'
=======
>>>>>>> 8b0fca5b233493d1a6bcf741ec69ee5006541f30

export class Excel {
  constructor(selector, options) {
    this.$el = $(selector)
    this.components = options.components || []
<<<<<<< HEAD
    this.store = options.store
    this.emitter = new Emitter()
    this.subscriber = new StoreSubscriber(this.store)
=======
    this.emitter = new Emitter()
>>>>>>> 8b0fca5b233493d1a6bcf741ec69ee5006541f30
  }

  getRoot() {
    const $root = $.create('div', 'excel')

    const componentOptions = {
<<<<<<< HEAD
      emitter: this.emitter,
      store: this.store
=======
      emitter: this.emitter
>>>>>>> 8b0fca5b233493d1a6bcf741ec69ee5006541f30
    }

    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className)
      const component = new Component($el, componentOptions)
<<<<<<< HEAD
=======
      // // DEBUG
      // if (component.name) {
      //   window['c' + component.name] = component
      // }
>>>>>>> 8b0fca5b233493d1a6bcf741ec69ee5006541f30
      $el.html(component.toHTML())
      $root.append($el)
      return component
    })

    return $root
  }

  render() {
    this.$el.append(this.getRoot())

    this.subscriber.subscribeComponents(this.components)
    this.components.forEach(component => component.init())
  }

  destroy() {
<<<<<<< HEAD
    this.subscriber.unsubscribeFromStore()
=======
>>>>>>> 8b0fca5b233493d1a6bcf741ec69ee5006541f30
    this.components.forEach(component => component.destroy())
  }
}

import { test,describe,it,expect} from 'vitest'
import { mockComponent} from 'nuxt-vitest/utils'
import {mount} from '@vue/test-utils'
import ebayFooter  from "./components/ebayFooter.vue"

describe('App',()=>{
  test('is a vue instance',()=>{
    const wrapper = mount(ebayFooter)
    expect(wrapper.vm).toBeTruthy();
  })
})

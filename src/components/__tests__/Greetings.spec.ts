import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Greetings from '../Welcome/Greetings.vue'

describe('Greetings', () => {
    it('renders properly', () => {
        const wrapper = mount(Greetings, { props: { msg: 'Hello Vitest' } })
        expect(wrapper.text()).toContain('Hello Vitest')
    })
})

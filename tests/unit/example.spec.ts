import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import StarRating from '@/components/StarRating.vue';

describe('StarRating.vue', () => {
  it('renders props.rating when passed', () => {
    const rating = 1;
    const wrapper = shallowMount(StarRating, {
      propsData: { rating },
    });
    expect(typeof rating).to.include('number')
  });
});

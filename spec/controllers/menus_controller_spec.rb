require 'spec_helper'

describe MenusController do
  describe '#index' do
    it 'should have an index action' do
      get :index
      expect(response.status.should eq 200)
    end
  end
end
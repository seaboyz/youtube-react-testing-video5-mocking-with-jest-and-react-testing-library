import { Example2, rows } from './Example2'
import { DataGrid } from '@material-ui/data-grid'
import { mount } from 'enzyme'

// mock DataGrid

describe('MyComponent', () => {

  it('renders Material-UI grid with columnDefs and rowData', () => {
    const mockOnMoney = jest.fn()
    const wrapper = mount(<Example2 onMoney={mockOnMoney} />)
    const button = wrapper.find("button")
      .filterWhere(node => node.text() === "Give me 33 dollars")

    button.simulate("click")

    expect(mockOnMoney).toHaveBeenCalledTimes(1)
    expect(mockOnMoney).toHaveBeenCalledWith(33)
  })

  it('renders table passing the expected props', () => {
  })
})

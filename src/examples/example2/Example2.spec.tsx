import shadows from "@material-ui/core/styles/shadows"
import { DataGrid } from "@material-ui/data-grid"
import { mount, shallow } from 'enzyme'
import { mocked } from "ts-jest/utils"
import { Example2, columns, rows } from './Example2'

// mock module
jest.mock(
  '@material-ui/data-grid',
  () => ({
    ...jest.requireActual('@material-ui/data-grid'),
    DataGrid: jest.fn(() => <div>Table</div>)
  })
)

const mockedDataGrid = mocked(DataGrid)

const dataGridProps = {
  columns,
  rows,
  pageSize: 5,
  checkboxSelection: true
}

describe('MyComponent', () => {

  beforeEach(() => {
    mockedDataGrid.mockClear()
  })

  it('renders Material-UI grid with columnDefs and rowData', () => {
    // mock props
    const mockOnMoney = jest.fn()
    const wrapper = mount(<Example2 onMoney={mockOnMoney} />)
    const button = wrapper.find("button")
      .filterWhere(node => node.text() === "Give me 33 dollars")

    button.simulate("click")

    expect(mockOnMoney).toHaveBeenCalledTimes(1)
    expect(mockOnMoney).toHaveBeenCalledWith(33)
  })

  it('renders table passing the expected props', () => {
    const wrapper = mount(<Example2 onMoney={jest.fn()} />)
    
    expect(mockedDataGrid).toHaveBeenCalledTimes(1)
    expect(mockedDataGrid).toHaveBeenLastCalledWith(
      {
        columns,
        rows,
        pageSize: 5,
        checkboxSelection: true
      },
      {} // context
    )
  })
})

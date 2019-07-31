import moment from 'moment'

export default {
  filterTableDate(state) {
    let fTableDate = [];
    if(!state.select){
      return state.tableData
    }
    if (state.select == 1) {
      fTableDate = state.tableData.filter(
        data => moment(data.date).format('YYYY-MM-DD').toString().indexOf(state.input.trim()) != -1
      );
    } else if (state.select == 2) {
      fTableDate = state.tableData.filter(
        data => data.name.indexOf(state.input.trim()) != -1
      );
    } else {
      fTableDate = state.tableData.filter(
        data => data.address.indexOf(state.input.trim()) != -1
      );
    }
    return fTableDate;
  }
}

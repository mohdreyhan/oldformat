const initialState = {
  count: 0,
  data: [],
  modal1: false,
  modal2: false,
  modalLoginShow: true,
  modalsignupShow: false,
  recordToUpdate: [],
  rectoupdate: [],
  addrecord: {
    Invoices_Id: "enter",
    Invoices_Company: "enter",
    Invoices_Date: "enter",
    Invoices_Cost: "enter",
    Invoices_Discount: "enter"
  },
  addtouser: [],
  verifyuser: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET":
      return Object.assign({}, state, {
        data: action.data
      });
    case "MODALSHOW2":
      return Object.assign({}, state, {
        modal2: !state.modal2,
        recordToUpdate: action.recordToUpdate,
        rectoupdate: action.recordToUpdate
      });
    case "ONCHANGEUPDATE":
      return {
        ...state,
        rectoupdate: {
          ...state.rectoupdate,
          [action.name]: action.value
        }
      };
    case "MODALSHOW1":
      return Object.assign({}, state, {
        modal1: !state.modal1
      });
    case "ONCHANGEADD":
      return {
        ...state,
        addrecord: {
          ...state.addrecord,
          [action.name]: action.value
        }
      };
    case "MODALLOGIN":
      return Object.assign({}, state, {
        modalLoginShow: action.logincondition,
        modalsignupShow: action.signupcondition
      });
    case "MODALSIGNUP":
      return Object.assign({}, state, {
        modalsignupShow: action.signupcondition,
        modalLoginShow: action.logincondition
      });
    case "ONCHANGESIGNUP":
      return {
        ...state,
        addtouser: {
          ...state.addtouser,
          [action.name]: action.value
        }
      };
    case "ONCHANGEVERIFY":
      return {
        ...state,
        verifyuser: {
          ...state.verifyuser,
          [action.name]: action.value
        }
      };
    default:
      return state;
  }
};

export default reducer;

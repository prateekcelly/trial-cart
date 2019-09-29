import Item1 from "../style/images/item1.jpg";
import Item2 from "../style/images/item2.jpg";
import Item3 from "../style/images/item3.jpg";
import Item4 from "../style/images/item4.jpg";
import Item5 from "../style/images/item5.jpg";
import Item6 from "../style/images/item6.jpg";
import {
  ADD_TO_CART,
  ADD_QUANTITY,
  SUB_QUANTITY,
  REMOVE_ITEM
} from "../actions/action-types/cart-actions";

const initState = {
  items: [
    {
      id: 1,
      title: "Winter body",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 110,
      img: Item1
    },
    {
      id: 2,
      title: "Adidas",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 80,
      img: Item2
    },
    {
      id: 3,
      title: "Vans",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 120,
      img: Item3
    },
    {
      id: 4,
      title: "White",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 260,
      img: Item4
    },
    {
      id: 5,
      title: "Cropped-sho",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 160,
      img: Item5
    },
    {
      id: 6,
      title: "Blues",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      price: 90,
      img: Item6
    }
  ],
  addedItems: [],
  total: 0
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      var addedItem = state.items.find(item => item.id === action.id);
      var existed_item = state.addedItems.find(item => action.id === item.id);
      if (existed_item) {
        addedItem.quantity += 1;
        return {
          ...state,
          total: state.total + addedItem.price
        };
      } else {
        addedItem.quantity = 1;
        let newTotal = state.total + addedItem.price;
        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal
        };
      }
    case ADD_QUANTITY:
      var addedItem = state.items.find(item => item.id === action.id);
      addedItem.quantity += 1;
      var newTotal = state.total + addedItem.price;
      return {
        ...state,
        total: newTotal
      };
    case SUB_QUANTITY:
      var addedItem = state.items.find(item => item.id === action.id);
      if (addedItem.quantity === 1) {
        let newItems = state.addedItems.filter(item => item.id !== action.id);
        let newTotal = state.total - addedItem.price;
        return {
          ...state,
          addedItems: newItems,
          total: newTotal
        };
      } else {
        addedItem.quantity -= 1;
        let newTotal = state.total - addedItem.price;
        return {
          ...state,
          total: newTotal
        };
      }
    case REMOVE_ITEM:
      var itemToRemove = state.addedItems.find(item => item.id === action.id);
      var new_items = state.addedItems.filter(item => item.id !== action.id);
      var newTotal = state.total - itemToRemove.quantity * itemToRemove.price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal
      };
    default:
      return state;
  }
};

export default cartReducer;

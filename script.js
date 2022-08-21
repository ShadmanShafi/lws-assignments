// initial state
const initialState = [
  {
    id: 0,
    value: 0,
    incrementBy: 1,
    decrementBy: 1,
  },
];

// action identifiers
const ADD_COUNTER = "addCounter";
const RESET_COUNTERS = "resetCounters";
const INCREMENT = "increment";
const DECREMENT = "decrement";

// action creators
const addCounter = () => {
  return {
    type: ADD_COUNTER,
  };
};

const resetCounter = () => {
  return {
    type: RESET_COUNTERS,
  };
};

const increment = (counterId, value) => {
  return {
    type: INCREMENT,
    payload: {
      counterId: counterId,
      value: value,
    },
  };
};

const decrement = (counterId, value) => {
  return {
    type: DECREMENT,
    payload: {
      counterId: counterId,
      value: value,
    },
  };
};

//helper functions
function nextCounterId(counters) {
  const maxId = counters.reduce(
    (maxId, counter) => Math.max(counter.id, maxId),
    -1
  );
  return maxId + 1;
}

function incrementHandler(id, incrementBy) {
  store.dispatch(increment(id, incrementBy));
}

function decrementHandler(id, decrementBy) {
  store.dispatch(decrement(id, decrementBy));
}

//reducer
function counterReducer(state = initialState, action) {
  if (action.type === ADD_COUNTER) {
    return [
      ...state,
      {
        id: nextCounterId(state),
        value: 0,
        incrementBy: Math.floor(Math.random() * 10) + 1,
        decrementBy: Math.floor(Math.random() * 10) + 1,
      },
    ];
  }

  if (action.type === RESET_COUNTERS) {
    return state.map((counter) => ({
      ...counter,
      value: 0,
    }));
  }

  if (action.type === INCREMENT) {
    const { counterId, value } = action.payload;

    return state.map((counter) => {
      if (counter.id === counterId) {
        return {
          ...counter,
          value: counter.value + value,
        };
      }
      return {
        ...counter,
      };
    });
  }

  if (action.type === DECREMENT) {
    const { counterId, value } = action.payload;
    return state.map((counter) => {
      if (counter.id === counterId) {
        return {
          ...counter,
          value: counter.value - value,
        };
      }
      return {
        ...counter,
      };
    });
  }

  return state;
}

//create store with reducer
const store = Redux.createStore(counterReducer);

//select dom elements
const countersContainer = document.getElementById("counters-container");
const addCounterButton = document.getElementById("add-counter");
const resetCounterButton = document.getElementById("reset-counter");

const render = () => {
  const state = store.getState();
  let countersMarkup = "";

  state.forEach((counter) => {
    countersMarkup += `<div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div class="text-2xl font-semibold">${counter.value}</div>
        <div class="flex space-x-3">
            <button class="bg-indigo-400 hover:bg-indigo-500 text-white px-3 py-2 rounded shadow" onclick="incrementHandler(${counter.id}, ${counter.incrementBy})">Increment</button>
            <button class="bg-red-400 hover:bg-red-500 text-white px-3 py-2 rounded shadow" onclick="decrementHandler(${counter.id}, ${counter.decrementBy})">Decrement</button>
        </div>
    </div>`;
  });

  countersContainer.innerHTML = countersMarkup;
};

// update UI initially
render();

store.subscribe(render);

// button click listeners
addCounterButton.addEventListener("click", () => {
  store.dispatch(addCounter());
});

resetCounterButton.addEventListener("click", () => {
  store.dispatch(resetCounter());
});

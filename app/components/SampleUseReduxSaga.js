import React from "react";
import { connect } from "react-redux";
import {
  decrementAction,
  incrementAction,
} from "../redux/customAction/countAction";
import { getUsersSampleAction } from "../redux/customAction/sampleUserAction";

const Sample = ({ dispatch, state, ...props }) => {
  const { count } = state.countReducer;
  const { error, loading, user } = state.SampleUserReducer;
  console.log("state", state);
  return (
    <>
      <div className="content d-flex justify-content-between">
        <div>
          <button onClick={() => dispatch(decrementAction(1))}>
            decrement
          </button>
        </div>
        <div>{count}</div>
        <div>
          <button onClick={() => dispatch(incrementAction(1))}>
            increment
          </button>
        </div>
      </div>
      <div className="content d-flex flex-column justify-content-center align-items-center">
        <div className="w-full d-flex justify-content-center align-items-center">
          <h1>users :</h1>
          <button
            className="h-25 w-100 ml-10"
            onClick={() => dispatch(getUsersSampleAction())}
          >
            get user
          </button>
        </div>
        <div>
          {loading && <p>loading...</p>}
          {!loading && user.length > 0 && user.map((u, i) => (<p key={i}>{u.name}</p>))}
          {user.length === 0 && !loading && <p>no user</p>}
          {error && !loading && <p>loading...</p>}
        </div>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sample);

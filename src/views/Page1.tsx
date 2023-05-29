import { useSelector, useDispatch } from "react-redux"
import numStates from "@/store/NumStates"

const View = () => {

    // 获取仓库数据
    const { num, sarr } = useSelector(((state: RootState) => ({
        num: state.numStatesReducer.num,
        sarr: state.arrStatesReducer.sarr
    })))

    const dispatch = useDispatch()

    const changeNum = () => {
        dispatch({ type: "add2", val: 100 })
    }

    const changeNum1 = () => {
        // dispatch({ type: "add1" })
        // 异步
        dispatch(numStates.asyncActions.asyncAdd1)
    }

    const changeArr = () => {
        dispatch({ type: "sarrpush", val: 100 })
    }

    return (
        <div className="home">
            <p>这是page1组件</p>
            <p>{num}</p>
            <button onClick={changeNum}>同步按钮</button>
            <button onClick={changeNum1}>异步按钮</button>
            <p>{sarr}</p>
            <button onClick={changeArr}>按钮</button>

        </div>
    );
};

export default View;

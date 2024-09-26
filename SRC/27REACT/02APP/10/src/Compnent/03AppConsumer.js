import React from 'react';
import AppContext from "./03AppContext";

const AppConsumer = () => {
    return (
        <AppContext.Consumer>
            {({ data,setData }) => (
                  <div>
                    <button onClick={() => setData("AppConsumer 에서 값 실행")}>Set Data</button>
                    <p>Data from AppContext: {data}</p>
                  </div>

            )}
        </AppContext.Consumer>
    );
};

export default AppConsumer;

import React from 'react';

const DataComponent= (props) => {
  const { width, count,weatherState} = props;

  const generateDivs = () => {
    const divs = [];

    for (let i = 0; i < count; i++) {
      let data = weatherState[i];
      const divStyle = {
        width: `${width}px`,
        height: '10px', // Fixed height
        background: `linear-gradient(to right, hsl(211.97deg 72.49% 62.94%) ${data.values}% , #999999 ${data.values === 0 ? 0 :100 - data.values}% )`,
      };
        divs.push(<div className='data-component' key={i} style={divStyle}></div>);
    }

    return divs;
  };

  return (
    <>
      <div id="div-container">{generateDivs()}</div>
    </>
  );
}



export default DataComponent;

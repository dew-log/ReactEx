import logo from "./logo.svg";
import "./App.css";

// import Child from './ex01_function/Child';
// import Child from './ex02_class/Child';
// import MyComponent from "./ex03_props/MyComponent";
// import Library from "./ex04_props/Library";
// import MyComponent from "./ex05_arrow/MyComponent";
// import MyComponent from "./ex06_destructing/MyComponent"; 
// import Team from "./ex07_compostion/Team";
import Comment from "./ex08_extraction/Comment";

function App() {
  // return (
    // <Child/>

    /*
    <>
      <MyComponent />
      <MyComponent name='리액트'/>
      <MyComponent name='React'/>
    </>
    */

    /*
    <>
      <Library title='유학' />
      <Library title='조선 선비들의' />
    </>
    */

    /*
    <>
      <MyComponent name="python" />
      <MyComponent name="javascript" />
      <MyComponent name="java" />
    </>
    */

    // <>
    //   <MyComponent name='리액트'>React Programming</MyComponent>
    //   <MyComponent name='React, Vue'>컴포넌트 제작</MyComponent>
    // </>

    // <Team title="재능 기부 교류 서비스"/>

  // );

    const author = {
      avatarUrl : "https://flexible.img.hani.co.kr/flexible/normal/960/960/imgdb/resize/2019/0121/00501111_20190121.webp",
      name : "강아지"
    };
    const text = "Thank You~";
    const date = "2025-06-13";

    return <Comment author={author} text={text} date={date} />
}

export default App;
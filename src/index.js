import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./jicheng.js"

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      document.title = `you cliceds ${count} times`;
    }, 1000);
  });
  return (
    <div>
      <p> You clicked {count} times </p>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
// class Square extends React.Component {
//   render() {
//     return (
//       <button
//         className="square"
//         onClick={() =>
//           this.props.onClick({
//             value: "X",
//           })
//         }
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
          <Example />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

const myh1 = React.createElement(
  "h1",
  { id: "myh1", title: "this is a h1" },
  "zheshiyigedadadeh1"
);
const mydiv = React.createElement("div", null, "这是一个div", myh1);
ReactDOM.render(mydiv, document.getElementById("aa"));

// 渲染页面上的dom结构，最好的方式就是写html代码
const mydiv1 = (
  <div id="mmm" title="ssss">
    aaaaaaaaaaaaaaaaa
  </div>
);
let a = 10;
let str = "国安法";
ReactDOM.render(
  <div>
    {str}
    {a}
  </div>,
  document.getElementById("bb")
);

// 第一种创建组建的方式
function Hello() {
  // 如果在一个组件中return一个null 则表示这个组件是空的 什么也不会渲染
  return <div>sss</div>;
}

const dog = {
  name: '大黄',
  age: 3,
  gender: '雄'
}
ReactDOM.render(<div>
  <Hello name={dog.name}></Hello>
  </div>, document.getElementById("bb"));

class Animal {
  // 这是类里面的构造器
  // 每个类中都有一个构造器 如果我们程序员没有指定构造器 默认会又一个隐形的 类似于constructor（）
  // 构造器作用 每当new这个类的时候必然会优先执行 构造器中的代码
  // 在class的{}区间内 只能写构造器，静态方法 ，静态属性，和实例方法
  // class 关键字内部还是用原来的的配方实现，所以说 把我们class关键字成为作为语法糖
  constructor(name, age) {
    // 实例属性
    this.name = name
    this.age = age
  }
  // 在class内部 通过static修饰的就是静态属性
  static info = 'eeee'
  // 实例方法 用的比较多
  jiao() {
    console.log('jiao')
  }
  // 不怎么会用的静态方法
  static show = function () {
    console.log('ssss')
  }
}

const a1 = new Animal('dahuang', 13)
console.log(a1)
a1.jiao()
// eg： a1 通过new 出来的实例访问到的属性叫做实例属性


// 静态属性
// 通过构造函数直接访问到的属性
function Person(name, age) {
  this.name = name
  this.age = age
}
// 实例方法 挂载在构造函数上
Person.prototype.say = function() {
  console.log('res')
}
// 静态方法 //
Person.show =function () {
  console.log('静态方法')
}
// info 属性被直接挂载到构造函数 所以是静态属性
Person.info = 'aaaaa'
const p1 = new Person('ddddd',15)
p1.say()
console.log(p1)
// console.log(p1.info) // undefined
// console.log(Person.info) // aaaaa
console.log(Animal.info) // eeee  Animal的静态属性
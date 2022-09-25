import logo from './logo.svg';
import './App.css';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function App() {

  return (
    <>
      <div className="main-container">
        <div className="item" >1</div>
        <div className="item">2</div>
        <div className="item">3</div>
        <div className="item">4</div>
      </div>
      <div className="container2">
        {numbers.map((item, index) => {
          return (
            <div className="item" key={index}>{item}</div>
          )
        })}
      </div>
      <div className="container3">
        {numbers.map((item, index) => {
          return (
            <div className="item" key={index}>{item}</div>
          )
        })}
      </div>
      <div className="container4">
        {numbers.map((item, index) => {
          return (
            <div className="item" key={index}>{item}</div>
          )
        })}
      </div>
      <div className="container5">
        {numbers.map((item, index) => {
          return (
            <div className="item" key={index}>{item}</div>
          )
        })}
      </div>
      <div className="container6 style1">
        {numbers.map((item, index) => {
          return (
            <div className="item" key={index}>{item}</div>
          )
        })}
      </div>
      <div className="container6 style2">
        {numbers.map((item, index) => {
          return (
            <div className="item" key={index}>{item}</div>
          )
        })}
      </div>
      <div className="container6 style3">
        {numbers.map((item, index) => {
          return (
            <div className="item" key={index}>{item}</div>
          )
        })}
      </div>
      <div className="container6 style4">
        {numbers.map((item, index) => {
          return (
            <div className="item" key={index}>{item}</div>
          )
        })}
      </div>
      <div className="container6 style5">
        {numbers.map((item, index) => {
          return (
            <div className="item" key={index}>{item}</div>
          )
        })}
      </div>
      <div className="container6 style6">
        {numbers.map((item, index) => {
          return (
            <div className="item" key={index}>{item}</div>
          )
        })}
      </div>
      <div className="container6 style7">
        {numbers.map((item, index) => {
          return (
            <div className="item" key={index}>{item}</div>
          )
        })}
      </div>
      <div className="container6 style8">
        {numbers.map((item, index) => {
          return (
            <div className="item" key={index}>{item}</div>
          )
        })}
      </div>
      <div className="container6 style9">
        {numbers.map((item, index) => {
          return (
            <div className="item" key={index}>{item}</div>
          )
        })}
      </div>
      <div className="container6 style10">
        {numbers.map((item, index) => {
          return (
            <div className="item" key={index}>{item}</div>
          )
        })}
      </div><div className="container6 style11">
        {numbers.map((item, index) => {
          return (
            <div className="item" key={index}>{item}</div>
          )
        })}
      </div>
      <div className="container6 style12">
        {numbers.map((item, index) => {
          return (
            <div className="item" key={index}>{item}</div>
          )
        })}
      </div>
      <div class="page">
        <h1>LATEST NEWS</h1>
        <div class="archive">
          <article class="article">1
            <hr class="image" />
            <hr />
          </article>
          <article class="article">2
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
          </article>
          <article class="article">3
            <hr />
            <hr />
            <hr />
          </article>
          <article class="article">4
            <hr class="image" /><hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
          </article>
          <article class="article">5
            <hr />
            <hr />
            <hr />
          </article>
          <article class="article">6
            <hr />
            <hr />
            <hr />
          </article>
          <article class="article">7
            <hr />
            <hr />
            <hr />
          </article>
          <article class="article">8
            <hr />
            <hr />
          </article>
          <article class="article">9
            <hr />
            <hr />
            <hr />
          </article>
          <article class="article">10
            <hr />
            <hr />
          </article>
          <article class="article">11
            <hr />
            <hr />
            <hr />
          </article>
          <article class="article">12
            <hr class="image" />
            <hr />
            <hr />
            <hr />
          </article>
          <article class="article">13
            <hr class="image" /><hr />
            <hr />
          </article>
          <article class="article">14
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
          </article>
          <article class="article">15
            <hr class="image" />
            <hr />
            <hr />
            <hr />
            <hr />
          </article>
          <article class="article">16
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
          </article>
          <article class="article">17
            <hr />
            <hr />
            <hr /></article>
        </div>
      </div>
    </>
  );
}

export default App;

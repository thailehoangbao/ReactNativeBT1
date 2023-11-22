import { useState } from 'react';
import './App.css';

function App() {
  const [r,setr] = useState(0);
  class Circle {
    private radius: number;

    constructor(radius: number) {
      this.radius = radius;
    }

    calculateCircumference(): number {
      const PI: number = Math.PI;
      return 2 * PI * this.radius;
    }

    calculateArea(): number {
      const PI: number = Math.PI;
      return PI * Math.pow(this.radius, 2);
    }

    public set ChangeRadius(value: number){
      this.radius = value;
    }
  }

  const hinhTron : Circle = new Circle(2);

  hinhTron.ChangeRadius = r;
  return (
    <div className="App">
      <h1>Bài Tập 1:</h1>
      <p>Hãy tạo một lớp đối tượng Circle với các yêu cầu sau :

        Có thuộc tính radius với kiểu dữ liệu là số
        Có phương thức khởi tạo
        Có hàm tính chu vi với kiểu dữ liệu trả về là kiểu số với công thức tính chu vi như sau : PI * radius * 2
        Có hàm tính diện tích với kiểu dữ liệu trả về là kiểu số với công thức : PI * radius ** 2
      </p>
      <input type="text" placeholder='Nhập bán kính hình tròn' id="banKinh"/>
      <button style={{color:"red"}} onClick={() => {
        const bankinh :any = document.querySelector('#banKinh');
        setr(bankinh.value);
      }}>Tính</button>
      <p>Kết quả Chu Vi: {hinhTron.calculateCircumference()} m</p>
      <p>---------------------------</p>

      <p>Kết quả Diện Tích: {hinhTron.calculateArea()} m2</p>

    </div>
  );
}

export default App;

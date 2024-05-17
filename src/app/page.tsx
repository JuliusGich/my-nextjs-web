import Image from "next/image";


export default function Home() {
  return (
    <main className="mainpage">
      <div className="dashboard">
        <h1>Dashboard</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eveniet cupiditate molestiae aut deserunt eaque consequuntur laborum modi quod! Obcaecati sed ullam maiores neque architecto illum non id numquam distinctio?</p>
      </div>
      <div className="image-info">
        <Image
        src ={'/homepage.jpg'}
        width={1400}
        height={100}
        />
      </div>
      <div className="content">
        <h1>comfortweb</h1>
        <hr></hr>
        <p>Welcome</p>
      </div>

    </main>
  
  )
}

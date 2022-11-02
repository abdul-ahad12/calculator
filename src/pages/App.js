import MainCard from "../component/sections/mainCard";
import MainLayout from "./mainLayout";



function App() {
  const mainElements = [
    {
      title: "Line",
      url: "/line.JPG",
      link: "/lineCal",
    },
    {
      title: "Circle",
      url: "/circle.JPG",
      link: "/circle",
    },
    {
      title: "Parabola",
      url: "/parabola.JPG",
      link: "/parabola",
    },
    {
      title: "Ellipse",
      url: "/ellipse.JPG",
      link: "/ellipse",
    },
    {
      title: "Hyperbola",
      url: "/hyperbola.JPG",
      link: "/hyperbola",
    },
  ];

  return (
    <MainLayout>
      <div className="w-full flex justify-center items-start  min-h-[35rem] my-5  ">
        <div className="w-90vw mx-3 flex flex-wrap items-center justify-center normal gap-11">
          {mainElements.map((data, index) => {
            return (
              <div key={index}>
                <MainCard title={data.title} url={data.url} link={data.link} />
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
}

export default App;

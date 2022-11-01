import MainCard from "../component/sections/mainCard";
import MainLayout from "./mainLayout";

function App() {
  const mainElements = [
    {
      title: "Line",
      url: "",
      link: "/lineCal",
    },
    {
      title: "Circle",
      url: "",
      link: "",
    },
    {
      title: "Parabola",
      url: "",
      link: "",
    },
    {
      title: "Ellipse",
      url: "",
      link: "",
    },
    {
      title: "Hypderbola",
      url: "",
      link: "",
    },
  ];

  return (
    <MainLayout>
      <div className="w-full flex justify-center  min-h-[35rem] my-11 ">
        <div className="w-90vw mx-3 flex flex-wrap items-center justify-center normal gap-11">
          {mainElements.map((data, index) => {
            return (
              <div key={index}>
                <MainCard title={data.title} link={data.link} />
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
}

export default App;

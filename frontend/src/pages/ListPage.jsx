import Filter from "../components/Filter";
import Card from "../components/Card";
import Map from "../components/Map";
import { Await, useLoaderData } from "react-router";
import React from "react";

const ListPage = () => {
  const { postsData } = useLoaderData();
  return (
    <div className="mb-10 flex gap-10">
      {/* Left Part */}
      <div className="w-3/5 flex flex-col gap-12">
        <Filter />
        <React.Suspense fallback={<div>Loading...</div>}>
          <Await resolve={postsData}>
            {(response) => (
              <div className="flex flex-col gap-10">
                {response.data.map((item) => (
                  <Card key={item.id} item={item} />
                ))}
              </div>
            )}
          </Await>
        </React.Suspense>
      </div>
      {/* Right Part */}
      <React.Suspense fallback={<div>Loading...</div>}>
        <Await resolve={postsData}>
          {(response) => {
            return (
              response.data.length > 0 && (
                <div className="w-2/5 h-[600px] mt-10">
                  <Map items={response.data} />
                </div>
              )
            );
          }}
        </Await>
      </React.Suspense>
    </div>
  );
};

export default ListPage;

// const ListPage = () => {
//   const data = useLoaderData();
//   console.log(data);
//   return (
//     <div className="mb-10 flex gap-10">
//       {/* Left Part */}
//       <div className="w-3/5 flex flex-col gap-12">
//         <Filter />
//         <div className="flex flex-col gap-10">
//           {data.map((item) => (
//             <Card key={item.id} item={item} />
//           ))}
//         </div>
//       </div>
//       {/* Right Part */}
//       {data.length > 0 && (
//         <div className="w-2/5 h-[600px] mt-10">
//           <Map items={data} />
//         </div>
//       )}
//     </div>
//   );
// };

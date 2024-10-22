import Image from "next/image";
import ProfilePic from "../../../../public/assets/profile_pic_1.jpg";
import Beach from "../../../../public/assets/beach_1.jpg";
import ReservationSidebar from "@/app/components/properties/ReservationSidebar";

const PropertyDetailsPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
        <Image
          fill
          src={Beach}
          className="object-cover w-full h-full"
          alt="beach house"
        />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="py-6 pr-4 col-span-3">
          <h1 className="mb-4 text-4xl">Property Name</h1>
          <span className="mb-6 block text-lg text-gray-600">
            {" "}
            4 guests - 2 bedrooms - 1 bathroom
          </span>
          <hr />
          <div className="py-6 flex items-center space-x-4">
            <Image
              src={ProfilePic}
              width={50}
              height={50}
              className="rounded-full"
              alt="The user name"
            />
            <p>
              <strong>John Doe </strong>is your host
            </p>
          </div>
          <hr />
          <p className="nt-6 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae non
            sequi, sunt nostrum delectus eos enim pariatur nulla sapiente
            consequuntur veritatis maxime exercitationem accusamus aut. Illo
            beatae repudiandae natus iste?
          </p>
        </div>
        {/* <div className=""> */}
        <ReservationSidebar />
        {/* </div> */}
      </div>
    </main>
  );
};

export default PropertyDetailsPage;

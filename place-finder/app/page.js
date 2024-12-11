import BusinessList from "@/components/BusinessList";
import CategoryList from "@/components/CategoryList";
import Map from "@/components/Map";
import MapBox from "@/components/MapBox";
import SearchBar from "@/components/SearchBar";
import SideNav from "@/components/SideNav";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      <SideNav/>
      <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-10 w-full mt-6 gap-8">
        <div>
          <SearchBar/>
          <CategoryList/>
          <BusinessList/>
        </div>
        <div>
          <MapBox/>
        </div>
      </div>
    </div>
  );
}

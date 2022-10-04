import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"
function CardComponent({ name, image, imagepng, region, capital, population }) {
  const navigate = useNavigate();

  const slug = name.toLowerCase().split(" ").join("-");
  return (
    <div className="card shadow-2xl rounded-md border-1 border-zinc-300"
      
    >
        <LazyLoadImage
          src={image}
          placeholderSrc={imagepng}
          effect="blur"
          alt={name}
          className="card-image rounded-t-md"
        />
      <div className="card-content flex flex-col items-start
       justify-between p-3">
        <div>
          <h2 onClick={() => navigate(`/country/${slug}`)} 
          className="font-extrabold
          text-xl hover:cursor-pointer text-blue-500">
            {name}
            {/* {name.length > 25 ? `${name.substring(0, 26)}...` : name} */}
          </h2>
        </div>

        <div className="font-semibold">
          <p >
            Population:
            <span > {population}</span>
          </p>
          <p>
            Region:
            <span > {region}</span>
          </p>
          <p>
            Capital:
            <span > {capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export { CardComponent };

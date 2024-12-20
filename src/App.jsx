import Container from "./components/Container";
import Flex from "./components/Flex";
import Image from "./components/Image";
import Logo from "./assets/logo.png";
import Model from "./assets/Mothel.png";
import Sweats from "./assets/Sweats.png";
import Jeans from "./assets/Jeans.png";
import Model2 from "./assets/Model2.png";
import Model3 from "./assets/model3.png";
import Model4 from "./assets/model4.png";
import Baskets from "./assets/Baskets.png";
import Menu from "./components/Menu";
import Button from "./components/Button";
import Heading from "./components/Heading";

function App() {
  return (
    <>
      {/* Header Part Start  */}
      <div className="py-5 bg-primaryColor">
        <Container>
          <Flex className={"justify-between items-center"}>
            <div className="">
              <Image src={Logo} alt={Logo} />
            </div>
            <div className="pt-2">
              <Flex className={"gap-x-10 font-pop font-semibold text-2xl "}>
                <Menu mText={"Man"} />
                <Menu mText={"Woman"} />
                <Menu mText={"Kids"} />
                <Menu mText={"Collection"} />
                <Menu mText={"Trends"} />
              </Flex>
            </div>
            <div className="flex gap-x-4">
              <Button
                btnText={"Login"}
                className={
                  "px-[30px] py-[15px] border border-borderColor rounded-xl hover:bg-borderColor font-pop font-semibold text-2xl shadow-md"
                }
              />
              <Button
                btnText={"SigUp"}
                className={
                  "px-[30px] py-[15px] border border-borderColor rounded-xl hover:bg-borderColor font-pop font-semibold text-2xl shadow-md"
                }
              />
            </div>
          </Flex>
        </Container>
      </div>
      {/* Header Part End  */}
      <div className="py-[150px] bg-primaryColor">
        <Container className={"max-w-bannerContainer"}>
          <Flex>
            <div className="w-1/2">
              <Heading
                text={"Find The Best Fashion Style For You"}
                as={"h1"}
                className={"font-pop font-semibold text-[64px] pr-[89px]"}
              />
              <Heading
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra."
                }
                as={"p"}
                className={
                  "font-pop text-[22px] pr-[95px] leading-normal my-[30px]"
                }
              />
              <Button
                btnText={"Shop Now"}
                className={
                  "px-[30px] py-[15px] bg-black rounded-xl font-pop font-semibold text-2xl text-white"
                }
              />
            </div>
            <div className="w-1/2">
              <Image src={Model} />
            </div>
          </Flex>
        </Container>
      </div>
      <div>
        <Container>
          <Heading
            text="New Collection"
            as={"h3"}
            className="pt-[60px] py-[125px] text-center font-bold text-black text-[64px] font-Ruhl "
          />

          <div className="pb-[200px]">
            <Flex className={"justify-between"}>
              <div className="w-[32%] relative">
                <Image src={Sweats} alt={Sweats} className={"w-full"} />
                <Button
                  btnText={"Sweater"}
                  className={
                    "px-[150px] py-4 bg-white text-black absolute  bottom-12 left-[50%] -translate-x-[50%] rounded-xl text-[24px] pop "
                  }
                />
              </div>
              <div className="w-[32%] relative">
                <Image src={Jeans} alt={Jeans} className={"w-full h-full"} />
                <Button
                  btnText={"Jeans"}
                  className={
                    "px-[150px] py-4 bg-white text-black absolute  bottom-12 left-[50%] -translate-x-[50%] rounded-xl text-[24px] pop "
                  }
                />
              </div>
              <div className="w-[32%] relative">
                <Image
                  src={Baskets}
                  alt={Baskets}
                  className={"w-full h-full"}
                />
                <Button
                  btnText={"Baskets"}
                  className={
                    "px-[150px] py-4 bg-white text-black absolute  bottom-12 left-[50%] -translate-x-[50%] rounded-xl text-[24px] pop "
                  }
                />
              </div>
            </Flex>
          </div>
        </Container>
      </div>

      <div className=" pt-28 mb-80">
        <Container className={"max-w-6xl"}>
          <Flex className={"justify-between items-center space-x-28"}>
            <div className="counter_left">
              <Image img src={Model2} />
            </div>
            <div className="font-poppins font-semibold text-2xl relative">
              <Heading
                as={"h3"}
                text={"Best Fashion Since 2010"}
                className={
                  "text-6xl font-Ruhl font-bold max-w-md mb-10"
                }
              />
              <Heading
                as={"p"}
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. "
                }
                className={"max-w-md mb-32 font-pop"}
              />
              <div className="py-16 px-2 rounded-[20px] bg-[#FEECC8] absolute right-[0px] mt-12 z-[-1]">
                <Flex>
                  <div className="border-r-2 border-black px-8">
                    <Heading
                      as={"p"}
                      text={"2020"}
                      className={"font-podkova font-bold text-6xl "}
                    />
                    <Heading
                      as={"p"}
                      text={"Founded"}
                      className={"font-medium text-2xl "}
                    />
                  </div>
                  <div className="border-r-2 border-black px-8">
                    <Heading
                      as={"p"}
                      text={"5000+"}
                      className={"font-podkova font-bold text-6xl "}
                    />
                    <Heading
                      as={"p"}
                      text={"Product Sold"}
                      className={"font-medium text-2xl "}
                    />
                  </div>
                  <div className="counter_item px-8">
                    <Heading
                      as={"p"}
                      text={"4500+"}
                      className={"font-podkova font-bold text-6xl "}
                    />
                    <Heading
                      as={"p"}
                      text={"Best Reviews"}
                      className={"font-medium text-2xl "}
                    />
                  </div>
                </Flex>
              </div>
            </div>
          </Flex>
        </Container>
      </div>

      <div className="mt-[120px] bg-[#CFA485] pt-[60px] pb-[170px]">
        <Container>
          <Flex>
            <div className="w-1/2">
              <Heading
                text={"Best Seller Product"}
                as="h4"
                className="font-bold text-[64px] font-Ruhl pr-[120px] text-white"
              />
              <Heading
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus."
                }
                as="p"
                className="font-bold text-white text-[24px] font-Ruhl pr-[60px] leading-[34px]"
              />
              <Button
                btnText={"Learn MORE"}
                className={
                  "px-[30px] py-[15px] bg-black rounded-xl font-pop font-semibold text-2xl text-white mt-11"
                }
              />
            </div>
            <div className=" mr-14">
              <Flex>
                <div>
                  <Image src={Model3} alt={Model3} className={"max-w-md"} />
                  <div className="bg-white pl-[22px] py-[22px]">
                    <div className="rating rating-sm rating-half">
                      <input
                        type="radio"
                        name="rating-10"
                        className="rating-hidden"
                      />
                      <input
                        type="radio"
                        name="rating-10"
                        className="mask mask-star-2 mask-half-1 bg-[#FFAF37]"
                      />
                      <input
                        type="radio"
                        name="rating-10"
                        className="mask mask-star-2 mask-half-2 bg-[#FFAF37]"
                      />
                      <input
                        type="radio"
                        name="rating-10"
                        className="mask mask-star-2 mask-half-1 bg-[#FFAF37]"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-10"
                        className="mask mask-star-2 mask-half-2 bg-[#FFAF37]"
                      />
                      <input
                        type="radio"
                        name="rating-10"
                        className="mask mask-star-2 mask-half-1 bg-[#FFAF37]"
                      />
                      <input
                        type="radio"
                        name="rating-10"
                        className="mask mask-star-2 mask-half-2 bg-[#FFAF37]"
                      />
                      <input
                        type="radio"
                        name="rating-10"
                        className="mask mask-star-2 mask-half-1 bg-[#FFAF37]"
                      />
                      <input
                        type="radio"
                        name="rating-10"
                        className="mask mask-star-2 mask-half-2 bg-[#FFAF37]"
                      />
                      <input
                        type="radio"
                        name="rating-10"
                        className="mask mask-star-2 mask-half-1 bg-[#FFAF37]"
                      />
                      <input
                        type="radio"
                        name="rating-10"
                        className="mask mask-star-2 mask-half-2 bg-[#FFAF37]"
                      />
                    </div>

                    <Heading
                      text="Sweater Shirt"
                      as={"h4"}
                      className="text-[22px] font-semibold font-pop "
                    />
                    <p className="font-[24px] font-pop text-[#C4C4C4] ">
                      $45.99 <span className=" text-black pl-10">$35.99</span>
                    </p>
                  </div>
                </div>
                <div className="pl-8">
                  <Image src={Model4} alt={Model4} className={"max-w-md "} />
                  <div className="bg-white pl-[22px] py-[22px]">
                    <div className="rating rating-sm rating-half">
                      <input
                        type="radio"
                        name="rating-10"
                        className="rating-hidden"
                      />
                      <input
                        type="radio"
                        name="rating-10"
                        className="mask mask-star-2 mask-half-1 bg-[#FFAF37]"
                      />
                      <input
                        type="radio"
                        name="rating-10"
                        className="mask mask-star-2 mask-half-2 bg-[#FFAF37]"
                      />
                      <input
                        type="radio"
                        name="rating-10"
                        className="mask mask-star-2 mask-half-1 bg-[#FFAF37]"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-10"
                        className="mask mask-star-2 mask-half-2 bg-[#FFAF37]"
                      />
                      <input
                        type="radio"
                        name="rating-10"
                        className="mask mask-star-2 mask-half-1 bg-[#FFAF37]"
                      />
                      <input
                        type="radio"
                        name="rating-10"
                        className="mask mask-star-2 mask-half-2 bg-[#FFAF37]"
                      />
                      <input
                        type="radio"
                        name="rating-10"
                        className="mask mask-star-2 mask-half-1 bg-[#FFAF37]"
                      />
                      <input
                        type="radio"
                        name="rating-10"
                        className="mask mask-star-2 mask-half-2 bg-[#FFAF37]"
                      />
                      <input
                        type="radio"
                        name="rating-10"
                        className="mask mask-star-2 mask-half-1 bg-[#FFAF37]"
                      />
                      <input
                        type="radio"
                        name="rating-10"
                        className="mask mask-star-2 mask-half-2 bg-[#FFAF37]"
                      />
                    </div>

                    <Heading
                      text="Sweater Shirt"
                      as={"h4"}
                      className="text-[22px] font-semibold font-pop "
                    />
                    <p className="font-[24px] font-pop text-[#C4C4C4] ">
                      $45.99 <span className=" text-black pl-10">$35.99</span>
                    </p>
                  </div>
                </div>
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
}

export default App;

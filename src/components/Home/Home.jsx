import React from "react";
import { Link } from "react-router-dom";
import logo from "../Menus/images/LeanTaste.png";
import good from "../Menus/images/good.png";
import hotel from "../Menus/images/hotel.png";
import reg from "../Menus/images/reg.png";
import "./home.css";

function Home() {
	return (
		<div className="w-full home text-white flex flex-col bg-[#2b2a2a]">
			<div className="flex p-6 flex-col">
				<img className="w-[20%] min-w-[150px] " src={logo} alt="" />
				<p className="mt-2">Here to eat? Enjoy the food</p>
			</div>
			<h1 className="font-bold mt-[5vh] text-center text-4xl">
				Register your restaurant in LeanTaste
			</h1>
			<p className="text-center text-1xl mt-2">
				Our aim is to boost your restaurants to five stars and recommend it to
				various heavy clients
			</p>
			<div
				className="flex text-white
                justify-center mt-[15vh] mx-auto w-full items-center"
			>
				<Link
					className="py-3 px-[8%]
                 hover:bg-green-800 bg-[#0B6041] rounded-lg border-2"
					to="/signup"
				>
					Register
				</Link>
				<Link
					className="py-3 hover:bg-green-800  ml-4 px-[7%] border-white rounded-lg border-2"
					to="/login"
				>
					{" "}
					Already registered? Signin
				</Link>
			</div>
			<h1 className="text-3xl text-center mt-3">How it works</h1>
			<div className="grid card grid-cols-3  gap-9 px-[5%] mt-6">
				<div className=" bg-white h-[37vh]  text-black rounded-lg flex w-full flex-col items-center justify-center">
					<img className="w-[120px]" src={reg} alt="" />
					<h1 className="text-center text-2xl font-semibold mt-2">Step 1</h1>
					<p className="text-1xl text-center mt-3">Register your restaurant</p>
				</div>
				<div className=" bg-white h-[37vh]  text-black rounded-lg flex w-full flex-col items-center justify-center">
					<img className="w-[120px]" src={hotel} alt="" />
					<h1 className="text-center text-2xl font-semibold mt-2">Step 2</h1>
					<p className="text-1xl text-center mt-3">
						Create your restaurant Profile
					</p>
				</div>
				<div className=" bg-white h-[37vh]  text-black rounded-lg flex w-full flex-col items-center justify-center">
					<img className="w-[120px]" src={good} alt="" />
					<h1 className="text-center text-2xl font-semibold mt-2">Step 3</h1>
					<p className="text-1xl text-center mt-3">Start receiving orders</p>
				</div>
			</div>
			<div className="flex flex-col w-full mt-4">
                <h1 className="text-center font-bold text-4xl">Don't leave your phone!</h1>
				<div className="flex w-full mt-4">
					<img src="src/images/mobile.png" alt="" />
                    <div className="flex flex-col w-1/2 mt-5 text-xl">
                        <h1 className="text-3xl font-semibold">Introducing LeanTaste mobile App</h1>
                        <p className="mt-5">You can now use your mobile app to order food
                             or create your own restaurant without leaving your phone.
                             Just make sure you know what you want. This app is available on all platforms whether you
                             are using iPhone or android
                             </p>
							 <div className="flex mt-5 items-center">
								<img className="w-[200px]" src="src/images/play.png" alt="" />
								<img className="w-[160px]" src="src/images/store.svg" alt="" />
							 </div>
                    </div>
				</div>
			</div>
            <div className="flex px-[10%] h-[30vh] w-full mt-7 bg-[#0000004f] justify-between">
                <div className="flex p-3 flex-col">
			    	<img className="w-[20%] min-w-[150px] " src={logo} alt="" />
			    	<p className="mt-2">Here to eat? Enjoy the food</p>
			    </div>
                <div className="flex mt-3 flex-col">
                    <h1 className="text-xl font-semibold">About Us</h1>
                    <p className="mt-5">Smart Ordering</p>
                    <p>Restaurant Registering</p>
                    <p>Home delivery</p>
                </div>
                <div className="flex mt-3 flex-col">
                    <h1 className="text-xl font-semibold">Features</h1>
                    <p className="mt-5">Smart Ordering</p>
                    <p>Restaurant Registering</p>
                    <p>Home delivery</p>
                </div>
                <div className="flex mt-3 flex-col">
                    <h1 className="text-xl font-semibold">Contact Us</h1>
                    <p className="mt-5">Facebook</p>
                    <p>Instagram</p>
                    <p>+250 78123456</p>
                </div>
            </div>
		</div>
	);
}

export default Home;

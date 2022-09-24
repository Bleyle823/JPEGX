import React from "react";
import Image from 'next/image'

export default function HeroSection() {
  return (

    
    <div className="relative mt-10 min-h-screen overflow-hidden">

      <div className="relative flex flex-col items-center justify-center">
        <div className="relative top-32  font-Manrope">
          <h1 className="text-5xl font-extrabold sm:text-7xl">
          Decentralized NFT Options
          </h1>
          <p className="flex my-4 align- font-medium align-">
        Earn, hedge and speculate on your favourite NFTs
          </p>
          <div className="flex justify-between">
          <p className="flex my-4 max-w-xl align- font-medium align-">
        Liquidity Providers<br/>Earn<br/>Pool your NFTs at copetitive strike prices and earn more yield on your assets.
          </p>
          
          <p className="flex my-4 align- font-medium align-">
        NFT Owners
          </p>
          <p className="flex my-4 align- font-medium align-">
        NFT Traders
          </p>
           
          </div>
        </div>
      </div>
      <div className="relative   top-[10vh] max-w-full sm:top-0 ">
        <div className="absolute w-full object-contain">
          <img src="circle.png" alt="" className="relative  object-fill" />
        </div>
      </div>
    </div>
    
  );
}
               


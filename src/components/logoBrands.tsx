import React from "react";
import Image from "next/image";
import BrandLogo1 from '@/assets/brand-logos/netflix-logo.svg';
import BrandLogo2 from '@/assets/brand-logos/united-nations-logo.svg';
import BrandLogo3 from '@/assets/brand-logos/lupl-logo.svg';
import BrandLogo4 from '@/assets/brand-logos/brenntag-logo.svg';
import BrandLogo5 from '@/assets/brand-logos/telekom-logo.svg';
import BrandLogo6 from '@/assets/brand-logos/zignaly-logo.svg';
import BrandLogo7 from '@/assets/brand-logos/hbo-logo.svg';
import BrandLogo8 from '@/assets/brand-logos/cisco-logo.svg';
import BrandLogo9 from '@/assets/brand-logos/crowdstrike-logo.svg';
import BrandLogo10 from '@/assets/brand-logos/samsung-logo.svg';
import BrandLogo11 from '@/assets/brand-logos/google-logo.svg';
import BrandLogo12 from '@/assets/brand-logos/mome-logo.svg';
import BrandLogo13 from '@/assets/brand-logos/klaviyo-logo.svg';
import BrandLogo14 from '@/assets/brand-logos/spotify-logo.svg';
import BrandLogo15 from '@/assets/brand-logos/coinbase-logo.svg';
import BrandLogo16 from '@/assets/brand-logos/microsoft-logo.svg';

const LogoBrands = () => {
  return (
    <div>

      <section className="bg-white py-40 lg:h-screen md:flex lg:items-center lg:justify-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl text-black w-full text-center mb-12 aeonik-trial-font">2000+ companies are focused using Frame.</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="p-5 text-center">
              <a href="javascript:void(0);" className="">
                <Image src={BrandLogo1} alt="Netflix" />
              </a>
            </div>
            <div className="p-5 text-center">
              <a href="javascript:void(0);" className="">
                <Image src={BrandLogo2} alt="United Nations" />
              </a>
            </div>
            <div className="p-5 text-center">
              <a href="javascript:void(0);" className="">
                <Image src={BrandLogo3} alt="Netflix" />
              </a>
            </div>
            <div className="p-5 text-center">
              <a href="javascript:void(0);" className="">
                <Image src={BrandLogo4} alt="Netflix" />
              </a>
            </div>
            <div className="p-5 text-center">
              <a href="javascript:void(0);" className="">
                <Image src={BrandLogo5} alt="Netflix" />
              </a>
            </div>
            <div className="p-5 text-center">
              <a href="javascript:void(0);" className="">
                <Image src={BrandLogo6} alt="Netflix" />
              </a>
            </div>
            <div className="p-5 text-center">
              <a href="javascript:void(0);" className="">
                <Image src={BrandLogo7} alt="Netflix" />
              </a>
            </div>
            <div className="p-5 text-center">
              <a href="javascript:void(0);" className="">
                <Image src={BrandLogo8} alt="Netflix" />
              </a>
            </div>
            <div className="p-5 text-center">
              <a href="javascript:void(0);" className="">
                <Image src={BrandLogo9} alt="Netflix" />
              </a>
            </div>
            <div className="p-5 text-center">
              <a href="javascript:void(0);" className="">
                <Image src={BrandLogo10} alt="Netflix" />
              </a>
            </div>
            <div className="p-5 text-center">
              <a href="javascript:void(0);" className="">
                <Image src={BrandLogo11} alt="Netflix" />
              </a>
            </div>
            <div className="p-5 text-center">
              <a href="javascript:void(0);" className="">
                <Image src={BrandLogo12} alt="Netflix" />
              </a>
            </div>
            <div className="p-5 text-center">
              <a href="javascript:void(0);" className="">
                <Image src={BrandLogo13} alt="Netflix" />
              </a>
            </div>
            <div className="p-5 text-center">
              <a href="javascript:void(0);" className="">
                <Image src={BrandLogo14} alt="Netflix" />
              </a>
            </div>
            <div className="p-5 text-center">
              <a href="javascript:void(0);" className="">
                <Image src={BrandLogo15} alt="Netflix" />
              </a>
            </div>
            <div className="p-5 text-center">
              <a href="javascript:void(0);" className="">
                <Image src={BrandLogo16} alt="Netflix" />
              </a>
            </div>
          </div>
        </div>
      </section>
</div>
    
  );
};

export default LogoBrands;
import React from "react";
import Image from "next/image";
import AndroidIcon from '@/assets/technology-icon/android-icon.svg';
import ReactIcon from '@/assets/technology-icon/react-icon.svg';
import AppleIcon from '@/assets/technology-icon/apple-icon.svg';
import ObkectCIcon from '@/assets/technology-icon/object-c-icon.svg';
import KotlinIcon from '@/assets/technology-icon/kotlin-icon.svg';
import XamarinIcon from '@/assets/technology-icon/xamarin-icon.svg';
import FlutterIcon from '@/assets/technology-icon/flutter-icon.svg';
import HtmlIcon from '@/assets/technology-icon/html-icon.svg';
import JavscriptIcon from '@/assets/technology-icon/javascript-icon.svg';
import CssIcon from '@/assets/technology-icon/css-icon.svg';
import TypescriptlIcon from '@/assets/technology-icon/typescript-icon.svg';
import AngularIcon from '@/assets/technology-icon/angular-icon.svg';
import VueIcon from '@/assets/technology-icon/vue-icon.svg';
import NodeIcon from '@/assets/technology-icon/node-icon.svg';
import DotnetIcon from '@/assets/technology-icon/dotnet-icon.svg';
import ChashIcon from '@/assets/technology-icon/c-hash-icon.svg';
import PhpIcon from '@/assets/technology-icon/php-icon.svg';
import JavaIcon from '@/assets/technology-icon/java-icon.svg';
import ScalaIcon from '@/assets/technology-icon/scala-icon.svg';
import PythonIcon from '@/assets/technology-icon/python-icon.svg';
import MongodbIcon from '@/assets/technology-icon/mongodb-icon.svg';
import MysqlIcon from '@/assets/technology-icon/mysql-icon.svg';
import PostgressIcon from '@/assets/technology-icon/postgress-icon.svg';
import ReditsIcon from '@/assets/technology-icon/redits-icon.svg';
import FirebaseIcon from '@/assets/technology-icon/Firebase-icon.svg';
import ElasticsearchIcon from '@/assets/technology-icon/elasticsearch-icon.svg';
import AwsIcon from '@/assets/technology-icon/aws-icon.svg';
import GitlabIcon from '@/assets/technology-icon/gitlab-icon.svg';
import JenkinsIcon from '@/assets/technology-icon/jenkins-icon.svg';
import WhmIcon from '@/assets/technology-icon/whm-icon.svg';
import NginxIcon from '@/assets/technology-icon/nginx-icon.svg';
import { motion } from 'framer-motion';
import { fadeIn } from "@/components/AnimationVariants";

const OurTechnology = () => {
  return (
    <div className="overflow-hidden">
      {/* mobile app technology start */}
    <motion.div     
    variants={fadeIn("up", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: true, amount: 0.2}}
    className="flex flex-col md:flex-row items-center border-b border-[#DAD2C7] py-6 3xl:py-8 gap-6">
        <h2 className="tehcnology_name 2xl:text-5xl lg:text-4xl text-3xl text-[#878787] md:w-1/4 2xl:w-[27%] 3xl:w-4/12 w-full text-center sm:text-left font-aeonik">Mobile App</h2>
        <div className="gap-3 flex flex-col md:w-3/4 2xl:w[73%] 3xl:w-8/12 sm:flex-row w-full flex-wrap items-center">
            <span className="2xl:text-xl lg:text-sm text-lg bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
              <Image src={AndroidIcon} alt="Android" loading="lazy" className="inline-block me-1 w-8" />
              Android
            </span>
            <span className="2xl:text-xl lg:text-sm text-lg bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
              <Image src={ReactIcon} alt="React Native" loading="lazy" className="inline-block me-1 w-8" />
              React Native
            </span>
            <span className="2xl:text-xl lg:text-sm text-lg bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
              <Image src={AppleIcon} alt="Swift" loading="lazy" className="inline-block me-1 w-8" />
              Swift
            </span>
            <span className="2xl:text-xl lg:text-sm text-lg bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
              <Image src={ObkectCIcon} alt="Objective C" loading="lazy" className="inline-block me-1 w-8" />
              Objective C
            </span>
            <span className="2xl:text-xl lg:text-sm text-lg bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
              <Image src={KotlinIcon} alt="Kotlin" loading="lazy" className="inline-block me-1 w-8" />
              Kotlin
            </span>
            <span className="2xl:text-xl lg:text-sm text-lg bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
              <Image src={XamarinIcon} alt="Xamarin" loading="lazy" className="inline-block me-1 w-8" />
              Xamarin
            </span>
            <span className="2xl:text-xl lg:text-sm text-lg bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
              <Image src={FlutterIcon} alt="Flutter" loading="lazy" className="inline-block me-1 w-8" />
              Flutter
            </span>
        </div>
    </motion.div>

    {/* front-end technology start */}
    <motion.div 
    variants={fadeIn("up", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: true, amount: 0.2}}
    className="flex flex-col md:flex-row items-center border-b border-[#DAD2C7] py-6 3xl:py-8 gap-6">
    <h2 className="tehcnology_name 2xl:text-5xl lg:text-4xl text-3xl text-[#878787] md:w-1/4 2xl:w-[27%] 3xl:w-4/12 w-full text-center sm:text-left font-aeonik">Front-end </h2>
    <div className="gap-3 flex flex-col md:w-3/4 2xl:w[73%] 3xl:w-8/12 sm:flex-row w-full flex-wrap items-center ">
        <span className="2xl:text-xl lg:text-sm text-lg bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={HtmlIcon} alt="HTML5" loading="lazy" className="inline-block me-1 w-8" />
          HTML5
        </span>
        <span className="2xl:text-xl lg:text-sm text-lg bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={JavscriptIcon} alt="JavaScript" loading="lazy" className="inline-block me-1 w-8" />
          JavaScript
        </span>
        <span className="2xl:text-xl lg:text-sm text-lg bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={CssIcon} alt="CSS3" loading="lazy" className="inline-block me-1 w-8" />
          CSS3
        </span>
        <span className="2xl:text-xl lg:text-sm text-lg bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={TypescriptlIcon} alt="TypeScript" loading="lazy" className="inline-block me-1 w-8" />
          TypeScript
        </span>
        <span className="2xl:text-xl lg:text-sm text-lg bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={ReactIcon} alt="React" loading="lazy" className="inline-block me-1 w-8" />
          React
        </span>
        <span className="2xl:text-xl lg:text-sm text-lg bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={AngularIcon} alt="Angular" loading="lazy" className="inline-block me-1 w-8" />
          Angular
        </span>
        <span className="2xl:text-xl lg:text-sm text-lg bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={VueIcon} alt="Vue" loading="lazy" className="inline-block me-1 w-8" />
          Vue
        </span>
    </div>
    </motion.div>

    {/* back-end technology start */}
    <motion.div 
    variants={fadeIn("up", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: true, amount: 0.2}}
    className="flex flex-col md:flex-row items-center border-b border-[#DAD2C7] py-6 3xl:py-8 gap-6">
    <h2 className="tehcnology_name 2xl:text-5xl lg:text-4xl text-3xl text-[#878787] md:w-1/4 2xl:w-[27%] 3xl:w-4/12 w-full text-center sm:text-left font-aeonik">Back-end</h2>
    <div className="gap-3 flex flex-col md:w-3/4 2xl:w[73%] 3xl:w-8/12 sm:flex-row w-full flex-wrap items-center">
        <span className="2xl:text-xl lg:text-sm text-lg bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={NodeIcon} alt="Node" loading="lazy" className="inline-block me-1 w-8" />
          Node
        </span>
        <span className="2xl:text-xl lg:text-sm text-lg bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={DotnetIcon} alt=".NET" loading="lazy" className="inline-block me-1 w-8" />
          .NET
        </span>
        <span className="2xl:text-xl lg:text-sm text-lg bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={ChashIcon} alt="C#" loading="lazy" className="inline-block me-1 w-8" />
          C#
        </span>
        <span className="2xl:text-xl lg:text-sm text-lg bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={PhpIcon} alt="PHP" loading="lazy" className="inline-block me-1 w-8" />
          PHP
        </span>
        <span className="2xl:text-xl lg:text-sm text-lg bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={JavaIcon} alt="Java" loading="lazy" className="inline-block me-1 w-8" />
          Java
        </span>
        <span className="2xl:text-xl lg:text-sm text-lg bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={ScalaIcon} alt="Scala" loading="lazy" className="inline-block me-1 w-8" />
          Scala
        </span>
        <span className="2xl:text-xl lg:text-sm text-lg bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={PythonIcon} alt="Python" loading="lazy" className="inline-block me-1 w-8" />
          Python
        </span>
    </div>
    </motion.div>

    {/* database technology start */}
    <motion.div 
    variants={fadeIn("up", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: true, amount: 0.2}}
    className="flex flex-col md:flex-row items-center border-b border-[#DAD2C7] py-6 3xl:py-8 gap-6">
    <h2 className="tehcnology_name 2xl:text-5xl lg:text-4xl text-3xl text-[#878787] md:w-1/4 2xl:w-[27%] 3xl:w-4/12 w-full text-center sm:text-left font-aeonik">Database</h2>
    <div className="gap-3 flex flex-col md:w-3/4 2xl:w[73%] 3xl:w-8/12 sm:flex-row w-full flex-wrap items-center">
        <span className="2xl:text-xl lg:text-sm text-lg bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={MongodbIcon} alt="MongoDB" loading="lazy" className="inline-block me-1 w-8" />
          MongoDB
        </span>
        <span className="2xl:text-xl lg:text-sm text-lg bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={MysqlIcon} alt="MySQL" loading="lazy" className="inline-block me-1 w-8" />
          MySQL
        </span>
        <span className="2xl:text-xl lg:text-sm text-lg bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={PostgressIcon} alt="PostgreSQL" loading="lazy" className="inline-block me-1 w-8" />
          PostgreSQL
        </span>
        <span className="2xl:text-xl lg:text-sm text-lg bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={ReditsIcon} alt="Redis" loading="lazy" className="inline-block me-1 w-8" />
          Redis
        </span>
        <span className="2xl:text-xl lg:text-sm text-lg bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={FirebaseIcon} alt="Firebase" loading="lazy" className="inline-block me-1 w-8" />
          Firebase
        </span>
        <span className="2xl:text-xl lg:text-sm text-lg bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={ElasticsearchIcon} alt="Elasticsearch" loading="lazy" className="inline-block me-1 w-8" />
          Elasticsearch
        </span>
    </div>
    </motion.div>

    {/* server technology start */}
    <motion.div 
    variants={fadeIn("up", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: true, amount: 0.2}}
    className="flex flex-col  md:flex-row items-center pt-6 3xl:pt-8 gap-6">
    <h2 className="tehcnology_name 2xl:text-5xl lg:text-4xl text-3xl text-[#878787] md:w-1/4 2xl:w-[27%] 3xl:w-4/12 w-full text-center sm:text-left font-aeonik">Server</h2>
    <div className="gap-3 flex flex-col md:w-3/4 2xl:w[73%] 3xl:w-8/12 sm:flex-row w-full flex-wrap items-center">
        <span className="2xl:text-xl lg:text-sm text-lg bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={AwsIcon} alt="AWS" loading="lazy" className="inline-block me-1 w-8" />
          AWS
        </span>
        <span className="2xl:text-xl lg:text-sm text-lg bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={GitlabIcon} alt="GitLab" loading="lazy" className="inline-block me-1 w-8" />
          GitLab
        </span>
        <span className="2xl:text-xl lg:text-sm text-lg bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={JenkinsIcon} alt="Jenkins" loading="lazy" className="inline-block me-1 w-8" />
          Jenkins
        </span>
        <span className="2xl:text-xl lg:text-sm text-lg bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={WhmIcon} alt="WHM" loading="lazy" className="inline-block me-1 w-8" />
          WHM
        </span>
        <span className="2xl:text-xl lg:text-sm text-lg bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={NginxIcon} alt="Nginx" loading="lazy" className="inline-block me-1 w-8" />
          Nginx
        </span>
    </div>
    </motion.div>
</div>
    
  );
};

export default OurTechnology;
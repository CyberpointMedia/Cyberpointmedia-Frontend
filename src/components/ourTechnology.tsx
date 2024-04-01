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

const OurTechnology = () => {
  return (
    <div>
      {/* mobile app technology start */}
    <div className="flex flex-col md:flex-row items-center border-b border-[#DAD2C7] py-8 gap-6">
        <h2 className="tehcnology_name text-5xl text-[#878787] md:w-1/4 w-full text-center sm:text-left aeonik-trial-font">Mobile App</h2>
        <div className="gap-3 flex flex-col md:w-3/4 sm:flex-row w-full flex-wrap items-center">
            <span className="text-xl bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
              <Image src={AndroidIcon} alt="Android" className="inline-block me-1 w-8" />
              Android
            </span>
            <span className="text-xl bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
              <Image src={ReactIcon} alt="React Native" className="inline-block me-1 w-8" />
              React Native
            </span>
            <span className="text-xl bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
              <Image src={AppleIcon} alt="Swift" className="inline-block me-1 w-8" />
              Swift
            </span>
            <span className="text-xl bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
              <Image src={ObkectCIcon} alt="Objective C" className="inline-block me-1 w-8" />
              Objective C
            </span>
            <span className="text-xl bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
              <Image src={KotlinIcon} alt="Kotlin" className="inline-block me-1 w-8" />
              Kotlin
            </span>
            <span className="text-xl bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
              <Image src={XamarinIcon} alt="Xamarin" className="inline-block me-1 w-8" />
              Xamarin
            </span>
            <span className="text-xl bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
              <Image src={FlutterIcon} alt="Flutter" className="inline-block me-1 w-8" />
              Flutter
            </span>
        </div>
    </div>

    {/* front-end technology start */}
    <div className="flex flex-col md:flex-row items-center border-b border-[#DAD2C7] py-8 gap-6">
    <h2 className="tehcnology_name text-5xl text-[#878787] md:w-1/4 w-full text-center sm:text-left aeonik-trial-font">Front-end </h2>
    <div className="gap-3 flex flex-col md:w-3/4 sm:flex-row w-full flex-wrap items-center">
        <span className="text-xl bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={HtmlIcon} alt="HTML5" className="inline-block me-1 w-8" />
          HTML5
        </span>
        <span className="text-xl bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={JavscriptIcon} alt="JavaScript" className="inline-block me-1 w-8" />
          JavaScript
        </span>
        <span className="text-xl bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={CssIcon} alt="CSS3" className="inline-block me-1 w-8" />
          CSS3
        </span>
        <span className="text-xl bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={TypescriptlIcon} alt="TypeScript" className="inline-block me-1 w-8" />
          TypeScript
        </span>
        <span className="text-xl bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={ReactIcon} alt="React" className="inline-block me-1 w-8" />
          React
        </span>
        <span className="text-xl bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={AngularIcon} alt="Angular" className="inline-block me-1 w-8" />
          Angular
        </span>
        <span className="text-xl bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={VueIcon} alt="Vue" className="inline-block me-1 w-8" />
          Vue
        </span>
    </div>
    </div>

    {/* back-end technology start */}
    <div className="flex flex-col md:flex-row items-center border-b border-[#DAD2C7] py-8 gap-6">
    <h2 className="tehcnology_name text-5xl text-[#878787] md:w-1/4 w-full text-center sm:text-left aeonik-trial-font">Back-end</h2>
    <div className="gap-3 flex flex-col md:w-3/4 sm:flex-row w-full flex-wrap items-center">
        <span className="text-xl bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={NodeIcon} alt="Node" className="inline-block me-1 w-8" />
          Node
        </span>
        <span className="text-xl bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={DotnetIcon} alt=".NET" className="inline-block me-1 w-8" />
          .NET
        </span>
        <span className="text-xl bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={ChashIcon} alt="C#" className="inline-block me-1 w-8" />
          C#
        </span>
        <span className="text-xl bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={PhpIcon} alt="PHP" className="inline-block me-1 w-8" />
          PHP
        </span>
        <span className="text-xl bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={JavaIcon} alt="Java" className="inline-block me-1 w-8" />
          Java
        </span>
        <span className="text-xl bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={ScalaIcon} alt="Scala" className="inline-block me-1 w-8" />
          Scala
        </span>
        <span className="text-xl bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={PythonIcon} alt="Python" className="inline-block me-1 w-8" />
          Python
        </span>
    </div>
    </div>

    {/* database technology start */}
    <div className="flex flex-col md:flex-row items-center border-b border-[#DAD2C7] py-8 gap-6">
    <h2 className="tehcnology_name text-5xl text-[#878787] md:w-1/4 w-full text-center sm:text-left aeonik-trial-font">Database</h2>
    <div className="gap-3 flex flex-col md:w-3/4 sm:flex-row w-full flex-wrap items-center">
        <span className="text-xl bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={MongodbIcon} alt="MongoDB" className="inline-block me-1 w-8" />
          MongoDB
        </span>
        <span className="text-xl bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={MysqlIcon} alt="MySQL" className="inline-block me-1 w-8" />
          MySQL
        </span>
        <span className="text-xl bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={PostgressIcon} alt="PostgreSQL" className="inline-block me-1 w-8" />
          PostgreSQL
        </span>
        <span className="text-xl bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={ReditsIcon} alt="Redis" className="inline-block me-1 w-8" />
          Redis
        </span>
        <span className="text-xl bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={FirebaseIcon} alt="Firebase" className="inline-block me-1 w-8" />
          Firebase
        </span>
        <span className="text-xl bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={ElasticsearchIcon} alt="Elasticsearch" className="inline-block me-1 w-8" />
          Elasticsearch
        </span>
    </div>
    </div>

    {/* server technology start */}
    <div className="flex flex-col  md:flex-row items-center pt-8 gap-6">
    <h2 className="tehcnology_name text-5xl text-[#878787] md:w-1/4 w-full text-center sm:text-left aeonik-trial-font">Server</h2>
    <div className="gap-3 flex flex-col md:w-3/4 sm:flex-row w-full flex-wrap items-center">
        <span className="text-xl bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={AwsIcon} alt="AWS" className="inline-block me-1 w-8" />
          AWS
        </span>
        <span className="text-xl bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={GitlabIcon} alt="GitLab" className="inline-block me-1 w-8" />
          GitLab
        </span>
        <span className="text-xl bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={JenkinsIcon} alt="Jenkins" className="inline-block me-1 w-8" />
          Jenkins
        </span>
        <span className="text-xl bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={WhmIcon} alt="WHM" className="inline-block me-1 w-8" />
          WHM
        </span>
        <span className="text-xl bg-[#E7E2DC] rounded-full py-1 px-3 pe-4 flex items-center">
          <Image src={NginxIcon} alt="Nginx" className="inline-block me-1 w-8" />
          Nginx
        </span>
    </div>
    </div>
</div>
    
  );
};

export default OurTechnology;
"use client"
import BusmeFilterCard from '@/app/components/BusmeFilterCard'; 
import React, { useState } from 'react';
import {IoAnalyticsSharp, IoGitCompareSharp } from "react-icons/io5";


  export default function RoutesPage() {
    return (
      <div className="flex flex-col h-full w-full gap-y-5">
        <div className="flex flex-row w-full font-poppins gap-x-5">
          <div className='w-full md:w-1/2 lg:w-1/4 h-full'>
            <BusmeFilterCard
              title="Total de rutas"
              amount={2000}
              isActive={true}
              icon={<IoGitCompareSharp />}
            />
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4 h-full'>
            <BusmeFilterCard
              title="Total de rutas"
              amount={2000}
              isActive={true}
              icon={<IoGitCompareSharp />}
            />
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4 h-full'>
            <BusmeFilterCard
              title="Total de rutas"
              amount={2000}
              isActive={true}
              icon={<IoGitCompareSharp />}
            />
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4 h-full'>
            <BusmeFilterCard
              title="Total de rutas"
              amount={2000}
              isActive={true}
              icon={<IoGitCompareSharp />}
            />
          </div>
        </div>
        <div className='w-full bg-complementary-800 '>
          BUSCADOR
        </div>
      </div>
    );
  }
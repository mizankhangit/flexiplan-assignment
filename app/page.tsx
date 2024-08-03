"use client";

import { useState } from "react";
import selecetedInitial from "@/data/selected.json";
import plans from "@/data/plans.json";
import eligibilityDataRaw from "@/data/eligibility.json";
import SelectedPlan from "./components/selected-plan";
import Validity from "./components/validity";
import InternetRegular from "./components/internet-regular";
import Internet4G from "./components/internet-4g";
import Minutes from "./components/minutes";
import Bioscope from "./components/bioscope";
import SMS from "./components/sms";
import MissedCallAlert from "./components/missed-call-alert";

export default function Home() {
  const [seleceted, setSelected] = useState(selecetedInitial);
  const eligibilityData: any = eligibilityDataRaw;
  const eligibility = eligibilityData[`day_${seleceted.longevity}`];

  const handleSelect = (key: any, data: any) => {
    setSelected((prev) => ({ ...prev, [key]: data }));
  };

  const handleSelectValidity = (day: any) => {
    setSelected((prev) => {
      const newEligibility = eligibilityData[`day_${day}`];

      const newData = newEligibility.data.some((d: any) => d === prev.data)
        ? prev.data
        : newEligibility?.data[0];
      const new4gData = newEligibility.fourg.some((d: any) => d === prev.fourg)
        ? prev.fourg
        : newEligibility.fourg[0];
      const newBioscope = newEligibility.bioscope.some(
        (d: any) => d === prev.bioscope
      )
        ? prev.bioscope
        : newEligibility.bioscope[0];
      const newVoice = newEligibility.voice.some((d: any) => d === prev.voice)
        ? prev.voice
        : newEligibility.voice[0];
      const newSms = newEligibility.sms.some((d: any) => d === prev.sms)
        ? prev.sms
        : newEligibility.sms[0];

      return {
        ...prev,
        longevity: day,
        data: newData,
        fourg: new4gData,
        bioscope: newBioscope,
        voice: newVoice,
        sms: newSms,
      };
    });
  };
  return (
    <>
      <header>
        <nav className="py-[20px] border-b">
          <div className="container">
            <div className="text-center font-bold text-lg">Flexiplan</div>
          </div>
        </nav>
      </header>
      <div className="max-w-[1200px] mx-auto px-[30px] py-[30px]">
        <div className="grid md:grid-cols-[2fr_1fr] gap-8 md:gap-[60px]">
          <div>
            <h1 className="text-[24px] font-semibold">Flexiplan</h1>
            <p>
              Make your own plan and enjoy great savings! Only for GP Customers
            </p>
            <div className="md:py-6">
              <Validity
                seleceted={seleceted}
                plans={plans}
                handleSelectValidity={handleSelectValidity}
              />
              <InternetRegular
                seleceted={seleceted}
                plans={plans}
                eligibility={eligibility}
                handleSelect={handleSelect}
              />
              <Internet4G
                seleceted={seleceted}
                plans={plans}
                eligibility={eligibility}
                handleSelect={handleSelect}
              />
              <Minutes
                seleceted={seleceted}
                plans={plans}
                eligibility={eligibility}
                handleSelect={handleSelect}
              />
              <Bioscope
                seleceted={seleceted}
                plans={plans}
                eligibility={eligibility}
                handleSelect={handleSelect}
              />
              <SMS
                seleceted={seleceted}
                plans={plans}
                eligibility={eligibility}
                handleSelect={handleSelect}
              />
              <MissedCallAlert
                seleceted={seleceted}
                handleSelect={handleSelect}
              />
            </div>
          </div>

          <SelectedPlan seleceted={seleceted} />
        </div>
      </div>
    </>
  );
}

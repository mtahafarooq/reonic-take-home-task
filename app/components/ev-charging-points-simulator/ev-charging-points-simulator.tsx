"use client";

import { useState } from "react";
import InputForm from "@components/input-form/input-form";
import SimulationResults from "@/components/simulation-result/simulation-result";
import { SimulationData } from "@/types/simulation-data/simulation-data";
import { ChargeInputPayload } from "@/types/charge-input-payload/charge-input-payload";
import { calculateSimulationResults } from "@/utils/simulation-results-calculator";

export default function EvChargingPointsSimulator() {
  const [simulationData, setSimulationData] = useState<SimulationData>({
    totalPower: 0,
    totalEnergy: 0,
  });

  const handleFormSubmit = (payload: ChargeInputPayload) => {
    const results = calculateSimulationResults(payload);

    setSimulationData({
      ...results,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-lg">
        <InputForm onSubmit={handleFormSubmit} />
        <SimulationResults data={simulationData} />
      </div>
    </div>
  );
}

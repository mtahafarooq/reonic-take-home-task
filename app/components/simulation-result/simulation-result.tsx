import { SimulationData } from "@/types/simulation-data/simulation-data";
import React from "react";

type SimulationResultProps = {
  data: SimulationData;
};

const SimulationResult: React.FC<SimulationResultProps> = ({ data }) => {
  const { totalPower, totalEnergy } = data;
  return (
    <>
      {totalPower && totalEnergy ? (
        <div className="p-4 bg-gray-100 rounded shadow-md mt-4">
          <h2 className="text-2xl font-bold mb-4">Simulation Results</h2>
          <p>Total Energy Charged: {totalEnergy.toFixed(2)} kWh</p>
          <p>Max Power Demand: {totalPower} kW</p>
        </div>
      ) : null}
    </>
  );
};

export default SimulationResult;

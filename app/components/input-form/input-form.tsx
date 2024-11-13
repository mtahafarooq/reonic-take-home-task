import { ChargeInputPayload } from "@/types/charge-input-payload/charge-input-payload";
import { ChargePoint } from "@/types/charge-point/charge-point";
import React, { useState } from "react";

type InputFormProps = {
  onSubmit: (payload: ChargeInputPayload) => void;
};

const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
  const [chargePoints, setChargePoints] = useState<ChargePoint[]>([
    { count: 1, power: 11 },
  ]);
  const [arrivalMultiplier, setArrivalMultiplier] = useState(100);
  const [consumption, setConsumption] = useState(18);

  const addChargePoint = () => {
    setChargePoints([...chargePoints, { count: 1, power: 11 }]);
  };

  const removeChargePoint = (index: number) => {
    const updatedPoints = chargePoints.filter((_, i) => i !== index);
    setChargePoints(updatedPoints);
  };

  const updateChargePoint = (
    index: number,
    key: "count" | "power",
    value: number
  ) => {
    const updatedPoints = [...chargePoints];
    updatedPoints[index][key] = value;
    setChargePoints(updatedPoints);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ chargePoints, arrivalMultiplier, consumption });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">EV Charging Configurator</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Charge Points</h3>
        {chargePoints.map((point, index) => (
          <div key={index} className="flex gap-4 items-center mb-4">
            <input
              type="number"
              value={point.count}
              min={1}
              onChange={(e) =>
                updateChargePoint(index, "count", Number(e.target.value))
              }
              className="w-20 p-2 border rounded"
              placeholder="Count"
            />
            <select
              value={point.power}
              onChange={(e) =>
                updateChargePoint(index, "power", Number(e.target.value))
              }
              className="w-32 p-2 border rounded"
            >
              <option value={11}>11 kW</option>
              <option value={22}>22 kW</option>
              <option value={50}>50 kW</option>
            </select>
            {chargePoints.length > 1 && (
              <button
                type="button"
                onClick={() => removeChargePoint(index)}
                className="text-red-500"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addChargePoint}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Charge Point
        </button>
      </div>
      <div className="mb-4">
        <label>Arrival Multiplier (20-200%):</label>
        <input
          type="range"
          min="20"
          max="200"
          value={arrivalMultiplier}
          onChange={(e) => setArrivalMultiplier(Number(e.target.value))}
          className="w-full"
        />
        <span>{arrivalMultiplier}%</span>
      </div>
      <div className="mb-4">
        <label>Consumption per Car (kWh):</label>
        <input
          type="number"
          value={consumption}
          onChange={(e) => setConsumption(Number(e.target.value))}
          className="w-full p-2 border rounded"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Simulate
      </button>
    </form>
  );
};

export default InputForm;
